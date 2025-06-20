const { expect } = require('@playwright/test')


exports.UniversalFunction = class UniversalFunction {
    constructor(page) {
        this.page = page;
    }
    async formatDetails(messageName, versionInfo, standardName, standardVersion, detailedName, standardGroup, typeDescription,externalFormatName) {
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=0')).toHaveText('Format Details')
        const formatDetailsInput1 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=0')
        await expect.soft(formatDetailsInput1.locator('.volante-label')).toHaveText('External Format')
        await expect.soft(formatDetailsInput1.locator('.volante-input')).toHaveValue(externalFormatName)
        await expect.soft(formatDetailsInput1.locator('input')).toBeDisabled()
        const formatDetailsInput2 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=1')
        await expect.soft(formatDetailsInput2.locator('.volante-label')).toHaveText('Name')
        await expect.soft(formatDetailsInput2.locator('.volante-input')).toHaveValue(messageName)
        const formatDetailsInput3 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=2')
        await expect.soft(formatDetailsInput3.locator('.volante-label')).toHaveText('Version')
        await expect.soft(formatDetailsInput3.locator('.volante-input')).toHaveValue(versionInfo)
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=1')).toHaveText('Standard Details')
        const formatDetailsInput4 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=3')
        await expect.soft(formatDetailsInput4.locator('.volante-label')).toHaveText('Name')
        await expect.soft(formatDetailsInput4.locator('.volante-input')).toHaveValue('')
        await formatDetailsInput4.locator('.volante-input').type(standardName)
        const formatDetailsInput5 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=4')
        await expect.soft(formatDetailsInput5.locator('.volante-label')).toHaveText('Version')
        await expect.soft(formatDetailsInput5.locator('.volante-input')).toHaveValue('')
        await formatDetailsInput5.locator('.volante-input').type(standardVersion)
        const formatDetailsInput6 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=5')
        await expect.soft(formatDetailsInput6.locator('.volante-label')).toHaveText('Detailed Name')
        await expect.soft(formatDetailsInput6.locator('.volante-input')).toHaveValue('')
        await formatDetailsInput6.locator('.volante-input').type(detailedName)
        const formatDetailsInput7 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=6')
        await expect.soft(formatDetailsInput7.locator('.volante-label')).toHaveText('Standard Group')
        await expect.soft(formatDetailsInput7.locator('.volante-input')).toHaveValue('')
        await formatDetailsInput7.locator('.volante-input').type(standardGroup)
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Description')
        const descriptionArea = await this.page.locator('.external-message .p-fieldset-content >> nth=-1')
        const placeHolder = await descriptionArea.locator('textarea').getAttribute('placeholder')
        await expect.soft(placeHolder).toBe('Enter Description.')
        await descriptionArea.locator('textarea').type(typeDescription)
    }
    async clickExternalFormat()
    {
        await this.page.locator('//div[text()="External Format"]').click()
    }
    async verifyUniversalToolbar()
     {
        //await this.page.locator('//div[text()="External Format"]').click()
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence", "Add Choice", "Add All (unordered section)", "Add Template", "Save Selection As Template", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
        await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Add Template':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await console.log(classAttribute)
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Save Selection As Template':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }

            }


        }

        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]")
        const actionMenus = ["Platform Properties", "Synchronize with Dictionary"]
        const toolbamCount = await toolBarActionMenu.count()
        await console.log("Count: " + toolBarActionMenu+":::"+toolbamCount)
        for (let i = 1, j = 0; i <= toolbamCount, j < actionMenus.length; i++, j++) {
            const title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('title')
            await expect(title).toContain(actionMenus[j])
            switch (title) {
                case 'Synchronize with Dictionary':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;
                    }
            }

        }
    }
   
    async verifyTableColumnName()
    {
        const columnValues = await this.page.locator("(//div[contains(@class,'volante-table')] //div[contains(@class,'volante-header-content')])")
       // const columnValuesCount = columnValues.count()
        const ar = ["","Field Name","Type","Description","Detailed Name"]
        const columnCount = columnValues.count()
        for (let i =0;i<ar.length;i++)
        {
            let title = await this.page.locator("(//div[contains(@class,'volante-table')] //div[contains(@class,'volante-header-content')])["+(i+1)+"]").textContent()
            await expect(title).toContain(ar[i])
        }
    }
   
    async addField()
    {
        //This method is to add  a field in the table.
        await this.page.locator('//div[text()="External Format"]').click()
        await this.page.locator('.volante-toolbar .volante-normalized-format-add-field-icon').click()
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=0').click()
        const fieldValue = await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value').textContent()
        await console.log('fieValue: '+fieldValue)
       // await expect(fieldValue).toHaveText('New Field')
       // await expect.soft(fieldValue).tocontain('New Field')
       await expect.soft(this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value')).toHaveText('New Field')
    }
    async editField(rowValue,fieldValue)
    {
        //This method is to edit a field in the table.
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth='+rowValue+'').click()
        await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value').click()
        await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value').dblclick()
        await this.page.locator('.volante-table-cell-container input').fill('')
        await this.page.locator('.volante-table-cell-container input').type(fieldValue)
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth='+rowValue+'').click()
    }
    async addFiller()
    {
        //This method is to add a filler in the table.
        
        await this.page.locator('.volante-universal-filler-icon').click()
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()
        const fieldValue = await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').textContent()
        await expect.soft(this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1')).toHaveText('FILLER')
    }
    async editFiller(rowValue,fieldValue)
    {
        //This method is to edit the filler available in the table. 
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth='+rowValue+'').click()
        await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').click()
        await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').dblclick()
        await this.page.locator('.volante-table-cell-container input').fill('')
        await this.page.locator('.volante-table-cell-container input').type(fieldValue)
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth='+rowValue+'').click()
        await expect.soft(this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1')).toHaveText(fieldValue)
    }
    async addSection()
    {
        //This method is to add a section in the table.
        
        await this.page.locator('.volante-normalized-format-add-section-icon').click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.press('Enter')
        //await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()
       // await this.page.click('.volante-table-cell .volante-gutter-cell >> nth=-1')
        //await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()
        //await this.page.keyboard.press('Escape');
        //const fieldValue = await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').textContent()
        //await expect(fieldValue).toContain('New Section')
        await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').click()
        await expect(this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1')).toHaveText('New Section')
    }
    async collapseSection(sectionName)
    {
        await this.page.locator("//span[text()='"+sectionName+"']/preceding-sibling::span[contains(@class,'volante-expand-section-icon')]").click()
    }
    async editSection(sectionName,fieldValue)
    {
        await this.page.locator("//span[text()='"+sectionName+"']").click()
        await this.page.locator("//span[text()='"+sectionName+"']").dblclick()
        await this.page.locator('.volante-table-cell-container input').fill('')
        await this.page.locator('.volante-table-cell-container input').type(fieldValue)   
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()    
    }
    async addChoice()
    {
        
        await this.page.locator('.volante-universal-choice-icon').click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.press('Enter')
        //await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()
        //await this.page.click('.volante-table-cell .volante-gutter-cell span >> nth=-1')
        
        const fieldValue = await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').textContent()
        await expect(fieldValue).toContain('New Choice')
    }
    async collapseChoice(choiceName)
    {
        await this.page.locator("//span[text()='"+choiceName+"']/preceding-sibling::span[contains(@class,'volante-expand-section-icon')]").click()
    }
    async editChoice(choiceName,fieldValue)
    {
        await this.page.locator("//span[text()='"+choiceName+"']").click()
        await this.page.locator("//span[text()='"+choiceName+"']").dblclick()
        await this.page.locator('.volante-table-cell-container input').fill('')
        await this.page.locator('.volante-table-cell-container input').type(fieldValue) 
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()          
    }
    async addAll()
    {
        await this.page.locator('.volante-universal-add-all-icon').click()
        //await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.press('Enter')
        
        //await this.page.click('.volante-table-cell .volante-gutter-cell >> nth=-1')
        const fieldValue = await this.page.locator('div[aria-colindex="2"] .volante-table-cell-container .indent-cell-value >> nth=-1').textContent()
        await expect(fieldValue).toContain('New All')
    }
    async collapseAll(allName)
    {
        await this.page.locator("//span[text()='"+allName+"']/preceding-sibling::span[contains(@class,'volante-expand-section-icon')]").click()
    }
    async editAll(allName,fieldValue)
    {
        await this.page.locator("//span[text()='"+allName+"']").click()
        await this.page.locator("//span[text()='"+allName+"']").dblclick()
        await this.page.locator('.volante-table-cell-container input').fill('')
        await this.page.locator('.volante-table-cell-container input').type(fieldValue) 
        await this.page.locator('.volante-table-cell .volante-gutter-cell >> nth=-1').click()       
    }
    async deleteField(fieldName)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await this.page.locator(".volante-remove-icon").click()
        await expect(this.page.locator('.dialogBlock .dialogTitle div')).toHaveText('Delete Selection?')
        await expect(this.page.locator('.dialogBlock .error-message')).toHaveText('Do you want to delete the selected element(s)?')
        await expect(this.page.locator('.dialogBlock .dialogControl .main')).toHaveText('Yes')
        await expect(this.page.locator('.dialogBlock .dialogControl .secondary')).toHaveText('No')
        await this.page.locator('.dialogBlock .dialogControl .main').click()
    }
    async selectDataType(fieldName,dataType)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-dataType'] .volante-table-cell-container").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-dataType'] .volante-table-cell-container").dblclick()
        await this.page.locator('.volante__indicators .volante__dropdown-indicator >> nth=0').click()
        await this.page.locator('.input-container .searchable-input').click()
        await this.page.locator('.input-container .searchable-input').type(dataType)
        await this.page.locator('.volante__option >> nth=-1').click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-gutter']").click()
    }
    async typeDescription (fieldName, descriptionValue)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-description'] .volante-table-cell-container").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-description'] .volante-table-cell-container").dblclick()
        await this.page.locator("div[aria-describedby='volante-column-description'] .volante-input").click()
        await this.page.locator("div[aria-describedby='volante-column-description'] .volante-input").type(descriptionValue)
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-gutter']").click()
    }
    async typeDetailedName(fieldName, detailedNameValue)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-detailedName'] .volante-table-cell-container").click()
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-detailedName'] .volante-table-cell-container").dblclick()
        await this.page.locator("div[aria-describedby='volante-column-detailedName'] .volante-input").click()
        await this.page.locator("div[aria-describedby='volante-column-detailedName'] .volante-input").type(detailedNameValue)
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-gutter']").click()
    }
    async enableAlias()
    {
        await this.page.locator('.volante-header-column .volante-header-container >> nth=0').click()
        await this.page.locator('.volante-header-column .volante-header-container >> nth=0').click({button : 'right'})
        await this.page.locator("//div[text()='Alias']").click()
    }
    async disableAlias()
    {
        await this.page.locator('.volante-header-column .volante-header-container >> nth=0').click()
        await this.page.locator('.volante-header-column .volante-header-container >> nth=0').click({button : 'right'})
        await this.page.locator("(//div[text()='Alias'])[2]").click()
    }
    async typeAlias(fieldName)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await this.page.locator('//div[@aria-describedby="volante-column-aliasName"]').click();
        await this.page.locator('//div[@aria-describedby="volante-column-aliasName"]').dblclick();
        await this.page.locator("div[aria-describedby='volante-column-aliasName'] .volante-input").click()
        await this.page.locator("div[aria-describedby='volante-column-aliasName'] .volante-input").type('TestAlias')
        await this.page.locator(".theia-mod-selected div[aria-describedby='volante-column-gutter']").click()
    }

    async expandPropertiesSpeedBar(fieldName)
    {
        await this.page.locator("//span[text()='"+fieldName+"']").click()
        await expect.soft(this.page.locator('.volante-speedbar #status-bar-volante-properties-widget span')).toHaveText('Properties')
        await this.page.locator('.volante-speedbar #status-bar-volante-properties-widget').click()
    }
    async collpasePropertiesSpeedBar()
    {
        const speedBar = await this.page.locator('.volante-speedbar #status-bar-volante-properties-widget').getAttribute('class')
        const arrSpeedBar = await speedBar.split(' ')
        if(await arrSpeedBar.includes('isActive'))
        {
            await this.page.locator('.volante-speedbar #status-bar-volante-properties-widget').click()
        }
    }
    async verifyTabList(expectedList)
    {
                const tabList = await this.page.locator("(//div[@id='volante-properties-widget']//li[contains(@class,'p-unselectable-text')]/a/span)")
                
                const tabListCount = tabList.count()
                for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
                {
                    let titleValue = await this.page.locator("(//div[@id='volante-properties-widget']//li[contains(@class,'p-unselectable-text')]/a/span)["+i+"]").textContent()
                    await console.log(""+titleValue)
                  //  await expect.soft(titleValue).toBe(expectedList[j])
                    await expect.soft(titleValue).toContain(expectedList[j])
                }
    }
    async generalDefaultRequired()
    {
        await expect.soft(this.page.locator('.universal-properties .volante-checkbox label')).toHaveText('Required')
        await expect.soft(this.page.locator('.universal-properties .volante-checkbox input')).toBeChecked()
    }
    async generalTabClickRequired()
    {
        await this.page.locator('.universal-properties .volante-checkbox input').click()
    }
    async generalDefaultValue()
    {
        //This method is to verify Default value property
        await expect.soft(this.page.locator('.universal-properties .volante-input-group .input-group label')).toHaveText('Default Value')
        await expect.soft(this.page.locator('.universal-properties .volante-input-group .input-group input')).toHaveValue('')
    }
    async typeDefaultValue(defaultValue)
    {
        await this.page.locator('.universal-properties .volante-input-group .input-group input').click()
        await this.page.locator('.universal-properties .volante-input-group .input-group input').type(defaultValue)
    }
    async defaultEncodingOption()
    {
        await expect.soft(this.page.locator('.universal-properties .volante-input-group .volante-label >> nth=-2')).toHaveText('Encoding')
        await expect.soft(this.page.locator('.universal-properties .volante-input-group .volante-select .volante__single-value')).toHaveText('Text')
    }
    async selectEncodingOption()
    {
        await this.page.locator('.universal-properties .volante-input-group .volante-select .volante__dropdown-indicator').click()
        await expect(this.page.locator('.volante__menu-list .volante-flex-row >> nth=0')).toHaveText('Text')
        await this.page.locator('.volante__menu-list .volante-flex-row >> nth=0').click()
        await this.page.locator('.universal-properties .volante-input-group .input-group input').click()
        await expect(this.page.locator('.universal-properties .volante-input-group .volante-select .volante__single-value')).toHaveText('Text')
    }
    async clickFacetButton(fieldName)
    {
        await this.page.locator('.new-facet').click()
        await expect.soft(this.page.locator('.dialogBlock .dialogTitle div')).toHaveText('Facets - '+fieldName+'')
        const facetsDialog=await this.page.locator('.dialogBlock .dialogTitle i').getAttribute('class')
        await expect.soft(facetsDialog).toContain('closeButton')
        const tabList = await this.page.locator('.dialogBlock .facets ul li')
        const tabListCount = tabList.count()
        const tabValue=['Facets','Pattern','Enumeration']
        for(let i=1,j=0;i<=tabListCount,j<tabValue.length;i++,j++)
        {
            const title = await this.page.locator("(//div[contains(@class,'facets')]//li[contains(@class,'p-unselectable-text')]/a/span[contains(@class,'p-tabview-title')])["+i+"]").textContent()
            await expect.soft(title).toContain(tabValue[j])
        }
    }
    async facetsTable()
    {
        await this.page.locator('.dialogBlock .facets ul li:nth-child(1) span')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table #volante-column-facets .volante-header-content')).toHaveText('Facets')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table #volante-column-value .volante-header-content')).toHaveText('Value')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table #volante-column-description .volante-header-content')).toHaveText('Description')
    }
    async facetsPattern()
    {
        await this.page.locator('.dialogBlock .facets ul li:nth-child(2) span').click()
       
        const addTitle = await this.page.locator('.facet .volante-toolbar .volante-add-variable-icon').getAttribute('title')
        await expect.soft(addTitle).toContain('Add')
        const removeTitle = await this.page.locator('.facet .volante-toolbar .volante-remove-variable-icon').getAttribute('title')
        await expect.soft(removeTitle).toContain('Remove Selected Field(s)')
        const moveUpTitle = await this.page.locator('.facet .volante-toolbar .volante-move-up-icon').getAttribute('title')
        await expect.soft(moveUpTitle).toContain('Move Selection Up')
        const moveDownTitle = await this.page.locator('.facet .volante-toolbar .volante-down-icon').getAttribute('title')
        await expect.soft(moveDownTitle).toContain('Move Selection Down')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table .volante-header-content >> nth=-2')).toHaveText('Pattern')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table .volante-header-content >> nth=-1')).toHaveText('Description')

        //Click Add Icon
        await this.page.locator('.facet .volante-toolbar .volante-add-variable-icon').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=1').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=1').dblclick()
        await this.page.locator('.facet-border .volante__value-container .volante__input-container').click()
        await this.page.locator('.facet-border .volante__value-container .volante__input-container').type('TestPattern1')
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').dblclick()
        await this.page.locator('.facet-border  .volante-table-input-cell').click()
        await this.page.locator('.facet-border  .volante-table-input-cell').type('Test Description')
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await expect(this.page.locator('.facet-border .volante-table-cell .default-cell-viewer >> nth=1')).toHaveText('TestPattern1')
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').click()
        await expect(this.page.locator('.facet-border .volante-table-cell .default-cell-viewer >> nth=-1')).toHaveText('Test Description')
        await this.page.locator('.dialogBlock .facets .volante-add-variable-icon').click()
        await this.page.locator('.facet-border div[aria-colindex="1"] .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border div[aria-colindex="2"] .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border div[aria-colindex="2"] .volante-table-cell >> nth=-1').dblclick()
        await this.page.locator('.facet-border div[aria-colindex="2"] .volante-table-cell .volante__indicators').click()
        await expect.soft(this.page.locator("(//div[contains(@class,'volante__option')]/div)[1]")).toHaveText('|')
        await this.page.locator("(//div[contains(@class,'volante__option')]/div)[1]").click()
        await expect.soft(this.page.locator('.facet-border div[aria-colindex="2"] .volante-table-cell .default-cell-viewer >> nth=-1')).toHaveText('|')
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').dblclick()
        await this.page.locator('.facet-border  .volante-table-input-cell').click()
        await this.page.locator('.facet-border  .volante-table-input-cell').type('Test Description 2')
        await this.page.locator('.facet-border div[aria-colindex="1"] .volante-table-cell >> nth=-1').click()
        await expect.soft(this.page.locator('.facet-border .volante-table-cell .default-cell-viewer >> nth=-1')).toHaveText('Test Description 2')        
        
        //Delete row in the Pattern (Facets Dialog box) tab.
        await this.page.locator('.facet-border div[aria-colindex="1"] .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet .volante-toolbar .volante-remove-variable-icon').click()
        await this.deleteSelectionDialog('Yes')
        //await expect.soft(this.page.locator('.facet-border div[aria-rowcount]')).toHaveValue('1')
        const rowCount = await this.page.locator('.facet-border div[aria-rowcount]').getAttribute('aria-rowcount')
        await expect.soft(rowCount).toContain('1')
    }

    async facetsEnumeration()
    {
        await this.page.locator('.dialogBlock .facets ul li >>nth=-1').click()
        const addTitle = await this.page.locator('.facet .volante-toolbar .volante-add-variable-icon').getAttribute('title')
        await expect.soft(addTitle).toContain('Add')
        const removeTitle = await this.page.locator('.facet .volante-toolbar .volante-remove-variable-icon').getAttribute('title')
        await expect.soft(removeTitle).toContain('Remove Selected Field(s)')
        const moveUpTitle = await this.page.locator('.facet .volante-toolbar .volante-move-up-icon').getAttribute('title')
        await expect.soft(moveUpTitle).toContain('Move Selection Up')
        const moveDownTitle = await this.page.locator('.facet .volante-toolbar .volante-down-icon').getAttribute('title')
        await expect.soft(moveDownTitle).toContain('Move Selection Down')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table .volante-header-content >> nth=-2')).toHaveText('Enumeration')
        await expect.soft(this.page.locator('.dialogBlock .facets .volante-table .volante-header-content >> nth=-1')).toHaveText('Description')

        // Enumeration add icon
        await this.page.locator('.dialogBlock .facets .volante-add-variable-icon').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=1').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=1').dblclick()
        await this.page.locator('.facet-border .volante-table-cell-container .volante-table-input-cell').click()
        await this.page.locator('.facet-border .volante-table-cell-container .volante-table-input-cell').type('TestEnumeration1')
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').dblclick()
        await this.page.locator('.facet-border  .volante-table-input-cell').click()
        await this.page.locator('.facet-border  .volante-table-input-cell').type('Test Description')
        await this.page.locator('.facet-border .volante-table-cell >> nth=0').click()
        await expect.soft(this.page.locator('.facet-border .volante-table-cell .default-cell-viewer >> nth=1')).toHaveText('TestEnumeration1')
        await this.page.locator('.facet-border .volante-table-cell >> nth=-1').click()
        await expect.soft(this.page.locator('.facet-border .volante-table-cell .default-cell-viewer >> nth=-1')).toHaveText('Test Description')
        await this.page.locator('.dialogBlock .facets .volante-add-variable-icon').click()
        await this.page.locator('.facet-border div[aria-colindex="1"] .volante-table-cell >> nth=-1').click()
        await this.page.locator('.facet-border div[aria-colindex="2"] .volante-table-cell >> nth=-1').click()

        //Delete row in the enumeration
        //Delete row in the Pattern (Facets Dialog box) tab.
        await this.page.locator('.facet-border div[aria-colindex="1"] .volante-table-cell >> nth=-1').click()
        await this.page.locator('.dialogBlock .facets .volante-remove-variable-icon').click()
        await this.deleteSelectionDialog('Yes')
        const rowCount = await this.page.locator('.facet-border div[aria-rowcount]').getAttribute('aria-rowcount')
        await expect.soft(rowCount).toContain('1')
    }
    async facetsDialogControl(dialogButton)
    {
        await this.page.locator('//button[text()="'+dialogButton+'"]').click()
    }
    async deleteSelectionDialog(confirmButton)
    {
        await expect(this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')).toHaveText('Delete Selection?')
        await expect(this.page.locator('.dialogBlock .error-main .error-message')).toHaveText('Do you want to delete the selected element(s)?')
        await this.page.locator('.dialogBlock .dialogControl button:has-text("'+confirmButton+'")').click()
    }
    async verifyFacetsButtonColor()
    {
        await this.page.waitForTimeout(5000)
        const btnColor = await this.page.locator('//button[text()="Facets "]')
        const color = await btnColor.evaluate((ele)=>{
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        await expect.soft(btnColor).toHaveCSS('background-color','rgb(37, 102, 213)')
       // await expect.soft(btnColor).toHaveCSS('#007acc')
    }
    async clickPositionTab()
    {
        await this.page.locator("#volante-properties-widget ul[role='tablist'] li span >> nth=1").click()        
    }
    async verifyPositionTabValues(PositionValue,dataValue,lengthValue)
    {
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Field Position')
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=0')).toHaveText('Position in Message')
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=1')).toHaveText(PositionValue)
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=2')).toHaveText('Position in Data')
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=3')).toHaveText(dataValue)
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=4')).toHaveText('Length')
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-content .volante-flex-row div >> nth=5')).toHaveText(lengthValue)
    }
    async clickLengthTab()
    {
        await this.page.locator('//span[text()="Length"]').click()
    }
    async verifyLengthFixedLengthRadioButton()
    {
        const radioCircle = await this.page.locator('.universal-properties .volante-radio span >> nth=0').getAttribute('class')
        await expect.soft(radioCircle).toContain('pi-circle-on')
        await expect.soft(this.page.locator('.universal-properties .volante-radio label >> nth=0')).toHaveText('Fixed Length')
        await expect.soft(this.page.locator('.universal-properties .volante-input-field .volante-label >> nth=0')).toHaveText('Length')
        await expect.soft(this.page.locator('.universal-properties .volante-input-field .volante-input >> nth=0')).toHaveValue('0')
    }
    async typeLengthFixedLengthInput(lengthValue)
    {
        await this.page.locator('.universal-properties .volante-input-field .volante-input >> nth=0').type(lengthValue)
    }
    async verifyLengthPrecededRadioButton()
    {
        const lengthPrecededRadioButton = await this.page.locator('.universal-properties .volante-radio .p-radiobutton-box >> nth=-1').getAttribute('aria-checked')
        await expect.soft(lengthPrecededRadioButton).toContain('false')
        await expect.soft(this.page.locator('.universal-properties .volante-radio label >> nth=-1')).toHaveText('Length Preceded')

    }
    async verifyFixedLengthRadionButton()
    {
        //To verify the radion button of the fixed length property
        const lengthPrecededRadioButton = await this.page.locator('.universal-properties .volante-radio .p-radiobutton-box >> nth=-1').getAttribute('aria-checked')
        await expect.soft(lengthPrecededRadioButton).toContain('true')
        await expect.soft(this.page.locator('.universal-properties .volante-radio label >> nth=-1')).toHaveText('Fixed length')
    }
    async verifyLengthFieldFixedLength()
    {
        await expect.soft(this.page.locator('.universal-properties .volante-input-field label')).toHaveText('Length')
        const defaultLengthValue = await this.page.locator('.universal-properties .volante-input-field input').getAttribute('value')
        await expect(defaultLengthValue).toContain(0)
    }
    async typeLengthFieldFixedLength()
    {
        await this.page.locator('.universal-properties .volante-input-field input').click()
        await this.page.locator('.universal-properties .volante-input-field input').type('2')
    }

    async clickLengthPrecededRadioButton()
    {
       // await this.page.locator('.universal-properties .volante-radio .p-radiobutton-box >> nth=-1').click()
        await this.page.click('.universal-properties .volante-radio .p-radiobutton-box span >> nth=-1',{delay:2000})
       
    }
    async lengthPrecededLengthField()
    {
        // To verify the label and formula icon
        await expect(this.page.locator('.universal-properties .volante-formula-table-select label')).toHaveText('Length Field')
        const formulaIcon =await this.page.locator('.universal-properties .volante-formula-table-select .volante__control .formula-dropdown-input span >> nth=-1').getAttribute('class')
        await expect(formulaIcon).toContain('volante-formula-validation-rule-icon')
        //await console.log("Passed")
    }
    async typeLengthPrecededLengthField(LengthFieldValue)
    {
        await this.page.locator('.universal-properties .volante-formula-table-select .volante__control .formula-dropdown-input .monaco-editor .view-lines .view-line').click()
        await this.page.locator('.universal-properties .volante-formula-table-select .volante__control .formula-dropdown-input .monaco-editor .view-lines .view-line').type(LengthFieldValue)
    }
    async selectLengthPrecededLengthField(fieldType)
    {
        await this.page.locator('.universal-properties .volante-formula-table-select .volante__control .volante__dropdown-indicator').click()
        await expect(this.page.locator('.volante-table .volante-row-column .volante-table-cell-container .indent-cell-value >> nth=-1')).toHaveText(fieldType)
        await this.page.locator('.volante__menu .volante-table .volante-row-column .volante-table-cell-container >> nth=0').click()
       // const fieldName = await this.page.locator('.volante-formula-component-container .view-line span').textContent()
       // await expect.soft(fieldName).toHaveText('New Field')
        
    }
    //async editFormulaWindow()
    //{}
    async verifyLengthPrecededMinLength()
    {
        await expect.soft(this.page.locator('.universal-properties .volante-input-field .volante-label >> nth=-2')).toHaveText('Min Length')
        await expect.soft(this.page.locator('.universal-properties .volante-input-field input >> nth=-2')).toHaveValue('')        
    }
    async typeLengthPrecededMinLength(minNumber)
    {
        await this.page.locator('.universal-properties .volante-input-field input >> nth=-2').type(minNumber)
    }
    async verifyLenghtPrecedMaxLength()
    {
        await expect(this.page.locator('.universal-properties .volante-input-field .volante-label >> nth=-1')).toHaveText('Max Length')
        await expect(this.page.locator('.universal-properties .volante-input-field input >> nth=-1')).toHaveValue('')        
    }
    async typeLengthPrecededMaxLength(maxNumber)
    {
        await this.page.locator('.universal-properties .volante-input-field input >> nth=-1').type(maxNumber)
    }
    async verifyDelimitedRadioButton()
    {
        const delimitedRadioButton = await this.page.locator('.universal-properties .volante-radio .p-radiobutton-box >> nth=-1').getAttribute('aria-checked')
        await expect.soft(delimitedRadioButton).toContain('true')
        await expect.soft(this.page.locator('.volante-radio label >> nth=-1')).toHaveText('Delimited')
    }
    async clickDelimitedRadioButton()
    {
        
        await this.page.locator('.volante-radio .p-radiobutton-box span >> nth=-1').click({delay:2000})
       const classNames = await this.page.locator('.volante-radio .p-radiobutton-box span >> nth=-1').getAttribute('class')
       console.log("Splits: "+classNames.split(" "))
        const isFocused = classNames.split(" ").includes('pi-circle-on')
       if(!isFocused){
        await this.page.locator('.volante-radio .p-radiobutton-box span >> nth=-1').click()
       }
    }
    async lengthDelimiterDelimiterHeading()
    {
        //To verify the label and default values in the dropown.
        await expect.soft(this.page.locator('.delimiter-main .delimiter-heading span')).toHaveText('Delimiter')
        await this.page.locator('.delimiter-main .delimiter-dropdown input').click()
        await expect.soft(this.page.locator('.delimiter-main .delimiter-dropdown input')).toHaveValue('Default')
        await this.page.locator('.delimiter-main .delimiter-dropdown .volante__indicator').click()
        const optionValues = ['Default',',',';','End of Record']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            //(//div[@id='volante-properties-widget']//li[contains(@class,'p-unselectable-text')]/a/span)["+i+"]
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
    }
    async selectDelimitedOptions(optionValue)
    {
        await this.page.locator('.delimiter-col .delimiter-main .delimiter-dropdown .volante__input-container').click()
        await this.page.locator('.delimiter-col .delimiter-main .delimiter-dropdown .volante__indicator').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
        await this.page.locator('.delimiter-col .delimiter-main .delimiter-dropdown .volante__input-container').click()
        await expect(this.page.locator('.delimiter-col .delimiter-main .delimiter-dropdown .volante__input-container input')).toHaveValue(optionValue)
        
    }
    async checkFieldExcludeDelimiter()
    {
        await expect(this.page.locator('.delimiter-col .delimiter-main .volante-input-group .volante-label')).toHaveText('Exclude Delimiter')
        await this.page.locator('.delimiter-col .delimiter-main .volante-input-group input').click()
    }
    async lengthDefaultDelimitedQuoteRelease()
    {
        //This method is to verify the label of quote/Release and the default values mentioned in the textbox of the dropdown components
        await expect.soft(this.page.locator('.delimiter-col .quote-main .quote-heading span')).toHaveText('Quote / Release')
        await expect.soft(this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__input')).toHaveValue('Default')
        await expect.soft(this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-two .volante__input')).toHaveValue('Default')
        await expect.soft(this.page.locator('.delimiter-col .quote-main .quote-second-dropdown .volante__single-value')).toHaveText('Default')
    }
    async verifyOptionsFromQuoteFirstOne()
    {
        //To verify the options available in the quote first one dropdown component(Field --> Delimited Property --> Quote/Release (first dropdown))
        await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__dropdown-indicator').click()
        const optionValues = ['Default','"','']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }    
        await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__dropdown-indicator').click()
    }
    async selectOptionsFromQuoteFirstOne(optionValue)
    {   
        //To Click the options available in the quote first one dropdown component(Field --> Delimited Property --> Quote/Release (first dropdown))
        await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__input-container').click()
        await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__dropdown-indicator').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyOptionsFromQuoteSecondOne()
    {
        //To verify the options available in the quote second dropdown component(Field --> Delimited Property --> Quote/Release (Second dropdown))
        await this.page.locator('.delimiter-col .quote-main .quote-first-two .volante__dropdown-indicator').click()
        const optionValues = ['Default','\\']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }    
        await this.page.locator('.delimiter-col .quote-main .quote-first-two .volante__dropdown-indicator').click()
    }
    async selectOptionsFromQuoteSecondOne(optionValue)
    {
        //To click the options available in the quote second dropdown component(Field --> Delimited Property --> Quote/Release (Second dropdown))
        await this.page.locator('.delimiter-col .quote-main .quote-first-two .volante__input-container').click()
        await this.page.locator('.delimiter-col .quote-main .quote-first-two .volante__dropdown-indicator').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyOptionsFromQuoteThird()
    {
        //To verify the options available in the quote third dropdown component(Field --> Delimited Property --> Quote/Release (Last-Third dropdown))
        await this.page.locator('.delimiter-col .quote-main .quote-second-dropdown .volante__dropdown-indicator').click()
        const optionValues = ['Default','Always','Delimiter','Special Characters']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.delimiter-col .quote-main .quote-second-dropdown .volante__dropdown-indicator').click()    
    }
    async selectOptionsFromQuoteThird(optionValue)
    {
        //To click the options available in the quote second dropdown component(Field --> Delimited Property --> Quote/Release (Second dropdown))
        await this.page.locator('.quote-second-dropdown .volante__single-value').click()
        await this.page.locator('.delimiter-col .quote-main .quote-second-dropdown .volante__dropdown-indicator').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async lengthTabVerifyminMaxLenghtLabel()
    {
        //To verify the label of the min/max property
        await expect(this.page.locator('.delimiter-col .min-max-main span')).toHaveText('Min/Max Length')
    }
    async lengthTabTypeMinLength(minValue)
    {
        //To type the value in the Min property textbox.
        await this.page.locator('.min-input input').click()
        await this.page.locator('.delimiter-col .min-max-main .min-max-input .min-input >> nth=-1').type(minValue)
    }
    async lengthTabTypeMaxLength(maxValue)
    {
        //To type the value in the Max property textbox.
        await this.page.locator('.max-input input').click()
        await this.page.locator('.delimiter-col .min-max-main .min-max-input .max-input >> nth=-1').type(maxValue)
    }
    async selectTagTab()
    {
        //To select the tag tab
        await this.page.locator('//span[text()="Tag"]').click()
    }
    async tagTabVeirfyTagLabel()
    {
        // To verify the tag property label
        await expect(this.page.locator('.universal-width-reducer .volante-label >> nth=0')).toHaveText('Tag')
    }
    async tagTabTypeTagProperty(tagValue)
    {
        //To type the value in the tag textbox.
        await this.page.locator('.universal-width-reducer .volante-input-field input').click()
        await this.page.locator('.universal-width-reducer span input').type(tagValue)
        
    }
    async tagTabVerifySeparatorLabel()
    {
        //To verify the label of the separator tag
        await expect(this.page.locator('.universal-width-reducer .volante-label >> nth=-1')).toHaveText('Separator')
    }
    async tagTabVerifySeparatorDropdown()
    {
        //To verify the options in the separator dropdown
        await this.page.locator('.universal-width-reducer .volante-select .volante__indicator').click()
        await expect(this.page.locator(".volante__menu-list .volante__menu-notice")).toHaveText('No options')
        await this.page.locator('.universal-width-reducer .volante-select .volante__indicator').click()
    }
    async tagTabTypeSeparatorProperty(separatorValue)
    {
        //To type the value in the separator textbox.
        await this.page.locator('.universal-width-reducer .volante__input').click()
        await this.page.locator('.universal-width-reducer .volante__input').type(separatorValue)
    }
    async selectTextEncodingTab()
    {
        //To select the text encoding tab.
        await this.page.locator('//span[text()="Text Encoding"]').click()
    }
    
    async verifyTextEncodingJustificationLabel()
    {
        //To verify the label value of the justification property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=0")).toHaveText('Justification')
    }
    async verifyTextEncodingJustificationDefaultValue()
    {
        //To verify the Justification property's default selected dropdown value
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=0").click()
        await expect(this.page.locator('.universal-text-encoding .volante__value-container .volante__single-value >> nth=0')).toHaveText('Default')
    }
    async verifyTextEncodingJustificationOptions()
    {
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=0").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=0").click()
        const optionValues = ['Default','Left','Right']
        const justificationDropdownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const justificationValuesCount = justificationDropdownList.count()
        for (let i=1,j=0;i<=justificationValuesCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div")
            await expect(titleValue).toHaveText(optionValues[j])
        }
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=0").click()

    }
    async selectOptionsTextEncodingJustification(optionValue)
    {
        //To select the provided option in the dropdown
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=0").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=0").click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyTextEncodingTerminatorLabel()
    {
        //To verify the label value of the Terminator property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=1")).toHaveText('Terminator')
    }
    async verifyTextEncodingTerminatorDefaultValue()
    {
        //To verify the Terminator property's default selected dropdown value
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=1").click()
        await expect(this.page.locator('.universal-text-encoding .volante__value-container .volante__input-container input >> nth=0')).toHaveValue('Default')
    }
    async verifyTextEncodingTerminatorOptions()
    {
        //To verify the options available in the terminator property(Text-Encoding tab)
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=1").click()
        const optionValues = ['Default','NULL Character']
        const terminatorDropdownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const terminatorValuesCount = terminatorDropdownList.count()
        for (let i=1,j=0;i<=terminatorValuesCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div")
            await expect(titleValue).toHaveText(optionValues[j])
        }
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=1").click()
    }
    async selectOptionsTextEncodingTerminator(optionValue)
    {
        //To select the provided option in the dropdown
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=1").click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async typeTextEncodingTerminatorProperty(inputValue)
    {
        //To type the value provided in the text-box of the terminator property
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").click()
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").press('Control+A')
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").press("Backspace")
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").type(inputValue)
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=0").click()
    }
    async verifyTextEncodingPaddingLabel()
    {
        //To verify the label value of the Padding property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=2")).toHaveText('Padding')
    }
    async verifyTextEncodingPaddingDefaultValue()
    {
        //To verify the Padding property's default selected dropdown value
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=1").click()
        await expect(this.page.locator('.universal-text-encoding .volante__value-container .volante__single-value >> nth=1')).toHaveText('Default')
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=1").click()
    }
    async verifyTextEncodingPaddingOptions()
    {
        //To verify the options available in the padding property (Text encoding tab-field)
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=1").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=2").click()
        const optionValues = ['Default','Space','Zeros','Zeros(Null)']
        const paddingDropdownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const paddingValuesCount = paddingDropdownList.count()
        for (let i=1,j=0;i<=paddingValuesCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div")
            await expect(titleValue).toHaveText(optionValues[j])
        }
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=2").click()
    }
    async selectOptionsTextEncodingPadding(optionValue)
    {
        //To select the provided option in the dropdown
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=1").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=2").click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }

    async verifyTextEncodingTrimLabel()
    {
        //To verify the label value of the Trim property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=3")).toHaveText('Trim')
    }
    async verifyTextEncodingTrimDefaultValue()
    {
        //To verify the Trim property's default selected dropdown value
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=-1").click()
        await expect(this.page.locator('.universal-text-encoding .volante__value-container .volante__single-value >> nth=-1')).toHaveText('Default')
    }
    async verifyTextEncodingTrimOptions()
    {
        //To verify the options available in the Trim property (Text encoding tab-field)
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=-1").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=3").click()
        const optionValues = ['Default','Do Not Trim','Trim Both Ends','Trim Left','Trim Right']
        const trimDropdownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const trimValuesCount = trimDropdownList.count()
        for (let i=1,j=0;i<=trimValuesCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div")
            await expect(titleValue).toHaveText(optionValues[j])
        }
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=3").click()
    }
    async selectOptionsTextEncodingTrim(optionValue)
    {
        //To select the provided option in the dropdown
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__single-value >> nth=-1").click()
        await this.page.locator(".universal-text-encoding .volante__indicators .volante__indicator >> nth=3").click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyTextEncodingLabel()
    {
        //To verify the label value of the Text Encoding property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=4")).toHaveText('Text Encoding')
    }
    async typeTextEncodingTextBox(inputValue)
    {
        //To Type in the Text encoding text box.
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=-1").click()
        await this.page.locator(".universal-text-encoding .volante__value-container .volante__input-container >> nth=-1").type(inputValue)
        await this.page.keyboard.press('Escape')
    }
    async verifyTextEncodingParsedValueLabel()
    {
        //To verify the label value of the ParsedValue property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=5")).toHaveText('Parsed Value')
    }
    async typeTextEncodingParsedValueLabel(inputValue)
    {
        //To type in the  ParsedValue property
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").type(inputValue)
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").click()
        await this.page.locator('//span[text()="General"]').click()
        await this.page.locator('//span[text()="Text Encoding"]').click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").click()
        await this.page.keyboard.press('F4')
    }
    async editFormulaTextEncodingParsedValue(inputValue)
    {
        //To verify edit formula window
        await expect.soft(this.page.locator("//div[text()='Edit Formula']")).toBeVisible()
        const editWindows= await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')
       await expect.soft(editWindows).toHaveText('Edit Formula')
       await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=0')).toHaveText('Data')
        await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=-1')).toHaveText('Functions')
        //await this.page.locator('.dialogBlock .volante-table .volante-indent-cell span >> nth=0').dblclick()
      //  await this.page.getByText('New FieldField New FieldType : StringPresence : MandatoryLength : 0Encoding : Te').dblclick();
        await this.page.locator('.dialogControl .main').click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").click()
        const parsedValueText = await this.page.locator('.formula-input .view-lines span >> nth=1').textContent()
        await expect.soft(parsedValueText).toContain(inputValue)

    }
    async verifyTextEncodingSerializedValueLabel()
    {
        //To verify the label value of the ParsedValue property
        await expect(this.page.locator(".universal-text-encoding .volante-label >> nth=-1")).toHaveText('Serialized Value')
    }
    async typeTextEncodingSerializedValueLabel(inputValue)
    {
        //To type in the  ParsedValue property
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=-1").click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=-1").type(inputValue)
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=-1").click()
        await this.page.locator('//span[text()="General"]').click()
        await this.page.locator('//span[text()="Text Encoding"]').click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=-1").click()
        await this.page.keyboard.press('F4')
    }
    async editFormulaTextEncodingSerializedValue(inputValue)
    {
        //To verify edit formula window
        await expect.soft(this.page.locator("//div[text()='Edit Formula']")).toBeVisible()
        const editWindows= await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')
       await expect.soft(editWindows).toHaveText('Edit Formula')
       await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=0')).toHaveText('Data')
        await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=-1')).toHaveText('Functions')
        //await this.page.locator('.dialogBlock .volante-table .volante-indent-cell span >> nth=0').dblclick()
        //await this.page.getByText('New FieldField New FieldType : StringPresence : MandatoryLength : 0Encoding : Te').dblclick();
        await this.page.locator('.dialogControl .main').click()
        await this.page.locator(".universal-text-encoding .formula-select-component >> nth=0").click()
        const parsedValueText = await this.page.locator('.formula-input .view-lines span >> nth=1').textContent()
        await expect.soft(parsedValueText).toContain(inputValue)
    }
    async verifyFillerTabList(expectedList)
    {
        //To verify the Filler field's tab list.
                const tabList = await this.page.locator("#volante-properties-widget ul[role='tablist'] li")
               
                const tabListCount = tabList.count()
                for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
                {
                    let title = await this.page.locator("(//ul[contains(@class,'p-tabview-nav')])[2]/li["+i+"]/a/span").textContent()
                    await expect(title).toContain(expectedList[j])
                }
    }
    async verifyFillerGeneralFixedValueLabel()
    {
        //To verify the filler field's General tab fixed value
        await expect(this.page.locator('.volante-properties-flex-row .input-group .volante-label')).toHaveText('Fixed Value')
    }
    async typeFillerGeneralFixedValue(fixedValue)
    {
        //To type the value in the filler field's Fixed value text box.
        await this.page.locator('.universal-properties .volante-input-field input').click()
        await this.page.locator('.volante-properties-flex-row .input-group input').type(fixedValue)
    }
   async verifySectionTabList(expectedList)
    {
    //To verify the Filler field's tab list.
            const tabList = await this.page.locator("#volante-properties-widget ul[role='tablist'] li")
            
            const tabListCount = tabList.count()
            for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
            {
                let title = await this.page.locator("(//ul[contains(@class,'p-tabview-nav')])[2]/li["+i+"]/a/span").textContent()
                await expect(title).toContain(expectedList[j])
            }
    }
   async verifySectionPropertiesOccurrenceTabRadioButtons(radioButtonNumber)
   {
    // To verify the total number of radio button in the occurrence tab(Section --> Properties speed bar)
    const radioButtonList =await this.page.locator('.universal-properties .volante-radio')
    await expect.soft(radioButtonList).toHaveCount(radioButtonNumber);
   }
   async verifyPropertiesFixedInstanceLabel()
   {
    //To verify the label value of Fixed Instances radio button.
    await expect(this.page.locator('.universal-properties .volante-radio label >> nth=0')).toHaveText('Fixed Instances')
   }
   async verifyFixedInstancesCountLabel()
   {
    //To verify the label value of Count property label (Universal Properties speed bar --> Occurrence --> Fixed Instanes ).
    await expect(this.page.locator('.universal-properties .volante-input-field label')).toHaveText('Count')
    await expect(this.page.locator('.universal-properties .volante-input-field input')).toHaveValue('1')
   }
   async typeFixedInstancesCountValue(countValue)
   {
    //To type the value in the Count text box property (Universal Properties speed bar --> Occurrence --> Fixed Instanes ).
    await this.page.locator('.universal-properties .volante-input-field input').type(countValue)
    await this.page.locator('.universal-properties .volante-input-field label').click()
   }
   async verifyVariableInstancesLabel()
   {
    //To verify the label value of Variable Instances radio button (Universal Properties speed bar --> Occurrence --> Variable Instances ).
    await expect(this.page.locator('.universal-properties .volante-radio label >> nth=1')).toHaveText('Variable Instances')
   }
   async clickVariableInstances()
   {
    //To click the radio button of the Variable Instances property
    await this.page.locator('.universal-properties .volante-radio-option >> nth=1').click()
   }
   async verifyVariableInstancesCountLabel()
   {
    //To verify the label value of Count field property(Universal Properties speed bar --> Occurrence --> Variable Instances )
    await expect(this.page.locator('.universal-properties .volante-formula-table-select label')).toHaveText('Count Field')
   }
   async typeVariableInstancesCountFieldProperty(countFieldValue)
   {
    //To verify the label value of Count field property(Universal Properties speed bar --> Occurrence --> Variable Instances )
    await this.page.locator('.universal-properties .volante-formula-component-container .monaco-scrollable-element .view-lines span >> nth=-1').type(countFieldValue)
   }
   async verifyFormulaFunctionIcon()
   {
    //To verify the formula function icon in the count field property
    const classFormulaFunctionIcon = await this.page.locator('.universal-properties .formula-dropdown-input span >> nth =-1').getAttribute('class')
    await expect(classFormulaFunctionIcon).toContain('volante-formula-validation-rule-icon')
   }
   async selectFromCountFieldDropdown(fieldValue)
   {
    //To select the option from the Count field Dropdown
    await this.page.locator('.universal-properties .volante-select .volante__indicator >> nth=0').click()
    await this.page.locator('(//span[text()="'+fieldValue+'"])[2]').click({delay:2000})
    
   }
   async verifyOccurrenceMinOccursDefaultValue()
   {
    //To verify the defaultValue of the Min Occurs property (Sequence --> properties --> variable instance --> Min Occurs)
    await expect.soft(this.page.locator('.universal-properties .volante-dropdown label >> nth=0')).toHaveText('Min Occurs')
    await expect.soft(this.page.locator('.universal-properties .volante__value-container input >> nth=0')).toHaveValue('0')
   }
   async verifyOccurrenceMaxOccursDefaultValue()
   {
    //To verify the defaultValue of the Max Occurs property (Sequence --> properties --> Max Occurs)
    await expect.soft(this.page.locator('.universal-properties .volante-dropdown label >> nth=1')).toHaveText('Max Occurs')
    await expect.soft(this.page.locator('.universal-properties .volante__value-container input >> nth=1')).toHaveValue('1')
   }
   async typeOccurrenceVariableInstanceMinOccursValue(typeMinValue)
   {
    //To type the value in the Min occurs property (Sequence --> properties --> Min Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=0').click()
    await this.page.locator('.universal-properties .volante__value-container input >> nth=0').type(typeMinValue)
    await this.page.keyboard.press('Escape')
   }
   async typeOccurrenceVariableInstanceMaxOccursValue(typeMaxValue)
   {
    //To type the value in the Min occurs property (Sequence --> properties --> Max Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=1').click()
    await this.page.locator('.universal-properties .volante__value-container input >> nth=1').type(typeMaxValue)
    await this.page.keyboard.press('Escape')
   }
   async selectOptionFromMinOccurs(optionMinOccurs)
   {
    //To select the option from Min Occurs dropdown (Sequence --> properties --> Min Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=0').click()
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=0').click()
    await this.page.locator('.volante__menu-list .volante__option div:has-text("'+optionMinOccurs+'")').click()
   }
   async selectOptionFromMaxOccursVariableInstances(optionMaxOccurs)
   {
    //To select the option from Max Occurs dropdown (Sequence --> properties --> Max Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=1').click()
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=1').click()
    await this.page.locator('.volante__menu-list .volante__option div:has-text("'+optionMaxOccurs+'")').click()
   }
   async verifyOptionsInMinOccursVariableInstances()
   {
    //To verify the options in the min occurs dropdown of the variable instances (Sequence --> properties --> Max Occurs)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=0').click()
    const tabList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const expectedList = ["0","1"]
            const tabListCount = tabList.count()
            for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
            {
                let title = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(title).toContain(expectedList[j])
            }
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=0').click()
   }
   async verifyOptionsInMaxOccursVariableInstances()
   {
    //To verify the options in the max occurs dropdown of the variable instances (Sequence --> properties --> Max Occurs)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=1').click()
    const tabList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const expectedList = ["1","Unbounded"]
            const tabListCount = tabList.count()
            for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
            {
                let title = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(title).toContain(expectedList[j])
            }
            await this.page.locator('.volante-dropdown .volante__indicator >> nth=1').click()
   }
   async clickDiscriminatedRadioButton()
   {
    //To click the radio button of the Discriminated property
    await this.page.locator('.universal-properties .volante-radio-option >> nth=-1').click({delay:2000})
   }
   async verifyDiscriminatedDiscriminator()
   {
    //To verify the label value of Discriminator field property(Universal Properties speed bar --> Occurrence --> Variable Instances )
    await expect(this.page.locator('.universal-properties .volante-formula-input-field label')).toHaveText('Discriminator')
   }
   async verifyDiscriminatorFormulaIcon()
   {
    //To verify the formula icon in the Discriminator text-box ((Universal Properties speed bar --> Occurrence --> Variable Instances ))
    let classAttribute = await this.page.locator(".universal-properties .formula-input .formula-function-icon").getAttribute('class')
    await console.log(classAttribute)
    await expect.soft(classAttribute.split(" ")).toContain('volante-formula-validation-rule-icon')
   }
   async typeOccurrenceDiscriminator(discriminatorValue)
   {
    //To type the value in the Discriminator text box. ((Universal Properties speed bar --> Occurrence --> Variable Instances ))
    await this.page.click('.universal-properties .volante-formula-component-container .monaco-editor div[data-mprt="3"]  >> nth=-1',{delay:2000})
    await this.page.locator('.universal-properties .volante-formula-component-container .monaco-editor >> nth=-2').type(discriminatorValue)
    await this.page.locator('.volante-formula-input-field >> nth=-1').click()
    await this.page.locator('.universal-properties .volante-formula-component-container .monaco-editor >> nth=-2').click()
    await this.page.keyboard.press('F4')
   }
   async verifyOccurenceDiscriminatorEditFormula(inputValue)
   {
    await expect.soft(this.page.locator("//div[text()='Edit Formula']")).toBeVisible()
        const editWindows= await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')
       await expect.soft(editWindows).toHaveText('Edit Formula')
       await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=0')).toHaveText('Data')
        await expect.soft(this.page.locator('.dialogBlock .p-unselectable-text span >> nth=-1')).toHaveText('Functions')
        //await this.page.locator('.dialogBlock .volante-table .volante-indent-cell span >> nth=0').dblclick()
        //await this.page.getByText('New FieldField New FieldType : StringPresence : MandatoryLength : 0Encoding : Te').dblclick();
        await this.page.locator('.dialogControl .main').click()
        await this.page.locator(".universal-properties .volante-formula-component-container .monaco-editor >> nth=-2").click()
        const parsedValueText = await this.page.locator('.formula-input .view-lines span >> nth=1').textContent()
        await expect.soft(parsedValueText).toContain(inputValue)
   }
   async verifyMinMaxLabelsDiscriminated()
   {
    //To verify the labels of min/max occurs property. (Universal Properties speed bar --> Occurrence --> Discriminated )
    await expect(this.page.locator('.universal-properties .volante-dropdown label >> nth=-2')).toHaveText('Min Occurs')
    await expect(this.page.locator('.universal-properties .volante-dropdown label >> nth=-1')).toHaveText('Max Occurs')
   }
   async verifyDiscriminatedMinOccursDefaultValue()
   {
    //To verify the defaultValue of the Min Occurs property (Universal Properties speed bar --> Occurrence --> Discriminated )
    await expect(this.page.locator('.universal-properties .volante-dropdown label >> nth=-2')).toHaveText('Min Occurs')
    await expect(this.page.locator('.universal-properties .volante__value-container input >> nth=-2')).toHaveValue('0')
   }
   async verifyDiscriminatedMaxOccursDefaultValue()
   {
    //To verify the defaultValue of the Max Occurs property (Universal Properties speed bar --> Occurrence --> Discriminated)
    await expect(this.page.locator('.universal-properties .volante-dropdown label >> nth=-1')).toHaveText('Max Occurs')
    await expect(this.page.locator('.universal-properties .volante__value-container input >> nth=-1')).toHaveValue('1')
   }
   async verifyOptionsInMinOccursDiscriminated()
   {
    //To verify the options in the min occurs dropdown of the Discriminated property (Sequence --> properties --> Discriminated --> Min Occurs)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=-2').click()
    const tabList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const expectedList = ["0","1"]
            const tabListCount = tabList.count()
            for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
            {
                let title = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(title).toContain(expectedList[j])
            }
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=-2').click()
   }
   async verifyOptionsInMaxOccursDiscriminated()
   {
    //To verify the options in the max occurs dropdown of the variable instances (Sequence --> properties --> Discriminated --> Max Occurs)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=-1').click()
    const tabList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const expectedList = ["1","Unbounded"]
            const tabListCount = tabList.count()
            for (let i =1,j=0;i<=tabListCount,j<expectedList.length;i++,j++)
            {
                let title = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(title).toContain(expectedList[j])
            }
            await this.page.locator('.volante-dropdown .volante__indicator >> nth=-1').click()
   }
   async typeOccurrenceMinOccursValue(typeMinValue)
   {
    //To type the value in the Min occurs property //To verify the options in the max occurs dropdown of the variable instances (Sequence --> properties --> Discriminated --> Max Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=-2').click()
    await this.page.locator('.universal-properties .volante__value-container input >> nth=-2').type(typeMinValue)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=-2').click()
   }
   async typeOccurrenceMaxOccursValue(typeMaxValue)
   {
    //To type the value in the Min occurs property //To verify the options in the max occurs dropdown of the variable instances (Sequence --> properties --> Discriminated --> Max Occurs)
    await this.page.locator('.universal-properties .volante__value-container input >> nth=-1').click()
    await this.page.locator('.universal-properties .volante__value-container input >> nth=-1').type(typeMaxValue)
    await this.page.locator('.volante-dropdown .volante__indicator >> nth=-1').click()
   }
   async clickPropertiesLengthTab()
   {
    await this.page.locator("//span[text()='Length']").click()
   }
   async verifyRadioSelectionAutoLengthTab()
   {
    //To verify whether the radio button is  selected in the Auto tab (Universal Properties --> Length --> Auto)
    let classAttribute = await this.page.locator(".universal-properties .volante-radio span >> nth=0").getAttribute('class')
    await console.log(classAttribute)
    await expect.soft(classAttribute.split(" ")).toContain('pi-circle-on')
   }
   async verifyLabelAutoLengthTab()
   {
    //To verify whether the radio button is  selected in the Auto tab (Universal Properties --> Length --> Auto)
    await expect(this.page.locator('.universal-properties .volante-radio label >> nth=0')).toHaveText('Auto')
   }
   async clickAutoRadioButtonLengthTab()
   {
    //To click the radio button is  selected in the Auto tab (Universal Properties --> Length --> Auto)
    await this.page.locator('.universal-properties .volante-radio span >> nth=0').click()
   }
   async clickLengthPrecededLenghtTab()
   {
    //To click the radio button is  selected in the Length Preceded option (Universal Properties --> Length --> Length Preceded)
    //Label of the Property is also verified
    await this.page.locator('.universal-properties .volante-radio span >> nth=1').click()
    await expect.soft(this.page.locator('.universal-properties .volante-radio label >> nth=1')).toHaveText('Length Preceded')
   }
   async verifyLabelLengthField()
   {
    //To verify the label of the Lenght field property (Universal Properties --> Length --> Length Preceded)
    await expect.soft(this.page.locator('.universal-properties .volante-label >> nth=0')).toHaveText('Length Field')
    const formulaIcon =await this.page.locator('.universal-properties .volante-formula-table-select .volante__control .formula-dropdown-input span >> nth=-1').getAttribute('class')
    await expect.soft(formulaIcon).toContain('volante-formula-validation-rule-icon')
   }
  
   async selectFromLengthFieldDropdown(fieldValue)
   {
    //To select the option from the Length field Dropdown (Universal Properties --> Length --> Length Preceded)
    await this.page.locator('.universal-properties .volante-select .volante__indicator >> nth=0').click()
    await this.page.locator('(//span[text()="'+fieldValue+'"])[2]').click()
    await this.page.locator('.universal-properties .volante-select .volante__indicator >> nth=0').click()
   }
   async typeLengthFieldLengthPreceded(countFieldValue)
   {
     //To type the value in the length field(Universal Properties --> Length --> Length Preceded)
     await this.page.locator('.universal-properties .volante-formula-component-container .monaco-scrollable-element .view-lines span >> nth=-1').click()
     await this.page.locator('.universal-properties .volante-formula-component-container .monaco-scrollable-element .view-lines span >> nth=-1').type(countFieldValue)
   }
   async verifyTrailingNullFieldLabel()
   {
    //To verify the label of the Trailing Null Fields (Universal Properties --> Length --> Length Preceded)
    await expect.soft(this.page.locator('.universal-properties .volante-dropdown label >> nth=0')).toHaveText('Trailing Null Fields')
   }
   async defaultOptionsInTrailingNullFields()
   {
    //To verify the default option in the Trailing Null Fields (Universal Properties --> Length --> Length Preceded)
    await this.page.locator('.universal-properties .volante__control .volante__single-value >> nth=0').click()
    const defaultNullField = await this.page.locator('.universal-properties .volante__control .volante__single-value >> nth=0').textContent()
    await expect(defaultNullField).toContain('Do not trim')
   }
   async verifyOptionsInTrailingNullFields()
   {
    //To verify the options in the Trailing Null Fields (Universal Properties --> Length --> Length Preceded)
    await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=1').click()
    //await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__dropdown-indicator').click()
        const optionValues = ['Do not trim','Do not trim (retain last delimiter)','Trim','Trim (retain last delimiter)']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=1').click()
    }
    async selectOptionInTrailingNullFields(optionsNullFields)
    {
        //To select the  options in the Trailing Null Fields (Universal Properties --> Length --> Length Preceded)
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=1').click()
        await this.page.locator('.volante__menu .volante__menu-list .volante__option:has-text("Do not trim") >> nth=0').click()
    }
    async clickDelimitedLengthSequence()
    {
         //To Click the Delimited option radio button (Universal Properties --> Length --> Delimited)
        await this.page.locator('.universal-properties .volante-radio span >> nth=-1').click()
        await expect.soft(this.page.locator('.universal-properties .volante-radio label >> nth=-1')).toHaveText('Delimited')
    }
    async verifyInstanceDelimiterLabel()
    {
        //To verify the Instance Delimiter label (Universal Properties --> Length --> Delimited)
        await expect(this.page.locator('.universal-properties .volante-dropdown .volante-label >> nth=1')).toHaveText('Instance Delimiter')
    }
    async typeInstanceDelimiterDelimited(typeInstanceDelimited)
    {
        //To type the Instance Delimiter property (Universal Properties --> Length --> Delimited)
        await this.page.locator('.universal-properties .volante__input-container input >> nth=0').click()
        await this.page.locator(".universal-properties .volante__input-container input >> nth=0").press('Control+A')
        await this.page.locator(".universal-properties .volante__input-container input >> nth=0").press("Backspace")
        await this.page.locator('.universal-properties .volante__input-container input >> nth=0').type(typeInstanceDelimited)
        await expect.soft(this.page.locator('.universal-properties .volante__input-container input >> nth=0')).toHaveValue('test')
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=2').click()
    }
    async verifyOptionsInstanceDelimiter()
    {
        //To type the Instance Delimiter property (Universal Properties --> Length --> Delimited)
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=2').click()
            const optionValues = ['Default','\\n','\\r\\n']
            const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const delimitedCount = delimitedDropDownList.count()
            for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
            {
                let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await console.log("TL: "+titleValue)
                await console.log("OL: "+optionValues[j])
                await expect.soft(titleValue).toContain(optionValues[j])
            }
            await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=2').click()
    }
    async selectOptionsInstanceDelimited(optionsNullFields)
    {
            //To select the  options in the Trailing Null Fields (Universal Properties --> Length --> Length Preceded)
            await this.page.locator('.universal-properties .volante__input-container input >> nth=0').click()
            await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=2').click({})
            await this.page.locator('.volante__menu .volante__menu-list .volante__option:has-text("'+optionsNullFields+'") >> nth=0').click()
       
    }
    async verifySectionDelimiterLabel()
    {
        //To verify the Section Delimiter label (Universal Properties --> Length --> Delimited)
        await expect(this.page.locator('.universal-properties .volante-dropdown .volante-label >> nth=-2')).toHaveText('Section Delimiter')
    }
    async typeSectionDelimiterDelimited(typeSectionDelimited)
    {
        //To type the Instance Delimiter property (Universal Properties --> Length --> Delimited)
        await this.page.locator('.universal-properties .volante__input-container input >> nth=-1').click()
        await this.page.locator(".universal-properties .volante__input-container input >> nth=-1").press('Control+A')
        await this.page.locator(".universal-properties .volante__input-container input >> nth=-1").press("Backspace")
        await this.page.locator('.universal-properties .volante__input-container input >> nth=-1').type(typeSectionDelimited)
        await expect.soft(this.page.locator('.universal-properties .volante__input-container input >> nth=-1')).toHaveValue('test')
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=-2').click()
    }
    async verifyOptionsSectionDelimiter()
    {
        //To Verify  the options listed Section Delimiter property (Universal Properties --> Length --> Delimited)
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=-2').click()
            const optionValues = ['Default','\\n','\\r\\n']
            const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const delimitedCount = delimitedDropDownList.count()
            for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
            {
                let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(titleValue).toContain(optionValues[j])
            }
        await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=-2').click()
    }
    async selectOptionsSectionDelimited(optionsNullFields)
    {
       
            //To select the  options in the Section Delimiter (Universal Properties --> Length --> Length Preceded)
            await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=-2').click()
            await this.page.locator('.volante__menu .volante__menu-list .volante__option:has-text("'+optionsNullFields+'") >> nth=0').click()
       
    }
    async verifyLabelExcludeDelimiter()
    {
        //To Verify the label of Exclude Delimiter Property (Universal Properties --> Length --> Delimited)
        await expect(this.page.locator('.universal-properties .volante-input-group .volante-label >> nth=-2')).toHaveText('Exclude Delimiter')
    }
    async checkExcludeDelimiter()
    {
      await this.page.locator('.universal-properties .volante-checkbox input').click()
    }
    async verifyTrailingNullFieldsDelimitedLabel()
    {
        //To verify the Section Delimiter label (Universal Properties --> Length --> Delimited)
        await expect(this.page.locator('.universal-properties .volante-dropdown .volante-label >> nth=-1')).toHaveText('Trailing Null Fields')
    }
    async verifyOptionsTrailingNullFieldsDelimiter()
    {
        //To Verify  the options listed Section Delimiter property (Universal Properties --> Length --> Delimited)
        await expect(this.page.locator('.universal-properties .volante-dropdown .volante-select .volante__single-value >> nth=-1')).toHaveText('Do not trim')
        await this.page.locator('.universal-properties .volante-dropdown .volante-select .volante__indicator >> nth=-1').click()
        //await this.page.locator('.delimiter-col .quote-main .quote-first .quote-first-one .volante__dropdown-indicator').click()
            const optionValues = ['Do not trim','Do not trim (retain last delimiter)','Trim','Trim (retain last delimiter)']
            const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
            const delimitedCount = delimitedDropDownList.count()
            for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
            {
                let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
                await expect(titleValue).toContain(optionValues[j])
            }
            await this.page.locator('.universal-properties .volante-dropdown .volante-select .volante__indicator >> nth=-1').click()
    }
    async selectOptionsTrailingNullFieldsDelimited(optionsNullFields)
    {
            //To select the  options in the Section Delimiter (Universal Properties --> Length --> Length Preceded)
            await this.page.locator('.universal-properties .volante__control .volante__indicators .volante__indicator >> nth=-1').click()
            await this.page.locator('.volante__menu .volante__menu-list .volante__option:has-text("'+optionsNullFields+'") >> nth=0').click() 
    }
    async clickFieldDelimiter()
    {
        await this.page.locator("#volante-properties-widget ul[role='tablist'] li span >> nth=-1").click()
    }
    async clickChoiceFieldDelimiter()
    {
        await this.page.locator("#volante-properties-widget ul[role='tablist'] li span >> nth=-3").click()
    }
    async clickAllSectionDelimiter()
    {
        await this.page.locator("#volante-properties-widget ul[role='tablist'] li span >> nth=-2").click()
    }
    async verifyLabelDelimiterFieldDelimiter()
    {
        await expect(this.page.locator('.universal-properties .volante-flex-col span >> nth=0')).toHaveText('Delimiter')
    }
    async verifyOptionsDelimiterFieldDelimiter()
    {
        const defValue = await this.page.locator('.universal-properties .volante-select .volante__input >> nth=0').getAttribute('value')
        await expect.soft(defValue).toContain('Default')
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=0').click()
        const optionValues = ['Default',',',';','End of Record']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=0').click()
    }
    async selectOptionDelimiterFieldDelimiter(optionValue)
    {
        //To Select a option from Delimiter property (Universal Properties --> Sequence --> Field Delimiter)
        await this.page.locator('.universal-properties .volante-select .volante__input >> nth=0').click() 
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=0').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyLabelQuotesFieldDelimiter()
    {
        //await expect.soft(this.page.locator('.universal-properties .volante-flex-col span >> nth=3')).toHaveText('Quote/Release')
    }   
    async verifyDefaultValueFirstQuotesFieldDelimiter()
    {
        // Sequence --> Properties --> Field Delimiter --> Quote/Release (First)
        const defValue = await this.page.locator('.universal-properties .volante-select .volante__input >> nth=1').getAttribute('value')
        await expect.soft(defValue).toContain('Default') 
    }
    async typeSequenceFirstQuotesFieldDelimiter()
    {
                // Sequence --> Properties --> Field Delimiter --> Quote/Release (First)
        await this.page.locator('.universal-properties .volante__control .volante__value-container input >> nth=1').click()
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=1").press('Control+A')
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=1").press("Backspace")
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=1").type('Test')
        const defValue = await this.page.locator('.universal-properties .volante__control .volante__value-container input >> nth=1').getAttribute('value')
        await expect.soft(defValue).toContain('Test')
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=1').click()
    }
    async verifySequenceOptionsFirstQuotesFieldDelimiter()
    {
                // Sequence --> Properties --> Field Delimiter --> Quote/Release (First)
        
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=1').click()
        const optionValues = ['Default','"','']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=1').click()
    }
    async selectOptionQuotesDelimiterFieldDelimiter(optionValue)
    {
        //To Select a option from Delimiter property (Universal Properties --> Sequence --> Field Delimiter)
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=1").click()
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=1').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }
    async verifyDefaultValueSecondQuotesFieldDelimiter()
    {
        // Sequence --> Properties --> Field Delimiter --> Quote/Release (second)
        const defValue = await this.page.locator('.universal-properties .volante-select .volante__input >> nth=2').getAttribute('value')
        await expect.soft(defValue).toContain('Default') 
    }
    async typeSequenceSecondQuotesFieldDelimiter()
    {
                // Sequence --> Properties --> Field Delimiter --> Quote/Release (second)
        await this.page.locator('.universal-properties .volante__control .volante__value-container input >> nth=2').click()
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=2").press('Control+A')
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=2").press("Backspace")
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=2").type('Test')
        const defValue = await this.page.locator('.universal-properties .volante__control .volante__value-container input >> nth=2').getAttribute('value')
        await expect.soft(defValue).toContain('Test')
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=2').click()
    }
    async verifySequenceOptionsSecondQuotesFieldDelimiter()
    {
                // Sequence --> Properties --> Field Delimiter --> Quote/Release (Second)
        
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=2').click()
        const optionValues = ['Default','\\']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()
        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=2').click()
    }
    async selectOptionQuotesSecondDelimiterFieldDelimiter(optionValue)
    {
        //To Select a option from Delimiter property (Universal Properties --> Sequence --> Field Delimiter)
        await this.page.locator(".universal-properties .volante__control .volante__value-container input >> nth=2").click()
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=2').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }

    async verifyDefaultValueThirdQuotesFieldDelimiter()
    {
        // Sequence --> Properties --> Field Delimiter --> Quote/Release (Third)
        const defValue = await this.page.locator('.universal-properties .volante-select .volante__input >> nth=-1').getAttribute('value')
        await expect.soft(defValue).toContain('Default') 
    }
    async verifySequenceOptionsThirdQuotesFieldDelimiter()
    {
                // Sequence --> Properties --> Field Delimiter --> Quote/Release (Third)
        
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=-1').click()
        const optionValues = ['Default','Always','Delimiter','Special Characters']
        const delimitedDropDownList = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div")
        const delimitedCount = delimitedDropDownList.count()

        for (let i=1,j=0;i<=delimitedCount,j<optionValues.length;i++,j++)
        
        {
            let titleValue = await this.page.locator("//div[contains(@class,'volante__menu-list')]/div["+i+"]/div").textContent()
            await expect.soft(titleValue).toContain(optionValues[j])
        }
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=-1').click()
    }
    async selectOptionQuotesThirdDelimiterFieldDelimiter(optionValue)
    {
        //To Select a option from Delimiter property (Universal Properties --> Sequence --> Field Delimiter)
        await this.page.locator(".universal-properties .volante__control .volante__value-container div >> nth=-1").click()
        await this.page.locator('.universal-properties .volante__indicators .volante__indicator >> nth=-1').click()
        await this.page.locator("//div[contains(@class,'volante__menu-list')]/div/div[text()='"+optionValue+"']").click()
    }

    async clickDiscriminatorTab()
    {
        //To click the Discriminator tab of Choice field
        await this.page.locator("//span[text()='Discriminator']").click()
    }
    async verifyLabelsOfTable()
    {
        //To Verify the lables of the table content in the Discriminator tab (Universal Properties --> Choice --> )
        await expect(this.page.locator('.universal-properties .volante-table #volante-column-field .volante-header-content')).toHaveText('Name')
        await expect(this.page.locator('.universal-properties .volante-table #volante-column-in .volante-header-content')).toHaveText('Discriminator')
    }
    async clickChoiceFiller()
    {
        //To click the Choice filler of Choice field
        await this.page.locator("//span[text()='Choice Filler']").click()
    }
    async verifyLabelOfPadProperty()
    {
        //To verify the lable of the checkbox in the choice filler tab.
        await expect(this.page.locator('#volante-properties-widget .volante-checkbox .volante-label')).toHaveText('Pad to equal Length')
    } 
    async clickPadPropertyCheckBox()
    {
        //To click the checkbox of Choice Filler tab.
        await this.page.locator('#volante-properties-widget .volante-checkbox input').click()
    }
    async selectEmptyMessage(messageName,messageList)
    {
        console.log("INside bacs select Empty message")
        await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1').click()
        await expect(this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')).toHaveText(messageName)
        await expect(this.page.locator('.new-ext-msg-dialog .dialog-part .dialog-col span >> nth=0')).toHaveText('Messages')
        const messages = await this.page.locator("//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span")
        const messageCount = messages.count()
        //node-children
        for (let i=1,j=0;i<=messageCount,j<messageList.length;i++,j++)
        {
            let messageText = await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span[contains(@class,'p-treenode-label')])["+i+"]").textContent()
          
          //  await expect.soft(messageText).toContain(messageList[j])
        }
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Message Creation Options')
        //const emptyMessageTrue = await this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box').getAttribute('aria-checked')
        //await expect(emptyMessageTrue).toBeTruthy()
        await expect.soft(this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box >> nth=0')).toBeEnabled()
        //await expect.soft(this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box >> nth=-1')).toBeDisabled()
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=0')).toHaveText('Create empty message')
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=-1')).toHaveText('Create based on selected message')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=0')).toHaveText('Help')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=-1')).toHaveText('Cancel')
        await expect.soft(this.page.locator('.volante-wizard-options .main')).toHaveText('OK')
        await this.page.locator('.volante-wizard-options .main').click()

    }
    async verifyNACHAToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence", "Add Choice", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
        await expect(toolBarActionMenu).toContain("Platform Properties")
    }
    async selectBojnetEmptyMessage(messageName,messageList)
    {
        //(//ul[contains(@class,'p-tree-container')]//span[contains(@class,'p-treenode-label')]/span)
        await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1').click()
        await expect(this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')).toHaveText(messageName)
        await expect(this.page.locator('.new-ext-msg-dialog .dialog-part .dialog-col span >> nth=0')).toHaveText('Messages')
        const messages = await this.page.locator("//ul[contains(@class,'p-tree-container')]//span[contains(@class,'p-treenode-label')]/span")
        const messageCount = messages.count()
        for (let i=1,j=0;i<=messageCount,j<messageList.length;i++,j++)
        {
            let messageText = await this.page.locator("(//ul[contains(@class,'p-tree-container')]//span[contains(@class,'p-treenode-label')]/span)["+i+"]").textContent()
          
            await expect.soft(messageText).toContain(messageList[j])
        }
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Message Creation Options')
        //const emptyMessageTrue = await this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box').getAttribute('aria-checked')
        //await expect(emptyMessageTrue).toBeTruthy()
        await expect.soft(this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box >> nth=0')).toBeEnabled()
        //await expect.soft(this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box >> nth=-1')).toBeDisabled()
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=0')).toHaveText('Create empty message')
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=-1')).toHaveText('Create based on selected message')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=0')).toHaveText('Help')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=-1')).toHaveText('Cancel')
        await expect.soft(this.page.locator('.volante-wizard-options .main')).toHaveText('OK')
        await this.page.locator('.volante-wizard-options .main').click()

    }
    async verifyCHIPSToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence", "Add Choice", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]")
        const actionMenus = ["Platform Properties", "Synchronize with Dictionary"]
        const toolbamCount = await toolBarActionMenu.count()
        await console.log("Count: " + toolBarActionMenu+":::"+toolbamCount)
        for (let i = 1, j = 0; i <= toolbamCount, j < actionMenus.length; i++, j++) {
            const title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('title')
            await expect(title).toContain(actionMenus[j])
            switch (title) {
                case 'Synchronize with Dictionary':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;
                    }
            }

        }
    }
    async verifyDSEToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence",  "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
        await expect(toolBarActionMenu).toContain("Platform Properties")
    }
    async verifyEDIToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler","Add Sequence", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]")
        const actionMenus = ["Platform Properties", "Synchronize with Dictionary"]
        const toolbamCount = await toolBarActionMenu.count()
        await console.log("Count: " + toolBarActionMenu+":::"+toolbamCount)
        for (let i = 1, j = 0; i <= toolbamCount, j < actionMenus.length; i++, j++) {
            const title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('title')
            await expect(title).toContain(actionMenus[j])
            switch (title) {
                case 'Synchronize with Dictionary':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;
                    }
            }

        }
    }
    async verifyFedwireToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence", "Add Choice", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
        await expect(toolBarActionMenu).toContain("Platform Properties")
    }
    async verifyOASYSGlobalToolbar()
     {
        //await this.page.locator('//div[text()="External Format"]').click()
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Filler", "Add Sequence", "Add All (unordered section)", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
        await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Add Template':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await console.log(classAttribute)
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Save Selection As Template':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }

            }


        }

        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]")
        const actionMenus = ["Platform Properties", "Synchronize with Dictionary"]
        const toolbamCount = await toolBarActionMenu.count()
        await console.log("Count: " + toolBarActionMenu+":::"+toolbamCount)
        for (let i = 1, j = 0; i <= toolbamCount, j < actionMenus.length; i++, j++) {
            const title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('title')
            await expect(title).toContain(actionMenus[j])
            switch (title) {
                case 'Synchronize with Dictionary':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;
                    }
            }

        }
    }
    async verifyCRESTToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Sequence", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
        await expect(toolBarActionMenu).toContain("Platform Properties")
    }
    async verifySICEuroSICToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Sequence", "Add Choice", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]")
        const actionMenus = ["Platform Properties", "Synchronize with Dictionary"]
        const toolbamCount = await toolBarActionMenu.count()
        await console.log("Count: " + toolBarActionMenu+":::"+toolbamCount)
        for (let i = 1, j = 0; i <= toolbamCount, j < actionMenus.length; i++, j++) {
            const title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('title')
            await expect(title).toContain(actionMenus[j])
            switch (title) {
                case 'Synchronize with Dictionary':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'toolbar-action')][" + i + "]/span").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;
                    }
            }

        }
    }
    async selectMessageFormat(messageName,inputGroupName,versionInfo,detailedName,categoryType,descriptionDetails,messageList)
    {
        await this.page.locator('.dialogBlock .dialogTitle div >> nth=-1').click()
        await expect(this.page.locator('.dialogBlock .dialogTitle div >> nth=-1')).toHaveText(messageName)
        await expect(this.page.locator('.new-ext-msg-dialog .dialog-part .dialog-col span >> nth=0')).toHaveText('Messages')
        const messages = await this.page.locator("//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span")
        const messageCount = messages.count()
        //node-children
        for (let i=1,j=0;i<=messageCount,j<messageList.length;i++,j++)
        {
            let messageText = await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span[contains(@class,'p-treenode-label')])["+i+"]").textContent()
          
            await expect.soft(messageText).toContain(messageList[j])
        }
        await expect.soft(this.page.locator('.volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Message Creation Options')
        await expect.soft(this.page.locator('.volante-radio .volante-radio-option .p-radiobutton-box >> nth=-1')).toBeEnabled()
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=0')).toHaveText('Create empty message')
        await expect.soft(this.page.locator('.volante-radio .p-field-radiobutton label >> nth=-1')).toHaveText('Create based on selected message')
        await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span[contains(@class,'p-treenode-label')])[2]").click()
        await expect(this.page.locator('.new-ext-msg-content .input-label-at-top label >> nth=1')).toHaveText('Name')
        const inputGroupValue = await this.page.locator('.new-ext-msg-content .input-label-at-top input >> nth=1').getAttribute('value')
        await expect(inputGroupValue).toContain(inputGroupName)
        await expect(this.page.locator('.new-ext-msg-content .input-label-at-top label >> nth=2')).toHaveText('Version')
        const versionValue = await this.page.locator('.new-ext-msg-content .input-label-at-top input >> nth=2').getAttribute('value')
        await expect(versionValue).toContain(versionInfo)
        await expect(this.page.locator('.new-ext-msg-content .input-label-at-top label >> nth=3')).toHaveText('DetailedName')
        const detailedNameValue = await this.page.locator('.new-ext-msg-content .input-label-at-top input >> nth=3').getAttribute('value')
        await expect(detailedNameValue).toContain(detailedName)
        await expect(this.page.locator('.new-ext-msg-content .input-label-at-top label >> nth=4')).toHaveText('Category')
        const categoryTypeValue = await this.page.locator('.new-ext-msg-content .input-label-at-top input >> nth=4').getAttribute('value')
        await expect(categoryTypeValue).toContain(categoryType)
        await expect(this.page.locator('.new-ext-msg-content  .dialog-col label >> nth=-1')).toHaveText('Description')
        await expect(this.page.locator('.new-ext-msg-content  .dialog-col .text-area-group >> nth=-1')).toHaveText(descriptionDetails)
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=0')).toHaveText('Help')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=-1')).toHaveText('Cancel')
        await expect.soft(this.page.locator('.volante-wizard-options .main')).toHaveText('OK')
        await this.page.locator('.volante-wizard-options .main').click()

    }
    async deleteAllFields()
    {
        await this.page.locator(".ReactVirtualized__Table__row div[aria-colindex='1'] .volante-gutter-cell >> nth=0").click()
        await this.page.keyboard.press('Control+KeyA',{delay:100});
        await this.page.locator('.volante-remove-icon').click()
        await this.page.locator('.dialogBlock .dialogControl .main').click()
    }
    async verifyFormatDetails(externalFormat,nameFormat,versionFormat,nameStandardDetails,versionStandardDetails,detailedNameStandardDetails,standardGroupStandardDetails)
    {
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=0')).toHaveText('Format Details')
        const formatDetailsInput1 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=0')
        await expect.soft(formatDetailsInput1.locator('.volante-label')).toHaveText('External Format')
        const externalFormatValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=0').getAttribute('value')
        await expect.soft(externalFormatValue).toContain(externalFormat)
        const formatDetailsInput2 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=1')
        await expect.soft(formatDetailsInput2.locator('.volante-label')).toHaveText('Name')
        const nameFormatValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=1').getAttribute('value')
        await expect.soft(nameFormatValue).toContain(nameFormat)
        const formatVersion = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=2')
        await expect.soft(formatVersion.locator('.volante-label')).toHaveText('Version')
        const versionFormatValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=2').getAttribute('value')
        await expect.soft(versionFormatValue).toContain(versionFormat)
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=1')).toHaveText('Standard Details')
        const formatDetailsInput4 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=3')
        await expect.soft(formatDetailsInput4.locator('.volante-label')).toHaveText('Name')
        const nameStandardDetailsValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=3').getAttribute('value')
        await expect.soft(nameStandardDetailsValue).toContain(nameStandardDetails)
        const formatDetailsInput5 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=4')
        await expect.soft(formatDetailsInput5.locator('.volante-label')).toHaveText('Version')
        const versionStandardDetailsValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=4').getAttribute('value')
        await expect.soft(versionStandardDetailsValue).toContain(versionStandardDetails)
        const formatDetailsInput6 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=5')
        await expect.soft(formatDetailsInput6.locator('.volante-label')).toHaveText('Detailed Name')
        const detailedNameStandardDetailsValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=5').getAttribute('value')
        await expect.soft(detailedNameStandardDetailsValue).toContain(detailedNameStandardDetails)
        const formatDetailsInput7 = await this.page.locator('.external-message .volante-fieldset .input-group >> nth=6')
        await expect.soft(formatDetailsInput7.locator('.volante-label')).toHaveText('Standard Group')
        const standardGroupStandardDetailsValue = await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=5').getAttribute('value')
        await expect.soft(standardGroupStandardDetailsValue).toContain(standardGroupStandardDetails)
        await expect.soft(this.page.locator('.external-message .volante-fieldset .p-fieldset-legend-text >> nth=-1')).toHaveText('Description')
        //const descriptionTextAreaValue = await this.page.locator('.external-message .p-fieldset-content textarea').textContent()
       // await expect.soft(descriptionTextAreaValue).toContain(descriptionTextArea)
    }
    async X9ICLMessageFormatWindow()
    {
        await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span[contains(@class,'p-treenode-label')])[2]").click()
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=0')).toHaveText('Help')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=-1')).toHaveText('Cancel')
        await expect.soft(this.page.locator('.volante-wizard-options .main')).toHaveText('OK')
        await this.page.locator('.volante-wizard-options .main').click()
    }
    async UAEFTSMessageFormatWindow()
    {
        await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'pi-caret-right')])[1]").click()
        await this.page.locator("(//ul[contains(@class,'p-tree')]//span[contains(@class,'p-treenode-label')]/span[contains(@class,'p-treenode-label')])[2]").click()
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=0')).toHaveText('Help')
        await expect.soft(this.page.locator('.volante-wizard-options .secondary >> nth=-1')).toHaveText('Cancel')
        await expect.soft(this.page.locator('.volante-wizard-options .main')).toHaveText('OK')
        await this.page.locator('.volante-wizard-options .main').click()
    }
    async deleteDelimitersFormatOptions()
    {
        await this.page.locator('.volante-format-options-icon >> nth=-1').click()
        await this.page.locator("//span[text()='Delimiter']").click()
        await this.page.locator('.volante-fieldset .volante-table div[aria-colindex="1"] >> nth=0').click()
        await this.page.keyboard.press('Control+KeyA',{delay:100});
        await this.page.locator('.volante-remove-icon >> nth=-1').click()
        await this.page.locator('.dialogControl .main').click()
    }
    async verifyITCHOUCHToolbar()
{
    await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
    //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
    const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
    const toolOptionsCount = await toolOptions.count()

    const toolsTitle = ["Add New Field", "Add Filler", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
        "Move Selection Down Ctrl+Shift+Down", "Properties", "Format Options"]
        await console.log("count1: " + toolOptionsCount)
    for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

        let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
        console.log("toolActions: " + title)
        // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
        await console.log(toolsTitle[j])
        await expect.soft(title).toContain((toolsTitle[j]))
        await console.log("Succeeded")
        switch (title) {
            case 'Remove Selected Field(s)':
                {
                    let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                    await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                    await console.log('Checked')
                    break;
                }
            case 'Move Selection Up Ctrl+Shift+Up':
                {
                    let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                    await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                    await console.log('Checked')
                    break;
                }
            case 'Move Selection Down Ctrl+Shift+Down':
                {
                    let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                    await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                    await console.log('Checked')
                    break;
                }
            case 'Move Selection Left Ctrl+Shift+Left':
                {
                    let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                    await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                    await console.log('Checked')
                    break;
                }
            case 'Move Selection Right Ctrl+Shift+Right':
                {
                    let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                    await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                    await console.log('Checked')
                    break;
                }
            default:
                {
                    break;

                }
        }
    }
    const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
    await expect(toolBarActionMenu).toContain("Platform Properties")
    }

    async verifyBBOToolbar()
    {
        await expect(this.page.locator('//div[text()="Field Name"]')).toBeVisible()
        //const toolOptionsCount = await this.page.$$('.universal-message-format .volante-toolbar span')
        const toolOptions = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')]")
        const toolOptionsCount = await toolOptions.count()

        const toolsTitle = ["Add New Field", "Add Sequence", "Remove Selected Field(s)", "Move Selection Up Ctrl+Shift+Up",
            "Move Selection Down Ctrl+Shift+Down", "Move Selection Left Ctrl+Shift+Left", "Move Selection Right Ctrl+Shift+Right",
            "Properties", "Format Options"]
            await console.log("count1: " + toolOptionsCount)
        for (let i = 1, j = 0; i <= toolOptionsCount, j < toolsTitle.length; i++, j++) {

            let title = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('title')
            console.log("toolActions: " + title)
            // let title=await this.page.locator("(//div[contains(@class,'volante-toolbar')])[2]/span["+i+"]").getAttribute('title')
            await console.log(toolsTitle[j])
            await expect.soft(title).toContain((toolsTitle[j]))
            await console.log("Succeeded")
            switch (title) {
                case 'Remove Selected Field(s)':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Up Ctrl+Shift+Up':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Down Ctrl+Shift+Down':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Left Ctrl+Shift+Left':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                case 'Move Selection Right Ctrl+Shift+Right':
                    {
                        let classAttribute = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/span[contains(@class,'toolbar-action')][" + i + "]").getAttribute('class')
                        await expect.soft(classAttribute.split(" ")).toContain('theia-mod-disabled')
                        await console.log('Checked')
                        break;
                    }
                default:
                    {
                        break;

                    }
            }
        }
        const toolBarActionMenu = await this.page.locator("(//div[contains(@class,'volante-toolbar')])[3]/div[contains(@class,'volante-toolbar-action-menu')]/span").getAttribute('title')
        await expect(toolBarActionMenu).toContain("Platform Properties")
    }
    async collapsePropertiesSpeedBar()
    {
        await this.page.locator('.volante-speedbar #status-bar-volante-properties-widget').click()
    }
}