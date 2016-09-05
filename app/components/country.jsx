var React = require('react');
var numeral = require('numeral');
module.exports = React.createClass({

    render: function() {
        var activeCountry = this.props.countryData;

        var popString = numeral(activeCountry.population).format('0,0');
        return (
            <div className="card card-block">
                <h1>{activeCountry.name}</h1>
                <p>Population: {popString}</p>
                <span className="flag-icon flag-icon-gr"></span>
            </div>

        )
    }
});
