import React from "react";
import GaugeChart from "react-gauge-chart";

type Props = {
  uv: number;
};

export default function UVGaugeChart({ uv }: Props) {
  return (
    <GaugeChart
      id="uv-gauge-chart"
      nrOfLevels={2}
      arcsLength={[uv / 20, (20 - uv) / 20]}
      colors={["#ffbf5e", "#efefef"]}
      percent={uv / 20}
      arcPadding={0.02}
      cornerRadius={0}
      needleColor="transparent"
      needleBaseColor="transparent"
      hideText
    />
  );
}
