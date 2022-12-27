const express = require("express");
const {
  index,
  dashboard,
  register,
  studentportal,
  elogbook,
  weeklyreport,
  form8,
  coc,
  assesment,
  mystatus,
} = require("../controller/siwesController");
const { isLoggedin } = require("../middleware/isLoggedIn");
const { isUser } = require("../middleware/isLoggedIn");
const multer = require("multer");

var router = express.Router();

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const image = multer({ storage: imageStorage }).single("image");

router.get("/index", index);
router.get("/dashboard", dashboard);
router.get("/register", register);
router.get("/studentportal", studentportal);
router.get("/elogbook", elogbook);
router.get("/weeklyreport", weeklyreport);
router.get("/form8", form8);
router.get("/coc", coc);
router.get("/assesment", assesment);
router.get("/mystatus", mystatus);

module.exports = router;
