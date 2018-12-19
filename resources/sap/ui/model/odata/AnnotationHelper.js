/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AnnotationHelperBasics","./_AnnotationHelperExpression","sap/base/Log","sap/ui/base/BindingParser"],function(t,e,n,r){"use strict";function o(t,e){if(!e){return t}function n(){return t.call(this,e.apply(this,arguments))}return n}var i={createPropertySetting:function(t,e){var n=false,i;t=t.slice();t.forEach(function(e,o){switch(typeof e){case"boolean":case"number":case"undefined":n=true;break;case"string":i=r.complexParser(e,null,true,true);if(i!==undefined){if(i.functionsNotFound){throw new Error("Function name(s) "+i.functionsNotFound.join(", ")+" not found")}t[o]=e=i}case"object":if(!e||typeof e!=="object"||!("path"in e)){n=true}break;default:throw new Error("Unsupported part: "+e)}});i={formatter:e,parts:t};if(n){r.mergeParts(i)}if(i.parts.length===0){i=i.formatter&&i.formatter();if(typeof i==="string"){i=r.complexParser.escape(i)}}else if(i.parts.length===1){e=i.formatter;i=i.parts[0];if(e){i.formatter=o(e,i.formatter)}}return i},format:function(t,n){if(arguments.length===1){n=t.getObject("")}return e.getExpression(t,n,true)},getNavigationPath:function(e,n){if(arguments.length===1){n=e.getObject("")}var r=t.followPath(e,n);return r?"{"+r.navigationProperties.join("/")+"}":""},gotoEntitySet:function(e){var r,o,i=e.getObject(),a;if(typeof i==="string"){r=i}else{a=t.followPath(e,i);r=a&&a.associationSetEnd&&a.associationSetEnd.entitySet}if(r){o=e.getModel().getODataEntitySet(r,true)}if(!o){n.warning(e.getPath()+": found '"+r+"' which is not a name of an entity set",undefined,"sap.ui.model.odata.AnnotationHelper")}return o},gotoEntityType:function(t){var e=t.getProperty(""),r=t.getModel().getODataEntityType(e,true);if(!r){n.warning(t.getPath()+": found '"+e+"' which is not a name of an entity type",undefined,"sap.ui.model.odata.AnnotationHelper")}return r},gotoFunctionImport:function(t){var e=t.getProperty("String"),r=t.getModel().getODataFunctionImport(e,true);if(!r){n.warning(t.getPath()+": found '"+e+"' which is not a name of a function import",undefined,"sap.ui.model.odata.AnnotationHelper")}return r},isMultiple:function(e,n){if(arguments.length===1){n=e.getObject("")}var r=t.followPath(e,n);if(r){if(r.navigationAfterMultiple){throw new Error('Association end with multiplicity "*" is not the last one: '+n.AnnotationPath)}return String(r.isMultiple)}return""},resolvePath:function(e){var r=t.followPath(e,e.getObject());if(!r){n.warning(e.getPath()+": Path could not be resolved ",undefined,"sap.ui.model.odata.AnnotationHelper")}return r?r.resolvedPath:undefined},simplePath:function(t,n){if(arguments.length===1){n=t.getObject("")}return e.getExpression(t,n,false)}};i.format.requiresIContext=true;i.getNavigationPath.requiresIContext=true;i.isMultiple.requiresIContext=true;i.simplePath.requiresIContext=true;return i},true);