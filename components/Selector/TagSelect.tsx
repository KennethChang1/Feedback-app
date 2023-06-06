import { useField, useFormikContext } from "formik";
import Select from "react-select";

export enum TagEnum {
  Feature = "Feature",
  Bug = "Bug",
  UI = "UI",
  UX = "UX",
  Enhancement = "Enhancement",
}

const options = [
  { value: TagEnum.Feature, label: TagEnum.Feature },
  { value: TagEnum.Bug, label: TagEnum.Bug },
  { value: TagEnum.UI, label: TagEnum.UI },
  { value: TagEnum.UX, label: TagEnum.UX },
  { value: TagEnum.Enhancement, label: TagEnum.Enhancement },
];

const TagSelect = ({ name }: { name: string }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Select
      name={name}
      options={options}
      onChange={(e) => {
        if (Array.isArray(e)) {
          helpers.setValue(e.map((x: any) => x.value));
        } else {
          helpers.setValue(e?.value);
        }
      }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: "none",
          backgroundColor: "#F7F8FD",
          height: "3rem",
        }),
        option: (styles, { isSelected, isFocused }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#4661E6" : "",
            color: isFocused ? "white" : "",
          };
        },
      }}
    />
  );
};

export default TagSelect;
