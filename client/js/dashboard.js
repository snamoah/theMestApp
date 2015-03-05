Template.dashboard.events({
  'click .profile-dropdown': function(e) {
    return false;
  }
})

Template.dashboard.rendered = function() {
  $('.profile-dropdown').slideUp();

  $('.profile-name').click(function() {
    $('.profile-dropdown').slideToggle();
  })
  $('.profile-dropdown').blur(function() {
    $(this).slideUp();
  })
}

Template.yrbook.events({
  'click [data-modal-show]': function (e,t) {
    var id = $(e.currentTarget).attr('data-modal-show');
    $('#' + id).modal('show');
  }
});