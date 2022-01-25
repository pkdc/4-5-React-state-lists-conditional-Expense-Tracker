import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
	// chartDataPoints is an array of JS objs,
	// which has 2 properties: label and value
	const chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];

	// expense is an array of filtered expense passed from Expenses,js
	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
