import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from 'date-fns';

export function countTimePassed(time) {
  const date = new Date(time);
  let difInSeconds = differenceInSeconds(new Date(), date);
  let difInMinutes = differenceInMinutes(new Date(), date);
  let difInHours = differenceInHours(new Date(), date);
  let difInDays = differenceInDays(new Date(), date);
  let counted, unityTime;

  if (difInSeconds < 60) {
    counted = difInSeconds;
    unityTime = 'segundo';
  } else if (difInMinutes < 60) {
    counted = difInMinutes;
    unityTime = 'minuto';
  } else if (difInHours < 24) {
    counted = difInHours;
    unityTime = 'hora';
  } else {
    counted = difInDays;
    unityTime = 'dia';
  }
  if (counted > 1) unityTime += 's';
  return `há ${counted} ${unityTime}`;
}
