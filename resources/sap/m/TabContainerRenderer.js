/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t.render=function(t,e){var n=e._getTabStrip(),i=e._getSelectedItemContent();t.write("<div ");t.writeControlData(e);t.addClass("sapMTabContainer");t.writeClasses();t.write(">");if(n){t.renderControl(n)}t.write("<div id='"+e.getId()+"-containerContent' ");t.addClass("sapMTabContainerContent");t.writeClasses();t.write(">");t.write("<div id='"+this.getContentDomId(e)+"' class='sapMTabContainerInnerContent'");t.writeAccessibilityState(e,this.getTabContentAccAttributes(e));t.write(">");if(i){i.forEach(function(e){t.renderControl(e)})}t.write("</div>");t.write("</div>");t.write("</div>")};t.getTabContentAccAttributes=function(t){var e=t.getSelectedItem(),n,i={role:"tabpanel"};if(e){n=t._toTabStripItem(e);if(n){i["aria-labelledby"]=n.getId()}}return i};t.getContentDomId=function(t){return t.getId()+"-content"};return t},true);