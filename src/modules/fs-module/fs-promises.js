import fs from "node:fs/promises"

// await fs.writeFile("promise.txt","Helo Promises")

const data = await fs.readFile("promise.txt","utf-8")
console.log(data)