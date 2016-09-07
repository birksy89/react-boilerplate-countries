var React = require('react');
var Country = require('./country.jsx');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                {this.props.neighbours.map(function(country) {
                    return <div className="col-xs-12">

                        <a href={'#'+country}>{country}</a>
                        <a href="#CHN">{country}</a>

                    </div>
                })
}
            </div>
        )
    }
});
