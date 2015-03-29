if (Meteor.isClient) {
  // counter starts at 0
    Session.setDefault('counter', 0);
    Session.setDefault('counter2', 0);

    Template.hello.helpers({
        counter: function () {
         return Session.get('counter');
        }
    });
    Template.hello2.helpers({
        counter2: function () {
            return Session.get('counter2');
        }
    });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 2);
    }
  });
    Template.hello2.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter2', Session.get('counter2') + 5);
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
