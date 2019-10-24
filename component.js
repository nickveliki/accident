module.exports=(content, type, selfClosing, ...args)=>{
    let ar = "";
    args.forEach((arg)=>{
        ar+= arg+" ";
    });
    let cont = "";
    if (typeof(content)!=="string"){
        content.forEach((con)=>{
            cont+=con;
        })
    } else {
        cont = content;
    }
    const open = `<${type} ${ar}${selfClosing?"/":""}>`;
    const close = `</${type}>`;
    return `${open}${selfClosing?"":(cont+close)}`;
}
