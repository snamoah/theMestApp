Template.postGuestInfo.events({
  'change .guestVideos': function(e, template) {
    FS.Utility.eachFile(e, function(file) {
      Videos.insert(new FS.File(file), function(err) {
        console.log(err);
      });
    });
  }
})
