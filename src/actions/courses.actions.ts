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
