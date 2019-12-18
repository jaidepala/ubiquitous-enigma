import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {

    return (
        <div className="container topBotomBordersOut">
            <Link to="/">HOME</Link>
            <Link to="/list">ARTICLES</Link>
        </div>
    );
};

export default Navigation;
