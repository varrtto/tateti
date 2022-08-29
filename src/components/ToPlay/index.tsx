import gameStore from "../../state";
import Circle from "../Svgs/Circle";
import Cross from "../Svgs/Cross";

import styles from "./ToPlay.module.css";

const ToPlay = () => {
  const { turn } = gameStore();
  return (
    <div className={styles.toPlayWrapper}>
      {turn ? <Circle small /> : <Cross small />}
      <p>TO PLAY</p>
    </div>
  );
};

export default ToPlay;
