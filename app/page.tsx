"use client";
import EmptyFeedback from "@/components/EmptyFeedback";
import Navbar from "@/components/Navbar";
import SortSelect from "@/components/Selector/SortSelect";
import Link from "next/link";
import MainContainer from "@/containers/MainContainer";
import FeedbackCard from "@/components/FeedbackCard";
import { useFeedbackStore } from "@/store/useFeedbackStore";
import PurpleButton from "@/components/Buttons/PurpleButton";

export default function Home() {
  const feedbackArray = useFeedbackStore((state) => state.feedback);
  console.log(feedbackArray);
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section className="px-6 py-4 bg-dark_grey text-white text-xs flex justify-between items-center">
          <div className="flex items-center">
            <p>Sort by: </p>
            <SortSelect></SortSelect>
          </div>
          <Link href="/new" passHref>
            <PurpleButton title="Add Feedback"></PurpleButton>
          </Link>
        </section>

        <MainContainer className="p-6 h-screen">
          {feedbackArray.length ? (
            feedbackArray.map((item, index) => (
              <Link href={`/feedback/${item.id}`} key={item.id}>
                <FeedbackCard item={item}></FeedbackCard>
              </Link>
            ))
          ) : (
            <EmptyFeedback></EmptyFeedback>
          )}
        </MainContainer>
      </main>
    </>
  );
}
