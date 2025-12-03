import React from "react";
import Image from "next/image";

type Props = {};

const exploreOptions = [
  {
    id: 1,
    title: "Community Forum",
    desc: "Discuss, share, and get help from fellow learners.",
    icon: "/forum.png",
  },
  {
    id: 2,
    title: "Code Challenges",
    desc: "Solve real-world coding problems and sharpen your skills.",
    icon: "/game2.png",
  },
  {
    id: 3,
    title: "Video Tutorials",
    desc: "Learn step by step with guided video lessons.",
    icon: "/video.png",
  },
  {
    id: 4,
    title: "Project Lab",
    desc: "Build mini-projects to apply your knowledge in practice.",
    icon: "/project.png",
  },
];

const ExploreMore = (props: Props) => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-3xl mb-2">Explore More</h2>
        <div className="grid grid-cols-2 gap-5">
          {exploreOptions.map((option) => (
            <div
              key={option.id}
              className="flex gap-2 p-2 border rounded-xl bg-zinc-900"
            >
              <Image
                src={option.icon}
                width={80}
                height={80}
                alt={option.title}
              />
              <div>
                <h2 className="font-medium text-2xl ">{option.title}</h2>
                <p className="text-gray-400">{option.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
