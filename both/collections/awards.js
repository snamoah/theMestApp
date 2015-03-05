Awards = new Mongo.Collection('awards');

Awards.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  awardee: {
    type: String,
    label: 'Awardee',
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

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  },

  location: {
    type: String,
    label: 'location',
    optional: true,
  }

}));