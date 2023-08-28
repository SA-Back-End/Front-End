import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaMatch from './tela-match/Tela.jsx';

const App = () => {
    return (
        <div>
            <div className></div>
            <Router>
                <Routes>
                    <Route path='/match' element={<TelaMatch />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;