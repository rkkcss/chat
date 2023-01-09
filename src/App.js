import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Login } from './pages/Login';

function App() {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path={'/home'} element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
