const { v4: uuidv4  } = require('uuid');


class Ticket {
  constructor(numberLast){
    this.id = uuidv4(),
    this.number = numberLast;
    this.escritorio = null;
    this.agente = null;
  }
}


module.exports = Ticket;