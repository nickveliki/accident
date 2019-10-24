module.exports = (component)=>{
    let c = "";
    if (component){
        if (typeof(component)==="string"){
            c=component;
        } else {
            component.forEach((cc)=>{
                c+=cc;
            })
        }
    }
    return c;
}
