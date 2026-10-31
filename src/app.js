import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./modules/auth/auth.routes.js";

import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import ApiError from "./common/utils/api-error.js";
import path from "path"


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//---> DISK STORAGE

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const ext = path.extname(file.originalname)
      console.log("EXTENSION____---",ext)
      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
})


//-->MEMORY STORAGE

// const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

// const upload = multer()


// BUFFER TO DISK SAVE


// // import multer from "multer";
// import fs from "node:fs/promises";
// // import path from "node:path";

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 5 * 1024 * 1024, // Maximum 5 MB
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only images are allowed"));
//     }
//   },
// });

// app.post("/upload", upload.single("File"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "Please upload an image" });
//     }

//     const uploadDir = path.join(process.cwd(), "uploads");

//     console.log("uploadDir--->",uploadDir)
//     await fs.mkdir(uploadDir, { recursive: true });

//     // Generate a unique filename
//     const filename = `${crypto.randomUUID()}${path.extname(req.file.originalname)}`;
//     console.log("fileName--->",filename)
//     const filePath = path.join(uploadDir, filename);
//     console.log("filePath--->",filePath)


//     // Buffer ko disk par save karo
//     await fs.writeFile(filePath, req.file.buffer);
//     console.log("req.files--->",req.file)
//     console.log("req.files.buffer--->",req.file.buffer)

//     ApiResponse.ok(res,"Image upload successfully")
//     // return res.status(200).json({
//     //   message: "Image uploaded successfully",
//     //   filename,
//     // });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Image upload failed" });
//   }
// });








app.post('/upload',upload.fields([
  { name:"avatar",maxCount:1 },
  { name:"gallery",maxCount:1 }
]),(req,res)=>{
  console.log(req.file);

  ApiResponse.ok(res,"File Uploladed")
})


app.use("/api/auth", authRoute);

// Catch-all for undefined routes
app.all("{*path}", (req, res) => {
  throw ApiError.notFound(`Route ${req.originalUrl} not found`);
});
export default app;
