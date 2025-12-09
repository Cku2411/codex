"use client";
import "react-splitter-layout/lib/index.css";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { getExerciseDetail } from "@/actions/exercise.acitons";
import { useEffect, useState } from "react";
import { Prisma } from "@/generated/prisma/client";

const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});

type Props = {};
type ExerciseWithContent = Prisma.ExerciseGetPayload<{
  include: { exerciseContent: true };
}>;

const Playground = (props: Props) => {
  const [exercise, setExercise] = useState<ExerciseWithContent>();
  const { exerciseslug } = useParams();

  useEffect(() => {
    const getExercise = async () => {
      const res = await getExerciseDetail(exerciseslug?.toString());
      if (res.status == 200) {
        const exercise = res.exercise;
        setExercise(exercise);
      }
    };

    exerciseslug && getExercise();
  }, [exerciseslug]);

  console.log({ exercise });

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryMinSize={60}>
        <div>Content</div>
        <div>Code editor</div>
      </SplitterLayout>
    </div>
  );
};

export default Playground;
