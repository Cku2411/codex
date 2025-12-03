"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const EnrolledCourses = (props: Props) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2">Your Enrolled Courses</h2>
      {enrolledCourses.length == 0 ? (
        <div className="flex flex-col items-center gap-3 bg-zinc-800 rounded-2xl p-7">
          <Image src={"/book2.gif"} width={90} height={90} alt="book" />
          <h2 className="text-2xl">You dont' have any enrolled courses</h2>
          <Link href={"/courses"}>
            <Button variant={"pixel"} className="text-xl">
              Browser All Courses
            </Button>
          </Link>
        </div>
      ) : (
        "List"
      )}
    </div>
  );
};

export default EnrolledCourses;
