const TicketList = require("./ticket-list");

class Sockets {
  constructor(io){
    this.io = io;
    this.socketEvents();
    this.ticketList = new TicketList();
  }
//comentario
  socketEvents(){
    //On connection
    this.io.on('connection', ( socket ) => {
      socket.on('solicitar-ticket', (data, callback)=>{
        const nuevoTicket = this.ticketList.crearTicket();
        callback(nuevoTicket);
      });
      socket.on('siguiente-ticket-trabajar', ({agente, escritorio}, callback)=>{
        const suticket = this.ticketList.asignarTicket(agente, escritorio);
        callback(suticket);

        this.io.emit('ticket-asignado', this.ticketList.ultimos13);
      });
      
    });
    
  }
}

module.exports = Sockets;