# [Sage Starter](https://github.com/asuh/sage/)
[![devDependency Status](https://david-dm.org/asuh/sage-starter/dev-status.svg)](https://david-dm.org/asuh/sage-starter#info=devDependencies)
[![Build Status](https://img.shields.io/travis/roots/sage.svg?style=flat-square)](https://travis-ci.org/asuh/sage-starter)


Sage Starter is a starter theme based on Sage 8.5, HTML5 Boilerplate, gulp, and Bower that will help you make better themes.

* Homepage: [https://github.com/asuh/sage-starter/](https://github.com/asuh/sage-starter/)
* Source: [https://github.com/roots/sage](https://github.com/roots/sage)
* Documentation: [https://roots.io/sage/docs/](https://roots.io/sage/docs/)
* Twitter: [@asuh](https://twitter.com/asuh)

## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| Node.js >= 4.5  | `node -v`    | [nodejs.org](http://nodejs.org/) |
| gulp >= 3.8.10  | `gulp -v`    | `npm install -g gulp` |
| Bower >= 1.3.12 | `bower -v`   | `npm install -g bower` |

For more installation notes, refer to the [Install gulp and Bower](#install-gulp-and-bower) section in this document.

## Features

* [gulp](http://gulpjs.com/) build script that compiles both Sass and Less, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [Bower](http://bower.io/) for front-end package management
* [asset-builder](https://github.com/austinpray/asset-builder) for the JSON file based asset pipeline

## Installation

Clone the git repo - `git clone https://github.com/asuh/sage-starter.git` and then rename the directory to the name of your theme or website.

## Theme development

Sage uses [gulp](http://gulpjs.com/) as its build system and [Bower](http://bower.io/) to manage front-end packages.

### Install gulp and Bower

Building the theme requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com) and [Bower](http://bower.io/) globally with `npm install -g gulp bower`
2. Navigate to the theme directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made
* `gulp --production` — Compile assets for production (no source maps).

### Using BrowserSync

To use BrowserSync during `gulp watch` you need to update `devUrl` at the bottom of `assets/manifest.json` to reflect your local development hostname.

For example, if your local development URL is `http://project-name.dev` you would update the file to read:
```json
...
  "config": {
    "devUrl": "http://project-name.dev"
  }
...
```
If your local development URL looks like `http://localhost:8888/project-name/` you would update the file to read:
```json
...
  "config": {
    "devUrl": "http://localhost:8888/project-name/"
  }
...
```

### SVG support

Sage Starter has built-in SVG support! The preferred method for using SVG as implemented is an SVG sprite.

#### Usage

Make sure each SVG has an ID.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="twitter" viewBox="0 0 64 64">
        <title>Twitter</title>
        <path etc.../>
    </symbol>
</svg>
```

Save any SVG files you want to use into `/assets/images/sprites` and the build process will combine all of those images into one sprite.

To use in markup, apply the ID to an SVG's Use element.

```svg
<svg role="img" title="Twitter">
    <use xlink:href="map.svg#twitter"/>
</svg>
```

Check out [SVG For Everybody](https://github.com/jonathantneal/svg4everybody) for IE and Edge 12 support of SVG sprites.

## Documentation

Sage documentation is available at [https://roots.io/sage/docs/](https://roots.io/sage/docs/).

##Contributing

Contributions are welcome and encouraged from everyone!
