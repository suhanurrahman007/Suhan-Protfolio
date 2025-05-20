"use client";

const educationData = [
  {
    title: "JSC",
    description: "I completed my Junior School Certificate in 2014.",
    gpa: "4.96",
  },
  {
    title: "SSC",
    description: "I completed my Secondary School Certificate in 2016.",
    gpa: "4.89",
  },
  {
    title: "HSC",
    description: "I completed my Higher Secondary Certificate in 2018.",
    gpa: "3.42",
  },
  {
    title: "Software Engineering",
    description: "I have not finished yet. Now I am in the last semester.",
    gpa: null,
  },
];

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {educationData.map(({ title, description, gpa }, index) => (
        <div
          key={index}
          className="rounded-xl shadow-md bg-white dark:bg-[#0D0D21] p-5 transition duration-300 hover:shadow-purple-400/50"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-sm text-justify text-gray-600 dark:text-gray-300 mb-2">
            {description}
          </p>
          {gpa && (
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold">GPA:</span>
              <span className="text-blue-600 ml-2">{gpa}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
