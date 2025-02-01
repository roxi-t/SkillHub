const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.access}; max-age=${1 * 24 * 60 * 60}`;
  document.cookie = `refreshToken=${tokens.refresh}; max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
