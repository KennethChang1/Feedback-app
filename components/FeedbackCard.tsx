import { feedback } from "@/types/types";

const FeedbackCard = ({ item }: { item: feedback }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-sm mb-4">
      <p className="text-main-text font-bold mb-2 capitalize">{item.title}</p>
      <p className="text-secondary-text mb-2 capitalize">{item.desc}</p>
      <p className="bg-light_white w-fit px-4 py-1.5 rounded-lg text-dark-blue font-semibold mb-4">
        {item.tag}
      </p>
      <div className="flex justify-between">
        <div className="flex bg-light_white w-fit px-4 py-1.5 rounded-lg text-dark-blue gap-2">
          <img src="/upvote.svg" alt="" />
          <p className="font-bold">{item.upvotes}</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/comment.svg" alt="" />
          <p>{item.comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
