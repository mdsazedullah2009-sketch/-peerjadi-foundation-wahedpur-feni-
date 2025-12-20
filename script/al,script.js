// DOM কন্টেন্ট লোড হওয়ার পর স্ক্রিপ্ট এক্সিকিউট
document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress')
    progress.style.display = 'none'

    // ফিক্সড হেডার স্ক্রোল ইভেন্ট
    const fixedHeader = document.getElementById('fixedHeader');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 250) {
            fixedHeader.style.top = '0';
        } else {
            fixedHeader.style.top = '-100px';
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

    // অ্যাকর্ডিয়ন ফাংশনালিটি
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            accordion.classList.toggle('active');
            const panel = this.nextElementSibling;
            const mainalbam = panel.querySelector('.album');

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }

            lodadcanect(panel, mainalbam);
        });
    });

    function lodadcanect(panel, mainalbam) {
        if (panel.style.display === 'block') {
            mainalbam.querySelectorAll('.album-item').forEach(container => {
                const realImg = container.querySelector('.main-pictur');
                const realImgsrc = realImg.getAttribute('data-src');
                const placeholder = document.querySelector('.pictuerloaderor');
                const placeholdersrc = placeholder.getAttribute('data-pictureholder-src');
                pictuerloaderorcontent(realImg, realImgsrc, placeholdersrc);
            });
        };
    }

    // প্রথম অ্যাকর্ডিয়ন খুলে রাখা
    document.querySelector('.accordion').click();

    function pictuerloaderorcontent(realImg, realImgsrc, placeholdersrc) {

        realImg.src = placeholdersrc
        realImg.addEventListener('load', () => {
            setTimeout(() => {
                realImg.src = realImgsrc;
            }, 100);
        });
        realImg.addEventListener('error', () => {
            realImg.innerHTML = `
            <div class="videonai">
                <div class="nonevideocontent">
                    <div class="iformetionicon"><i class="fa-solid fa-image"></i></div>
                    <div class="ifrom">কোনো ছবি নাই</div>
                </div>
            </div>`
        });
    }

    // লাইটবক্স ফাংশনালিটি
    const albumItems = document.querySelectorAll('.album-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    let currentAlbumItems = [];

    albumItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // বর্তমান সেকশনের সমস্ত অ্যালবাম আইটেম সংগ্রহ
            const section = item.closest('section');
            currentAlbumItems = Array.from(section.querySelectorAll('.album-item'));
            currentIndex = currentAlbumItems.indexOf(item);

            lightbox.classList.add('active');
            updateLightbox();
        });
    });

    function updateLightbox() {
        const imgSrc = currentAlbumItems[currentIndex].querySelector('img').src;
        const caption = currentAlbumItems[currentIndex].querySelector('.album-caption').textContent;

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
    }

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        lightboxImg.src = ''
        lightboxCaption.textContent = ''
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentAlbumItems.length) % currentAlbumItems.length;
        updateLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
            currentIndex = (currentIndex - 1 + currentAlbumItems.length) % currentAlbumItems.length;
            updateLightbox();
        }
    });


    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentAlbumItems.length;
        updateLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
            currentIndex = (currentIndex + 1) % currentAlbumItems.length;
            updateLightbox();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && lightbox.classList.contains('active')) {
            currentIndex = (currentIndex + 1) % currentAlbumItems.length;
            updateLightbox();
        }
    });

    // ESC কী দিয়ে লাইটবক্স বন্ধ করা
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            lightboxImg.src = ''
            lightboxCaption.textContent = ''
        }
    });

    // ফেসবুক লিংক হ্যান্ডলার
    const fbLinks = document.querySelectorAll('.fb-link-js');
    const fbModal = document.getElementById('fbModal');
    const profilePic = document.getElementById('profile-pic');
    const profileName = document.getElementById('profile-name');
    const fbLink = document.getElementById('fb-link');

    fbLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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
    window.closeFBModal = function () {
        fbModal.style.display = 'none';
    };

    // মোডালের বাইরে ক্লিক করলে বন্ধ করা
    window.addEventListener('click', function (e) {
        if (e.target === fbModal) {
            fbModal.style.display = 'none';
        }
    });


    // স্মুথ স্ক্রোলিং
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;


            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
        if (window.pageYOffset > 250) {
            navmenu.style.marginLeft = '40%';
        } else {
            navmenu.style.marginLeft = '0';
        }
    });


    // লোডিং এফেক্ট
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });
});
