// DOM কন্টেন্ট লোড হওয়ার পর স্ক্রিপ্ট এক্সিকিউট
document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress')
    window.addEventListener('DOMContentLoaded', function () {
        if (window.document) {
            progress.style.display = 'none'
        } else {
            progress.style.display = 'block'
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
        if (document.querySelector('.optinocntiner.show')) {
            if (!(e.target === damolbtn || e.target === btnicon)) {
                damolbtn.classList.remove('active');
                dmenu.classList.remove('show');
                iconhandel();
            }
        }
    });

    const damolbtn = document.getElementById('downloadamolnamabtn');
    const dmenu = document.querySelector('.optinocntiner');
    const btnicon = document.querySelector('.btnicon');
    
    damolbtn.addEventListener('click', function () {
        damolbtn.classList.toggle('active');
        dmenu.classList.toggle('show')
        iconhandel()
    });

    function iconhandel() {
        const daolactv = damolbtn.classList.contains('active');
        if (daolactv) {
            btnicon.innerHTML = `<i class="fas fa-minus"></i>`
        } else {
            btnicon.innerHTML = `<i class="fas fa-plus"></i>`
        }
    }

    const optbtn = document.querySelectorAll('.optionbtn.amlpdd')
    optbtn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const selectopt = e.currentTarget.dataset.optc;
            downloadpdf(selectopt)
        })
    })

    function downloadpdf(selact) {
        const url1 = "all_pdf_folder/amolnamapdf.pdf"
        const link1 = document.createElement('a');
        link1.href = url1;
        link1.download = 'আমল নামা (প্রথম পৃষ্ঠা).pdf';

        const url2 = "all_pdf_folder/amolnamabackpdf.pdf"
        const link2 = document.createElement('a');
        link2.href = url2;
        link2.download = 'আমল নামা (দ্বিতীয় পৃষ্ঠা).pdf';

        if (selact === 'all') {
            link1.click();
            setTimeout(() => {
                link2.click();
            }, 10);
            return;
        }

        if (selact === '1stpage') {
            link1.click();
            return;
        }
        if (selact === '2ndpage') {
            link2.click();
            return;
        }
    }

});