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
  year: {
    type: Number,
    max: 4
  },
  GuestType: {
    type: String
  }
}));
