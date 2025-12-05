"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseDetailBanner from "./_components/CourseDetailBanner";
import { getCourseDetail } from "@/actions/courses.actions";
import { Courses } from "../_components/CourseList";
import CourseChapter from "./_components/CourseChapter";

type Props = {};

const CourseDetail = (props: Props) => {
  // use tanstack usequery
  const [isLoading, setIsLoading] = useState(false);
  const [courseDetails, setCourseDetails] = useState<Courses | undefined>(
    undefined
  );
  const { courseId } = useParams();
  console.log({ courseId });

  useEffect(() => {
    const getCourseDetailsFromdb = async () => {
      setIsLoading(true);
      //   await new Promise((res) => setTimeout(res, 1000));
      const result = await getCourseDetail(Number(courseId));
      console.log({ result });

      if (result.status == 200) {
        setCourseDetails(result.course);
      }

      setIsLoading(false);
    };

    courseId && getCourseDetailsFromdb();
  }, [courseId]);

  return (
    <div className="font-game">
      <CourseDetailBanner loading={isLoading} courseDetail={courseDetails} />
      <div className="grid grid-cols-4 p-10 md:px-24 lg:px-36 gap-7">
        <div className="col-span-3">
          <CourseChapter loading={isLoading} courseDetail={courseDetails} />
        </div>
        <div>Second</div>
      </div>
    </div>
  );
};

export default CourseDetail;
