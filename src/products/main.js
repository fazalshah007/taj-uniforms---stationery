var menu = document.getElementById("menu")



function hamburger(){
    menu.classList.toggle("blockMenu")

}



var singleProduct = document.getElementById("products")

var items = localStorage.getItem("oneProduct")

var convertItem = JSON.parse(items)
console.log(convertItem.ProductImageSrc);
console.log(convertItem);



var temp = `
<div class="flex flex-col sm:flex-row ">
      <div class="img sm:flex-1">

          <img class="w-full h-full aspect-square object-center m-2 object-cover"
              src="${convertItem.productImageSrc}"
              alt="">


      </div>
      <div class="items sm:flex-1">
          <h1 class="font-bold text-3xl sm:text-4xl m-5 ">${convertItem.productName}</h1>
          <h1 class=" text-2xl font-semibold  text-zinc-800 mx-5 my-2">${convertItem.productPrice}</h1>
          <p class=" text-xl mx-5 my-1 text-zinc-600 ">${convertItem.productTags}</p>
          <button
              class="  bg-zinc-600 px-8 sm:px-5 sm:py-3 py-4 mx-5 mt-8 text-white font-bold text-xl pointer hover:bg-white hover:text-zinc-600 hover:border-2 border-2 border-transperant transition-all hover:border-zinc-600">Add
              Card</button>
          <p class="mt-8 mx-5">For those who appreciate the art of writing and organization, choosing quality
              stationery is essential. The best stationery products combine functionality with elegance,
              turning everyday tasks into moments of enjoyment. Luxurious pens with smooth ink flow, finely
              crafted notebooks with thick, bleed-resistant pages, and versatile planners with organized
              layouts allow users to write, plan, and create seamlessly. Premium sticky notes, sleek paper
              clips, and leather-bound folders add a touch of sophistication to any desk setup, enhancing
              productivity. When stationery is thoughtfully designed, it reflects personal style and boosts
              efficiency. Quality stationery elevates every jot, note, and plan—making even simple tasks feel
              extraordinary.</p>
      </div>
  </div>
`

var divFile = document.createElement("div")
divFile.setAttribute("class","flex flex-col sm:flex-row ")
divFile.innerHTML = temp
singleProduct.appendChild(divFile)