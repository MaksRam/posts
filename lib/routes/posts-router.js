const Router = require('@koa/router');
const router = new Router();

const postsController = require("../controllers/posts-controller");

router.get("/posts", postsController.getAll);
router.get("/posts/:id", postsController.getById);
router.delete("/posts/:id", postsController.deleteById);
router.post('/posts', postsController.create);

module.exports = router;