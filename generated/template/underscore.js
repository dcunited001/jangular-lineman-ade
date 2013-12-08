this["JST"] = this["JST"] || {};

this["JST"]["app/templates/homepage.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html ng-app="RailsStackApp">\n  <head>\n\n    <title>' +
((__t = ( pkg.name )) == null ? '' : __t) +
'</title>\n    <link rel="stylesheet" type="text/css" href="' +
((__t = ( css )) == null ? '' : __t) +
'" media="all" />\n    <link rel="icon" type="image/png" href="/img/favicon.ico"/>\n\n\n  </head>\n  <body ng-cloak>\n\n    <div class="navbar navbar-inverse navbar-fixed-top" navbar-widget></div>\n\n    <div class="container-fluid">\n      <div class="row-fluid">\n\n        <div class="span3" sidebar-widget>\n          \n        </div><!--/span -->\n\n      <div id="view" class="span9" ui-view></div>\n\n    </div><!--/.row-fluid -->\n  <footer><p>&copy; Company 2013</p></footer>\n  </div><!--/.container-fluid -->\n\n    <script type="text/javascript" src="' +
((__t = ( js )) == null ? '' : __t) +
'"></script>\n  </body>\n</html>\n';

}
return __p
};