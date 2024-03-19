import PropTypes from "prop-types";

const Link = ({ rout }) => {
  return (
    <li className="p-5 hover:bg-red-100 shadow-lg md:shadow-none rounded-xl">
      <a href={rout.path}>{rout.name}</a>
    </li>
  );
};

Link.propTypes = {
  rout: PropTypes.object,
};
export default Link;
