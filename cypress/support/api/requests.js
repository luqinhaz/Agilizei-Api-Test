class Requests {
  getPing(){
    return cy.request({
      method: 'GET',
      url: '/ping'
    })
  }

  getBooking() {
    return cy.request({
      method: 'GET',
      url: 'booking/2',
    })
  }
}

export default new Requests();