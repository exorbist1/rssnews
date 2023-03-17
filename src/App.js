import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchStats from './components/SearchStats';
import Card from './components/Card';
import WithCardsLoading from './components/withCardsLoading';


function App() {
	const [searchValue, setSearchValue] = useState({
		loading: false, 
		articles: null,
		status: null,
		results: null,
	});

	const CardsLoading = WithCardsLoading(Card);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchValue);

		const apiUrl = `https://newsapi.org/v2/everything?q=${searchValue}}&language=en&from=2023-03-15&apiKey=730160677c7746fb9d3d7900db5990a1`;
		fetch(apiUrl)
		  	.then((res) => res.json())
		  	.then((res) => {
				setSearchValue({ loading: false, articles: res.articles, status: res.status, results: res.totalResults});
		  	})
		
	}

  	return (
		<div>
			<Navbar />

			<div className="search--container">
                <form onSubmit={handleSubmit} className="search--form">
                    <input 
						type="text" 
						placeholder="Search.." 
						className="search--bar" 
						value= {searchValue}
						onChange = { (event) =>
							setSearchValue(event.target.value)
						}	
					/>
                    <button type="submit" className="search--button">Search</button>
                </form>
            </div>

			<SearchStats 
				status = {searchValue.status}
				number = {searchValue.results}
			/>
			<CardsLoading isLoading={searchValue.loading} articles={searchValue.articles} />
    	</div>
  	);
}

export default App;
