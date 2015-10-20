Ext.define('App.controller.Routes', {
    extend: 'Ext.app.Controller',

    init: function() {
        App.RoutesController = this;
    },

    config: {
        routes: {
            '': {
                action: 'onMain'
            },
            'tickets/:id': {
                action: 'onTickets'
            }
        },
    },

    getView: function(viewClass, viewId) {
        var view = Ext.getCmp(viewId);
        if (!view) {
            view = Ext.create(viewClass);
            Ext.Viewport.add(view);
        }
        return view;
    },

    onMain: function() {
        var that = this;
        Ext.Viewport.setActiveItem(that.getView('App.view.Main', 'view-main'));
    },

    onTickets: function(id) {
        var that = this;
        Ext.Viewport.setActiveItem(that.getView('App.view.Tickets', 'view-tickets'));
        App.TicketsController.onFocus(id)
    },
});