module.exports=(...content)=>{
let c = "";
content.forEach((cc)=>{
    //console.log(cc);
    c+=cc;
})    
return `<html>
<head>

</head>
<body>
${c}
</body>
</html>`};