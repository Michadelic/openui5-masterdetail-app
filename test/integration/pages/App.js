sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/matchers/PropertyStrictEquals"],function(e,s){"use strict";var t="App",a="app";e.createPageObjects({onTheAppPage:{actions:{iCloseTheMessageBox:function(){return this.waitFor({id:"serviceErrorMessageBox",autoWait:false,success:function(s){s.destroy();e.assert.ok(true,"The MessageBox was closed")}})}},assertions:{iShouldSeeTheBusyIndicator:function(){return this.waitFor({id:a,viewName:t,matchers:new s({name:"busy",value:true}),autoWait:false,success:function(){e.assert.ok(true,"The app is busy")},errorMessage:"The app is not busy"})},iShouldSeeTheMessageBox:function(){return this.waitFor({searchOpenDialogs:true,controlType:"sap.m.Dialog",matchers:new s({name:"type",value:"Message"}),success:function(){e.assert.ok(true,"The correct MessageBox was shown")}})}}}})});