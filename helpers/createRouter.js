const { Router } = require("express");

class RouterCreator {
  #options;
  #commonMiddlewares;
  #router;

  constructor({ options, commonMiddlewares = [] }) {
    this.#router = Router();
    this.#options = options;
    this.#commonMiddlewares = commonMiddlewares;
  }

  get router() {
    return this.#router;
  }

  setRouter() {
    this.#options.forEach(({ route, method, controller, middlewares }) => {
      if (!route || !method || !controller) return;
      const dm = this.#commonMiddlewares;
      const m =
        middlewares && dm.length
          ? dm.concat(middlewares)
          : middlewares
          ? middlewares
          : dm.length
          ? dm
          : null;
      m
        ? this.#router[method](route, ...m, controller)
        : this.#router[method](route, controller);
    });
  }
}

const createRouter = ({ options, commonMiddlewares }) => {
  return new RouterCreator({ options, commonMiddlewares });
};

module.exports = createRouter;
