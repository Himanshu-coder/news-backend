// Load news routes
const newsRouter = require("../News/routes/newsRoute");

//========================== Load Modules End ==============================================

//========================== Export Module Start ====== ========================

module.exports = function(app) {
  // Attach User Routes
  app.use("/api/news", newsRouter);
};
