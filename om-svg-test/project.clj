(defproject om-svg-test "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2725"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.4"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out/om_svg_test" "out/om_svg_test.js"]

  :cljsbuild {
    :builds [{:id "om-svg-test"
              :source-paths ["src"]
              :compiler {
                :output-to "out/om_svg_test.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}]})
