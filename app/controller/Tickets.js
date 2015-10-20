Ext.define('App.controller.Tickets', {
    extend: 'Ext.app.Controller',

    init: function() {
      App.TicketsController = this;
    },

    config: {
         refs : {
            ticketsTitlebar   : 'titlebar[itemId=tickets-titlebar]',
            ticketsInstructionArea   : 'container[itemId=ticket-instruction-area]',
            ticketsInfoArea   : 'container[itemId=tickets-info-area]',
            ticketMap       : 'map[itemId=ticket-map]'
        },
        control: {
            'button[itemId=tickets-events-back-btn]': {
                tap: 'onEventsBackButtonTap'
            }
        }
    },

    onFocus: function(id){
        var that    = this,
            store   = Ext.getStore('Events'),
            rec     = store.getById(id);

        //==clear markers
        this.clearOverlays()

        //==set titlebar
        this.getTicketsTitlebar().setTitle(rec.get('name'))

        //==re center map
        var map = this.getTicketMap().getMap();
        map.setCenter(new google.maps.LatLng(32.732346, -117.196053));
        map.setZoom(10);

        //==refresh ticket instruction
        this.getTicketsInstructionArea().setHidden(false);
        this.getTicketsInfoArea().setHidden(true);

        //==refresh tickets
        // Ext.getStore('Tickets').load({
        //     params: {
        //         id: id
        //     },
        //     callback: function() {
                that.refreshTicketMap();
        //     }
        // })
    },

    onEventsBackButtonTap: function() {
        this.redirectTo('');
    },

    markersArray: [],

    refreshTicketMap: function() {
        var that = this;
        var map = this.getTicketMap().getMap();
        Ext.getStore('Tickets').each(function(item, index, length) {
            var lat         = item.get('lat'),
                lon         = item.get('lon'),
                position    = new google.maps.LatLng(lat, lon);

            var marker = new google.maps.Marker({
                position: position,
                title: item.get('quantity') + ' - ' + item.get('ticketPrice') + '/ea.',
                map: map
            });

            that.markersArray.push(marker)


            marker.addListener('click', function() {
                that.updateSellerInfo(item);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            });

        });
    },

    updateSellerInfo: function(sellerRecord) {
        this.getTicketsInstructionArea().setHidden(true);
        this.getTicketsInfoArea().setHidden(false);
        this.getTicketsInfoArea().setData({
            sellerName: sellerRecord.get('sellerName'),
            ticketQuantity: sellerRecord.get('ticketQuantity'),
            ticketPrice: sellerRecord.get('ticketPrice'),
            sellerRating: sellerRecord.get('sellerRating'),
            sellerNumber: sellerRecord.get('sellerNumber')
        });
    },

    clearOverlays: function() {
        for (var i = 0; i < this.markersArray.length; i++ ) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    }

});


