import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const Productlist = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  useEffect(() => {
    console.log("Selected item:", selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex flex-col gap-[36.39px] text-sm font-medium">
      <ul className="hidden md:flex flex-row [&>li]:px-5 xl:flex-col gap-1 xl:gap-0 xl:[&>li]:w-[152px] [&>li]:h-14 xl:[&>li]:px-0 xl:[&>li]:pl-5 [&>li]:flex [&>li]:items-center [&>li]:rounded-md [&>li]:cursor-pointer">
        <li
          className={selectedItem === 0 ? "bg-white" : ""}
          onClick={() => handleItemClick(0)}
        >
          Wiki
        </li>
        <li
          className={selectedItem === 1 ? "bg-white" : ""}
          onClick={() => handleItemClick(1)}
        >
          Products
        </li>
        <li
          className={selectedItem === 2 ? "bg-white" : ""}
          onClick={() => handleItemClick(2)}
        >
          Processes
        </li>
        <li
          className={selectedItem === 3 ? "bg-white" : ""}
          onClick={() => handleItemClick(3)}
        >
          Onboarding
        </li>
        <li
          className={selectedItem === 4 ? "bg-white" : ""}
          onClick={() => handleItemClick(4)}
        >
          Meetings
        </li>
        <li
          className={selectedItem === 5 ? "bg-white" : ""}
          onClick={() => handleItemClick(5)}
        >
          Team updates
        </li>
        <li
          className={selectedItem === 6 ? "bg-white" : ""}
          onClick={() => handleItemClick(6)}
        >
          1:1s
        </li>
        <li
          className={selectedItem === 7 ? "bg-white" : ""}
          onClick={() => handleItemClick(7)}
        >
          User research
        </li>
      </ul>
      <span className="flex items-center gap-2 pl-5">
        More <BsArrowRight />
      </span>
    </div>
  );
};

export default Productlist;
