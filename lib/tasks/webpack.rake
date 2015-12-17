namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    `cd frontend && webpack --config=webpack.production.config.js -p`
  end

  desc 'clean compiled assets'
  task :clean do
    `rm -rf public/assets/*`
  end
end
