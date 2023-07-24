import PropTypes from "prop-types";

const Navlist = ({ className }) => {
  return (
    <ul className={`${className}`}>
      <a href="">
        <li className="mr-4">Products</li>
      </a>
      <a href="">
        <li>Templates</li>
      </a>
      <a href="">
        <li>Pricing</li>
      </a>
      <a href="">
        <li>Blog</li>
      </a>
    </ul>
  );
};

Navlist.PropTypes = {
  className: PropTypes.string.isRequired,
};

export default Navlist;
