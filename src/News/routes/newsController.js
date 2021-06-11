const config = require('config');
const NewsAPI = require('newsapi');
const newsApiKey = config.get("server.newsApi");
const newsapi = new NewsAPI(newsApiKey);

/**
 * getNewsData API to get all list of news of UK.
 */
async function getNewsData({ page= 1, pageSize= 10, search: q = '' }) {
    try {
        const { totalResults, articles } = await newsapi.v2.topHeadlines({
            q,
            country: 'gb',
            page,
            pageSize,
        });
        return {
            totalResults,
            articles,
            nextPage: (totalResults - page * pageSize) > 1
        }
    } catch(e) {
        return {
            error: e
        };
    }
}

// exporting route Object
module.exports = {
    getNewsData,
};
