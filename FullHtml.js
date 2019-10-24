const getComponents = require("./getComponent");
module.exports=({body, head})=>{
let b = getComponents(body);
let h = getComponents(head);
//console.log(b);
return `<html>
<head>
    ${h}
</head>
<body>
${b}
</body>
</html>`};

