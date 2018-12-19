/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/LocaleData"],function(e,t){"use strict";var r=e.extend("sap.ui.core.date.UniversalDate",{constructor:function(){var e=r.getClass();return this.createDate(e,arguments)}});r.UTC=function(){var e=r.getClass();return e.UTC.apply(e,arguments)};r.now=function(){return Date.now()};r.prototype.createDate=function(e,t){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}};r.getInstance=function(e,t){var n,a;if(e instanceof r){e=e.getJSDate()}if(!t){t=sap.ui.getCore().getConfiguration().getCalendarType()}n=r.getClass(t);a=Object.create(n.prototype);a.oDate=e;a.sCalendarType=t;return a};r.getClass=function(e){if(!e){e=sap.ui.getCore().getConfiguration().getCalendarType()}return sap.ui.requireSync("sap/ui/core/date/"+e)};["getDate","getMonth","getFullYear","getYear","getDay","getHours","getMinutes","getSeconds","getMilliseconds","getUTCDate","getUTCMonth","getUTCFullYear","getUTCDay","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","getTime","valueOf","getTimezoneOffset","toString","toDateString","setDate","setFullYear","setYear","setMonth","setHours","setMinutes","setSeconds","setMilliseconds","setUTCDate","setUTCFullYear","setUTCMonth","setUTCHours","setUTCMinutes","setUTCSeconds","setUTCMilliseconds"].forEach(function(e){r.prototype[e]=function(){return this.oDate[e].apply(this.oDate,arguments)}});r.prototype.getJSDate=function(){return this.oDate};r.prototype.getCalendarType=function(){return this.sCalendarType};r.prototype.getEra=function(){return r.getEraByDate(this.sCalendarType,this.oDate.getFullYear(),this.oDate.getMonth(),this.oDate.getDate())};r.prototype.setEra=function(e){};r.prototype.getUTCEra=function(){return r.getEraByDate(this.sCalendarType,this.oDate.getUTCFullYear(),this.oDate.getUTCMonth(),this.oDate.getUTCDate())};r.prototype.setUTCEra=function(e){};r.prototype.getWeek=function(){return r.getWeekByDate(this.sCalendarType,this.getFullYear(),this.getMonth(),this.getDate())};r.prototype.setWeek=function(e){var t=r.getFirstDateOfWeek(this.sCalendarType,e.year||this.getFullYear(),e.week);this.setFullYear(t.year,t.month,t.day)};r.prototype.getUTCWeek=function(){return r.getWeekByDate(this.sCalendarType,this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate())};r.prototype.setUTCWeek=function(e){var t=r.getFirstDateOfWeek(this.sCalendarType,e.year||this.getFullYear(),e.week);this.setUTCFullYear(t.year,t.month,t.day)};r.prototype.getQuarter=function(){return Math.floor(this.getMonth()/3)};r.prototype.getUTCQuarter=function(){return Math.floor(this.getUTCMonth()/3)};r.prototype.getDayPeriod=function(){if(this.getHours()<12){return 0}else{return 1}};r.prototype.getUTCDayPeriod=function(){if(this.getUTCHours()<12){return 0}else{return 1}};r.prototype.getTimezoneShort=function(){if(this.oDate.getTimezoneShort){return this.oDate.getTimezoneShort()}};r.prototype.getTimezoneLong=function(){if(this.oDate.getTimezoneLong){return this.oDate.getTimezoneLong()}};var n=7*24*60*60*1e3;r.getWeekByDate=function(e,t,r,n){var s=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale(),i=this.getClass(e),g=a(i,t),u=new i(i.UTC(t,r,n)),l,f,c,p,C;if(s.getRegion()==="US"){l=o(g,u)}else{f=t-1;c=t+1;p=a(i,f);C=a(i,c);if(u>=C){t=c;l=0}else if(u<g){t=f;l=o(p,u)}else{l=o(g,u)}}return{year:t,week:l}};r.getFirstDateOfWeek=function(e,t,r){var o=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale(),s=this.getClass(e),i=a(s,t),g=new s(i.valueOf()+r*n);if(o.getRegion()==="US"&&r===0&&i.getUTCFullYear()<t){return{year:t,month:0,day:1}}return{year:g.getUTCFullYear(),month:g.getUTCMonth(),day:g.getUTCDate()}};function a(e,r){var n=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale(),a=t.getInstance(n),o=a.getMinimalDaysInFirstWeek(),s=a.getFirstDayOfWeek(),i=new e(e.UTC(r,0,1)),g=7;while(i.getUTCDay()!==s){i.setUTCDate(i.getUTCDate()-1);g--}if(g<o){i.setUTCDate(i.getUTCDate()+7)}return i}function o(e,t){return Math.floor((t.valueOf()-e.valueOf())/n)}var s={};r.getEraByDate=function(e,t,r,n){var a=i(e),o=new Date(0).setUTCFullYear(t,r,n),s;for(var g=a.length-1;g>=0;g--){s=a[g];if(!s){continue}if(s._start&&o>=s._startInfo.timestamp){return g}if(s._end&&o<s._endInfo.timestamp){return g}}};r.getCurrentEra=function(e){var t=new Date;return this.getEraByDate(e,t.getFullYear(),t.getMonth(),t.getDate())};r.getEraStartDate=function(e,t){var r=i(e),n=r[t]||r[0];if(n._start){return n._startInfo}};function i(e){var r=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale(),n=t.getInstance(r),a=s[e];if(!a){var a=n.getEraDates(e);if(!a[0]){a[0]={_start:"1-1-1"}}for(var o=0;o<a.length;o++){var i=a[o];if(!i){continue}if(i._start){i._startInfo=g(i._start)}if(i._end){i._endInfo=g(i._end)}}s[e]=a}return a}function g(e){var t=e.split("-"),r,n,a;if(t[0]==""){r=-parseInt(t[1]);n=parseInt(t[2])-1;a=parseInt(t[3])}else{r=parseInt(t[0]);n=parseInt(t[1])-1;a=parseInt(t[2])}return{timestamp:new Date(0).setUTCFullYear(r,n,a),year:r,month:n,day:a}}return r});