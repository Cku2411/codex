"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "./ToggleTheme";
import Navbar from "./Navbar";
import { useParams } from "next/navigation";
import { getAllCourses } from "@/actions/courses.actions";

type Props = {};

const Header = (props: Props) => {
  const [courses, setCourses] = useState();
  const { user } = useUser();
  const { exerciseslug } = useParams();

  const getCourses = async () => {
    const result = await getAllCourses();
    console.log({ result });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          <h2 className="text-5xl font-bold">CodeBox</h2>
        </div>
      </Link>
      {/* Navbar */}
      {!exerciseslug ? (
        <Navbar />
      ) : (
        <>
          <h2 className="text-4xl">
            {exerciseslug.toString().replace("-", " ").toUpperCase()}
          </h2>
        </>
      )}

      {/* signUp butotn */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {!user ? (
          <Link href={"/sign-in"}>
            <Button variant={"pixel"}>Signup</Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link href={"/dashboard"}>
              <Button variant={"pixel"}>Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
