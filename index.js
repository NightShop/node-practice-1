const http = require("http")
const os = require("os")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html")
    let path = "./";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200
            break;
        case "/contact":
            path += "contact-me.html"
            res.statusCode = 200
            break;
        case "/contact-me":
            res.setHeader("Location", "/contact")
            res.statusCode = 300
            break
        case "/about":
            path += "about.html"
            res.statusCode = 200
            break;
        default:
            path += "404.html"
            res.statusCode = 401
    }

    fs.readFile(`./${path}`, (err, data) => {
        if (err) {
            console.log(err)
            res.end("<h2>Could not find data</h2>");
            return;
        }

        res.end(data)

    })
})

/* 

console.log("dirname: ", __dirname)
console.log("filename: ", __filename)
console.log(os.platform())

fs.readFile("./textt.txt", (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
}) 

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

*/

server.listen(3000, () => console.log("server is running"))