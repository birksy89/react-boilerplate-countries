import React from 'react';
import ReactDOM from 'react-dom';

//Routing
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

var CountryList = require('./components/countryList.jsx');

if (process.env.NODE_ENV !== 'production') {
    React.Perf = require('react-addons-perf');
}

var countryJSON = require('./data/countries.json');

ReactDOM.render(
    <div className="container">

    <CountryList data={countryJSON}/>
</div>, document.getElementById('app'));
