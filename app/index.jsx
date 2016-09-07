import React from 'react';
import ReactDOM from 'react-dom';

var CountryList = require('./components/countryList.jsx');
var InputWrapper = require('./components/elements/inputWrapper.jsx');


if (process.env.NODE_ENV !== 'production') {
    React.Perf = require('react-addons-perf');
}

var countryJSON = require('./data/countries.json');
var EnquiryData = require('./data/Enquiry.json');


ReactDOM.render(
    <div className="container">
      <InputWrapper data={EnquiryData} />

    <CountryList data={countryJSON}/>
</div>, document.getElementById('app'));
