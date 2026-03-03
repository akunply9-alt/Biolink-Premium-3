// Configuration - Easy to edit
const config = {
  profile: {
    name: "🎀I,𝚖 𝚕𝚎𝚗𝚗𝚢 𝚌𝚑𝚊𝚗🎀",
    bio: "jangan lupa mam, kalo ga mam ku gigit:v"
      "pencet apa aja nanti ada musik kluar 🤭"
  },
  
  slides: [
    "https://files.catbox.moe/k0q3yp.jpg",
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
  ],
  
  socialLinks: [
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-instagram", link: "#" },
    { icon: "fab fa-youtube", link: "#" }
  ]
};

// ==============================
// INITIALIZE PAGE
// ==============================
document.addEventListener('DOMContentLoaded', function() {

  // 🎵 BACKGROUND MUSIC AUTO PLAY
  const audio = document.createElement("audio");
  audio.src = "https://files.catbox.moe/6er4t0.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.3;
  audio.muted = true; // supaya gak diblokir browser
  document.body.appendChild(audio);

  setTimeout(() => {
    audio.muted = false;
    audio.play().catch(() => {});
  }, 1000);

  // Set profile info
  document.getElementById('profile-name').textContent = config.profile.name;
  document.getElementById('profile-bio').textContent = config.profile.bio;
  
  const slideBox = document.getElementById('slideBox');
  const indicators = document.getElementById('indicators');
  
  config.slides.forEach((slide, index) => {
    const img = document.createElement('img');
    img.src = slide;
    img.alt = `Slide ${index + 1}`;
    slideBox.appendChild(img);
    
    const indicator = document.createElement('div');
    indicator.className = 'indicator' + (index === 0 ? ' active' : '');
    indicator.onclick = () => showSlide(index);
    indicators.appendChild(indicator);
  });
  
  const buttonGroup = document.getElementById('button-group');
  
  config.buttons.forEach(button => {
    const btn = document.createElement('a');
    btn.className = 'btn';
    btn.href = button.link;
    btn.target = '_blank';
    btn.innerHTML = `
      <span><img src="${button.icon}" alt="${button.text}"/> ${button.text}</span>
      <span>${button.actionText}</span>
    `;
    buttonGroup.appendChild(btn);
  });

  initSlider();
});

// ==============================
// SLIDER
// ==============================
let index = 0;
let slideInterval;

function initSlider() {
  const slideBox = document.getElementById('slideBox');
  const slides = slideBox.children;
  const totalSlides = slides.length;
  const indicators = document.getElementById('indicators').children;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function showSlide(idx) {
    index = (idx + totalSlides) % totalSlides;
    slideBox.style.transform = `translateX(-${index * 100}%)`;
    
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.toggle('active', i === index);
    }
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  slideInterval = setInterval(nextSlide, 5000);
}
