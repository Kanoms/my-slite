import PropTypes from "prop-types";

const Blogauthor = ({ name, position, team, userImg }) => {
  return (
    <div className=" sm:absolute w-[100%] sm:w-[327px] bottom-10">
      <div className="kflex text-[10px] pt-2 h-full sm:h-[72px] uppercase sm:relative">
        <div className="h-full flex flex-col gap-2">
          <h3 className="font-[900]">{name}</h3>

          <div className="flex flex-col font-medium">
            <span>{position}</span>
            <span>{team}</span>
          </div>
        </div>
        <div>
          <img src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

Blogauthor.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default Blogauthor;
