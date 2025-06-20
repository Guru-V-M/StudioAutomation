const { expect } = require('@playwright/test');

exports.WorkspaceFunction = class WorkspaceFunction{
    constructor(page)
    {
        this.page=page;
        
    }
    
    async createWorkspace()
    {
        await this.page.waitForLoadState('domcontentloaded')
          await this.page.locator('//a[@href="#/workspaces"]').click()
          const workspaceCheck= await this.page.locator('//h4[text()="No Workspaces"]').isVisible();
          const len= await this.page.locator('(//h2[text()="RECENT WORKSPACES"]/following::ul/li)[1]').count()
          await console.log("len: "+len)
          await console.log("bool: "+workspaceCheck)
          if(len>0)
          {
          await this.page.locator("#nav-toggle svg").click()
          await this.page.locator('(//button[@aria-label="Actions"])[2]').click()
          await this.page.locator('.pf-c-dropdown__menu li >> nth=-2').click()          
          await this.page.locator('(//span[@data-tip="STOPPED"])[2]').waitFor('visible')
          await this.page.locator('(//span[@data-tip="STOPPED"])[2]').waitFor("attached")
          await this.page.locator("#toggle-select-all-workspaces").check()
          await this.page.locator(' //button[text()="Delete"]').click()
          await this.page.locator('.pf-c-check__input >> nth=-1').check()
          await this.page.locator('(//button[text()="Delete"])[2]').click()
          await this.page.locator("#nav-toggle svg").click()
          }
          //create workspace
         // else
          //{
          await this.page.locator('//a[text()="Create Workspace"]').click()
          await this.page.locator("#nav-toggle svg").click()
          await this.page.locator('//div[text()="VolPay Studio - SingleSDK"]').click()  
          await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 6000 });
          await this.page.waitForLoadState('domcontentloaded', { timeout: 6000 });
          await this.page.waitForLoadState('networkidle', { timeout: 6000 });
    // Explicitly wait for 3 minutes to allow workspace to load
          await this.page.waitForTimeout(6000);
          const valueURL = await this.page.locator('#ide-iframe').getAttribute('src')    
         console.log("valueURL: "+valueURL)
   // console.log("typeof valueURL :"+typeof(valueURL))        
        await this.page.goto(valueURL)
        await this.page.waitForTimeout(10000);
    }
    async gotoURL()
    {
          await this.page.waitForLoadState('domcontentloaded', { timeout: 600000 });
          await this.page.waitForLoadState('networkidle', { timeout: 600000 });
    // Explicitly wait for 3 minutes to allow workspace to load
          await this.page.waitForTimeout(600000);
       //await this.page1.goto(valueURL)
       const valueURL = await this.page.locator('#ide-iframe').getAttribute('src')    
       console.log("valueURL: "+valueURL)
 // console.log("typeof valueURL :"+typeof(valueURL))        
      await this.page.goto(valueURL)
      await this.page.waitForTimeout(20000);
    } 
    async stopWorkspace()
    {
        await iFrame.locator('.che-dashboard .fa').click()          
          await this.page.locator("//a[@href='#/workspaces']").click()
          await this.page.locator("#nav-toggle svg").click()
          await this.page.locator('(//button[@aria-label="Actions"])[2]').click()
          await this.page.locator('.pf-c-dropdown__menu li >> nth=-2').click()          
          await this.page.locator('(//span[@data-tip="STOPPED"])[2]').waitFor('visible')
          await this.page.locator('(//span[@data-tip="STOPPED"])[2]').waitFor("attached")
    } 
    async startWorkspace()
    {
        await this.page.locator('(//a[text()="Open"])[2]').click()
    }
    async deleteWorkspace()
    {
        await this.page.locator("#toggle-select-all-workspaces").check()
          await this.page.locator(' //button[text()="Delete"]').click()
          await this.page.locator('.pf-c-check__input >> nth=-1').check()
          await this.page.locator('(//button[text()="Delete"])[2]').click()
    }
   
 
}