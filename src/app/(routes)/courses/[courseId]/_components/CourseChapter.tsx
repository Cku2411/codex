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

type Props = { loading: boolean; courseDetail: Courses | undefined };

const CourseChapter = ({ loading, courseDetail }: Props) => {
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
                          <TooltipCodebox content="Please Enroll first">
                            <Button variant={"pixelDisable"}>
                              {excercise.xp}
                            </Button>
                          </TooltipCodebox>
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
