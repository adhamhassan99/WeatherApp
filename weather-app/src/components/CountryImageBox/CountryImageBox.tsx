import React from "react";
import AltImage from "../../assets/altImage.jpg";

type Props = {
  imageUrl?: string;
  country?: string;
};

export default function CountryImageBox({ imageUrl, country }: Props) {
  return (
    <div className="w-72 rounded-lg flex justify-center items-center">
      <div className="absolute  text-white tracking-widest text-2xl font-medium bg-secondaryText/50 capitalize">
        {country}
      </div>
      <img
        className="object-cover rounded-2xl aspect-16/7"
        src={imageUrl || AltImage}
      />
    </div>
  );
}
