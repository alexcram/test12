Ext.define('App.view.Main', {
	extend: 'Ext.Container',
	xtype: 'view-main',
	id: 'view-main',
	config: {
		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'titlebar',
			title: 'LiveTix'
		}, {
			xtype: 'container',
			html: '<h2>Welcome</h2><h3>Real tickets, from real people, in real time.</h3>',
			padding: '15'
		}, {
			xtype: 'dataview',
			flex: 1,
			padding: '15',
			store: 'Events',
			itemTpl: new Ext.XTemplate(
				'<div class="event-item">', '<div class="event-item-name">{name}</div>', '<a href="#tickets/{id}">Go Live</a>', '</div>'
			)
		}]
	}
});