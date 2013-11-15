# A Lineman JS Template using Angular *with jade*

** Supporting Lineman Version : 0.9.0 **

This repo was sporked from David Mosher's [lineman-angular-template](https://github.com/davemo/lineman-angular-template).
His original instructions are below.  If you want to learn from experience, I
made a few mistakes, so check out my commits.

Up next: I'm adding some more angular stuff to the project, like NG UI-Bootstrap.
But in the spirit of mass-appeal and stuff, these developments will occur on another branch.
Specifically, [this](https://github.com/dcunited001/jangular-lineman-ade/tree/ui-bootstrap) branch.
It's still in progress, but check it out!

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

# Resources

"Hacking Hackers" - Angular Intro Slideshow

- http://thoughtmonkeys.com/slides/AngularJS/#/

Role Based Auth for Angular 

- http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/
- https://github.com/artgon/angularjs-role-based-auth

Devise Auth with Rails/Angular

- http://jes.al/2013/08/authentication-with-rails-devise-and-angularjs/
- http://technpol.wordpress.com/2013/09/23/angularjs-and-devise-authentication-with-a-rails-server/
- https://github.com/jesalg/RADD
- https://github.com/colindensem/demo-rails-angularjs
- http://stackoverflow.com/questions/18026594/rails-4-devise-login-with-email-or-username-and-strong-parameters
- https://github.com/plataformatec/devise/wiki/How-To:-Allow-users-to-sign-in-using-their-username-or-email-address

Angular Bootstrap

- http://stackoverflow.com/questions/18935476/angularjs-ui-modal-forms

Angular Auth Example

- https://github.com/fnakstad/angular-client-side-auth

AngularJS Navigation 

- https://ryankaskel.com/blog/2013/05/27/a-different-approach-to-angularjs-navigation-menus

Transclude in AngularJS 

- http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

Angular-Strap (not part of UI project) 

- http://mgcrea.github.io/angular-strap/#/tooltip

Popular Angular Modules

- http://ngmodules.org/

File Upload for Angular JS

- http://ngmodules.org/modules/angular-file-upload

Combining Directives and Controllers

- http://icelab.com.au/articles/an-all-in-one-directive-controller-with-angularjs/

Communicating between Factory Services

- http://stackoverflow.com/questions/19667405/angular-resource-setup-communicating-between-factory-services

Broadcasting events from directives

- http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#communication-between-services-and-controllers
- http://stackoverflow.com/questions/16199212/angularjs-broadcast-event-from-directive
- http://jsfiddle.net/simpulton/XqDxG/

ngResource

- http://technokayiti.blogspot.com/2013/06/lesson-5-angularjs-tutorial-backend.html
- http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
- https://github.com/FineLinePrototyping/angularjs-rails-resource
