# `rollup-plugin-workers` example

* Generates `es` and `system` outputs
* Adds module loader to Worker -
  [rollup.config.js](rollup.config.js#L23)
* Loads `es` if fully supported - [public/index.html](public/index.html)
* SystemJS 2.0 custom build - `s.js` with `worker-loader` and plugged to
  automatically execute worker main script - [src/system.js](src/system.js)
