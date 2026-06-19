
const navhtm = document.querySelector('.min-menu');
// ১. মিডিয়া কোয়েরি সেট করা (Max-width: 1024px)
const maxWidth1024 = window.matchMedia("(max-width: 1024px)");

// ২. একটি ফাংশন তৈরি করা যা স্ক্রিন সাইজ অনুযায়ী কাজ করবে
function handleScreenChange(e) {
    if (e.matches) {
        navhtm.innerHTML=`
            <div class="menu-logo-cros">
                <div class="menu-name-logo">
                    <img src="assets/logo/logo.png" alt="pirjadi faundation logo" class="main-logo">
                    <div class="nav-name"><span class="nav-bold">PEEJADI</span><span class="nav-hide">FOUNDATION</span>
                    </div>
                </div>

                <div class="menu-crose">
                    <button class="cllose-menu btn " id="menu-cllos"><i class="fas fa-close"></i></button>
                </div>
            </div>

            <div class="menu-riht-itme">

                <div class="menu-item">
                    <button class="nav-link btn menu-btn active" id="hombtn" data-cl="hombtn" data-id="#top-header">হোম</button>
                    <button class="nav-link btn menu-btn" id="abobtn" data-cl="abobtn" data-id="#about">আমাদের
                        সম্পর্কে</button>
                    <button class="nav-link btn menu-btn" id="actbtn" data-cl="actbtn"
                        data-id="#activities">কার্যক্রম</button>
                    <button class="nav-link btn menu-btn" id="mahftn" data-cl="mahftn" data-id="#mahfil">মাহফিল</button>
                    <button class="nav-link btn menu-btn" id="contbtn" data-cl="contbtn" data-id="#contact">যোগাযোগ</button>
                    <button class="btn menu-btn galbtn">গ্যালারী</button>
                </div>
            </div>
            
            <div class="menu-btn-cont" style="visibility: hidden;">
                    <button class="dontet-btn btn menu-btn" data-id="dontetbtn"hidden  disabled>Donate Now</button>
            </div>`;
            mobailnavhendel();
            navlinkhandel();
            handeldonetbtn();
            galaribtnhanddel();
    } else {
        navhtm.innerHTML=`
            <div class="menu-logo-cros">
                <div class="menu-name-logo">
                    <img src="assets/logo/logo.png" alt="pirjadi faundation logo" class="main-logo">
                    <div class="nav-name"><span class="nav-bold">PEEJADI</span><span class="nav-hide">FOUNDATION</span>
                    </div>
                </div>

                <div class="menu-crose">
                    <button class="cllose-menu btn " id="menu-cllos"><i class="fas fa-close"></i></button>
                </div>
            </div>

            <div class="menu-riht-itme">

                <div class="menu-item">
                    <button class="nav-link btn menu-btn active" id="hombtn" data-cl="hombtn" data-id="#top-header">হোম</button>
                    <button class="nav-link btn menu-btn" id="abobtn" data-cl="abobtn" data-id="#about">আমাদের
                        সম্পর্কে</button>
                    <button class="nav-link btn menu-btn" id="actbtn" data-cl="actbtn"
                        data-id="#activities">কার্যক্রম</button>
                    <button class="nav-link btn menu-btn" id="mahftn" data-cl="mahftn" data-id="#mahfil">মাহফিল</button>
                    <button class="nav-link btn menu-btn" id="contbtn" data-cl="contbtn" data-id="#contact">যোগাযোগ</button>
                    <button class="btn menu-btn galbtn" data-id="pages/gallery.html">গ্যালারী</button>
                </div>
            
                <div class="menu-btn-cont" style="visibility: hidden;">
                    <button class="dontet-btn btn menu-btn" data-id="dontetbtn" hidden disabled>Donate Now</button>
                </div>
            </div>`;
            navlinkhandel();
            handeldonetbtn();
            galaribtnhanddel();
    }
}

// ৩. পেজটি প্রথমবার লোড হওয়ার সময় চেক করবে
handleScreenChange(maxWidth1024);

// ৪. ইউজার যখন লাইভ স্ক্রিন ছোট-বড় (Resize) করবে, তখনো যেন স্বয়ংক্রিয়ভাবে চেক করে
maxWidth1024.addEventListener("change", handleScreenChange);

// ==========================================================================
// 📱 মোবাইল মেনু টগল (Open & Close Drawer Logic)
// ==========================================================================
function mobailnavhendel() {
    // এলিমেন্টগুলো আইডি ও ক্লাস অনুযায়ী সিলেক্ট করা
    const menuTrigger = document.getElementById('mobile-menu-trigger'); // হ্যামবার্গার বাটন
    const mobileNav = document.querySelector('.min-nav');               // মেইন মোবাইল নেভ কন্টেইনার
    const menuCloseBtn = document.getElementById('menu-cllos');         // ক্রস বাটন

    // ১. হ্যামবার্গার আইকনে ক্লিক করলে মেনু ওপেন করার লজিক
    if (menuTrigger && mobileNav) {
        menuTrigger.addEventListener('click', function (e) {
            e.stopPropagation(); // ইভেন্ট বাবলিং রোধ করা
            mobileNav.classList.add('show'); // সিএসএস-এর '.show' ক্লাস যুক্ত হবে
            document.body.style.overflow = 'hidden'; // মেনু খোলা অবস্থায় পেজের মেইন স্ক্রলিং বন্ধ থাকবে
        });
    }

    // ২. ক্রস (Close) বাটনে ক্লিক করলে মেনু বন্ধ করার লজিক
    if (menuCloseBtn && mobileNav) {
        menuCloseBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileNav.classList.remove('show'); // সিএসএস-এর '.show' ক্লাস রিমুভ হবে
            document.body.style.overflow = ''; // পেজের সাধারণ স্ক্রলিং আবার সচল হবে
        });
    }

    // ৩. এক্সট্রা ইউএক্স সুবিধা: মেনু প্যানেলের বাইরে (কালো ব্লার ব্যাকড্রপে) ক্লিক করলেও যেন মেনু বন্ধ হয়ে যায়
    if (mobileNav) {
        mobileNav.addEventListener('click', function (e) {
            // যদি ক্লিকটি মেইন কন্টেইনারে হয় (ভেতরের '.min-menu' প্যানেলে না হয়)
            if (e.target === mobileNav) {
                mobileNav.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ৪. মোবাইল মেনুর কোনো লিংকে ক্লিক করলেও মেনু স্বয়ংক্রিয়ভাবে বন্ধ হয়ে টার্গেটেড সেকশনে স্ক্রল করবে
    const mobileMenuLinks = document.querySelectorAll('.min-menu .menu-btn');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav) {
                mobileNav.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
}

function navlinkhandel() {
   
// নেভিগেশন লিঙ্কগুলির জন্য স্মুথ স্ক্রোলিং
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-id');
        const targrtactivcl = this.getAttribute('data-cl');
        const targrtactivclass = document.querySelector(`#${targrtactivcl}`);

        const formattedId = targetId.startsWith('#') ? targetId : `#${targetId}`;
        const targetSection = document.querySelector(formattedId);

        if (targetSection) {
            navLinks.forEach(l => l.classList.remove('active'));
            targrtactivclass.classList.add('active');

            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });

// স্ক্রোল ইভেন্টে সক্রিয় নেভিগেশন আপডেট করা
    const scrollPos = window.scrollY + 150;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('data-id');
        const targrtactivcl = link.getAttribute('data-cl');
        const targrtactivclass = document.querySelector(`#${targrtactivcl}`);

        if (!targetId) return;

        const formattedId = targetId.startsWith('#') ? targetId : `#${targetId}`;
        const targetSection = document.querySelector(formattedId);

        if (targetSection) {
            if (targetSection.offsetTop <= scrollPos &&
                targetSection.offsetTop + targetSection.offsetHeight > scrollPos) {

                navLinks.forEach(l => l.classList.remove('active'));
                targrtactivclass.classList.add('active');
            }
        }
    });
});
}

galaribtnhanddel();
function galaribtnhanddel(){
const galbtn =document.querySelectorAll('.galbtn')
galbtn.forEach(glbtn => {
    glbtn.addEventListener('click', function () {
        const a =document.createElement('a');
        a.href="pages/gallery.html";
        a.click();
    })
})
}

// টপ স্ক্রোল বাটন লজিক
const upreicon = document.getElementById('send-top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 550) {
        upreicon.style.display = 'flex';
    } else {
        upreicon.style.display = 'none';
    }
});
upreicon.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// সদস্য ফর্ম বাটন
const joinebtn = document.getElementById('addemamberbtn'); 
if (joinebtn) {
    joinebtn.addEventListener('click', function () {
        const ahref = document.createElement('a');
        ahref.href = 'pages/sodossofrom.html';
        ahref.target = '_parent';
        ahref.click();
    });
}
handeldonetbtn()
function handeldonetbtn(){
// ডোনেশন বাটন ক্লিক ট্রিপ
const donetbtn = document.querySelectorAll('.dontet-btn'); 
donetbtn.forEach(dbt => {
    dbt.addEventListener('click', function () {
        showmodalhendel('donet-md', '');
    });
});
}

// কপি বাটন একশন
const pymactioncopy = document.querySelectorAll('.pym-acbt.copy');
pymactioncopy.forEach(ac => {
    ac.addEventListener('click', function () {
        const curid = this.getAttribute('data-pym-id');
        navigator.clipboard.writeText(`${pymcopy(curid)}`)
            .then(() => {
                ac.innerHTML = `<i class="fas fa-check"></i>`;
                setTimeout(() => {
                   ac.innerHTML = `<i class="fas fa-copy"></i>`;
                }, 2000);
            })
            .catch((err) => {
                console.error('কপি করা সম্ভব হয়নি ', err);
            });
    });
});

function pymcopy(curid) {
    const copiitem = ['128540064001', '01916774966', '01916774966', '01916774966'];
    return copiitem[curid];
}

// শেয়ার মডাল ওপেন বাটন
const pymactionsher = document.querySelectorAll('.pym-acbt.sherar');
const mdalheadtytle = document.getElementById('sher-head-titel');

pymactionsher.forEach(as => {
    as.addEventListener('click', function () {
        const curid = this.getAttribute('data-pym-id');
        setupShareModalContent(curid);
        showmodalhendel('dnt-sher-md', curid);
    });
});

// শেয়ার মডালের কন্টেন্ট সেটআপ করার আলাদাকৃত ফাংশন
function setupShareModalContent(curid) {
    const calcetitem = pymshrtextcontec(curid);
    if (calcetitem && mdalheadtytle) {
        mdalheadtytle.innerHTML = `
            <img src="${calcetitem.titelimg}" alt="icon" class="mdal-head-tytle-img"> 
            <span class="pym-name-titl">${calcetitem.titelname} শেয়ার করুন</span> 
        `;
    }
}

