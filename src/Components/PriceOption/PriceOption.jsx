import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  console.log(option);
  return (
    <div className="bg-orange-600 text-gray-300 p-4 rounded-xl space-y-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-3xl">/month</span>
      </h2>
      <h2 className="text-3xl text-center">{name}</h2>
      <div className="flex-grow">
        {features.map((feature, id) => (
          <li key={id} className="list-none flex gap-2 items-center">
            <span className="text-green-500 text-xl">
              {" "}
              <FaCheckCircle />
            </span>
            {feature}
          </li>
        ))}
      </div>
      <button className="w-full text-gray-700 bg-green-500 py-3 rounded-full font-bold hover:bg-green-600">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.prototypes = {
  option: PropTypes.object,
};

export default PriceOption;
