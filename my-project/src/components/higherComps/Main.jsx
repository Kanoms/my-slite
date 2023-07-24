import Buttons from "../lowerComps/Buttons";
import Productlist from "../lowerComps/Productlist";
import Template from "../lowerComps/Template";
import { BsFillPlayFill } from "react-icons/bs";

const Main = () => {
  return (
    <main className="bg-kBG">
      <section className="px-20 py-10 kflex2 flex-col">
        <h2 className="text-5xl">A home for all of your knowledge.</h2>

        <span className="sechead mt-6 mb-[60px]">
          Project, knowledge base, process – bring all your work to life in
          Docs.
        </span>

        <div className="kflex2 gap-4">
          <Productlist />

          <img
            src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690150240/Kanoms/div_nbrfuz.png"
            alt=""
          />
        </div>
      </section>

      <section className="py-[200px] kflex2 flex-col">
        <h2 className="text-4xl font-medium mb-4">
          Beat the blank canvas with Templates
        </h2>

        <p className="sechead mb-7">
          Ready-to-use Templates for product specs, company handbooks, meeting
          notes and more.
        </p>

        <Buttons className="tpbtn" text="Browse templates" />

        <div className="kflex2 gap-5 p-5 w-[100%] overflow-x-auto overflow-scroll m-auto mt-20">
          <Template
            title="Creative brief"
            className="bg-kBlue"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690161722/Kanoms/70dfbb4b087e316b0b2a23a47f473485_ezbobz.png"
          />
          <Template
            title="Employee handbook"
            className="bg-kBG"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008505/Kanoms/5f84417443f34a2ab54f5347_Illustration_20-_20Template_20-_20Employee_20handbook.png_s9hdwz.png"
          />
          <Template
            title="Weekly reviews"
            className="bg-kPink"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a13a34f5349_Illustration_20-_20Template_20-_20Weekly_20reviews.png_pc5q3y.png"
          />
          <Template
            title="Product planning"
            className="bg-kBlue"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a0ab14f5344_Illustration_20-_20Template_20-_20Project_20Plan.png_uxtq5u.png"
          />
          <Template
            title="Onboarding checklist"
            className=" bg-kOrange"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a4cf24f534c_Illustration_20-_20Template_20-_20Employee_20Checklist.png_qu0m0k.png"
          />
          <Template
            title="Product specs"
            className="bg-kBG"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a46a84f534a_Illustration_20-_20Template_20-_20Product_20specs.png_mqnpjz.png"
          />
          <Template
            title="Talent acquisition"
            className="bg-kPink"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a4a0a4f5345_Illustration_20-_20Template_20-_20Talent_20acquisition.png_azqcqq.png"
          />
          <Template
            title="Stand-up meeting"
            className=" bg-kOrange"
            image="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690154754/Kanoms/9d1f556031a313061f0a6b1328c54b15_secztn.png"
          />
        </div>
      </section>

      <section>
        <div className="kflex2 flex-col gap-5">
          <h2 className="text-5xl">Move ideas forward.</h2>

          <h3 className="text-5xl">Docs, meet Discussions.</h3>

          <p className="sechead w-[80%] mb-10">
            Decisions don't work on their own, and neither does your team. In
            Slite, decision-making and async discussion comes built-in, inside
            Docs. Say goodbye to scattered conversations and endless Slack
            threads.
          </p>

          <Buttons className="blbtn" text="I want that too" />

          <div className="h-[768px] w-[1280px] bg-black kflex2 relative rounded-md pb-3">
            <button className="bg-kDark w-[90px] h-9 absolute bottom-3 rounded-full text-white kflex2">
              <BsFillPlayFill className="text-3xl absolute left-4" />
              <span className="absolute right-4 pl-2 bg-kDark text-xs">
                PLAY
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
