import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaMatch from './tela-match/tela.jsx';
import { ReactComponent as Icon } from '../public/favicon.ico';

const App = () => {
    return (
        <div>
            <Icon />
            <Router>
                <Routes>
                    <Route path='/match' element={<TelaMatch />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;