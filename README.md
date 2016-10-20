# devWPScaffold
ZombieCorp Wordpress Development Basic Scaffold

This is the base scaffolding for creating a wordpress theme. It created the TypeScript and SCSS files, directory structures and gruntfile required to create a DEV ENVIRONMENT.

You will need a package.json file which can be manually created like this:

```
{
  "name": "wp-PROJECT-NAME",
  "version": "1.0.0",
  "description": "",
  "author": "AUTHOR",
  "license": "MIT",
  "dests": "./main-site/wp-content/themes/THEME-FOLDER/assets/",
  "jsFileName": "js/main",
  "cssFileName": "css/main",
  "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-contrib-cssmin": "^1.0.1",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-uglify": "^1.0.1",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-typedoc": "^0.2.4",
    "grunt-ts": "^5.5.1"
  }
}
```

or which can be created by using the ZombieCorp create_project command line utility.
