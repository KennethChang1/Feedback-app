const AddFeedbackButton = ({
  title,
  width = "32",
  type,
}: {
  title: string;
  width?: string;
  type?: "button" | "reset" | "submit" | undefined;
}) => {
  return (
    <button
      className={`bg-purple font-bold w-${width} py-2.5 rounded-lg text-white text-xs`}
      type={type}
    >
      {title}
    </button>
  );
};

export default AddFeedbackButton;
