const path = require("path");
const fs = require("fs");
const chokidar = require("chokidar");

let context = [];
let mockDir = path.resolve("./mock");
// 批量加载mock目录下面的数据
function getMock() {
  const files = fs.readdirSync(mockDir, { encoding: "utf8" });
  context = files.map((item) => {
    const ctx = require(`${mockDir}/${item}`);
    return ctx;
  });
}
// 注册mock数据路由
function registerRoutes(app) {
  let count = 0;
  context.forEach((item) => {
    let { url, method = "get", data } = item || {};
    const reg = /^\//;
    if (!reg.test(url)) {
      url = `/${url}`;
    }
    app[method](`${url}`, function (_, res) {
      res.send(data);
    });
    count++;
  });
  return {
    start: app._router.stack.length - count,
    count,
  };
}
// 清除路由缓存
function removeRegisterRoutes() {
  Object.keys(require.cache).forEach((item) => {
    if (item.includes(mockDir)) {
      delete require.cache[require.resolve(item)];
    }
  });
}
module.exports = function (middlewares, devServer) {
  const mode = process.argv.slice(2)[process.argv.slice(2).length - 1];
  if (!devServer) {
    throw new Error("webpack-dev-serve is not defined");
  }
  if (mode === "dev") {
    return middlewares;
  }
  let app = devServer.app;
  getMock();
  let { start, count } = registerRoutes(app);
  chokidar.watch(mockDir, {}).on("all", (event) => {
    if (event === "change" || event === "add") {
      console.log(event, 1212);

      // 清除之前注册的路由
      app._router.stack.splice(start, count);
      removeRegisterRoutes();
      //重新注册
      getMock();
      const stack = registerRoutes(app);
      start = stack.start;
      count = stack.count;
    }
  });
  return middlewares;
};
