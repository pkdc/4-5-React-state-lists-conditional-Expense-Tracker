import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	// Find the totalMaximum by getting the max value of dataPointValues
	const dataPointValues = props.dataPoints.map((point) => point.value);
	const totalMaximum = Math.round(Math.max(...dataPointValues));

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					// assume every chartbar has its own unique label
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
