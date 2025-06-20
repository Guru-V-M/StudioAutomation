const { expect, default: test } = require('@playwright/test');
exports.ResourceFunction = class ResourceFunction{
constructor(page)
    {
        this.page=page;
    }

async addResource()
{
    
    await this.page.locator("(//div[text()='ResourceUISmoke'])[1]").click({button: "right"});
    await this.page.getByText('Add Item').click();
    await this.page.getByText('Add Resources').click();
    await this.page.getByText('Resources').click();
}
async toolBar()
{
    await expect (this.page.locator("//span[contains(@class,'toolbar-action volante-normalized-format-add-field-icon')]")).toBeVisible();
    await expect (this.page.locator("//span[contains(@class,'toolbar-action volante-normalized-format-add-section-icon')]")).toBeVisible();
    await expect (this.page.locator("//span[contains(@class,'toolbar-action fa volante-explorer-external-message-icon')]")).toBeVisible();
    let removefield = await this.page.getByTitle('Remove Selected Field(s)').getAttribute('class');
    expect(removefield).toContain('theia-mod-disabled');
    let moveup = await this.page.getByTitle('Move Selection Up Ctrl+Shift+Up').getAttribute('class');
    expect(moveup).toContain('theia-mod-disabled');
    let movedown = await this.page.getByTitle('Move Selection Down Ctrl+Shift+Down').getAttribute('class');
    expect(movedown).toContain('theia-mod-disabled');
    let moveleft = await this.page.getByTitle('Move Selection Left Ctrl+Shift+Left').getAttribute('class');
    expect(moveleft).toContain('theia-mod-disabled');
    let moveright = await this.page.getByTitle('Move Selection Right Ctrl+Shift+Right').getAttribute('class');
    expect(moveright).toContain('theia-mod-disabled');
    await expect (this.page.locator("//span[contains(@class,'toolbar-action volante-customize-locale-icon')]")).toBeVisible();
    await expect (this.page.locator("//span[contains(@class,'toolbar-action volante-edit-icon')]")).toBeVisible();
    await expect (this.page.locator('//div[text()="Default"]')).toBeVisible();
    }
    async toolTip()
    {
        let valueofaddfield = await this.page.locator("//span[contains(@class,'toolbar-action volante-normalized-format-add-field-icon')]").getAttribute('title');
        expect(valueofaddfield).toContain('Add New Field');
        let valueofaddsection = await this.page.locator("//span[contains(@class,'toolbar-action volante-normalized-format-add-section-icon')]").getAttribute('title');
        expect(valueofaddsection).toContain('Add New Section');
        let valueofmessageresource = await this.page.locator("//span[contains(@class,'toolbar-action fa volante-explorer-external-message-icon')]").getAttribute('title');
        expect(valueofmessageresource).toContain('Add Message Resource');
        let valueofremovefield = await this.page.locator("//span[contains(@class,'toolbar-action volante-remove-icon theia-mod-disabled')]").getAttribute('title');
        expect(valueofremovefield).toContain('Remove Selected Field(s)');
        let valueofmoveup = await this.page.locator("//span[contains(@class,'toolbar-action volante-move-up-icon fa fa-arrow-up theia-mod-disabled')]").getAttribute('title');
        expect(valueofmoveup).toContain('Move Selection Up Ctrl+Shift+Up');
        let valueofmovedown = await this.page.locator("//span[contains(@class,'toolbar-action volante-down-icon fa fa-arrow-down theia-mod-disabled')]").getAttribute('title');
        expect(valueofmovedown).toContain('Move Selection Down Ctrl+Shift+Down');
        let valueofmoveleft = await this.page.locator("//span[contains(@class,'toolbar-action volante-move-left-icon fa fa-arrow-left theia-mod-disabled')]").getAttribute('title');
        expect(valueofmoveleft).toContain('Move Selection Left Ctrl+Shift+Left');
        let valueofmoveright = await this.page.locator("//span[contains(@class,'toolbar-action volante-move-right-icon fa fa-arrow-right theia-mod-disabled')]").getAttribute('title');
        expect(valueofmoveright).toContain('Move Selection Right Ctrl+Shift+Right');
        let valueofeditvalue = await this.page.locator("//span[contains(@class,'toolbar-action volante-edit-icon')]").getAttribute('title');
        expect(valueofeditvalue).toContain('Edit Value');
        let valueofcustomizelocale = await this.page.locator("//span[contains(@class,'toolbar-action volante-customize-locale-icon')]").getAttribute('title');
        expect(valueofcustomizelocale).toContain('Customize Locales');
        let valueofdefault = await this.page.locator("(//div[contains(@class,'volante__value-container volante__value-container--has-value css-9b2ez1')])[1]").getAttribute('title');
        expect(valueofdefault).toContain('Default');
    }
    async columnName(){
        let resourcecolumnname = await this.page.getByText('Resource Name').textContent();
        expect(resourcecolumnname).toContain('Resource Name');
        let typecolumnname = await this.page.getByText('Type').textContent();
        expect(typecolumnname).toContain('Type');
        let listcolumnname = await this.page.getByText('List').textContent();
        expect(listcolumnname).toContain('List');
        let valuecolumnname = await this.page.getByText('Value').textContent();
        expect(valuecolumnname).toContain('Value');
        //let descriptioncolumnname = await this.page.getByText('Description').textContent();
        let descriptioncolumnname = await this.page.locator("(//div[contains(@class,'volante-header-content')])[6]").textContent({});
        expect(descriptioncolumnname).toContain('Description');
        await this.page.locator("(//div[contains(@class,'volante-header-content')])[6]").click({button: "right"});
        await this.page.getByText('Detailed Name').click();
        let detailedcolumnname = await this.page.locator("(//div[contains(@class,'volante-header-content')])[7]").textContent({});
        //let detailedcolumnname = await this.page.getByText('Detailed Name').textContent();
        expect(detailedcolumnname).toContain('Detailed Name');
        }
        async customizeLocalesDialogBox()
        {
            await this.page.locator("//span[contains(@class,'toolbar-action volante-customize-locale-icon')]").click();
            //await expect(this.page.locator('.dialogBlock >>nth=-1')).toHaveScreenshot('customizelocale.png');
            //await expect(screenshot).toHaveScreenshot('customizelocale.png');
            //await this.page.screenshot({ path: 'customizelocale.png' });
            //await this.page.locator('.dialogBlock >>nth=-1').toHaveScreenshot('customizelocale.png');
            let titlename = await this.page.getByText('Available Locales').textContent();
            expect(titlename).toContain('Available Locales');
            let valueofaddlocale = await this.page.locator("(//span[contains(@class,'toolbar-action volante-normalized-format-add-field-icon')])[2]").getAttribute('title');
            expect(valueofaddlocale).toContain('Add Locale');
            let valueofremovelocale = await this.page.locator("(//span[contains(@class,'toolbar-action volante-remove-icon theia-mod-disabled')])[2]").getAttribute('title');
            expect(valueofremovelocale).toContain('Remove Selected Locale(s)');
            let valueofmoveuplocale = await this.page.locator("(//span[contains(@class,'toolbar-action volante-move-up-icon fa fa-arrow-up theia-mod-disabled')])[2]").getAttribute('title');
            expect(valueofmoveuplocale).toContain('Move Selection Up Ctrl+Shift+Up');
            let valueofmovedownlocale = await this.page.locator("(//span[contains(@class,'toolbar-action volante-down-icon fa fa-arrow-down theia-mod-disabled')])[2]").getAttribute('title');
            expect(valueofmovedownlocale).toContain('Move Selection Down Ctrl+Shift+Down');
            await expect (this.page.locator("(//span[contains(@class,'toolbar-action volante-normalized-format-add-field-icon')])[2]")).toBeVisible();
            let removelocale = await this.page.getByTitle('Remove Selected Locale(s)').getAttribute('class');
            expect(removelocale).toContain('theia-mod-disabled');
            let moveuplocale = await this.page.locator('.available-locale .toolbar-action >>nth=3').getAttribute('class');
            expect(moveuplocale).toContain('theia-mod-disabled');
            let movedownlocale = await this.page.locator('.available-locale .toolbar-action >>nth=-1').getAttribute('class');
            expect(movedownlocale).toContain('theia-mod-disabled');
            let language = await this.page.getByText('Language').textContent();
            expect(language).toContain('Language');
            let country = await this.page.getByText('Country').textContent();
            expect(country).toContain('Country');
            let variant = await this.page.getByText('Variant').textContent();
            expect(variant).toContain('Variant');
            let ok = await this.page.getByRole('button', { name: 'OK' }).textContent();
            expect(ok).toContain('OK');
            let cancel = await this.page.getByRole('button', { name: 'Cancel' }).textContent();
            expect(cancel).toContain('Cancel');
            let help = await this.page.getByRole('button', { name: 'Help' }).textContent();
            expect(help).toContain('Help');
            await this.page.locator("(//span[contains(@class,'toolbar-action volante-normalized-format-add-field-icon')])[2]").click();
            let textboxenglish = await this.page.getByRole('gridcell', { name: 'English' }).textContent();
            expect(textboxenglish).toContain('English');
            let textboxlang= await this.page.locator("(//div[contains(@class,'volante__single-value css-11918o5-singleValue')])[1]").textContent();
            expect(textboxlang).toContain('English');
            await this.page.locator('.dialogBlock .volante__indicators .css-8mmkcg >>nth=1').click();
            //const dropdown = await this.page.locator("//div[contains(@class,'volante__menu-list css-tegnl5')]");
            //await dropdown.selectOption({label: 'United States'});
            await this.page.locator("//input[contains(@class,'searchable-input theia-input')]").fill('United States');
            await this.page.getByText('United States').click();
            await this.page.getByRole('button', { name: 'OK' }).click({delay:1000});
            await this.page.locator('.volante__indicators .css-8mmkcg >>nth=0').click({delay:2000});
            await this.page.locator('#react-select-3-option-1').getByText('English (United States)').click({delay:2000});
            //await this.page.pause()
            //let value =await this.page.locator("//div[contains(@class,'volante__single-value css-15iypza-singleValue')]").textContent();
            //expect(value).toContain('English (United States');
        }
        async addNewField()
        {
            await this.page.getByTitle('Add New Field').click();
            await this.page.locator('.volante-table .volante-table-cell-container >>nth=-1').dblclick();
            let value = await this.page.locator("//span[contains(@class,'indent-cell-value')]").textContent();
            expect(value).toContain('New Resource');
            let type = await this.page.getByText('String').textContent();
            expect(type).toContain('String');
            expect (await this.page.locator("//input[contains(@class,'theia-input volante-input volante-flex-grow')]").isChecked()).toBeFalsy();
            await this.page.locator('div:nth-child(5) > .volante-table-cell > .volante-table-cell-container').dblclick();
            await this.page.getByText('...').click();
            //await this.page.getByTitle('Browse').click({delay: 50000});
            await this.page.screenshot({ path: 'edit.png' });
            let edittitle = await this.page.locator('#resource-value-component').getByText('Edit').textContent();
            expect(edittitle).toContain('Edit');
            await this.page.locator('.dialogContent .volante-textarea').fill('test');
            let editcancel = await this.page.getByRole('button', { name: 'Cancel' }).textContent();
            expect(editcancel).toContain('Cancel');
            let editok = await this.page.getByRole('button', { name: 'OK' }).textContent();
            expect(editok).toContain('OK');
            await this.page.getByRole('button', { name: 'OK' }).click();
            await this.page.locator('.volante-table .volante-table-cell-container >>nth=6').dblclick();
            await this.page.getByRole('textbox').fill('testdescription');
            }
            async addNewSection()
            {
                await this.page.getByTitle('Add New Section').click();
                //await this.page.getByRole('rowgroup', { name: 'grid' }).click();
                await this.page.locator('.volante-table .volante-table-cell-container >>nth=-1').dblclick();
                let value = await this.page.locator("(//span[contains(@class,'indent-cell-value')])[2]").textContent();
                expect(value).toContain('New Section');
                let type = await this.page.locator('.volante-table .volante-table-cell-container .volante-flex-col >>nth=7').textContent();
                expect(type).toContain('Section');
            }
            async MessageResourceDialogBox()
            {
                await this.page.getByTitle('Add Message Resource').click();
                await this.page.screenshot({ path: 'newmessageresource.png' });
                let titlename = await this.page.getByText('New Message Resource').textContent();
                expect(titlename).toContain('New Message Resource');
                let details = await this.page.locator("(//span[contains(@class,'p-fieldset-legend-text')])[3]").textContent();
                expect(details).toContain('Details');
                await expect(this.page.locator("(//label[contains(@class,'volante-label')])[4]")).toHaveText('Resource Name');
                await this.page.locator('.dialogBlock .volante-fieldset .theia-input >>nth=0').fill('testmessageresource');
                await expect(this.page.locator("(//label[contains(@class,'volante-label')])[5]")).toHaveText('Message');
                await expect(this.page.locator('.dialogBlock  .css-11918o5-singleValue')).toHaveText('CurrencyCode');
                await expect(this.page.locator("(//label[contains(@class,'volante-label')])[6]")).toHaveText('List');
                await this.page.locator('.dialogBlock .volante-fieldset .theia-input >>nth=1').click();
                let savein = await this.page.getByText('Save in').textContent();
                expect(savein).toContain('Save in');
                let cartridge = await this.page.getByText('Cartridge').first().textContent();
                expect(cartridge).toContain('Cartridge');
                let externalfile = await this.page.getByText('External File').first().textContent();
                expect(externalfile).toContain('External File');
                await this.page.getByText('External File').first().click();
                await expect(this.page.locator("(//label[contains(@class,'volante-label')])[7]")).toHaveText('Save as');
                let xml = await this.page.locator('.dialogBlock .volante__input-container .volante__input >>nth=-1').getAttribute('value')
                expect(xml).toContain('XML');
                await expect(this.page.locator("(//label[contains(@class,'volante-label')])[8]")).toHaveText('External File');
                await this.page.getByText('...').click();
                let header = await this.page.getByText('Choose File').textContent();
                expect(header).toContain('Choose File');
                await this.page.locator('.dialogBlock .theia-TreeNodeSegment >>nth=2').click();
                await this.page.locator('.dialogBlock .theia-TreeNodeSegment >>nth=5').click();
                //await this.page.getByText('external_code_sampletest.xml').dblclick();
                await this.page.locator('#theia-dialog-shell').getByRole('button', { name: 'OK' }).click();
            //await this.page.locator('.dialogBlock .volante-fieldset .theia-input >>nth=-1').fill('/projects/ResourceUI/ExternalFiles/external_code_sampletest.xml');
                let cancel = await this.page.getByRole('button', { name: 'Cancel' }).textContent();
                expect(cancel).toContain('Cancel');
                let ok = await this.page.getByRole('button', { name: 'OK' }).textContent();
                expect(ok).toContain('OK');
                let help = await this.page.getByRole('button', { name: 'Help' }).textContent();
                expect(help).toContain('Help');
                await this.page.getByRole('button', { name: 'OK' }).click({delay:2000});
                await this.page.getByRole('rowgroup', { name: 'grid' }).click();
                await this.page.locator('#theia-main-content-panel svg').click({delay:3000})
                await this.page.getByText('Default').click()
                //await this.page.getByRole('gridcell', { name: 'testmessageresource Message Variable testmessageresource Type : CurrencyCode Presence : Optional, Repeatable' }).locator('span').first().click();
                

            }
            async editValuesDialogBox()
            {
                await this.page.locator("//span[contains(@class,'indent-cell-value')]").filter({hasText: 'New Resource'}).click();
                await this.page.locator("//span[contains(@class,'toolbar-action volante-edit-icon')]").click();
                //await this.page.getByTitle('Edit Value').click();
                await this.page.screenshot({ path: 'editvalues.png' });
                let titlename = await this.page.getByText('Edit Values - New Resource').textContent();
                expect(titlename).toContain('Edit Values - New Resource');
                let locale = await this.page.getByText('Locale').textContent();
                expect(locale).toContain('Locale');
                let values = await this.page.getByRole('row', { name: 'Locale Value' }).getByText('Value').textContent();
                expect(values).toContain('Value');
                let English = await this.page.getByRole('gridcell', { name: 'English (United States)' }).getByText('English (United States)').textContent();
                expect(English).toContain('English (United States)');
                let test = await this.page.getByRole('row', { name: 'English (United States) test' }).getByText('test').textContent();
                expect(test).toContain('test');
                let cancel = await this.page.getByRole('button', { name: 'Cancel' }).textContent();
                expect(cancel).toContain('Cancel');
                let ok = await this.page.getByRole('button', { name: 'OK' }).textContent();
                expect(ok).toContain('OK');
                let help = await this.page.getByRole('button', { name: 'Help' }).textContent();
                expect(help).toContain('Help');
                await this.page.getByRole('button', { name: 'OK' }).click({delay:2000});

            }
            async addNewMessageResource()
            {
                
                await this.page.locator('.volante-table .volante-table-cell-container >>nth=19').dblclick({delay:5000});
                let value = await this.page.locator("(//span[contains(@class,'indent-cell-value')])[2]").textContent();
                 expect(value).toContain('testmessageresource');
                 let type = await this.page.locator('.volante-table .volante-table-cell-container >>nth=10').textContent();
                 expect(type).toContain('CurrencyCode');
                 expect (await this.page.locator("(//input[contains(@class,'theia-input volante-input volante-flex-grow')])[2]").isChecked()).toBeTruthy();
                 await this.page.locator('.volante-table .volante-table-cell-container .volante-flex-col  >>nth=8').dblclick({delay:5000});
                 await this.page.locator('.volante-textarea  >>nth=-1').click()
                 await this.page.getByText('...').click({delay: 5000});
                 //await this.page.pause();
                 //await this.page.waitForTimeout(15000);
                 //let title = await this.page.getByText('CurrencyCodeList').textContent();
                 let title = await this.page.locator("//div[text()='CurrencyCodeList']").textContent();
                 expect(title).toContain('CurrencyCodeList');
                 let title1 = await this.page.getByText('Enter Message').first().textContent();
                 expect(title1).toContain('Enter Message');
                 let desc = await this.page.getByText('Enter the message using the UI below. You can add new elements or navigate through the elements of a repeating section using the toolbar. The entered message is stored in specified format.').first().textContent();
                 expect(desc).toContain('Enter the message using the UI below. You can add new elements or navigate through the elements of a repeating section using the toolbar. The entered message is stored in specified format.');
                 //let header = await this.page.getByText('CurrencyCode').first().textContent();
                let header = await this.page.locator('span').filter({ hasText: 'CurrencyCode' }).textContent();
                 expect(header).toContain('CurrencyCode');
                 let code1 = await this.page.locator('.dialogBlock .segment-children .volante-label >>nth=0').textContent();
                 expect(code1).toContain('CURRENCY CODE (String)');
                 let name1 = await this.page.locator('.dialogBlock .segment-children .volante-label >>nth=1').textContent();
                 expect(name1).toContain('CURRENCY NAME (String)');
                 let tooltip = await this.page.locator("//span[contains(@class,'volante-add-icon')]").getAttribute('title');
                 expect(tooltip).toContain('Add New Element');
                 let tooltip1 = await this.page.locator("//span[contains(@class,'volante-delete-icon')]").getAttribute('title');
                 expect(tooltip1).toContain('Delete Current Element');
                 let element = await this.page.getByText('1/1').textContent();
                 expect(element).toContain('1/1');
                 //await this.page.pause();
                 let valueofcode = await this.page.locator('.dialogBlock .segment-children .theia-input >> nth=0').getAttribute('value');
                 expect(valueofcode).toContain('INR');
                 let valueofname = await this.page.locator('.dialogBlock .segment-children .theia-input >> nth=1').getAttribute('value');
                 //let valueofcode1 = await this.page.locator('input[name="CURRENCY CODE \\(String\\)"]').getAttribute('title')
                 expect(valueofname).toContain('Rupee');
                 await this.page.getByTitle('Add New Element').click();
                 let element1 = await this.page.getByText('2/2').textContent();
                 expect(element1).toContain('2/2');
                 await this.page.locator("(//span[contains(@class,'volante-delete-icon')])[2]").click();
                 let index = await this.page.getByText('Indexes').textContent();
                 expect(index).toContain('Indexes');
                 let savein = await this.page.getByText('Save in').textContent();
                 expect(savein).toContain('Save in');
                 let cartridge = await this.page.getByText('Cartridge').first().textContent();
                 expect(cartridge).toContain('Cartridge');
                 let externalfile = await this.page.getByText('External File').first().textContent();
                 expect(externalfile).toContain('External File');
                 await this.page.getByText('External File').first().click();
                 await expect(this.page.locator("(//label[contains(@class,'volante-label')])[7]")).toHaveText('Save As');
                 let xml = await this.page.locator('.dialogBlock .volante__single-value').textContent();
                 expect(xml).toContain('XML');
                 await expect(this.page.locator("(//label[contains(@class,'volante-label')])[8]")).toHaveText('External File');
                 let value1 = await this.page.locator("(//input[contains(@class,'theia-input volante-input -field')])[7]").getAttribute('value');
                 expect(value1).toContain('${cartridge.home}/ExternalFiles/external_code_synctest.xml');
                 let cancel = await this.page.getByRole('button', { name: 'Cancel' }).textContent();
                expect(cancel).toContain('Cancel');
                let ok = await this.page.getByRole('button', { name: 'OK' }).textContent();
                expect(ok).toContain('OK');
                let help = await this.page.getByRole('button', { name: 'Help' }).textContent();
                expect(help).toContain('Help');
                await this.page.getByRole('button', { name: 'OK' }).click();
                //await this.page.pause();
            }
            async moveSelection()
            {   
                await this.page.locator('span').filter({ hasText: 'testmessageresource' }).click();
                await this.page.getByTitle('Move Selection Down Ctrl+Shift+Down').click();
                await this.page.getByTitle('Move Selection Right Ctrl+Shift+Right').click();
                await this.page.getByTitle('Move Selection Left Ctrl+Shift+Left').click();
                await this.page.getByTitle('Move Selection Up Ctrl+Shift+Up').click();
            }
            async deleteSelectedFields()
            {
                await this.page.getByTitle('Remove Selected Field(s)').click();
                let title = await this.page.getByText('Delete Selection? ').textContent();
                expect(title).toContain('Delete Selection? ');
                await this.page.getByText('Yes').click();
                
                
            }


} 