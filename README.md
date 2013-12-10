# A Lineman JS Template using Angular *with jade*

### See it running on [heroku](http://ng-rails-stack-client.herokuapp.com).

The app is statically served on heroku 
and connecting to an [API](https://github.com/dcunited001/rails-stack) 
running on a separate heroku instance.

# Instructions

1. git clone this repo
2. npm install -g lineman (if you don't already have lineman installed)
3. npm install
4. lineman run
5. open your web browser to localhost:8000

# Building

- build with `lineman build`
- set `LINEMAN_ENV` var to set per-environment global vars on index page
  - modify these vars in `config/application.js` under pages['dist']
  - can be used to set the Production/Staging API url when building

# Resources

"Hacking Hackers" - Angular Intro Slideshow

- http://thoughtmonkeys.com/slides/AngularJS/#/

Role Based Auth for Angular 

- http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/
- https://github.com/artgon/angularjs-role-based-auth

Devise Auth with Rails/Angular

- RECENT - http://rockyj.in/2013/11/04/angular_rails_2.html
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
