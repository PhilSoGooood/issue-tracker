export function keyMaker() {
  return Math.random().toString(36).substring(2, 11);
}

export function getNowISOString() {
  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const currentDate = new Date(Date.now() - timezoneOffset);
  const currentDateISOString = currentDate.toISOString().slice(0, -5);
  return currentDateISOString;
}

export function calculateInterval(writeTime: string) {
  const before = new Date(writeTime).getTime();
  const now = new Date().getTime();
  const interval = Math.floor((now - before) / 1000);
  return interval;
}

export function calculatePercent(number: number) {
  const percent = (number * 100).toFixed(2);
  return Number(percent);
}
