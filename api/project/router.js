// build your `/api/projects` router here

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "succesful",
  });
});

module.exports = router;
