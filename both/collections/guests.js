Guests = new Mongo.Collection('guests');

Guests.attachSchema( new SimpleSchema({
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
    type: String
  },

  type: {
    type: String
  }
}));


