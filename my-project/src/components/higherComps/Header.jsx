import NavBar from "./navBar";

const Header = () => {
  const underLine =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690142489/Kanoms/6299ee702720bf9790c8ebd5_Asset_2018_202-p-500.png_zsvsj7.png";

  const headImg =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008507/Kanoms/627e355dc75c2e90373cb295_Hero_20Visual-p-1600.png_jeogoo.png";

  const tornado =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008505/Kanoms/62763801cc3db4bf91697c0b_Group_202-3.png_n2hxsw.png";

  const vanmoof =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008506/Kanoms/5f84417443f34a62084f52ea_Logo_20-_20VanMoof.svg_go7ull.png";

  const bambooHR =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008508/Kanoms/6324d665e52d735f3a23544c_bamboohr-logo-dark-p-500.png_uyujfk.png";

  const agorapulse =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008508/Kanoms/6324d6cc2d7ac53cb6044743_agora-pulse-dark-p-500.png_z6vghi.png";

  const spotify =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690147265/Kanoms/5f84417443f34a71464f52eb_Logo_20-_20Spotify.svg_gvioix.png";

  const angloAmerican =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690008508/Kanoms/6324d7376b45a41f91b652d7_anglo-american-dark-p-500.png_lcailt.png";

  const meero =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1690147258/Kanoms/5f84417443f34a7de14f52e8_Logo_20-_20Meero.svg_bxjzxw.png";
  return (
    <>
      <NavBar />
      <div className="bg-kBG kflex2 flex-col px-2 py-3">
        <h1 className="kflex2 text-2xl sm:text-3xl md:text-5xl lg:text-[60px] lg:leading-[80px] font-medium gap-2">
          <span>Bring</span>
          <span className="relative">
            clarity
            <img className="absolute bottom-0" src={underLine} alt="" />
          </span>
          <span>to</span>
          <span>your</span>
          <span>team</span>
        </h1>

        <p className="sechead lg:w-[50%] lg:m-auto pb-20">
          Slite is a modern knowledge base that drives action with structured
          docs, thoughtful collaboration and confident decision-making.
        </p>

        <form
          className="relative kflex2 mb-20 w-[90vw] sm:w-[389px] text-center"
          action=""
        >
          <input
            type="email"
            className="tpbtn bg-inherit absolute left-0 w-[90vw] sm:w-[389px]"
            placeholder="name@company.com"
          />
          <button
            type="submit"
            className="blbtn absolute right-0 w-[152.653px]"
          >
            Start for free
          </button>
        </form>

        <div className="pb-40 lg:pb-20 relative kflex2 flex-col">
          <img src={headImg} alt="" />

          <div className="kflex2 flex-col absolute bottom-[7.2px]">
            <span className="absolute bottom-[151px] text-kGrey font-medium">
              8:45 AM - PDT
            </span>

            <div className="bg-white w-[80vw] md:w-[432px] h-[100px] rounded-md shadow-md"></div>
            <div className="bg-white w-[85vw] md:w-[456px] h-[106px] rounded-md absolute bottom-[10.4px] shadow-md"></div>
            <div className="bg-white w-[90vw] md:w-[480px] h-[112px] rounded-md absolute bottom-[20.8px] shadow-md flex items-center gap-4 px-6 py-4">
              <img src={tornado} alt="" />
              <div className="flex flex-col">
                <span className="text-[17px] font-medium">
                  Georges made some changes
                </span>

                <span className="opacity-[70%]">
                  The abnormal guide to remote
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="kflex2 flex-col py-[60px] gap-8">
          <span className="text-center">
            200,000+ teams have found focus with Slite
          </span>

          <div className="flex flex-col lg:kflex2 lg:flex-row gap-10">
            <img src={vanmoof} alt="" />
            <img src={bambooHR} alt="" />
            <img src={agorapulse} alt="" />
            <img src={spotify} alt="" />
            <img src={angloAmerican} alt="" />
            <img src={meero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
