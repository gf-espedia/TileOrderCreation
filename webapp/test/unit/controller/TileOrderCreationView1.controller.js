/*global QUnit*/

sap.ui.define([
	"TileOrderCreation/TileOrderCreation/controller/TileOrderCreationView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileOrderCreationView1 Controller");

	QUnit.test("I should test the TileOrderCreationView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});