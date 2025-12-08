"use server";

import db from "@/lib/prisma";

export const getAllCourses = async () => {
  try {
    const courses = await db.courses.findMany({
      include: {
        chapters: true,
        enrollments: true,
      },
    });

    if (!courses || courses.length === 0) {
      return { status: 200, message: "No courses found", courses: [] };
    }

    return { status: 200, courses, message: "Courses fetched successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to get all courses" };
  }
};

// 8d0e350c-28bf-4210-b556-714bd95bfac9 b5cee9ab-c139-4f50-a08a-8d2057574c3b 11e745de-a3ab-4b7a-982b-98ce2de20308

// 03410368-6a45-4131-8180-f9b030acf6db
// 32f9225d-94b3-4159-9342-3cf640bf1164
// 103

// user_36IDYwRpF7hz6frRpvAnapUIHju
