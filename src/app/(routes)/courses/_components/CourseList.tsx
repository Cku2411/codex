"use client";
import { getAllCourses } from "@/actions/courses.actions";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Link from "next/link";

export type Courses = {
  level: string | null;
  id: string;
  courseId: number;
  title: string;
  desc: string;
  bannerImage: string;
  tags: string | null;
  chapters?: {
    id: string;
    courseId: number;
    desc: string;
    name: string;
    chapterId: number;
    exercises?: {
      id: string;
      name: string;
      chapterId: string;
      slug: string;
      xp: number;
      difficulty: string;
    }[];
  }[];
  enrollments:
    | {
        id: string;
        courseId: number;
        userId: string;
        enrolledAt: Date;
        xpEarned: number;
      }[]
    | undefined;
  completedExercises?: {
    courseId: number;
    userId: string;
    chapterId: string;
    exerciseId: string;
  }[];
};

const CourseList = () => {
  const [coursesLists, setCoursesLists] = useState<Courses[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllCoursesFromDb = async () => {
      setLoading(true);
      const res = await getAllCourses();
      if (res.status == 200) {
        const courses = res.courses;
        console.log({ courses });
        setCoursesLists(courses);
        setLoading(false);
      }
    };

    getAllCoursesFromDb();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {coursesLists?.map((course) => (
        <Link href={`/courses/${course.courseId}`} key={course.id}>
          <div className="border-4 rounded-xl hover:bg-zinc-900 cursor-pointer">
            <Image
              src={course.bannerImage}
              width={400}
              height={400}
              alt={course.tags || ""}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col">
              <div className="mb-4 min-h-[100px] ">
                <h2 className="text-2xl ">{course.title}</h2>
                <p className="text-xl text-gray-500 line-clamp-2">
                  {course.desc}
                </p>
              </div>

              <h2 className="bg-zinc-800 gap-2 p-2 items-center inline-flex px-4 rounded-2xl mt-auto">
                <ChartNoAxesColumnIncreasingIcon className="size-4" />
                {course.level}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
