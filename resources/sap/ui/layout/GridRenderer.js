/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/layout/library"],function(e,s){"use strict";var a=s.GridPosition;var i={};i.render=function(s,i){var r=/^([X][L](?:[0-9]|1[0-1]))? ?([L](?:[0-9]|1[0-1]))? ?([M](?:[0-9]|1[0-1]))? ?([S](?:[0-9]|1[0-1]))?$/i;var t=/^([X][L](?:[1-9]|1[0-2]))? ?([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;s.write("<div");s.writeControlData(i);s.addClass("sapUiRespGrid");var d=i._getCurrentMediaContainerRange(e.media.RANGESETS.SAP_STANDARD_EXTENDED).name;s.addClass("sapUiRespGridMedia-Std-"+d);var p=i.getHSpacing();if(p==.5){p="05"}else if(p!==0&&p!==1&&p!==2){p=1}s.addClass("sapUiRespGridHSpace"+p);var n=i.getVSpacing();if(n==.5){n="05"}else if(n!==0&&n!==1&&n!==2){n=1}s.addClass("sapUiRespGridVSpace"+n);var l=i.getPosition();if(l){l=l.toUpperCase();if(l===a.Center.toUpperCase()){s.addClass("sapUiRespGridPosCenter")}else if(l===a.Right.toUpperCase()){s.addClass("sapUiRespGridPosRight")}}s.writeClasses();var f=i.getWidth();if(f!=="100%"&&f!=="auto"&&f!=="inherit"){if(p==0){f="width: "+f}else{f="width: -webkit-calc("+f+" - "+p+"rem); width: calc("+f+" - "+p+"rem); "}s.writeAttribute("style",f)}var v=i._getAccessibleRole();var C;if(v){C={role:v}}s.writeAccessibilityState(i,C);s.write(">");var g=i.getContent();var L=i.getDefaultSpan();var U=["","XL3","L3","M6","S12"];var o=["","XL0","L0","M0","S0"];var u=t.exec(L);var S=i._getSpanXLChanged();var R=i._getIndentXLChanged();var G=i.getDefaultIndent();var b=r.exec(G);for(var X=0;X<g.length;X++){s.write("<div");var c=i._getLayoutDataForControl(g[X]);var h=false;if(!g[X].getVisible()){s.addClass("sapUiRespGridSpanInvisible")}if(c){var w=false;if(c.getLinebreak()===true){s.addClass("sapUiRespGridBreak")}else{if(c.getLinebreakXL()===true){w=true;s.addClass("sapUiRespGridBreakXL")}if(c.getLinebreakL()===true){if(!w&&!c._getLinebreakXLChanged()){s.addClass("sapUiRespGridBreakXL")}s.addClass("sapUiRespGridBreakL")}if(c.getLinebreakM()===true){s.addClass("sapUiRespGridBreakM")}if(c.getLinebreakS()===true){s.addClass("sapUiRespGridBreakS")}}var M;var I;var k=c.getSpan();if(!k||!k.lenght==0){M=u}else{M=t.exec(k);if(/XL/gi.test(k)){h=true}}if(M){for(var _=1;_<M.length;_++){var D=M[_];if(!D){D=u[_];if(!D){D=U[_]}}if(D.substr(0,1)==="L"){I=D.substr(1,2)}var B=c.getSpanXL();var x=c.getSpanL();var y=c.getSpanM();var A=c.getSpanS();D=D.toUpperCase();if(D.substr(0,2)==="XL"&&B>0&&B<13){s.addClass("sapUiRespGridSpanXL"+B);h=true}else if(D.substr(0,1)==="L"&&x>0&&x<13){s.addClass("sapUiRespGridSpanL"+x);I=x}else if(D.substr(0,1)==="M"&&y>0&&y<13){s.addClass("sapUiRespGridSpanM"+y)}else if(D.substr(0,1)==="S"&&A>0&&A<13){s.addClass("sapUiRespGridSpanS"+A)}else{if(D.substr(0,2)!=="XL"||S||h){s.addClass("sapUiRespGridSpan"+D)}}}if(!S&&!h){s.addClass("sapUiRespGridSpanXL"+I)}}var V;var H;var E=c.getIndent();if(!E||E.length==0){V=b}else{V=r.exec(E);if(/XL/gi.test(E)){R=true}}if(!V){V=b;if(!V){V=undefined}}var P=c.getIndentXL();var m=c.getIndentL();var F=c.getIndentM();var N=c.getIndentS();if(V){for(var _=1;_<V.length;_++){var T=V[_];if(!T){if(b&&b[_]){T=b[_]}else{T=o[_]}}if(T){T=T.toUpperCase();if(T.substr(0,1)==="L"){H=T.substr(1,2)}if(T.substr(0,2)==="XL"&&P>0&&P<12){s.addClass("sapUiRespGridIndentXL"+P);R=true}else if(T.substr(0,1)==="L"&&m>0&&m<12){s.addClass("sapUiRespGridIndentL"+m);H=m}else if(T.substr(0,1)==="M"&&F>0&&F<12){s.addClass("sapUiRespGridIndentM"+F)}else if(T.substr(0,1)==="S"&&N>0&&N<12){s.addClass("sapUiRespGridIndentS"+N)}else{if(!/^(XL0)? ?(L0)? ?(M0)? ?(S0)?$/.exec(T)){s.addClass("sapUiRespGridIndent"+T)}}}}if(!R){if(H&&H>0){s.addClass("sapUiRespGridIndentXL"+H)}}}if(!c.getVisibleXL()){s.addClass("sapUiRespGridHiddenXL")}if(!c.getVisibleL()){s.addClass("sapUiRespGridHiddenL")}if(!c.getVisibleM()){s.addClass("sapUiRespGridHiddenM")}if(!c.getVisibleS()){s.addClass("sapUiRespGridHiddenS")}var $=c.getMoveBackwards();if($&&$.length>0){var W=r.exec($);if(W){for(var _=1;_<W.length;_++){var j=W[_];if(j){s.addClass("sapUiRespGridBwd"+j.toUpperCase())}}}}var q=c.getMoveForward();if(q&&q.length>0){var z=r.exec(q);if(z){for(var _=1;_<z.length;_++){var J=z[_];if(J){s.addClass("sapUiRespGridFwd"+J.toUpperCase())}}}}if(c._sStylesInternal){s.addClass(c._sStylesInternal)}}if(!c){var D="";if(u){for(var _=1;_<u.length;_++){D=u[_];if(!D){if(_==1&&u[_+1]){D="X"+u[_+1]}else{D=U[_]}}s.addClass("sapUiRespGridSpan"+D.toUpperCase())}}else{for(var _=1;_<U.length;_++){D=U[_];s.addClass("sapUiRespGridSpan"+D.toUpperCase())}}var T="";if(b){for(var _=1;_<b.length;_++){T=b[_];if(!T){if(_==1&&b[_+1]){T="X"+b[_+1]}else{T=o[_]}}if(T.substr(0,1)!=="X"&&T.substr(1,1)!=="0"||T.substr(0,1)=="X"&&T.substr(2,1)!=="0"){s.addClass("sapUiRespGridIndent"+T.toUpperCase())}}}}s.writeClasses();s.write(">");s.renderControl(g[X]);s.write("</div>")}s.write("</div>")};return i},true);