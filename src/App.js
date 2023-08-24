import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import match from './tela-match/tela.jsx';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/match' element={<match />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;