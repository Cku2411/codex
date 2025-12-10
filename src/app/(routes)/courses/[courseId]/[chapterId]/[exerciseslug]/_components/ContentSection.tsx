import React from "react";
import { ExerciseWithContent } from "../page";

type Props = {
  exerciseData: ExerciseWithContent | undefined;
  isLoading: boolean;
};

const ContentSection = ({ exerciseData, isLoading }: Props) => {
  const htmlContent = "";
  return (
    <div className="font-game">
      <div className="space-y-6 p-2">
        <section>
          <h2 className="text-4xl font-bold">Objective</h2>
          <p className="text-xl">{exerciseData?.exerciseContent?.objective}</p>
        </section>

        <section>
          <h2 className="text-4xl font-bold">Description</h2>
          <p className="text-xl">
            {exerciseData?.exerciseContent?.description}
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold">Instructions</h2>
          <p className="bg-gray-800 text-white p-3 rounded text-xl">
            {exerciseData?.exerciseContent?.instructions}
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold">Example</h2>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {exerciseData?.exerciseContent?.example}
          </pre>
        </section>

        <section>
          <h2 className="text-xl font-bold">Task</h2>
          <p>{exerciseData?.exerciseContent?.task}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Evaluation</h2>
          <p>{exerciseData?.exerciseContent?.evaluation}</p>
        </section>
      </div>
    </div>
  );
};

export default ContentSection;
