import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import axios from "axios"

function App() {
  // Whenever an user clicks a category, it is stored in setCategory
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsAPI = async () => {
    try{
      // Using axios for newsAPI
      // install first using npm i axios
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`)
      console.log(news);
    }
    catch(error){
      console.log(error);
    }
  }
 useEffect(() => {
   newsAPI();
 }, [])
 

  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
      <NewsContent/>
    </div>
  );
}

export default App;
