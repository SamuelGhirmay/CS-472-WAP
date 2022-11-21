/**
 * product.js
 */
"use strict";

window.addEventListener("DOMContentLoaded",()=>{
    $("#products").on("click","a",function(evt){
        evt.preventDefault();
        const header=$("<header>",{class:"articleHeader"}).append(
            $("<h4>"),{text:"product name"});
            const p=$("<p>",{text:"Here is a brief description/note about this product.",});
            const p2=$("<p>",{text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Mollitia consectetur iure expedita non pariatur porro enim suntsed obcaecati saepe.",});
            const div=$("<div>",{class:"btnPanel"}).append($("<a>",{class:"lnkBtn",href:"http://www.amazon.com",text:"Add a new Product",}));
           
           
        const article=$("<article>").append(header).append(p).append(p2).append(div);

        $("#products").append(article);


    });
});

