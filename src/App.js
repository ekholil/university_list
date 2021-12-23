
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import UniversityDetails from './Components/UniversityDetails';
import UniversityList from './Components/UniversityList';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Home />} />
       <Route path="/list" element={ <UniversityList />} />
       <Route path="/details/:index" element={ <UniversityDetails />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
