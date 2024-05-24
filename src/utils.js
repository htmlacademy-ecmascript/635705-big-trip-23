import { TIME_COUNT, MONTHS } from './const.js';

export const formattedDate = function (originalDate) {
  const date = new Date(originalDate);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

export const formattedFullDate = function (originalDate) {
  const date = new Date(originalDate);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
};

export const formattedTime = function (originalTime) {
  const date = new Date(originalTime);
  const hours = '0'.concat(date.getUTCHours()).slice(-2);
  const minutes = '0'.concat(date.getUTCHours()).slice(-2);
  return `${hours}:${minutes}`;
};

export const eventDuration = function (startTime, endTime) {
  const timeDifference = Math.abs(new Date(endTime) - new Date(startTime));
  const hours = Math.floor(
    timeDifference /
      (TIME_COUNT.MILLISECONDS * TIME_COUNT.SECONDS * TIME_COUNT.MINUTES)
  );
  const minutes = Math.floor(
    (timeDifference %
      (TIME_COUNT.MILLISECONDS * TIME_COUNT.SECONDS * TIME_COUNT.MINUTES)) /
      (TIME_COUNT.MILLISECONDS * TIME_COUNT.SECONDS)
  );
  return hours > 0
    ? `${hours.toString().padStart(2, '0')}H ${minutes
      .toString()
      .padStart(2, '0')}M`
    : `${minutes}M`;
};
