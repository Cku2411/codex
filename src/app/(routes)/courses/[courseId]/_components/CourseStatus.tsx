import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Courses } from "../../_components/CourseList";
import { useEffect, useState } from "react";

type Props = { courseDetail: Courses | undefined };

const CourseStatus = ({ courseDetail }: Props) => {
  const [counts, setCounts] = useState<{
    totalExce: number;
    totalXp: number;
  }>({ totalExce: 0, totalXp: 0 });
  // calculate exercise

  useEffect(() => {
    courseDetail && getCounts();
  }, [courseDetail]);

  const getCounts = () => {
    let totalExercise = 0;
    let totalXp = 0;

    courseDetail?.chapters?.forEach((chapter) => {
      if (chapter?.exercises?.length) {
        totalExercise += chapter?.exercises?.length;
        chapter?.exercises?.forEach((exercise) => (totalXp += exercise.xp));
      }
    });

    setCounts({
      totalExce: totalExercise,
      totalXp: totalXp,
    });
  };
  return (
    <div className="p-4 border-3 rounded-2xl w-full">
      <h2 className="text-3xl">Course Progress</h2>
      <div className="flex items-center gap-5 mt-4">
        <Image src={"/book.gif"} width={50} height={50} alt="book" />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            Exercises{" "}
            <span className="text-gray-400">1/{counts.totalExce}</span>
          </h2>
          <Progress value={37} className="mt-2" />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <Image src={"/star2.gif"} width={50} height={50} alt="book" />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            XP Earned <span className="text-gray-400">1/{counts.totalXp}</span>
          </h2>
          <Progress value={37} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
