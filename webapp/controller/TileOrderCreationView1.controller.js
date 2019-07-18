sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileOrderCreation.TileOrderCreation.controller.TileOrderCreationView1", {
		onInit: function () {
			history.back();
			window.open("https://order-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});