/*
  Warnings:

  - A unique constraint covering the columns `[courseId,chapterId]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "completedExercise" DROP CONSTRAINT "completedExercise_chapterId_fkey";

-- DropIndex
DROP INDEX "Chapter_chapterId_key";

-- AlterTable
ALTER TABLE "completedExercise" ALTER COLUMN "chapterId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_courseId_chapterId_key" ON "Chapter"("courseId", "chapterId");

-- AddForeignKey
ALTER TABLE "completedExercise" ADD CONSTRAINT "completedExercise_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
