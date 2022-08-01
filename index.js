const Koa = require("koa");
const app = new Koa();

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = require("./lib/routes/posts-router");
app.use(router.routes());

app.listen(3000, () =>
  console.log("Server is running at http://localhost:3000")
);
