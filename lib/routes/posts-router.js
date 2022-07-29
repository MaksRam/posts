const Router = require('@koa/router');
const router = new Router();

const postsModel = require('../models/posts-model')

router.get("/posts", (ctx) => {
    ctx.body = postsModel.posts;
});

module.exports = router;