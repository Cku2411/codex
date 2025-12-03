import db from "@/lib/prisma";

async function main() {
  await db.courses.createMany({
    data: [
      {
        courseId: 101,
        title: "Introduction to Programming with Python",
        desc: "Learn the basics of programming using Python, covering syntax, data types, and simple projects.",
        bannerImage: "/images/python-course.png",
        level: "Beginner",
        tags: "Python, Programming, Basics",
      },
      {
        courseId: 102,
        title: "Web Development Fundamentals",
        desc: "Understand how to build websites using HTML, CSS, and JavaScript. Perfect for aspiring web developers.",
        bannerImage: "/images/webdev-course.png",
        level: "Beginner",
        tags: "HTML, CSS, JavaScript, Web",
      },
      {
        courseId: 103,
        title: "Data Structures & Algorithms",
        desc: "Master essential data structures and algorithms to improve coding efficiency and problem-solving skills.",
        bannerImage: "/images/dsa-course.png",
        level: "Intermediate",
        tags: "DSA, Algorithms, Coding Interview",
      },
      {
        courseId: 104,
        title: "Full-Stack Development with Node.js & React",
        desc: "Build modern web applications using Node.js for backend and React for frontend.",
        bannerImage: "/images/fullstack-course.png",
        level: "Advanced",
        tags: "Node.js, React, Fullstack",
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
