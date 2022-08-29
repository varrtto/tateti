import gameStore from "../../state";
import Circle from "../Svgs/Circle";
import Cross from "../Svgs/Cross";

import styles from "./Winner.module.css";

const Winner = () => {
  const { winner, createNewGame } = gameStore();
  return (
    <div className={styles.winnerWrapper}>
      <div className={styles.winner}>
        <p>THE WINNER IS</p>
        {winner === 2 ? <Cross small /> : <Circle small />}
        <p>!</p>
      </div>
      <button onClick={createNewGame}>NEW GAME!</button>
    </div>
  );
};

export default Winner;
