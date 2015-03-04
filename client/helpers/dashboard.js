Template.dashboard.helpers({
  'videos': function() {
    return Videos.find().fetch();
  }
})
