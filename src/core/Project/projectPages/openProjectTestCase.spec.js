const { test, expect } = require('@playwright/test');
const {LoginFunction} = require('../../../../support/LoginFunctions/LoginFunction')
const {ProjectFunction} = require ('../../../../support/ProjectFunctions/ProjectFunction')

test.describe("Open Project Test case",async()=>{

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
  
    const fileImport = "Cypress/MessageFlows/MessageFlowProj.vpj"
  //  await projectFunction.closeProject();
    await projectFunction.openProject(fileImport);
})
    
})
