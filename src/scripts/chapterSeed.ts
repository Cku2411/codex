import db from "@/lib/prisma";

async function main() {
  // Seed Courses trước (như bạn đã có)

  // Seed Chapters cho từng Course
  await db.chapter.createMany({
    data: [
      {
        chapterId: 1,
        name: "Getting Started with Python",
        desc: "Setup environment and write your first Python program.",
        exercises: "Install Python, Hello World program",
        courseId: 101,
      },
      {
        chapterId: 2,
        name: "Python Data Types",
        desc: "Learn about strings, numbers, lists, and dictionaries.",
        exercises: "Practice with list operations and dict manipulations",
        courseId: 101,
      },
      {
        chapterId: 1,
        name: "HTML Basics",
        desc: "Structure a webpage using HTML tags.",
        exercises: "Build a simple homepage",
        courseId: 102,
      },
      {
        chapterId: 2,
        name: "CSS Styling",
        desc: "Style your webpage with CSS selectors and properties.",
        exercises: "Add colors, fonts, and layouts",
        courseId: 102,
      },
      {
        chapterId: 1,
        name: "Arrays and Linked Lists",
        desc: "Understand basic data structures and their operations.",
        exercises: "Implement array traversal and linked list insertion",
        courseId: 103,
      },
      {
        chapterId: 2,
        name: "Sorting Algorithms",
        desc: "Learn bubble sort, insertion sort, and quicksort.",
        exercises: "Implement sorting algorithms in code",
        courseId: 103,
      },
      {
        chapterId: 1,
        name: "Node.js Backend Setup",
        desc: "Initialize a Node.js project and create basic API routes.",
        exercises: "Build a simple REST API",
        courseId: 104,
      },
      {
        chapterId: 2,
        name: "React Components",
        desc: "Learn how to build reusable UI components in React.",
        exercises: "Create a todo list app",
        courseId: 104,
      },
    ],
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
    await db.$disconnect();
  });
