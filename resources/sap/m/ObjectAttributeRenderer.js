/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library"],function(t){"use strict";var e=t.TextDirection;var i={MAX_LINES:{SINGLE_LINE:1,MULTI_LINE:2}};i.render=function(t,e){var i=e.getParent(),r=e.getTooltip_AsString();if(e._isEmpty()){t.write("<div");t.writeControlData(e);t.addClass("sapMObjectAttributeDiv");t.addClass("sapUiHidden");t.writeClasses();t.write(">");t.write("</div>");return}t.write("<div");t.writeControlData(e);t.addClass("sapMObjectAttributeDiv");if(e._isClickable()){t.addClass("sapMObjectAttributeActive");t.writeAttribute("tabindex","0");t.writeAccessibilityState(e,{role:"link"})}t.writeClasses();if(r){t.writeAttributeEscaped("title",r)}t.write(">");if(e._isClickable()||i instanceof sap.m.ObjectHeader){this.renderActiveTitle(t,e);this.renderActiveText(t,e,i)}else{t.renderControl(e._getUpdatedTextControl())}t.write("</div>")};i.renderActiveTitle=function(t,e){if(!e.getProperty("title")){return}t.write('<span id="'+e.getId()+'-title"');t.addClass("sapMObjectAttributeTitle");t.writeClasses();t.write(">");t.writeEscaped(e.getProperty("title"));t.write("</span>");t.write('<span id="'+e.getId()+'-colon"');t.addClass("sapMObjectAttributeColon");t.writeClasses();t.write(">");t.write(":&nbsp;");t.write("</span>")};i.renderActiveText=function(t,r,s){var a=r.getTextDirection(),n=r.getAggregation("customContent");t.write('<span id="'+r.getId()+'-text"');t.addClass("sapMObjectAttributeText");if(a&&a!==e.Inherit){t.writeAttribute("dir",a.toLowerCase())}t.writeClasses();t.write(">");if(n&&s){if(s instanceof sap.m.ObjectHeader&&!r.getParent().getResponsive()){r._setControlWrapping(n,true,i.MAX_LINES.MULTI_LINE)}else{r._setControlWrapping(n,false,i.MAX_LINES.SINGLE_LINE)}t.renderControl(n)}else{t.writeEscaped(r.getProperty("text"))}t.write("</span>")};return i},true);