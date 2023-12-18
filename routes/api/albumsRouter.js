const { createRouter } = require("../../helpers");

const albumsRouter = createRouter({
  options: [
    {
      route: "/",
      method: "get",
      controller: (req, res, next) => {
        res.json("albumsRouter.get");
      },
      middlewares: null,
    },
  ],
});

albumsRouter.setRouter();

module.exports = albumsRouter.router;
