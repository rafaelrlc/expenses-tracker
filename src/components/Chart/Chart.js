import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //let maxValue = 0;
  //if (props.dataPoints.length > 0) {
  //let maxValue = props.dataPoints[0].value;

  //for (const gasto of props.dataPoints) {
  //if (gasto.value > maxValue) {
  //maxValue = gasto.value;
  //}
  //}
  //console.log(maxValue);
  //}

  const data_values = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalmaxValue = Math.max(...data_values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalmaxValue}
          label={dataPoint.label}
          key={dataPoint.id}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
