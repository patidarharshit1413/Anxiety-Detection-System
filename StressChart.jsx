import React from "react";
import { Bar } from "react-chartjs-2";

export default function StressChart({ answers }) {

  const data = {
    labels: answers.map((_, i) => "Q" + (i + 1)),
    datasets: [
      {
        label: "Response Score",
        data: answers
      }
    ]
  };

  return <Bar data={data} />;
}