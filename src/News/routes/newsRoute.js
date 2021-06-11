const newsRouter = require("express").Router(),
    newsController = require("./newsController");

newsRouter.route("/getNewsList").get( async(req, res) => {
    try {
        const data = await newsController.getNewsData({ ...req.query });
        if (data.error) {
            throw new Error(data.error)
        }
        res.json({ result: data, success: true });
    } catch(e) {
        res.json({ error: 'Something went wrong.', success: false })
    }
});

module.exports = newsRouter;
