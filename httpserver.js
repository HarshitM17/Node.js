const http=require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    
    if (req.url == '/'){
        res.end('<h1>This is Harshit Mathur</h1> <p>My name is Harshit</p>')
    }
    else if (req.url == '/about'){
        res.end('<h1>This is About</h1> <p>aboutis about</p>')
    }
    ;
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});