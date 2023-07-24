import { BsArrowRight } from "react-icons/bs";

const Productlist = () => {
  
  return (
    <div className="flex flex-col gap-[36.39px] text-sm font-medium">
      <ul className="flex flex-col [&>li]:w-[152px] [&>li]:h-14 [&>li]:pl-5 [&>li]:flex [&>li]:items-center [&>li]:rounded-md">
        <li>Wiki</li>
        <li>Products</li>
        <li>Processes</li>
        <li>Onboarding</li>
        <li>Meetings</li>
        <li>Team updates</li>
        <li>1:1s</li>
        <li>User research</li>
      </ul>
      <span className="flex items-center gap-2 pl-5">
        More <BsArrowRight />
      </span>
    </div>
  );
};

export default Productlist;
