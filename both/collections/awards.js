Awards = new Mongo.Collection('awards');

Awards.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  awardee: {
    type: String,
    label: 'Brief summary',
  },

  summary: {
    type: String,
    label: 'Brief summary',
    optional: true,
    max: 1000,
    autoform: {
      rows: 6
    }
  },

  file: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  },
  owner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    }
  }
}));