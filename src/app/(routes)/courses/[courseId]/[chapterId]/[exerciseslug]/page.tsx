"use client";
import "react-splitter-layout/lib/index.css";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { getExerciseDetail } from "@/actions/exercise.acitons";
import { useEffect, useState } from "react";
import { Prisma } from "@/generated/prisma/client";
import ContentSection from "./_components/ContentSection";

const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});

type Props = {};
export type ExerciseWithContent = Prisma.ExerciseGetPayload<{
  include: { exerciseContent: true };
}>;

const Playground = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [exerciseData, setExerciseData] = useState<ExerciseWithContent>();
  const { exerciseslug, chapterId, courseId } = useParams();
  console.log({ exerciseslug, chapterId, courseId });

  useEffect(() => {
    const getExercise = async () => {
      const res = await getExerciseDetail(exerciseslug?.toString());
      if (res.status == 200) {
        const exercise = res.exercise;
        setExerciseData(exercise);
      }
    };

    exerciseslug && getExercise();
  }, [exerciseslug]);

  console.log({ exerciseData });

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryMinSize={60}>
        <div>
          <ContentSection exerciseData={exerciseData} isLoading={isLoading} />
        </div>
        <div>Code editor</div>
      </SplitterLayout>
    </div>
  );
};

export default Playground;
