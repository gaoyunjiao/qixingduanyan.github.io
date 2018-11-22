import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';


import { MainPage } from './pages/Main';

ReactDOM.render(
    <MainPage />,
    document.getElementById("root")
);
