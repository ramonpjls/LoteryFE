import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import LotterLogo from "../../public/images/Lottery.svg";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  const lotteryResults = [
    { name: "Loto", numbers: "05, 12, 23, 34, 55, 67" },
    { name: "Quiniela Palé", numbers: "08, 15, 22" },
    { name: "Loteka", numbers: "04, 18, 29, 36" },
    { name: "Leidsa", numbers: "11, 28, 33, 41, 57, 60" },
  ];

  return (
    <>
      <SeoMeta />
      <section className="section pt-14">
        <div className="container">
          <div className="justify-center row">
            <div className="mb-8 text-center lg:col-7 md:col-9">
              <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
            </div>
          </div>
        </div>
      </section>
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

export default Home;
