/// <reference types="cypress" />

import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
  it('Validar o contrato do GET Booking', () => {
    req.getBooking().then(getBookingResponse => {
      assertions.validateContractOf(getBookingResponse, schemas.getBookingSchema())
    })
  })
})