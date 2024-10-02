import Image from "next/image";
import React from "react";

async function About() {
  const getProfile = async () => {
    const res = await fetch("http://localhost:3000/api/", {
      cache: "no-store",
      next: { revalidate: 10 },
    });
    return res.json();
  };

  const data = await getProfile();
  return (
      <div>
        <div className="flex flex-col gap-3 justify-center items-center align-justify">
          <p className="text-justify">
            Hi there! I am {data.profile[0].name}, and I wear many hats in the
            world of technology. By day (and sometimes by night!), I juggle
            three passions: web development, data analysis, and functional
            software testing.
          </p>
          <p className="text-justify">
            <sapn className="font-bold text-blue-600">
              Building for the Web:
            </sapn>{" "}
            I love crafting clean, user-friendly websites that bring ideas to
            life. Whether its a simple landing page or a complex application, Im
            excited by the challenge of turning vision into reality.
          </p>
          <p className="text-justify">
            <sapn className="font-bold text-blue-600">
              {" "}
              Making Sense of Data:
            </sapn>{" "}
            Theres a story hidden within every dataset, and I am on a mission to
            uncover it. I enjoy using data analysis to extract insights,
            identify trends, and help make data-driven decisions.
          </p>
          <p className="text-justify">
            <sapn className="font-bold text-blue-600">Ensuring Quality:</sapn> A
            website or application is only as good as its functionality. As a
            functional software tester, I take pride in meticulously testing
            software to ensure it meets all requirements and delivers a smooth
            user experience.
          </p>
          <p className="text-justify">
            <sapn className="font-bold text-blue-600">Why all three?</sapn> This
            combination of skills allows me to approach projects from a holistic
            perspective. I can understand the user experience a website
            provides, analyze the data it generates, and ensure it functions
            flawlessly from the start.
          </p>
          <p className="text-justify">
            <sapn className="font-bold text-blue-600">
              Want to collaborate?
            </sapn>{" "}
            I am always looking for new and exciting projects to tackle. If you
            have a web development project in mind, need help analyzing data, or
            require thorough software testing, feel free to reach out!
          </p>
        </div>
      </div>
  );
}

export default About;
