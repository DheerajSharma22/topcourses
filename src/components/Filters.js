import React from "react";

const Filters = ({ filterData, category, setCategory }) => {
  const filterHandler = (cat) => {
    setCategory(cat);
  };
  return (
    <div className="flex items-center w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 jusify-center">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={`bg-black text-lg px-2 py-1 rounded-md font-medium text-white hover:bg-opacity-50 border2 ${
              category === data.title
                ? "bg-opacity-80 border-white border"
                : "bg-opacity-40 border-transparent"
            } transition-all duration-300`}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
