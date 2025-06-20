const {test,expect}= require('@playwright/test')
const {LoginFunction} = require('../../../support/LoginFunctions/LoginFunction')
//const { CartridgeFunction } = require('../../support/CartridgeFunctions/CartridgeFunction');
const { WorkspaceFunction } = require('../../../support/WorkspaceFunctions/WorkspaceFunction')
//const {CreateFolderFunctions} = require('../../support/CreateFolderFunctions/CreateFolderFunctions')
/*test.describe("Reference Data",async()=>{  

    let page;

            const loginPage = new LoginFunction(page);
            await loginPage.login("https://ab-uk.studio-platform.volantetech.com/?auth=True","guruvaradhan.m+ab-uk@volantetech.com","Volante@123");
            const workspacePage= new WorkspaceFunction(page);
            await workspacePage.createWorkspace();
    // Navigates to the login page and performs login with provided credentials
    await this.page.goto('https://ab-us.studio-platform.volantetech.com/?auth=True');
    await this.page.fill('input[name="username"]', 'guruvaradhan.m+ab-us@volantetech.com');
    await this.page.fill('input[type="password"]', 'Volante@123');
    await this.page.click('input#kc-login');
    // Wait for navigation to complete and page to be fully loaded
    await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 600000 });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 600000 });
    await this.page.waitForLoadState('networkidle', { timeout: 600000 });
    // Explicitly wait for 3 minutes to allow workspace to load
    await this.page.waitForTimeout(60000);
  })*/
test.describe("Reference Data", () => {
  test('To test Reference Data Artifact', async ({ page }) => {
    const loginPage = new LoginFunction(page);
    await loginPage.login(
      "https://ab-it.studio-platform.volantetech.com/?auth=True",
      "guruvaradhan.m+ab-it@volantetech.com",
      "Volante@123"
    );
    const workspacePage = new WorkspaceFunction(page);
    await workspacePage.createWorkspace();
    await page.waitForTimeout(40000);
    await page.locator("(//li[@title='File Explorer'])[1]").click();
    await page.locator("//div[@data-node-id='/projects:/projects/SampleProjects']").click();
    await page.waitForTimeout(20000);
    await cartridgefunction.expandDirectory("studio-projects");
    await page.waitForTimeout(20000);
    /*test("cartridge function",async()=>{
    const cartridgefunction = new CartridgeFunction(page);

    });*/
    // Add your assertions or further steps here
  });
  //test('Create Referencedata Folder', async ({ page }) => {
    
 // });
});