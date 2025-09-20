// DOM কন্টেন্ট লোড হওয়ার পর স্ক্রিপ্ট এক্সিকিউট
document.addEventListener('DOMContentLoaded', function() {
  
  // হ্যামবার্গার মেনু টগল
  const headerHamburger = document.getElementById('headerHamburger');
  const fixedHamburger = document.getElementById('fixedHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  
  if (headerHamburger) {
    headerHamburger.addEventListener('click', function() {
      mobileMenu.style.right = '0';
    });
  }
  
  if (fixedHamburger) {
    fixedHamburger.addEventListener('click', function() {
      mobileMenu.style.right = '0';
    });
  }
  
  if (closeMenu) {
    closeMenu.addEventListener('click', function() {
      mobileMenu.style.right = '-300px';
    });
  }
  
  // ফিক্সড হেডার স্ক্রোল ইভেন্ট
  const fixedHeader = document.getElementById('fixedHeader');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      fixedHeader.style.top = '0';
    } else {
      fixedHeader.style.top = '-100px';
    }
  });

    // লিংকের জন্য অ্যাকর্ডিয়ন ফাংশনালিটি
  const accli = document.getElementsByClassName('accordion2');
  
  for (let i = 0; i < accli.length; i++) {
    accli[i].addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
  
  // অ্যাকর্ডিয়ন ফাংশনালিটি
  const acc = document.getElementsByClassName('accordion1');
  
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
  
// অ্যাকর্ডিয়ন ফাংশনালিটি
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      acc.classList.toggle('active');
      const panel = acc.nextElementSibling;
      if(panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.padding = "0 25px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });



  // ফেসবুক লিংক হ্যান্ডলার
  const fbLinks = document.querySelectorAll('.fb-link-js');
  const fbModal = document.getElementById('fbModal');
  const profilePic = document.getElementById('profile-pic');
  const profileName = document.getElementById('profile-name');
  const fbLink = document.getElementById('fb-link');
  
  fbLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const url = this.getAttribute('data-fb-url');
      const name = this.getAttribute('data-fb-name');
      const img = this.getAttribute('data-fb-img');
      
      profilePic.src = img;
      profileName.textContent = name;
      fbLink.href = url;
      
      fbModal.style.display = 'flex';
    });
  });
  
  // ফেসবুক মোডাল বন্ধ করা
  window.closeFBModal = function() {
    fbModal.style.display = 'none';
  };
  
  // মোডালের বাইরে ক্লিক করলে বন্ধ করা
  window.addEventListener('click', function(e) {
    if (e.target === fbModal) {
      fbModal.style.display = 'none';
    }
  });
  
  // ইমেজ মার্কি পজিশন রিসেট
  const marqueeTrack = document.querySelector('.marquee-track');
  
  // মার্কি ট্র্যাকের ক্লোন তৈরি করে অনন্ত লুপের ইলিউশন দেওয়া
  if (marqueeTrack) {
    const marqueeContent = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = marqueeContent + marqueeContent;
    
    // অ্যানিমেশন শেষ হলে রিসেট
    marqueeTrack.addEventListener('animationiteration', function() {
      if (this.style.animationPlayState === 'running') {
        this.style.animation = 'none';
        void this.offsetWidth; // রিফ্লো ট্রিগার
        this.style.animation = null;
      }
    });
  }
  
  // স্মুথ স্ক্রোলিং
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // মোবাইল মেনু বন্ধ করা
        if (window.innerWidth <= 768) {
          mobileMenu.style.right = '-300px';
        }
      }
    });
  });
  
  // নোটিশ বোর্ডে তারিখ আপডেট
  const dateParagraph = document.querySelector('.paragraph-P10');
  if (dateParagraph) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    dateParagraph.textContent = `তারিখ: ${formattedDate}`;
  }
  
  // লোডিং এফেক্ট
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
});
