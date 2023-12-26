
/// <reference types="cypress" />
import { MainPage } from '../page-objects/MainPage'
import { ExamplePage } from '../page-objects/ExamplePage'
import { CheckPage, Example1Page } from '../page-objects/CheckPage'



describe('shifting content', () => { 
    const mainPage = new MainPage()
    const examplePage = new ExamplePage()
    const CheckPage = new Example1Page()


    beforeEach(() => {
        mainPage.navigate()
        mainPage.clickShifting()
    })

it('A page contains 5 elements', ()=>{
    
    examplePage.clickExample()
    CheckPage.checkElements('5')




})

})