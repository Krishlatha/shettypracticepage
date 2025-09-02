import TestloginPage from "../page/TestloginPage";

describe('landingPage',()=>{
    let Testlogindata

    beforeEach(()=>{
        cy.fixture('Testlogindata.json').then((mydata)=>{
            Testlogindata = mydata
        })
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
 
    it('should select a radio button', () => {
        TestloginPage.selectRadio(Testlogindata.radioButton)
    })

    // it.skip('suggession class',()=>{
    //     TestloginPage.seletCountryName(Testlogindata.typeToSelectCountry)

    // })

    it('select dropdown option',()=>{
        TestloginPage.selectOption(Testlogindata.dropDownOption)

    })

    it('should check a checkbox', ()=>{
        TestloginPage.selectCheckbox(Testlogindata.checkBox)
    })    

    it('should verify alert popup', () => {
        TestloginPage.triggerAlert()
    })







})

















































