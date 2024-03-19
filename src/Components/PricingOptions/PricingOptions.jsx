import PriceOption from "../PriceOption/PriceOption";

const PricingOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker usage",
      ],
      price: "$30  ",
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to all equipment including cardio machines and weightlifting area",
        "Group fitness classes included",
        "Locker usage",
      ],
      price: "$50  ",
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to all equipment including cardio machines and weightlifting area",
        "Group fitness classes included",
        "Personal training sessions",
        "Locker usage",
        "Access to sauna and steam room",
      ],
      price: "$80  ",
    },
  ];

  return (
    <div className="mt-12 ">
      <h1 className="text-5xl text-center font-bold">
        Best Prices in the town
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
