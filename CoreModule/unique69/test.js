const http = require("http");
const fs = require("fs")
http.createServer((req, res) => {
        if(req.url.startsWith("/home")) {
             res.end(`
        <html>
            <body>
                <p>You are home. To go to the menu click here: <a href="/menu">Menu</a></p>
            </body>
        </html>
    `); }

        else if(req.url.startsWith("/rf")){
            console.log("udihn");
    fs.readFile("coremodule/unique69/index.html",(err,data)=>{
        if(err){(res.end(err))}
            else{(res.end(data))
         } })
//    var data= fs.readFile("coremodule/unique69/index.html",'utf8')
//     res.end(data)

}
        else if(req.url.startsWith("/sum")) {

          res.end(  `<script>
            function sum(a, b) {
                return a + b;
            }
                var a=Number(prompt("number a"));
            var b=Number(prompt("number b"));
        document.write(Number(sum(a,b)))</script>`);
        }
        // else if (req.url.startsWith("/fact")) {
        // }
        // else if (req.url.startsWith("/sub")) {
        //     function sub(a, b) {
        //         return a - b;
        //     }
        //     `<script>var a=Number(prompt("number a"));
        //     var b=Number(prompt("number b"));
        // document.write(Number(sub(a,b)))</script>`;
        // res.end();
        // }
         else {res.end(`<script>document.write("no page found")</script>`)
        }
    }).listen(3000);
