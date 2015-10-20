Ext.define('App.view.Tickets', {
    extend: 'Ext.Container',
    xtype: 'view-tickets',
    id: 'view-tickets',
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items : [
            {
                xtype: 'titlebar',
                itemId: 'tickets-titlebar',
                title: '',
                items: [
                    {
                        text: 'Events',
                        itemId: 'tickets-events-back-btn',
                        align: 'left'
                    }
                ]
            },
            {
                xtype: 'container',
                html: 'Please select a ticket on the map below to see more info.',
                itemId: 'ticket-instruction-area',
                padding: '15',
                height: 100,
            },
            {
                xtype: 'container',
                hidden: true,
                itemId: 'tickets-info-area',
                padding: '15',
                height: 100,
                tpl: new Ext.XTemplate(
                    '<div class="ticket-item">'
                        , '<div class="ticket-item-seller-name">{sellerName}</div>'
                        , '<div class="ticket-item-details">{ticketQuantity} tickets for {ticketPrice} each.</div>'
                        , '<a href="sms:{sellerNumber}" target="_blank">Text {sellerName} Now!</a>'
                    , '</div>'
                )

            },
            {
                xtype: 'map',
                itemId: 'ticket-map',
                flex: 1,
                mapOptions: {
                    disableDefaultUI: true,
                    zoom: 10,
                    center: {lat: 32.715736, lng: -117.161087}
                }
            }
        ]
    }
});
