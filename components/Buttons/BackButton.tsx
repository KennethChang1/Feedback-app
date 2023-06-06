import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <button className="flex items-center text-sm gap-3">
        <img src="/back.svg" alt="" />
        <p>Go Back</p>
      </button>
    </Link>
  );
};

export default BackButton;
