// Compiled by ClojureScript 0.0-2725 {}
goog.provide('om_svg_test.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_svg_test.core.tick = (10);
om_svg_test.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"tick","tick",-835886976),om_svg_test.core.tick,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),om_svg_test.core.tick,new cljs.core.Keyword(null,"height","height",1025178622),om_svg_test.core.tick], null),new cljs.core.Keyword(null,"my-count","my-count",1045401464),(0),new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.PersistentVector.EMPTY], null));
om.core.root.call(null,(function (app,owner){
if(typeof om_svg_test.core.t5645 !== 'undefined'){
} else {

/**
* @constructor
*/
om_svg_test.core.t5645 = (function (owner,app,meta5646){
this.owner = owner;
this.app = app;
this.meta5646 = meta5646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_svg_test.core.t5645.prototype.om$core$IRender$ = true;

om_svg_test.core.t5645.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.svg,{"height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.app), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.app)},cljs.core.map.call(null,((function (___$1){
return (function (point){
var map__5648 = point;
var map__5648__$1 = ((cljs.core.seq_QMARK_.call(null,map__5648))?cljs.core.apply.call(null,cljs.core.hash_map,map__5648):map__5648);
var width = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.DOM.rect({"y": y, "x": x, "height": height, "width": width});
});})(___$1))
,new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(self__.app)));
});

om_svg_test.core.t5645.prototype.om$core$IDidMount$ = true;

om_svg_test.core.t5645.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return window.setInterval(((function (___$1){
return (function (){
var map__5649 = cljs.core.deref.call(null,om_svg_test.core.app_state);
var map__5649__$1 = ((cljs.core.seq_QMARK_.call(null,map__5649))?cljs.core.apply.call(null,cljs.core.hash_map,map__5649):map__5649);
var tick = cljs.core.get.call(null,map__5649__$1,new cljs.core.Keyword(null,"tick","tick",-835886976));
var dimensions = cljs.core.get.call(null,map__5649__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var trail = cljs.core.get.call(null,map__5649__$1,new cljs.core.Keyword(null,"trail","trail",-272340561));
var width = cljs.core.get.call(null,map__5649__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var my_count = cljs.core.get.call(null,map__5649__$1,new cljs.core.Keyword(null,"my-count","my-count",1045401464));
var new_point = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dimensions),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.mod.call(null,my_count,width),new cljs.core.Keyword(null,"y","y",-1757859776),(((my_count / width) | (0)) * tick)], null);
return cljs.core.swap_BANG_.call(null,om_svg_test.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"my-count","my-count",1045401464),(my_count + tick),new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.conj.call(null,trail,new_point));
});})(___$1))
,(0));
});

om_svg_test.core.t5645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5647){
var self__ = this;
var _5647__$1 = this;
return self__.meta5646;
});

om_svg_test.core.t5645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5647,meta5646__$1){
var self__ = this;
var _5647__$1 = this;
return (new om_svg_test.core.t5645(self__.owner,self__.app,meta5646__$1));
});

om_svg_test.core.t5645.cljs$lang$type = true;

om_svg_test.core.t5645.cljs$lang$ctorStr = "om-svg-test.core/t5645";

om_svg_test.core.t5645.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"om-svg-test.core/t5645");
});

om_svg_test.core.__GT_t5645 = (function __GT_t5645(owner__$1,app__$1,meta5646){
return (new om_svg_test.core.t5645(owner__$1,app__$1,meta5646));
});

}

return (new om_svg_test.core.t5645(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),29,new cljs.core.Keyword(null,"end-line","end-line",1837326455),57,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/frameworks-svg-test/om-svg-test/src/om_svg_test/core.cljs"], null)));
}),om_svg_test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map