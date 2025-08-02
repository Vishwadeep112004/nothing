const messages = [
  {
    msg: "Chotasa prayatna krtoy..👀🫰",
    img: "imgs/20250802_2239_Ghibli-Inspired Playful Wink_remix_01k1nvyshbegptf7wdpbt6c9n5.png",
    btn: "Br..😏"
  },
  {
    msg: "Chinu tula Khara sangu kaa khuup prem krto g mi tuzyavar..☺️😚😚",
    img: null,
    btn: "Achha"
  },
  {
    msg: "Achha nahi g kharach..",
    img: null,
    btn: "Mgg..",
  },
  {
    msg: "Mg Sod na Rusva, 😩😩",
    img: null,
    btn: "Jaa ki"
  },
  {
    msg: "Sod ki g..😚😚😚",
    img: null,
    btn: "Aha"
  },
  {
    msg: "He bagh na kiti chaan disto apn ektra..😘😘😘",
    img: "imgs/WhatsApp Image 2025-08-02 at 8.26.45 PM (1).jpeg",
    btn: "Ho mahitye..😏"
  },

  {
    msg: "He pan bagh",
    img: "imgs/WhatsApp Image 2025-08-02 at 8.26.45 PM.jpeg",
    btn: "Haa.."
  },

  {
    msg: "Ajun pn rusles..☹️☹️",
    img: null,
    btn: "Hoyy....😏😏"
  },

  {
    msg: "😟😟",
    img: null,
    btn: "😏"
  }, 

  {
    msg: "😟😟😟😟😟",
    img: null,
    btn: "😏😏😏😏😏😏"
  }, 

    {
    msg: "Tula hastana baghital ki maza sagla divas ekdam mst jato 😚😚",
    img: null,
    btn: "Aww..."
  },
  {
    msg: "Tu nako bai rusat jau maza divas chaan nahi jaat😔😔😔",
    img: null,
    btn: "Ho naa"
  },

  {
    msg: "Ha photo Athavto tula.. mi tula ti ring banvun dili hoti 😘😘",
    img: "imgs/ring.jpeg",
    btn: "hoo Athavto 🥰"
  },


  {
    msg: "Ha bagh jevha apli olkh valdli hoti",
    img: "imgs/fresher.jpeg",
    btn: "🥰🥰"
  },
  
  {
    msg: "baghitlas kaa swataha kiti chan ahes tu, ekdam wife material... 🫣🫣🥰😚😚",
    img: null,
    btn: "Heehee 😋"
  },

  {
    msg: "Tu jashi ahes, ti khup chaan ahes… perfect! 😘",
    img: null,
    btn: "Really..? 🥺"
  },

  {
    msg: "Ha pn bagh photo, kasa bhari disto ki nahi joda",
    img: "imgs/bday.jpeg",
    btn: "Really..? 🥺"
  },
  
   {
    msg: "Ab to maan jao... 🥺🥺",
    img: null,
    btn: "Nahiii....."
  },

  {
    msg: "😘😘😘😘😘",
    img: null,
    btn: "🙂‍↔️😏😏😏"
  },

  {
    msg: "ky karu jyane tuza rusva jail",
    img: null,
    btn: "Gift"
  },

  {
    msg: "Oh accha Gift hoy",
    img: null,
    btn: "Haa😏😏"
  },


  {
    msg: "He Ghe teddy..",
    img: "/imgs/360_F_1212400972_Xi7gkeyHasyqooODa4imYRF4IMW6mpf4.jpg",
    btn: "Chaan ahe...☺️"
  },

  {
    msg: "Gela rusva.. 🤗🤗🥰",
    img: null,
    btn: "nahi ajun.. Thoda ahe.."
  },

  

  {
    msg: `Br shayri tuzyasaathi..
        Dil karta hai har waqt tere saath ho,
        Har pal tere paas ho,
        Mohabbat bas tujhse hi rahe,
        Chahe duniya mere khilaaf ho`,
    img: null,
    btn: "Nahi avdli..🤭🤭"
  },

  {
    msg: `Tula baghun heart thambta re,
            Pan tu rusli ki BP vadhta re!
            Prem he deeply aahe majhya blood madhe,
            Pan tujhya “seen” war mi offline padto re...
            `,
    img: null,
    btn: "😅😅"
  },

  {
    msg: `Aapka Intezaar Hamein Her Pall Rehtaa Hai
        Her Lemha Humein Aapka Ehsaas Rehta Hai
        Tum Bin Dhadkan Rukk C Jatee Hai
        Ke Aap Dil Mein Humari Dhadkan Bankay Rehte Ho …
            `,
    img: null,
    btn: "Ho baas Baas"
  },
];


let index = 0;

const messageEl = document.getElementById("message");
const btn = document.getElementById("next-btn");
const imgEl = document.getElementById("img");
const imgDiv = document.getElementById("imgs");
const final = document.getElementById("final-message");



  // Your existing button logic here...


window.onload = () => {
  const first = messages[0];
  messageEl.textContent = first.msg;
  btn.innerHTML = first.btn;

  if (first.img) {
    imgEl.src = first.img;
    imgEl.style.display = "block";
    imgDiv.style.display = "block";
  } else {
    imgEl.style.display = "none";
    imgDiv.style.display = "none";
  }

  index = 1; // Move to next message on first click
};



btn.addEventListener("click", () => {
  if (index < messages.length) {
    const curr = messages[index];
    messageEl.textContent = curr.msg;
    btn.innerHTML = curr.btn;

    if (curr.img) {
        imgEl.src = curr.img;
        imgEl.style.display = "block";
        imgDiv.style.display = "block"; // ✅ show container div too
    } else {
        imgEl.style.display = "none";
        imgDiv.style.display = "none"; // ✅ hide container div if no image
    }

    index++;
  } else {
    messageEl.classList.add("hidden");
    btn.classList.add("hidden");
    imgEl.style.display = "none";
    final.classList.remove("hidden");
  }
});

const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + 'vw';

  // Start position (bottom)
  heart.style.top = '100vh';

  // Random animation duration between 4 and 10 seconds
  const duration = Math.random() * 6 + 4;

  // Animate floating upwards with requestAnimationFrame and CSS transition
  heart.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

  heartsContainer.appendChild(heart);

  // Force reflow for transition to work
  heart.offsetWidth;

  // Move heart upwards & fade out
  heart.style.transform = `translateY(-110vh)`;
  heart.style.opacity = '0';

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);


const nahBtn = document.getElementById("nahBtn");

function moveButton() {
  const container = document.getElementById("final-message");
  const maxX = container.offsetWidth - nahBtn.offsetWidth;
  const maxY = container.offsetHeight - nahBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nahBtn.style.left = `${randomX}px`;
  nahBtn.style.top = `${randomY}px`;
}

nahBtn.addEventListener("mouseenter", moveButton); // when hovered
nahBtn.addEventListener("click", moveButton);      // or clicked


function acceptLove() {
  alert("Thank you! 🥹❤️");

  const finalDiv = document.getElementById("final-message");
  const byByDiv = document.getElementById("by-by");

  finalDiv.classList.add("hidden");
  byByDiv.classList.remove("hidden");

  const lastImg = document.getElementById("img_last");
  lastImg.src = "imgs/gettyimages-1482502226-612x612.jpg"; // <-- Set your final image
  lastImg.style.display = "block";
}



const balloonContainer = document.querySelector(".balloons");
const balloonColors = ["#ff4d4d", "#4da6ff", "#85e085", "#ffc266", "#ff66cc", "#9966ff"];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = `${6 + Math.random() * 4}s`;
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 800);
