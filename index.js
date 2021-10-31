const http = require("http")
const os = require("os")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write("<a href=''>About</a>")
    res.end("<h1>Hello</h1>")
})

console.log("dirname: ", __dirname)
console.log("filename: ", __filename)
console.log(os.platform())

/* fs.readFile("./textt.txt", (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
}) */

fs.writeFile("./text1.txt", "kaj", () => {
    console.log("file was written")
})

if(!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("folder created")
    })
}

server.listen(3000, () => console.log("server is running"))