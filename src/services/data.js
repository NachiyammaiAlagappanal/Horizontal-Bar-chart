/* eslint-disable no-console */
// import csvToJson from 'csvtojson';

// const data = async () => {
// 	const statesData = await csvToJson().fromFile('../Data/data.csv');

// 	console.log(statesData);
// 	return statesData;
// };

const data = [
	{
		state: 'UttarPradesh',
		estimate2011: '19.98',
		estimate2022: '23.32',
	},
	{
		state: 'Maharashtra',
		estimate2011: '11.23',
		estimate2022: '12.54',
	},
	{ state: 'Bihar', estimate2011: '10.4', estimate2022: '12.49' },
	{ state: 'WestBengal', estimate2011: '9.12', estimate2022: '9.86' },
	{
		state: 'MadhyaPradesh',
		estimate2011: '7.26',
		estimate2022: '8.55',
	},
	{ state: 'TamilNadu', estimate2011: '7.21', estimate2022: '7.66' },
	{ state: 'Rajashtan', estimate2011: '6.8', estimate2022: '8' },
	{ state: 'Karnataka', estimate2011: '6.1', estimate2022: '6.72' },
	{ state: 'Gujarat', estimate2011: '6.04', estimate2022: '7' },
	{ state: 'Odisha', estimate2011: '4.19', estimate2022: '4.6' },
];

export default data;
