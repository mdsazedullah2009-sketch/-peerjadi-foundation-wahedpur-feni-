// সব accordion বাটনের জন্য কাজ করবে
document.querySelectorAll(".accordion").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let panel = btn.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Lightbox Script
const albumImages = document.querySelectorAll(".album-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

albumImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + albumImages.length) % albumImages.length;
  lightboxImg.src = albumImages[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % albumImages.length;
  lightboxImg.src = albumImages[currentIndex].src;
});

document.addEventListener('DOMContentLoaded', function() {
    // হ্যামবার্গার মেনু
    const hamburger = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('header');
    
    let hideTimer;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

        // স্ক্রলিং ইভেন্ট হ্যান্ডলার
    window.addEventListener('scroll', function() {
        const headerRect = header.getBoundingClientRect();
        
        // হেডার যখন স্ক্রিনের বাইরে চলে যাবে
        if (headerRect.bottom < 0) {
            hamburger.classList.add('scrolled');
            // স্ক্রলিং চলাকালীন হাইড হওয়া বন্ধ করা
            clearTimeout(hideTimer);
            hamburger.classList.remove('hide');

            // স্ক্রলিং থেমে গেলে হাইড করার জন্য টাইমার সেট করা
            hideTimer = setTimeout(() => {
                hamburger.classList.add('hide');
            }, 5000); // 5 সেকেন্ড পর হাইড হবে
            
        } else {
            // যখন হেডার আবার দেখা যাবে
            hamburger.classList.remove('scrolled');
            hamburger.classList.remove('hide');
            clearTimeout(hideTimer); // টাইমার বাতিল করা
        }
    });
// নতুন কোড: ফেসবুক লিঙ্ক হ্যান্ডেল করা
    const fbLinks = document.querySelectorAll('.fb-link-js');
    fbLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // লিংকের ডিফল্ট অ্যাকশন বন্ধ করে
            const url = this.getAttribute('data-fb-url');
            const name = this.getAttribute('data-fb-name');
            const img = this.getAttribute('data-fb-img'); // এখানে 'img' ভেরিয়েবলে সঠিক ছবির পাথ থাকবে
            openFBModal(url, name, img);
        });
    });
});

// ফেসবুক মডাল খোলা
function openFBModal(url, name, img) {
    const modal = document.getElementById("fbModal");
    const fbBtn = document.getElementById("fb-link");
    const profileName = document.getElementById("profile-name");
    const profilePic = document.getElementById("profile-pic");

    fbBtn.href = url;
    profileName.textContent = name;
    
    // সংশোধিত লাইন: এখানে img ভেরিয়েবল থেকে ছবির পাথ নেওয়া হয়েছে
    if (img) {
        profilePic.src = img;
    } else {
        profilePic.src = ''; // যদি কোনো ছবি না থাকে তাহলে src ফাঁকা রাখুন
    }
    profilePic.alt = `Profile picture of ${name}`;

    modal.style.display = "flex";
    
    // ব্রাউজার হিস্টোরিতে একটি নতুন এন্ট্রি যোগ করা
    history.pushState({modalOpen: true}, '', '#modal');
}

// ফেসবুক মডাল বন্ধ করা এবং হিস্টোরি API ব্যবহার
function closeFBModal() {   
    if (location.hash === '#modal') {
        history.back();
    }
}

// ব্রাউজারের ব্যাক বাটনে ক্লিক করলে মডাল বন্ধ হবে
window.onpopstate = function(event) {
    if (location.hash !== '#modal') {
        const modal = document.getElementById("fbModal");
        modal.style.display = "none";
    }
};