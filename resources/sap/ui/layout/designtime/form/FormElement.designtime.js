/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/layout/form/Form","sap/ui/layout/form/FormContainer","sap/ui/layout/form/ResponsiveGridLayout"],function(e,t,n){"use strict";function r(t){if(t&&!(t instanceof e)){return r(t.getParent())}return t}function o(e){var t=r(e);if(t&&t.getLayout()&&t.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/FormElement.icon.svg"}},isVisible:function(e){return e.isVisible()},domRef:function(r){var o=r.getParent();if(o instanceof t){o=o.getParent();if(o instanceof e){var i=o.getLayout();if(i instanceof n){var u=r.getFields();var a=r.getLabelControl();if(a){u.unshift(a)}return u.filter(function(e){return e.getDomRef&&e.getDomRef()}).map(function(e){var t=e.getDomRef();return t.parentNode})}}}},actions:{remove:function(e){if(o(e)){return{changeType:"hideControl"}}else{return null}},rename:function(e){if(o(e)){return{changeType:"renameField",domRef:function(e){return e.getLabelControl().getDomRef()}}}else{return null}},reveal:function(e){if(o(e)){return{changeType:"unhideControl"}}else{return null}}},name:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"}}},false);