import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './tela-match/Home.jsx';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;