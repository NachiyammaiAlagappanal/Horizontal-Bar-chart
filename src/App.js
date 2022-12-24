import { React } from 'react';
import './App.scss';
import BarChart from './components/BarChart';
import data from './services/data';

const App = (context) =>
	<div className="App">
		<BarChart { ...{ ...context, data } }/>
	</div>;

export default App;
