export const notFound = (req, res) => {
  res.status(404).send(`<h1>⚠️ Route doesn't exist!! ⚠️</h1>`);
};
