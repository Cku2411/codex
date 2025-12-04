import Image from "next/image";
import React from "react";
import CourseList from "./_components/CourseList";

type Props = {};

const CoursesPage = (props: Props) => {
  return (
    <div className="font-game relative">
      <div>
        <Image
          src={"/courses-banner2.gif"}
          width={1200}
          height={300}
          alt="courses"
          className="object-cover w-full h-[300px]"
        />
      </div>
      <div className="absolute top-0 h-[300px] pt-24 px-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white-50/50">
        <h2 className="text-6xl">Explore All Courses</h2>
        <p className="text-2xl">
          Explore all courses and learn to increase your skill
        </p>
      </div>

      <div className="mt-8 px-10 md:px-24 lg:px-36">
        <h2 className="text-4xl">All Courses</h2>
        <CourseList />
      </div>
    </div>
  );
};

export default CoursesPage;
