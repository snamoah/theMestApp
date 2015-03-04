Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function() {
  this.render('landingPage')
}, {
  name: 'landingPage'
});
Router.route('/addAwards', function() {
  this.render('addAwards')
}, {
  name: 'addAwards'
});
Router.route('/awards', function() {
  this.render('awards')
}, {
  name: 'awards'
});
