App = Ember.Application.create();

var tick = 10;

App.SvgTrailComponent = Ember.Component.extend({
  trail: [],
  count: 0,
  width: 800,
  height: 600,
  tick: tick,
  dimensions: {
    width: tick,
    height: tick
  },
  didInsertElement: function () {
    setInterval(function () {
      var count = this.count;
      var tick = this.tick;
      var width = this.width;
      var dimensions = this.dimensions;

      var newPoint = {
        x: count % width,
        y: Math.floor(count / width) * tick,
        dimensions: this.dimensions
      };

      this.set('trail', this.trail.concat(newPoint));
      this.set('count', count + tick);
    }.bind(this), 0);
  }
});
