import HomePage from './pages/HomePage';
import History from './pages/History';

import Xander from './pages/Xander';
// import ProjectPage from './pages/ProjectPage';
// import UserPage from './pages/UserPage';
// import FormPage from './pages/FormPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/hi' element={<HomePage/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/xander' element={<Xander/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;