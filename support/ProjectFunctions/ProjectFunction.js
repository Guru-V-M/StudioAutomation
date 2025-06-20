const { expect } = require('@playwright/test');
exports.ProjectFunction = class ProjectFunction{
    constructor(page)
    {
        this.page=page;
    }
    async newProject(dialogTitle,labelName,projectDefaultName,locationLabel,locationPath,projectName,locationValue,footerLabel,folderLabel)
    {
      await this.page.locator('//div[text()="File"]').click()
      await this.page.locator('//div[text()="New Project"]').click()
      const dialogBlock= await this.page.locator(".dialogBlock")      
      await expect (this.page.locator(".dialogTitle")).toHaveTitle(dialogTitle)
      await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div/label")).toHaveText(labelName)
      const valueText= await dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div/span/input").getAttribute('value')
      await expect(valueText).toHaveText(projectDefaultName)
      await dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div/span/input").fill(projectName)
      await dialogBlock.$("(//div[contains(@class,'input-group')])[3]/div/label").toHaveText(locationLabel)
      const pathText = await dialogBlock.$("(//div[contains(@class,'input-group')])[3]/div/span/input").getAttribute('value')
      await expect(pathText).toHaveText(locationPath)
      await dialogBlock.$("(//div[contains(@class,'input-group')])[3]/div/span/input").fill(locationValue)
      await dialogBlock.$("(//div[contains(@class,'container-header')])[2]/label").toHaveText(footerLabel)
      await dialogBlock.$("(//div[contains(@class,'volante-input-group')])[3]/label").toHaveText(folderLabel)
      await expect(dialogBlock.$("(//div[contains(@class,'volante-input-group')])[3]/input")).toBeChecked()
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").toHaveText("OK")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[2]").toHaveText("Cancel")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[3]").toHaveText("Help")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").click()      
    } 
    async waitForProject()
    {
      await expect(this.page.locator("//div[text()='Project']")).toBeVisible({timeout: 100000})
    }
    async closeProject()
    {
        await expect(this.page.locator("//div[text()='Project']")).toBeVisible({timeout: 100000})
        await this.page.locator("//div[text()='File']").click()
        await this.page.locator("//div[text()='Close']").click()
       // await expect(this.page.locator("#volante-confirm-props-cancel-dialog > div > div.dialogControl > button:nth-child(3)")).toBeVisible({timeout:3000})
       // await this.page.locator("#volante-confirm-props-cancel-dialog > div > div.dialogControl > button:nth-child(3)").click()
        await expect(this.page.locator('//div[text()="No active element"]')).toBeVisible({timeout: 50000})
    }
    async closeProjectWithSave()
    {
      await this.page.locator("//div[text()='File']").click()
      await this.page.locator("//div[text()='Close']").click()
      await this.page.locator("//button[text()='Yes']").click()
      //await expect(this.page.locator('//div[text()="No active element"]')).toBeVisible({timeout: 50000})
    }
    async closeProjectWithoutSave()
    {
      await this.page.locator("//div[text()='File']").click()
      await this.page.locator("//div[text()='Close Project']").click()
      await this.page.locator("//button[text()='No']").click()
    }
    async openProject(fileImport)
    {
        await this.page.locator('//div[text()="File"]').click()
        await this.page.locator('//div[text()="Open Project"]').click()
        const FILESIZE=fileImport.split("/")
        for(var i=0;i<FILESIZE.length;i++)
          {
            if(FILESIZE[i].lastIndexOf('.vpj')!=-1)
            {
            await this.page.locator( "//div[text()='"+FILESIZE[i]+"']").click()    
            await this.page.locator("//button[text()='Open']").click()      
          }
          else
          {
            await this.page.locator("//div[text()='"+FILESIZE[i]+"']").dblclick()
          }
        }
       
       await expect(this.page.locator("//div[text()='Project']")).toBeVisible({timeout: 50000})
       const projectTitle= FILESIZE[FILESIZE.length-1];          
       let actualProjectTitle =(await this.page.locator(".project-title").innerText()).valueOf()
       let actualTitle=actualProjectTitle.split(" ")
       console.log("actual "+actualTitle[0])
       await expect(actualTitle[0].toString()).toContain(projectTitle,{timeout:60000})
    }
   
    async saveProject()
    {
      await this.page.locator('//div[text()="File"]').click()
      await this.page.locator('//div[text()="Save"]').click()
    }
    async importProject(projectName,projectLocation)
    {
      await this.page.locator('//div[text()="File"]').click()
      await this.page.locator('//div[text()="Import Project"]').click()
      const dialogBlock= await this.page.locator(".dialogBlock")
      await expect (this.page.locator(".dialogTitle")).toHaveTitle("Import Project")
      await expect(await dialogBlock.$("(//div[contains(@class,'container-header')])/label")).toHaveText("Project")
      //await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div/label")).toHaveText(labelName)
      await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div//input")).toBeDisabled()
      await dialogBlock.$("(//div[contains(@class,'button-container')])[1]/button[1]").click()
      const FILEIMPORT=projectName.split("/")
        for(var i=0;i<FILEIMPORT.length;i++)
          {
            if(FILEIMPORT[i].lastIndexOf('.vpjzip')!=-1)
            {
            await this.page.locator( "//div[text()='"+FILEIMPORT[i]+"']").click()    
            await this.page.locator("//button[text()='Open']").click()      
          }
          else
          {
            await this.page.locator("//div[text()='"+FILEIMPORT[i]+"']").dblclick()
          }
        }
        await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[3]//label")).toHaveText("Project Location")
        await dialogBlock.$("(//div[contains(@class,'input-group')])[3]//input").fill(projectLocation)
        await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").toHaveText("OK")
        await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[2]").toHaveText("Cancel")
        await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[3]").toHaveText("Help")
        await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").click()
       
    }
    async exportProject(projectName)
    {
      await this.page.locator('//div[text()="File"]').click()
      await this.page.locator('//div[text()="Export Project"]').click()
      const dialogBlock= await this.page.locator(".dialogBlock")
      await expect (this.page.locator(".dialogTitle")).toHaveTitle("Export Project")
      await expect(await dialogBlock.$("(//div[contains(@class,'container-header')])/label")).toHaveText("Project")
      await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div/label")).toHaveText("Name")
      await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div//input")).toBeEditable()
      await dialogBlock.$("(//div[contains(@class,'input-group')])[1]/div//input").fill(projectName)
      await expect(dialogBlock.$("(//div[contains(@class,'input-group')])[3]//label")).toHaveText("Location")
      await dialogBlock.$("(//div[contains(@class,'input-group')])[3]//input").fill(projectLocation)
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").toHaveText("Save")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[2]").toHaveText("Cancel")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[3]").toHaveText("Help")
      await dialogBlock.$("(//div[contains(@class,'dialogControl')])/button[1]").click()
    }
    async downloadProject()
    {
      await this.page.locator('//div[text()="File"]').click()
      await expect(this.page.locator('//div[text()="Download Project"]')).toBeEnabled()
      await this.page.locator('//div[text()="Download Project"]').click()
    }
    async uploadProject(filePath,projectLocation)
    {
      await this.page.locator('//div[text()="File"]').click({force:true})
      await this.page.locator('//div[text()="Import Project"]').click()
      const dialogBlock= await this.page.locator(".dialogBlock")
      await expect.soft (this.page.locator(".dialogTitle >> nth=-1")).toHaveText("Import Project")
      await expect.soft(await this.page.locator("(//div[contains(@class,'container-header')])/label")).toHaveText("Project")
      await expect.soft(this.page.locator("(//div[contains(@class,'input-group')])[1]/div/label")).toHaveText("Archive File")
      await expect.soft(this.page.locator("(//div[contains(@class,'button-container')])[1]/button[2]")).toHaveText("Upload Project")
      await this.page.on("filechooser",async(fileChooser)=>{
        await fileChooser.setFiles(filePath)
    })
      await this.page.locator("(//div[contains(@class,'button-container')])[1]/button[2]",{force: true}).click()
      await expect.soft(this.page.locator("(//div[contains(@class,'input-group')])[3]//label")).toHaveText("Project Location")
      await this.page.locator("(//div[contains(@class,'input-group')])[3]//input").fill(projectLocation)
      await expect.soft(this.page.locator("(//div[contains(@class,'input-group')])[1]/div/span/input")).toHaveValue('/projects/UniversalProj.vpjzip')
      await expect.soft(this.page.locator("(//div[contains(@class,'dialogControl')])/button[1]")).toHaveText("OK")
      await expect.soft(this.page.locator("(//div[contains(@class,'dialogControl')])/button[2]")).toHaveText("Cancel")
      await expect.soft(this.page.locator("(//div[contains(@class,'dialogControl')])/button[3]")).toHaveText("Help")
      await this.page.locator("(//div[contains(@class,'dialogControl')])/button[1]").click()
    }
    async closeNotification()
    {
      await expect.soft(await this.page.locator('//div[text()="File"]')).toBeVisible({timeout:55000})
      await expect.soft(this.page.locator('#status-bar-theia-notification-center span >> nth=-1')).toHaveText(' 2',{timeout:55000})
      await this.page.locator('#status-bar-theia-notification-center span >> nth=0').click()
      //await expect(this.page.locator('#status-bar-theia-notification-center span >> nth=1')).toHaveValue(2,{timeout: 100000})
      await expect.soft(this.page.locator('.theia-notification-message span >> nth=-1')).toHaveText('Che Workspace: Finished importing projects.',{timeout:55000})
      await this.page.locator('.codicon-clear-all').click()
    //  await this.page.locator('#status-bar-theia-notification-center span >> nth=1').click()
    }
    
}