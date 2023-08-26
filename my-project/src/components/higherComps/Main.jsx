import Blogauthor from "../lowerComps/Blogauthor";
import Buttons from "../lowerComps/Buttons";
import Productlist from "../lowerComps/Productlist";
import Template from "../lowerComps/Template";
import { BsFillPlayFill } from "react-icons/bs";

const Main = () => {
  return (
    <main className="bg-kBG">
      <section id="products" className="px-2 lg:px-20 py-10 kflex2 flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center">
          A home for all of your knowledge.
        </h2>

        <span className="sechead mt-6 mb-[60px] text-center">
          Project, knowledge base, process – bring all your work to life in
          Docs.
        </span>

        <div className="kflex2 flex-col xl:flex-row gap-4">
          <Productlist />

          <img
            src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690150240/Kanoms/div_nbrfuz.png"
            alt=""
          />
        </div>
      </section>

      <section id="templates" className="py-[200px] kflex2 flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-center">
          Beat the blank canvas with Templates
        </h2>

        <p className="sechead mb-7">
          Ready-to-use Templates for product specs, company handbooks, meeting
          notes and more.
        </p>

        <Buttons className="tpbtn" text="Browse templates" />

        <div className="kflex2 w-full">
          <div className="kflex gap-5 p-5 w-[150%] overflow-x-auto overflow-scroll m-auto mt-20">
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
        </div>
      </section>

      <section>
        <div className="kflex2 flex-col gap-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-center">
            Move ideas forward.
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-5xl text-center">
            Docs, meet Discussions.
          </h3>

          <p className="sechead w-[80%] mb-10">
            Decisions don&apos;t work on their own, and neither does your team.
            In Slite, decision-making and async discussion comes built-in,
            inside Docs. Say goodbye to scattered conversations and endless
            Slack threads.
          </p>

          <Buttons className="blbtn" text="I want that too" />

          <div className="h-[240px] md:h-[480px] xl:h-[768px] w-[90%] xl:w-[1280px] bg-black kflex2 relative rounded-md pb-3">
            <button className="bg-kDark w-[90px] h-9 absolute bottom-3 rounded-full text-white kflex2">
              <BsFillPlayFill className="text-3xl absolute left-4" />
              <span className="absolute right-4 pl-2 bg-kDark text-xs">
                PLAY
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-40 px-2">
        <div className="kflex2">
          <div className="w-[800px] kflex2 flex-col relative py-11 border-t border-b border-kDark">
            <p className="text-center text-2xl italic font-georgia">
              Slite let us bring the two most important communication bits in
              the same place: documentation & decision-making. The connection
              between docs and discussions makes decision-making more efficient,
              transparent & contextualized.
            </p>

            <span className="font-medium text-[10px] mt-7">
              Sebastien Gendreau
            </span>

            <span className="text-[10px]">CPO of AGORAPULSE</span>

            <img
              className="absolute bottom-[-45px] right-[155px]"
              src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/62a19386e02733cc2b3a07ca_Sebastien_20Gendreau_20-_20Agorapulse.jpeg_e7lb0c.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="kflex2">
          <div className="w-[1040px] py-[60px] flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 gap-[60px]">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-[52.5px]">
                A radical change at a fair price.
              </h2>

              <p className="font-medium mt-6 mb-7">
                Give Slite a try. Save 16% on annual commitment. Big team? check
                the{" "}
                <span className="border-b border-kDark">enterprise plan</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pb-14 items-center justify-center lg:items-start lg:justify-normal">
                <Buttons className="blbtn" text="Start for free" />

                <Buttons className="tpbtn" text="Compare all plans" />
              </div>
            </div>
            <div className="kflex2 flex-col sm:flex-row lg:flex gap-10">
              <div className="kflex2 flex-col p-[42px] border border-kDark rounded-[10px]">
                <h3 className="text-2xl mb-2">Free</h3>

                <span className="pb-[42px] border-b border-kDark w-full text-center">
                  Plan
                </span>

                <div className="flex relative mt-10 items-center">
                  <span className="text-[26px] font-medium pl-5">$</span>
                  <span className="text-6xl font-bold">0</span>
                  <span className="text-xs pt-3 pb-[31px]">/month</span>
                </div>

                <span className="pb-2">Up to 50 docs</span>
              </div>

              <div className="kflex2 flex-col p-10 border shadow-lg rounded-[10px] bg-white">
                <h3 className="text-2xl mb-2">Standard</h3>

                <span className="pb-[42px] border-b border-kDark w-full text-center">
                  Plan
                </span>

                <div className="flex relative mt-10 items-center">
                  <span className="text-[26px] font-medium pl-5">$</span>
                  <span className="text-6xl font-bold">6</span>
                  <span className="text-[26px] font-medium">67</span>
                  <span className="text-xs pt-4 pb-[26px]">/month</span>
                </div>

                <span className="pb-2">Up to 50 docs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="kflex2 flex-col pt-48 pb-20 px-2 lg:px-20 gap-9">
          <h2 className="text-2xl sm:text-3xl md:text-[42px] text-center">
            What happy teams have to say.
          </h2>

          <div className="flex flex-col [&>div]:max-w-[407px] lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-[1280px]">
            <div className="kpad">
              <div className="h-[162px] text-lg">
                <p className="w-[90%]">
                  &quot;The most important thing in a wiki (in my opinion) is
                </p>

                <div className="w-[80%] sm:w-[275.2px] h-12 bg-kPink rounded-md absolute top-[86px] z-10"></div>

                <p className=" absolute z-20 left-10 right-20 top-[86px]">
                  <span className="text-transparent">________________</span>
                  <span>how tight the edit / collaboration loop is</span>
                </p>
                <p className=" absolute z-20 left-10 right-10 top-[100px]">
                  <span className="text-transparent">
                    _______________________
                  </span>
                  <span>
                    . Most wikis are pretty bad there. But Slite is an example
                    of a wiki that allows simultaneous editing.&quot;
                  </span>
                </p>
              </div>
              <Blogauthor
                name="jade rubick"
                position="CTO, GREMLIN"
                team="80+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/619b94e685a3c97031ce9b93_User_Jade_20Rubik.png_nmn8j2.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p className="bg-kPink rounded-lg w-fit">
                  Communication is key to scale a business.
                </p>

                <p>Slite is the best to keep things in writing.</p>

                <p className="bg-kPink rounded-lg w-fit">
                  Easy to use for everyone. Templates to adopt the best
                  practices.
                </p>

                <p>Summary to stay up to date on all topics.&quot;</p>
              </div>
              <Blogauthor
                name="by LEE LIU"
                position="CTO, Log DNA"
                team="150+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/619b94e66a76b695c85a868e_User_Lee_20Liu.png_oj2q53.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p>
                  &quot;Slite is easier to use on daily basis. We chose to avoid
                  a distracting tool to offer
                </p>
                <p className="bg-kPink rounded-lg w-fit">
                  a place of focus and clarity
                </p>
                <p>
                  The tips on how to structure our knowledge were also a big
                  plus.&quot;
                </p>
              </div>
              <Blogauthor
                name="Thibault Morlot"
                position="VP Operations, Shippeo"
                team="240+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/630e1449de535e0c48dcf120_Thibault_20Morlot.jpg_unzlrp.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p>
                  &quot;Slite let us bring the two most important communication
                  bits in the same place: documentation & decision-making. The
                  connection between docs and discussions
                </p>
                <p className="bg-kPink rounded-lg w-fit">
                  makes decision-making more efficient, transparent &
                  contextualized
                </p>
              </div>
              <Blogauthor
                name="Sebastien Gendreau"
                position="Head of product, AgoraPulse"
                team="175+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008505/Kanoms/63223d5429fbeb587b1a5fb9_Sebastien_20Gendreau.jpg_ucoqee.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p className="bg-kPink rounded-lg w-fit">
                  The reasons why certain decisions were made can be found in
                  one place
                </p>

                <p>and not scattered across different Slack channels.&quot;</p>
              </div>
              <Blogauthor
                name="by Jurgita Paulauskaite"
                position="Customer Success, Tymeshift"
                team="75+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008505/Kanoms/6322398e377c484e9773a3fc_Jurgita_20Paulauskaite.jpg_iequbi.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p>
                  &quot;As we&apos;re growing fast, the ease of adoption is a
                  crucial element when choosing a new solution. You can see
                </p>
                <p className="bg-kPink rounded-lg w-fit">
                  Slite is more user friendly, and its similarities with Slack
                  make it easier to adopt.
                </p>
              </div>
              <Blogauthor
                name="Martijn Hazelaar"
                position="Head of Digital, Vanmoof"
                team="500+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008508/Kanoms/63223aec1e0b3a09abb3e9c1_Martijn_20Hazelaar.jpg_box7og.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p>We switched from Confluence to Slite because</p>
                <p className="bg-kPink rounded-lg w-fit">
                  Slite is easy to use for the entire company, not just the
                  product team.
                </p>
                <p className="bg-kPink rounded-lg w-fit">
                  Now, our entire company writes and organizes content in Slite.
                </p>
              </div>
              <Blogauthor
                name="Donald Sipe"
                position="Solutions Architect, JobTarget"
                team="300+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008505/Kanoms/63223f1c9fcd0db0796d5d61_Donald_20Sipe.jpg_ykqjwd.png"
              />
            </div>
            <div className="kpad">
              <div>
                <p>&quot;Perfect example of a product that</p>
                <p className="bg-kPink rounded-lg w-fit">
                  delivers the 80/20 rule. No fluff and simple. You give me the
                  top 20% of what I need that gets 80% done.
                </p>
                <p>
                  Great for managing internal teams, simplifying internal docs,
                  onboarding docs and easy to find what you need.&quot;
                </p>
              </div>
              <Blogauthor
                name="ERIC FETTNER"
                position="Cofounder & COO, THE JOB SAUCE"
                team="20+ teammates"
                userImg="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/619b94e66c79597b5a18852b_User_Eric_20Fettner.png_ti1xfv.png"
              />
            </div>
            <div className="kflex2 flex-col">
              <div>Read more</div>
              <div>reviews →</div>
              <div>
                <img
                  src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690210425/Kanoms/619bd7f4af38fe7bbb51740e_Reviews_20Underline.webp_arlluo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="signin">
        <div className="pt-20 pb-32 kflex2 flex-col gap-7">
          <h2 className="text-2xl sm:text-3xl md:text-[42px] text-center font-medium">
            Teams with clarity are teams that thrive.
          </h2>

          <span className="font-medium text-center">
            Create space for your team to do their best work.
          </span>

          <Buttons className="blbtn" text="Sign me up" />
        </div>
      </section>
    </main>
  );
};

export default Main;
