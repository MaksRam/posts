const Router = require('@koa/router');
const router = new Router();

const postsModel = require('../models/posts-model')

router.get("/posts", (ctx) => {
    ctx.body = postsModel.posts;
});

router.get("/posts/:id", (ctx) => {
    const index = ctx.request.params.id;
    ctx.body = postsModel.posts[index];
});

router.delete("/posts/:id", (ctx) => {
    const index = ctx.request.params.id;
    postsModel.posts.splice(index, 1);
    ctx.status = 204;
})

router.post("/posts", (ctx) => {
    const text = ctx.request.query.text;
    postsModel.posts.push({text});

    ctx.status = 201;
})

module.exports = router;