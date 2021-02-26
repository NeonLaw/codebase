export const getBrowser = () => {
  const userAgent =
    typeof window !== undefined ? window.navigator.userAgent : '';
  const browsers = ['Opera', 'Chrome', 'Firefox', 'IE'];
  let browser;

  browsers.forEach((b) => {
    if (userAgent.indexOf(b) !== -1) {
      browser = b;
    }
  });

  return browser;
};
