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
      arcsLength={[uv / 10, (10 - uv) / 10]}
      colors={["#ffbf5e", "#efefef"]}
      percent={uv / 10}
      arcPadding={0.02}
      cornerRadius={0}
      needleColor="transparent"
      needleBaseColor="transparent"
      hideText
    />
  );
}
