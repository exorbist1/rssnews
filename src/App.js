import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchStats from './components/SearchStats';
import Card from './components/Card';
import WithCardsLoading from './components/withCardsLoading';
// const data = require('./components/data.json')


function App() {
	const CardsLoading = WithCardsLoading(Card);
	const [appState, setAppState] = useState({
		loading: false, 
		articles: null,
		status: null,
		results: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://newsapi.org/v2/everything?q=f1&language=en&from=2023-03-04&apiKey=730160677c7746fb9d3d7900db5990a1`;
		fetch(apiUrl)
		  .then((res) => res.json())
		  .then((res) => {
			setAppState({ loading: false, articles: res.articles, status: res.status, results: res.totalResults});
		  })
	  }, [setAppState]);
	
	console.log(appState.results)

  	return (
		<div>
			<Navbar />
			<SearchStats 
				status = {appState.status}
				number = {appState.results}
			/>
			<CardsLoading isLoading={appState.loading} articles={appState.articles} />
    	</div>
  	);
}

export default App;
