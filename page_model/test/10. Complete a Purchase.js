/** 
 * AUTHOR: MALINALI CABRERA
 * WIZELINE ASSESMENT 1
 * Test Script: 10: Complete a Purchase
 * **/
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CheckOutPage from '../pages/CheckOutPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import {CREDENTIALS} from '../data/Constants'



fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('10: Complete a Purchase', async t =>{
    
   
    await t.expect(ProductPage.productLabel.exists).ok()
    await ProductPage.addMultipleItemToShoppingCart()
    await ProductPage.navigateToShoppingCart()
    await t.expect(ProductPage.yourCartLabel.exists).ok()
    await t.expect(ProductPage.inventoryItemName.exists).ok()
    await ProductPage.checkOut()
    await CheckOutPage.fillUserInfo(CREDENTIALS.USER_INFO.FIRSTNAME, CREDENTIALS.USER_INFO.LASTNAME, CREDENTIALS.USER_INFO.POSTALCODE)
    await t.expect(OverviewPage.addedItem_BackPack.exists).ok()
    await t.expect(OverviewPage.addedItem_Bike.exists).ok()
    await t.expect(OverviewPage.addedItem_tShirt.exists).ok()
    await OverviewPage.navigateToConfirmationPage()
    await t.expect(ConfirmationPage.finishLabel.exists).ok()
})




