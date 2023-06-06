import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }: { name: string }) => {
  return (
    <ErrorMessage component="p" className="text-red-500 text-xs" name={name} />
  );
};

export default FormErrorMessage;
