/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapterId` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `courseId` on the `Chapter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_courseId_fkey";

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "chapterId" INTEGER NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseId_key" ON "Courses"("courseId");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;
