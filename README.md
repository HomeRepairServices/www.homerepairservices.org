# Home Repair Services

~This codebase powers http://www.homerepairservices.org.~ It doesn't, but it will soon!


This codebase is based on Craft CMS. See https://craftcms.com/docs for detailed documentation.

## Installation


### Clone the project

 ```
 git clone https://github.com/HomeRepairServices/w ww.homerepairservices.org.git
 ```

### Setup Server and Database

If you already have a personal preference of how to set up local MysSQL/PHP/Apache-or-nginx servers, skip to the next step.

 If you don't have a preference about those things, or don't know what they are, install MAMP.

 https://www.mamp.info/en/

Make `[WHEREEVER YOU CLONED THE PROJECT]/public` your server's web directory.

 You can do this via MAMP's 'Preferences -> Web Server' menu.

### Setup Sass

You'll need ruby installed on your machine. Then,

```
gem install sass
sass --update scss:public/assets/css
```

### Pull down the database

 Run a script I haven't written, yet.

 ```
 a_script.sh
 ```

### Celebrate

Now you should be able to visit http://localhost:8888 and see a beautiful website!


## Development

Changes to the schema and the data (that is, ANYTHING you do via Craft's admin interface) SHOULD BE DONE ON STAGING (https://homerepairservices.herokuapp.com) and then pull down the staging database.

```
a_script.sh
```

This is very silly, but the world of CMSs has yet ot learn what a database migration is, so if you make your changes locally, there's no way to apply them to staging.

Making changes to the Sass stylesheets? Be sure to have

```
sass --watch scss:public/assets/css
```

running in the background to keep the css files up-to-date.

## Possibly important notes I don't have a better place for

Need to recreate/update composer.lock file? You'll need to make a few tweaks to your MAMP install.

Check out

https://gist.github.com/kkirsche/5710272

and

https://stackoverflow.com/questions/42094994/how-to-enable-imagick-in-mamp-4-lite


and you may need to use the command format `Apps/MAMP/bin/php/php7.1.0/php usr/local/bin/composer install` instead of `composer install`
