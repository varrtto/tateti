import { FC } from "react";
import Circle from "../Svgs/Circle";
import Cross from "../Svgs/Cross";
import gameStore from "../../state";

import styles from "./Cell.module.css";

interface position {
  x: number;
  y: number;
}

const Cell: FC<position> = ({ x, y }) => {
  const { grid, playMove } = gameStore();
  return (
    <div className={styles.cell} onClick={() => playMove(x, y)}>
      {grid[x][y] === 1 ? <Circle /> : grid[x][y] === 2 ? <Cross /> : undefined}
    </div>
  );
};

export default Cell;
