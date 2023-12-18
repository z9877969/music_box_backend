const { controllerWrapper } = require("../decorators");

const getArtists = async (req, res) => {
  res.json("getArtists");
};

module.exports = {
  getArtists: controllerWrapper(getArtists),
};
