export function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + "hr ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1 && interval < 60) {
    return interval + "min ago";
  }

  return Math.floor(seconds) + "sec ago";
}
