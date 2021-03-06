var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function() {
  console.log('connected');

  mongoose.connection.db.dropDatabase();

  var items =  [{
    name: 'Ice Cream'
  }, {
    name: 'Waffles'
  }, {
    name: 'Candy',
    purchased: true
  }, {
    name: 'Snarks'
  }];

  for (var i = 0; i < 10; i++) {
    items.forEach(function(item) {
      new GroceryItem(item).save();
    })
  }

});
