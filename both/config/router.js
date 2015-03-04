Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function() {
  this.render('main')
}, {
  name: 'main'
});

Router.route('/addGuest', function() {
  this.render('postGuestInfo');
}, {
  name: 'addGuest'
});
