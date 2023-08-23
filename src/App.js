import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './tela-match/Mprojetos.jsx';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/Mprojetos' element={<Home />} />
                    <Route path='/' element={<Cadastro />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;