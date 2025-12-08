import db from "@/lib/prisma";

async function main() {
  await db.courses.createMany({
    data: [
      {
        courseId: 101,
        title: "Introduction to Programming with Python",
        desc: "Learn the basics of programming using Python, covering syntax, data types, and simple projects.",
        bannerImage:
          "https://i.pinimg.com/originals/09/01/43/0901434384290893f3f67b1065855d60.gif",
        level: "Beginner",
        tags: "Python, Programming, Basics",
      },
      {
        courseId: 102,
        title: "Web Development Fundamentals",
        desc: "Understand how to build websites using HTML, CSS, and JavaScript. Perfect for aspiring web developers.",
        bannerImage:
          "https://i.pinimg.com/originals/eb/54/d4/eb54d4191a91f9ff3c2f9a198471136b.gif",
        level: "Beginner",
        tags: "HTML, CSS, JavaScript, Web",
      },
      {
        courseId: 103,
        title: "Data Structures & Algorithms",
        desc: "Master essential data structures and algorithms to improve coding efficiency and problem-solving skills.",
        bannerImage:
          "https://i.pinimg.com/originals/52/83/59/5283594dd6b1d0dd4b8a59c723a35024.gif",
        level: "Intermediate",
        tags: "DSA, Algorithms, Coding Interview",
      },
      {
        courseId: 104,
        title: "Full-Stack Development with Node.js & React",
        desc: "Build modern web applications using Node.js for backend and React for frontend.",
        bannerImage:
          "https://i.pinimg.com/originals/e8/3f/2c/e83f2c05c4f1d3b860748d00dd856dcc.gif",
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
