var Headrr = React.createClass({
  render: function() {
    return (<h2>Greetings, from Real Python!</h2>);
  }
});

ReactDOM.render(
  <Headrr />,
  document.getElementById('app')
);
