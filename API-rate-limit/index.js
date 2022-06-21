const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const limit = rateLimit({
  windowMs: 5 * 60 * 100,
  max: 5,
});
const port = process.env.PORT || 8080;
app.get("/", limit, async (req, res) => {
  try {
    return res
      .status(200)
      .send("API work only 5 fetching then after 5 minutes it reset");
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(port, async () => {
  try {
    console.log(`listening port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
