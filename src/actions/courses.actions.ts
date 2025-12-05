"use server";

import db from "@/lib/prisma";

export const getAllCourses = async () => {
  try {
    const courses = await db.courses.findMany();

    if (!courses || courses.length === 0) {
      return { status: 200, message: "No courses found", courses: [] };
    }

    return { status: 200, courses, message: "Courses fetched successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to get all courses" };
  }
};

export const getCourseDetail = async (courseId: number) => {
  try {
    const courseDetail = await db.courses.findUnique({
      where: { courseId: courseId },
      include: { chapters: { include: { exercises: true } } },
    });

    if (!courseDetail) {
      return { status: 404, message: "No course found" };
    }

    return {
      status: 200,
      course: courseDetail,
      message: "Course fetched successfully",
    };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to get course details" };
  }
};
