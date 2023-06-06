import Link from "next/link";
import PurpleButton from "./Buttons/PurpleButton";
import AddFeedbackButton from "./Buttons/PurpleButton";

const EmptyFeedback = () => {
  return (
    <div className="bg-white mx-auto rounded-lg text-center py-20 px-6">
      <img className="mx-auto mb-10" src="/empty_logo.svg" alt="" />
      <p className="text-main-text font-bold text-lg mb-3.5">
        There is no feedback yet.
      </p>
      <p className="text-secondary-text text-xs mb-6">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link href="/new" passHref>
        <PurpleButton title="Add Feedback"></PurpleButton>
      </Link>
    </div>
  );
};

export default EmptyFeedback;
