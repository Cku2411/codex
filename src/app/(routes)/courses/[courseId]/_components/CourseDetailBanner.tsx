"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Courses } from "../../_components/CourseList";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { enRollUserToCourse } from "@/actions/enroll.action";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  loading: boolean;
  courseDetail: Courses | undefined;
  refreshData: () => void;
  isEnrolled: boolean;
  setIsEnrolled: (enroll: boolean) => void;
};

const CourseDetailBanner = ({
  loading,
  courseDetail,
  refreshData,
  isEnrolled,
  setIsEnrolled,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { user } = useUser();

  // if (!user?.id || user?.id == undefined) {
  //   console.log(`No user found`);
  //   router.push("/signin");
  // }

  // PROBLEM: Check user qua nhieu

  const enrolledCourse = async () => {
    setIsLoading(true);
    if (!user?.id || !courseDetail?.courseId) {
      console.log("Missing user or course");
      toast.error("Something was wrong!");
      return;
    }

    const res = await enRollUserToCourse(user?.id, courseDetail?.courseId);
    setIsLoading(false);

    if (res.status == 201) {
      toast.info(res.message);
    }

    if (res.status == 200) {
      toast.success(res.message);
      setIsEnrolled(true);
    }
  };

  return (
    <div>
      {loading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl" />
      ) : courseDetail ? (
        <div className="relative">
          <Image
            src={courseDetail?.bannerImage}
            alt="course banne"
            height={1400}
            width={300}
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute top-0 pt-24 p-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white-50/50 h-full">
            <h2 className="text-6xl">{courseDetail.title}</h2>
            <p className="text-3xl">{courseDetail.desc}</p>
            {isEnrolled ? (
              <Button variant={"pixel"} className="text-2xl" size={"lg"}>
                Continue Learning ...
              </Button>
            ) : (
              <Button
                variant={"pixel"}
                className="text-2xl"
                size={"lg"}
                disabled={isLoading}
                onClick={enrolledCourse}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" /> Enrolling...
                  </>
                ) : (
                  "Enroll now"
                )}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] bg-zinc-800 flex items-center justify-center">
          <h2 className="text-2xl">No course found!</h2>
        </div>
      )}
    </div>
  );
};

export default CourseDetailBanner;
