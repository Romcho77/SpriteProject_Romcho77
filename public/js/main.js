import * as FUNCTION from "./../js/functions.js";

// //? Animate 1 hero
// let canvas = document.querySelector("canvas")
// let c = canvas.getContext("2d")
// let afterCanvas = document.querySelector(".afterCanvas")
// let img1 = document.createElement("im")

// canvas.width = window.innerWidth -300
// canvas.height = window.innerHeight -300

// let images = []
// images.length = 10
// let imageEmpty = new Image() // tryImage

// for (let i = 0; i < images.length; i++) {
//     images[i] = new Image();
//     images[i].src = "./public/img/Walk ("+ i.toString() + ").png"
    
    
// }



// let i = 1
// setInterval(function(){
//     i++
//     if(i>=10){
//         i = 1;
//     }
//     c.drawImage(images[i],200,200,150,150) //canvasImageSrc, x, y, width, height
//     setInterval(function(){
//         imageEmpty.style.background = "bisque"
//         c.drawImage(imageEmpty,200,200,150,150)
//         c.clear(imageEmpty,200,200,150,150)
//     },20)
// },50)
// //? test 

// afterCanvas = document.querySelector(".afterCanvas")

let ghost = {
    hp: 100,
    attack : 20,
}
let sniper = {
    hp: 80,
    attack : 30,
}
let kalash = {
    hp: 70,
    attack : 40,
}
let officer = {
    hp: 100,
    attack : 30,
}

let tank = {
    hp: 100,
    attack : 30
}

let cards = document.querySelectorAll(".personnages");
let firstPage = document.querySelector(".firstPage")
let secondPage = document.querySelector(".secondPage")
let thirdPage = document.querySelector('.thirdPage')
let versus1 = document.querySelector(".divImg1")
let chooseButtons = document.querySelectorAll(".chooseButton")
let attackButton1 = document.querySelectorAll('.chooseAttack')[0]
let attackButton2 = document.querySelectorAll('.chooseAttack')[1]
let attackButton3 = document.querySelectorAll('.chooseAttack')[2]
let startButton = document.querySelector('.button')
console.log(cards);
let chosenPersonage
let chosenHero
let hero
FUNCTION.move(100)
FUNCTION.move2(100)
cards.forEach(card => card.addEventListener('dblclick', FUNCTION.flipCard));


//! choosing heroes
chooseButtons.forEach(element => {
    element.addEventListener('click',()=>{
        chosenPersonage = element.parentElement
        firstPage.style.display = "none"
        secondPage.style.display = "block"
        thirdPage.style.display = 'none'
        console.log(chosenPersonage);

        switch (chosenPersonage.id) {
            case "pokemon1":
                hero = 'cagoule'
                versus1.querySelector("img").src = chosenPersonage.querySelector("img").src
                
                break;
        
            case "pokemon2":
                hero = 'girl'
                versus1.querySelector("img").src = "./public/img/girlSoldierShoot.gif"
                
                break;
        
            case "pokemon3":
                hero = 'vietkong'
                versus1.querySelector("img").src = chosenPersonage.querySelector("img").src
                break;
        
            case "pokemon4":
                hero = 'officer'
                versus1.querySelector("img").src = chosenPersonage.querySelector("img").src
                break;
        
            default:
                console.log('error Personnage ID');
                break;
        }



    })
});

//! StartButton with initializing all variables
let heroImage
let heroAttacks
let opponentImage
let heroHp
let enemyHero  = tank
startButton.addEventListener('click',()=>{
    firstPage.style.display = "none"
    secondPage.style.display = "none"
    thirdPage.style.display = 'block'
    heroImage = document.querySelector('.soldier1')
    opponentImage = document.querySelector('.soldier2')
    heroImage.src = chosenPersonage.querySelector("img").src
    heroAttacks = document.querySelectorAll('.chooseAttack')
    switch (hero) {
        case 'cagoule':  
            heroAttacks[0].innerText = 'RUSH';
            heroAttacks[1].innerText = 'KNIFE';
            heroAttacks[2].innerText = 'SIT FIRE';
            heroHp = ghost.hp
            chosenHero = ghost
            FUNCTION.move(chosenHero.hp)
            break;
        case 'girl':
            heroAttacks[0].innerText = 'SNIPE';
            heroAttacks[1].innerText = 'BOMB';
            heroAttacks[2].innerText = 'REGENERATE';
            heroHp = sniper.hp
            chosenHero = sniper
            FUNCTION.move(chosenHero.hp)
            break;
        case 'vietkong':
            heroAttacks[0].innerText = 'KALASH';
            heroAttacks[1].innerText = 'SHOTGUN';
            heroAttacks[2].innerText = 'REGENERATE';
            heroHp = kalash.hp
            chosenHero = kalash
            FUNCTION.move(chosenHero.hp)
            break;
        case 'officer':
            heroAttacks[0].innerText = 'SHOOT';
            heroAttacks[1].innerText = 'REGENERATE';
            heroAttacks[2].innerText = 'CALL';
            heroHp = officer.hp
            chosenHero = officer
            FUNCTION.move(chosenHero.hp)
            break;
    
        default:
            console.log('Unknown hero');
            break;
    }
})


