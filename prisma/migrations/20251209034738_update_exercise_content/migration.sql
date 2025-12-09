-- CreateTable
CREATE TABLE "ExerciseContent" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "example" TEXT,
    "task" TEXT NOT NULL,
    "evaluation" TEXT,

    CONSTRAINT "ExerciseContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseContent_exerciseId_key" ON "ExerciseContent"("exerciseId");

-- AddForeignKey
ALTER TABLE "ExerciseContent" ADD CONSTRAINT "ExerciseContent_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
