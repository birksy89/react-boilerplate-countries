import React from 'react';
import ReactDOM from 'react-dom';

var CountryList = require('./components/countryList.jsx');

if (process.env.NODE_ENV !== 'production') {
    React.Perf = require('react-addons-perf');
}

var countryJSON = require('./data/countries.json');

ReactDOM.render(
    <div>
    <CountryList data={countryJSON}/>
</div>, document.getElementById('app'));
