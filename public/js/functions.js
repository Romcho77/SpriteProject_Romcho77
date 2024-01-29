


let image1
let p
let text
export function flipCard() {  
    this.classList.toggle('flip');
    image1 = this.querySelector("img")
    if(this.classList.contains("flip")){
        image1.style.display = "none"
        p = this.querySelector("p")
        switch (this.id) {
            case "pokemon1":
                p.innerText = "HP = 100 \n Attack = 20 \n Simple Soldier equipped with UZI"
                break;
            case "pokemon2":
                p.innerText = "HP = 80 \n Attack = 30 \n Sister Sniper equipped with AWP"
            break;
            case "pokemon3":
                p.innerText = "HP = 70 \n Attack = 40 \n Khoya Kalash equipped with Ak-47"
            break;
            case "pokemon4":
                p.innerText = "HP = 100 \n Attack = 40 \n SOVIET ARMY soldier from Ghoulag"
            break;
            default:
                console.log("probleme1");
                break;
        }
    }else if (!this.classList.contains("flip")){ 
        image1.style.display = "block"
        p = this.querySelector("p")
        switch (this.id) {
            case "pokemon1":
                p.innerText = "GHOST"
                
                break;
            case "pokemon2":
                p.innerText = "SNIPER"
            break;
            case "pokemon3":
                p.innerText = "KALASH"
            break;
            case "pokemon4":
                p.innerText = "Soviet"
            break;
            default:
                console.log("probleme2");
                break;
       
        }

    }
}

let i = 0
let indexStr
let elem
export function move(quantity) {
  if (i == 0) {
    i = 1;

    elem = document.querySelector(".progressBar0");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

let j = 0
let elem1
export function move2(quantity) {
  if (j == 0) {
    j = 1;

    elem1 = document.querySelector(".progressBar1");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem1.style.width = width + "%";
      }
    }
  }
}


