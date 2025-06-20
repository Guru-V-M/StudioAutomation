/*const { test, expect } = require('@playwright/test');
//const { CartridgeFunction } = require('../../support/CartridgeFunctions/CartridgeFunction');
const {LoginFunction} = require('../../support/LoginFunctions/LoginFunction')
const {ProjectFunction} = require ('../../support/ProjectFunctions/ProjectFunction')
const {ResourceFunction} = require('../../support/ResourceFunctions/ResourceFunction')
test.describe.skip("Resource Test case",async()=>{

    let page;
    test.beforeAll(async({browser})=>{
    const context=await browser.newContext()
    page=await context.newPage()
})
test("Login",async()=>{
    const loginPage = new LoginFunction(page);
    loginPage.goto()
    })
test("Open Project",async()=>{
    const projectFunction = new ProjectFunction(page);
    await projectFunction.closeProject();
    const fileImport = "ResourceUI/ResourceUI.vpj"
  //await projectFunction.closeProject();
    await projectFunction.openProject(fileImport);
})
test("cartridge function",async()=>{
    const cartridgefunction = new CartridgeFunction(page);
    await cartridgefunction.expandDirectory("ResourceUI");
    await cartridgefunction.openCartridge("Resource.car");
})
test("resource function",async()=>{
    const resourcefunction = new ResourceFunction(page);
    await resourcefunction.addResource();
    await resourcefunction.toolBar();
    await resourcefunction.toolTip();
    await resourcefunction.columnName();
    await resourcefunction.customizeLocalesDialogBox();
    await resourcefunction.addNewField();
    await resourcefunction.addNewSection();
    await resourcefunction.MessageResourceDialogBox();
    await resourcefunction.editValuesDialogBox();
    await resourcefunction.addNewMessageResource();
    await resourcefunction.moveSelection();
    await resourcefunction.deleteSelectedFields();
    
})


    
})
*/