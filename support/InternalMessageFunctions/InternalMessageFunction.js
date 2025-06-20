const { expect } = require('@playwright/test');
exports.InternalMessageFunction = class InternalMessageFunction{
    constructor(page)
    {
        this.page=page;
    }

   async verifyInternalMessageDialog(cartName)
    { 
      //await expect(this.page.locator("(//div[text()='"+cartName+"'])")).toBeVisible({timeout:50000})     
      await expect(this.page.locator("[aria-label= grid] >> text='"+cartName+"'")).toBeVisible({timeout:50000})
      await this.page.locator("[aria-label= grid] >> text='"+cartName+"'").click({
        button: 'right'
      });
      await this.page.locator('text=Add Item').click();
      await this.page.locator('text=New Internal Message').click();
      await expect(this.page.locator('.dialogTitle')).toHaveText('New Internal Message');
      await expect(this.page.locator('.volante-input-dialog .volante-label')).toHaveText('Enter Internal Message Name');
      //await expect(this.page.locator('.volante-input-dialog-component .volante-label')).toHaveText('Enter Internal Message Name');
      await expect(this.page.locator('input[name="Enter Internal Message Name"]')).toBeEnabled(true);
      await expect(this.page.locator('button:has-text("OK")')).toBeEnabled(true);
      await expect(this.page.locator('button:has-text("Cancel")')).toBeEnabled(true);
      await this.page.locator('button:has-text("Cancel")').click()
      
    }

    async createInternalMessage(cartName,messageName)
    {  
      //await expect(this.page.locator("(//div[text()='"+cartName+"'])")).toBeVisible({timeout:50000})  
      await expect(this.page.locator("[aria-label= grid] >> text='"+cartName+"'")).toBeVisible({timeout:50000}) 
      await this.page.locator("[aria-label= grid] >> text='"+cartName+"'").click({
        button: 'right'
      });
      await this.page.locator('text=Add Item').click();
      await this.page.locator('text=New Internal Message').click();
      await this.page.locator('input[name="Enter Internal Message Name"]').fill(messageName);
      await this.page.locator('text=OK').click();
    }

    async selectInternalMessageUsingName(messageName)
    {
      await this.page.locator("//div[text() ='"+messageName+"']").click()
    }

    async selectInternalFormatUsingName()
    {   
      await this.page.locator('text = Internal Format').click();
    }

    async verifyInternalMessage(messageNameLabel,messageValue)
    {
        await expect(this.page.locator('.internal-message-details .p-fieldset-legend span >>nth=1')).toHaveText('Internal Message Details')
        await expect(this.page.locator('.internal-message-details .volante-label').first()).toHaveText('Name')
        await expect(this.page.locator('.internal-message-details .input-group input').first()).toHaveValue(messageNameLabel)
        await this.page.locator('.internal-message-details .input-group input').first().fill(messageValue)
        await expect(this.page.locator('.internal-message-details .input-group input').first()).toHaveValue(messageValue)
        await expect(this.page.locator('.internal-message-details .volante-fieldset .volante-label >> nth=1')).toHaveText('Version')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=1')).toHaveValue('1.0')
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=1').click()
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=1').fill('2.0')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=1')).toHaveValue('2.0')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .volante-hyper-link-label')).toHaveText('Base Message')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .volante-hyper-link-value')).toHaveText('none')
        await expect(this.page.locator('.internal-message-details .p-fieldset-legend span >>nth=3')).toHaveText('Standard Details')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .volante-label >> nth=2')).toHaveText('Name')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=2')).toHaveValue('')
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=2').click()
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=2').fill(messageValue)
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=2')).toHaveValue(messageValue)
        await expect(this.page.locator('.internal-message-details .volante-fieldset .volante-label >> nth=3')).toHaveText('Version')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=3')).toHaveValue('')
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=3').click()
        await this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=3').fill('2.0')
        await expect(this.page.locator('.internal-message-details .volante-fieldset .input-group input >> nth=3')).toHaveValue('2.0')
        await expect(this.page.locator('.internal-message-details .volante-label >> nth=-1')).toHaveText('Detailed Name')
        await expect(this.page.locator('.internal-message-details .input-group input >> nth=-1')).toHaveValue('')
        await this.page.locator('.internal-message-details .input-group input >> nth=-1').click()
        await this.page.locator('.internal-message-details .input-group input >> nth=-1').fill(messageValue)
        await expect(this.page.locator('.internal-message-details .input-group input >> nth=-1')).toHaveValue(messageValue)
        await expect(this.page.locator('.internal-message-details .p-fieldset-legend span >>nth=-1')).toHaveText('Description')
        const placeHolder= await this.page.locator('.internal-message-details .p-fieldset-content textarea').getAttribute('placeholder')
        await expect(placeHolder.toString()).toContain('Enter Description.')
        await this.page.locator('.internal-message-details .p-fieldset-content textarea').fill('Test Description')
        await this.page.locator('.internal-message-details .p-fieldset-content textarea').click()
        await expect(this.page.locator('.internal-message-details .p-fieldset-content textarea')).toHaveText('Test Description')
        
    }

    async verifyToolbarOptions()
    {   
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(1)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(2)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(3)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(4)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(6)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(7)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(9)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(10)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(11)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(12)')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(14)')).toBeVisible();
      await expect(this.page.locator('.volante-toolbar-action-menu > .toolbar-action')).toBeVisible();
      await expect(this.page.locator('button:has-text("p-btn")')).toBeVisible();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(16)')).toBeVisible();

      //To check if the toolbar options are enabled or disabled
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(1)')).toBeEnabled();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(2)')).toBeEnabled();
      let removeField=await this.page.getByTitle('Remove Selected Field(s)').getAttribute('class');
      await expect(removeField).toContain('theia-mod-disabled')
      //await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(4)')).toHaveClass('theia-mod-disabled');      
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(6)')).toBeEnabled();
      let moveUp=await this.page.getByTitle('Move Selection Up Ctrl+Shift+Up').getAttribute('class')
      await expect(moveUp).toContain('theia-mod-disabled');
      let moveDown=await this.page.getByTitle('Move Selection Down Ctrl+Shift+Down').getAttribute('class')
      await expect(moveDown).toContain('theia-mod-disabled');
      let moveLeft=await this.page.getByTitle('Move Selection Left Ctrl+Shift+Left').getAttribute('class')
      await expect(moveLeft).toContain('theia-mod-disabled');
      let moveRight=await this.page.getByTitle('Move Selection Right Ctrl+Shift+Right').getAttribute('class')
      await expect(moveRight).toContain('theia-mod-disabled');
      let importField=await this.page.getByTitle('Import Field Structure').getAttribute('class')
      await expect(importField).toContain('theia-mod-disabled');
     // await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(7)')).toHaveClass('theia-mod-disabled');
      //await expect(page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(9)')).toHaveClass('theia-mod-disabled');
      //await expect(page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(10)')).toHaveClass('theia-mod-disabled');
      //await expect(page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(11)')).toHaveClass('theia-mod-disabled');
      //await expect(page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(12)')).toHaveClass('theia-mod-disabled');
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(14)')).toBeEnabled();
      await expect(this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(16)')).toBeEnabled();
      await expect(this.page.locator('.volante-toolbar-action-menu > .toolbar-action')).toBeEnabled(true);
      await expect(this.page.locator('button:has-text("p-btn")')).toBeEnabled(true);
    }
    
    async verifyLabelOfHeaderRowTable()
    {
      await this.page.getByText('Enterprise Element').isVisible()
      await this.page.getByText('Type').isVisible()
      await this.page.getByText('Description').nth(1).isVisible()
      await this.page.getByText('Enterprise Element').click({
        button: 'right'
      });    
      await this.page.locator('li:has-text("Alias") div >> nth=3').click();
      await this.page.getByText('Enterprise Element').click({
        button: 'right'
      });  
      await this.page.locator('li:has-text("Detailed Name") div >> nth=3').click();
      await this.page.getByText('Enterprise Element').click({
        button: 'right'
      });   
      await this.page.locator('li:has-text("Hidden") div >> nth=3').click();
      await this.page.getByText('Alias').isVisible()
      await this.page.getByText('Detailed Name').isVisible()
      await this.page.getByText('Hidden').isVisible()
    }  

    async addNewField(modifiedFieldName)
    {   
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span').first().click();
      await this.page.getByText('New Field').isVisible({timeout:10000})
      await this.page.getByRole('textbox').fill('');
      await this.page.getByRole('textbox').fill(modifiedFieldName);
      await this.page.keyboard.press('Enter');
    }

    async expandAllSections()
    {   
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(1) >> nth=0').click({
        button: 'right'
      });    
      await this.page.locator('li:has-text("Expand") div >> nth=3').click()
      await this.page.locator('li:has-text("All Section")').click()
    }

    async addNewSection(fieldorsectionName,modifiedSectionName)
    {   
      await this.page.getByText(fieldorsectionName).click()
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(2) ').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})
      await this.page.getByRole('textbox').fill('');
      await this.page.getByRole('textbox').fill(modifiedSectionName);
      await this.page.keyboard.press('Enter');
    }

    async selectField(fieldName)
    {  
      await this.page.getByText(fieldName).click()
    }

    async moveUp()
    {  
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(9)').click();
    }

    async moveDown()
    {  
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(10)').click();
    }

    async moveLeft()
    {  
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(11)').click();
    }

    async moveRight()
    { 
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(12)').click();
    }

    async deleteField(fieldName)
    {  
      await this.page.getByText(fieldName).click()
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(4) ').click()
      await this.page.locator("#volante-confirm-props-cancel-dialog > div > div.dialogControl > button:nth-child(2)").click()
    }

    async addAlias(aliasName,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(3) >> nth='+index+'').dblclick();
      await this.page.getByRole('textbox').fill(aliasName);
      await this.page.keyboard.press('Enter');
    }

    async enableHidden(index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(5) >> nth='+index+'').click();
    }

    async addDetailedName(detailedName,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(7) >> nth='+index+'').dblclick();
      await this.page.getByRole('textbox').fill(detailedName);
      await this.page.keyboard.press('Enter');
    }

    async addDescription(description,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(6) >> nth='+index+'').dblclick();
      await this.page.getByRole('textbox').fill(description);
      await this.page.keyboard.press('Enter');
    }

    async changeDataType(dataType, index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(4) >> nth='+index+'').dblclick();
      //await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(3)').getByText(index).dblclick();
      await this.page.locator('.volante-table-cell >> .volante__dropdown-indicator').click();
      await this.page.locator('.volante__menu-list .volante__option').getByText(dataType).nth(0).click();
    }

    async changeFieldName(currentFieldName,modifiedFieldName)
    {  
      await this.page.getByText(currentFieldName).dblclick()
      await this.page.getByRole('textbox').fill('');
      await this.page.getByRole('textbox').fill(modifiedFieldName);
      await this.page.keyboard.press('Enter');
    }

    async enableProperties()
    {  
      await this.page.locator('span:nth-child(10) >> nth=0').click()
      await this.page.getByLabel('Properties').isVisible();
    }

    async verifyFieldProperties(defaultValue,maxLength)
    {  
      await this.page.getByLabel('Properties').isVisible();
      await this.page.getByLabel('Not Null').isVisible();
      await this.page.getByRole('checkbox').nth(1).isChecked();
      await this.page.getByRole('checkbox').nth(1).click();      
      await this.page.getByRole('checkbox').nth(1).isChecked(false);
      await this.page.getByLabel('Default Value').isVisible();
      //await this.page.getByRole('textbox').fill(defaultValue);
      await this.page.locator('input[name="Default Value"]').fill(defaultValue);      
      await expect(this.page.locator('input[name="Default Value"]')).toHaveValue(defaultValue);
      await this.page.getByLabel('Max Length').isVisible();
     //await this.page.getByRole('textbox').fill(maxLength);      
      await this.page.locator('input[name="Max Length"]').fill(maxLength);
      await expect(this.page.locator('input[name="Max Length"]')).toHaveValue(maxLength);
      
      //await expect(page.locator('button:has-text("Facets")')).click()
      //await expect(page.locator('button:has-text("Cancel")')).click()
      
      //await page.getByRole('button').locator('div:has-text("Facets")').click();
      //await page.getByRole('button').locator('div:has-text("Cancel")').click()

    } 

    async verifyFieldPropertiesBoolean(defaultValue)
    {  
      await this.page.getByLabel('Properties').isVisible();
      await this.page.getByLabel('Not Null').isVisible();
      await this.page.getByRole('checkbox').nth(1).isChecked();
      await this.page.getByRole('checkbox').nth(1).click();      
      await this.page.getByRole('checkbox').nth(1).isChecked(false);
      await this.page.getByLabel('Default Value').isVisible();
      await this.page.getByRole('textbox').fill(defaultValue);
    }

    async verifySectionProperties()
    {  
      await this.page.getByLabel('Min Occurs').isVisible();
     // await this.page.locator('.volante__input-container').first();
     // await expect(this.page.locator('.volante__input-container')).toHaveText('0');
      await this.page.getByLabel('Max Occurs').isVisible();
      //await expect(this.page.locator('div:nth-child(2) > .volante-select > .volante__control > .volante__value-container > .volante__input-container')).toHaveText('Unbounded')
    
      await this.page.locator('#widget-container div:has-text("Min Occurs") svg').click();
      await this.page.locator('#react-select-3-option-1').getByText('1').click();
      await this.page.locator('#widget-container div:has-text("Max Occurs") svg').click();
      await this.page.locator('#react-select-4-option-0').getByText('1').click();
      //await page.locator('.volante__input-container').first().toHaveText('1');
      //await page.locator('div:nth-child(2) > .volante-select > .volante__control > .volante__value-container > .volante__input-container').toHaveText('1');
    }

    async multiSelect(fieldName)
    {  
      await this.page.keyboard.down('Shift');
      await this.page.getByText(fieldName).click()
      //await this.page.pause()
    }
    
    async selectPlatformProperties(fieldNameorSectionName)
    {  
      await this.page.getByText(fieldNameorSectionName).click()
      await this.page.locator('.volante-toolbar-action-menu > .toolbar-action').click()
    }
    
    async clickCancel()
    {  
            await this.page.getByRole('button', { name: 'Cancel' }).click();
    }
    
    async clickOk()
    {  
            await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async verifyFieldPlatformPropertiesDialog(columnName,modifiedColumnName,length,modifiedLength,sqlType,modifiedSqlType,fTable,fColumn,modifiedXmlType)
    {
      await this.page.getByText('Platform Attributes ('+columnName+')').isVisible()
      await this.page.getByRole('tab', { name: 'Database' }).isVisible()
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Column Name")').nth(2).isVisible();
      await expect(this.page.locator('input[name="Column Name"]')).toHaveValue(columnName)
      await this.page.locator('input[name="Column Name"]').fill(modifiedColumnName)                  
      await this.page.getByLabel('SQL Type').isVisible()
      await this.page.getByText(sqlType).nth(1).isVisible()
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('svg').click();
      await this.page.locator('.searchable-input ').fill(modifiedSqlType);
      await this.page.keyboard.press('Enter');
      //await this.page.locator('#react-select-3-option-1').getByText(modifiedSqlType).click();
      await this.page.getByText(modifiedSqlType).nth(1).isVisible()
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Length")').nth(2).isVisible();
      await expect(this.page.locator('input[name="Length"]')).toHaveValue(length);
      await this.page.locator('input[name="Length"]').fill(modifiedLength);
      await expect(this.page.locator('input[name="Length"]')).toHaveValue(modifiedLength);
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Not Null")').nth(1).isVisible();
      await this.page.locator('input[name="Not Null"]').isChecked();
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Primary Key")').nth(1).isVisible();
      await this.page.locator('input[name="Primary Key"]').isChecked(false);
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Auto Generate")').nth(1).isVisible();
      //await expect(this.page.locator('input[name="Auto Generate"]')).toBeEnabled(false);
      await this.page.locator('input[name="Auto Generate"]').isChecked(false);
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Foreign Key")').nth(1).isVisible();
      await this.page.locator('input[name="Foreign Key"]').isChecked(false);

      await this.page.locator('input[name="Not Null"]').uncheck();
      await this.page.locator('input[name="Not Null"]').isChecked(false);

      await this.page.locator('input[name="Primary Key"]').check();
      await this.page.locator('input[name="Primary Key"]').isChecked();
      //await expect(this.page.locator('input[name="Auto Generate"]')).toBeEnabled();
      await this.page.locator('input[name="Auto Generate"]').isChecked(false);      
      await this.page.locator('input[name="Auto Generate"]').check();
      await this.page.locator('input[name="Not Null"]').isChecked();
      //await expect(this.page.locator('input[name="Not Null"]')).toBeEnabled(false);

      await this.page.locator('input[name="Foreign Key"]').check();
      await this.page.getByText('Foreign Key Table').isVisible();
      await this.page.getByText('Foreign Key Column').isVisible();
      await expect(this.page.locator('input[name="Foreign Key Table"]')).toHaveValue("");
      await expect(this.page.locator('input[name="Foreign Key Column"]')).toHaveValue("");
      await this.page.locator('input[name="Foreign Key Table"]').fill(fTable);
      await this.page.locator('input[name="Foreign Key Column"]').fill(fColumn);
      await expect(this.page.locator('input[name="Foreign Key Table"]')).toHaveValue(fTable);
      await expect(this.page.locator('input[name="Foreign Key Column"]')).toHaveValue(fColumn);
      

      //XML tab

      await this.page.getByRole('tab', { name: 'XML' }).isVisible();
      await this.page.getByRole('tab', { name: 'XML' }).click();
      await this.page.getByRole('tabpanel', { name: 'XML' }).locator('div:has-text("XML Name")').nth(2).isVisible();
      await this.page.getByText('Node Typeelement').isVisible();
      await this.page.getByText('XML Name').isVisible();
      await this.page.locator('input[name="XML Name"]').isVisible();
      await this.page.locator('input[name="XML Name"]').fill(modifiedColumnName)
      await expect(this.page.locator('input[name="XML Name"]')).toHaveValue(modifiedColumnName)

      await this.page.getByText('Node Type').isVisible();
      await this.page.getByRole('tabpanel', { name: 'XML' }).getByText("element").isVisible();
      await this.page.getByRole('tabpanel', { name: 'XML' }).locator('svg').click();      
      await this.page.locator('.searchable-input ').fill(modifiedXmlType);
      await this.page.keyboard.press('Enter');
      //await this.page.locator('#react-select-4-option-1').getByText(modifiedXmlType).click();
      await this.page.getByText(modifiedXmlType).nth(3).isVisible();

      //MongoDB tab
      await this.page.getByRole('tab', { name: 'MongoDB' }).isVisible();
      await this.page.getByRole('tab', { name: 'MongoDB' }).click();
      await this.page.getByRole('tabpanel', { name: 'MongoDB' }).locator('div:has-text("mongodbtype")').nth(2).isVisible()
      await this.page.getByText('mongodbtype').isVisible();
      await expect(this.page.locator('input[name="mongodbtype"]')).toHaveValue("String");
      await this.page.getByText('mongodbprimarykey').isVisible();
      await expect(this.page.locator('input[name="mongodbprimarykey"]')).toHaveValue("false");

      //ProtoBuf tab
      await this.page.getByRole('tab', { name: 'ProtoBuf' }).isVisible();
      await this.page.getByRole('tab', { name: 'ProtoBuf' }).click();
      await this.page.getByRole('tabpanel', { name: 'ProtoBuf' }).locator('div:has-text("protbuftype")').nth(2).isVisible();
      await this.page.getByText('protbuftype').isVisible();
      await expect(this.page.locator('input[name="protbuftype"]')).toHaveValue("STRING");
      await this.page.getByRole('tabpanel', { name: 'ProtoBuf' }).locator('div:has-text("probufname")').nth(2).isVisible();
      await this.page.getByText('probufname').isVisible();
      await expect(this.page.locator('input[name="probufname"]')).toHaveValue(columnName);

      //Attributes tab
      await this.page.getByRole('tab', { name: 'Attributes' }).isVisible();
      await this.page.getByRole('tab', { name: 'Attributes' }).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().isVisible();   
      await expect(this.page.locator('.volante-toolbar .volante-add-attribute-icon')).toHaveAttribute('title', 'Add New Field');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).isVisible();
      //await expect(this.page.locator('.volante-toolbar volante-remove-icon >> nth=1')).toHaveAttribute('title', 'Remove Selected Field(s)');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).isVisible();
      //await expect(this.page.locator('.volante-toolbar .volante-move-up-icon >> nth=2')).toHaveAttribute('title', 'Move Selection Up');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).isVisible(); 
      //await expect(this.page.locator('.volante-toolbar .volante-down-icon >> nth=3')).toHaveAttribute('title', 'Move Selection Down');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().click();
      await this.page.getByText('Property Name').isVisible();
      await this.page.getByText('Value').isVisible();
      await this.page.getByText('Property1').isVisible();
      //await this.page.getByText('Property1').dblclick();
      //await this.page.getByText('Property1').fill("p1");
      //await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('input').fill("p1");
      await this.page.keyboard.press('Enter');
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick().fill("v1");
      //await this.page.keyboard.press('Enter');
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').fill("v1");
      //await page.getByText('p1').click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().click();
      await this.page.getByText('Property2').click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'OK' }).isVisible();
      await this.page.getByRole('button', { name: 'Cancel' }).isVisible();
      await this.page.getByRole('button', { name: 'Help' }).isVisible();

      //await this.page.pause()
        
    }

    async verifySectionPlatformPropertiesDialog(tableName,modifiedTableName,modifiedSchemaName,modifiedXmlType)
    {
      await this.page.getByText('Platform Attributes ('+tableName+')').isVisible()
      await this.page.getByRole('tab', { name: 'Database' }).isVisible()
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Table Name")').nth(2).isVisible();
      await expect(this.page.locator('input[name="Table Name"]')).toHaveValue(tableName)
      await this.page.locator('input[name="Table Name"]').fill(modifiedTableName)  
      
      await this.page.getByRole('tabpanel', { name: 'Database' }).locator('div:has-text("Schema")').nth(1).isVisible();
      await expect(this.page.locator('input[name="Schema"]')).toHaveValue("")
      await this.page.locator('input[name="Schema"]').fill(modifiedSchemaName)  
      

      //XML tab

      await this.page.getByRole('tab', { name: 'XML' }).isVisible();
      await this.page.getByRole('tab', { name: 'XML' }).click();
      await this.page.getByRole('tabpanel', { name: 'XML' }).locator('div:has-text("XML Name")').nth(2).isVisible();
      await this.page.getByText('Node Typeelement').isVisible();
      await this.page.getByText('XML Name').isVisible();
      await this.page.locator('input[name="XML Name"]').isVisible();
      await this.page.locator('input[name="XML Name"]').fill(modifiedColumnName)
      await expect(this.page.locator('input[name="XML Name"]')).toHaveValue(modifiedColumnName)

      await this.page.getByText('Node Type').isVisible();
      await this.page.getByRole('tabpanel', { name: 'XML' }).getByText("element").isVisible();
      await this.page.getByRole('tabpanel', { name: 'XML' }).locator('svg').click();     
      await this.page.locator('.searchable-input ').fill("element");
      await this.page.keyboard.press('Enter');
      //await this.page.locator('#react-select-4-option-1').getByText("element").click();

      //MongoDB tab
      await this.page.getByRole('tab', { name: 'MongoDB' }).isVisible();
      await this.page.getByRole('tab', { name: 'MongoDB' }).click();
      await this.page.getByRole('tabpanel', { name: 'MongoDB' }).locator('div:has-text("mongodbtype")').nth(2).isVisible()
      await this.page.getByText('mongodbtype').isVisible();
      await expect(this.page.locator('input[name="mongodbtype"]')).toHaveValue("String");
      await this.page.getByText('mongodbprimarykey').isVisible();
      await expect(this.page.locator('input[name="mongodbprimarykey"]')).toHaveValue("false");

      //ProtoBuf tab
      await this.page.getByRole('tab', { name: 'ProtoBuf' }).isVisible();
      await this.page.getByRole('tab', { name: 'ProtoBuf' }).click();
      await this.page.getByRole('tabpanel', { name: 'ProtoBuf' }).locator('div:has-text("protbuftype")').nth(2).isVisible();
      await this.page.getByText('protbuftype').isVisible();
      await expect(this.page.locator('input[name="protbuftype"]')).toHaveValue("STRING");
      await this.page.getByRole('tabpanel', { name: 'ProtoBuf' }).locator('div:has-text("probufname")').nth(2).isVisible();
      await this.page.getByText('probufname').isVisible();
      await expect(this.page.locator('input[name="probufname"]')).toHaveValue(columnName);

      //Attributes tab
      await this.page.getByRole('tab', { name: 'Attributes' }).isVisible();
      await this.page.getByRole('tab', { name: 'Attributes' }).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().isVisible();   
      await expect(this.page.locator('.volante-toolbar .volante-add-attribute-icon')).toHaveAttribute('title', 'Add New Field');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).isVisible();
      //await expect(this.page.locator('.volante-toolbar .volante-remove-icon >> nth=2')).toHaveAttribute('title', 'Remove Selected Field(s)');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).isVisible();
      //await expect(this.page.locator('.volante-toolbar .volante-move-up-icon >> nth=3')).toHaveAttribute('title', 'Move Selection Up');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).isVisible(); 
      //await expect(this.page.locator('.volante-toolbar .volante-down-icon >> nth=4')).toHaveAttribute('title', 'Move Selection Down');
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().click();
      await this.page.getByText('Property Name').isVisible();
      await this.page.getByText('Value').isVisible();
      await this.page.getByText('Property1').isVisible();
      //await this.page.getByText('Property1').dblclick();
      //await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('input').fill("p1");
      await this.page.keyboard.press('Enter');
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').fill("v1");
      //await page.getByText('p1').click();
      await page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().click();
      await page.getByText('Property2').click();
      await page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).click();
      await page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).click();
      await page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'OK' }).isVisible();
      await this.page.getByRole('button', { name: 'Cancel' }).isVisible();
      await this.page.getByRole('button', { name: 'Help' }).isVisible();
      //await this.page.pause()
        
    }

    async verifyPlatformFormatPropertiesDialog(targetNamespace,messageName)
    {
      await this.page.locator('button:has-text("p-btn")').click()
      await this.page.getByRole('menuitem', { name: 'Platform Format Properties' }).click();
      await this.page.getByRole('menuitem', { name: 'Platform Format Properties' }).isVisible();
      await this.page.getByText('Namespace').nth(1).isVisible();
      await this.page.getByText('Target Namespace').isVisible();
      await expect(this.page.locator('input[name="Target Namespace"]')).toHaveValue("");
      await this.page.locator('input[name="Target Namespace"]').fill(targetNamespace)
      await this.page.getByText('Root Element').click();
      await this.page.getByText('Tag').click();
      await this.page.getByText(messageName).isVisible();
      await this.page.getByRole('button', { name: '...' }).click();
      await this.page.locator('#volante-platform-attributes-response-dialog i').click();
      await this.page.getByRole('button', { name: 'OK' }).click();      
    }

    async verifyNamespacePrefixesDialog()
    {
      await this.page.locator('button:has-text("p-btn")').click()
      await this.page.getByRole('menuitem', { name: 'Namespace Prefixes' }).click()
      await this.page.getByText('Prefix Mapping').isVisible();
      await this.page.locator('#volante-namespace-prefixes-toolbar').isVisible();  
      //move icons disabled to be done    
      await this.page.getByRole('columnheader', { name: 'Namespace' }).getByText('Namespace').isVisible();
      await this.page.getByRole('columnheader', { name: 'Prefix' }).getByText('Prefix').isVisible();
      await this.page.getByText('http://www.w3.org/2005/xpath-functions').isVisible();
      await this.page.getByText('http://www.w3.org/2001/XMLSchema').isVisible();
      await this.page.getByText('java:com.tplus.transform.runtime.swift.SwiftXPathFunctions').isVisible();
      await this.page.getByText('fn').isVisible();
      await this.page.getByText('xs').isVisible();
      await this.page.getByRole('gridcell', { name: 'swift' }).getByText('swift').isVisible();
      await this.page.locator('div[role="grid"]:has-text("NamespacePrefixhttp://www.w3.org/2005/xpath-functionsfnhttp://www.w3.org/2001/XM")').getByRole('rowgroup', { name: 'grid' }).isVisible();
      await this.page.locator('#volante-namespace-prefixes-toolbar span').first().click();
      await this.page.locator('#volante-namespace-prefixes-toolbar span').nth(1).click();
      await this.page.locator('#volante-namespace-prefixes-info-dialog').getByRole('button', { name: 'OK' }).click();
      await this.page.getByText('http://www.w3.org/2005/xpath-functions').click();
      await this.page.locator('#volante-namespace-prefixes-toolbar span').nth(3).click();
      await this.page.locator('#volante-namespace-prefixes-toolbar span').nth(2).click();
      await this.page.getByRole('button', { name: 'OK' }).click();
  
    }
}