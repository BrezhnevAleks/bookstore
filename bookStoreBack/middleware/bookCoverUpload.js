const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const error =
      file.mimetype === "image/png" ? null : new Error("wrong file");
    cb(error, "./uploads");
  },
  filename: (req, file, cb) => {
    const fileName =
      Date.now() + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

module.exports.upload = multer({
  storage: storage,
}).single("bookcover");
