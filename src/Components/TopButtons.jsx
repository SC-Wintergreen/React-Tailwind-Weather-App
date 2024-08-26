/* eslint-disable react/prop-types */

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "New York" },
    { id: 2, name: "London" },
    { id: 3, name: "Dubai" },
    { id: 4, name: "New Delhi" },
    { id: 5, name: "Moscow" },
    { id: 6, name: "Jerusalem" },
    { id: 7, name: "Sydney" },
    { id: 8, name: "Tokyo" },
    { id: 9, name: "Paris" },
    { id: 10, name: "Berlin" },
  ];
  return (
    <div className="flex items-center justify-between my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-md  text-white hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
