const padToTwo = number => (number <= 9 ? `0${number}` : number);

export const displayTime = centiseconds => {
  let minutes = 0;
  let seconds = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  }

  if (centiseconds < 100) {
    return `00:00:${padToTwo(centiseconds)}`;
  }

  let remainingCenti = centiseconds % 100;
  seconds = centiseconds - remainingCenti;

  if (seconds < 60) {
    return `00:${padToTwo(seconds)}:${padToTwo(remainingCenti)}`;
  }

  let remainingSec = seconds % 60;
  minutes = (seconds - remainingSec) / 60;

  return `${padToTwo(minutes)}:${padToTwo(remainingSec)}:${remainingCenti}`;
};
