import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center flex-1 h-screen">
      <div className="text-5xl font-bold"> 404 Not Found</div>
    </div>
  );
}
