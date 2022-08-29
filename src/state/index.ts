import create from "zustand";
import { haveAWinner, showConfetti, isADraw } from "../utils";

type State = {
  grid: number[][];
  turn: boolean;
  winner?: number;
  isDraw: boolean;
};

type Actions = {
  toggleTurn: () => void;
  setWinner: (newWinner: number) => void;
  setGrid: (newGrid: number[][]) => void;
  createNewGame: () => void;
  playMove: (x: number, y: number) => void;
  setIsDraw: () => void;
};

const initialState = {
  grid: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  turn: false,
  winner: undefined,
  isDraw: false,
};

const gameStore = create<State & Actions>((set) => ({
  ...structuredClone(initialState),
  toggleTurn: () => set((state) => ({ turn: !state.turn })),
  setWinner: (newWinner: number) => set(() => ({ winner: newWinner })),
  setGrid: (newGrid: number[][]) => set(() => ({ grid: newGrid })),
  createNewGame: () => set(initialState),
  setIsDraw: () => set(() => ({ isDraw: true })),
  playMove: (x, y) =>
    set((state) => {
      const { grid, winner, turn, setGrid, toggleTurn, setWinner, setIsDraw } =
        state;
      if (grid[x][y] !== 0 || winner !== undefined)
        return structuredClone(state);
      const newGrid = structuredClone(grid);
      newGrid[x][y] = turn ? 1 : 2;
      setGrid(newGrid);
      console.log({ empate: isADraw(newGrid) });
      if (haveAWinner(newGrid)) {
        setWinner(turn ? 1 : 2);
        showConfetti();
      } else if (isADraw(newGrid)) {
        setIsDraw();
      } else {
        toggleTurn();
      }

      return structuredClone(state);
    }),
}));

export default gameStore;
