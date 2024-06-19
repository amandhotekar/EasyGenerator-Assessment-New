class Methods
{
    getDropdown(){
        return cy.get('#dropdown-class-example')
    }

    getDropdown_Option1(){
        return cy.get('option[value="option1"]')
    }

    getDropdown_Option2(){
        return cy.get('option[value="option2"]')
    }

    getDropdown_Option3(){
        return cy.get('option[value="option3"]')
    }

    getUpload_Image(){
        return cy.get('input[type="file"]')
    }

    getOpenNewTab(){
        return cy.get('#opentab').invoke('removeAttr','target')
    }

    getAlert_TextBox(){
        return cy.get('#name')
    }

    getAlert_Button(){
        return cy.get('#alertbtn')
    }

    getConfirm_Button(){
        return cy.get('#confirmbtn')
    }

    getHide_Button(){
        return cy.get('#hide-textbox')
    }

    getShow_Button(){
        return cy.get('#show-textbox')
    }

    getShowHide_TextBox(){
        return cy.get('#displayed-text')
    }

    getMouseHover2(){
        return cy.get('.hover-content')
    }

    getMouseHover1(){
        return cy.get('button').contains('Mouse Hover')
    }

    getMouseHover_Top(){
        return cy.get('a').contains('Top')
    }

    getMouseHover_Reload(){
        return cy.get('a').contains('Reload')
    }

    getIFrameElement(){
        return cy.get('#courses-iframe')
    }
}

export default Methods;