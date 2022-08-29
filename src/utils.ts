import confetti from "canvas-confetti";

export const haveAWinner = (grid: number[][]) => {
  // rows
  if (
    grid[0][0] !== 0 &&
    grid[0][0] === grid[0][1] &&
    grid[0][1] === grid[0][2]
  )
    return true;
  if (
    grid[1][0] !== 0 &&
    grid[1][0] === grid[1][1] &&
    grid[1][1] === grid[1][2]
  )
    return true;
  if (
    grid[2][0] !== 0 &&
    grid[2][0] === grid[2][1] &&
    grid[2][1] === grid[2][2]
  )
    return true;

  // columns
  if (
    grid[0][0] !== 0 &&
    grid[0][0] === grid[1][0] &&
    grid[1][0] === grid[2][0]
  )
    return true;
  if (
    grid[0][1] !== 0 &&
    grid[0][1] === grid[1][1] &&
    grid[1][1] === grid[2][1]
  )
    return true;
  if (
    grid[0][2] !== 0 &&
    grid[0][2] === grid[1][2] &&
    grid[1][2] === grid[2][2]
  )
    return true;

  // diagnonals
  if (
    grid[0][0] !== 0 &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  )
    return true;
  if (
    grid[2][0] !== 0 &&
    grid[2][0] === grid[1][1] &&
    grid[1][1] === grid[0][2]
  )
    return true;

  return false;
};

export const isADraw = (newGrid: number[][]) => !newGrid.flat().includes(0);

export const showConfetti = () => {
  confetti({
    zIndex: 999,
    particleCount: 120,
    spread: 160,
    angle: 225,
    origin: {
      x: 1,
      y: 0,
    },
  });
  confetti({
    zIndex: 999,
    particleCount: 120,
    spread: 160,
    angle: 315,
    origin: {
      x: 0,
      y: 0,
    },
  });
};
