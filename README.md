# Twitter Front End

Reimplementation of Twitter.com feed page as close as possible to the real one.

### Technologies used

1. Node JS
1. Grunt
1. Jade
1. SCSS
1. jQuery
1. Google Maps API
1. Twitter API
1. IcoMoon

In addition is possible to toggle a modal window where a tweet can be written and published.

The project can be viewed visiting [Twitter.byverdu.es](http://twitter.byverdu.es/)

[Documentaion for global methods](https://github.com/byverdu/twitter_front_end/blob/master/docs/docs.md)

#### Twitter.com

![twitter.com](https://github.com/byverdu/twitter_front_end/blob/master/app/public/images/real.png)

#### Twitter.byverdu.es

![twitter.com](https://github.com/byverdu/twitter_front_end/blob/master/app/public/images/mine.png)

#### Project structure
```
|-- twitter
    |-- .babelrc
    |-- .gitignore
    |-- Gruntfile.js
    |-- README.md
    |-- package.json
    |-- server.js
    |-- app
    |   |-- config
    |   |   |-- config.js
    |   |   |-- storage.js
    |   |   |-- twitter.js
    |   |-- helper
    |   |   |-- helper.js
    |   |-- public
    |   |   |-- css
    |   |   |   |-- fonts.css
    |   |   |   |-- dist
    |   |   |   |   |-- main.css
    |   |   |   |   |-- main.css.map
    |   |   |   |-- fonts
    |   |   |   |
    |   |   |-- images
    |   |   |   |
    |   |   |-- js
    |   |       |-- bundle.js
    |   |       |-- main.js
    |   |       |-- modal.js
    |   |-- routes
    |   |   |-- index.js
    |   |-- sass
    |   |   |-- main.scss
    |   |   |-- partials
    |   |   |
    |   |-- views
    |       |-- index.jade
    |       |-- secondFeed.jade
    |       |-- partials
    |
    |-- docs
    |   |-- docs.md
    |-- test
        |-- mainSpec.js
        |-- mocha.opts
```
