"use server";

import db from "@/lib/prisma";

export const enRollUserToCourse = async (userId: string, courseId: number) => {
  try {
    const existingEnroll = await db.enrollment.findFirst({
      where: {
        userId,
        courseId,
      },
    });

    if (existingEnroll) {
      return { status: 201, message: "User already enrolled" };
    }

    // tạo mới enrollment
    await db.enrollment.create({
      data: {
        userId,
        courseId,
        xpEarned: 0,
      },
    });

    return { status: 200, message: "Enrolled successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to get all courses" };
  }
};
