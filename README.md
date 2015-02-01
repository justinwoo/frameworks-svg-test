# frameworks-svg-test
test of various JS frameworks for rendering a bunch of SVG rectangles

# Why?
I routinely render large numbers of items, and so do many others. I also want to be able to render my entire application off of a collection. There should be a good way to do this and get decent performance (even if it requires a little extra work, e.g. pure rendering).

See gh-pages demo [here](http://kimagure.github.io/frameworks-svg-test)

# Rules

I don't have a good list of rules yet, but I think these conditions should be met:

1. Simplest/most common rendering strategy (e.g. handlebars for Ember)
2. No deferring work to other libraries (e.g. no using D3 from Ember)
3. At any point, the input of the correct trail should render rectangles correctly (there must be no lazy appending, must be a "true" rerender) for a clean point (in-place mutations do not need to be rendered correctly)
4. Legible, not "hacky" (see 1, 2)
5. `setInterval(fn, 0)`, because I want all of these to use the same method to run through.
