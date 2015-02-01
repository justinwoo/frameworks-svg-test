var App = React.createClass({
  getDefaultProps: function () {
    var tick = 10;
    return {
      width: 800,
      height: 600,
      tick: tick,
      dimensions: {
        width: tick,
        height: tick
      }
    }
  },
  getInitialState: function () {
    return {
      trail: [],
      count: 1
    }
  },
  render: function () {
    var dimensions = this.props.dimensions;
    var trail = this.state.trail.map(function (point) {
      return (
        <rect {...point} {...dimensions}/>
      );
    });
    return (
      <svg width={this.props.width} height={this.props.height}>
        {trail}
      </svg>
    );
  },
  componentDidMount: function () {
    setInterval(function (e) {
      var count = this.state.count;
      var tick = this.props.tick;
      var width = this.props.width;

      var newPoint = {
        x: count % width,
        y: Math.floor(count / width) * tick
      };

      this.setState({
        trail: this.state.trail.concat(newPoint),
        count: count + tick
      });
    }.bind(this), 0);
  }
});

React.render(<App/>, document.body);
