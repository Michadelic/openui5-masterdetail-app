sap.ui.define(["sap/ui/test/opaQunit","./pages/Master","./pages/Detail","./pages/Browser","./pages/App"],function(e){"use strict";QUnit.module("Desktop navigation");e("Should navigate on press",function(e,t,o){e.iStartMyApp();t.onTheMasterPage.iRememberTheIdOfListItemAtPosition(1).and.iPressOnTheObjectAtPosition(1);o.onTheDetailPage.iShouldSeeTheRememberedObject().and.iShouldSeeHeaderActionButtons();o.onTheBrowserPage.iShouldSeeTheHashForTheRememberedObject()});e("Should press full screen toggle button: The app shows one column",function(e,t,o){t.onTheDetailPage.iPressTheHeaderActionButton("enterFullScreen");o.onTheDetailPage.theAppShowsFCLDesign("MidColumnFullScreen").and.iShouldSeeTheFullScreenToggleButton("exitFullScreen")});e("Should press full screen toggle button: The app shows two columns",function(e,t,o){t.onTheDetailPage.iPressTheHeaderActionButton("exitFullScreen");o.onTheDetailPage.theAppShowsFCLDesign("TwoColumnsMidExpanded").and.iShouldSeeTheFullScreenToggleButton("enterFullScreen")});e("Should react on hash change",function(e,t,o){t.onTheMasterPage.iRememberTheIdOfListItemAtPosition(1);t.onTheBrowserPage.iChangeTheHashToTheRememberedItem();o.onTheDetailPage.iShouldSeeTheRememberedObject().and.iShouldSeeNoBusyIndicator();o.onTheMasterPage.theRememberedListItemShouldBeSelected()});e("Detail Page Shows Object Details",function(e,t,o){o.onTheDetailPage.iShouldSeeTheObjectLineItemsList().and.theDetailViewShouldContainOnlyFormattedUnitNumbers().and.theLineItemsListShouldHaveTheCorrectNumberOfItems().and.theLineItemsHeaderShouldDisplayTheAmountOfEntries()});e("Navigate to an object not on the client: no item should be selected and the object page should be displayed",function(e,t,o){t.onTheMasterPage.iRememberAnIdOfAnObjectThatsNotInTheList();t.onTheBrowserPage.iChangeTheHashToTheRememberedItem();o.onTheDetailPage.iShouldSeeTheRememberedObject()});e("Should press close column button: The app shows one columns",function(e,t,o){t.onTheDetailPage.iPressTheHeaderActionButton("closeColumn");o.onTheDetailPage.theAppShowsFCLDesign("OneColumn");o.onTheMasterPage.theListShouldHaveNoSelection();o.iTeardownMyApp()});e("Start the App and simulate metadata error: MessageBox should be shown",function(e,t,o){e.iStartMyApp({delay:1e3,metadataError:true});o.onTheAppPage.iShouldSeeTheMessageBox();t.onTheAppPage.iCloseTheMessageBox();o.iTeardownMyApp()});e("Start the App and simulate bad request error: MessageBox should be shown",function(e,t,o){e.iStartMyApp({delay:1e3,errorType:"serverError"});o.onTheAppPage.iShouldSeeTheMessageBox();t.onTheAppPage.iCloseTheMessageBox();o.iTeardownMyApp()})});