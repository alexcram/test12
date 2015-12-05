Ext.define('App.store.Events', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'App.model.Event',
        storeId: 'Events',
        data: [{
            id: 1,
            name: 'Slightly Stoopid'
        }, {
            id: 2,
            name: 'Boston'
        }, {
            id: 3,
            name: 'Black Sabbath'
        }]
    }
});