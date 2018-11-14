#How to use

Clone this repo and then in command line type:

* `npm install` - install all dependencies
* `gulp` - run dev-server and let magic happen, or
* `gulp build` - build project from sources


### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`pug-lint`         | pug-lint, https://www.npmjs.com/package/gulp-pug-lint
`stylelint`        | https://stylelint.io, gulp-stylelint
`eslint`           | https://eslint.org/ gulp-eslint

### Use Linters in template
Linter name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production-ready project (with code optimizations)

### Other tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`sass` 	           | | compile .sass/.scss to .css. We also use [postcss]
`webpack`          | compile .js sources into bundle file
`copy`             | copy common files from `./src` path to `./dist` path
`pug`              | compile [pug](https://pugjs.org/) templates
`svgo`             | optimize svg files with [svgo](https://github.com/svg/svgo)
`iconfont`         | compile iconfonts from svg sources
`sprite:svg`       | create svg symbol sprites ([css-tricks]
`sprite:png`       | create png sprites
`server`           | run dev-server powered by [BrowserSync](https://www.browsersync.io/)
`clean`            | remove `./dist` folder
`index-page`       | create index file with links to all project pages
`webpack`          | compile js


* `npm run start` - same as `gulp default`.
* `npm run build` - same as `gulp build`.


