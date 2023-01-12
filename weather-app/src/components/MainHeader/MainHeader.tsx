import React from "react";

type Props = {};

export default function MainHeader({}: Props) {
  return (
    <div>
      <div className="daySelector flex gap-4">
        <div className="text-3xl">Today</div>
        <div className="text-3xl">Week</div>
      </div>
    </div>
  );
}
