"use client";
import AddComment from "@/components/AddComment";
import BackButton from "@/components/Buttons/BackButton";
import FeedbackCard from "@/components/FeedbackCard";
import MainContainer from "@/containers/MainContainer";
import SecondaryContainer from "@/containers/SecondaryContainer";
import { useFeedbackStore } from "@/store/useFeedbackStore";
import { feedback } from "@/types/types";
import { useRouter, useParams } from "next/navigation";

const Feedback = () => {
  const feedbackArray = useFeedbackStore((state) => state.feedback);
  const { id } = useParams();
  const addComment = () => {
    feedbackArray.map((item) => {
      console.log(item);
    });
  };
  return (
    <main>
      <MainContainer className="p-6">
        <div className="flex justify-between items-center mb-6">
          <BackButton></BackButton>

          <button className="bg-dark-blue text-light_white text-sm w-32 py-2.5 rounded-lg">
            Edit Feedback
          </button>
        </div>

        <div>
          <FeedbackCard
            item={feedbackArray.find((x) => x.id === +id) as feedback}
          ></FeedbackCard>

          <SecondaryContainer title="Comments">
            <div></div>
          </SecondaryContainer>

          <AddComment></AddComment>
        </div>
      </MainContainer>
    </main>
  );
};

export default Feedback;
