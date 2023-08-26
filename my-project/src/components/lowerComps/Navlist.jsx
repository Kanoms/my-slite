import PropTypes from "prop-types";

const Navlist = ({ className }) => {
  return (
    <ul className={`${className}`}>
      <a className="hover:underline transition-[0.3s]" href="#products">
        <li className="mr-4">Products</li>
      </a>
      <a className="hover:underline transition-[0.3s]" href="#templates">
        <li>Templates</li>
      </a>
      <a className="hover:underline transition-[0.3s]" href="#pricing">
        <li>Pricing</li>
      </a>
      <a className="hover:underline transition-[0.3s]" href="#blog">
        <li>Blog</li>
      </a>
    </ul>
  );
};

Navlist.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navlist;
