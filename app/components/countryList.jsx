var React = require('react');
var Country = require('./country.jsx');
module.exports = React.createClass({
  render: function() {
    return (
      <ul className="PlayerList">
         {
           this.props.data.map(function(country) {
             return <li>{country.name} <Country countryData={country}/></li>
           })
         }
       </ul>
    )
  }
});
