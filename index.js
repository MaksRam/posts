const Koa = require("koa");
const app = new Koa();

const router = require("./lib/routes/posts-router");
app.use(router.routes());

app.listen(3000, () =>
  console.log("Server is running at http://localhost:3000")
);
