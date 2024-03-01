import router from './components/router';
import {RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
 
 return (
    <div className="App">
   <HomePage/>
   
    <RouterProvider router ={router}/>
    </div>
    
 );
}

export default App;