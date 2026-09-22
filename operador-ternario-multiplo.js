let quartosDisponiveis = 5;
let reservaConfimada = true;

let statusReserva = (reservaConfimada && quartosDisponiveis >0) ? "reserva confirmada"
                    :(quartosDisponiveis >0) ? "Aguardo confirmação"
                    :"Sem quartos disponiveis"

console.log(statusReserva); //Saida:"Reserva confirmada"