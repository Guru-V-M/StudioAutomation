const { expect } = require('@playwright/test');
exports.XMLMessageFunction = class XMLMessageFunction{
    constructor(page)
    {
        this.page=page;
    }

    async createXMLSynthesizeDTDMessage(cartName,messageName,rootName,nodeName)
    {           
      await this.page.waitForTimeout(4000); 
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.locator('div:nth-child(5) > .input-group > .p-field-radiobutton > .p-radiobutton > .p-radiobutton-box').click();  
      await this.page.getByRole('button', { name: 'Next >' }).first().click();      
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.locator('input[name="Root Element Name"]').fill(rootName);              
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();            
      await this.page.getByRole('button', { name: 'Finish' }).click(); 
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 20000})
    }

    async createXMLSynthesizeDTDBatchedMessage(cartName,messageName,nodeName,rootName,recName)
    {  
         
      await this.page.waitForTimeout(4000); 
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.locator('div:nth-child(5) > .input-group > .p-field-radiobutton > .p-radiobutton > .p-radiobutton-box').click(); 
      await this.page.getByRole('button', { name: 'Next >' }).first().click();
      await this.page.getByRole('region', { name: ' Batch/Message Mode' }).getByRole('radio').nth(1).click();      
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.locator('input[name="Root Element Name"]').click();
      await this.page.locator('input[name="Root Element Name"]').fill(rootName);
      await this.page.locator('input[name="Record Element Name"]').nth(1).click();
      await this.page.locator('input[name="Record Element Name"]').nth(1).fill(recName);                  
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();                  
      await this.page.getByRole('button', { name: 'Finish' }).click();
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 20000})
    }

    async createXMLDTDMessage(cartName,messageName,nodeName,fileLocation)
    {  
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.locator('.p-radiobutton-box').first().click();
      await this.page.locator('input[name="DTD File Name"]').click();
      await this.page.getByRole('button', { name: '...' }).first().click();
      //await this.page.locator('[id="\\/projects\\/XMLProject\\/ejb-jar\\.dtd"]').click();
      await this.page.locator("[id='"+fileLocation+"']").click();
      await this.page.getByRole('button', { name: 'Ok' }).click();      
      await this.page.getByRole('button', { name: 'Next >' }).first().click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(3).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(4).click();
      await this.page.getByRole('button', { name: 'Finish' }).click();
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 20000})
    }

    async createXMLXSDMessage(cartName,messageName,nodeName,fileLocation)
    {  
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      //await this.page.pause();
      await this.page.locator('.p-radiobutton-box').nth(1).click();
      await this.page.locator('input[name="XSD File Name"]').click();
      await this.page.getByRole('button', { name: '...' }).nth(1).click();
      //await this.page.locator('[id="\\/projects\\/XMLProject\\/PurchaseOrder\\.xsd"]').click();
      await this.page.locator("[id='"+fileLocation+"']").click();
      await this.page.getByRole('button', { name: 'Ok' }).click();      
      await this.page.getByRole('button', { name: 'Next >' }).first().click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(3).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(4).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(5).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(6).click();
      await this.page.getByRole('button', { name: 'Finish' }).click();
      //await this.page.pause();
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 20000})
    }

    async createXMLDTDBatchedMessage(cartName,messageName,nodeName,fileLocation,recName)
    {  
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.locator('.p-radiobutton-box').first().click();
      await this.page.locator('input[name="DTD File Name"]').click();
      await this.page.getByRole('button', { name: '...' }).first().click();
      //await this.page.locator('[id="\\/projects\\/XMLProject\\/ejb-jar-batched\\.dtd"]').click();
      await this.page.locator("[id='"+fileLocation+"']").click();
      await this.page.getByRole('button', { name: 'Ok' }).click();      
      await this.page.getByRole('button', { name: 'Next >' }).first().click();
      await this.page.getByRole('region', { name: ' Batch/Message Mode' }).getByRole('radio').nth(1).click();   
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(3).click(); 
      await this.page.locator('.radio-based-input .volante-select .volante__input >> nth=-1').click();      
      await this.page.locator('.radio-based-input .volante-select .volante__input >> nth=-1').type(recName);      
      await this.page.waitForTimeout(4000); 
      await this.page.getByRole('button', { name: 'Next >' }).nth(4).click();
      await this.page.getByRole('button', { name: 'Finish' }).click();
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 30000})
    }

    async createXMLXSDBatchedMessage(cartName,messageName,nodeName,fileLocation,recName)
    {  
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click();
      await this.page.getByRole('grid', { name: 'grid' }).getByText(cartName).click({
          button: 'right'
        });
      await this.page.getByText('Add Item').click();  
      await this.page.getByText('New External Message').click();    
      await this.page.waitForTimeout(4000); 
      await this.page.locator('input[name="Name"] >> nth=2').fill(messageName);
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('xml');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();
      //await this.page.pause();
      await this.page.locator('.p-radiobutton-box').nth(1).click();
      await this.page.locator('input[name="XSD File Name"]').click();
      await this.page.getByRole('button', { name: '...' }).nth(1).click();
      //await this.page.locator('[id="\\/projects\\/XMLProject\\/PurchaseOrder\\.xsd"]').click();
      await this.page.locator("[id='"+fileLocation+"']").click();
      await this.page.getByRole('button', { name: 'Ok' }).click();      
      await this.page.getByRole('button', { name: 'Next >' }).first().click();
      await this.page.getByRole('region', { name: ' Batch/Message Mode' }).getByRole('radio').nth(1).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(1).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(2).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(3).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(4).click();
      await this.page.getByRole('button', { name: 'Next >' }).nth(5).click();      
      await this.page.locator('.radio-based-input .volante-select .volante__input >> nth=-1').click();      
      await this.page.locator('.radio-based-input .volante-select .volante__input >> nth=-1').type(recName);  
      await this.page.getByRole('button', { name: 'Next >' }).nth(6).click();
      await this.page.getByRole('button', { name: 'Finish' }).click();
      await expect(this.page.locator("//div[text()='"+nodeName+"']")).toBeVisible({timeout: 20000})
    }

    async selectXMLMessageUsingName(messageName)
    {
      await this.page.locator("//div[text() ='"+messageName+"']").click()
    }

    async selectXMLExternalFormatUsingIndex(index)
    {   
      await this.page.getByText('External Format').nth(index).click();           
      await this.page.waitForTimeout(4000);  
    }

    async selectXMLExternalFormat()
    {   
      //await this.page.getByText('External Format').click(); 
            
      await this.page.waitForTimeout(4000);  
      await this.page.locator('role=grid[name="grid"] >> text=External Format').click();
      await this.page.waitForTimeout(8000);  
    }

    async verifyXMLMessage(messageNameLabel,messageValue,version)
    {
        await expect(this.page.locator('.external-message .p-fieldset-legend span >>nth=1')).toHaveText('Format Details')
        await expect(this.page.locator('.external-message .volante-label').first()).toHaveText('External Format')
        await expect(this.page.locator('.external-message .input-group input').first()).toHaveValue('XML')
        //await expect(this.page.locator('.external-message .input-group input').first()).toHaveAttribute('disabled')
        await expect(this.page.locator('.external-message .volante-label >> nth=1')).toHaveText('Name')
        await expect(this.page.locator('.external-message .input-group input >> nth=1')).toHaveValue(messageNameLabel)
        await this.page.locator('.external-message .input-group input >> nth=1').fill(messageValue)
        await expect(this.page.locator('.external-message .input-group input >> nth=1')).toHaveValue(messageValue)
        await expect(this.page.locator('.external-message .volante-fieldset .volante-label >> nth=2')).toHaveText('Version')
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=2')).toHaveValue('1.0')
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=2').click()
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=2').fill(version)
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=2')).toHaveValue(version)
        await expect(this.page.locator('.external-message .p-fieldset-legend span >>nth=3')).toHaveText('Standard Details')
        await expect(this.page.locator('.external-message .volante-fieldset .volante-label >> nth=3')).toHaveText('Name')
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=3')).toHaveValue('XML')
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=3').click()
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=3').fill(messageValue)
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=3')).toHaveValue(messageValue)
        await expect(this.page.locator('.external-message .volante-fieldset .volante-label >> nth=4')).toHaveText('Version')
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=4')).toHaveValue('')
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=4').click()
        await this.page.waitForTimeout(4000); 
        await this.page.locator('.external-message .volante-fieldset .input-group input >> nth=4').fill(version)
        await expect(this.page.locator('.external-message .volante-fieldset .input-group input >> nth=4')).toHaveValue(version)
        await expect(this.page.locator('.external-message .volante-label >> nth=5')).toHaveText('Detailed Name')
        await expect(this.page.locator('.external-message .input-group input >> nth=5')).toHaveValue('')
        await this.page.locator('.external-message .input-group input >> nth=5').click()
        await this.page.waitForTimeout(4000); 
        await this.page.locator('.external-message .input-group input >> nth=5').fill(messageValue)
        await expect(this.page.locator('.external-message .input-group input >> nth=5')).toHaveValue(messageValue)
        await this.page.waitForTimeout(4000); 
        await expect(this.page.locator('.external-message .volante-label >> nth=-1')).toHaveText('Standard Group')
        await expect(this.page.locator('.external-message .input-group input >> nth=-1')).toHaveValue('')
        await this.page.locator('.external-message .input-group input >> nth=-1').click()
        await this.page.waitForTimeout(4000); 
        await this.page.locator('.external-message .input-group input >> nth=-1').fill(messageValue)
        await expect(this.page.locator('.external-message .input-group input >> nth=-1')).toHaveValue(messageValue)
        await expect(this.page.locator('.external-message .p-fieldset-legend span >>nth=-1')).toHaveText('Description')
        const placeHolder= await this.page.locator('.external-message .p-fieldset-content textarea').getAttribute('placeholder')
        await expect(placeHolder.toString()).toContain('Enter Description.')
        await this.page.locator('.external-message .p-fieldset-content textarea').fill('Test Description')
        await this.page.locator('.external-message .p-fieldset-content textarea').click()
        await expect(this.page.locator('.external-message .p-fieldset-content textarea')).toHaveText('Test Description')
        
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
      await this.page.getByText('Field Name').isVisible()
      await this.page.getByText('Type').nth(1).isVisible()
      await this.page.getByText('Description').nth(1).isVisible()
      await this.page.getByText('Alias').isVisible()
      await this.page.getByText('XML Type').isVisible()
      await this.page.getByText('Field Name').click({
        button: 'right'
      });    
      await this.page.locator('#volante-context-menu').getByText('Alias').click();
      await this.page.getByText('Field Name').click({
        button: 'right'
      });  
      
      await this.page.locator('#volante-context-menu').getByText('Detailed Name').click();
      await this.page.getByText('Alias').isVisible()
      await this.page.getByText('Detailed Name').isVisible()

    }  

    async toggleProperties()
    {                 
      await this.page.waitForTimeout(4000);  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(11)').click();  
    }

    async addNewField(modifiedFieldName)
    {               
      await this.page.locator('.xml-message-format > .volante-toolbar > span').first().click({delay:4000});
      await this.page.getByText('New Field').isVisible({timeout:10000})             
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill(modifiedFieldName);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(8000); 
    }

    async changeNodeType(type)
    {               
      await this.page.locator('svg').first().click();
      await this.page.locator('.searchable-input ').fill(type);
      await this.page.keyboard.press('Enter');
    }


    async changeCompositor(type)
    {       
        await this.page.locator('svg').nth(3).click();
        await this.page.locator('.searchable-input ').fill(type);
        await this.page.keyboard.press('Enter');
    }

    async optionalNonRepeatable()
    {      
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('0').click();
        await this.page.keyboard.press('Enter');
        await this.page.locator('svg').nth(2).click();
        await this.page.getByText('1').click();
        await this.page.keyboard.press('Enter');
    }

    async mandatoryNonRepeatable()
    { 
      await this.page.locator('.volante__input-container').first().click();
      await this.page.keyboard.press('Control+a');
      await this.page.locator('.volante__input-container').first().fill('1');
      await this.page.keyboard.press('Enter');
      await this.page.locator('.volante__input-container').nth(2).click();
      await this.page.keyboard.press('Control+a');
      await this.page.locator('.volante__input-container').nth(2).fill('1');
      await this.page.keyboard.press('Enter');
    }

    async mandatoryRepeatable()
    { 
      await this.page.locator('.volante__input-container').first().click();
      await this.page.keyboard.press('Control+a');
      await this.page.locator('.volante__input-container').first().fill('1');
      await this.page.keyboard.press('Enter');
      await this.page.locator('svg').nth(2).click();
      await this.page.getByText('Unbounded').nth(1).click();
    }

    async clickRequiredCheckbox()
    {               
      await this.page.locator('input[name="Required"]').click();
    }

    /*async addField()
    {
        await this.page.getByRole('grid', { name: 'grid' }).getByText('External Format').click();
        await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(11)').click();            
        await this.page.waitForTimeout(4000);  
        await this.page.locator('.xml-message-format > .volante-toolbar > span').first().click();
        await this.page.getByText('New Field').isVisible({timeout:10000})
        await this.page.getByRole('textbox').first().fill('F1');
        await this.page.keyboard.press('Enter');               
        await this.page.waitForTimeout(4000);  
        await this.page.locator('.xml-message-format > .volante-toolbar > span').first().click();            
        await this.page.waitForTimeout(4000);  
        await this.page.getByRole('textbox').first().fill('F2');
        await this.page.keyboard.press('Enter');
        await this.page.locator('svg').first().click();
        await this.page.getByText('attribute').click();
        await this.page.getByText('F2').click();            
        await this.page.waitForTimeout(4000);  
        await this.page.locator('.xml-message-format > .volante-toolbar > span').first().click();            
        await this.page.waitForTimeout(4000);  
        await this.page.getByRole('textbox').first().fill('F3');            
        await this.page.waitForTimeout(4000);  
        await this.page.keyboard.press('Enter');
        await this.page.locator('svg').first().click();
        await this.page.getByText('value').nth(1).click();
        await this.page.getByText('F3').click();
        await this.page.locator('.xml-message-format > .volante-toolbar > span').first().click();            
        await this.page.waitForTimeout(4000);  
        await this.page.getByRole('textbox').first().fill('F4');            
        await this.page.waitForTimeout(4000);  
        await this.page.keyboard.press('Enter');   
        await this.page.waitForTimeout(4000);  
        await this.page.locator('input[name="Required"]').click();
    }*/

    async addNewSection(modifiedSectionName)
    {   
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})       
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill(modifiedSectionName);
      await this.page.keyboard.press('Enter');
    }

    async addSection()
    {   
      await this.page.getByText('F4').click()
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S1');
      await this.page.keyboard.press('Enter');  

      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S2');
      await this.page.keyboard.press('Enter'); 
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      //await this.page.getByText('F4').click();
      //await this.page.getByText('S2').click();
      await this.page.locator('svg').first().click();
      await this.page.locator('.searchable-input ').fill('group');
      await this.page.keyboard.press('Enter');

      await this.page.getByText('S2').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S3');
      await this.page.keyboard.press('Enter');   
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').first().click();
      await this.page.locator('.searchable-input ').fill('any');
      await this.page.keyboard.press('Enter');

      await this.page.getByText('S3').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S4');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').first().click();
      await this.page.locator('.searchable-input ').fill('anyatt');
      await this.page.keyboard.press('Enter');

      
      await this.page.getByText('S4').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S5');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(3).click();
      await this.page.locator('.searchable-input ').fill('choice');
      await this.page.keyboard.press('Enter');

      
      await this.page.getByText('S5').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S6');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(3).click();
      await this.page.locator('.searchable-input ').fill('optional');
      await this.page.keyboard.press('Enter');

      
      await this.page.getByText('S6').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S7');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(3).click();
      await this.page.locator('.searchable-input ').fill('all');
      await this.page.keyboard.press('Enter');

      
      await this.page.getByText('S7').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S8');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(2).click();
      await this.page.getByText('1').nth(2).click();

      
      await this.page.getByText('S8').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S9');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(1).click();
      await this.page.getByText('1').nth(2).click();
      await this.page.locator('svg').nth(2).click();
      await this.page.getByText('1').nth(2).click();

      
      await this.page.getByText('S8').click();
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(2)').click();
      await this.page.getByText('New Section').isVisible({timeout:10000})     
      await this.page.waitForTimeout(4000);  
      await this.page.getByRole('textbox').first().fill('S9');
      await this.page.keyboard.press('Enter');  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(4000);  
      await this.page.locator('svg').nth(1).click();
      await this.page.getByText('1').nth(2).click();


    }

    async selectField(fieldName)
    {  
      await this.page.getByText(fieldName).click()   
      await this.page.waitForTimeout(4000);  
      //await this.page.locator('div:has-text('+fieldName+')').nth(3).click();
    }

    async verifyFormatOptions()
    {  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(14)').click();
      /*await this.page.getByRole('tab', { name: 'General' }).isVisible();
      await this.page.getByRole('cell', { name: 'Schema Name' }).isVisible();
      await this.page.getByRole('cell', { name: 'Synthesized' }).isVisible();
      await this.page.getByRole('cell', { name: 'Mode of Operation' }).isVisible();
      await this.page.getByRole('cell', { name: 'Message' }).isVisible();
      await this.page.getByRole('cell', { name: 'Root Element Tag' }).isVisible();
      await this.page.getByRole('row', { name: 'Root Element Tag SynRoot' }).getByRole('cell', { name: 'SynRoot' }).isVisible();
      await this.page.getByRole('cell', { name: 'Header Tag' }).isVisible();
      await this.page.getByRole('row', { name: 'Header Tag None' }).getByRole('cell', { name: 'None' }).isVisible();
      await this.page.getByRole('cell', { name: 'Record Tag' }).isVisible();
      await this.page.getByRole('row', { name: 'Record Tag SynRoot' }).getByRole('cell', { name: 'SynRoot' }).isVisible();
      await this.page.getByRole('cell', { name: 'Trailer Tag' }).isVisible();
      await this.page.getByRole('row', { name: 'Trailer Tag None' }).getByRole('cell', { name: 'None' }).isVisible();
      await this.page.getByText('Advanced Options').click();
      await this.page.locator('#volante-advanced-option-toolbar > span').first().click();
      await this.page.locator('#volante-advanced-option-toolbar > span:nth-child(3)').click();
      await this.page.getByRole('button', { name: 'Yes' }).click();
      await this.page.locator('#volante-xml-general-tab-dialog i').click();
      await this.page.getByRole('tab', { name: 'Namespaces' }).click();
      await this.page.locator('input[name="Schema Location"]').click();
      await this.page.locator('input[name="Schema Location"]').fill('aaa');
      await this.page.locator('input[name="No Namespace Schema Location"]').click();
      await this.page.locator('input[name="No Namespace Schema Location"]').fill('aaa');
      await this.page.locator('#volante-xml-namespace-toolbar > span').first().click();
      await this.page.getByRole('row', { name: 'true' }).getByRole('textbox').fill('ns');
      await this.page.getByRole('row', { name: 'true' }).getByRole('textbox').press('Enter');
      await this.page.getByRole('row', { name: 'ns true' }).getByRole('checkbox', { name: 'true' }).uncheck();
      await this.page.locator('[id="\\30 "] > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.getByRole('row', { name: 'ns false' }).getByRole('textbox').fill('px');
      await this.page.getByRole('row', { name: 'ns false' }).getByRole('textbox').press('Enter');
      await this.page.getByRole('tab', { name: 'XML Declaration' }).click();
      await this.page.locator('input[name="Doc Type Declaration"]').click();
      await this.page.locator('#volante-xml-declaration-toolbar > span').first().click();
      await this.page.locator('#volante-xml-declaration-toolbar > span:nth-child(3)').click();
      await this.page.getByRole('button', { name: 'Yes' }).click();
      await this.page.getByRole('gridcell', { name: 'version' }).getByText('version').click();
      await this.page.locator('#volante-xml-declaration-toolbar > span:nth-child(6)').click();
      await this.page.locator('#volante-xml-declaration-toolbar > span:nth-child(5)').click();
      await this.page.getByRole('tab', { name: 'XML Parser Options' }).click();
      await this.page.locator('input[name="Validate"]').check();
      await this.page.locator('input[name="Validate with schema"]').check();
      await this.page.locator('input[name="Ignore unrecognized top level tags"]').check();
      await this.page.locator('input[name="Enable External Entities"]').check();
      await this.page.getByRole('button', { name: 'Yes' }).click();
      await this.page.locator('input[name="Namespace aware"]').uncheck();
      await this.page.locator('input[name="Enable External Entities"]').uncheck();
      await this.page.getByRole('tab', { name: 'XML Serializer Options' }).click();
      await this.page.locator('input[name="Ignore default xsi\\:type"]').check();
      await this.page.locator('input[name="Ignore default value if element not present"]').check();
      await this.page.locator('input[name="Escape Handler Class"]').check();
      await this.page.getByRole('textbox').click();
      await this.page.getByRole('textbox').fill('es');
      await this.page.getByRole('region', { name: ' dateTime options' }).locator('svg').click();
      await this.page.getByText('%Y-%M-%DT%h:%m:%s').nth(1).click();*/
      await this.page.getByRole('tab', { name: 'Entity References' }).click();
      await this.page.locator('#volante-xml-entity-reference-toolbar > span').first().click();
      await this.page.locator('[id="\\/projects\\/Smoke\\/XMLProject\\/ejb-jar\\.dtd"]').click();
      await this.page.getByRole('button', { name: 'Open' }).click();
      await this.page.getByRole('tabpanel', { name: 'Entity References' }).locator('input').press('Enter');
      await this.page.locator('#volante-xml-entity-reference-toolbar > span:nth-child(3)').click();
      await this.page.getByRole('button', { name: 'No' }).click();
      await this.page.locator('#volante-xml-entity-reference-toolbar > span').first().click();
      await this.page.locator('[id="\\/projects\\/Smoke\\/XMLProject\\/ejb-jar-batched\\.dtd"]').click();
      await this.page.getByRole('button', { name: 'Open' }).click();
      await this.page.getByRole('tabpanel', { name: 'Entity References' }).locator('input').press('Enter');
      await this.page.locator('#volante-xml-entity-reference-toolbar > span:nth-child(5)').click();
      await this.page.getByText('Enter the list of entities (schemas)').click();
      await this.page.getByRole('button', { name: 'Close' }).click();
    }

    async collapseMessageNode(nodeName)
    {  
      await this.page.locator("//div[text()='"+nodeName+"']").click();
      //await this.page.locator('span:nth-child(7)').click();
      await this.page.locator("//span[@title='Collapse Node']").click();
      await this.page.waitForTimeout(4000);  
    }

    async expandMessageNode(nodeName)
    {  
      await this.page.locator("//div[text()='"+nodeName+"']").click();
      await this.page.locator('span:nth-child(6) >> nth=0').click();
    }

    async moveUp()
    {  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(6)').click();      
      await this.page.waitForTimeout(8000);  
    }

    async moveUpDisabled()
    {  
      let moveUp=await this.page.getByTitle('Move Selection Up Ctrl+Shift+Up').getAttribute('class')
      await expect(moveUp).toContain('theia-mod-disabled');
      await this.page.waitForTimeout(8000);  
    }
      
    async moveDown()
    {  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(7)').click();
      await this.page.waitForTimeout(8000);  
    }

    async moveDownDisabled()
    {  
      let moveDown=await this.page.getByTitle('Move Selection Down Ctrl+Shift+Down').getAttribute('class')
      await expect(moveDown).toContain('theia-mod-disabled');
      await this.page.waitForTimeout(8000);  
    }

    async moveLeft()
    {  
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(8)').click();     
      await this.page.waitForTimeout(8000);  
    }

    async moveLeftDisabled()
    {       
      let moveLeft=await this.page.getByTitle('Move Selection Left Ctrl+Shift+Left').getAttribute('class')
      await expect(moveLeft).toContain('theia-mod-disabled');  
      await this.page.waitForTimeout(8000);  
    }

    async moveRight()
    { 
      await this.page.locator('.xml-message-format > .volante-toolbar > span:nth-child(9)').click();
      await this.page.waitForTimeout(8000);  
    }

    async moveRightDisabled()
    { 
      let moveRight=await this.page.getByTitle('Move Selection Right Ctrl+Shift+Right').getAttribute('class')
      await expect(moveRight).toContain('theia-mod-disabled');
      await this.page.waitForTimeout(8000);  
    }

    async multiSelectMove(fieldName1,fieldName2)
    { 
      await this.page.getByText(fieldName1).click()
      await this.page.getByText(fieldName2).click({
        modifiers: ['Control']
      });
      await this.page.waitForTimeout(4000);  
      
    }

    async deleteField(fieldName)
    {  
      await this.page.getByText(fieldName).click()
      await this.page.locator('.internal-message-normalized-format > .volante-toolbar > span:nth-child(4) ').click()
      await this.page.locator("#volante-confirm-props-cancel-dialog > div > div.dialogControl > button:nth-child(2)").click()
    }

    async addAlias(aliasName,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(3) >> nth='+index+'').click({delay:4000});      
      await this.page.waitForTimeout(4000);  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(3) >> nth='+index+'').dblclick({delay:4000});
      await this.page.getByRole('textbox').fill(aliasName);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(10000);  
    }

    async enableHidden(index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(5) >> nth='+index+'').click();
    }

    async addDetailedName(detailedName,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(8) >> nth='+index+'').click({delay:4000});   
      await this.page.waitForTimeout(4000);  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(8) >> nth='+index+'').dblclick({delay:4000});
      await this.page.getByRole('textbox').fill(detailedName);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(10000);  
    }

    async addDescription(description,index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(7) >> nth='+index+'').click({delay:4000});   
      await this.page.waitForTimeout(4000);  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(7) >> nth='+index+'').dblclick({delay:4000});
      await this.page.getByRole('textbox').fill(description);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(10000);  
    }

    async changeDataType(dataType, index)
    {  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(4) >> nth='+index+'').click({delay:4000});   
      await this.page.waitForTimeout(4000);  
      await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(4) >> nth='+index+'').dblclick({delay:4000});
      //await this.page.locator('.ReactVirtualized__Table__row > div:nth-child(3)').getByText(index).dblclick();
      await this.page.locator('.volante-table-cell >> .volante__dropdown-indicator').click({delay:4000});
      await this.page.locator('.volante__menu-list .volante__option').getByText(dataType).nth(0).click({delay:4000});
      await this.page.waitForTimeout(10000);  
    }

    async changeFieldName(currentFieldName,modifiedFieldName)
    {  
      await this.page.getByText(currentFieldName).click({delay:4000})   
      await this.page.waitForTimeout(4000);  
      await this.page.getByText(currentFieldName).dblclick({delay:4000})
      await this.page.getByRole('textbox').fill('');
      await this.page.getByRole('textbox').fill(modifiedFieldName);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(10000);  
    }

    async enableProperties()
    {  
      //await this.page.locator('span:nth-child(10) >> nth=0').click();
      await this.page.locator("//span[@class='toolbar-action volante-properties-icon']").click();
      await this.page.getByLabel('Properties').isVisible();      
      await this.page.waitForTimeout(5000);  
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
      await this.page.locator('role=gridcell[name='+fieldNameorSectionName+'] >> text='+fieldNameorSectionName+'').click()
      //await this.page.locator('.volante-toolbar-action-menu > .toolbar-action').click()
      await this.page.locator("//span[contains(@title,'Platform Properties')]").click()
      //await this.page.locator("//span[normalize-space()='Platform Properties']").click()
    }
    
    async clickCancel()
    {  
            await this.page.getByRole('button', { name: 'Cancel' }).click();
    }
    
    async clickOk()
    {  
            await this.page.getByRole('button', { name: 'OK' }).click();
    }
    
    async verifyFacets(fieldName,image1,image2,image3)
    {  
      await this.page.getByText(fieldName).click()
      await this.page.getByRole('button', { name: 'Facets' }).click();
      await this.page.getByRole('gridcell', { name: 'length' }).locator('div:has-text("length")').nth(1).click();
      await this.page.getByRole('gridcell', { name: 'minLength' }).locator('div:has-text("minLength")').nth(1).click();
      await this.page.getByRole('gridcell', { name: 'maxLength' }).locator('div:has-text("maxLength")').nth(1).click();
      await this.page.getByRole('gridcell', { name: 'whiteSpace' }).locator('div:has-text("whiteSpace")').nth(1).click();
      await this.page.locator('[id="\\30 "] div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.getByRole('row', { name: 'length' }).locator('input').fill('12');
      await this.page.locator('[id="\\31 "] div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.getByRole('row', { name: 'minLength' }).locator('input').fill('5');
      await this.page.locator('[id="\\32 "] div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.getByRole('row', { name: 'maxLength' }).locator('input').fill('10');
      await this.page.locator('[id="\\33 "] div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.locator('role=gridcell[name="Select is focused , press Down to open the menu,"] >> svg').click();
      await this.page.getByText('preserve').click();
      await this.page.getByRole('tab', { name: 'Pattern' }).click();
      await this.page.getByRole('tabpanel', { name: 'Pattern' }).locator('span').first().click();
      await this.page.getByRole('gridcell', { name: 'Select is focused ,type to refine list, press Down to open the menu,' }).locator('input[type="text"]').fill('|');
      await this.page.locator('[id="\\30 "] > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.locator('role=row[name="|"] >> input').fill("des1");
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('tabpanel', { name: 'Pattern' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'No' }).click();
      await this.page.getByRole('tabpanel', { name: 'Pattern' }).locator('span').first().click();
      await this.page.getByRole('gridcell', { name: 'Select is focused ,type to refine list, press Down to open the menu,' }).locator('input[type="text"]').fill('[]');
      await this.page.locator('[id="\\31 "] > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.locator('role=row[name="[]"] >> input').fill("des2");
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('tab', { name: 'Enumeration' }).click();
      await this.page.getByRole('tabpanel', { name: 'Enumeration' }).locator('span').first().click();
      await this.page.getByRole('tabpanel', { name: 'Enumeration' }).locator('input').fill('e1');
      await this.page.keyboard.press('Enter');
      await this.page.locator('[id="\\30 "] > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      await this.page.getByRole('row', { name: 'e1' }).locator('input').fill('des3');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('tabpanel', { name: 'Enumeration' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'No' }).click();      
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.getByRole('button', { name: 'Facets' }).click();
      await expect.soft(this.page.locator('.dialogBlock >>nth=-1')).toHaveScreenshot(image1);
      await this.page.getByRole('tab', { name: 'Pattern' }).click();
      await expect.soft(this.page.locator('.dialogBlock >>nth=-1')).toHaveScreenshot(image2);
      await this.page.getByRole('tab', { name: 'Enumeration' }).click();
      await expect.soft(this.page.locator('.dialogBlock >>nth=-1')).toHaveScreenshot(image3);
      await this.page.getByRole('button', { name: 'OK' }).click();
    }
    
    async verifyFacetsForDifferentTypes(fieldName,image)
    {  
      //await this.page.getByText(fieldName).click()
      await this.page.locator('role=gridcell[name='+fieldName+'] >> text='+fieldName+'').click()      
      await this.page.waitForTimeout(3000);  
      await this.page.getByRole('button', { name: 'Facets' }).click();
      await expect.soft(this.page.locator('.dialogBlock >>nth=-1')).toHaveScreenshot(image);
      await this.page.getByRole('tab', { name: 'Pattern' }).click();
      await this.page.getByRole('tab', { name: 'Enumeration' }).click();
      await this.page.getByRole('button', { name: 'Cancel' }).click();
    }

    async copyCellValue(fieldName)
    {            
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Cell Value').click();      
      await this.page.waitForTimeout(4000); 
    }

    async copyName(fieldName)
    { 
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.locator('div:nth-child(15) > .p-Menu-content > li:nth-child(2) > .p-Menu-itemLabel').click();
      await this.page.waitForTimeout(4000); 
    }

    async copyQualifiedName(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Qualified Name').first().click();      
      await this.page.waitForTimeout(4000); 
    }

    async copyQualifiedNameWithIndex(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Qualified Name (with index)').click();
      await this.page.waitForTimeout(4000); 
    }

    async copyQualifiedMangledName(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Qualified Name (Mangled)').click();
      await this.page.waitForTimeout(4000); 
    }

    async copyDetailedName(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Detailed Name').click();
      await this.page.waitForTimeout(4000); 
    }

    async copyDescription(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').first().click();
      await this.page.getByText('Description').nth(2).click();
      await this.page.waitForTimeout(4000); 
    }

    async copyField(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Copy').nth(1).click();
      await this.page.waitForTimeout(4000); 
    }

    async pasteField(fieldName)
    { 
      //await this.page.getByText(fieldName).click({
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Paste').click();
      //copy to clipboard handles by providing the permissions in config
    }

    async copyShortcut(fieldName)
    {      
      await this.page.waitForTimeout(4000); 
      await this.page.locator('span:has-text("'+fieldName+'")').click();
      await this.page.keyboard.press('Control+C');
      await this.page.waitForTimeout(4000); 
    }

    async pasteShortcut(fieldName)
    { 
      //await this.page.getByText(fieldName).click({
      await this.page.locator('span:has-text("'+fieldName+'")').click();
      await this.page.keyboard.press('Control+V');
    }

    async Editpaste(fieldName)
    { 
      //NOT WORKING, JIRA TO BE RAISED.
      await this.page.locator('span:has-text("'+fieldName+'")').click()      
      await this.page.getByText('Edit').click();
      await this.page.getByText('Paste').click();       
    }

    async Editcopy(fieldName)
    { 
      //NOT WORKING, JIRA TO BE RAISED. 
      await this.page.locator('span:has-text("'+fieldName+'")').click()      
      await this.page.getByText('Edit').click();
      await this.page.getByText('Paste').click();       
    }

    async findUsagesWithoutMatches(fieldName)
    { 
      //await this.page.getByText(fieldName).click({
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Find').click();
      await this.page.getByText('Usages').click();
      await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async findUsagesWithMatches(fieldName)
    { 
      //await this.page.getByText(fieldName).click({
      await this.page.locator('span:has-text("'+fieldName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Find').click();
      await this.page.getByText('Usages').click();
    }


    async collapseAllSection(sectionName)
    { 
      //await this.page.getByText(sectionName).click({
      await this.page.locator('span:has-text("'+sectionName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Collapse').click();
      await this.page.getByText('All Section').click();
    }

    async expandAllSections(sectionName)
    {   
      await this.page.getByText(sectionName).click({
        button: 'right'
      }); 
      await this.page.getByText('Expand').click();
      await this.page.getByText('All Section').click();
    }

    async verifyActions(sectionName)
    {   
      //await this.page.locator('span:has-text("'+sectionName+'")').click();
      await this.page.locator('span:has-text("'+sectionName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Actions').nth(1).click();      
      await expect(this.page.getByText('Add New Field')).toBeVisible();
      await expect(this.page.getByText('Add New Section')).toBeVisible();
      await expect(this.page.getByText('Remove Selected Field(s)')).toBeVisible();
      await expect(this.page.getByText('Move Selection Up')).toBeVisible();
      await expect(this.page.getByText('Move Selection Down')).toBeVisible();
      await expect(this.page.getByText('Move Selection Left')).toBeVisible();
      await expect(this.page.getByText('Move Selection Right')).toBeVisible();
      await expect(this.page.locator('li:nth-child(10) > .p-Menu-itemLabel')).toBeVisible();//Properties label
      await expect(this.page.locator('text=Platform Properties >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Platform Format Properties >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Namespace Prefixes >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Reconfigure Schema')).toBeVisible();
      await expect(this.page.locator('Format Options')).toBeVisible();
    }

    async verifycolumnActions(sectionName)
    {   
      await this.page.locator('span:has-text("'+sectionName+'")').click();
      await this.page.locator('span:has-text("'+sectionName+'")').click({
        button: 'right'
      }); 
      await this.page.getByText('Column Actions').click();      
      await expect(this.page.locator('text=Field Name >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Alias')).toBeVisible();
      await expect(this.page.locator('text=Type >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=XML Type >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Enabled >> nth=1')).toBeVisible();
      await expect(this.page.locator('text=Description >> nth=2')).toBeVisible();
      await expect(this.page.locator('text=Detailed Name')).toBeVisible();
    }

    async toVerifyTheCopiedContents()
    {   
      await this.page.getByText('XML [ContextMenu]').click();
      await this.page.getByRole('textbox', { name: 'Enter Description.' }).click();
      await this.page.keyboard.press('Control+V'); 
      await this.page.keyboard.press('Enter');           
      await this.page.waitForTimeout(4000); 
    }

    async toVerifyMessageContextMenu(messageName)
    {      
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await expect(this.page.locator('text=Add Item')).toBeVisible(); 
      await expect(this.page.locator('text=Add Child')).toBeVisible(); 
      await expect(this.page.locator('text=Attributes')).toBeVisible(); 
      await expect(this.page.locator('text=Find Usages')).toBeVisible(); 
      await expect(this.page.locator('text=View/Edit Annotations')).toBeVisible(); 
      await expect(this.page.locator('text=Copy')).toBeVisible(); 
      await expect(this.page.locator('text=Paste')).toBeVisible(); 
      await expect(this.page.locator('text=Import').nth(2)).toBeVisible(); 
      await expect(this.page.locator('text=Export')).toBeVisible(); 
      await expect(this.page.locator('text=Delete').nth(0)).toBeVisible(); 
      await expect(this.page.locator('text=Validate')).toBeVisible();       
      await this.page.getByText('Add Item').click();
      await expect(this.page.locator('text=New Folder')).toBeVisible(); 
      await expect(this.page.locator('text=New Internal Message')).toBeVisible(); 
      await expect(this.page.locator('text=New External Message')).toBeVisible(); 
      await expect(this.page.locator('text=DynamicForms Designer')).toBeVisible(); 
      await expect(this.page.locator('text=New Mapping')).toBeVisible(); 
      await expect(this.page.locator('text=Add Resources')).toBeVisible(); 
      await expect(this.page.locator('text=New Function')).toBeVisible(); 
      await expect(this.page.locator('text=Mount Directory')).toBeVisible(); 
      await expect(this.page.locator('text=New Message Flow')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Client')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Server')).toBeVisible();       
      await this.page.getByText('Add Child').click();
      await expect(this.page.locator('li:has-text("Validation") div').nth(1)).toBeVisible();
      await expect(this.page.locator('text=New Function')).toBeVisible(); 
      await expect(this.page.locator('text=Convert To Internal Message')).toBeVisible(); 
    }

    async toVerifyMessageFormatContextMenu()
    {      
      await this.page.getByText("External Format").first().click({
        button: 'right'
      });
      await expect(this.page.locator('text=Add Item')).toBeVisible();  
      await expect(this.page.locator('text=Copy')).toBeVisible(); 
      await expect(this.page.locator('text=Paste')).toBeVisible(); 
      await expect(this.page.locator('#volante-context-menu >> text=Import')).toBeVisible(); 
      await expect(this.page.locator('text=Export')).toBeVisible(); 
      await expect(this.page.locator('text=Validate')).toBeVisible();       
      await this.page.getByText('Add Item').click();
      await expect(this.page.locator('text=New Folder')).toBeVisible(); 
      await expect(this.page.locator('text=New Internal Message')).toBeVisible(); 
      await expect(this.page.locator('text=New External Message')).toBeVisible(); 
      await expect(this.page.locator('text=DynamicForms Designer')).toBeVisible(); 
      await expect(this.page.locator('text=New Mapping')).toBeVisible(); 
      await expect(this.page.locator('text=Add Resources')).toBeVisible(); 
      await expect(this.page.locator('text=New Function')).toBeVisible(); 
      await expect(this.page.locator('text=Mount Directory')).toBeVisible(); 
      await expect(this.page.locator('text=New Message Flow')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Client')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Server')).toBeVisible(); 
    }

    async toVerifyValidationRulesContextMenu()
    {      
      await this.page.getByText("Validation Rules [Default]").first().click({
        button: 'right'
      });
      await expect(this.page.locator('text=Add Item')).toBeVisible(); 
      await expect(this.page.locator('text=View/Edit Annotations')).toBeVisible(); 
      await expect(this.page.locator('text=Edit Properties')).toBeVisible();  
      await expect(this.page.locator('text=Copy')).toBeVisible(); 
      await expect(this.page.locator('text=Paste')).toBeVisible(); 
      await expect(this.page.locator('text=Import').nth(2)).toBeVisible(); 
      await expect(this.page.locator('text=Export')).toBeVisible(); 
      await expect(this.page.locator('text=Validate')).toBeVisible();       
      await this.page.getByText('Add Item').click();
      await expect(this.page.locator('text=New Folder')).toBeVisible(); 
      await expect(this.page.locator('text=New Internal Message')).toBeVisible(); 
      await expect(this.page.locator('text=New External Message')).toBeVisible(); 
      await expect(this.page.locator('text=DynamicForms Designer')).toBeVisible(); 
      await expect(this.page.locator('text=New Mapping')).toBeVisible(); 
      await expect(this.page.locator('text=Add Resources')).toBeVisible(); 
      await expect(this.page.locator('text=New Function')).toBeVisible(); 
      await expect(this.page.locator('text=Mount Directory')).toBeVisible(); 
      await expect(this.page.locator('text=New Message Flow')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Client')).toBeVisible(); 
      await expect(this.page.locator('text=New REST Server')).toBeVisible(); 
    }


    async toAddFolder(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Item').click();
      await this.page.getByText('New Folder').click();
      await this.page.locator('input[name="Enter Folder Name"]').fill('FolderNode');
      await this.page.getByRole('button', { name: 'OK' }).click();        
      await this.page.waitForTimeout(4000); 
    }

    async toAddInternalMessage(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Item').click();
      await this.page.getByText('New Internal Message').click();
      await this.page.locator('input[name="Enter Internal Message Name"]').click();
      await this.page.locator('input[name="Enter Internal Message Name"]').fill('IM');
      await this.page.getByRole('button', { name: 'OK' }).click();        
      await this.page.waitForTimeout(4000); 
      await this.page.locator("//span[@title='Collapse Node']").click();
    
    }

    async toAddMapping(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Item').click();
      await this.page.getByText('New Mapping').click();
      await this.page.locator('input[name="Many-to-Many Mapping"]').check();
      await this.page.getByRole('button', { name: 'OK' }).click();        
      await this.page.waitForTimeout(4000); 
      await this.page.locator("//span[@title='Collapse Node']").click();
    
    }

    async toAddExternalMessage(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Item').click();
      await this.page.getByText('New External Message').click();
      await this.page.locator('#volante-add-external-message-dialog input[name="Name"]').fill('EM');
      await this.page.locator('#volante-add-external-message-dialog svg').click();
      await this.page.locator('.searchable-input ').fill('universal');
      await this.page.keyboard.press('Enter');
      await this.page.getByRole('button', { name: 'OK' }).click();          
      await this.page.waitForTimeout(4000);   
      await this.page.locator("//span[@title='Collapse Node']").click();
    }

    async toAddNewFunction(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Item').click();
      await this.page.getByText('New Function').click();        
      await this.page.waitForTimeout(4000); 
      await this.page.getByText(messageName).click();
      await this.page.locator("//span[@title='Collapse Node']").click();
    
    }

    async toAddChildFunction(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Child').click();
      await this.page.getByText('New Function').click();        
      await this.page.waitForTimeout(4000); 
      await this.page.getByText(messageName).click();
      await this.page.locator("//span[@title='Collapse Node']").click();
    
    }

    async toAddChildValidation(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Child').click();
      await this.page.getByText('Validation').nth(0).click();
      await this.page.locator('#validatrion-edit-properties input[name="Name"]').fill('v1');
      await this.page.getByRole('button', { name: 'OK' }).click();        
      await this.page.waitForTimeout(4000); 
      await this.page.getByText(messageName).click();
      await this.page.locator("//span[@title='Collapse Node']").click();
    
    }

    async toConvertToInternalMessage(messageName)
    {   
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Add Child').click();
      await this.page.getByText('Convert To Internal Message').click();
      await this.page.getByRole('button', { name: 'OK' }).click();        
      await this.page.waitForTimeout(4000); 
    
    }

    async findUsagesForMessage(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });  
      await this.page.getByText('Find Usages').click();   
      await this.page.waitForTimeout(4000); 
    }

    async viewAnnotations(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('View/Edit Annotations').click();
      await this.page.getByRole('button', { name: 'Cancel' }).click();      
      await this.page.waitForTimeout(4000); 
    }

    async excludeFromCartridge(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Attributes').click();
      await this.page.getByText('Exclude from Cartridge').click();     
      await this.page.waitForTimeout(4000); 
    }

    async restrictToCartridge(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Attributes').click();
      await this.page.getByText('Restrict to this Cartridge (Private)').click();     
      await this.page.waitForTimeout(4000); 
    }

    async deprecate(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Attributes').click();
      await this.page.getByText('Deprecate').click();     
      await this.page.waitForTimeout(4000); 
    }

    async copyMessageNode(messageName)
    { 
      await this.page.getByText(messageName).click({
        button: 'right'
      });
      await this.page.getByText('Copy').click();    
      await this.page.waitForTimeout(4000); 
    }

    async pasteMessageNode(nodeName,messageName)
    { 
      await this.page.locator("text='"+nodeName+"'").click({
        button: 'right'
      });
      await this.page.getByText('Paste').click();    
      await expect(this.page.getByText(messageName).nth(1)).toBeVisible();
      await this.page.waitForTimeout(4000); 
    }

    async exportMessage(messageName)
    { 
      await this.page.getByText(messageName).nth(0).click({
        button: 'right'
      });
      await this.page.getByText('Export').click();   
      await this.page.getByRole('button', { name: 'Save' }).click(); 
      await this.page.waitForTimeout(4000); 
    }

    async importMessage(nodeName,messageName)
    { 
      await this.page.locator("text='"+nodeName+"'").click({
        button: 'right'
      });
      //await this.page.getByText('Import').click(); 
      await this.page.locator('#volante-context-menu >> text=Import').click(); 
      await this.page.getByRole('button', { name: '...' }).click();
      await this.page.locator('[id="\\/projects\\/Smoke\\/XMLProject\\/SynthesizeXMLDTDMessage\\.vmf"]').dblclick();
      //await this.page.getByRole('button', { name: 'OK' }).click();
      //await this.page.locator('#volante-main-import-design-element-dialog >> role=button[name="OK"]').click();
      await this.page.getByRole('button', { name: 'OK' }).click();
      await this.page.waitForTimeout(4000); 
      await expect(this.page.getByText(messageName).nth(2)).toBeVisible();
      await this.page.waitForTimeout(4000); 
    }

    async deleteMessage(messageName)
    { 
      await this.page.getByText(messageName).nth(2).click({
        button: 'right'
      });
      await this.page.getByText('Delete').first().click();
      await this.page.getByRole('button', { name: 'Yes' }).click();
      await this.page.waitForTimeout(4000); 
    }

    async validateMessage(messageName)
    { 
      await this.page.getByText(messageName).nth(1).click({
        button: 'right'
      });
      await this.page.getByText('Validate').click();
      await this.page.waitForTimeout(4000); 
      await expect(this.page.getByText('Validation completed.')).toBeVisible();
    }

    async selectHeaderTab()
    { 
      await this.page.getByRole('tab', { name: 'Header' }).click();
      await this.page.waitForTimeout(4000); 
    }

    async selectTrailerTab()
    { 
      await this.page.getByRole('tab', { name: 'Trailer' }).click();
      await this.page.waitForTimeout(4000);       
      let newSection=await this.page.getByTitle('Add New Section').getAttribute('class');
      await expect(newSection).toContain('theia-mod-disabled')
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
      await this.page.keyboard.press('Enter');
      await this.page.getByText('Property2').click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'OK' }).isVisible();
      await this.page.getByRole('button', { name: 'Cancel' }).isVisible();
      await this.page.getByRole('button', { name: 'Help' }).isVisible();

      //await this.page.pause()
        
    }

    async verifySectionPlatformPropertiesDialog(tableName,modifiedTableName,modifiedSchemaName,modifiedColumnName)
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
      await this.page.keyboard.press('Enter');
      await this.page.getByText('Property Name').isVisible();
      await this.page.getByText('Value').isVisible();
      await this.page.getByText('Property1').isVisible();
      //await this.page.getByText('Property1').dblclick();
      //await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('input').fill("p1");
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').dblclick();
      //await this.page.locator('#volante-field-attributes-table > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .ReactVirtualized__Table__row > div:nth-child(3) > .volante-table-cell > .volante-table-cell-container').fill("v1");
      //await page.getByText('p1').click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').first().click();
      await this.page.keyboard.press('Enter');
      await this.page.getByText('Property2').click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(2).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(3).click();
      await this.page.getByRole('tabpanel', { name: 'Attributes' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'OK' }).isVisible();
      await this.page.getByRole('button', { name: 'Cancel' }).isVisible();
      await this.page.getByRole('button', { name: 'Help' }).isVisible();
      //await this.page.pause()
        
    }

    async verifyPlatformFormatPropertiesDialog(targetNamespace,messageName)
    {
      await this.page.locator('role=tabpanel[name="Data"] >> role=button[name=" p-btn"]').click()
      //await this.page.getByRole('tabpanel', { name: 'Data' }).getByRole('button', { name: ' p-btn' }).click();
      await this.page.getByRole('menuitem', { name: 'Platform Format Properties' }).click();
      //await this.page.locator("//div[contains(@class,'xml-message-format')]//div[contains(@class,'')]//div[contains(@class,'volante-toolbar-action-menu')]//div//span[contains(@class,'p-button-text p-c')][normalize-space()='p-btn']").click()
      //await this.page.locator("//span[normalize-space()='Platform Format Properties']").click();
      await this.page.getByRole('menuitem', { name: 'Platform Format Properties' }).isVisible();
      await this.page.getByText('Namespace').nth(1).isVisible();
      await this.page.getByText('Target Namespace').isVisible();
      await expect(this.page.locator('input[name="Target Namespace"]')).toHaveValue("");
      await this.page.locator('input[name="Target Namespace"]').fill(targetNamespace)
      await this.page.getByText('Root Element').isVisible();
      await this.page.getByText('Tag').isVisible();
      await this.page.getByText(messageName).isVisible();
      await this.page.getByRole('button', { name: '...' }).nth(0).click();
      await this.page.locator('#volante-platform-attributes-response-dialog i').click();
      await this.page.getByRole('button', { name: 'OK' }).click();      
    }

    async verifyNamespacePrefixesDialog()
    {
      await this.page.locator('role=tabpanel[name="Data"] >> role=button[name=" p-btn"]').click()
      await this.page.getByRole('menuitem', { name: 'Namespace Prefixes' }).click()
     // await this.page.locator("//div[contains(@class,'xml-message-format')]//div[contains(@class,'')]//div[contains(@class,'volante-toolbar-action-menu')]//div//span[contains(@class,'p-button-text p-c')][normalize-space()='p-btn']").click()
      //await this.page.locator("//span[normalize-space()='Namespace Prefixes']").click();
      await this.page.getByText('Prefix Mapping').isVisible();
      await this.page.locator('#volante-namespace-prefixes-toolbar').isVisible();  
      //move icons disabled to be done    
      await this.page.getByRole('columnheader', { name: 'Namespace' }).getByText('Namespace').isVisible();
      await this.page.getByRole('columnheader', { name: 'Prefix' }).getByText('Prefix').isVisible();
      await this.page.getByText('http://www.w3.org/2005/xpath-functions').isVisible();
      await this.page.getByText('http://www.w3.org/2001/XMLSchema').isVisible();
      await this.page.getByText('java:com.tplus.transform.runtime.swift.SwiftXPathFunctions').isVisible();
      await this.page.getByText('fn').isVisible();
      await this.page.locator('role=gridcell[name="xs"] >> text=xs').isVisible();
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

    async verifyXMLName(fieldName)
    {
      await expect(this.page.locator("//input[@name='XML Name']")).toHaveValue(fieldName);
    }

    async verifyNamespace()
    {
      await expect(this.page.locator("//input[@name='Namespace']")).toHaveValue("");
    }

    async verifyDefaultValue()
    {
      await expect(this.page.locator("//input[@name='Default Value']")).toHaveValue("");
    }

    async verifyFixed()
    {
      await this.page.locator("//input[@name='Fixed']").click();
    }

    async verifyNillable()
    {
      await this.page.locator("//input[@name='Nillable']").click();
    }
}