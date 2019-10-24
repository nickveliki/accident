const getComponents = require("./getComponent");
module.exports=({body, head})=>{
let b = getComponents(body);
let h = getComponents(head);
return `<html>
<head>
    ${h}
</head>
<body>
${b}
</body>
</html>`};

