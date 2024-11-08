var products = [
    {
        name:"Glass Award",
        price: 350,
        image:"images/p1.jpeg",
        color:"Award"
    },
    {
        name:"Printed Card",
        price: 200,
        image:"images/p2.jpeg",
        color:"Card"
    },
    {
        name:"Envelop Card",
        price: 250,
        image:"images/p3.jpeg",
        color:"Card"
    },
    {
        name:"Groom Card",
        price: 250,
        image:"images/p4.jpeg",
        color:"Card"
    },
    {
        name:"Groom Card",
        price: 250,
        image:"images/p5.jpeg",
        color:"Card"
    },
    {
        name:"Bride Pen",
        price: 300,
        image:"images/p6.jpeg",
        color:"Pen"
    },
    {
        name:"Pen & Card",
        price: 100,
        image:"images/p7.jpeg",
        color:"Pen"
    },
    {
        name:"Shirt",
        price: 650,
        image:"images/p8.jpeg",
        color:"Uniform"
    },
    {
        name:"Monogram",
        price: 50,
        image:"images/p9.jpeg",
        color:"Uniform"
    },
    {
        name:"Maiyo Card",
        price: 150,
        image:"images/p10.jpeg",
        color:"Card"
    },
    {
        name:"Monogram",
        price: 50,
        image:"images/p11.jpeg",
        color:"Uniform"
    },
    {
        name:"Award",
        price: 250,
        image:"images/p12.jpeg",
        color:"Award"
    },
    {
        name:"Cards",
        price: 150,
        image:"images/p13.jpeg",
        color:"Award"
    },
    {
        name:"Shirt",
        price: 550,
        image:"images/p14.jpeg",
        color:"Uniform"
    },
    {
        name:"Design Bank",
        price: 800,
        image:"images/p15.jpeg",
        color:"graphics"
    },
    {
        name:"Awards",
        price: 800,
        image:"images/p16.jpeg",
        color:"Award"
    },
    {
        name:"Wedding",
        price: 200,
        image:"images/p17.jpeg",
        color:"Card"
    },
    {
        name:"Named Key",
        price: 150,
        image:"images/p18.jpeg",
        color:"Keys"
    },
    {
        name:"Trophies",
        price: 100,
        image:"images/p19.jpeg",
        color:"Awards"
    },
 
]

var menu = document.getElementById("menu")
var slider = document.getElementById("slide")
var productList = document.getElementById("productList")
var productsWrappers = document.getElementById("products")

function hamburger(){
    menu.classList.toggle("blockMenu")
    
}

var count = 0;
function slide(){
    slider.style.transform = `translate(-${count}00%)`
    count = (count + 1)%4;
    
}

setInterval(slide,3000)



function createProduct(){

    try {
    
    for(var i = 0; i < products.length; i++){
        
        var wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("class","border border-zinc-300 rounded-md overflow-hidden p-2")
        wrapperDiv.setAttribute("onclick","singleProduct(this)")

        var siblingDiv1 = document.createElement("div")
        siblingDiv1.setAttribute("class","aspect-square")

        wrapperDiv.appendChild(siblingDiv1)

        var imgTag = document.createElement("img")
        imgTag.setAttribute("class","w-full h-full object-cover object-center")
        imgTag.setAttribute("src",products[i].image)

        siblingDiv1.appendChild(imgTag)

        var siblingDiv2 = document.createElement("div")
        siblingDiv2.setAttribute("class","mt-5")
        wrapperDiv.appendChild(siblingDiv2)

        var sib2Child1 = document.createElement("div")
        sib2Child1.setAttribute("class","flex justify-between")
        siblingDiv2.appendChild(sib2Child1)

        var childH1_1 = document.createElement("h1")
        var childH1_2 = document.createElement("h1")

        childH1_1.setAttribute("class","font-semibold text-lg")
        childH1_2.setAttribute("class","font-bold")
        sib2Child1.appendChild(childH1_1)
        sib2Child1.appendChild(childH1_2)

        var h1text = document.createTextNode(products[i].name)
        var h1text2 = document.createTextNode(`Rs: ${products[i].price}`)
        childH1_1.appendChild(h1text)
        childH1_2.appendChild(h1text2)


        var sib2Child2 = document.createElement("div")
        sib2Child2.setAttribute("class","flex justify-between items-center")
        siblingDiv2.appendChild(sib2Child2)

        var p = document.createElement("p")
        p.setAttribute("class","text-slate-600")
        var btn = document.createElement("button")
        btn.setAttribute("class","bg-zinc-500 rounded text-white p-2 hover:bg-transparent hover:text-zinc-700")
        var pText = document.createTextNode(products[i].color)
        var btnText = document.createTextNode("add cart")

        p.appendChild(pText)
        btn.appendChild(btnText)
        sib2Child2.appendChild(p)
        sib2Child2.appendChild(btn)

        productList.appendChild(wrapperDiv)

        
    }
 

} catch (error) {
 console.log(error);
        
}
}




createProduct()




// ----------------Home page end --------------------


function ProductObj(pName,pSrc,pPrice,pTags){
    this.productName = pName;
    this.productImageSrc = pSrc;
    this.productPrice = pPrice;
    this.productTags = pTags
}


function singleProduct(e){

    // product img src path 
    var imgSrc = e.childNodes[0].childNodes[0].src

    // product name h1
    var productName = e.childNodes[1].childNodes[0].childNodes[0].childNodes[0].nodeValue

    // product price 
    var productPrice = e.childNodes[1].childNodes[0].childNodes[1].childNodes[0].nodeValue

    var tags = e.childNodes[1].childNodes[1].childNodes[0].childNodes[0].nodeValue
    
    var singleProductObj = new ProductObj(productName,imgSrc,productPrice,tags)
    
    localStorage.setItem("oneProduct",
    JSON.stringify(singleProductObj))

        window.location.href = "./products/index.html"


}



