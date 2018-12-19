/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BlockLayerUtils","sap/ui/thirdparty/jquery"],function(a,i){"use strict";var e=function(){};e.getElement=function(i){var e="sapUiLocalBusyIndicatorSizeMedium";if(i==="Large"){e="sapUiLocalBusyIndicatorSizeBig"}var c=document.createElement("div");c.className="sapUiLocalBusyIndicator "+e+" sapUiLocalBusyIndicatorFade";a.addAriaAttributes(c);t(c);return c};function t(a,i){i=i||"sapUiLocalBusyIndicatorAnimStandard";var e=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core"),t=e.getText("BUSY_TEXT");a.setAttribute("title",t);var c=document.createElement("div");c.className="sapUiLocalBusyIndicatorAnimation "+i;c.appendChild(document.createElement("div"));c.appendChild(document.createElement("div"));c.appendChild(document.createElement("div"));a.appendChild(c)}function c(a,i){var e=a.$parent.get(0),t=a.$blockLayer.get(0);var c=t.children[0],r=c.offsetWidth;if(e.offsetWidth<r){c.className="sapUiLocalBusyIndicatorAnimation sapUiLocalBusyIndicatorAnimSmall"}}e.addHTML=function(a,e){var r="sapUiLocalBusyIndicatorSizeMedium",s;switch(e){case sap.ui.core.BusyIndicatorSize.Small:r="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimSmall";break;case sap.ui.core.BusyIndicatorSize.Large:r="sapUiLocalBusyIndicatorSizeBig";s="sapUiLocalBusyIndicatorAnimStandard";break;case sap.ui.core.BusyIndicatorSize.Auto:r="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimStandard";break;default:r="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimStandard";break}var n=a.$parent.get(0),o=a.$blockLayer.get(0);n.className+=" sapUiLocalBusy";o.className+=" sapUiLocalBusyIndicator "+r+" sapUiLocalBusyIndicatorFade";t(o,s);if(e===sap.ui.core.BusyIndicatorSize.Auto){c(a)}i(n).attr("aria-busy",true)};e.animateIE9={start:function(){},stop:function(){}};return e},true);