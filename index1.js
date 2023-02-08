// https://www.youtube.com/watch?v=9mnkFo-DJj0

var http = require("http")
var host = '127.0.0.1'
var port = 3000



http.createServer(function (req, res) {
    // http.createServer((req, res) => {

    console.log('req.....', req.method);
    console.log('req.....url', req.url);
    if (req.method === "GET") {
        if (req.url === "/") {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            // res.setHeader("Content-Type", "text/html")

            // res.writeHead(200, { "Content-Type": "text/plain" }) //HTTP headers indicates in which format the data is sent to, or returned by, the HTTP methods of the Rule Execution Server REST API
            // res.end("Hello")
            
            res.write("Hello")
            res.end() // to end the process
        } else if (req.url === "/about") {
            // http.createServer((req, res) => {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end("about") // to end the process  
        }
    }
    else if (req.method === "POST") {
        if (req.url === "/") {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            // res.setHeader("Content-Type", "text/html")

            // res.writeHead(200, { "Content-Type": "text/plain" }) //HTTP headers indicates in which format the data is sent to, or returned by, the HTTP methods of the Rule Execution Server REST API
            // res.end("Hello")

            res.write("Hello post")
            res.end() // to end the process
        } else if (req.url === "/about") {
            // http.createServer((req, res) => {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end("about post") // to end the process  
        } else if (req.url === "/api/blogs" && req.method === "POST") {
            try {
                let body = "";
                // Listen for data event
                req.on("data", (chunk) => {
                    body += chunk.toString();
                });
                console.log('body', body);
                // Listen for end event
                req.on("end", async () => {

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(body));
                });
            } catch (error) {
                console.log(error);
            }
        }
    } else if (req.method === "DELETE") {
        if (req.url === "/") {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            // res.setHeader("Content-Type", "text/html")

            // res.writeHead(200, { "Content-Type": "text/plain" }) //HTTP headers indicates in which format the data is sent to, or returned by, the HTTP methods of the Rule Execution Server REST API
            // res.end("Hello")

            res.write("Hello delete")
            res.end() // to end the process
        } else if (req.url === "/about") {
            // http.createServer((req, res) => {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end("about delete") // to end the process  
        }
    }
}).listen(port, host, function () {
    console.log(`server started at http://${host}:${port}/`);
});


// another page
// const router = async function (req, res) {
//     // GET: /api/blogs
//     if (req.url === "/api/blogs" && req.method === "GET") {
//         // get all blogs
//         // set the status code and content-type
//         res.writeHead(200, { "Content-Type": "application/json" });

//         // send data
//         res.end("Get method");
//     }
// };

// module.exports = router;


// // const router = require("./routes/blogRoutes");
// const server = http.createServer((req, res) => {
//     router(req, res);
// });
// server.listen(3000)
// console.log(`server is listening at ${port}`);
