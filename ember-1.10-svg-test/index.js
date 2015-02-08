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
    var componentContext = this;
    setInterval(function () {
      Ember.run(function () {
        var count = componentContext.count;
        var tick = componentContext.tick;
        var width = componentContext.width;
        var dimensions = componentContext.dimensions;

        var newPoint = {
          x: count % width,
          y: Math.floor(count / width) * tick,
          dimensions: componentContext.dimensions
        };

        componentContext.set('trail', componentContext.trail.concat(newPoint));
        componentContext.set('count', count + tick);
      });
    }, 0);
  }
});
