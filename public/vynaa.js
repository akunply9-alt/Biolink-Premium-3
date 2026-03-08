<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lenny Chan</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>

body{
margin:0;
font-family:Poppins, sans-serif;
background: linear-gradient(135deg,#ffd6ec,#e0c3fc);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
width:350px;
background:rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
padding:20px;
border-radius:20px;
text-align:center;
box-shadow:0 10px 30px rgba(0,0,0,0.2);
}

.profile img{
width:90px;
height:90px;
border-radius:50%;
border:3px solid white;
}

#profile-name{
margin:10px 0 5px;
font-size:20px;
}

#profile-bio{
font-size:13px;
opacity:0.8;
}

.slider{
margin-top:15px;
position:relative;
overflow:hidden;
border-radius:15px;
}

#slideBox{
display:flex;
transition:0.5s;
}

#slideBox img{
width:100%;
border-radius:15px;
}

.prev,.next{
position:absolute;
top:50%;
transform:translateY(-50%);
background:white;
border:none;
width:30px;
height:30px;
border-radius:50%;
cursor:pointer;
}

.prev{left:5px;}
.next{right:5px;}

.indicators{
display:flex;
justify-content:center;
margin-top:8px;
}

.indicator{
width:8px;
height:8px;
background:white;
opacity:0.5;
border-radius:50%;
margin:3px;
}

.indicator.active{
opacity:1;
}

.btn-group{
margin-top:15px;
}

.btn{
display:flex;
justify-content:space-between;
align-items:center;
text-decoration:none;
background:white;
padding:10px;
border-radius:12px;
margin:8px 0;
color:black;
font-size:14px;
transition:0.3s;
}

.btn img{
width:20px;
margin-right:6px;
}

.btn:hover{
transform:scale(1.05);
}

</style>
</head>

<body>

<div class="container">

<div class="profile">
<img src="https://i.pinimg.com/736x/76/8c/ef/768cefbf4f0e2c0c4f8b1c1f7c2d75ad.jpg">
<h2 id="profile-name"></h2>
<p id="profile-bio"></p>
</div>

<div class="slider">
<div id="slideBox"></div>
<button class="prev">❮</button>
<button class="next">❯</button>
</div>

<div class="indicators" id="indicators"></div>

<div class="btn-group" id="button-group"></div>

</div>

<script>

// Configuration - Easy to edit
const config = {
  profile: {
    name: "🎀I,𝚖 𝚕𝚎𝚗𝚗𝚢 𝚌𝚑𝚊𝚗🎀",
    bio: "jangan lupa mam, kalo ga mam ku gigit:v"
  },
  
  slides: [
    "https://c.termai.cc/i160/BnYoUZj.jpg",
    "https://files.catbox.moe/pull9m.jpg"
  ],

  buttons: [
    {
      icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png",
      text: "WhatsApp",
      actionText: "Chat",
      link: "https://wa.me/6282143363215"
    },
    {
      icon: "https://img.icons8.com/color/48/000000/youtube-play.png",
      text: "YouTube",
      actionText: "Subcribe",
      link: "https://youtube.com/@lenyleny-m5n?si=XLd0Epf07KbhE7AJ"
    },
    {
      icon: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
      text: "Instagram",
      actionText: "PLAY",
      link: "https://instagram.com/@cutieelyn2"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/tiktok.png",
      text: "TikTok",
      actionText: "Private wle",
      link: "https://tiktok.com"
    }
  ]
};

// INITIALIZE PAGE
document.addEventListener('DOMContentLoaded', function() {

  // BACKGROUND MUSIC
  const audio = document.createElement("audio");
  audio.src = "https://files.catbox.moe/6er4t0.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.3;
  audio.muted = true;
  document.body.appendChild(audio);

  setTimeout(() => {
    audio.muted = false;
    audio.play().catch(()=>{});
  },1000);

  document.getElementById('profile-name').textContent = config.profile.name;
  document.getElementById('profile-bio').textContent = config.profile.bio;
  
  const slideBox = document.getElementById('slideBox');
  const indicators = document.getElementById('indicators');
  
  config.slides.forEach((slide,index)=>{
    const img=document.createElement('img');
    img.src=slide;
    slideBox.appendChild(img);
    
    const indicator=document.createElement('div');
    indicator.className='indicator'+(index===0?' active':'');
    indicators.appendChild(indicator);
  });
  
  const buttonGroup=document.getElementById('button-group');
  
  config.buttons.forEach(button=>{
    const btn=document.createElement('a');
    btn.className='btn';
    btn.href=button.link;
    btn.target='_blank';
    btn.innerHTML=`
      <span><img src="${button.icon}"> ${button.text}</span>
      <span>${button.actionText}</span>
    `;
    buttonGroup.appendChild(btn);
  });

  initSlider();
});

// SLIDER
let index=0;

function initSlider(){
const slideBox=document.getElementById('slideBox');
const slides=slideBox.children;
const totalSlides=slides.length;
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');

function showSlide(i){
index=(i+totalSlides)%totalSlides;
slideBox.style.transform=`translateX(-${index*100}%)`;
}

function nextSlide(){
showSlide(index+1);
}

function prevSlide(){
showSlide(index-1);
}

prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);

setInterval(nextSlide,5000);
}

</script>

</body>
</html>
