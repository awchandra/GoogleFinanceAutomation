class GoogleFinancePage {
    verifyGoogleFinancePageLoaded(){
        return cy.get('#sdgBod > span.gb_rd.gb_9c').should('have.text', 'Finance')
    }

    clickMagnifyingButton(){
        return cy.get('#gb > div.gb_jd.gb_nd.gb_Ed > div.gb_vd.gb_zd.gb_Le.gb_Ee > div > form > button.gb_Ce > svg').click()
    }

    verifySearchResult(searchText){
        return cy.get('.PdOqHc').should('contain', searchText)
    }

    fillSearchStocks(stockCode) {
        const searchStockTextField = cy.get('#yDmH0d > c-wiz.zQTmif.SSPGKf.ccEnac > div > div.KdK6Xc > div.e1AOyf > div > div > div > div.d1dlne > input.Ax4B8.ZAGvjd')
        searchStockTextField.clear()
        searchStockTextField.type(stockCode).type('{enter}')
        return this
    }

    clickYTDTab() {
        return cy.contains('YTD').click()
    }

    clickHighestYTDPoint() {
        return cy.get('#yDmH0d > c-wiz.zQTmif.SSPGKf.u5wqUe > div > div.e1AOyf > div > main > div.Gfxi4 > div.yWOrNb > div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.QZMA8b > c-wiz > div > div.ushogf > div.hSGhwc').click()
    }

    clickSecondItemOnHorizontalList() {
        return cy.get('[data-mid="/g/1z3tbz4fs"] > .fgdCnd > .cJd7w').click()
    }

    clickHighestTooltipComparison() {
        return cy.get('#yDmH0d > c-wiz.zQTmif.SSPGKf.u5wqUe > div > div.e1AOyf > div > main > div.Gfxi4 > div.yWOrNb > div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.QZMA8b > c-wiz > div > div.ushogf > div.hSGhwc').click()
    }

    firstStockChanges(){
        const stockChanges1 = 0
        cy.get('#yDmH0d > c-wiz.zQTmif.SSPGKf.u5wqUe > div > div.e1AOyf > div > main > div.Gfxi4 > div.yWOrNb > div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.QZMA8b > c-wiz > div > div.mTJqgb > div > div > div > div.AAUifd > div:nth-child(1) > div > div > div.Ur1Cre.bjCJpf > span')
            .then(($span) => {
                stockChanges1 = parseInt($span.text())
            })

        return stockChanges1
    }

    secondStockChanges(){
        const stockChanges2 = 0
        cy.get('#yDmH0d > c-wiz.zQTmif.SSPGKf.u5wqUe > div > div.e1AOyf > div > main > div.Gfxi4 > div.yWOrNb > div.VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.QZMA8b > c-wiz > div > div.mTJqgb > div > div > div > div.AAUifd > div:nth-child(2) > div > div > a > div.Ur1Cre.bjCJpf > span')
            .then(($span) => {
                stockChanges2 = parseInt($span.text())
            })

        return stockChanges2
    }

    clickShareButton(){
        return cy.get('.Tfnqic > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    }

    clickCopyLinkButton(){
        return cy.get('.l47lPd > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click({ position: 'bottomRight', force: true })
    }

    clickClosePopupDialogButton(){
        return cy.get('.XwutFc > .VfPpkd-Bz112c-LgbsSe').click()
    }

    verifyCopyPasteResult(){
        return cy.get('#yDmH0d > c-wiz:nth-child(41) > div > div.e1AOyf > div > main > div.Q2JMWd > div.xJwwl > div.PdOqHc').should('have.text', 'IDX')
    }
}
export default GoogleFinancePage