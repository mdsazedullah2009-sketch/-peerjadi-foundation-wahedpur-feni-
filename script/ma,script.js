 // অ্যাকর্ডিয়ন ফাংশনালিটি
    document.querySelectorAll(".accordion").forEach(function(btn1) {
        btn1.addEventListener("click", function() {
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
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