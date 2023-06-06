import { StringLiteral } from "typescript";

export type feedback = {
  id: number;
  title: string;
  desc: string;
  tag: "Feature" | "Bug" | "UI" | "UX" | "Enhancement";
  upvotes: number;
  comments: [];
  created_at: string;
};

export type comment = {
  id: number;
  name: string;
  username: string;
  comment: string;
};
