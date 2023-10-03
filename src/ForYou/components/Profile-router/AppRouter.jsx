import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Importação de componentes
import feed from '../Feed';
import UserProfile from './UserProfile';

const AppRouter = () => {
    return (
        <router>
            <switch>
                <route path="/" exact componnent={feed} />
                <route path="/user/:userId" component={UserProfile} />
            </switch>
        </router>
    )
}

export default AppRouter;