import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Get the current directory path (required for ESM modules)
const __filename = fileURLToPath(import.meta.url);
console.log(__filename,"--->__filename")
const __dirname = path.dirname(__filename);

console.log(__dirname,"--->__dirname")

// 2. Define your folder and file paths relative to this script
const dirPath = path.join(__dirname, 'MyFolder');

console.log(dirPath,"--->dirpath")
const filePath = path.join(dirPath, 'test.txt');
console.log(filePath,"--->filepath")

// 3. Create the folder if it does not exist
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

// 4. Write your file safely
fs.appendFileSync(filePath, 'Hello from sync FS, updated', 'utf8');

// fs.unlinkSync(filePath)

console.log('UPDATED successfully!');



/*   
diff btw writeFile and writeFileSync

Feature        	writeFile()     	                    writeFileSync()
Type	        Asynchronous	                         Synchronous
Execution	    Background में file operation करता है	    File operation पूरा होने तक execution रोकता है

Callback	    हाँ	                                      नहीं
Performance	    I/O के दौरान दूसरे काम हो सकते हैं	             पूरा होने तक आगे का code रुकता है

Error handling	Callback में error	                       try...catch से
Use case	    APIs, servers, production apps	         Scripts, छोटे tasks
*/


/*
A. File create, read और update

Method	काम	Example
writeFileSync()	  File लिखना या overwrite करना	-- fs.writeFileSync('a.txt', 'Hello')
appendFileSync()  Existing file के अंत में content जोड़ना -- fs.appendFileSync('a.txt', '\nHi')
readFileSync()	  File का content पढ़ना	           -- fs.readFileSync('a.txt', 'utf8')
openSync()	      File खोलकर file descriptor लेना -- fs.openSync('a.txt', 'r')
closeSync()	      File descriptor बंद करना	-- fs.closeSync(fd)
readSync()	      Opened file से data पढ़ना	-- fs.readSync(fd, buffer, 0, 10, 0)
writeSync()	      Opened file में data लिखना	--  fs.writeSync(fd, 'Hello')
truncateSync()	  File का size घटाना या बढ़ाना	-- fs.truncateSync('a.txt', 0)

B. Folder और file management

Method                 	काम	Example
mkdirSync()	    Folder बनाना              ---	fs.mkdirSync('newFolder')
readdirSync()	Folder की files/folders पढ़ना -- fs.readdirSync('.')
rmdirSync() 	खाली folder हटाना	        --   fs.rmdirSync('emptyFolder')
rmSync()	    File या folder हटाना	    --   fs.rmSync('Backup', { recursive: true })
existsSync()	Path मौजूद है या नहीं	       --   fs.existsSync('test.txt')
statSync()	    File/folder की जानकारी	    --   fs.statSync('test.txt')
accessSync()	Access या permissions check करना -- fs.accessSync('test.txt')

*/ 