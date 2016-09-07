var React = require('react');
var numeral = require('numeral');

//Components
var CountryFlag = require('./countryFlag.jsx');
var CountryBorders = require('./countryBorders.jsx');

module.exports = React.createClass({

    render: function() {
        var activeCountry = this.props.countryData;

        var popString = numeral(activeCountry.population).format('0,0');
        return (
            <div className="card card-block" name={activeCountry.alpha3Code}>
                <h1>{activeCountry.name}</h1>
                <p className="lead">{activeCountry.nativeName}</p>
                <p>Population: {popString}</p>
                <CountryFlag alpha2Code={activeCountry.alpha2Code}/>
                  <CountryBorders neighbours={activeCountry.borders}/>
            </div>

        )
    }
});
