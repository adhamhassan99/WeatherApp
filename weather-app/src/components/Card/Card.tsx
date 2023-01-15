import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

export default function Card({ children, title = "test", className }: Props) {
  return (
    <div className={`bg-white flex-1 rounded-2xl px-10 py-10 ${className}`}>
      <div className="text-2xl text-secondaryText capitalize">{title}</div>
      {children}
    </div>
  );
}
