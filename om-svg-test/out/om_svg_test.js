goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../react.js", ['com.facebook.React'], []);
goog.addDependency("../om/dom.js", ['om.dom'], ['com.facebook.React', 'cljs.core', 'goog.object']);
goog.addDependency("../om/core.js", ['om.core'], ['goog.dom', 'com.facebook.React', 'cljs.core', 'om.dom', 'goog.ui.IdGenerator']);
goog.addDependency("../om_svg_test/core.js", ['om_svg_test.core'], ['cljs.core', 'om.dom', 'om.core']);