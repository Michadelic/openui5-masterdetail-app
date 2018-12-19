/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/Locale","sap/ui/core/LocaleData","sap/base/strings/escapeRegExp","sap/base/assert","sap/ui/thirdparty/jquery"],function(e,t,i,r,n,a){"use strict";var o=e.extend("sap.ui.core.format.NumberFormat",{constructor:function(e){throw new Error}});var s=/0+(\.0+)?/;var u={INTEGER:"integer",FLOAT:"float",CURRENCY:"currency",UNIT:"unit",PERCENT:"percent"};var g={FLOOR:"floor",CEILING:"ceiling",TOWARDS_ZERO:"towards_zero",AWAY_FROM_ZERO:"away_from_zero",HALF_FLOOR:"half_floor",HALF_CEILING:"half_ceiling",HALF_TOWARDS_ZERO:"half_towards_zero",HALF_AWAY_FROM_ZERO:"half_away_from_zero"};var l={};l[g.FLOOR]=Math.floor;l[g.CEILING]=Math.ceil;l[g.TOWARDS_ZERO]=function(e){return e>0?Math.floor(e):Math.ceil(e)};l[g.AWAY_FROM_ZERO]=function(e){return e>0?Math.ceil(e):Math.floor(e)};l[g.HALF_TOWARDS_ZERO]=function(e){return e>0?Math.ceil(e-.5):Math.floor(e+.5)};l[g.HALF_AWAY_FROM_ZERO]=function(e){return e>0?Math.floor(e+.5):Math.ceil(e-.5)};l[g.HALF_FLOOR]=function(e){return Math.ceil(e-.5)};l[g.HALF_CEILING]=Math.round;o.RoundingMode=g;o.oDefaultIntegerFormat={minIntegerDigits:1,maxIntegerDigits:99,minFractionDigits:0,maxFractionDigits:0,groupingEnabled:false,groupingSize:3,groupingSeparator:",",decimalSeparator:".",plusSign:"+",minusSign:"-",isInteger:true,type:u.INTEGER,showMeasure:false,style:"standard",parseAsString:false,roundingMode:o.RoundingMode.TOWARDS_ZERO,emptyString:NaN,showScale:true};o.oDefaultFloatFormat={minIntegerDigits:1,maxIntegerDigits:99,minFractionDigits:0,maxFractionDigits:99,groupingEnabled:true,groupingSize:3,groupingSeparator:",",decimalSeparator:".",plusSign:"+",minusSign:"-",isInteger:false,type:u.FLOAT,showMeasure:false,style:"standard",parseAsString:false,roundingMode:o.RoundingMode.HALF_AWAY_FROM_ZERO,emptyString:NaN,showScale:true};o.oDefaultPercentFormat={minIntegerDigits:1,maxIntegerDigits:99,minFractionDigits:0,maxFractionDigits:99,groupingEnabled:true,groupingSize:3,groupingSeparator:",",decimalSeparator:".",plusSign:"+",minusSign:"-",percentSign:"%",isInteger:false,type:u.PERCENT,showMeasure:false,style:"standard",parseAsString:false,roundingMode:o.RoundingMode.HALF_AWAY_FROM_ZERO,emptyString:NaN,showScale:true};o.oDefaultCurrencyFormat={minIntegerDigits:1,maxIntegerDigits:99,groupingEnabled:true,groupingSize:3,groupingSeparator:",",decimalSeparator:".",plusSign:"+",minusSign:"-",isInteger:false,type:u.CURRENCY,showMeasure:true,currencyCode:true,currencyContext:"standard",style:"standard",parseAsString:false,roundingMode:o.RoundingMode.HALF_AWAY_FROM_ZERO,emptyString:NaN,showScale:true,ignorePrecision:true};o.oDefaultUnitFormat={minIntegerDigits:1,maxIntegerDigits:99,groupingEnabled:true,groupingSize:3,groupingSeparator:",",decimalSeparator:".",plusSign:"+",minusSign:"-",isInteger:false,type:u.UNIT,showMeasure:true,style:"standard",customUnits:undefined,allowedUnits:undefined,parseAsString:false,roundingMode:o.RoundingMode.HALF_AWAY_FROM_ZERO,emptyString:NaN,showScale:true};o.getInstance=function(e,t){return this.getFloatInstance(e,t)};o.getFloatInstance=function(e,t){var i=this.createInstance(e,t),r=this.getLocaleFormatOptions(i.oLocaleData,u.FLOAT);i.oFormatOptions=a.extend(false,{},this.oDefaultFloatFormat,r,e);return i};o.getIntegerInstance=function(e,t){var i=this.createInstance(e,t),r=this.getLocaleFormatOptions(i.oLocaleData,u.INTEGER);i.oFormatOptions=a.extend(false,{},this.oDefaultIntegerFormat,r,e);return i};o.getCurrencyInstance=function(e,t){var i=this.createInstance(e,t),r=e&&e.currencyContext,n=this.getLocaleFormatOptions(i.oLocaleData,u.CURRENCY,r);i.oFormatOptions=a.extend(false,{},this.oDefaultCurrencyFormat,n,e);return i};o.getUnitInstance=function(e,t){var i=this.createInstance(e,t),r=this.getLocaleFormatOptions(i.oLocaleData,u.UNIT);i.oFormatOptions=a.extend(false,{},this.oDefaultUnitFormat,r,e);return i};o.getPercentInstance=function(e,t){var i=this.createInstance(e,t),r=this.getLocaleFormatOptions(i.oLocaleData,u.PERCENT);i.oFormatOptions=a.extend(false,{},this.oDefaultPercentFormat,r,e);return i};o.createInstance=function(e,r){var o=Object.create(this.prototype),s;if(e instanceof t){r=e;e=undefined}if(!r){r=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale()}o.oLocale=r;o.oLocaleData=i.getInstance(r);o.oOriginalFormatOptions=e;if(e){if(e.pattern){s=this.parseNumberPattern(e.pattern);a.each(s,function(t,i){e[t]=i})}if(e.emptyString!==undefined){n(typeof e.emptyString!=="string","The format option 'emptyString' can not be with type 'string'");n(e.emptyString===0||e.emptyString===null||e.emptyString!==e.emptyString,"The format option 'emptyString' must be either 0, null or NaN")}}return o};o.getLocaleFormatOptions=function(e,t,i){var r,n;switch(t){case u.PERCENT:n=e.getPercentPattern();break;case u.CURRENCY:n=e.getCurrencyPattern(i);break;case u.UNIT:n=e.getDecimalPattern();break;default:n=e.getDecimalPattern()}r=this.parseNumberPattern(n);r.plusSign=e.getNumberSymbol("plusSign");r.minusSign=e.getNumberSymbol("minusSign");r.decimalSeparator=e.getNumberSymbol("decimal");r.groupingSeparator=e.getNumberSymbol("group");r.percentSign=e.getNumberSymbol("percentSign");r.pattern=n;switch(t){case u.FLOAT:case u.PERCENT:r.minFractionDigits=0;r.maxFractionDigits=99;break;case u.INTEGER:r.minFractionDigits=0;r.maxFractionDigits=0;r.groupingEnabled=false;break;case u.CURRENCY:r.minFractionDigits=undefined;r.maxFractionDigits=undefined;break}return r};o.parseNumberPattern=function(e){var t=0,i=0,r=0,n=false,a=0,o=0,s=e.indexOf(";"),u={Integer:0,Fraction:1},g=u.Integer;if(s!==-1){e=e.substring(0,s)}for(var l=0;l<e.length;l++){var c=e[l];switch(c){case",":if(n){a=o;o=0}n=true;break;case".":g=u.Fraction;break;case"0":if(g===u.Integer){t++;if(n){o++}}else{i++;r++}break;case"#":if(g===u.Integer){if(n){o++}}else{r++}break}}if(!a){a=o;o=0}return{minIntegerDigits:t,minFractionDigits:i,maxFractionDigits:r,groupingEnabled:n,groupingSize:a,groupingBaseSize:o}};o.prototype.format=function(e,t){if(Array.isArray(e)){t=e[1];e=e[0]}var i="",r="",s="",g="",l="",f="",h=0,F=0,S=0,D=0,y=e<0,R=-1,b=a.extend({},this.oFormatOptions),C=this.oOriginalFormatOptions,E=b.type===u.CURRENCY&&t==="INR"&&this.oLocale.getLanguage()==="en"&&this.oLocale.getRegion()==="IN",N,O,L,v,I,A;if(e===b.emptyString||isNaN(e)&&isNaN(b.emptyString)){return""}if(b.type===u.UNIT){if(b.customUnits&&typeof b.customUnits==="object"){I=b.customUnits[t]}else{A=this.oLocaleData.getUnitFromMapping(t)||t;I=this.oLocaleData.getUnitFormat(A)}b.decimals=I&&(typeof I.decimals==="number"&&I.decimals>=0)?I.decimals:b.decimals;b.precision=I&&(typeof I.precision==="number"&&I.precision>=0)?I.precision:b.precision}if(b.decimals!==undefined){b.minFractionDigits=b.decimals;b.maxFractionDigits=b.decimals}if(b.shortLimit===undefined||Math.abs(e)>=b.shortLimit){L=b.shortRefNumber===undefined?e:b.shortRefNumber;O=c(L,b,this.oLocaleData,E);if(O&&O.formatString!="0"){e=e/O.magnitude;if(b.shortDecimals!==undefined){b.minFractionDigits=b.shortDecimals;b.maxFractionDigits=b.shortDecimals}else{if(C.minFractionDigits===undefined&&C.maxFractionDigits===undefined&&C.decimals===undefined&&C.precision===undefined&&C.pattern===undefined){b.precision=2;b.minFractionDigits=0;b.maxFractionDigits=99}if(C.maxFractionDigits===undefined&&C.decimals===undefined){b.maxFractionDigits=99}}b.roundingMode=o.RoundingMode.HALF_AWAY_FROM_ZERO}}if((O||!b.ignorePrecision)&&b.precision!==undefined){b.maxFractionDigits=Math.min(b.maxFractionDigits,d(e,b.precision));b.minFractionDigits=Math.min(b.minFractionDigits,b.maxFractionDigits)}if(b.type==u.PERCENT){e=o._shiftDecimalPoint(e,2)}if(b.type==u.CURRENCY){var M=this.oLocaleData.getCurrencyDigits(t);if(b.maxFractionDigits===undefined){b.maxFractionDigits=M}if(b.minFractionDigits===undefined){b.minFractionDigits=M}}if(typeof e==="number"){e=m(e,b.maxFractionDigits,b.roundingMode)}if(e==0){y=false}l=this.convertToDecimal(e);if(l=="NaN"){return l}if(y){l=l.substr(1)}R=l.indexOf(".");if(R>-1){i=l.substr(0,R);r=l.substr(R+1)}else{i=l}if(i.length<b.minIntegerDigits){i=i.padStart(b.minIntegerDigits,"0")}else if(i.length>b.maxIntegerDigits){i="".padStart(b.maxIntegerDigits,"?")}if(r.length<b.minFractionDigits){r=r.padEnd(b.minFractionDigits,"0")}else if(r.length>b.maxFractionDigits){r=r.substr(0,b.maxFractionDigits)}F=i.length;if(b.groupingEnabled){if(E){var x=[3,2,2],_,w=0;h=i.length;while(h>0){_=x[w%3];h-=_;if(w>0){s=b.groupingSeparator+s}if(h<0){_+=h;h=0}s=i.substr(h,_)+s;w++}}else{S=b.groupingSize;D=b.groupingBaseSize||S;h=Math.max(F-D,0)%S||S;s=i.substr(0,h);while(F-h>=D){s+=b.groupingSeparator;s+=i.substr(h,S);h+=S}s+=i.substr(h)}}else{s=i}if(y){g=b.minusSign}g+=s;if(r){g+=b.decimalSeparator+r}if(O&&O.formatString&&b.showScale&&b.type!==u.CURRENCY){v=this.oLocaleData.getPluralCategory(i+"."+r);O.formatString=this.oLocaleData.getDecimalFormat(b.style,O.key,v);g=O.formatString.replace(O.valueSubString,g);g=g.replace(/'.'/g,".")}if(b.type===u.CURRENCY){f=b.pattern;if(O&&O.formatString&&b.showScale){v=this.oLocaleData.getPluralCategory(i+"."+r);if(E){f=p("short",O.key,v)}else{f=this.oLocaleData.getCurrencyFormat("short",O.key,v)}f=f.replace(/'.'/g,".")}N=f.split(";");if(N.length===2){f=y?N[1]:N[0];if(y){g=g.substring(1)}}if(!b.currencyCode){t=this.oLocaleData.getCurrencySymbol(t)}g=this._composeCurrencyResult(f,g,t,{showMeasure:b.showMeasure,negative:y,minusSign:b.minusSign})}if(b.type===u.PERCENT){f=b.pattern;g=f.replace(/[0#.,]+/,g);g=g.replace(/%/,b.percentSign)}if(b.showMeasure&&b.type===u.UNIT){v=this.oLocaleData.getPluralCategory(i+"."+r);n(v,"Cannot find plural category for "+(i+"."+r));var U=!b.allowedUnits||b.allowedUnits.indexOf(t)>=0;if(!U){n(U,"The given unit '"+t+"' is not part of the allowed unit types: ["+b.allowedUnits.join(",")+"].");return""}if(I){f=I["unitPattern-count-"+v];if(!f){f=I["unitPattern-count-other"]}n(f,"Cannot find pattern 'unitPattern-count-"+v+"' in '"+t+"'");if(!f){return""}g=f.replace("{0}",g)}else{n(I,"Unit '"+t+"' is unknown");return""}}if(sap.ui.getCore().getConfiguration().getOriginInfo()){g=new String(g);g.originInfo={source:"Common Locale Data Repository",locale:this.oLocale.toString()}}return g};o.prototype._composeCurrencyResult=function(e,t,i,r){var n=r.minusSign;e=e.replace(/[0#.,]+/,t);if(r.showMeasure&&i){var a="¤",o={"[:digit:]":/\d/,"[:^S:]":/[^\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/},s=e.indexOf(a),u=s<e.length/2?"after":"before",g=this.oLocaleData.getCurrencySpacing(u),l=u==="after"?i.charAt(i.length-1):i.charAt(0),c,f=o[g.currencyMatch],p=o[g.surroundingMatch],m;e=e.replace(a,i);c=u==="after"?e.charAt(s+i.length):e.charAt(s-1);if(f&&f.test(l)&&p&&p.test(c)){if(u==="after"){m=s+i.length}else{m=s}e=e.slice(0,m)+g.insertBetween+e.slice(m)}else if(r.negative&&u==="after"){n="\ufeff"+r.minusSign}}else{e=e.replace(/\s*\u00a4\s*/,"")}if(r.negative){e=e.replace(/-/,n)}return e};o.prototype.parse=function(e){var t=this.oFormatOptions,i=h(t.plusSign+t.minusSign),r=h(t.groupingSeparator),a=h(t.decimalSeparator),s="^\\s*(["+i+"]?(?:[0-9"+r+"]+|[0-9"+r+"]*"+a+"[0-9]*)(?:[eE][+-][0-9]+)?)\\s*$",g="^\\s*(["+i+"]?[0-9"+r+"]+)\\s*$",l=new RegExp(r,"g"),c=new RegExp(a,"g"),p=this.oLocaleData.getNumberSymbol("percentSign"),m=t.type===u.CURRENCY&&this.oLocale.getLanguage()==="en"&&this.oLocale.getRegion()==="IN",d,D,y,R,b=0,C,E;if(e===""){E=t.emptyString;if(t.parseAsString&&(t.emptyString===0||isNaN(t.emptyString))){E=t.emptyString+""}if(t.type===u.CURRENCY){return[E,undefined]}else{return E}}R=t.type===u.PERCENT?t.pattern:this.oLocaleData.getPercentPattern();if(R.charAt(0)==="%"){s=s.slice(0,1)+"%?"+s.slice(1)}else if(R.charAt(R.length-1)==="%"){s=s.slice(0,s.length-1)+"%?"+s.slice(s.length-1)}var N;if(t.type===u.UNIT){var O;if(t.customUnits&&typeof t.customUnits==="object"){O=t.customUnits}else{O=this.oLocaleData.getUnitFormats()}n(O,"Unit patterns cannot be loaded");if(t.allowedUnits){var L={};for(var v=0;v<t.allowedUnits.length;v++){var I=t.allowedUnits[v];L[I]=O[I]}O=L}var A=F(O,e);N=A.cldrCode;if(N.length===1){y=N[0]}else if(N.length===0){n(N.length===1,"Cannot find unit for input: '"+e+"'");return null}else{n(N.length===1,"Ambiguous unit ["+N.join(", ")+"] for input: '"+e+"'");y=undefined}e=A.numberValue||e}if(t.type===u.CURRENCY){var M=this.oLocaleData.getCurrencySymbols(),x=S(M,e),y;if(!x){return null}e=x.numberValue;y=x.currencyCode;if(!t.showMeasure&&y){return null}}if(typeof e==="string"||e instanceof String){e=e.replace(/[\u202a\u200e\u202c\u202b\u200f]/g,"");e=e.replace(/\s/g,"")}C=f(e,this.oLocaleData,m);if(C){e=C.number}if(t.isInteger&&!C){d=new RegExp(g)}else{d=new RegExp(s)}if(!d.test(e)){return t.type===u.CURRENCY||t.type===u.UNIT?null:NaN}e=e.replace(l,"");e=e.replace(t.plusSign,"+");e=e.replace(t.minusSign,"-");e=e.replace(/^\+/,"");if(C){e=e.replace(c,".");e=o._shiftDecimalPoint(e,Math.round(Math.log(C.factor)/Math.LN10))}if(t.isInteger){b=t.parseAsString?e:parseInt(e)}else{e=e.replace(c,".");if(e.indexOf(p)!==-1){D=true;e=e.replace(p,"")}b=t.parseAsString?e:parseFloat(e);if(D){b=o._shiftDecimalPoint(b,-2)}}if(t.parseAsString){b=o._shiftDecimalPoint(e,0)}if(t.type===u.CURRENCY||t.type===u.UNIT){return[b,y]}return b};o.prototype.convertToDecimal=function(e){var t=""+e,i,r,n,a,o,s;if(t.indexOf("e")==-1&&t.indexOf("E")==-1){return t}var u=t.match(/^([+-]?)((\d+)(?:\.(\d+))?)[eE]([+-]?\d+)$/);i=u[1]=="-";r=u[2].replace(/\./g,"");n=u[3]?u[3].length:0;a=u[4]?u[4].length:0;o=parseInt(u[5]);if(o>0){if(o<a){s=n+o;t=r.substr(0,s)+"."+r.substr(s)}else{t=r;o-=a;for(var g=0;g<o;g++){t+="0"}}}else{if(-o<n){s=n+o;t=r.substr(0,s)+"."+r.substr(s)}else{t=r;o+=n;for(var g=0;g>o;g--){t="0"+t}t="0."+t}}if(i){t="-"+t}return t};o.prototype.getScale=function(){if(this.oFormatOptions.style!=="short"&&this.oFormatOptions.style!=="long"||this.oFormatOptions.shortRefNumber===undefined){return}var e=c(this.oFormatOptions.shortRefNumber,this.oFormatOptions,this.oLocaleData),t;if(e&&e.formatString){t=e.formatString.replace(s,"").replace(/'.'/g,".").trim();if(t){return t}}};o._shiftDecimalPoint=function(e,t){if(typeof t!=="number"){return NaN}var i="";var r=e.toString().toLowerCase().split("e");if(typeof e==="number"){t=r[1]?+r[1]+t:t;return+(r[0]+"e"+t)}else if(typeof e==="string"){if(parseFloat(e)===0&&t>=0){return e}var n=r[0].charAt(0);i=n==="-"?n:"";if(i){r[0]=r[0].slice(1)}e=r[0];var a=e.indexOf("."),o,s,u;if(a===-1){e=e+".";a=e.length-1}if(r[1]){a+=+r[1]}o=a+t;if(o<=0){e=e.padStart(e.length-o+1,"0");o=1}else if(o>=e.length-1){e=e.padEnd(o+1,"0");o=e.length-1}e=e.replace(".","");s=e.substring(0,o);u=e.substring(o);s=s.replace(/^(-?)0+(\d)/,"$1$2");return i+s+(u?"."+u:"")}else{return null}};function c(e,t,i,r){var n,a,o,u,g=t.style,l=t.precision!==undefined?t.precision:2;if(g!="short"&&g!="long"){return undefined}for(var c=0;c<15;c++){a=Math.pow(10,c);if(m(Math.abs(e)/a,l-1)<10){break}}o=a.toString();if(r){u=p(g,o,"other",true)}else{u=i.getDecimalFormat(g,o,"other")}if(!u||u=="0"){return undefined}else{n={};n.key=o;n.formatString=u;var f=u.match(s);if(f){n.valueSubString=f[0];var h=n.valueSubString.indexOf(".");if(h==-1){n.decimals=0;n.magnitude=a*Math.pow(10,1-n.valueSubString.length)}else{n.decimals=n.valueSubString.length-h-1;n.magnitude=a*Math.pow(10,1-h)}}else{return undefined}}return n}function f(e,t,i){var r,n=1,a=10,o=t.getPluralCategories(),u,g={number:undefined,factor:n},l=function(i,a,o,l){if(l){u=p(o,a.toString(),i,true)}else{u=t.getDecimalFormat(o,a.toString(),i)}if(u){u=u.replace(/[\s\u00a0\u200F]/g,"");u=u.replace(/'.'/g,".");var c=u.match(s);if(c){var f=c[0];var m=u.replace(f,"");if(!m){return}var h=e.indexOf(m);if(h>=0){r=e.replace(m,"");r=r.replace(/\u200F/g,"");n=a;n*=Math.pow(10,1-f.length);if(g.number===undefined||r.length<g.number.length){g.number=r;g.factor=n}}}}};["long","short"].forEach(function(e){a=10;while(a<1e15){for(var t=0;t<o.length;t++){var i=o[t];l(i,a,e)}a=a*10}});if(i&&!r){a=10;while(a<1e15){for(var c=0;c<o.length;c++){var f=o[c];l(f,a,"short",true)}a=a*10}}if(!r){return}return g}function p(e,t,i,r){var n,a={short:{"1000-one":"¤0000","1000-other":"¤0000","10000-one":"¤00000","10000-other":"¤00000","100000-one":"¤0 Lk","100000-other":"¤0 Lk","1000000-one":"¤00 Lk","1000000-other":"¤00 Lk","10000000-one":"¤0 Cr","10000000-other":"¤0 Cr","100000000-one":"¤00 Cr","100000000-other":"¤00 Cr","1000000000-one":"¤000 Cr","1000000000-other":"¤000 Cr","10000000000-one":"¤0000 Cr","10000000000-other":"¤0000 Cr","100000000000-one":"¤00000 Cr","100000000000-other":"¤00000 Cr","1000000000000-one":"¤0 Lk Cr","1000000000000-other":"¤0 Lk Cr","10000000000000-one":"¤00 Lk Cr","10000000000000-other":"¤00 Lk Cr","100000000000000-one":"¤0 Cr Cr","100000000000000-other":"¤0 Cr Cr"}};e="short";if(i!=="one"){i="other"}n=a[e][t+"-"+i];if(n&&r){n=n.substr(1)}return n}function m(e,t,i){if(typeof e!=="number"){return NaN}i=i||o.RoundingMode.HALF_AWAY_FROM_ZERO;t=parseInt(t);if(typeof i==="function"){e=i(e,t)}else{if(!t){return l[i](e)}e=o._shiftDecimalPoint(l[i](o._shiftDecimalPoint(e,t)),-t)}return e}function h(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function d(e,t){var i=Math.floor(Math.log(Math.abs(e))/Math.LN10);return Math.max(0,t-i-1)}function F(e,t){var i={numberValue:undefined,cldrCode:[]};var n;var a,o;for(a in e){for(o in e[a]){if(o.indexOf("unitPattern")===0){var s=e[a][o];var u=s.indexOf("{0}")>-1;if(u){s="^"+r(s).replace("\\{0\\}","(.+)")+"$";var g=new RegExp(s);var l=g.exec(t);if(l&&l[1]){if(n===undefined||l[1].length<n){n=l[1].length;i.numberValue=l[1];i.cldrCode=[a]}else if(l[1].length===n&&i.cldrCode.indexOf(a)===-1){i.cldrCode.push(a)}}}else if(s===t){i.cldrCode=[a];var c;if(o.endsWith("-zero")){c="0"}else if(o.endsWith("-one")){c="1"}else if(o.endsWith("-two")){c="2"}i.numberValue=c;return i}}}}return i}function S(e,t){var i=/(^[A-Z]{3}|[A-Z]{3}$)/,r="",n,a,o,s;for(a in e){o=e[a];if(t.indexOf(o)>=0&&r.length<o.length){r=o;n=a}}if(!n){s=t.match(i);n=s&&s[0]}if(n){t=t.replace(r||n,"")}return{numberValue:t,currencyCode:n||undefined}}return o});