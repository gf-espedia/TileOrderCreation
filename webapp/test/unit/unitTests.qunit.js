/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TileOrderCreation/TileOrderCreation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});