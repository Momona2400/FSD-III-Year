function Book(){
    const image=React.createElement("img",{src:"",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{color:"red"},"Title:Reactjs");
    const price=React.createElement("h2",{color:"green"}, "price:465/-");
    const btn=React.createElement("button",{color:"blue"},"AddToCart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;      
}