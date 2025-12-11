import { getAllCourses } from "@/actions/courses.actions";
import { Courses } from "@/app/(routes)/courses/_components/CourseList";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Prisma } from "@/generated/prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};
type CourseData = Prisma.CoursesGetPayload<{
  include: { chapters: true; enrollments: true };
}>;

const Navbar = (props: Props) => {
  const [courses, setCourses] = useState<CourseData[]>();

  const getCourses = async () => {
    const result = await getAllCourses();
    if (result.status == 200) {
      setCourses(result.courses);
    }
    console.log({ result });
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-2xl">
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]  ">
              {courses?.map((course) => (
                <Link
                  href={`/courses/${course.courseId}`}
                  key={course.id}
                  className="p-2 hover:bg-accent rounded-xl cursor-pointer"
                >
                  <h2 className="font-medium text-xl">{course.title}</h2>
                  <p className="text-sm text-gray-500 ">{course.desc}</p>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-2xl">
            <Link href={"/about"}>About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-2xl">
            <Link href={"/pricing"}>Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-2xl">
            <Link href={"/contact-us"}>Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
