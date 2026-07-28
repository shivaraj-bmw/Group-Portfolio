function searchStudent() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let name = card.textContent.toLowerCase();

        if (name.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

const particles = document.getElementById("particles");

for(let i=0;i<80;i++){

const p=document.createElement("div");

p.classList.add("particle");

let size=Math.random()*6+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
(Math.random()*8+8)+"s";

p.style.animationDelay=
Math.random()*10+"s";

particles.appendChild(p);

}