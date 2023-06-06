import Select from "react-select";

const options = [
  { value: "upvotes", label: "Most Upvotes" },
  { value: "latest", label: "Latest" },
  { value: "comments", label: "Most Comment" },
];

const SortSelect = () => {
  return (
    <Select
      className="text-black"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: "none",
          backgroundColor: "none",
        }),
        placeholder(base, props) {
          return { ...base, color: "white" };
        },
        option: (styles, { isSelected, isFocused }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#373F68" : "",
            color: isFocused ? "white" : "",
          };
        },
        singleValue: (base, props) => ({
          ...base,
          color: "white",
        }),
      }}
      options={options}
    />
  );
};

export default SortSelect;
