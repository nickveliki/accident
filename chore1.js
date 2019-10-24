const http = require('http');
const fs = require('fs');
const fullHtml = require('./FullHtml');
const component = require('./component');
const updateUsers= (userName)=>{
    return new Promise((res)=>{
        fs.readFile('users.txt', (error, data)=>{
            if (error){
                res("");
            } else {
                res(data.toString());
            }
        })
    }).then((fulfill)=>{
        let users = fulfill!==""?fulfill.split(",").map((user)=>user.trim()):[];
        if (userName.trim()&&!users.includes(userName.trim())){
            users.push(userName.trim());   
        }
        return new Promise((res, rej)=>{
            fs.writeFile("users.txt", users.sort(), (error)=>{
                if (error){
                    rej(error);
                } else {
                    res(userName + " successfully written to users file");
                }
            })
        })
        
    }, (unfulfill)=>{
        console.log(unfulfill);
    });
}
const s = http.createServer((req, res)=>{
    const url = req.url;
    switch (url){
        
            
        case "/users":
            
            new Promise((res, rej)=>{
                fs.readFile("users.txt", (error, data)=>{
                    if (error){
                        rej(error);
                    }else{
                        res(data.toString().split(",").map((da)=>da.trim()));
                    }
                })
            }).then((fulfill)=>{
                const lines = [];
                fulfill.forEach(element => {
                    let line = component({content:element, type:"li"});
                    lines.push(line);
                });
                const list = component({content: lines, type: "ul"});
                const title = component({content: "Hall of fame",type: "h1"});
                const returnToTitle = component({content: "Return to main page", type:"button", attributes:'type="submit"'});
                const sendform = component({content: returnToTitle, type: "form", attributes: 'action="/" method="GET"'});
                res.write(fullHtml({body:[title, list, sendform]}));
                res.end();
            }, (rejected)=>{
                console.log(rejected);
            })
            break;
        case "/create-user":
                const body = [];
                req.on('data', (chunk)=>{
                    body.push(chunk);
                });
                req.on('end', ()=>{
                    const parsedBody = Buffer.concat(body).toString();
                    const message = parsedBody.split("=")[1];
                    updateUsers(message).then(()=>{
                        res.statusCode=302;
                        res.setHeader("Location", "/users");
                        res.end();
                    });
                });
            break;
        default: 
            const input = component({content:"", type:"input" ,selfClosing: true,  attributes:['name="username"', 'type="text"']});
            const submit = component({content:"Submit", type: "button", attributes:'type="submit"'});
            const login = component({content:[input, submit], type:"form", attributes:['method="POST"', 'action="/create-user"']});
            const title = component({content:"Hello there!",type:"h1"});
            res.write(fullHtml({body:[title, login]}));
            res.end();
        break;
    }
});
s.listen(8080);