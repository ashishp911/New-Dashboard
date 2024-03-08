import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  // Whenever an user clicks a category, it is stored in setCategory
  const [category, setCategory] = useState("General")

  const newsAPI = async () => {
    try{
      // Using axios for newsAPI
      // install first using npm i axios
      
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
    </div>
  );
}

export default App;
