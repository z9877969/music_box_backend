const { createRouter } = require("../../helpers");
const { artistsControllers: c } = require("../../controllers");

const artistsRouter = createRouter({
  options: [
    {
      route: "/",
      method: "get",
      controller: c.getArtists,
      middlewares: null,
    },
  ],
});

artistsRouter.setRouter();

module.exports = artistsRouter.router;
