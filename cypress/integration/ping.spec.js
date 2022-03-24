/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
  it('GET Healthcheck', () => {
    req.getPing().then(getPingResponse => {
      assertions.shouldHaveStatus(getPingResponse, 201)
    })
    
    // cy.request -> response -> body, status, headers, etc...
    // .its() -> define a propriedade a ser "usada"
  })
})