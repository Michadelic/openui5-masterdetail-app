/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(e){"use strict";var l=e.BlockBackgroundType;var t={};t.render=function(e,l){this.startRow(e,l);this.renderContent(e,l);this.endRow(e,l)};t.startRow=function(e,l){e.write("<div");e.writeControlData(l);e.addClass("sapUiBlockLayoutRow");this.addRowRenderingClass(e,l);e.writeStyles();e.writeClasses();e.write(">")};t.addRowRenderingClass=function(e,l){if(l.getScrollable()){e.addClass("sapUiBlockScrollingRow");if(l.getContent().length>=6){e.addClass("sapUiBlockScrollingNarrowCells")}}else{e.addClass("sapUiBlockHorizontalCellsRow")}};t.renderContent=function(e,t){var r=t.getContent(),a=t.getScrollable(),s=l,o=t.getParent().getBackground(),n=t.getAccentCells(),i=0,d;r.forEach(function(e,l){l%2==0?e.addStyleClass("sapUiBlockLayoutOddCell"):e.addStyleClass("sapUiBlockLayoutEvenCell");if(a){e.addStyleClass("sapUiBlockScrollableCell")}else{e.addStyleClass("sapUiBlockHorizontalCell")}});switch(o){case s.Mixed:t._processMixedCellStyles(n[0],r);break;case s.Accent:t._processAccentCellStyles(n,r);break}var c=t._getCellArangementForCurrentSize();if(a){r.forEach(e.renderControl,e)}else if(c){for(var C=0;C<c.length;C++){var w=c[C];e.write("<div ");e.addStyle("display","flex");e.writeStyles();e.write(">");for(var f=0;f<w.length;f++){d=w[f];r[i]._setFlexWidth(d);e.renderControl(r[i]);i++}e.write("</div>")}}};t.endRow=function(e){e.write("</div>")};return t},true);