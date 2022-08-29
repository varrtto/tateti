import gameStore from "../../state";
import styles from "./Draw.module.css";

const Draw = () => {
  const { createNewGame } = gameStore();
  return (
    <div className={styles.drawWrapper}>
      <div className={styles.draw}>
        <p>IT'S A DRAW 🥲</p>
      </div>
      <button onClick={createNewGame}>NEW GAME!</button>
    </div>
  );
};

export default Draw;
