// DOM কন্টেন্ট লোড হওয়ার পর স্ক্রিপ্ট এক্সিকিউট
document.addEventListener('DOMContentLoaded', function () {
  const progress = document.getElementById('progress')
  progress.style.display = 'none'

  const header = document.querySelector(".header-topLeft");
  header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),url(gallary/protistan/picture1.jpg)`;

  // 3D কার্ড হোভার এফেক্ট
  const cards = document.querySelectorAll('.hedarcontent');
  cards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const cardRect = this.getBoundingClientRect();

      const x1 = e.clientX - cardRect.left;
      const y1 = e.clientY - cardRect.top;
      this.style.setProperty('--x', x1 + 'px');
      this.style.setProperty('--y', y1 + 'px');

      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;

      const centerX = cardRect.width / 5;
      const centerY = cardRect.height / 5;

      const rotateX = (y - centerY) / 500;
      const rotateY = (centerX - x) / 500;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });

  // নেভিগেশন লিঙ্কগুলির জন্য স্মুথ স্ক্রোলিং
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // সক্রিয় লিঙ্ক আপডেট করা
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // স্ক্রোল ইভেন্টে সক্রিয় নেভিগেশন আপডেট করা
  window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 150;

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection.offsetTop <= scrollPos &&
        targetSection.offsetTop + targetSection.offsetHeight > scrollPos) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  //navmenu uto right
  const navmenu = document.querySelector('.nav-menu')

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
      navmenu.style.marginLeft = '100%';
    } else {
      navmenu.style.marginLeft = '0';
    }

  });


  const upreicon = document.getElementById('upreicon');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 550) {
      upreicon.style.display = 'flex';
    } else {
      upreicon.style.display = 'none';
    }
  });

  window.upre = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  // হ্যামবার্গার মেনু টগল
  const headerHamburger = document.getElementById('headerHamburger');
  const fixedHamburger = document.getElementById('fixedHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (headerHamburger) {
    headerHamburger.addEventListener('click', function () {
      mobileMenu.style.right = '0';
    });
  }
  if (fixedHamburger) {
    fixedHamburger.addEventListener('click', function () {
      mobileMenu.style.right = '0';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      mobileMenu.style.right = '-600px';
      closeMenu.classList.remove('active1');
    });
  }

  // স্মুথ স্ক্রোলিং
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      mobileMenu.style.right = '-600px';
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // মোবাইল মেনু বন্ধ করা
        if (window.innerWidth <= 768) {
          mobileMenu.style.right = '-300px';
        }
      }
    });
  });

  // ফিক্সড হেডার স্ক্রোল ইভেন্ট
  const fixedHeader = document.getElementById('fixedHeader');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
      fixedHeader.style.top = '0';
      fixedHeader.style.display = 'flex';
    } else {
      fixedHeader.style.top = '-100px';
      fixedHeader.style.display = 'none';
    }
  });

  // Notification দেখাবে কিছু সেকেন্ড পরে
  setTimeout(() => {
    showNotification();
  }, 3000); // ৩ সেকেন্ড পরে আসবে


  function showNotification() {
    let blockCount = localStorage.getItem("blockCount") || 0;
    blockCount = parseInt(blockCount);

    // যদি ব্লক করা থাকে আর ১০ বারের মধ্যে হয় তাহলে দেখাবে না
    if (blockCount > 0 && blockCount < 10) {
      localStorage.setItem("blockCount", blockCount + 1);

      const notifectionDiv = document.querySelector('.sodosonotifeketion');
      const modalcanect = document.querySelector('.allmodal');
      modalcanect.removeChild(notifectionDiv);
      return;
    }

    // যদি blockCount >= ১০ হয়ে যায় তাহলে আবার reset করে দেখাবে
    if (blockCount >= 10) {
      localStorage.setItem("blockCount", 0);
    }
    notifectionDiv.style.display = "grid";
  }
  const notifectionDiv = document.createElement('div');
  notifectionDiv.className = 'sodosonotifeketion';
  notifectionDiv.id = 'notification';
  notifectionDiv.innerHTML = ` 
                   <div class="noticontet">
            <button class="close-btnnot" id="close-btnnot" title="শুধু লুকাবে, রিফ্রেশ করলে আবার আসবে">❌️</button>
            <button class="block-btn" id="block-btn" title="ব্রাউজার ১০ রিফ্রেশ করা পর্যন্ত লুকানো থাকবে">block</button>
            <div class="notifbody">
                <p class="salam">আচ্ছালামুআলাইকুম।</p>
                <p class="sagtom">পীরজাদী ফাউণ্ডেশানের ওয়েবসাইটে আপনাকে স্বাগতম।</p>
                <span class="witline"></span>
                <div class="formworf">
                    <p class="onurod">সদস্য হওয়ার জন্য আবেদন করুন</p>
                    <a href="sodossofrom.html"><button class="formbtn" id="formbtn">সদস্য ফর্ম</button></a>
                </div>
            </div>
  </div>`;


  const modalcanect = document.querySelector('.allmodal');
  modalcanect.appendChild(notifectionDiv);


  // ❌ Close বাটন → শুধু লুকাবে, রিফ্রেশ করলে আবার আসবে
  document.querySelector(".close-btnnot").addEventListener("click", () => {
    setTimeout(() => {
      document.getElementById("notification").style.transform = "translateY(-30px)";
    }, 120); // কিছুক্ষন পরে যাবে
    setTimeout(() => {
      document.getElementById("notification").style.display = "none";
    }, 500); // কিছুক্ষন পরে যাবে
    document.querySelector(".formbtn").style.background = 'rgba(165, 18, 13, 1)';
    style.animation = 'none';

  });

  // 🚫 Block বাটন → ১০ রিফ্রেশ পর্যন্ত লুকানো থাকবে
  document.querySelector(".block-btn").addEventListener("click", () => {
    localStorage.setItem("blockCount", 1); // ব্লক শুরু
    setTimeout(() => {
      document.getElementById("notification").style.transform = "translateY(-30px)";
    }, 120); // কিছুক্ষন পরে যাবে
    setTimeout(() => {
      document.getElementById("notification").style.display = "none";
    }, 500); // কিছুক্ষন পরে যাবে
    setTimeout(() => {
      const notifectionDiv = document.querySelector('.sodosonotifeketion');
      const modalcanect = document.querySelector('.allmodal');
      modalcanect.removeChild(notifectionDiv);
    }, 600);

    document.getElementById("notification").style.background = "linear-gradient(to bottom, #63070f13, transparent);";
  });

  const formbtn = document.getElementById('formbtn');
  if (formbtn) {
    formbtn.addEventListener('click', function () {
      formbtn.style.background = 'linear-gradient(135deg, rgb(1, 117, 160) 0%,  #0f2748 100%)';
      formbtn.style.animation = 'none';
    });
  }

  // লিংকের জন্য অ্যাকর্ডিয়ন ফাংশনালিটি
  document.querySelectorAll('.link-btn').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // সাথে সাথে redirect বন্ধ

      const button = this.querySelector('button');
      const arrow = button.querySelector('.htmlicon');
      const loader = button.querySelector('.loading');

      // আগে থেকে অন্য বাটনে কিছু থাকলে reset করে দাও
      document.querySelectorAll('.accordion2 .loading').forEach(l => l.style.display = 'none');
      document.querySelectorAll('.accordion2 .htmlicon').forEach(a => a.style.opacity = 1);

      // এখন শুধু ক্লিক করা বাটনের জন্য দেখাও
      arrow.style.opacity = 0;
      loader.style.display = 'inline-block';

      // ছোট delay দিয়ে redirect করো
      setTimeout(() => {
        window.location.href = this.getAttribute('href');
      }, 150);

      setTimeout(() => {
        loader.style.display = 'none';
        arrow.style.opacity = 1;
      }, 150);
    });
  });


  // অ্যাকর্ডিয়ন ফাংশনালিটি
  const acc = document.getElementsByClassName('accordion1');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
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
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0 25px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });



  const cardlink = document.querySelectorAll('.cardlink');
  cardlink.forEach(clink => {
    clink.addEventListener('click', function (e) {
      e.preventDefault();

      const carname = this.getAttribute('data-crd-name')
      const linkelsoshow = document.getElementById('cardname')

      linkelsoshow.textContent = carname
    })
  })

  const cradnamecanect = document.getElementById('linkelssw');

  const linkelsclos = document.querySelector('.linkelsclos')

  linkelsclos.addEventListener('click', function () {
    cradnamecanect.style.display = 'none';
  })


  window.addEventListener('click', function (e) {
    if (e.target === cradnamecanect) {
      cradnamecanect.style.display = 'none';
    }
  });

  // ফেসবুক লিংক হ্যান্ডলার
  const fbLinks = document.querySelectorAll('.fb-link-js');

  fbLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const url = this.getAttribute('data-fb-url');
      const name = this.getAttribute('data-fb-name');
      const img = this.getAttribute('data-fb-img');


      const fbModal = document.createElement('div');
      fbModal.id = 'fbModal'
      fbModal.innerHTML = `
        <div class="fbModal-content">
            <button onclick="closeFBModal()" class="fbBackBtn">🔙 Back</button>
            <div class="fbModal-body">
                <img id="profile-pic" class="profile-pic" alt="profile-picture" src="${img}">
                <p id="profile-name" class="profile-name">${name}</p>
                <a id="fb-link" href="${url}" target="_blank" class="fbBtn">Open Facebook</a>
                <p class="fb-note">ফেসবুক অ্যাপ বা নতুন ট্যাবে খোলা হচ্ছে…</p>
            </div>
        </div>`
      modalcanect.appendChild(fbModal);
    });
  });

  // ফেসবুক মোডাল বন্ধ করা
  window.closeFBModal = function () {
    fbModal.style.display = 'none';
    modalcanect.removeChild(fbModal);
  };

  // মোডালের বাইরে ক্লিক করলে বন্ধ করা
  window.addEventListener('click', function (e) {
    if (e.target === fbModal) {
      fbModal.style.display = 'none';
      modalcanect.removeChild(fbModal);
    }
  });

  // ইমেজ মার্কি পজিশন রিসেট
  const marqueeTrackcontiner = document.querySelector('.image-marquee');
  marqueeTrackcontiner.innerHTML = `
        <div class="marquee-track">
            <img src="gallary/mahfil/picture4.jpg" alt="loding..1">
            <img src="gallary/protistan/picture1.jpg" alt="loding..2">
            <img src="gallary/protistan/picture2.jpg" alt="loding..3">
            <img src="gallary/mahfil/picture5.jpg" alt="loding..5">
            <img src="gallary/mahfil/picture6.jpg" alt="loding..6">
            <img src="gallary/mahfil/picture7.jpg" alt="loding..7">
            <img src="gallary/mahfil/picture8.jpg" alt="loding..8">
            <img src="gallary/mahfil/picture9.jpg" alt="loding..9">
            <img src="gallary/karzo/picture5.jpg" alt="loding..10">
            <img src="gallary/karzo/picture10.jpg" alt="loding..11">
            <img src="gallary/mahfil/picture11.jpg" alt="loding..12">
            <img src="gallary/mahfil_postar/picture1.jpg" alt="loding..13">
            <img src="gallary/mahfil_postar/picture7.jpg" alt="loding..14">
        </div>`

  const marqueeTrack = document.querySelector('.marquee-track');

  // মার্কি ট্র্যাকের ক্লোন তৈরি করে অনন্ত লুপের ইলিউশন দেওয়া
  if (marqueeTrack) {
    const marqueeContent = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = marqueeContent + marqueeContent;

    // অ্যানিমেশন শেষ হলে রিসেট
    marqueeTrack.addEventListener('animationiteration', function () {
      if (this.style.animationPlayState === 'running') {
        this.style.animation = 'none';
        void this.offsetWidth; // রিফ্লো ট্রিগার
        this.style.animation = null;
      }
    });
  }


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
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

});
