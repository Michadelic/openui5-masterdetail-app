/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library","/sap/ui/table/library"],function(e,t){"use strict";var i=e.Categories,n=e.Severity,s=e.Audiences,a=t.VisibleRowCountMode;var o={id:"DynamicPageFitContentRule",title:"DynamicPage fitContent property recommendations",minversion:"1.42",audiences:[s.Application],categories:[i.Usage],description:"It is recommended to use DynamicPage fitContent=false, when sap.m.Table is used, "+"or fitContent=true, when sap.ui.table.Table (with visibleRowCountMode=Auto) is used.",resolution:"Set fitContent property according to recommendations.",check:function(e,t,i){i.getElementsByClassName("sap.f.DynamicPage").forEach(function(t){var i=t.getId(),s=t.getAggregation("content");if(s&&s.isA("sap.m.Table")&&t.getFitContent()){e.addIssue({severity:n.Medium,details:"It is recommended to use DynamicPage '"+"' ("+i+") with fitContent=false, when sap.m.Table is used.",context:{id:i}})}if(s&&s.isA("sap.ui.table.Table")&&s.getVisibleRowCountMode()===a.Auto&&!t.getFitContent()){e.addIssue({severity:n.Medium,details:"It is recommended to use DynamicPage '"+"' ("+i+") with fitContent=true, when sap.ui.table.Table (with visibleRowCountMode=Auto) is used.",context:{id:i}})}})}};return[o]},true);