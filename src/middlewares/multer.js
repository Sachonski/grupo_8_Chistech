const path = require('path');
const multer = require('multer');
const date = Date.now();


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  // cb(null, "../public/img");
	  cb(null, path.join(__dirname, "../../public/img/products"));
	},
	filename: function (req, file, cb) {
	  cb(null, date + "_" + file.originalname);
	},
  });
  
  const uploadFile = multer({ storage });

module.exports = uploadFile;