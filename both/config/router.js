Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function() {
  this.render('signin');
}, {
  name: 'main'
});

Router.route('/addGuest', function() {
  verifyLogin(this, 'postGuestInfo');
}, {
  name: 'addGuest'
});

Router.route('/dashboard', function() {
  verifyLogin(this, 'dashboard');
}, {
  name: 'dashboard'
})

verifyLogin = function(r, template) {
  if(Meteor.user()) 
    r.render(template)
  else
    Router.go('/');
}