function pymshrtextcontec(curid) {
    const clectitem = [
        { titelimg: 'assets/icons/pymant-icon/shonali-bank-logo.png', titelname: 'ইসলামী ব্যাংক' },
        { titelimg: 'assets/icons/pymant-icon/bkash-logo.jpg', titelname: 'বিকাশ' },
        { titelimg: 'assets/icons/pymant-icon/nagad-logo.webp', titelname: 'নগদ' },
        { titelimg: 'assets/icons/pymant-icon/rocket-logo.webp', titelname: 'রকেট' },
    ];
    return clectitem[curid];
}

// পোস্ট কপি ও শেয়ারিং একশন
const pymapstoncopy = document.querySelectorAll('.shar-min.direct-sher');
const pymapstonsher = document.querySelectorAll('.shar-min.copy-post');

pymapstoncopy.forEach(ac => {
    ac.addEventListener('click', function () {
        const curid = this.getAttribute('data-postnum');
        const calcetitem = pympostormaseh(curid);

        navigator.clipboard.writeText(`${calcetitem.textpost}`)
            .then(() => {
                ac.innerHTML = `<i class="fas fa-check"></i>`;
                setTimeout(() => {
                   ac.innerHTML = `<i class="fas fa-copy"></i>`;
                }, 2000);
            })
            .catch((err) => {
                console.error('কপি করা সম্ভব হয়নি ', err);
            });
    });
});

pymapstonsher.forEach(ms => {
    ms.addEventListener('click', function () {
        const curid = this.getAttribute('data-postnum');
        const calcetitem = pympostormaseh(curid);

        if (!calcetitem) return;

        const finalUrl = cancecthref(curid, calcetitem.textpost);
        if (finalUrl) {
            const ahref = document.createElement('a');
            ahref.href = finalUrl;
            ahref.target = '_blank';
            ahref.click();
        }
    });
});

