"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import ContainerCU from "../Container";
import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";

import FrontEnd from "./FontEnd";
import BackEnd from "./BackEnd";
import Tools from "./Tools";
import Learning from "./learning";
import { SkillCard } from "./SkillCard";

const baseTabStyle =
  "font-bold py-2 px-4 rounded border border-purple-700 transition duration-300 text-sm sm:text-base dark:text-white text-black hover:bg-purple-700";
const selectedTabStyle = "bg-purple-700 text-white";

const Skill = () => {
  return (
    <BackgroundBeamsWithCollision>
      <ContainerCU>
        <div className="flex flex-col lg:mt-10 lg:flex-row gap-10 md:gap-16 lg:gap-14 pb-12">
          {/* SkillCard Section */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center">
            <SkillCard />
          </div>

          {/* Tabbed Content Section */}
          <div className="w-full lg:w-2/3">
            <Tabs>
              <TabList className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 mb-8">
                <Tab
                  className={baseTabStyle}
                  selectedClassName={selectedTabStyle}
                >
                  Front-End
                </Tab>
                <Tab
                  className={baseTabStyle}
                  selectedClassName={selectedTabStyle}
                >
                  Back-End
                </Tab>
                <Tab
                  className={baseTabStyle}
                  selectedClassName={selectedTabStyle}
                >
                  Tools
                </Tab>
                <Tab
                  className={baseTabStyle}
                  selectedClassName={selectedTabStyle}
                >
                  Learning
                </Tab>
              </TabList>

              <TabPanel>
                <FrontEnd />
              </TabPanel>
              <TabPanel>
                <BackEnd />
              </TabPanel>
              <TabPanel>
                <Tools />
              </TabPanel>
              <TabPanel>
                <Learning />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ContainerCU>
    </BackgroundBeamsWithCollision>
  );
};

export default Skill;
