/*
  Warnings:

  - A unique constraint covering the columns `[chapterId]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "completedExercise" (
    "id" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "completedExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_chapterId_key" ON "Chapter"("chapterId");

-- AddForeignKey
ALTER TABLE "completedExercise" ADD CONSTRAINT "completedExercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completedExercise" ADD CONSTRAINT "completedExercise_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("chapterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completedExercise" ADD CONSTRAINT "completedExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completedExercise" ADD CONSTRAINT "completedExercise_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;
