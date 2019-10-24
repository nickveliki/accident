const getComponents = require("./getComponent");
module.exports=({content, type, selfClosing, attributes})=>{
    let ar = getComponents(attributes);
    let cont = getComponents(content);
    const open = `<${type} ${ar}${selfClosing?"/":""}>`;
    const close = `</${type}>`;
    return `${open}${selfClosing?"":(cont+close)}`;
}
