import React from "react";
import { Courses } from "../../_components/CourseList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import TooltipCodebox from "@/components/TooltipCodebox";
import Link from "next/link";

type Props = { loading: boolean; courseDetail: Courses | undefined };

const CourseChapter = ({ loading, courseDetail }: Props) => {
  const enableExerciser = (chapterIndex: number, exerciseIndex: number) => {
    const completed = courseDetail?.completedExercises;
    const chapters = courseDetail?.chapters;

    // Trường hợp 1: Chưa có bài nào hoàn thành → enable bài đầu tiên của chapter đầu tiên
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    // Trường hợp 2: Chapter đầu tiên → enable các bài tập liên tiếp từ bài đầu
    if (chapterIndex === 0) {
      // Tìm bài tập cuối cùng đã completed trong chapter 0
      const lastCompletedInChapter0 = completed
        .filter((ex) => ex.chapterId === chapters?.[0]?.id)
        .sort((a, b) => {
          // Sort theo thứ tự exercise trong chapter
          const aIdx =
            chapters?.[0]?.exercises?.findIndex((e) => e.id === a.exerciseId) ??
            0;
          const bIdx =
            chapters?.[0]?.exercises?.findIndex((e) => e.id === b.exerciseId) ??
            0;
          return aIdx - bIdx;
        });

      if (lastCompletedInChapter0.length === 0) {
        // Chưa completed bài nào trong chapter 0 → chỉ enable bài đầu
        return exerciseIndex === 0;
      }

      // Bài tập được enable nếu là bài tiếp theo sau bài cuối cùng completed
      return exerciseIndex <= lastCompletedInChapter0.length;
    }

    // Trường hợp 3: Chapter sau (chapterIndex > 0)
    const previousChapter = chapters?.[chapterIndex - 1];
    const currentChapter = chapters?.[chapterIndex];

    if (!previousChapter || !currentChapter) return false;

    // Kiểm tra: tất cả exercise trong chapter trước đã completed chưa?
    const allPreviousChapterCompleted = previousChapter.exercises?.every(
      (exercise) =>
        completed.some(
          (comp) =>
            comp.chapterId === previousChapter.id &&
            comp.exerciseId === exercise.id
        )
    );

    // Nếu tất cả chapter trước completed → enable bài đầu tiên của chapter hiện tại
    if (allPreviousChapterCompleted) {
      return exerciseIndex === 0;
    }

    // Nếu chapter trước chưa completed hết → không enable
    return false;
  };

  const isExerciseCompleted = (chapterId: string, excerciseId: string) => {
    const completedChapters = courseDetail?.completedExercises;
    const completedChapter = completedChapters?.find(
      (item) => item.chapterId == chapterId && item.exerciseId == excerciseId
    );

    return completedChapter ? true : false;
  };

  return (
    <div>
      {loading ? (
        <div className="gap-5 flex flex-col">
          <Skeleton className="w-full h-[100px] rounded-xl" />
          <Skeleton className="w-full h-[100px] rounded-xl" />
        </div>
      ) : courseDetail?.chapters ? (
        <div className="p-5 border-3 rounded-2xl">
          {courseDetail?.chapters?.map((chapter, chapterIndex) => {
            return (
              <Accordion type="single" key={chapterIndex} collapsible>
                <AccordionItem value={`${chapter.chapterId}`}>
                  <AccordionTrigger className="text-2xl hover:bg-zinc-800 p-3">
                    <div className="flex gap-10 items-center justify-center">
                      <h2 className="size-12 bg-zinc-700 flex items-center justify-center rounded-full hover:non-">
                        {chapterIndex + 1}
                      </h2>
                      <h2>{chapter.name}</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg p-3">
                    <div className="p-7 bg-zinc-900 rounded-xl">
                      {chapter.exercises?.map((excercise, ExIdx) => (
                        <div
                          key={ExIdx}
                          className="flex items-center justify-between mb-8"
                        >
                          <div className="flex items-center gap-10">
                            <h2 className="text-2xl w-32">
                              Exercise {ExIdx + 1}
                            </h2>
                            <h2 className="text-2xl">{excercise.name}</h2>
                          </div>
                          {enableExerciser(chapterIndex, ExIdx) ? (
                            <Link
                              href={`/courses/${courseDetail.courseId}/${chapter.id}/${excercise.slug}`}
                            >
                              <Button variant={"pixel"}>{excercise.xp}</Button>
                            </Link>
                          ) : isExerciseCompleted(chapter.id, excercise.id) ? (
                            <Button variant={"pixel"} className="bg-green-600">
                              Completed
                            </Button>
                          ) : (
                            <TooltipCodebox content="Please Enroll first">
                              <Button variant={"pixelDisable"}>???</Button>
                            </TooltipCodebox>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      ) : (
        <div className=" flex items-center justify-center text-2xl">
          No Chapter found!
        </div>
      )}
    </div>
  );
};

export default CourseChapter;
