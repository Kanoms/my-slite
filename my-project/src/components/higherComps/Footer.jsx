import Buttons from "../lowerComps/Buttons";
import Footlist from "../lowerComps/Footlist";

const Footer = () => {
  return (
    <footer className="bg-white relative">
      <div className="bg-[url(https://res.cloudinary.com/duxfzk6uy/image/upload/v1690232551/Kanoms/Vector_m1r4gd.png)] xl:pb-32 bg-no-repeat bg-cover px-2 lg:px-20">
        <div className="pt-[120px] pb-20 kflex2 sm:justify-start">
          <img
            src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1690233126/Kanoms/5f84417443f34a56664f52e2_Logo_20-_20Slite_20-_20Icon.svg_j1ebdx.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center xl:items-start xl:flex-row justify-between gap-20">
          <div className="flex flex-col sm:flex-row w-full justify-between xl:gap-[50px]">
            <Footlist
              item1="What it's for"
              item2="Knowledge base"
              item3="Working remotely"
              item4="Fix remote meetings"
              item5="Onboarding remotely"
              item6="Build human connection"
              item7="Handbooks"
            />
            <Footlist
              item1="How it works"
              item2="Features"
              item3="Integrations"
              item4="Pricing"
              item5="What's new"
              item6="Help center"
              item7="Contact support"
            />
            <Footlist
              item1="Resources"
              item2="Templates"
              item3="Learn"
              item4="Blog"
              item5="Startup Bibles"
              item6="Remote handbook"
              item7="Management handbook"
              item8="Download apps"
              item9="Chrome extension"
            />
            <Footlist
              item1="Slite"
              item2="About us"
              item3="Find us on Twitter"
              item4={
                <>
                  Career
                  <Buttons
                    className="bg-kOrange rounded-full ml-2 py-1 px-2 text-white"
                    text="Hiring"
                  />
                </>
              }
              item5="Customers"
              item6="Press kit"
            />
            <Footlist
              item1="Compare"
              item2="Notion"
              item3="Confluence"
              item4="Google Docs"
              item5="Dropbox Paper"
              item6="All comparisons"
            />
          </div>

          <div className="kflex2 flex-col gap-[15px] xl:items-start xl:w-[393px]">
            <span className="py-1 text-sm font-medium">
              Remote letters to read on your own time
            </span>

            <div className="relative">
              <form
                className="relative top-0 kflex2 mb-20 w-[90vw] sm:w-[389px] text-center"
                action=""
              >
                <input
                  type="email"
                  className="tpbtn bg-inherit absolute top-0 left-0 w-[90vw] sm:w-[389px] h-[60px]"
                  placeholder="What's your email?"
                />
                <button
                  type="submit"
                  className="blbtn absolute top-0 right-0 h-[60px] w-[60px]"
                >
                  →
                </button>
              </form>
            </div>

            <span className="text-sm text-center xl:text-left md:w-[60%] xl:w-full">
              100% homemade, no tricks or ponies or growth hacking nonsense.
              Just remote things we care about with a short surprising insight
              every week. No rush.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white  px-2 lg:px-20 pt-28 pb-[60px]">
        <div className="kflex flex-col sm:flex-row pt-8 border-t border-kDark">
          <div className="">
            <ul className="kflex text-sm font-medium p-1 text-center gap-4">
              <li>Privacy</li>
              <li>Security</li>
              <li>User terms</li>
              <li>Customer terms</li>
            </ul>
          </div>

          <div>
            <span className="text-sm">©2022 Slite. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
