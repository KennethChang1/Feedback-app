import SecondaryContainer from "@/containers/SecondaryContainer";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PurpleButton from "./Buttons/PurpleButton";

interface MyFormValues {
  comment: string;
}

const validationSchema = Yup.object().shape({
  comment: Yup.string().min(2, "Too Short!").required("Can't be empty"),
});

const initialValues: MyFormValues = {
  comment: "",
};

const AddComment = () => {
  return (
    <SecondaryContainer title="Add Comment">
      <Formik initialValues={initialValues} onSubmit={() => console.log("a")}>
        {({ values }) => (
          <Form>
            <Field
              name="comment"
              placeholder="Type your comment here"
              as="textarea"
              className="bg-blue-light w-full rounded-md p-3 h-20 mb-4"
            ></Field>
            <div className="flex justify-between items-center">
              <p className="text-xs text-secondary-text">250 Characters left</p>
              <PurpleButton title="Post Comment"></PurpleButton>
            </div>
          </Form>
        )}
      </Formik>
    </SecondaryContainer>
  );
};

export default AddComment;
