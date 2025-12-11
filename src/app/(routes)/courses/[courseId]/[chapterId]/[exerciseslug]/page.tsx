"use client";
import "react-splitter-layout/lib/index.css";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { getExerciseDetail } from "@/actions/exercise.acitons";
import { useEffect, useState } from "react";
import { Prisma } from "@/generated/prisma/client";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  console.log({ exerciseData });

  return (
    <div className="border-t-4 ">
      <SplitterLayout percentage primaryMinSize={40} secondaryMinSize={60}>
        <div>
          <ContentSection exerciseData={exerciseData} isLoading={isLoading} />
        </div>
        <div>
          <CodeEditor />
        </div>
      </SplitterLayout>

      <div className="fixed bottom-0 w-full bg-zinc-800 p-4 flex justify-between items-center">
        <Button variant={"pixel"} className="text-xl">
          Previous
        </Button>

        <div className="flex gap-2 items-center">
          <Image src={"/star2.gif"} alt="starXp" width={40} height={40} />
          <h2 className="font-game text-xl">
            You can earn <span className="text-2xl">{exerciseData?.xp}</span> XP{" "}
          </h2>
        </div>
        <Button variant={"pixel"} className="text-xl">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Playground;
