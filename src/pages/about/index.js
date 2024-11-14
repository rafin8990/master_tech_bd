import { IconContext } from "react-icons";
import { RiFacebookLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import RootLayout from "@/components/Layouts/RootLayout";
import profile from '../../../public/rafin-profile.jpg'

function AboutHomePage() {
  return (
    <section>
      <div className="container mx-auto py-10 -mb-28 lg:-mb-0">
        <div className="lg:grid lg:grid-cols-12 py-5 flex flex-col-reverse px-5 lg:px-0">
          <aside className="lg:grid lg:col-span-6 py-14 lg:py-0">
            <aside className="flex items-center space-x-3">
              <p className="border-t-4 w-10 border-success "></p>
              <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                introduction
              </h1>
            </aside>
            <div className=" space-y-3 mt-5 lg:mt-0">
              <h1 className="font-Libre uppercase lg:text-4xl text-3xl tracking-wide text-[#121212] font-semibold">
                Rafin Hossain
              </h1>
              <h1 className="text-xl font-Open text-black">
                Full Stack Developer
              </h1>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-4 w-10 border-success "></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Biography
                </h1>
              </aside>

              <p className="font-Libre lg:text-[17px] text-black text-justify">
                I have experience building web applications using the MERN
                stack, including knowledge of MySQL, PostgreSQL, Mongoose, MongoDB, Express.js, React.js, PHP, Laravel and
                Node.js. I also have a strong understanding of front-end
                technologies such as JavaScript, HTML, and CSS. <br /> <br /> I
                am a quick learner and am always eager to expand my skill set
                and stay up-to-date with the latest technologies. I am excited
                to join a team of developers and contribute to the creation of
                innovative and user-friendly web applications.
              </p>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-4 w-10 border-success "></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Contact
                </h1>
              </aside>

              <div className="text-black lg:text-[18px]">
                <h1 className="font-Libre">Dhaka, Bangladesh</h1>
                <p className="font-Libre">rafin.hossain.8990@gmail.com</p>
                <p className="font-Libre">+880 1701297556</p>
              </div>
            </div>

            <div>
              <aside className="flex items-center space-x-3 mb-5 mt-7 lg:mt-0">
                <p className="border-t-4 w-10 border-success "></p>
                <h1 className="font-Libre tracking-widest font-extralight text-[15px] uppercase">
                  Say Hello
                </h1>
              </aside>

              <div className="flex items-center space-x-5">
                <a
                  target="_blank"
                  href="https://www.facebook.com/Rafin.Hossain.19614"
                  rel="noreferrer"
                >
                  <aside className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#395692 " }}
                    >
                      <RiFacebookLine />
                    </IconContext.Provider>
                  </aside>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rafin-hossain/"
                  rel="noreferrer"
                >
                  <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#006EAB" }}
                    >
                      <RiLinkedinLine />
                    </IconContext.Provider>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <IconContext.Provider
                      value={{ size: 17, color: "#00acee " }}
                    >
                      <RiTwitterLine />
                    </IconContext.Provider>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <aside className="lg:grid lg:col-span-6 lg:w-full mx-auto justify-end px-7 lg:px-0">
            <div className="border rounded-full p-7">
              <picture>
                {" "}
                <img
                  className="rounded-full border"
                  src="https://i.ibb.co.com/1ssW0kS/rafin-profile.jpg"
                  alt="profile image"
                />
              </picture>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AboutHomePage;

AboutHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
