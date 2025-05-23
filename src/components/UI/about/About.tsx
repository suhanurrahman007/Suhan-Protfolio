"use client";


import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";
import ContainerCU from "../Container";

import Hobby from "./Hobby";
import Experience from "./Experience";
import Education from "./Education";
import Personal from "./Personal";

import img from "@/src/assets/liv-git.gif";

const tabStyle =
  "font-semibold py-2 px-4 rounded border transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2";

const About = () => {
  return (
    <div className=" relative">
      <BackgroundBeamsWithCollision>
        <ContainerCU>
          <div className="flex flex-col lg:flex-row mt-7 gap-14 items-center lg:items-start">
            {/* Tabs Section */}
            <div className="w-full lg:w-2/3 bg-white p-2 dark:bg-black rounded-xl shadow-md">
              <Tabs>
                <TabList className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <Tab
                    className={`${tabStyle} text-gray-900 dark:text-white border-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600`}
                    selectedClassName="bg-purple-600 text-white"
                  >
                    Personal
                  </Tab>
                  <Tab
                    className={`${tabStyle} text-gray-900 dark:text-white border-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600`}
                    selectedClassName="bg-purple-600 text-white"
                  >
                    Education
                  </Tab>
                  <Tab
                    className={`${tabStyle} text-gray-900 dark:text-white border-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600`}
                    selectedClassName="bg-purple-600 text-white"
                  >
                    Experience
                  </Tab>
                  <Tab
                    className={`${tabStyle} text-gray-900 dark:text-white border-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600`}
                    selectedClassName="bg-purple-600 text-white"
                  >
                    Hobby
                  </Tab>
                </TabList>

                <TabPanel>
                  <Personal />
                </TabPanel>
                <TabPanel>
                  <Education />
                </TabPanel>
                <TabPanel>
                  <Experience />
                </TabPanel>
                <TabPanel>
                  <Hobby />
                </TabPanel>
              </Tabs>
            </div>

            {/* Image Section */}
            <Image
              alt="About Me"
              className="w-full mr-12 lg:max-w-[400px] ml-16 lg:ml-0 h-auto rounded-lg"
              height={350}
              src={img}
              width={350}
            />
          </div>
        </ContainerCU>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default About;
