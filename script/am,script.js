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

    // অ্যাকর্ডিয়ন ফাংশনালিটি
    document.querySelectorAll(".accordion").forEach(function (btn1) {
        btn1.addEventListener("click", function () {
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
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


});
