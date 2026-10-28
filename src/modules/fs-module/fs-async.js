import fs from "node:fs"

fs.writeFile("async.txt","Hello from async!",(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Success!!!')
})

// fs.readFile("async.txt","utf-8",(err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// fs.unlink("async.txt",(err)=>{
//     if(err) console.log(err)
    
// })

// fs.cp("async.txt","cpasync.txt",(err)=>{
//     if(err) console.log(err)
// })