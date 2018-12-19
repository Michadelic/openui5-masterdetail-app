/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/Device","sap/ui/core/delegate/ItemNavigation","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/core/date/UniversalDate","sap/ui/unified/library","sap/ui/core/format/DateFormat","sap/ui/core/library","./YearPickerRenderer","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery"],function(e,t,a,i,r,s,o,n,h,l,u,p){"use strict";var d=h.CalendarType;var g=e.extend("sap.ui.unified.calendar.YearPicker",{metadata:{library:"sap.ui.unified",properties:{year:{type:"int",group:"Data",defaultValue:2e3},years:{type:"int",group:"Appearance",defaultValue:20},columns:{type:"int",group:"Appearance",defaultValue:4},date:{type:"object",group:"Data"},primaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance"}},events:{select:{},pageChange:{}}}});g.prototype.init=function(){var e=sap.ui.getCore().getConfiguration().getCalendarType();this.setProperty("primaryCalendarType",e);this._oYearFormat=n.getDateInstance({format:"y",calendarType:e});this._oFormatYyyymmdd=n.getInstance({pattern:"yyyyMMdd",calendarType:d.Gregorian});this._oMinDate=i._minDate(this.getPrimaryCalendarType());this._oMaxDate=i._maxDate(this.getPrimaryCalendarType())};g.prototype.onAfterRendering=function(){f.call(this)};g.prototype.setYear=function(e){this.setProperty("year",e,true);e=this.getProperty("year");var t=r.fromLocalJSDate(new Date,this.getPrimaryCalendarType());t.setDate(1);t.setMonth(0);t.setYear(e);this.setDate(t.toLocalJSDate());return this};g.prototype.setDate=function(e){var t,a,s,o;e&&i._checkJSDateObject(e);a=e.getFullYear();i._checkYearInValidRange(a);t=r.fromLocalJSDate(e,this.getPrimaryCalendarType());t.setMonth(0);t.setDate(1);this.setProperty("date",e,true);this.setProperty("year",t.getYear(),true);this._oDate=t;if(this.getDomRef()){s=this.getYears();o=new r(this._oDate,this.getPrimaryCalendarType());o.setYear(o.getYear()-Math.floor(s/2));C.call(this,o,Math.floor(s/2))}return this};g.prototype._getDate=function(){if(!this._oDate){var e=this.getYear();this._oDate=new r(e,0,1,this.getPrimaryCalendarType())}return this._oDate};g.prototype.setPrimaryCalendarType=function(e){this.setProperty("primaryCalendarType",e);this._oYearFormat=n.getDateInstance({format:"y",calendarType:e});if(this._oDate){this._oDate=new r(this._oDate,e);this._oDate.setMonth(0);this._oDate.setDate(1)}this._oMinDate=new r(this._oMinDate,e);this._oMaxDate=new r(this._oMaxDate,e);return this};g.prototype.nextPage=function(){D.call(this,true,this._oItemNavigation.getFocusedIndex());return this};g.prototype.previousPage=function(){D.call(this,false,this._oItemNavigation.getFocusedIndex());return this};g.prototype.onsapspace=function(e){e.preventDefault()};g.prototype.onsapselect=function(e){var t=this._oItemNavigation.getFocusedIndex();var a=_.call(this,t);if(a){this.fireSelect()}};g.prototype.onmousedown=function(e){this._oMousedownPosition={clientX:e.clientX,clientY:e.clientY}};g.prototype.onmouseup=function(e){if(this._bMousedownChange){this._bMousedownChange=false;this.fireSelect()}else if(t.support.touch&&this._isValueInThreshold(this._oMousedownPosition.clientX,e.clientX,10)&&this._isValueInThreshold(this._oMousedownPosition.clientY,e.clientY,10)){var a=this._oItemNavigation.getFocusedIndex();_.call(this,a);this.fireSelect()}};g.prototype.getFirstRenderedDate=function(){var e;if(this.getDomRef()){var t=this._oItemNavigation.getItemDomRefs();e=this._oFormatYyyymmdd.parse(p(t[0]).attr("data-sap-year-start"),true)}return e};g.prototype._isValueInThreshold=function(e,t,a){var i=e-a,r=e+a;return t>=i&&t<=r};g.prototype._checkFirstDate=function(e){var t=this.getYears();var a=new r(this._oMaxDate,this.getPrimaryCalendarType());a.setYear(a.getYear()-t+1);if(e.isAfter(a)&&e.getYear()!=a.getYear()){e=new r(a,this.getPrimaryCalendarType());e.setMonth(0);e.setDate(1)}else if(e.isBefore(this._oMinDate)&&e.getYear()!=this._oMinDate.getYear()){e=new r(this._oMinDate,this.getPrimaryCalendarType());e.setMonth(0);e.setDate(1)}return e};g.prototype._checkDateEnabled=function(e){var t=true;if(e.isAfter(this._oMaxDate)&&e.getYear()!=this._oMaxDate.getYear()||e.isBefore(this._oMinDate)&&e.getYear()!=this._oMinDate.getYear()){t=false}return t};function f(){var e=this.getYears();var t=this._getDate().getYear();var i=this._oMinDate.getYear();var r=this._oMaxDate.getYear();var s=this.getDomRef();var o=this.$().find(".sapUiCalItem");var n=Math.floor(e/2);if(t>r-Math.floor(e/2)){n=n+t-r+Math.floor(e/2)}else if(t<=i+Math.floor(e/2)){n=t-i}if(!this._oItemNavigation){this._oItemNavigation=new a;this._oItemNavigation.attachEvent(a.Events.AfterFocus,c,this);this._oItemNavigation.attachEvent(a.Events.FocusAgain,m,this);this._oItemNavigation.attachEvent(a.Events.BorderReached,v,this);this.addDelegate(this._oItemNavigation);this._oItemNavigation.setHomeEndColumnMode(true,true);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]})}this._oItemNavigation.setRootDomRef(s);this._oItemNavigation.setItemDomRefs(o);this._oItemNavigation.setCycling(false);this._oItemNavigation.setColumns(this.getColumns(),true);this._oItemNavigation.setFocusedIndex(n);this._oItemNavigation.setPageSize(o.length)}function c(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}if(a.type=="mousedown"){y.call(this,a,t)}}function m(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}if(a.type=="mousedown"){y.call(this,a,t)}}function y(e,a){if(e.button||t.support.touch){return}var i=_.call(this,a);if(i){this._bMousedownChange=true}e.preventDefault();e.setMark("cancelAutoClose")}function v(e){var t=e.getParameter("event");if(t.type){var a=this.getYears();var i=this.getColumns();if(i==0){i=a}switch(t.type){case"sapnext":case"sapnextmodifiers":if(t.keyCode==u.ARROW_DOWN&&i<a){D.call(this,true,this._oItemNavigation.getFocusedIndex()-a+i,true)}else{D.call(this,true,0,true)}break;case"sapprevious":case"sappreviousmodifiers":if(t.keyCode==u.ARROW_UP&&i<a){D.call(this,false,a-i+this._oItemNavigation.getFocusedIndex(),true)}else{D.call(this,false,a-1,true)}break;case"sappagedown":D.call(this,true,this._oItemNavigation.getFocusedIndex(),true);break;case"sappageup":D.call(this,false,this._oItemNavigation.getFocusedIndex(),true);break;default:break}}}function _(e){var t=this._oItemNavigation.getItemDomRefs();var a=p(t[e]);if(a.hasClass("sapUiCalItemDsbl")){return false}var i=a.attr("data-sap-year-start");var s=r.fromLocalJSDate(this._oFormatYyyymmdd.parse(i));var o=this.getId()+"-y"+i;for(var n=0;n<t.length;n++){a=p(t[n]);if(a.attr("id")==o){a.addClass("sapUiCalItemSel");a.attr("aria-selected","true")}else{a.removeClass("sapUiCalItemSel");a.attr("aria-selected","false")}}this.setProperty("date",s.toLocalJSDate(),true);this.setProperty("year",s.getYear(),true);return true}function D(e,t,a){var i=this._oItemNavigation.getItemDomRefs();var s=r.fromLocalJSDate(this._oFormatYyyymmdd.parse(p(i[0]).attr("data-sap-year-start")),this.getPrimaryCalendarType());var o=this.getYears();if(e){var n=new r(this._oMaxDate,this.getPrimaryCalendarType());n.setYear(n.getYear()-o+1);if(s.isBefore(n)){s.setYear(s.getYear()+o);if(s.isAfter(n)){t=t+(s.getYear()-n.getYear());if(t>o-1){t=o-1}s=this._oMaxDate;s.setMonth(0);s.setDate(1)}}else{return}}else{if(s.isAfter(this._oMinDate)){s.setYear(s.getYear()-o);if(s.isBefore(this._oMinDate)){t=t-(this._oMinDate.getYear()-s.getYear());if(t<0){t=0}s=new r(this._oMinDate,this.getPrimaryCalendarType())}}else{return}}C.call(this,s,t);if(a){this.firePageChange()}}function C(e,t){var a=this._oFormatYyyymmdd.format(this._getDate().toUTCJSDate(),true);var i=false;var o=this._checkFirstDate(e);var n;if(!o.isSame(e)){n=new r(e,this.getPrimaryCalendarType());n.setYear(n.getYear()+t);e=o;i=true}var h=this._oItemNavigation.getItemDomRefs();var l=new r(e,this.getPrimaryCalendarType());for(var u=0;u<h.length;u++){var d=this._oFormatYyyymmdd.format(l.toUTCJSDate(),true);var g=p(h[u]);g.attr("id",this.getId()+"-y"+d);g.text(this._oYearFormat.format(s.getInstance(l.toUTCJSDate(),l.getCalendarType()),true));g.attr("data-sap-year-start",d);if(g.hasClass("sapUiCalItemSel")&&d!=a){g.removeClass("sapUiCalItemSel");g.attr("aria-selected","false")}else if(!g.hasClass("sapUiCalItemSel")&&d==a){g.addClass("sapUiCalItemSel");g.attr("aria-selected","true")}var f=true;if(i){f=this._checkDateEnabled(l);if(l.isSame(n)){t=u}}if(f){g.removeClass("sapUiCalItemDsbl");g.removeAttr("aria-disabled")}else{g.addClass("sapUiCalItemDsbl");g.attr("aria-disabled",true)}l.setYear(l.getYear()+1)}this._oItemNavigation.focusItem(t)}return g});