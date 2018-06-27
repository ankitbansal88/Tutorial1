sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	],function (Controller,MessageToast){
		"use strict";
		return Controller.extend("controller.App",{
			onShowHello:function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sReceipient = this.getView().getModel().getProperty("/receipient/name");
				var sMsg = oBundle.getText("helloMsg",[sReceipient]);
				MessageToast.show(sMsg);
			}
		});
	});