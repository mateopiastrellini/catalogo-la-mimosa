const products=[
{name:"COCHECITO CARESTINO",cat:"Cochecitos",price:"$98.000",img:"./WhatsApp%20Image%202026-09-21%20at%2013.48.17.jpeg?v=2"}
];
let active="Todos";const grid=document.querySelector("#grid"),search=document.querySelector("#search"),filters=document.querySelector("#filters"),count=document.querySelector("#count");
const cats=["Todos",...new Set(products.map(p=>p.cat))];
function buttons(){filters.innerHTML=cats.map(c=>`<button class="filter ${c===active?"active":""}" data-c="${c}">${c}</button>`).join("");filters.querySelectorAll("button").forEach(b=>b.onclick=()=>{active=b.dataset.c;buttons();render()})}
function render(){let q=search.value.toLowerCase();let list=products.filter(p=>(active==="Todos"||p.cat===active)&&p.name.toLowerCase().includes(q));count.textContent=list.length+" producto"+(list.length===1?"":"s");grid.innerHTML=list.map(p=>`<article class="card"><div class="photo"><img src="${p.img}" alt="${p.name}"></div><div class="info"><span class="cat">${p.cat}</span><h3>${p.name}</h3><div class="price">${p.price}</div><a class="wa" target="_blank" href="https://wa.me/?text=${encodeURIComponent("Hola, quería consultar por "+p.name+" del catálogo de La Mimosa")}">Consultar por WhatsApp</a><div class="demo">Consultá disponibilidad y formas de pago</div></div></article>`).join("")}
search.oninput=render;buttons();render();