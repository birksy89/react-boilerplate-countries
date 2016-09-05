var React = require('react');
var Country = require('./country.jsx');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                {this.props.data.map(function(country) {
                    return <div className="col-xs-12">

                        <Country countryData={country}/>

                    </div>
                })
}
            </div>
        )
    }
});
