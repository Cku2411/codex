import { Skeleton } from "@/components/ui/skeleton";
import { Courses } from "../../_components/CourseList";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = { loading: boolean; courseDetail: Courses | undefined };

const CourseDetailBanner = ({ loading, courseDetail }: Props) => {
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
            <Link href={"/"}>
              <Button variant={"pixel"} className="text-2xl" size={"lg"}>
                Enroll now
              </Button>
            </Link>
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
