// Page.jsx
import { TextGenerateEffectDemo } from "@/components/ui/TextGenerateEffectDemo";
import Image from "next/image";
import fkad from "../images/fkad.jpg";
import { HoverBorderGradientDemo } from "@/components/ui/HoverBorderGradientDemo";

const Page = () => {
  return (
    <div className="flex flex-col h-full lg:mt-20 xl:mt-20 xl:mb-20 md:flex" id="test">

      <div className="w-full md:ml-10 lg:ml-10">
        <TextGenerateEffectDemo />
      </div>

      <div className="mt-10 border-rounded xl:flex md:ml-10 lg:ml-10">
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 rounded-500">
          <Image src={fkad} layout="responsive" alt={fkad.src} width={200} height={200} className="rounded" />
        </div>
        <div className="text-right w-3/4 md:w-4/5 lg:w-5/6">
          <p className="text-justify ps-5">
            As a Software Full Stack Developer, I bring a solid foundation in web development and an unyielding passion for technology. With a degree from Cebu Technological University and training from Kodego&apos;s full stack program, I&apos;m well-prepared to tackle diverse challenges in the tech world.
          </p>
          <p className="text-justify ps-5 mt-4">
            My expertise lies in crafting captivating user interfaces using HTML, CSS, JavaScript, Bootstrap, MaterialUI, React.js, Next.js. On the server side, I excel in Node.js, Express.js, Java, Spring Boot, while my database management skills encompass MongoDB and MySQL. I also have a basic understanding of PHP and Laravel, which I&apos;m actively working to expand. This versatile skill set allows me to deliver seamless and elegant solutions for a wide range of web development projects.
          </p>
          <p className="text-justify ps-5 mt-4">
            But my journey doesn&apos;t stop here. I&apos;m constantly expanding my skill set, delving into a wide range of languages and frameworks, from Python to Django, C# to ASP.NET, Ruby on Rails, and more. My dedication to staying at the forefront of industry trends drives my continuous learning.
          </p>
          <p className="text-justify ps-5 mt-4">
            My effective communication and time management skills enable me to excel as both an independent developer and a valuable team collaborator. In the dynamic world of technology, I am not merely an observer but an active creator, a continuous learner, and a passionate innovator.
          </p>
          <div className="xl:ms-5 xl:mt-3">
            <HoverBorderGradientDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
