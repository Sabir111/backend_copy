import fs from "node:fs"


// --------------- 1.WRITE

// fs.writeFileSync("test.txt", "Hello from sync FS , UPDATED")

// ye agar file h to update krega nhi to create and write krega


// fs.appendFileSync("test.txt","\nHello from append")

// new data write not overrite

// ------------// 2.READ
const data = fs.readFileSync("test.txt","utf-8")

console.log(data)

// Folder

// fs.mkdirSync("MyFolder")
// fs.mkdirSync("MyFolder/innerFolder")  // -> if del the main folder not making new folder

// fs.mkdirSync("MyFolder/innerFolder",{ recursive:true})


// DELETE

// fs.unlinkSync("test.txt")


//  RENAME
// fs.renameSync("test1.txt","test.txt")

// COPY

// fs.cpSync("test.txt","copytest.txt")

