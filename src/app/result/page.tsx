import Image from "next/image";
import React from "react";

import LotterLogo from "../../../public/images/Lottery.svg";
import SeoMeta from "@/partials/SeoMeta";
import PageHeader from "@/partials/PageHeader";
import { getListPage } from "@/lib/contentParser";
import { Result } from "@/types";

const page = () => {
  const resultIndex: Result = getListPage("resultados/_index.md");
  const { title, meta_title, description, image } = resultIndex.frontmatter;

  const lotteryResults = [
    { name: "Loto", numbers: "05, 12, 23, 34, 55, 67" },
    { name: "Quiniela Palé", numbers: "08, 15, 22" },
    { name: "Loteka", numbers: "04, 18, 29, 36" },
    { name: "Leidsa", numbers: "11, 28, 33, 41, 57, 60" },
  ];

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <div className="grid justify-center max-w-6xl grid-cols-3 gap-4 p-4 m-4 mx-auto mt-12">
        {lotteryResults.map((result, index) => (
          <div
            key={index}
            className="py-10 rounded-lg bg-theme-light px-7 dark:bg-darkmode-theme-light"
          >
            <div className="flex justify-center mb-4">
              <Image src={LotterLogo} alt="logo" />
            </div>
            <div>
              <h2 className="font-bold">{result.name}</h2>
              <div className="flex flex-wrap gap-2">
                {result.numbers.split(", ").map((number, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-black bg-yellow-400 rounded-full"
                  >
                    {number}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default page;
