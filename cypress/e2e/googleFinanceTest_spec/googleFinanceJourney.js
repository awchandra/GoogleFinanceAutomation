/// <reference types="Cypress" />
import GoogleFinancePage from "../pageObjects/googleFinancePage";

describe('Google Finance Stock Comparison Journey', function(){
    before(function(){
        cy.fixture('stockData').then(function(data)
        {
            this.data = data
        })
      })
    it('Should search for a stock, view chart, compare values, and copy link', function(){
        const googleFinancePage = new GoogleFinancePage
        //const firstStockValue = googleFinancePage.firstStockChanges()
        //const secondStockValue = googleFinancePage.secondStockChanges()

        cy.viewport(1280, 720)
        // Step 1: Access the Google Finance page
        cy.wait(1000)
        cy.visit('https://www.google.com/finance/')
        googleFinancePage.verifyGoogleFinancePageLoaded()
        // Step 2: Search for a stock (e.g., UNVR)
        googleFinancePage.fillSearchStocks(this.data.stock)
        googleFinancePage.verifySearchResult(this.data.stock)
        // Step 3: View chart in "YTD" (Year-to-Date)
        googleFinancePage.clickYTDTab()
        
        // Step 5: Click the 2nd item in the horizontal share list below the chart
        googleFinancePage.clickSecondItemOnHorizontalList()
        
        // Step 8: Tap on the share button on the top right corner and click "Copy Link"
        googleFinancePage.clickShareButton()
        //googleFinancePage.clickCopyLinkButton()
        // Step 9: Click on the magnifying glass (search) icon on the top right corner
        googleFinancePage.clickClosePopupDialogButton()
        googleFinancePage.clickMagnifyingButton()
        
    })
})