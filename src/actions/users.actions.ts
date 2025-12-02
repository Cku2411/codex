"use server";

import db from "@/lib/prisma";

export const createNewUser = async ({
  clerkId,
  name,
  email,
}: {
  clerkId: string;
  name: string;
  email: string;
}) => {
  try {
    if (!clerkId || !name || !email) {
      return { status: 400, message: "Missing required fields" };
    }

    let userDb = await db.user.findUnique({
      where: { clerkId },
    });

    if (!userDb) {
      userDb = await db.user.create({
        data: {
          clerkId,
          name,
          email,
          points: 0,
        },
      });
      return { status: 200, message: "User created", data: userDb };
    }

    return { status: 200, message: "User already exists", data: userDb };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to create user" };
  }
};
