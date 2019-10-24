const getComponents = require("./getComponent");
module.exports=({content, type, selfClosing, attributes})=>{
    let ar = getComponents(attributes);
    let cont = getComponents(content);
    const open = `<${type?type:"div"} ${ar}${selfClosing?"/":""}>`;
    const close = `</${type?type:"div"}>`;
    return `${open}${selfClosing?"":(cont+close)}`;
}
