"use strict"
window.addEventListener("DOMContentLoaded",()=>{
    $("#products").on("click","a",function(evt){
        evt.preventDefault();
        const header=$("<header>",{class:"articleHeader"}).append($("<h4>",{text:"Product Name",}));
        const p1=$("<p>",{text:"Here is a brief description/note about this product."});
        const p2=$("<p>",{text:"Lorem ipsum, dolor sit amet consectetur adipisicing elitMollitia consectetur iure expedita non pariatur porro enim suntsed obcaecati saepe."});
        const div=$("<div>",{class:"btnPanel"}).append ($("<a>",{
            class:"lnkBtn",
            text:"Add a new Product",
            href:"http://www.amazon.com",
          
        }))
        const article=$("<article>")
                        .append(header)
                        .append(p1)
                        .append(p2)
                        .append(div);
           $("#products").append(article);
                       
    });
});