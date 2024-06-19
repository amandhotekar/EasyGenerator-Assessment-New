// /<reference types= "cypress-iframe" />
import 'cypress-iframe'

const { default: Methods } = require("../../support/methods.cy")


describe('Testcases for Dropdown options', () => {

    const methods = new Methods()

    it('Click on Dropdown Option 1', () => {
        cy.visit()
        methods.getDropdown().click()
        methods.getDropdown_Option1().click()
    })
    
    it('Click on Dropdown Option 2', () => {
        cy.visit()
        methods.getDropdown().click()
        methods.getDropdown_Option2().click()
    })

    it('Click on Dropdown Option 3', () => {
        cy.visit()
        methods.getDropdown().click()
        methods.getDropdown_Option2().click()
    })
})


describe('Testcase to upload image', () => {

    const methods = new Methods()

    it('Upload image', () => {
    
        cy.visit()
        methods.getUpload_Image().selectFile("C:\\Users\\Aman\\Cypress\\images.jpg")
    })
})

describe('Testcase to open new tab', () => {

    const methods = new Methods()

    it('Open New Tab', () => {
    
        cy.visit()
        methods.getRemoveAttribute().click()
    })

})

describe('Testcase for Alert and Confirm button', () => {

    const methods = new Methods()

    it('Alert button', () => {
    
        cy.visit()
        methods.getAlert_TextBox().type('EasyGenerator')
        methods.getAlert_Button().click()
        methods.getConfirm_Button().click()

        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
        //assertion on alert text whether it is matching or not using event window:confirm
        cy.on('window:confirm', (str)=>
        {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})

describe('Testcases to show/hide the input', () => {

    const methods = new Methods()

    it('Hide the input', () => {
    
        cy.visit()
        methods.getShowHide_TextBox().type('EasyGenerator')
        methods.getHide_Button().click()
    })

    it('Show the input', () => {
    
        cy.visit()
        methods.getShowHide_TextBox().type('EasyGenerator')
        methods.getShow_Button().click()
    })
})

describe('Testcases for Mouse hover', () => {

    const methods = new Methods()

    it('Mouse hover Top', () => {
    
        cy.visit()
        methods.getMouseHover1().trigger('mouseover') //This is one approach to mouse hover
        methods.getMouseHover2().invoke('show') //This is another approach to mouse hover
        methods.getMouseHover_Top().click()
    })


    it('Mouse hover Reload', () => {
    
        cy.visit()
        methods.getMouseHover1().trigger('mouseover') //This is one approach to mouse hover
        methods.getMouseHover2().invoke('show') //This is another approach to mouse hover
        methods.getMouseHover_Reload().click()
    })
})

describe('Testcase for iFrame', () => {

    const methods = new Methods()


it('iFrame Element', () => {
    
        cy.visit()
        methods.getIFrameElement()
    })
})