const postsModel = require('../models/posts-model');

function getAll(ctx) {
    ctx.body = postsModel.posts;
};

function getById (ctx) {
    const index = ctx.request.params.id;
    ctx.body = postsModel.posts[index];
    if(!postsModel.posts[index]) {
        ctx.status = 404;
    }
};

function deleteById(ctx) {
    const index = ctx.request.params.id;
    postsModel.posts.splice(index, 1);
    ctx.status = 204;
};

function create(ctx){
    const text = ctx.request.body.text;
    postsModel.posts.push({text});
    ctx.status = 201;
    if(!text) {
        ctx.status = 400;
    }
}

module.exports = { getAll, getById, deleteById, create };
