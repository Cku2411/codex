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
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "JavaScript",
    des: "Learn concepts of JavaScript including variables, functions, and DOM manipulation.",
    path: "/courses/1/detail",
  },
  {
    id: 2,
    name: "TypeScript",
    des: "Understand TypeScript basics, typing system, and how it enhances JavaScript projects.",
    path: "/courses/2/detail",
  },
  {
    id: 3,
    name: "React",
    des: "Build interactive UIs with React, hooks, and component-based architecture.",
    path: "/courses/3/detail",
  },
  {
    id: 4,
    name: "Next.js",
    des: "Learn server-side rendering, routing, and API integration with Next.js.",
    path: "/courses/4/detail",
  },
  {
    id: 5,
    name: "Node.js",
    des: "Explore backend development with Node.js, Express, and RESTful APIs.",
    path: "/courses/5/detail",
  },
  {
    id: 6,
    name: "HTML & CSS",
    des: "Master the fundamentals of web structure and styling with HTML and CSS.",
    path: "/courses/6/detail",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    des: "Learn utility-first CSS with Tailwind to build modern responsive designs.",
    path: "/courses/7/detail",
  },
  {
    id: 8,
    name: "MongoDB",
    des: "Understand NoSQL databases, collections, and queries with MongoDB.",
    path: "/courses/8/detail",
  },
  {
    id: 9,
    name: "Git & GitHub",
    des: "Learn version control, branching, and collaboration using Git and GitHub.",
    path: "/courses/9/detail",
  },
];

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-2xl">
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]  ">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-2 hover:bg-accent rounded-xl cursor-pointer"
                >
                  <h2 className="font-medium text-xl">{course.name}</h2>
                  <p className="text-sm text-gray-500 ">{course.des}</p>
                </div>
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
