import { useState } from "react";
import { sum, genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningSum }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = sum(ticket) === winningSum;

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="Lottery">
      <h1>🎟️ Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      {isWinning && <h3 className="winner">🎉 Congratulations, You Won! 🎉</h3>}
    </div>
  );
}
