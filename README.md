# A Lineman JS Template using Angular *with jade*

** Supporting Lineman Version : 0.9.0 **

This repo was sporked from David Mosher's [lineman-angular-template](https://github.com/davemo/lineman-angular-template).
His original instructions are below.  If you want to learn from experience, I
made a few mistakes, so check out my commits.

Up next: I'm adding some more angular stuff to the project, like NG UI-Bootstrap.
But in the spirit of mass-appeal and stuff, these developments will occur on another branch.

## I don't always drink lineman-ade

But when I do, I use jade templates.  This lineman stuff is delicious though.

## This template is working, apart from the following:

* TODO: create a new branch to implement Angular [UI Bootstrap](http://angular-ui.github.io/bootstrap/). I want Keep It Simple on the master branch.
* TODO: test ngmin and minimalisation.
* TODO: find a better intermediate folder to contain the Jade HTML output, where it can wait to be processed into a single file for reasons pertaining to awesomeness.
* I gave up on moving homepage.us => index.jade.  Started grepping the lineman source, but how do you say - I got shtuff to do.

### David Mosher's Instructions still apply

This provides the basic configuration needed to get an Angular app up and running with lineman. It includes the following features:

1. Template Precompilation into Angulars $templateCache using `grunt-angular-templates`
2. A basic login, logout service bound to sample routes inside `config/server.js`
3. A router, and 2 views `home` and `login`
4. A directive that shows a message on mouseover
5. 2 Controllers, for `home` and `login`, with $scope variables set and bound
6. A working, bound login form (username/password don't matter, but are required)
7. Configured [grunt-ngmin](https://github.com/btford/grunt-ngmin) so you don't have to fully qualify angular dependencies.

![The Login Page](https://raw.github.com/davemo/lineman-angular-template/master/doc/login.png)
![The Home Page](https://raw.github.com/davemo/lineman-angular-template/master/doc/home.png)

# Instructions

1. git clone this repo
2. npm install -g lineman (if you don't already have lineman installed)
3. npm install
4. lineman run
5. open your web browser to localhost:8000

Hopefully this helps you get up and running with AngularJS!
