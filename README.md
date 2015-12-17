rails-react-boilerplate
=======================

The environment to enable live-editing React Components with Webpack, react-hot-loader and Rails.

### Usage

```
bundle install
cd frontend
npm install

cd ..
npm install -g webpack webpack-dev-server
gem install forman
forman start -f Procfile.dev
```

Now open http://127.0.0.1:4001/

### Webpack rake tasks
```
rake webpack:compile # precompile javascripts and stylesheets
rake webpack:clean # clean public assets
```

### Dependencies
* Webpack
* React
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources
* [webpack-howto](https://github.com/petehunt/webpack-howto)
* [How Instagram.com Works](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* [How to Use Webpack with rails](http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/#including-precompiled-assets-in-views)
* [Building Kanban](http://survivejs.com/webpack_react/building_kanban/)
