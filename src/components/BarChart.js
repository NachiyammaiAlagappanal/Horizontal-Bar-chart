// const Label = ({ children }) => <span className="label">{children}</span>;

// const Bar = ({ data }) =>
// 	<span className="bar" style={ { width: `${ data }%` } }/>;
import { React } from 'react';

const hundred = 100;
const getBarWidth = (population, max) =>
	(population / max) * hundred;

const Row = (
	{ state, estimate2022: population }, index, states
) => {
	const max = Math.max(...states
		.map((st) => Number(st.estimate2022)));

	return <div className="row">
		<div key={ index } className="label">{state}</div>
		<div
			className="bar"
			style={ { maxWidth: `${ getBarWidth(population, max) }%` } }
		>{population}</div>
	</div>;
};

const BarChart = ({ data: rows }) =>
	<div className="layout">{rows.map(Row)}</div>;

export default BarChart;
