// Limon tushirish funksiyasi
function dropLemons() {
    const body = document.body;
  
    // 5 ta limon tushiramiz
    for (let i = 0; i < 5; i++) {
      const lemon = document.createElement('img');
      lemon.src = 'lemon.png'; // Limon tasviri
      lemon.classList.add('falling-lemon'); // CSS klassi
      lemon.style.left = Math.random() * window.innerWidth + 'px'; // Tasodifiy joylashuv
      body.appendChild(lemon);
  
      // Limon tushgandan keyin olib tashlaymiz
      setTimeout(() => {
        lemon.remove();
      }, 4000); // 4 soniyadan keyin limonni o'chirib tashlaydi
    }
  }
  
  // Tugmaga bosilganda limonlarni tushiramiz
  const orderButton = document.querySelector('.main-button');
  orderButton.addEventListener('click', dropLemons);
  
  // Sahifa yuklanganda elementlarni animatsiya qilish
  const elements = document.querySelectorAll('.menu-section, .about-section, .contact-section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  // Scroll qilinganda animatsiya
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.classList.add('scroll-animate');
      }
    });
  });
  