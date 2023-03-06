import './App.css';
import Navbar from './components/Navbar';
import SearchStats from './components/SearchStats';
import Card from './components/Card';

const data = require('./components/data.json')

function App() {

	const cards = (data.articles).map(item =>{
		return( 
			<Card
				author = {item.author}
				title = {item.title}
				description = {item.description}
				url = {item.url}
				img = {item.urlToImage}
			/>
		)
	})

  	return (
		<div>
			<Navbar />
			<SearchStats 
				status = {data.status}
				number = {data.totalResults}
			/>
			{/* <Card 
				author = {data.articles[0].author}
				title = {data.articles[0].title}
				description = {data.articles[0].description}
				url = {data.articles[0].url}
				img = {data.articles[0].urlToImage}
			/> */}
			{cards}
    	</div>
  	);
}

export default App;