//! attacks for heroes
let combatHero1
let combatHero2
let explosion = document.querySelector('.battleImage3')
let explosion2 = document.querySelector('.battleImage4')
let healing = document.querySelector('.regenerateImage')
attackButton1.addEventListener('click',()=>{
    combatHero1 = document.querySelector('.soldier1')
    combatHero2 = document.querySelector('.soldier2')
    switch (hero) {
        case 'cagoule':
            
            combatHero1.src = './public/img/blackSoldierStandAttack.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/black_soldier.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
            if(enemyHero.hp < 1){
                alert('GameOver')
                FUNCTION.move(0)
            }


            //? =========attack tank==========
            
            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}

        
            heroHp = 100 // to be corrected
            break;
        case 'girl':

            combatHero1.src = './public/img/girlSoldierShoot.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/girlSoldierCalm.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}


            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}


            heroHp = 100
            break;
        case 'vietkong':

            combatHero1.src = './public/img/soldier.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/greenSoldier.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)            
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}


            heroHp = 100
            break;
        case 'officer':

            combatHero1.src = './public/img/officerShoot.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/officer.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;
    
        default:
            console.log('Unknown hero 1');
            break;
    }
})
explosion = document.querySelector('.battleImage3') //maybe not necessary
healing = document.querySelector('.regenerateImage')
attackButton2.addEventListener('click',()=>{
    combatHero1 = document.querySelector('.soldier1')
    combatHero2 = document.querySelector('.soldier2')
    switch (hero) {
        case 'cagoule':  

            combatHero1.src = './public/img/black_soldier_knife.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.querySelector('img').src = './public/img/flash.gif'
                explosion.style.display = 'block'
                
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
                explosion.querySelector('img').src = './public/img/explosion.gif'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/black_soldier.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100 // to be corrected
            break;
        case 'girl':

            combatHero1.src = './public/img/girlSoldierBomb.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.querySelector('img').src = './public/img/bomb.gif'
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
                explosion.querySelector('img').src = './public/img/explosion.gif'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/girlSoldierCalm.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;

        case 'vietkong':

            combatHero1.src = './public/img/soldierShotgun.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.querySelector('img').src = './public/img/shotgun.gif'
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
                explosion.querySelector('img').src = './public/img/explosion.gif'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/greenSoldier.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver enemy is dead')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;

        case 'officer':

            combatHero1.src = './public/img/officer.gif'
            //? regenerate effect
            setTimeout(function(){
                
                healing.querySelector('img').src = './public/img/healing.gif'
                healing.style.display = 'block'
            },1000)
            setTimeout(function(){
                healing.style.display = 'none'
                
            },4500)
            setTimeout(function(){
                combatHero1.src = './public/img/officer.gif'
                chosenHero.hp += chosenHero.attack
                FUNCTION.move(chosenHero.hp)
            },4700)
        if(chosenHero.hp < 1){
            alert('Gameover your hero is dead')
            FUNCTION.move(0)
        }
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;
    
        default:
            console.log('Unknown hero 2');
            break;
    }
})
explosion = document.querySelector('.battleImage3') // maybe not necessary
healing = document.querySelector('.regenerateImage')
attackButton3.addEventListener('click',()=>{
    combatHero1 = document.querySelector('.soldier1')
    combatHero2 = document.querySelector('.soldier2')
    switch (hero) {
        case 'cagoule':  
            combatHero1.src = './public/img/black_soldier_shoot.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.querySelector('img').src = './public/img/explosion.gif'
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
                explosion.querySelector('img').src = './public/img/explosion.gif'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/black_soldier.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move2(enemyHero.hp)
            },4500)
if(enemyHero.hp < 1){
    alert('GameOver')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100 // to be corrected
            break;

        case 'girl':
            combatHero1.src = './public/img/girlSoldierCalm.gif'

            //? regenerate effect
            setTimeout(function(){
                healing.querySelector('img').src = './public/img/healing.gif'
                healing.style.display = 'block'
            },1000)
            setTimeout(function(){
                healing.style.display = 'none'
                
            },4500)
            setTimeout(function(){
                combatHero1.src = './public/img/girlSoldier.gif'
                chosenHero.hp += chosenHero.attack
                FUNCTION.move(chosenHero.hp)
            },4800)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;
        case 'vietkong':

            combatHero1.src = './public/img/greenSoldier.gif'

            //? regenerate effect
            setTimeout(function(){
                
                healing.querySelector('img').src = './public/img/healing.gif'
                healing.style.display = 'block'
            },1000)
            setTimeout(function(){
                healing.style.display = 'none'
                
            },4500)
            setTimeout(function(){
                combatHero1.src = './public/img/greenSoldier.gif'
                chosenHero.hp += chosenHero.attack
                FUNCTION.move(chosenHero.hp)
            },4700)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;

        case 'officer':
            combatHero1.src = './public/img/officerCall.gif'
            //? =========attack hero==========
            setTimeout(function(){
                explosion.querySelector('img').src = './public/img/shotgun.gif'
                explosion.style.display = 'block'
            },1000)
            setTimeout(function(){
                explosion.style.display = 'none'
                explosion.querySelector('img').src = './public/img/explosion.gif'
            },4000)
            setTimeout(function(){
                combatHero1.src = './public/img/officer.gif'
                enemyHero.hp -= chosenHero.attack
                FUNCTION.move(enemyHero.hp)
            },4500)
            if(enemyHero.hp < 1){
                alert('GameOver')
                FUNCTION.move(0)
            }
            //? =========attack tank==========

            setTimeout(function(){
                combatHero2.src = './public/img/tankShoot.gif'
                explosion2.style.display = 'block'
            },5000)
            setTimeout(function(){
                explosion2.style.display = 'none'
            },7900)
            setTimeout(function(){
                combatHero2.src = './public/img/tank.gif'
                chosenHero.hp -= enemyHero.attack
                FUNCTION.move(chosenHero.hp)
            },7950)
if(chosenHero.hp < 1){
    alert('Gameover your hero is dead')
    FUNCTION.move(0)
}
            heroHp = 100
            break;
    
        default:
            console.log('Unknown hero 3');
            break;
    }
})





// FUNCTION.move(30)

