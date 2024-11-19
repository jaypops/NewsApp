let lastCall = 0;

export const rateLimitedFetch = async (url) => {
  const now = Date.now();
  const timeSinceLastCall = now - lastCall;
  const waitTime = 1000 - timeSinceLastCall;

  if (waitTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  lastCall = Date.now();
  return fetch(url);
};
