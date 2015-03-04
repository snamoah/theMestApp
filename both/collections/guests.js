Guests = new Mongo.Collection('guests');

Guests.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  bio: {
    type: String,
    autoform: {
      rows: 5
    }     
  },
  date: {
    type: Date
  },

  video: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cfs-file',
        collection: 'Videos'
      }
    }
  },
  GuestType: {
    type: String,
    autoform: {
      options: [
        { label: 'Guest Lectures', value: 'gl' },
        { label: 'Product Forum', value: 'pf' }
      ]
    }
  }
}));