function cancecthref(curid, shertex) {
    const encodedText = encodeURIComponent(shertex);
    const shareUrl = "https://mdsazedullah2009-sketch.github.io/-peerjadi-foundation-wahedpur-feni-/";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // মেসেঞ্জার লিংক ডাইনামিকলি সেটআপ
    const measengertext = isMobile 
        ? `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}` 
        : `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=YOUR_FACEBOOK_APP_ID&redirect_uri=${encodeURIComponent(shareUrl)}`;

    const clectitem = [
        { textsher: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
        { textsher: measengertext },
        { textsher: `https://api.whatsapp.com/send?text=${encodedText}` },
        { textsher: `mailto:?subject=${encodeURIComponent('পীরজাদি ফাউন্ডেশন')}&body=${encodedText}` },
    ];

    return clectitem[curid] ? clectitem[curid].textsher : null;
}

function pympostormaseh(curid) {
    const clectitem = [
        {
            textpost: `🕌 পীরজাদি ফাউন্ডেশন (ওয়াহেদপুর, ফেনী)-এর মানবিক ও দ্বীনি উদ্যোগে শরিক হোন। আপনার দেওয়া অনুদান পৌঁছে যাবে অসহায় শিশু এবং দ্বীনের প্রসারে।

📢 অনুদান পাঠানোর মাধ্যম:
• [এখানে পেমেন্ট মেথডের নাম, যেমন: বিকাশ (পার্সোনাল)]
• নম্বর/অ্যাকাউন্ট: [এখানে নম্বরটি বসবে]

বিস্তারিত জানতে ও সরাসরি যুক্ত হতে ভিজিট করুন: https://mdsazedullah2009-sketch.github.io/-peerjadi-foundation-wahedpur-feni-/`
},
{
    textpost: `আসসালামু আলাইকুম। পীরজাদি ফাউন্ডেশনের (ফেনী) মাদ্রাসা, এতিম শিশু ও মানবসেবামূলক কাজের জন্য কিছু অনুদান সংগ্রহ করা হচ্ছে।

আপনি চাইলে এই [বিকাশ/নগদ/ব্যাংক] নম্বরে আপনার সদকা বা অনুদান পাঠাতে পারেন:
👉 নম্বর: [এখানে নম্বরটি বসবে]

ওয়েবসাইট লিংক: https://mdsazedullah2009-sketch.github.io/-peerjadi-foundation-wahedpur-feni-/
(আপনার একটি ছোট সাহায্যও অনেক বড় ভূমিকা রাখতে পারে।)`
},
{
    textpost: `আসসালামু আলাইকুম। পীরজাদি ফাউন্ডেশনের (ফেনী) মাদ্রাসা, এতিম শিশু ও মানবসেবামূলক কাজের জন্য কিছু অনুদান সংগ্রহ করা হচ্ছে।

আপনি চাইলে এই [বিকাশ/নগদ/ব্যাংক] নম্বরে আপনার সদকা বা অনুদান পাঠাতে পারেন:
👉 নম্বর: [এখানে নম্বরটি বসবে]

ওয়েবসাইট লিংক: https://mdsazedullah2009-sketch.github.io/-peerjadi-foundation-wahedpur-feni-/
(আপনার একটি ছোট সাহায্যও অনেক বড় ভূমিকা রাখতে পারে।)`
},
{
    textpost: `<div style="max-width: 500px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <div style="background-color: #064E3B; padding: 25px; text-align: center;">
    <h2 style="color: #D2AF37; margin: 0; font-size: 22px; font-weight: 600;">পীরজাদি ফাউন্ডেশন</h2>
    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px;">ওয়াহেদপুর, ফেনী সদর, ফেনী</p>
    </div>
    <div style="padding: 25px; background-color: #fbfafc; color: #333333; line-height: 1.6;">
    <p style="margin-top: 0;">আসসালামু আলাইকুম,</p>
    <p>অসহায় মানুষের পাশে দাঁড়াতে এবং দ্বীনি শিক্ষার প্রসারে <strong>পীরজাদি ফাউন্ডেশন</strong> নিরলসভাবে কাজ করে যাচ্ছে। এই মানবিক যাত্রায় শরিক হতে আপনার প্রতি উদাত্ত আহ্বান জানাচ্ছি।</p>
    <div style="background-color: #ffffff; border-left: 4px solid #D2AF37; padding: 15px; margin: 20px 0; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
    <span style="color: #064E3B; font-weight: bold; display: block; font-size: 14px; text-transform: uppercase;">নির্বাচিত অনুদানের মাধ্যম:</span>
    <strong style="font-size: 18px; color: #333;">[বিকাশ/নগদ/ব্যাংক অ্যাকাউন্ট]</strong>
    <p style="margin: 8px 0 0 0; font-size: 16px; color: #555;">নম্বর: <span style="color: #064E3B; font-weight: bold;">[এখানে নম্বর বসবে]</span></p>
    </div>
    <p style="font-size: 13px; color: #666;">আপনার সামান্য সাহায্য একটি শিশুর মুখে হাসি ফোটাতে পারে এবং ইসলামের আলো ছড়াতে অবদান রাখতে পারে।</p>
    <div style="text-align: center; margin-top: 25px;">
    <a href="https://mdsazedullah2009-sketch.github.io/-peerjadi-foundation-wahedpur-feni-/" style="background-color: #064E3B; color: #D2AF37; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; box-shadow: 0 3px 6px rgba(6,78,59,0.2);">আমাদের ওয়েবসাইট ভিজিট করুন</a>
    </div>
    </div>
    <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eaeaea;">
    © 2026 Peerjadi Foundation. All Rights Reserved.
    </div>
    </div>`
    },
    ];
    return clectitem[curid];
}

// নোটিশ (Notice) মডাল সেকশন
const notois = document.querySelectorAll('.notois');
const ntfmdlbdy = document.getElementById('ntmd-body');
const ntfmdlminbdy = document.getElementById('ntd-min-contet');
const nthdmd = document.getElementById('ntf-md-min-hd');
const ntstmd = document.getElementById('nt-md-suvtitel');
const ntdtmd = document.getElementById('ntdate');
const nttxmd = document.getElementById('nttext');
const ntcrmd = document.getElementById('ntcradit');

let showntid = '';

notois.forEach(nt => {
    nt.addEventListener('click', function () {
        const ntid = this.getAttribute('data-ntf-id');
        showntid = ntid;
        
        stntmdlod(ntstmd);
        setpagelodig(ntfmdlbdy, ntfmdlminbdy);
        showntdmodal();
        ntpnbtnhnl();
    });
});

const ntprove = document.querySelector('.nt-md-fot-sch-btn.prove');
const ntnext = document.querySelector('.nt-md-fot-sch-btn.next');

if (ntprove && ntnext) {
    ntprove.addEventListener('click', function () {
        if (showntid === '1') {
            showntid = '0';
            stntmdlod(ntstmd);
            setpagelodig(ntfmdlbdy, ntfmdlminbdy);
            ntpnbtnhnl();
            showntdmodal();
        }
    });

    ntnext.addEventListener('click', function () {
        if (showntid === '0') {
            showntid = '1';
            stntmdlod(ntstmd);
            setpagelodig(ntfmdlbdy, ntfmdlminbdy);
            ntpnbtnhnl();
            showntdmodal();
        }
    });
}

// ১. নোটিশ মডালের ডাটা লোড ও ওপেন করার ফাংশন (টাইমিং ফিক্সড)
function showntdmodal() {
    // সেফটি চেক: showntid ঠিকমতো আছে কিনা নিশ্চিত করা
    if (showntid === undefined || showntid === '') return;

    // মডালটি আগে ওপেন করা হলো যাতে ইউজার লোডিং দেখতে পায়
    const modal = document.getElementById('ntdtmodal');
    if (modal) {
        modal.classList.add('show');
        window.location.hash = 'ntdtmodal?=' + showntid;
    }

    // টাইমআউট একটু বাড়িয়ে ২৫০ মিলিগ্রাম করা হলো যাতে পেজ ও ডাটা পুরোপুরি লোড হতে পারে
    setTimeout(() => {
        const calcetitem = ntfdtls(showntid);
        
        if (calcetitem) {
            if (ntstmd) ntstmd.innerText = calcetitem.ntsbtitle;
            if (nthdmd) nthdmd.innerText = calcetitem.nttitle;
            if (ntdtmd) ntdtmd.innerHTML = calcetitem.ntdate;
            if (nttxmd) nttxmd.innerHTML = calcetitem.ntdtext;
            if (ntcrmd) ntcrmd.innerHTML = calcetitem.ntcrd;

            // লোডিং অ্যানিমেশন সরিয়ে কন্টেন্ট দৃশ্যমান করা
            const oldchk = ntfmdlbdy ? ntfmdlbdy.querySelector(".lodingpag") : null;
            if (oldchk) {
                ntfmdlbdy.removeChild(oldchk);
                if (ntfmdlminbdy) ntfmdlminbdy.style.opacity = '1';
            }
        }
    }, 250); // ২৫০ মিলিমেকেন্ড সেফ বাফার টাইম
}


function ntpnbtnhnl() {
    if (!ntprove || !ntnext) return;
    if (showntid == '0') {
        ntprove.disabled = true;
        ntnext.disabled = false;
    } 
    if (showntid == '1') {
        ntnext.disabled = true;
        ntprove.disabled = false;
    }
}

function ntfdtls(ntid) {
   const ntms=[
    {
         ntsbtitle:'ফাউণ্ডেশানের বিবৃতি।', nttitle:'বিবৃতি', ntdate:`<p class="ntd-bismillah">বিসমিল্লাহির রাহমানির রহিম</p> <p class="ntd-date">তারিখ:২৯ আগস্ট ২০২৫ইং</p>`,
         ntdtext:`
          <p class="paragraph-P21">পীরজাদী ফাউন্ডেশন, ওয়াহেদপুর, ফেনী একটি অরাজনৈতিক ধর্মীয় প্রতিষ্ঠান।<br>আমাদের প্রতিষ্ঠানের কোনো দলীয় পরিচয় নেই। আমাদের লক্ষ কেবল মানুষের নৈতিক, সমাজিক ও আধ্যাত্মিক উন্নতি। এবং খেলাফতের মাধ্যমে ইসলাম প্রতিষ্ঠা।</p>
          <p class="paragraph-P21">প্রতিটি অনুষ্ঠানে আমরা বিষয়ভিত্তিক ও যোগ্য বক্তাকে আমন্ত্রণ জানাই, তারা যেকোনো রাজনৈতিক মত বা পটভুমি থেকে আসতে পারেন। আমরা বিশ্বাস করি, জ্ঞান ও নৈতিকতার মঞ্চ সবার জন্য উন্মুক্ত হওয়া উচিত, কোনো বিশেষ দলের জন্য নয়।</p>
          <p class="paragraph-P21">পূর্বেও আমদের প্রোগ্রামে একি মঞ্চে বিভিন্ন রাজনৈতিক মতের বক্তারা একসাথে কথা বলেছেন, যা প্রমান করে আমরা কারো একচেটিয়া প্ল্যাাটফর্ম নই।</p>
          <p class="paragraph-P21">তাই যারা পীরজাদী ফাউন্ডেশন, ওয়াহেদপুর, ফেনী'কে রাজনৈতিক আখ্যা দেন তাদের কাছে বিনীত অনুরোধ, প্রমান দিয়ে কথা বলুন; আমরা প্রমান দিয়ে দেখাতে পারবো, আমরা কেবল মানুষের কল্যানে কাজ করি, দলের পতাকার নিচে নয়।</p>`,
          ntcrd:`
          <p>সালামান্তে-           </p>
          <p class="paragraph-P25">মাওঃ নুরুল ইসলাম রাজ্জাকী   </p>
          <p class="paragraph-P25">সভাপতি, পীরজাদী ফাউন্ডেশন।</p>`
        },
        {
            ntsbtitle:'ফাউণ্ডেশানের নামে প্রতারনার সতর্কতা মুলক নোটিশ।', nttitle:'ঘোষনা', ntdate:`<p class="ntd-bismillah">বিসমিল্লাহির রাহমানির রহিম</p> <p class="ntd-date">তারিখ:২৯ আগস্ট ২০২৫ইং</p>`,
            ntdtext:`
            <p class="paragraph-P21">পীরজাদী ফাউন্ডেশন ওয়াহেদপুর ফেনী'র শুভাকাঙ্ক্ষীদের জানানো যাচ্ছে যে, কিছু অসাধু লোকজন আমাদের মাহফিলের নামে চাঁদা তুলে। কিন্তু প্রকৃতপক্ষে ঐ টাকার কোন অংশ ফাউণ্ডেশন পায় না। তাই সবাইকে ওই অসাধু লোকদের কাছ থেকে সতর্ক থাকার অনুরোধ করা হলো। ঐ সকল অসাধু ব্যাক্তিদের এড়াতে কারো মাধ্যমে দান না করে সরাসরি মসজিদে এসে ফাউণ্ডেশন সংশ্লিষ্ট ব্যাক্তিদের হাতে আপনার দান দিয়ে যাওয়ার জন্য বিশেষ ভাবে অনুরোধ করা হলো। অথবা, এই নাম্বারে [(01916774966) রেফারেন্স-4966] বিকাশ বা নগদেের মাধ্যমে শরিক হতে পারেন।</p>`,
            ntcrd: `<p class="paragraph-P25">সালামান্তে-           </p>
            <p class="paragraph-P25">মাওঃ নুরুল ইসলাম রাজ্জাকী  </p>
            <p class="paragraph-P25">সভাপতি, পীরজাদী ফাউন্ডেশন।</p>`
        }
    ];
    return ntms[ntid];
}

function setpagelodig(apoinddiv, hidendiv) {
    if (!apoinddiv) return;
    const loddiv = document.createElement('div');
    loddiv.className = "lodingpag";
    loddiv.innerHTML = `<div class="loding spin"></div>`;

    const oldchk = apoinddiv.querySelector(".lodingpag");
    if (!oldchk) {
        apoinddiv.appendChild(loddiv);
        if (hidendiv) hidendiv.style.opacity = '0';
    } 
}

// আমাদের সম্পর্কে (About) মডাল সেকশন
const alldtmodal = document.getElementById('alldtmodal');
const alldtmdltiyle = document.getElementById('alldtmdltiyle');
const alldtmdlsubtiyle = document.getElementById('allmd-suvtitel');
const alldtmdbdtit = document.getElementById('alldtmdbdtit');
const alldtminbody = document.getElementById('alldtminbody');
const alldtmdbody = document.getElementById('alldtmdbody');
const alldtmdfot = document.getElementById('alldtmdfot');
const showabute = document.getElementById('showabute');

if (showabute) {
    showabute.addEventListener('click', function () {
        stntmdlod(alldtmdltiyle);
        stntmdlod(alldtmdbdtit);
        setpagelodig(alldtminbody, alldtmdbody);
        showdtmddtcanet('abut');
    });
}

function showdtmddtcanet(abut) {
    showmodalhendel('alldtmodal', abut);
    setTimeout(() => {
        const dtitem = alldtmdcontet().find(e => e.id === abut);
        if (dtitem) {
            if (alldtmdltiyle) alldtmdltiyle.innerText = dtitem.title;
            if (alldtmdlsubtiyle) alldtmdlsubtiyle.innerText = dtitem.subtitle;
            if (alldtmdbdtit) alldtmdbdtit.innerText = dtitem.bdysubtitle;
            if (alldtmdbody) alldtmdbody.innerHTML = dtitem.body;
            if (alldtmdfot) alldtmdfot.innerHTML = dtitem.footer;
        }

        const oldchk = alldtminbody ? alldtminbody.querySelector(".lodingpag") : null;
        if (oldchk) {
            alldtminbody.removeChild(oldchk);
            if (alldtmdbody) alldtmdbody.style.opacity = '1';
        }
    }, 100);
}

let showacid ='';

const activitibtn =document.querySelectorAll(".activitibtn");
activitibtn.forEach(ac => {
    ac.addEventListener('click', function () {
        const acid = this.getAttribute('data-crid');
        showacid = acid;
        stntmdlod(alldtmdltiyle);
        stntmdlod(alldtmdbdtit);
        setpagelodig(alldtminbody, alldtmdbody);
        showdtmddtcanet(sendriplasidtoname());
        
    });
});

const mahfilitem =document.querySelectorAll(".mahfil-item");
mahfilitem.forEach(ml => {
    ml.addEventListener('click', function () {
        const mlid = this.getAttribute('data-mhflId');
        stntmdlod(alldtmdltiyle);
        stntmdlod(alldtmdbdtit);
        setpagelodig(alldtminbody, alldtmdbody);
        showdtmddtcanet(mlid);
        
    });
});
function sendriplasidtoname(){
    const name={
        '0':'musqo',
        '1':'madrash',
        '2':'moctob',
        '3':'mahfil'
    }
    return name[showacid]
}

function alldtmdcontet() {
   return [
    { id:'abut', title:'আমাদের সম্পর্কে।', subtitle:'', bdysubtitle:'একটি অরাজনৈতক ধর্মিয় প্রতিষ্ঠান', body:`
        <div class="about-container">
                    
                    <div class="about-card intro-card">
                        <div class="about-badge"><i class="fas fa-university"></i> ভূমিকা ও প্রতিষ্ঠা</div>
                        <p class="about-p">
                            ইসলামের শাশ্বত আলো ও নৈতিক শিক্ষার প্রচার এবং সম্পূর্ণ অরাজনৈতিকভাবে নিবেদিতপ্রাণ হয়ে মানবতার সেবায় কাজ করার দৃঢ় প্রত্যয় নিয়ে ফেনী সদর উপজেলার ওয়াহেদপুর গ্রামে প্রতিষ্ঠিত হয়েছে <strong>"পীরজাদি ফাউন্ডেশন"</strong>। স্থানীয় ধর্মপ্রাণ ও সমাজসেবী মানুষদের আন্তরিক উদ্যোগ এবং সামষ্টিক প্রচেষ্টায় এই ফাউন্ডেশনের পথচলা শুরু হয়। মূলত অবহেলিত ও দুস্থ মানুষের পাশে দাঁড়ানো এবং কোমলমতি শিশুদের মাঝে দ্বীনি ও নৈতিক শিক্ষার আলো পৌঁছে দেওয়াই এই ফাউন্ডেশন প্রতিষ্ঠার মূল চালিকাশক্তি।
                        </p>
                        <div class="about-btn-wrapper">
                            <a href="pages/protistha.html" class="about-action-btn"><i class="fas fa-history"></i> প্রতিষ্ঠার ইতিহাস</a>
                        </div>
                    </div>

                    <div class="about-grid">
                        
                        <div class="about-card vision-card">
                            <h4 class="about-subheading"><i class="fas fa-bullseye"></i> আমরা কেন এবং আমাদের লক্ষ্য কী?</h4>
                            <p class="about-p">একটি আদর্শ ও সুন্দর সমাজ গঠনে ধর্মীয় মূল্যবোধ এবং মানবিক সেবার কোনো বিকল্প নেই। পীরজাদি ফাউন্ডেশন বিশ্বাস করে, সঠিক ইসলামিক জ্ঞান এবং সামাজিক দায়বদ্ধতার সমন্বয়েই একটি সুন্দর ভবিষ্যৎ গড়ে তোলা সম্ভব। আমাদের লক্ষ্য হলো—</p>
                            <ul class="about-list">
                                <li>সমাজ থেকে নিরক্ষরতা ও নৈতিক অবক্ষয় দূর করা।</li>
                                <li>এতিম, অসহায় ও দুস্থ শিশুদের মৌলিক অধিকার ও দ্বীনি শিক্ষার দায়িত্ব নেওয়া।</li>
                                <li>একটি আদর্শ সমাজ ব্যবস্থা গঠনে অবদান রাখা, যেখানে সবাই ধর্মীয় ও মানবিক মূল্যবোধ নিয়ে বেঁচে থাকতে পারে।</li>
                            </ul>
                        </div>

                        <div class="about-card activities-card">
                            <h4 class="about-subheading"><i class="fas fa-tasks"></i> আমাদের মূল কার্যক্রমসমূহ</h4>
                            <p class="about-p">পীরজাদি ফাউন্ডেশন বহুমুখী ধর্মীয় ও সেবামূলক প্রজেক্ট নিয়ে মাঠপর্যায়ে কাজ করে যাচ্ছে:</p>
                            <ul class="about-list-styled">
                                <li><strong><i class="fas fa-mosque"></i> জামে মসজিদ পরিচালনা:</strong> এলাকার সর্বস্তরের মানুষের জন্য ইবাদতের সঠিক পরিবেশ নিশ্চিত করা এবং নিয়মিত দ্বীনি আলোচনার মাধ্যমে ইসলামের সঠিক বার্তা পৌঁছে দেওয়া।</li>
                                <li><strong><i class="fas fa-graduation-cap"></i> মাদ্রাসা ও মক্তব শিক্ষা:</strong> কোমলমতি ও এতিম শিশুদের সম্পূর্ণ বিনামূল্যে পবিত্র কুরআন শিক্ষা, সাধারণ শিক্ষা এবং নৈতিক চরিত্র গঠনের আধুনিক ব্যবস্থা করা।</li>
                                <li><strong><i class="fas fa-users"></i> ইসলামিক মাহফিল ও দাওয়াত:</strong> সাধারণ মানুষের মাঝে ভ্রাতৃত্ববোধ ও সঠিক ইসলামিক সমাজ গঠনে নিয়মিত তাফসিরুল কুরআন মাহফিল ও সেমিনারের আয়োজন করা।</li>
                                <li><strong><i class="fas fa-hand-holding-heart"></i> মানবসেবা ও সামাজিক কল্যাণ:</strong> দুস্থ পরিবারগুলোকে অর্থনৈতিকভাবে স্বাবলম্বী করা, শীতবস্ত্র বিতরণ, জরুরি চিকিৎসায় সহায়তা এবং যেকোনো দুর্যোগে অসহায় মানুষের পাশে দাঁড়ানো।</li>
                            </ul>
                            <div class="about-btn-wrapper" style="margin-top: 20px;">
                                <a href="pages/protisthalokko.html" class="about-action-btn btn-secondary"><i class="fas fa-eye"></i> প্রতিষ্ঠার লক্ষ্য</a>
                            </div>
                        </div>

                    </div>

                    <div class="about-quote-box">
                        <p>"পীরজাদি ফাউন্ডেশন কেবল একটি প্রতিষ্ঠান নয়, এটি দ্বীনের পথে এক অবিরাম পথচলা এবং মানবতার সেবায় একটি নির্ভরযোগ্য আশ্রয়।"</p>
                    </div>

                </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },
        { id:'musqo', title:'কার্যক্রম', subtitle:'ওয়াহেদপুর জামে মসজিদ', bdysubtitle:'শতভাগ হালাল ও চাদামুক্ত প্রতিষ্ঠান', 
            body:`<div class="mosque-grid-container">
                    <div class="mosque-card mdlcard-what">
                        <div class="mdlcard-icon"><i class="fas fa-mosque"></i></div>
                        <h4 class="mdlcard-title">এই মসজিদটি কী?</h4>
                        <p class="mdlcard-text">এটি ইসলামের মূল ও বিশুদ্ধ বিধান কঠোরভাবে অনুসরণের মাধ্যমে পরিচালিত একটি আদর্শ দ্বীনি ও সামাজিক শিক্ষা কেন্দ্র। সম্পূর্ণ চাদামুক্ত এবং প্রচলিত লাগামহীন দান গ্রহণ মুক্ত নীতিমালার ওপর ভিত্তি করে এই জামে মসজিদ এবং এর সাথে সংশ্লিষ্ট শতবর্ষী রাজ্জাকীয়া ফোরকানিয়া মাদ্রাসা পরিচালিত হয়ে আসছে।</p>
                    </div>

                    <div class="mosque-card card-why">
                        <div class="mdlcard-icon"><i class="fas fa-star-of-david"></i></div>
                        <h4 class="mdlcard-title">কেন এই মসজিদটি অনন্য?</h4>
                        <p class="mdlcard-text">মহান আল্লাহর দরবারে ইবাদত কবুল হওয়ার প্রধান শর্ত হালাল রিজিক এবং পবিত্রতা। বৈধ-অবৈধ বা হালাল-হারামের বাছবিচার না করে চোখ বন্ধ করে দান গ্রহণ করার কারণে মসজিদের পবিত্রতা হারানোর সমূহ সম্ভাবনা থাকে। ওয়াহেদপুর জামে মসজিদ এই প্রচলিত নিয়মের সম্পূর্ণ ব্যতিক্রম।</p>
                        <ul class="cmdlard-list">
                            <li><strong>চাদামুক্ত পরিচালনা:</strong> ১৯০০ সাল থেকে মাদ্রাসা এবং ২০০২ সাল থেকে এই মসজিদটি কোনো ধরনের প্রচলিত সাধারণ চাঁদা বা কালো টাকা ছাড়াই পরিচালিত হচ্ছে।</li>
                            <li><strong>ক্রয়-বিক্রয়ের মাধ্যমে দান:</strong> এখানে সরাসরি নগদ টাকা বা নির্মাণ সামগ্রী দান হিসেবে নেওয়ার সুযোগ নেই। আমরা নিজস্ব ধর্মীয় কিতাব, লিফলেট ও দেয়ালিকা বিক্রির মাধ্যমে অনুদান সংগ্রহ করি।</li>
                            <li><strong>এক দানে চার সওয়াব:</strong> আমাদের কিতাব সংগ্রহের মাধ্যমে একজন দাতা একই সাথে পবিত্র মসজিদে শরিক হওয়া, নিজে আমল করা, অন্যকে উপহার দিয়ে সদকায়ে জারিয়াহ লাভ করা এবং দ্বীনি প্রচারকদের হালাল রিজিকের ব্যবস্থা করার সুযোগ পান।</li>
                        </ul>
                        <div class="mospu about-btn-wrapper">
                            <a href="pages/mosjid.html" class="about-action-btn"><i class="fas fa-history"></i> মসজিদ দানে সম্পর্কে</a>
                        </div>
                    </div>

                    <div class="mosque-card mdlcard-where">
                        <div class="mdlcard-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <h4 class="mdlcard-title">মসজিদটি কোথায় অবস্থিত?</h4>
                        <p class="mdlcard-text">দেশের যেকোনো প্রান্ত থেকে আপনি আমাদের এই পবিত্র উদ্যোগে শরিক হতে পারেন কিংবা সরাসরি পরিদর্শন করতে পারেন।</p>
                        <div class="location-details">
                            <p><strong><i class="fas fa-map-signs"></i> গ্রাম:</strong> ওয়াহেদপুর (দেবীপুর)</p>
                            <p><strong><i class="fas fa-envelope"></i> পোষ্ট:</strong> ফতেহপুর</p>
                            <p><strong><i class="fas fa-city"></i> জেলা:</strong> ফেনী সদর, ফেনী, বাংলাদেশ।</p>
                            <p><strong><i class="fas fa-user-tie"></i> খতিব:</strong> মাওলানা নুরুল ইসলাম রাজ্জাকী</p>
                            <p><strong><i class="fas fa-phone-alt"></i> মোবাইল:</strong> ০১৯১৬৭৭৪৯৬৬</p>
                        </div>
                    </div>
                </div>

                <div class="mosque-quote-box">
                    <p>"হারাম বা সন্দেহজনক উপার্জনের টাকায় মসজিদকে বাহ্যিকভাবে সুন্দর ও সুসজ্জিত করার চেয়ে, হালাল ও পবিত্রতার সাথে ভাঙা বা ছোট মসজিদে আল্লাহর ইবাদত করা পরকালের মুক্তির জন্য অধিক নিরাপদ।"</p>
                </div>
            `,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },
        { id:'madrash', title:'কার্যক্রম', subtitle:'রাজ্জাকীয়া ফোরকানীয়া মাদ্রাসা', bdysubtitle:'১২৫ বছরের ঐতিহ্যবাহী সম্পূর্ণ অবৈতনিক ও চাদামুক্ত দ্বীনি শিক্ষালয়', 
            body:`
        <div class="madrasha-container">
            <div class="madrasha-card history-card">
                <div class="madrasha-badge"><i class="fas fa-history"></i> সংক্ষিপ্ত ইতিহাস ও পরিচিতি</div>
                <p class="madrasha-p">
                    এই ঐতিহ্যবাহী ফোরকানিয়া মাদ্রাসাটি <strong>১৯০০ ইংরেজি সালের এক শুভ প্রভাতে</strong> ওয়াহেদপুরস্থ মৌলভী বাড়ীর আঙ্গিনায় প্রথম প্রতিষ্ঠিত হয়। মাদ্রাসাটি প্রতিষ্ঠার পেছনে রয়েছে এক অনন্য ও গৌরবময় ইতিহাস, যা মূলত নারী শিক্ষার এক জ্বলন্ত দৃষ্টান্ত। 
                </p>
                
                <div class="madrasha-timeline">
                    <div class="timeline-item">
                        <span class="timeline-year">১৯০০ ইং</span>
                        <p>ওয়াহেদপুর (দেবীপুর) নিবাসী মৌলভী আবদুর রাজ্জাক (প্রাক্তন এম.এল.এ) সাহেবের প্রথমা স্ত্রী <strong>জনাবা শরাফাতের নেছা (১ম)</strong>-এর আন্তরিক প্রচেষ্টা ও উদ্যোগে মাদ্রাসাটির পথচলা শুরু হয়। পরবর্তীতে তাঁর আকস্মিক মৃত্যুর পর মাদ্রাসাটি সাময়িক বন্ধ থাকে।</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-year">পুনরুত্থান</span>
                        <p>মৌলভী আবদুর রাজ্জাক সাহেবের দ্বিতীয়া স্ত্রী <strong>জনাবা শরাফাতের নেছা (২য়)</strong>—যিনি বীর শহীদ মেজর ছালাহ উদ্দিনের সম্মানিতা নানী—তিনি ফোরকানিয়া মাদ্রাসাটি পুনরায় চালু করেন এবং দীর্ঘদিন সফলভাবে পরিচালনা করেন।</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-year">১৯৩০ ইং</span>
                        <p>দ্বিতীয়া শরাফাতের নেছা মাদ্রাসাটি বুঝিয়ে দেন প্রথমা শরাফাতের নেছার পুত্রবধূ, বঙ্গের অলিকুল শিরমণি দুধমূখার পীর হযরত মাওলানা মরহুম এছহাক সাহেবের মেজো মেয়ে <strong>পীরজাদী সাজেদা খাতুন</strong>-এর হাতে।</p>
                    </div>
                </div>
            </div>

            <div class="madrasha-grid">
                <div class="madrasha-card info-card">
                    <h4 class="madrasha-subheading"><i class="fas fa-box-open"></i> মাদ্রাসার বর্তমান অবস্থা ও সম্পদ</h4>
                    <p class="madrasha-p">সূচনা লগ্ন থেকেই এই মাদ্রাসাটি সম্পূর্ণ <strong>অবৈতনিক (বিনামূল্যে) ও চাঁদামুক্ত</strong> হিসেবে পরিচালিত হয়ে আসছে। কোনো প্রাতিষ্ঠানিক ব্যবসা বা চাঁদা না থাকায় মাদ্রাসার উল্লেখযোগ্য কোনো বিশাল সম্পদ নেই। তবে রয়েছে আত্মিক শক্তি ও বরকত:</p>
                    <ul class="madrasha-list">
                       <li>হাকিম মৌলভী আবছুর রউফ সাহেবের দানকৃত ৪ শতাংশ জমি।</li>
                       <li>শহীদ মেজর ছালাহ উদ্দিনের মায়ের দেওয়া ১২ শতাংশ জমি।</li>
                       <li>২০/২৫ জন ছাত্র-ছাত্রী বসতে পারার মতো একটি দোচালা টিনের ঘর।</li>
                    </ul>
                    <div class="madrasha-highlight">
                        <i class="fas fa-graduation-cap"></i> এই অল্প সম্পদ ও ছোট ঘর থেকেই দীর্ঘ ৯৫ বছরেরও বেশি সময় ধরে হাজার হাজার কোমলমতি শিশু পবিত্র কুরআন ও ইসলামের বুনিয়াদী শিক্ষা গ্রহণ করে বের হয়েছে।
                    </div>
                </div>

                <div class="madrasha-card appeal-card">
                    <h4 class="madrasha-subheading"><i class="fas fa-scroll"></i> মরহুমা পরিচালিকার শেষ ইচ্ছা ও অসিয়ত</h4>
                    <p class="madrasha-p">
                        মাদ্রাসার প্রাক্তন পরিচালিকা, বর্তমান জমানার অনন্যা ধার্মিকা ও জিন্দা অলি <strong>পীরজাদী সাজেদা খাতুন</strong> তাঁর জীবনের শেষ প্রান্ত পর্যন্ত দীর্ঘ <strong>৬৫ বছর</strong> এই মাদ্রাসার পেছনে নিরলস পরিশ্রম ও খিদমত করে গেছেন। 
                    </p>
                    <p class="madrasha-p">
                        আজ থেকে প্রায় ১৮ বছর আগে তিনি ইহকাল ত্যাগ করে মহান আল্লাহর সান্নিধ্যে চলে যান। মৃত্যুর পূর্বে তিনি তাঁর এই দীর্ঘ মেহনতের অবিনশ্বর স্মৃতি হিসেবে একটি অসিয়ত ও আকুল আহ্বান রেখে গেছেন।
                    </p>
                    <p class="madrasha-p" style="font-weight: 600; color: #b45309;">
                        তিনি তাঁর প্রাক্তন ছাত্র-ছাত্রী, এলাকাবাসী এবং দেশ-বিদেশের সকল ধর্মপ্রাণ মুসলমানদের প্রতি এই শতবর্ষী প্রতিষ্ঠানটিকে স্থায়ী রূপ দেওয়ার আহ্বান জানিয়ে গেছেন।
                    </p>
                    <div class="appeal-box">
                        "আসুন, মরহুমা পীরজাদীর অসিয়ত রক্ষার্থে আমরা সবাই মিলে এই ফোরকানিয়া মাদ্রাসাটিকে একটি স্থায়ী প্রাতিষ্ঠানিক রূপ দান করি।"
                    </div>
                </div>
            </div>
        </div>
    `,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },
        { id:'moctob', title:'কার্যক্রম', subtitle:'মক্তব', bdysubtitle:'একটি ঐতিহ্যবাহি প্রতিষ্ঠান', body:`<div class="maktab-container">
            <div class="maktab-card unity-card">
                <div class="maktab-badge"><i class="fas fa-book-reader"></i> মকতব ও মাদ্রাসার মেলবন্ধন</div>
                <p class="maktab-p">
                    ওয়াহেদপুর (দেবীপুর) গ্রামের রাজ্জাকীয়া ফোরকানীয়া মাদ্রাসা এবং আমাদের এই মকতব মূলত একই ঐতিহ্যের দুটি রূপ। <strong>১৯০০ ইংরেজি সাল থেকে শুরু হওয়া এই দ্বীনি শিক্ষালয়ের আদি ও প্রথম অবস্থায় মাদ্রাসার ভেতরেই মকতবের কার্যক্রম চলতো।</strong> আজ ১২৫ বছর পার হয়ে গেলেও মাদ্রাসা ও মকতবের সেই অভিন্ন কার্যক্রম ও লক্ষ্য আজও এক ও অবিচ্ছেদ্য রয়ে গেছে। 
                </p>
            </div>

            <div class="maktab-grid">
                <div class="maktab-card core-card">
                    <h4 class="maktab-subheading"><i class="fas fa-child"></i> মকতব আসলে কী ও এর বিশেষত্ব?</h4>
                    <p class="maktab-p">
                        সহজ ভাষায়, <strong>মকতব হলো মুসলিম শিশুদের প্রাথমিক দ্বীনি বুনিয়াদ গড়ার প্রধান কেন্দ্র।</strong> যেখানে সাধারণ স্কুল-কলেজে পড়ুয়া কোমলমতি শিশুরা প্রতিদিন সকালে বা সুবিধাজনক সময়ে এসে পবিত্র কুরআন এবং ইসলামের মৌলিক শিক্ষা অর্জন করে। এটি মূলত একটি "পার্ট-টাইম" বা স্বল্পমেয়াদী দৈনিক শিক্ষাব্যবস্থা, যা প্রতিটি মুসলিম সন্তানের জন্য বাধ্যতামূলক।
                    </p>
                    <div class="maktab-highlight">
                        <i class="fas fa-star"></i> আমাদের এখানে মকতব ও মাদ্রাসার কার্যক্রম এক হওয়াতে, মকতবে আসা শিশুরাও শতবর্ষী মাদ্রাসার অভিজ্ঞ শিক্ষক ও আধ্যাত্মিক পরিবেশের সরাসরি বরকত লাভ করে।
                    </div>
                </div>

                <div class="maktab-card syllabus-card">
                    <h4 class="maktab-subheading"><i class="fas fa-list-ol"></i> আমাদের মকতবে যা শেখানো হয়</h4>
                    <p class="maktab-p">মাদ্রাসার কারিকুলামের সাথে মিল রেখে আমাদের মকতবে শিশুদের শতভাগ নিখুঁতভাবে নিচের বিষয়গুলো শিক্ষা দেওয়া হয়:</p>
                    <ul class="maktab-list">
                        <li><strong>সহীহ কুরআন তিলাওয়াত:</strong> তাজবীদ ও মাখরাজ অনুযায়ী পবিত্র কুরআনের শুদ্ধ উচ্চারণ।</li>
                        <li><strong>নামাজের প্রায়োগিক শিক্ষা:</strong> ওযু, গোসল, নামাজের নিয়ম, সূরা এবং প্রয়োজনীয় দোয়া মুখস্থকরণ।</li>
                        <li><strong>আকাইদ ও ফিকহ:</strong> আল্লাহ, রাসুল, ফেরেশতা ও পরকাল সম্পর্কে মৌলিক ধারণা।</li>
                        <li><strong>ইসলামী আদব-কায়দা:</strong> দৈনন্দিন জীবনের সুন্নাতসমূহ, পিতা-মাতা ও বড়দের শ্রদ্ধা করার নৈতিক শিক্ষা।</li>
                    </ul>
                </div>
            </div>

            <div class="maktab-card feature-card">
                <h4 class="maktab-subheading"><i class="fas fa-award"></i> আমাদের গৌরব ও বৈশিষ্ট্য</h4>
                <p class="maktab-p">
                    মাদ্রাসার মতোই আমাদের এই মকতবের কার্যক্রমও সম্পূর্ণ <strong>অবৈতনিক (বিনা মূল্যে) এবং চাঁদামুক্ত</strong>। বিগত ১২৫ বছর ধরে হাজার হাজার সাধারণ পরিবারের সন্তান ও স্কুলগামী ছাত্র-ছাত্রীরা এখান থেকে প্রাথমিক দ্বীনি শিক্ষা সমাপন করে আজ দেশ-বিদেশে সুপ্রতিষ্ঠিত। মরহুমা পীরজাদী সাজেদা খাতুন-এর রেখে যাওয়া এই পবিত্র ঐতিহ্যকে টিকিয়ে রাখতে মকতবের এই বুনিয়াদী শিক্ষা আজও নিরবচ্ছিন্নভাবে চলছে।
                </p>
                <div class="maktab-quote">
                    "আপনার সন্তানকে স্কুলের শিক্ষার পাশাপাশি মকতবে পাঠিয়ে দুনিয়া ও আখেরাতের প্রকৃত আলোর পথ দেখান।"
                </div>
            </div>
        </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },
        { id:'mahfil', title:'কার্যক্রম', subtitle:'পীরজাদী ফাউন্ডেশন বার্ষিক মাহফিলসমূহ', bdysubtitle:'আধ্যাত্মিক চেতনা, সুন্নাহর আলো এবং পবিত্র দ্বীনি সম্মেলন', body:`
            <div class="mahfil-container">
            
            <div class="mahfil-grid">
                
                <div class="mahfil-card">
                    <div class="mahfil-icon text-emerald"><i class="fas fa-book-open"></i></div>
                    <h4 class="mahfil-title">বার্ষিক ইসালে সওয়াব ও তাফসিরুল কোরআন মাহফিল</h4>
                    <span class="mahfil-time"><i class="far fa-calendar-alt"></i> প্রতি বছর ৫ই জানুয়ারি</span>
                    <p class="mahfil-text">
                        ফাউন্ডেশনের অন্যতম প্রধান চালিকাশক্তি, জিন্দা অলি মরহুমা পীরজাদী সাজেদা খাতুন-এর পবিত্র মৃত্যুবার্ষিকী উপলক্ষে প্রতি বছর ৫ই জানুয়ারি এই মাহফিল অনুষ্ঠিত হয়। এর মূল উদ্দেশ্য মরহুমার আত্মিক মাগফিরাত ও সওয়াব রেসানি (ইসালে সওয়াব) করা এবং কোরআনের তাফসিরের মাধ্যমে মুসলিম উম্মাহকে হিদায়াতের পথ প্রদর্শন করা।
                    </p>
                </div>

                <div class="mahfil-card">
                    <div class="mahfil-icon text-gold"><i class="fas fa-sun"></i></div>
                    <h4 class="mahfil-title">বার্ষিক পবিত্র ঈদে মিলাদুন্নাবী (সঃ) মাহফিল</h4>
                    <span class="mahfil-time"><i class="far fa-calendar-alt"></i> প্রতি ১২ই রবিউল আউয়াল (১১ তারিখ দিবাগত রাত)</span>
                    <p class="mahfil-text">
                        কুল কায়িনাতের সর্দার, আল্লাহর প্রিয় হাবীব, আমাদের প্রিয় নবী, নূরুন আলা নূর, রহমাতাল্লিল আলামীন আহাম্মদ মুস্তাফা মুহাম্মদ মুস্তাফা (সল্লাল্লাহু আলাইহি ওয়াসাল্লাম)-এর ধরাধামে আগমন বা বিলাদাতী শান মোবারক উপলক্ষে এই পবিত্র মাহফিল মহাসমারোহে আয়োজন করা হয়। রাসুলুল্লাহ (সাঃ) এর সীরাত, আদর্শ ও সুন্নাহর আলোচনা এর মূল লক্ষ্য।
                    </p>
                </div>

                <div class="mahfil-card">
                    <div class="mahfil-icon text-indigo"><i class="fas fa-moon"></i></div>
                    <h4 class="mahfil-title">বার্ষিক পবিত্র মেরাজুন্নবী (সঃ) মাহফিল</h4>
                    <span class="mahfil-time"><i class="far fa-calendar-alt"></i> প্রতি ২৭শে রজব (২৬ তারিখ দিবাগত রাত)</span>
                    <p class="mahfil-text">
                        প্রিয় নবী হযরত মুহাম্মদ (সল্লাল্লাহু আলাইহি ওয়াসাল্লাম)-এর মহান ঊর্ধ্বগমন বা অলৌকিক মেরাজ গমন মোবারক উপলক্ষে এই আধ্যাত্মিক মাহফিলের আয়োজন করা হয়। মেরাজের শিক্ষা, নামাজের গুরুত্ব এবং নবীজীর অনন্য মর্যাদার কথা এই সম্মেলনে অত্যন্ত গুরুত্বের সাথে আলোচনা করা হয়।
                    </p>
                </div>

                <div class="mahfil-card">
                    <div class="mahfil-icon text-red"><i class="fas fa-kaaba"></i></div>
                    <h4 class="mahfil-title">বার্ষিক পবিত্র আশুরার মাহফিল</h4>
                    <span class="mahfil-time"><i class="far fa-calendar-alt"></i> প্রতি বছর ১০ই মহররম</span>
                    <p class="mahfil-text">
                        ইসলামের ইতিহাসে ১০ই মহররম বা আশুরার দিনটি অত্যন্ত তাৎপর্যপূর্ণ ও ফজিলতপূর্ণ। সৃষ্টিজগতের শুরু থেকে কারবালার ময়দানে ইমাম হোসাইন (রাঃ) এর শাহাদাতসহ অসংখ্য ঐতিহাসিক ঘটনার স্মরণে এই মাহফিল হয়। আশুরার রোজা, তাকওয়া ও অন্যায়ের বিরুদ্ধে সোচ্চার হওয়ার শিক্ষা দেওয়াই এই মাহফিলের উদ্দেশ্য।
                    </p>
                </div>

                <div class="mahfil-card">
                    <div class="mahfil-icon text-amber"><i class="fas fa-star-and-crescent"></i></div>
                    <h4 class="mahfil-title">বার্ষিক পবিত্র রমজানের শিক্ষা ও করণীয় শীর্ষক মাহফিল</h4>
                    <span class="mahfil-time"><i class="far fa-calendar-alt"></i> প্রতি বছর রমজান মাসের ঠিক পূর্বে</span>
                    <p class="mahfil-text">
                        পবিত্র রমজান মাসের আগমনকে স্বাগত জানিয়ে এবং এর হক সঠিকভাবে আদায়ের প্রস্তুতিস্বরূপ এই মাহফিল অনুষ্ঠিত হয়। সিয়াম সাধনার হাকিকত, তাকওয়া অর্জন, যাকাত ও সদকার সঠিক নিয়ম এবং রমজানের দিনগুলোতে একজন মুমিনের করণীয় ও বর্জনীয় বিষয়সমূহ উম্মাহর সামনে এই সেমিনারে বিশদভাবে তুলে ধরা হয়।
                    </p>
                </div>

                <div class="mahfil-card qirat-card">
                    <div class="mahfil-icon text-teal"><i class="fas fa-microphone-alt"></i></div>
                    <h4 class="mahfil-title">ফেনীতে আন্তর্জাতিক কেরাত সম্মেলন</h4>
                    <span class="mahfil-time"><i class="fas fa-globe"></i> একটি ঐতিহাসিক ও বৈশ্বিক কোরআনী আয়োজন</span>
                    <p class="mahfil-text">
                        বিশ্বখ্যাত ও আন্তর্জাতিক মানের ক্বারীগণের সুমধুর কণ্ঠে পবিত্র কোরআনের তিলাওয়াত শ্রবণ এবং ফেনীর বুকে কোরআনী নূর ছড়িয়ে দেওয়ার লক্ষ্যে এই আন্তর্জাতিক কেরাত সম্মেলন আমাদের অন্যতম গৌরবময় পরিকল্পনা। এর গভীর ইতিহাস ও প্রেক্ষাপট জানতে নিচের লিংকগুলোতে ভিজিট করুন:
                    </p>
                    
                    <div class="qirat-links">
                        <a href="pages/kerat-sommelon.html" class="qirat-btn"><i class="fas fa-chevron-right"></i> ফেনীতে আন্তর্জাতিক কেরাত সম্মেলন কী ও কেন?</a>
                        <a href="pages/fell_sommelon.html" class="qirat-btn"><i class="fas fa-chevron-right"></i> ৯৫ সালের আন্তর্জাতিক ক্বেরাত সম্মেলন অনুষ্ঠিত না হওয়ার কারণ</a>
                    </div>
                </div>

            </div>
        </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },

        { id:'taf', title:'মাহফিল', subtitle:'বার্ষিক ইসালে সওয়াব ও তাফসিরুল কুরআন মাহফিল', bdysubtitle:'',
             body:`<div class="mahfil-detail-container">
        
        <div class="mahfil-heritage-box">
        <div class="heritage-badge">
        <i class="fas fa-award"></i> ঐতিহ্যের দীর্ঘ পথচলা
        </div>
        <div class="heritage-counter">
        এবারের আয়োজন: 
        <span class="heritage-number">৩৫তম</span> তাফসিরুল কুরআন ও 
        <span class="heritage-number">১৯তম</span> ইসালে সওয়াব মাহফিল
        </div>
        <p class="heritage-desc">
        বিগত প্রায় ৫০-৬০ বছর ধরে এই অঞ্চলে ইসলামের অবিনশ্বর বাণী ও হেদায়েতের আলো ছড়িয়ে আসছে এই ঐতিহাসিক সম্মেলন।
        </p>
        </div>

        <div class="mahfil-detail-card">
            <div class="mahfil-detail-badge badge-emerald"><i class="fas fa-book-open"></i> মাহফিলের পরিচিতি ও লক্ষ্য</div>
            <p class="mahfil-detail-p">
                পীরজাদী ফাউন্ডেশনের অন্যতম প্রধান ও ঐতিহাসিক দ্বীনি আয়োজন হলো এই বার্ষিক ইসালে সওয়াব ও তাফসিরুল কুরআন মাহফিল। ফাউন্ডেশনের সম্মানিত প্রতিষ্ঠাতা এবং জিন্দা অলি মরহুমা পীরজাদী সাজেদা খাতুন-এর পবিত্র মৃত্যুবার্ষিকী উপলক্ষে প্রতি বছর ৫ই জানুয়ারি এই মাহফিল অত্যন্ত গুরুত্বের সাথে আয়োজন করা হয়।
            </p>
        </div>

        <div class="mahfil-detail-grid">
            <div class="mahfil-detail-card border-emerald">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-bullseye"></i> মূল উদ্দেশ্য</h4>
                <p class="mahfil-detail-p">এই মাহফিলের প্রধান লক্ষ্য হলো মরহুমা পীরজাদী সাজেদা খাতুনসহ সকল ইন্তেকালকারী মুমিন-מוসলিমাদের রুহের মাগফিরাত ও সওয়াব রেসানি করা। একই সাথে দেশবরেণ্য মুফাসসিরে কেরামগণের মাধ্যমে পবিত্র কুরআনের বিশুদ্ধ তাফসির সর্বস্তরের মানুষের মাঝে পৌঁছে দেওয়া।</p>
            </div>
            <div class="mahfil-detail-card border-emerald">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-clock"></i> সময় ও স্থান</h4>
                <p class="mahfil-detail-p"><strong>তারিখ:</strong> প্রতি বছর ইংরেজি ৫ই জানুয়ারি।</p>
                <p class="mahfil-detail-p"><strong>সময়:</strong> নির্ধারিত দিন বিকেল ৪.০০ টা থেকে মধ্যরাত পর্যন্ত।</p>
                <p class="mahfil-detail-p"><strong>স্থান:</strong> ওয়াহেদপুর জামে মসজিদ ও মাদ্রাসা প্রাঙ্গণ, ফেনী সদর।</p>
            </div>
        </div>

        <div class="mahfil-detail-quote quote-emerald">
            "পবিত্র কুরআনের আলোয় জীবন গড়ি, আখেরাতের পাথেয় সঞ্চয় করি। এই নূরানী মাহফিলে আপনার উপস্থিতি কাম্য।"
        </div>
    </div>`,
    footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },

        { id:'mil', title:'মাহফিল', subtitle:'বার্ষিক পবিত্র ঈদে মিলাদুন্নাবী (সাঃ) মাহফিল', bdysubtitle:'',
             body:` <div class="mahfil-detail-container">
        
        <div class="mahfil-heritage-box">
            <div class="heritage-badge">
                <i class="fas fa-award"></i> ঐতিহ্যের দীর্ঘ পথচলা
            </div>
            <div class="heritage-counter">
                এবারের আয়োজন: <span class="heritage-number">৫৪ তম</span> বার্ষিক মাহফিল
            </div>
            <p class="heritage-desc">
                বিগত প্রায় ৫০-৬০ বছর ধরে এই অঞ্চলে ইসলামের অবিনশ্বর বাণী ও হেদায়েতের আলো ছড়িয়ে আসছে এই ঐতিহাসিক সম্মেলন।
            </p>
        </div>

        <div class="mahfil-detail-card">
            <div class="mahfil-detail-badge badge-gold"><i class="fas fa-sun"></i> মাহফিলের পরিচিতি ও লক্ষ্য</div>
            <p class="mahfil-detail-p">
                কূল কায়িনাতের সর্দার, আল্লাহর প্রিয় হাবীব, আমাদের সুপ্রিয় নবী, রহমাতাল্লিল আলামীন হযরত মুহাম্মদ মোস্তফা (সল্লাল্লাহু আলাইহি ওয়াসাল্লাম)-এর ধরাধামে শুভ আগমন বা বিলাদাতী শান মোবারক উপলক্ষে পীরজাদী ফাউন্ডেশন প্রতি বছর এই পবিত্র মাহফিলের আয়োজন করে থাকে।
            </p>
        </div>

        <div class="mahfil-detail-grid">
            <div class="mahfil-detail-card border-gold">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-bullseye"></i> মূল উদ্দেশ্য</h4>
                <p class="mahfil-detail-p">এই মোবারক মাহফিলের মূল উদ্দেশ্য হলো রাসূলুল্লাহ (সাঃ)-এর সীরাত, অনন্য বৈশিষ্ট্য, দয়া ও সুন্নাহর বিস্তারিত আলোচনার মাধ্যমে উম্মাহর হৃদয়ে নবীপ্রেম জাগ্রত করা এবং দৈনন্দিন জীবনে সুন্নাহর পরিপূর্ণ অনুসরণের শিক্ষা দেওয়া।</p>
            </div>
            <div class="mahfil-detail-card border-gold">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-clock"></i> সময় ও স্থান</h4>
                <p class="mahfil-detail-p"><strong>তারিখ:</strong> প্রতি আরবি হিজরি বছরের ১২ই রবিউল আউয়াল।</p>
                <p class="mahfil-detail-p"><strong>সময়:</strong> ১১ই রবিউল আউয়াল দিবাগত রাত মাগরিব থেকে।</p>
                <p class="mahfil-detail-p"><strong>স্থান:</strong> ওয়াহেদপুর জামে মসজিদ ও মাদ্রাসা প্রাঙ্গণ, ফেনী সদর।</p>
            </div>
        </div>

        <div class="mahfil-detail-quote quote-gold">
            "রাসূলুল্লাহ (সাঃ) এর সুন্নাহর মাঝেই রয়েছে মানবজাতির ইহকাল ও পরকালের প্রকৃত মুক্তি এবং পরম শান্তি।"
        </div>
    </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },

        { id:'mir', title:'মাহফিল', subtitle:'বার্ষিক পবিত্র মেরাজুন্নবী (সাঃ) মাহফিল', bdysubtitle:'',
             body:`<div class="mahfil-detail-container">
        
        <div class="mahfil-heritage-box">
            <div class="heritage-badge">
                <i class="fas fa-award"></i> ঐতিহ্যের দীর্ঘ পথচলা
            </div>
            <div class="heritage-counter">
                এবারের আয়োজন: <span class="heritage-number">৪০ তম</span> বার্ষিক মাহফিল
            </div>
            <p class="heritage-desc">
                বিগত প্রায় ৫০-৬০ বছর ধরে এই অঞ্চলে ইসলামের অবিনশ্বর বাণী ও হেদায়েতের আলো ছড়িয়ে আসছে এই ঐতিহাসিক সম্মেলন।
            </p>
        </div>

        <div class="mahfil-detail-card">
            <div class="mahfil-detail-badge badge-indigo"><i class="fas fa-moon"></i> মাহফিলের পরিচিতি ও লক্ষ্য</div>
            <p class="mahfil-detail-p">
                প্রিয় নবী হযরত মুহাম্মদ মোস্তফা (সল্লাল্লাহু আলাইহি ওয়াসাল্লাম)-এর মহান ঊর্ধ্বগমন, মহান আল্লাহর সাথে দিদার এবং অলৌকিক মেরাজ গমন মোবারকের মহা তাৎপর্যপূর্ণ স্মৃতি স্মরণে পীরজাদী ফাউন্ডেশন প্রতি বছর এই বিশেষ আধ্যাত্মিক মাহফিলের আয়োজন করে।
            </p>
        </div>

        <div class="mahfil-detail-grid">
            <div class="mahfil-detail-card border-indigo">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-bullseye"></i> মূল উদ্দেশ্য</h4>
                <p class="mahfil-detail-p">ইসলামের ইতিহাসে মেরাজের গুরুত্ব অপরিসীম। মোমিনদের জন্য আল্লাহর শ্রেষ্ঠ উপহার 'নামাজ' এই রাতেই ফরজ হয়। মেরাজের শিক্ষা, মহাবিশ্ব নিয়ে ইসলামের দৃষ্টিভঙ্গি এবং নামাজের গুরুত্ব সাধারণ মুসলমানদের সামনে তুলে ধরাই এই মাহফিলের মূল লক্ষ্য।</p>
            </div>
            <div class="mahfil-detail-card border-indigo">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-clock"></i> সময় ও স্থান</h4>
                <p class="mahfil-detail-p"><strong>তারিখ:</strong> প্রতি আরবি হিজরি বছরের ২৭শে রজব মোবারক।</p>
                <p class="mahfil-detail-p"><strong>সময়:</strong> ২৬শে রজব দিবাগত রাত এশার নামাজের পর থেকে।</p>
                <p class="mahfil-detail-p"><strong>স্থান:</strong> ওয়াহেদপুর জামে মসজিদ ও মাদ্রাসা প্রাঙ্গণ, ফেনী সদর।</p>
            </div>
        </div>

        <div class="mahfil-detail-quote quote-indigo">
            "নামাজ হলো মুমিনের মেরাজ. আসুন, মেরাজের শিক্ষাকে বুকে ধারণ করে সময়মতো নামাজ আদায়ের অভ্যাস করি।"
        </div>
    </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },

        { id:'asu', title:'মাহফিল', subtitle:'বার্ষিক পবিত্র আশুরার মাহফিল', bdysubtitle:'',
             body:` <div class="mahfil-detail-container">
        
        <div class="mahfil-heritage-box">
            <div class="heritage-badge">
                <i class="fas fa-award"></i> ঐতিহ্যের দীর্ঘ পথচলা
            </div>
            <div class="heritage-counter">
                এবারের আয়োজন: <span class="heritage-number">৫২ তম</span> বার্ষিক মাহফিল
            </div>
            <p class="heritage-desc">
                বিগত প্রায় ৫০-৬০ বছর ধরে এই অঞ্চলে ইসলামের অবিনশ্বর বাণী ও হেদায়েতের আলো ছড়িয়ে আসছে এই ঐতিহাসিক সম্মেলন।
            </p>
        </div>

        <div class="mahfil-detail-card">
            <div class="mahfil-detail-badge badge-red"><i class="fas fa-kaaba"></i> মাহফিলের পরিচিতি ও লক্ষ্য</div>
            <p class="mahfil-detail-p">
                ইসলামের ইতিহাসে ১০ই মহররম তথা পবিত্র আশুরার দিনটি অত্যন্ত তাৎপর্যপূর্ণ, বেদনাবিধুর ও ফজিলতপূর্ণ। সৃষ্টিজগতের সূচনা থেকে শুরু করে কারবালার ময়দানে হযরত ইমাম হোসাইন (রাঃ) ও তাঁর আহলে বাইতের শাহাদাতসহ ঐতিহাসিক ঘটনা স্মরণে এই মাহফিল অনুষ্ঠিত হয়।
            </p>
        </div>

        <div class="mahfil-detail-grid">
            <div class="mahfil-detail-card border-red">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-bullseye"></i> মূল উদ্দেশ্য ও ফজিলত</h4>
                <p class="mahfil-detail-p">আশুরার দিনের রোজা এবং এর সীমাহীন ফজিলত সম্পর্কে আলোচনা করা এই মাহফিলের মূল উদ্দেশ্য। এছাড়াও কারবালার ঐতিহাসিক শিক্ষা, সত্য ও ন্যায়ের পক্ষে অবিচল থাকা এবং অন্যায়ের বিরুদ্ধে সোচ্চার হওয়ার ইসলামী आदर्श উম্মাহর সামনে তুলে ধরা হয়।</p>
            </div>
            <div class="mahfil-detail-card border-red">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-clock"></i> সময় ও স্থান</h4>
                <p class="mahfil-detail-p"><strong>তারিখ:</strong> প্রতি আরবি হিজরি বছরের ১০ই মহররম।</p>
                <p class="mahfil-detail-p"><strong>সময়:</strong> পবিত্র আশুরার দিন আসর নামাজের পর থেকে।</p>
                <p class="mahfil-detail-p"><strong>স্থান:</strong> ওয়াহেদপুর জামে মসজিদ ও মাদ্রাসা প্রাঙ্গণ, ফেনী সদর।</p>
            </div>
        </div>

        <div class="mahfil-detail-quote quote-red">
            "আশুরার দিন অন্যায় ও বাতিলের কাছে মাথা নত না করার এবং সত্যের পথে জীবন উৎসর্গ করার মহান শিক্ষা দেয়।"
        </div>
    </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },

        { id:'rom', title:'মাহফিল', subtitle:'বার্ষিক পবিত্র রমজানের শিক্ষা ও আমাদের করণীয় শীর্ষক মাহফিল', bdysubtitle:'',
             body:`<div class="mahfil-detail-container">
        
        <div class="mahfil-heritage-box">
            <div class="heritage-badge">
                <i class="fas fa-award"></i> ঐতিহ্যের দীর্ঘ পথচলা
            </div>
            <div class="heritage-counter">
                এবারের আয়োজন: <span class="heritage-number">৩৫ তম</span> বার্ষিক রমজান কার্যক্রম
            </div>
            <p class="heritage-desc">
                বিগত প্রায় ৫০-৬০ বছর ধরে এই অঞ্চলের মানুষের মাঝে পবিত্র রমজানের আত্মশুদ্ধির পয়গাম পৌঁছে দিচ্ছে এই বিশেষ ধারা।
            </p>
        </div>

        <div class="mahfil-detail-card border-amber" style="background: #fffbeb;">
            <h4 class="mahfil-detail-subheading" style="color: #b45309;"><i class="fas fa-bullhorn"></i> একটি বিশেষ ঘোষণা ও কার্যক্রমের রূপরেখা</h4>
            <p class="mahfil-detail-p">
                সাধারণ মাহফিলের মতো এই প্রজেক্টটি কোনো নির্দিষ্ট একটি দিনে সীমাবদ্ধ থাকে না। <strong>পবিত্র রমজান মাসের পূর্ববর্তী ১ মাস (পুরো শাবান মাস জুড়ে) প্রতিটি জুমার নামাজে</strong> খতীব সাহেবের মাধ্যমে রমজানের শিক্ষা, মাসআলা-মাসায়েল এবং আমাদের করণীয় শীর্ষক ধারাবাহিক ও বিশদ আলোচনা পেশ করা হয়।
            </p>
        </div>

        <div class="mahfil-detail-card" style="border-top: 4px solid #0d9488;">
            <div class="mahfil-detail-badge" style="background: #0d9488;"><i class="fas fa-users"></i> বিশেষ কার্যক্রম: সার্বজনীন মুত্তাকী প্রতিযোগিতা</div>
            <p class="mahfil-detail-p">
                পীরজাদী ফাউন্ডেশনের অন্যতম প্রশংসিত ও অনন্য একটি আয়োজন হলো এই <strong>"মুত্তাকী প্রতিযোগিতা"</strong>। এটি কেবল শিশুদের জন্য নয়, বরং <strong>এলাকার সর্বস্তরের ও সকল বয়সী মানুষের জন্য উন্মুক্ত একটি সার্বজনীন দ্বীনি প্রতিযোগিতা।</strong> পবিত্র রমজানের পূর্বে পুরো সমাজকে একটি সুন্দর ধর্মীয় ও নৈতিক আবহে নিয়োজিত করাই এর মূল উদ্দেশ্য।
            </p>
            <p class="mahfil-detail-p" style="font-weight: 500; color: #0f766e;">
                এই প্রতিযোগিতার মাধ্যমে অংশগ্রহণকারীদের নামাজ, সুন্নাত, ইসলামী আদব-কায়দা, মাসআলা-মাসায়েল এবং শুদ্ধ কুরআন পাঠের ওপর মূল্যায়ন করে আকর্ষণীয় পুরস্কারে ভূষিত করা হয়—যাতে ছোট-বড় সবাই অনুপ্রাণিত হয়ে বাস্তব জীবনে একজন খাঁটি মুত্তাকী বা আল্লাহভীরু মানুষ হিসেবে গড়ে উঠতে পারেন।
            </p>
        </div>

        <div class="mahfil-detail-grid">
            <div class="mahfil-detail-card border-amber">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-bullseye"></i> মূল লক্ষ্য ও উদ্দেশ্য</h4>
                <p class="mahfil-detail-p">সিয়াম সাধনার প্রকৃত হাকিকত ও তাকওয়া অর্জন সম্পর্কে সমাজের সর্বস্তরের মানুষকে সচেতন করা। একই সাথে যাকাত ও সদকার সঠিক শরয়ী নিয়মাবলী আলোচনা করা এবং প্রতিযোগিতার মাধ্যমে আবালবৃদ্ধবনিতাকে দ্বীনের সঠিক ধারায় যুক্ত রাখা।</p>
            </div>
            <div class="mahfil-detail-card border-amber">
                <h4 class="mahfil-detail-subheading"><i class="fas fa-clock"></i> সময় ও স্থান</h4>
                <p class="mahfil-detail-p"><strong>তারিখ:</strong> পবিত্র রমজান মাসের ঠিক পূর্ববর্তী এক মাস (শাবান মাস)।</p>
                <p class="mahfil-detail-p"><strong>সময়:</strong> প্রতি জুমার নামাজের খুতবা এবং নির্ধারিত প্রতিযোগিতার সময়।</p>
                <p class="mahfil-detail-p"><strong>স্থান:</strong> ওয়াহেদপুর জামে মসজিদ ও মাদ্রাসা প্রাঙ্গণ, ফেনী সদর।</p>
            </div>
        </div>

        <div class="mahfil-detail-quote quote-amber">
            "রমজান হলো আত্মশুদ্ধি ও গুনাহ মাফের শ্রেষ্ঠ সুযোগ। আসুন, জুমার আলোচনায় শরিক হই এবং মুত্তাকী প্রতিযোগিতায় অংশ নিয়ে নিজেদের দ্বীনি জ্ঞানকে সমৃদ্ধ করি।"
        </div>
    </div>`,footer:`পীরজাদী ফাউন্ডেশন - ওয়াহেদপুর, ফেনী` },
    ]

}

function stntmdlod(mdtitel) {
    if (mdtitel) mdtitel.innerText = `....................`;
}

// মডাল কন্ট্রোল ফাংশন (হ্যাশ জেনারেটরসহ)
function showmodalhendel(modalId, mdlinfo) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
            document.body.style.overflow = 'hidden';
        modal.classList.add('show');
        
        if (mdlinfo !== undefined && mdlinfo !== '') {
            window.location.hash = modalId + '?=' + mdlinfo;
        } else {
            window.location.hash = modalId;
        }
    }
}

