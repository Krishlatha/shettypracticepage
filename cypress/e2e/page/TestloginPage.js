class TestloginPage {

    
    // Getter method to access the first radio button using its value attribute
    get clickRadioButton() { return cy.get('input[value="radio1"]'); }

    // Getter method to access the country input field using its placeholder attribute
    get typeCountyName() { return cy.get('input[class="inputs ui-autocomplete-input"]'); }

    // Getter method to access the dropdown menu using its ID attribute
    get selectDropDown() { return cy.get('select[id="dropdown-class-example"]');}

    // Getter method to access the checkbox with ID 'checkBoxOption1'
    get option1Checkbox() { return cy.get('input[id="checkBoxOption1"]');}

    // Getter method to access the input field for entering a name using its ID attribute
    get enterName() { return cy.get('input[id="name"]');}
    
    // Getter method to access the alert button using its ID attribute
    get alertButton() { return cy.get('input[id="alertbtn"]');}

    // Getter method to access the confirmation button using its ID attribute
    get confirmButton() { return cy.get('input[id="confirmbtn"]');}

    // Getter method to access the mouse hover button using its ID attribute
    get clickMouseHover() { return cy.get('div[class="mouse-hover"]');}
    

     get topOption() { return cy.get('a[href="#top"]');}

    

//Function will start from below

    selectRadio(data) {
        this.clickRadioButton.check(data);
    }

    // selectCountrydropdown(countryName) {
    //     cy.selectDropdown(this.typeCountyName.countryName)
    // }

    selectOption(data) {
        this.selectDropDown.select(data);
    }

    selectCheckbox(data) {
        this.option1Checkbox.check(data);
    }

    triggerAlert() {
        this.alertButton.click();   
        // cy.get('#alertbtn').click();  
    }

     triggerConfirm(data) {
        this.confirmButton.click(data);
    }

      selectMouseHover(data) {
        this.clickMouseHover.check(data);
    }
    








}
export default new TestloginPage();