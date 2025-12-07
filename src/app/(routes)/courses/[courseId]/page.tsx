"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseDetailBanner from "./_components/CourseDetailBanner";
import { getCourseDetail } from "@/actions/courses.actions";
import { Courses } from "../_components/CourseList";
import CourseChapter from "./_components/CourseChapter";
import CourseStatus from "./_components/CourseStatus";
import UpgradeToPro from "../../dashboard/_components/UpgradeToPro";
import CommunityHelpSection from "./_components/ComunityHelpSection";
import { useUser } from "@clerk/nextjs";

type Props = {};

const CourseDetail = (props: Props) => {
  // use tanstack usequery
  const [isLoading, setIsLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [courseDetails, setCourseDetails] = useState<Courses | undefined>(
    undefined
  );

  const { courseId } = useParams();
  console.log({ courseId });
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const getCourseDetailsFromdb = async (courseId: number, userId: string) => {
    setIsLoading(true);
    //   await new Promise((res) => setTimeout(res, 1000));
    const result = await getCourseDetail(courseId, userId);
    console.log({ result });

    if (result.status == 200) {
      setCourseDetails(result.course);
    }
    if (result.isEnroll) {
      setIsEnrolled(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoaded) return; // chờ Clerk hydrate xong
    if (!user?.id) {
      router.push("/signin");
      return;
    }
    if (courseId) {
      getCourseDetailsFromdb(Number(courseId), user.id);
    }
  }, [courseId, isLoaded, user?.id, router, isEnrolled]);

  // phần render
  if (!isLoaded) {
    return <div>Loading user...</div>;
  }
  if (!user?.id) {
    return <div>No user</div>;
  }

  return (
    <div className="font-game">
      <CourseDetailBanner
        loading={isLoading}
        courseDetail={courseDetails}
        refreshData={() => getCourseDetailsFromdb(Number(courseId), user.id)}
        isEnrolled={isEnrolled}
        setIsEnrolled={setIsEnrolled}
      />
      <div className="grid grid-cols-4 p-10 md:px-24 lg:px-36 gap-7">
        <div className="col-span-3">
          <CourseChapter loading={isLoading} courseDetail={courseDetails} />
        </div>
        <div>
          <CourseStatus courseDetail={courseDetails} />
          <UpgradeToPro />
          <CommunityHelpSection />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