// মডাল ক্লোজ বাটন হ্যান্ডেলার
const closemodal = document.querySelectorAll('.modal-close');
closemodal.forEach(dbt => {
    dbt.addEventListener('click', function () {
        const mdid = this.getAttribute('data-mdid');
        const mdcontet = document.getElementById(mdid);
        hidmodalhendel(mdcontet, mdid); // এখানে mdid-টি প্যারামিটার হিসেবে পাস করা হলো
    });
});


// মডাল হাইড এবং হ্যাশ ব্যাক ট্র্যাকিং ফাংশন (উত্তম ব্যবস্থা)
function hidmodalhendel(modal, modalId) {
    if (modal) {
        document.body.style.overflow = ''; // পেজের সাধারণ স্ক্রলিং আবার সচল হবে
        modal.classList.remove('show');
        
        // 🌟 যদি ডোনেট শেয়ার মডাল (dnt-sher-md) বন্ধ করা হয়
        if (modalId === 'dnt-sher-md') {
            // ইউআরএল পুরোপুরি ফাঁকা না করে প্রধান ডোনেট মডালের হ্যাশে ফেরত নেওয়া হলো
            window.location.hash = 'donet-md';
        } else {
            // অন্য সাধারণ মডাল হলে আগের মতোই হ্যাশ পুরোপুরি মুছে যাবে
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }
}
// 🔥 ৩. লিংক থেকে ডিটেক্ট করে স্বয়ংক্রিয়ভাবে সঠিক মডাল ডাটা সহ ওপেন করা (সবচেয়ে নিখুঁত রাউটিং)
window.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash; 
    
    if (currentHash) {
        const cleanHash = currentHash.substring(1); 
        const hashParts = cleanHash.split('?='); 
        
        const targetModalId = hashParts[0]; 
        const mdlinfo = hashParts[1] || '';       

        if (targetModalId) {
            // 🌟 যদি ইউজার সরাসরি ডোনেট শেয়ার মডালের লিংক নিয়ে পেজ রিফ্রেশ করে
            if (targetModalId === 'dnt-sher-md') {
                // ১. প্রথমে তার পেছনের মূল ডোনেট মডালটিকেও ওপেন করে দেওয়া হলো
                const mainDonateModal = document.getElementById('donet-md');
                if (mainDonateModal) {
                    mainDonateModal.classList.add('show');
                }
                
                // ২. এরপর ওপরের শেয়ার মডালটি কন্টেন্টসহ ওপেন করা হলো
                setupShareModalContent(mdlinfo);
                showmodalhendel(targetModalId, mdlinfo);
            } 
            // নোটিশ মডাল চেক
            else if (targetModalId === 'nt-md-suvtitel' || targetModalId === 'ntdtmodal') {
                stntmdlod(ntstmd);
                setpagelodig(ntfmdlbdy, ntfmdlminbdy);
                showntid = mdlinfo; 
                ntpnbtnhnl();       
                showntdmodal();     
            } 
            // আমাদের সম্পর্কে মডাল চেক
            else if (targetModalId === 'alldtmodal') {
                showdtmddtcanet(mdlinfo);
            } 
            // অন্য যেকোনো সাধারণ মডাল
            else {
                showmodalhendel(targetModalId, mdlinfo);
            }
        }
    }
});

