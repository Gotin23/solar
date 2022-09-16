
//////////Hambuger Menu////////////////

const hamburgerButton = document.querySelector ('.nav-toggler');

const navigation = document.querySelector ('nav');

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
   hamburgerButton.classList.toggle("active") 
   navigation.classList.toggle("active") 
}
/////////////********////////////////



/////////Animation texte écriture/////////////
const txtAnim =document.querySelector("h4");

var typewriter = new Typewriter(txtAnim, {
   loop: true
   
});

typewriter
   .changeDelay(70)
   .typeString('Limiter notre attention aux question terrestres serait limiter l\'esprit humain<br><span class="author">Stephen Hawking.</span>')
   .pauseFor(2500)
   .deleteAll(20)
   .typeString('L\'astronomie oblige l\'âme à regarder vers le haut, et nous conduit de ce monde à un autre<br><span class="author">Platon.</span>')
   .pauseFor(2500)
   .deleteAll(20)
   .typeString('Je suis sûr que l\'univers est plein de vie intelligente. Elle a juste été trop intelligente pour venir ici<br><span class="author">Arthur C. Clarke.</span>')
   .pauseFor(2500)
   .deleteAll()
   .typeString('L\'univers n\'est pas obligé de vous donner un sens<br><span class="author">Neil deGrasse Tyson.</span>')
   .pauseFor(2500)
   .deleteAll(20)
   .typeString('L\'absence massive et flagrante de son dans l\'espace est plus qu\'un simple silence. <br><span class="author">Eugène Cerman.</span>')
   .pauseFor(2500)
   .deleteAll(20)
   .start();
//////////////////////*************/////////////




////////////Animation explosion de lettre////////////
   const title = document.querySelector("h5");
   const letters = [...document.querySelectorAll('h5 span')];

   title.addEventListener("mouseenter", handLetters);
   title.addEventListener("mouseleave", handLetters);

    let isAnimatingIn = false;
    let calledOut = false;
    let animOpened = false;
   
   function handLetters(){
     if(animOpened){
        animOut();
        animOpened=false;
        return;
     }

      if(isAnimatingIn){
        calledOut= true;
        return;
      }
    isAnimatingIn = true;


      const animPromise = new Promise((resolve) =>{
         animIn()
         setTimeout(()=>{
            resolve()
         }, 750)
      })
      animPromise.then(()=>{
        isAnimatingIn =false; 

        if (calledOut) {
            animOut()
            calledOut = false;
        } else if (!calledOut){
            animOpened = true;
        }       
      })
   }

   function animIn(){
      anime({
          targets: "h5 span",
          translateX: function(){
            return anime.random(-250,150)
          },
          translateY: function(){
            return anime.random(-250,150)
         },
         translateZ: function(){
            return anime.random(-2000,750)
         },
         rotate: function(){
            return anime.random(-250,250)
         },
         easing: "easeOutCirc",
         duration: 750
      })
   }
   function animOut(){
      anime({
          targets: "h5 span",
          translateX: 0,
          translateY: 0,
         translateZ: 0,
         rotate: 0,
         easing: "easeInQuad",
         duration: 750
      })

   }
/////////////////*************/////////////



//Le Loader///
   const loader = document.querySelector('.svg');

   window.addEventListener('load',() => {
      loader.classList.add('fondu-out');
   })
////////***************////////




///////La Galerie/////////////
const items = document.querySelectorAll('.item')
const nbSlide = items.length;
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left')
let compteur = 0 ;

function slideSuivante(){
   items[compteur].classList.remove('active');

   if(compteur < nbSlide - 1){
      compteur++;
   }else{
      compteur = 0;
   }

   items[compteur].classList.add('active')
   ;

}
suivant.addEventListener('click',slideSuivante)

function slidePrecedente(){
   items[compteur].classList.remove('active')
   if( compteur > 0){
      compteur--;
   }else{
      compteur = nbSlide -1;

   }

   items[compteur].classList.add('active')
}
precedent.addEventListener('click',slidePrecedente);
//////////////////////////////////////////////////
