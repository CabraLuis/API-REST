const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp)
  
  it('GET Juego', ()=> { // <= Pass in done callback
    chai.request('http://localhost:3000')
    .get('/juegos')
    .query({id:1})
    .end((err, res) => {
      chai.expect(res).to.have.status(200);    // <= Test completes before this runs
    })
  });