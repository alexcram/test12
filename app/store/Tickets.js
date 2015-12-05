Ext.define('App.store.Tickets', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'App.model.Ticket',
        storeId: 'Tickets',
        data: [{
            id: 1,
            sellerName: 'Nate W.',
            lat: 32.830304,
            lon: -117.276425,
            ticketPrice: '$70',
            ticketQuantity: '2',
            sellerRating: '4.5/5',
            sellerNumber: '858-353-3819'
        }]
    }
});