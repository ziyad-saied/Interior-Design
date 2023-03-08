let gallery = document.querySelectorAll(".imageContainer img");

gallery.forEach(x => {
    x.addEventListener('click', (e) => {
        let pop = document.createElement("div");
        pop.className = "popOverlay";
        document.body.appendChild(pop);

        let popupBox = document.createElement("img");
        popupBox.className = "popupImg";
        popupBox.src = x.src;
        pop.appendChild(popupBox);

       
        if (x.alt !== null) {
             let caption = document.createElement("h4");
            caption.className = "caption";
            let imgHead = document.createTextNode(x.alt);
            caption.appendChild(imgHead);
            pop.appendChild(caption);
        }
    })
})

document.addEventListener('click', (e) => {
    if (e.target.className == "popOverlay") {
        document.querySelector(".popOverlay").remove();
        document.querySelector(".popupImg").remove();
    }
})

