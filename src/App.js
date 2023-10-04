import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import PropertyPage from './components/PropertyPage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/property/:id' element={<PropertyPage/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
