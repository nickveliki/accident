module.exports = (component)=>{
    let c = "";
    if (component){
        //console.log(component);
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