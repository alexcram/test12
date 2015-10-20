Ext.define('App.model.Ticket', {
  extend: 'Ext.data.Model',
  config: {
    fields: [{
      name: 'id'
    }, {
      name: 'sellerName'
    }, {
      name: 'sellerNumber'
    }, {
      name: 'sellerRating'
    }, {
      name: 'ticketPrice'
    }, {
      name: 'ticketQuantity'
    }, {
      name: 'lat'
    }, {
      name: 'lon'
    }]
  }
});