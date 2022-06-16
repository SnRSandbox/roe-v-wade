
export const callServer = (urlPath, options) => {
  return fetch(`http://localhost:3001${urlPath}`, options)
    .then((res) => {
      return res.json();
    });
};
