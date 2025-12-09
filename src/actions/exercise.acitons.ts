"use server";

import db from "@/lib/prisma";

export const getExerciseDetail = async (exerciseslug: string | undefined) => {
  if (!exerciseslug) {
    return { status: 404, message: "No exercise found!" };
  }
  try {
    const exercise = await db.exercise.findUnique({
      where: {
        slug: exerciseslug,
      },
      include: {
        exerciseContent: true,
      },
    });

    if (!exercise) {
      return { status: 404, message: "No exercise found!" };
    }

    return { status: 200, message: "exercise found", exercise: exercise };
  } catch (error) {
    console.log({ error });

    return {
      status: 500,
      message: "something was wrong to fetch exercise",
    };
  }
};
