const { expect,test } = require('@playwright/test');
exports.CartridgeFunction = class CartridgeFunction
{
    constructor(page){
        this.page=page;
    }
    async expandDirectory(dirName)
    {
        await this.page.locator("//div[text()='"+dirName+"']/preceding-sibling::div[2]").click()    
    }
    async openCartridge(cartridgeName)
    {
        await this.page.locator("//div[text()='"+cartridgeName+"']").dblclick()
    }
    async expandCartridge(cartridgeName)
    {
        await this.page.locator("//div[text()='"+cartridgeName+"']/preceding-sibling::div[2]").click()
    }
    async newCartridge(dirName,cartridgeName)
    {
        await this.page.locator('//div[text()='+dirName+']').click({ button: 'right' });
        await this.page.locator('//li/*[text()="New Cartridge"]').click()
        let cartridgeDialogBox = await this.page.locator('//div[contains(@class,"dialogBlock")]')
        expect(await cartridgeDialogBox.$('//div[contains(@class,"dialogTitle")]')).toHaveTitle('New Cartridge')
        expect(await cartridgeDialogBox.$('(//label[contains(@class,"volante-label")])[1]')).toHaveText('New Cartridge')
        expect(await cartridgeDialogBox.$('(//input[contains(@class,"volante-input")])[1]')).toHaveValue(dirName)
        await cartridgeDialogBox.$('(//input[contains(@class,"volante-input")])[1]').fill(cartridgeName)
        expect(await cartridgeDialogBox.$('(//label[contains(@class,"volante-label")])[2]')).toHaveText('Cartridge Location')
        expect(await cartridgeDialogBox.$('(//input[contains(@class,"volante-input")])[2]')).toBeDisabled()
        await cartridgeDialogBox.$("(//div[contains(@class,'dialogControl')])/button[1]").toHaveText("OK")
        await cartridgeDialogBox.$("(//div[contains(@class,'dialogControl')])/button[2]").toHaveText("Cancel")
        await cartridgeDialogBox.$("(//div[contains(@class,'dialogControl')])/button[3]").toHaveText("Help")
        await cartridgeDialogBox.$("(//div[contains(@class,'dialogControl')])/button[1]").click()
    }
}