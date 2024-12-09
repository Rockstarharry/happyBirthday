document.addEventListener("DOMContentLoaded",function(){
const startBtn = document.getElementById("start");
const startDec = document.getElementById("decor");
const wishMsg = document.getElementById("wish");
const Message = document.getElementById("Message");
const music = document.getElementById("celebration-music");
const giftBtn = document.getElementById("Gift");
const forYou = document.getElementById("msg");
const paras = document.querySelectorAll(".msg p")
const cake = document.getElementById("cake")
const typingSpeed = 50;
let currentIndex = 0;
const BackGround= document.body;

/*After clicking start button*/
startBtn.addEventListener("click",function(){
startBtn.classList.add("hide");
music.play();
setTimeout(() => {
    BackGround.style.backgroundColor ="#FFFDD0";
}, 1000);

startDec.classList.remove("hide");
wishMsg.classList.remove("hide");
setTimeout(() => {
    Message.classList.remove("hide");
}, 15000);
});

/*After clicking message button*/
Message.addEventListener("click",function (){
Message.classList.add("hide");
wishMsg.classList.add("hide");
forYou.classList.remove("hide")
/*msg show at once JS */
function calculateDuration(text){
    const baseDuration = 1000;
    return text.length * typingSpeed + baseDuration;
}
function typewriterEffect(element, text, callback){
    element.textContent ='';
    let charIndex = 0;

    function type(){
        if (charIndex < text.length){
            element.textContent += text.charAt(charIndex);
            element.classList.add('typing');
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            element.classList.remove('typing');
            if (callback) callback();
        }
    }
    type();
}
function showNextParagraph(){
    paras.forEach((p)=>{
        p.classList.remove('active');
        p.style.display = 'none';
    });

    const currentParas = paras[currentIndex];
    const text = currentParas.textContent;

    currentParas.style.display = 'block';
    currentParas.classList.add('active');

    typewriterEffect(currentParas, text, () => {
        const duration = calculateDuration(text);

        setTimeout(() => {
            currentIndex = (currentIndex +1) % paras.length;
            showNextParagraph();
        }, duration);
    });

}
showNextParagraph();

/*for hide msg after kaam finish*/
setTimeout(() => {
    forYou.classList.add("hide")
}, 63000);

/*Cake work starts*/
setTimeout(() => {
    giftBtn.classList.remove("hide");
}, 64000);

});

/*After clicking Gift button*/
giftBtn.addEventListener("click", function(){
    giftBtn.classList.add("hide");
    cake.classList.remove("hide");
});



});
