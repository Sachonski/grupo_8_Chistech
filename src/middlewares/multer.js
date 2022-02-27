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
  fileFilter: (req, file, cb) => {
    if (file.mimetype == ".png" || file.mimetype == ".jpg" || file.mimetype == ".jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }

  // fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //       cb(null, true);
  //     } else {
  //       cb(null, false);
  //       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  //   }
	// onFileUploadStart: function(file) {
  //       console.log("Inside uploads");
  //       if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
  //           console.log('entrooooo*****************');
	// 		return true;
  //       }
  //       else
  //       {
	// 		console.log('NO entrooooo*****************');

  //           return false;
  //       }
  //   }
  
  });

  // var upload = multer({
  //   storage: storage,
  //   fileFilter: (req, file, cb) => {
  //     if (file.mimetype == ".png" || file.mimetype == ".jpg" || file.mimetype == ".jpeg") {
  //       cb(null, true);
  //     } else {
  //       cb(null, false);
  //       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  //   }
  // });
  
  
  const uploadFile = multer({ storage });

module.exports = uploadFile;