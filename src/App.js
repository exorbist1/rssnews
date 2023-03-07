import './App.css';
import Navbar from './components/Navbar';
import SearchStats from './components/SearchStats';
import Card from './components/Card';
const data = require('./components/data.json')


function App() {
	fetch('https://newsapi.org/v2/everything?q=f1&language=en&from=2023-03-04&apiKey=730160677c7746fb9d3d7900db5990a1')
		.then(response => response.json())
  		.then(data => console.log(data.articles));
	
	
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
			{cards}
    	</div>
  	);
}

export default App;
