import styles from "./App.module.css";
import Cell from "./components/Cell";
import Draw from "./components/Draw";
import ToPlay from "./components/ToPlay";
import Winner from "./components/Winner";
import gameStore from "./state";

function App() {
  const { winner, isDraw } = gameStore();

  return (
    <div className={styles.main}>
      {winner !== undefined && <Winner />}
      {winner === undefined && !isDraw && <ToPlay />}
      {isDraw && <Draw />}
      <div className={styles.row}>
        <Cell x={0} y={0} />
        <Cell x={0} y={1} />
        <Cell x={0} y={2} />
      </div>
      <div className={styles.row}>
        <Cell x={1} y={0} />
        <Cell x={1} y={1} />
        <Cell x={1} y={2} />
      </div>
      <div className={styles.row}>
        <Cell x={2} y={0} />
        <Cell x={2} y={1} />
        <Cell x={2} y={2} />
      </div>
    </div>
  );
}

export default App;
