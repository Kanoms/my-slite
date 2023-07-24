import PropTypes from "prop-types";

const Template = ({ title, image, className }) => {
  return (
    <div className="bg-white h-[252px] min-w-[190px] rounded-lg p-5 pb-8 kflex flex-col relative">
      <h3 className="text-[22px] font-medium leading-[32px]">{title}</h3>

      <div
        className={`absolute w-[105px] h-[103.5px] rounded-full bottom-8 ${className}`}
      ></div>

      <img className="z-20" src={image} alt="" />
    </div>
  );
};

Template.prototype = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Template;
