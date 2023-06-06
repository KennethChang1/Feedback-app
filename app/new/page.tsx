"use client";
import BackButton from "@/components/Buttons/BackButton";
import FormErrorMessage from "@/components/FormErrorMessage";
import TagSelect, { TagEnum } from "@/components/Selector/TagSelect";
import MainContainer from "@/containers/MainContainer";
import { useFeedbackStore } from "@/store/useFeedbackStore";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import PurpleButton from "@/components/Buttons/PurpleButton";

interface MyFormValues {
  title: string;
  desc: string;
  tag: TagEnum | string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Can't be empty"),
  desc: Yup.string().min(2, "Too Short!").required("Can't be empty"),
  tag: Yup.string().required("Please select a category"),
});

const initialValues: MyFormValues = {
  title: "",
  desc: "",
  tag: "",
};

let id = 2;

const AddFeedback = () => {
  const router = useRouter();
  const submit = useFeedbackStore((state) => state.addFeedback);
  const onSubmit = ({ title, desc, tag }: MyFormValues) => {
    submit({
      id: id++,
      title,
      desc,
      tag: tag as TagEnum,
      upvotes: 1,
      comments: [],
      created_at: new Date().toISOString(),
    });

    router.push("/");
  };
  return (
    <main>
      <MainContainer className="p-6">
        <BackButton></BackButton>

        <div className="bg-white px-5 rounded-lg mt-12 p-11">
          <h1 className="mb-6">Create New Feedback</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ values }) => (
              <Form>
                <div className="mb-6">
                  <p className="text-sm text-main-text font-bold mb-0.5">
                    Feedback Title
                  </p>
                  <p className="text-xs text-secondary-text mb-4">
                    Add a short, descriptive headline
                  </p>
                  <Field
                    name="title"
                    className="bg-blue-light h-12 w-full rounded-md px-3"
                  ></Field>
                  <FormErrorMessage name="title"></FormErrorMessage>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-main-text font-bold mb-0.5">
                    Category
                  </p>
                  <p className="text-xs text-secondary-text mb-4">
                    Choose a category for your feedback
                  </p>

                  <TagSelect name="tag"></TagSelect>
                  <FormErrorMessage name="tag"></FormErrorMessage>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-main-text font-bold mb-0.5">
                    Feedback Detail
                  </p>
                  <p className="text-xs text-secondary-text mb-4">
                    Include any specific comments on what should be improved,
                    added, etc.
                  </p>

                  <Field
                    name="desc"
                    as="textarea"
                    className="bg-blue-light w-full rounded-md p-3 h-32"
                  ></Field>
                  <FormErrorMessage name="desc"></FormErrorMessage>
                </div>

                <PurpleButton
                  title="Add Feedback"
                  width="full"
                  type="submit"
                ></PurpleButton>
              </Form>
            )}
          </Formik>
        </div>
      </MainContainer>
    </main>
  );
};

export default AddFeedback;
