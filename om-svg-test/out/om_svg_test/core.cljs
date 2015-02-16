(ns om-svg-test.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def tick 10)

(def app-state (atom {:width 800
                      :height 600
                      :tick tick
                      :dimensions {:width tick
                                   :height tick}
                      :my-count 0
                      :trail []}))

(defn rect-point [point]
  (reify
    om/IRender
    (render [_]
      (let [{width :width
             height :height
             x :x
             y :y} point]
        (dom/rect
          #js {:width width
               :height height
               :x x
               :y y})))))

(om/root
  (fn [app owner]
    (reify
      om/IDidMount
      (did-mount [_]
        (js/window.setInterval
          (fn []
            (let [{tick :tick
                   dimensions :dimensions
                   trail :trail
                   width :width
                   my-count :my-count} @app-state
                  new-point {:width (:width dimensions)
                             :height (:height dimensions)
                             :x (mod my-count width)
                             :y (* (int (/ my-count width)) tick)}]
              (swap! app-state
                     assoc
                     :my-count
                     (+ my-count tick)
                     :trail
                     (conj trail new-point))))
          0))
      om/IRender
      (render [_]
        (apply
          dom/svg
          #js {:width (:width app) :height (:height app)}
          (map (fn [point] (om/build rect-point point)) (:trail app))))))
  app-state
  {:target (. js/document (getElementById "app"))})
