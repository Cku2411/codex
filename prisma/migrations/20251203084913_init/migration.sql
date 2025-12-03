-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "bannerImage" TEXT NOT NULL,
    "level" TEXT DEFAULT 'Beginner',
    "tags" TEXT,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);
