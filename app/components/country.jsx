var React = require('react');

module.exports = React.createClass({

    render: function() {
        var activeCountry = this.props.countryData;
        return (
            <div>
                <h1>Hello {activeCountry.name}!</h1>
                <p>Population: {activeCountry.population}</p>
            </div>

        )
    }
});
