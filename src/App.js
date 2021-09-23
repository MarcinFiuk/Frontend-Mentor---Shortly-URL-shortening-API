import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/features' component={Features} />
                <Route path='/pricing' component={Pricing} />
                <Route path='/resources' component={Resources} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
