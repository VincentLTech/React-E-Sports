import HomePage from './pages/HomePage';
import History from './pages/History';
// import ProjectPage from './pages/ProjectPage';
// import UserPage from './pages/UserPage';
// import FormPage from './pages/FormPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/hall' element={History}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;