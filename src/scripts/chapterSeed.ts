import { default as prisma } from "@/lib/prisma";

async function main() {
  // Seed Courses trước (như bạn đã có)

  // Seed Chapters cho từng Course
  await prisma.courses.update({
    where: { courseId: 101 },
    data: {
      title: "Introduction to Programming with Python",
      desc: "Learn the basics of programming using Python, covering syntax, data types, and simple projects.",
      bannerImage: "/images/python-course.png",
      level: "Beginner",
      tags: "Python, Programming, Basics",
      chapters: {
        create: [
          {
            chapterId: 1,
            name: "Getting Started with Python",
            desc: "Setup environment and write your first Python program.",
            exercises: {
              create: [
                {
                  name: "Install Python",
                  slug: "install-python",
                  xp: 50,
                  difficulty: "Easy",
                },
                {
                  name: "Hello World Program",
                  slug: "hello-world",
                  xp: 50,
                  difficulty: "Easy",
                },
              ],
            },
          },
          {
            chapterId: 2,
            name: "Python Data Types",
            desc: "Learn about strings, numbers, lists, and dictionaries.",
            exercises: {
              create: [
                {
                  name: "List Operations",
                  slug: "list-ops",
                  xp: 70,
                  difficulty: "Medium",
                },
                {
                  name: "Dictionary Practice",
                  slug: "dict-practice",
                  xp: 80,
                  difficulty: "Medium",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.courses.update({
    where: { courseId: 102 },
    data: {
      title: "Web Development Fundamentals",
      desc: "Understand how to build websites using HTML, CSS, and JavaScript.",
      bannerImage: "/images/webdev-course.png",
      level: "Beginner",
      tags: "HTML, CSS, JavaScript, Web",
      chapters: {
        create: [
          {
            chapterId: 1,
            name: "HTML Basics",
            desc: "Structure a webpage using HTML tags.",
            exercises: {
              create: [
                {
                  name: "Build a Homepage",
                  slug: "homepage",
                  xp: 60,
                  difficulty: "Easy",
                },
                {
                  name: "Semantic HTML",
                  slug: "semantic-html",
                  xp: 70,
                  difficulty: "Medium",
                },
              ],
            },
          },
          {
            chapterId: 2,
            name: "CSS Styling",
            desc: "Style your webpage with CSS selectors and properties.",
            exercises: {
              create: [
                {
                  name: "Color and Fonts",
                  slug: "color-fonts",
                  xp: 80,
                  difficulty: "Medium",
                },
                {
                  name: "Flexbox Layout",
                  slug: "flexbox",
                  xp: 100,
                  difficulty: "Hard",
                },
              ],
            },
          },
          {
            chapterId: 3,
            name: "JavaScript Basics",
            desc: "Add interactivity to your webpage with JavaScript.",
            exercises: {
              create: [
                {
                  name: "Variables and Functions",
                  slug: "vars-funcs",
                  xp: 90,
                  difficulty: "Medium",
                },
                {
                  name: "DOM Manipulation",
                  slug: "dom-manipulation",
                  xp: 110,
                  difficulty: "Hard",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.courses.update({
    where: { courseId: 103 },
    data: {
      title: "Data Structures & Algorithms",
      desc: "Master essential data structures and algorithms to improve coding efficiency.",
      bannerImage: "/images/dsa-course.png",
      level: "Intermediate",
      tags: "DSA, Algorithms, Coding Interview",
      chapters: {
        create: [
          {
            chapterId: 1,
            name: "Arrays and Linked Lists",
            desc: "Understand basic data structures and their operations.",
            exercises: {
              create: [
                {
                  name: "Array Traversal",
                  slug: "array-traversal",
                  xp: 100,
                  difficulty: "Medium",
                },
                {
                  name: "Linked List Insertion",
                  slug: "linked-list-insertion",
                  xp: 120,
                  difficulty: "Hard",
                },
              ],
            },
          },
          {
            chapterId: 2,
            name: "Sorting Algorithms",
            desc: "Learn bubble sort, insertion sort, and quicksort.",
            exercises: {
              create: [
                {
                  name: "Bubble Sort",
                  slug: "bubble-sort",
                  xp: 90,
                  difficulty: "Easy",
                },
                {
                  name: "Quick Sort",
                  slug: "quick-sort",
                  xp: 130,
                  difficulty: "Hard",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.courses.update({
    where: { courseId: 104 },
    data: {
      title: "Full-Stack Development with Node.js & React",
      desc: "Build modern web applications using Node.js for backend and React for frontend.",
      bannerImage: "/images/fullstack-course.png",
      level: "Advanced",
      tags: "Node.js, React, Fullstack",
      chapters: {
        create: [
          {
            chapterId: 1,
            name: "Node.js Backend Setup",
            desc: "Initialize a Node.js project and create basic API routes.",
            exercises: {
              create: [
                {
                  name: "REST API",
                  slug: "rest-api",
                  xp: 150,
                  difficulty: "Medium",
                },
                {
                  name: "CRUD Operations",
                  slug: "crud-operations",
                  xp: 200,
                  difficulty: "Hard",
                },
              ],
            },
          },
          {
            chapterId: 2,
            name: "React Components",
            desc: "Learn how to build reusable UI components in React.",
            exercises: {
              create: [
                {
                  name: "Todo List App",
                  slug: "todo-list",
                  xp: 120,
                  difficulty: "Medium",
                },
                {
                  name: "Props and State",
                  slug: "props-state",
                  xp: 130,
                  difficulty: "Medium",
                },
              ],
            },
          },
          {
            chapterId: 3,
            name: "Integration",
            desc: "Connect frontend and backend together.",
            exercises: {
              create: [
                {
                  name: "API Calls in React",
                  slug: "api-calls",
                  xp: 140,
                  difficulty: "Medium",
                },
                {
                  name: "Authentication Flow",
                  slug: "auth-flow",
                  xp: 180,
                  difficulty: "Hard",
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(() => {
    console.log("Seed data created successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