const sendBtn = document.querySelector('.sendmasegetn');
const scriptURL = 'https://script.google.com/macros/s/AKfycbx3zp3upDAmP0Usr8uxL-GJwDR8POQCHQ5zYk5dwxtw63amXEU7rsTL_6YpcEtc6lGK/exec';

if (sendBtn) {
    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-user-name').value.trim();
        const phone = document.getElementById('contact-user-phone').value.trim();
        const subject = document.getElementById('contact-user-subject').value.trim();
        const message = document.getElementById('contact-user-text').value.trim();
        
        if (!name || !phone || !message) {
            alert('অনুগ্রহ করে নাম, মোবাইল নম্বর এবং বার্তাটি লিখুন।');
            return;
        }
        
        // বাটন ডিজেবল করা যেন বারবার ক্লিক না হয়
        sendBtn.disabled = true;
        sendBtn.innerText = 'পাঠানো হচ্ছে...';
        
        // FormData তৈরি (Apps Script doPost-এর প্যারামিটারের সাথে মিল রেখে)
        const formData = new FormData();
        formData.append('user-name', name);
        formData.append('user-phone', phone);
        formData.append('user-subject', subject);
        formData.append('user-text', message);
        
        // Apps Script URL-এ POST রিকোয়েস্ট পাঠানো
        fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                alert('ধন্যবাদ! আপনার বার্তাটি সফলভাবে আমাদের কাছে পৌঁছেছে।');
                // ইনপুট ফিল্ডগুলো খালি করা
                document.getElementById('contact-user-name').value = '';
                document.getElementById('contact-user-phone').value = '';
                document.getElementById('contact-user-subject').value = '';
                document.getElementById('contact-user-text').value = '';
            } else {
                alert('দুঃখিত! কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।');
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('সার্ভারের সাথে সংযোগ করা যাচ্ছে না।');
        })
        .finally(() => {
            // বাটন আবার সচল করা
            sendBtn.disabled = false;
            sendBtn.innerText = 'বার্তা পাঠান';
        });
    });
}