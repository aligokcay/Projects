const word_el = document.getElementById('kelime');
const popup = document.getElementById('popup-container');
const wrongLetters_el = document.getElementById('yanlışHarfler');
const items = document.querySelectorAll('.item');
const altMessage = document.getElementById('altMessage');
const playAgain = document.getElementById('play-again');
const message_el = document.getElementById('message');
const popupBox = document.querySelector('.popup');
const face = document.getElementById('face');



const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    let  words = ["adana", "adıyaman", "afyon", "ağrı", "amasya", "ankara", "antalya", "artvin","aydın",
    "balıkesir","bilecik", "bingöl", "bitlis", "bolu", "burdur", "bursa", "çanakkale",
    "çankırı", "çorum","denizli","diyarbakır", "edirne", "elazığ", "erzincan", "erzurum", "eskişehir",
    "gaziantep", "giresun","gümüşhane", "hakkari", "hatay", "ısparta", "mersin", "istanbul", "izmir",
    "kars", "kastamonu", "kayseri","kırklareli", "kırşehir", "kocaeli", "konya", "kütahya", "malatya",
    "manisa", "kahramanmaraş", "mardin", "muğla", "muş", "nevşehir", "niğde", "ordu", "rize", "sakarya",
    "samsun", "siirt", "sinop", "sivas", "tekirdağ", "tokat", "trabzon", "tunceli", "şanlıurfa", "uşak",
    "van", "yozgat", "zonguldak", "aksaray", "bayburt", "karaman", "kırıkkale", "batman", "şırnak",
    "bartın", "ardahan", "ığdır", "yalova", "karabük", "kilis", "osmaniye", "düzce"];



    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\s/g, '');
    if (w === selectedWord) {

        popup.style.display = 'flex'; 
    }
}

function updateWrongLetters() {

    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3><hr>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    
    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if(index<errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerHTML = `Maalesef kazanamadınız.<br> Kelime ${selectedWord} idi.`;
        popupBox.style.background = 'red'; 
        popupBox.style.marginTop = '221px';
        face.style.display = 'block';   
    }
}

function displayAltMessage(){
    altMessage.classList.add('show');
    
    setTimeout(function(){
        altMessage.classList.remove('show');
    },1900)
};

window.addEventListener('keydown',function(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90)
    ||e.keyCode === 222
    ||e.keyCode === 221
    ||e.keyCode === 220
    ||e.keyCode === 219
    ||e.keyCode === 186
    ||e.keyCode === 191) {
        const letter = e.key

        if(selectedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }else {
                displayAltMessage();
            }
        }else {
            if(!correctLetters.includes(letter)){
                if(!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);
                    updateWrongLetters();
                }else {
                    displayAltMessage();
                }
            }
        }
    }
});
displayWord();
console.log(selectedWord);

playAgain.addEventListener('click',function(e){
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();
    console.log(selectedWord);
    face.style.display = 'none';
    
    popup.style.display = 'none';
    message_el.innerHTML = `Tebrikler kazandınız.🎉`;
    popupBox.style.background = 'green'; 
    popupBox.style.marginTop = '0px';
})





