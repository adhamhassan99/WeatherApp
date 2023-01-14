import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function Card({ children, title = "test" }: Props) {
  return (
    <div className="bg-white flex-1 rounded-2xl h-60 px-10 py-10">
      <div className="text-2xl text-secondaryText capitalize">{title}</div>
      {children}
    </div>
  );
}
