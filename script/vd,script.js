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




    // অ্যাকর্ডিয়ন ফাংশনালিটি
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            accordion.classList.toggle('active');
            const panel = this.nextElementSibling;
            const mainalbam = panel.querySelector('.vidionorwp');


            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
                mainalbam.querySelectorAll('.video-container').forEach(container => {
                    const realImg = container.querySelector('.img-thambel');
                    const realImgsrc = realImg.getAttribute('data-src');
                    const placeholder = document.querySelector('.pictuerloaderor');
                    const placeholdersrc = placeholder.getAttribute('data-pictureholder-src');
                    const containera = container.querySelector('.continar-a');
                    const videothumbnail = containera.querySelector('.video-thumbnail');
                    const albamcaption = container.querySelector('.album-caption');
                    return finalload(realImg, realImgsrc, placeholdersrc, videothumbnail, albamcaption)
                })
            }
        });
    });
    // প্রথম অ্যাকর্ডিয়ন খুলে রাখা
    document.querySelector('.accordion').click();

    document.querySelectorAll('.video-container').forEach(container => {
        const realImg = container.querySelector('.img-thambel');
        const realImgsrc = realImg.getAttribute('data-src');
        const placeholder = document.querySelector('.pictuerloaderor');
        const placeholdersrc = placeholder.getAttribute('data-pictureholder-src');
        const containera = container.querySelector('.continar-a');
        const videothumbnail = containera.querySelector('.video-thumbnail');
        const albamcaption = container.querySelector('.album-caption');
        finalload(realImg, realImgsrc, placeholdersrc, videothumbnail, albamcaption)
    })

    function finalload(realImg, realImgsrc, placeholdersrc, videothumbnail, albamcaption) {
        realImg.src = placeholdersrc

        realImg.onload = function () {
            setTimeout(() => {
                realImg.src = realImgsrc;
            }, 100);
        };
        realImg.onerror = function () {
            albamcaption.classList.add('activ');
            videothumbnail.innerHTML = `
                <div class="videonai">
                    <div class="nonevideocontent">
                        <div class="iformetionicon"><i class="fa-solid fa-video"></i></div>
                    </div>
                </div>
                <div class="play-icon active">
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <polygon points="20,15 20,35 35,25" fill="white" />
                    </svg>
                </div>`
        };
    };

    const continardescription = {
        'abbasi': `
        <div class="deshead">
            <p>২০২২ সালের ২রা ডিসেম্বর রোজ শুক্রবার পীরজাদী ফাউন্ডেশন ও তাহরীকে খতমে নবুওয়্যাত বাংলাদেশ ফেনী জেলা আহ্বায়ক কমিটি এর যৌথ উদ্দ্যোগে আয়োজিত ১৫ তম বার্ষিক ইসালে ছওয়াব ও ওয়াজ মাহফিলের ড. মোঃ এনায়েতুল্লাহ আব্বাসি ওয়া সিদ্দিকী হুজুরের বয়ান।</p>
        </div><br>
        <p>২০২২ সালের ২রা ডিসেম্বর রোজ শুক্রবার পীরজাদী ফাউন্ডেশন ও তাহরীকে খতমে নবুওয়্যাত বাংলাদেশ ফেনী জেলা আহ্বায়ক কমিটি এর যৌথ উদ্দ্যোগে ফেনীর ঐতিহাসিক মিজান  ময়দানে ১৫ তম বার্ষিক ইসালে ছওয়াব ও ওয়াজ মাহফিলের আয়োজন করে।</p><br>
        <p>উক্ত মাহফিলে প্রধান মেহমান হিসেবে বয়ান রাখেন জৈানপুর দরবার শরীফ এর পীর আমিরে তাহরিকে খতমে নবুওয়্যাত বাংলাদেশ শায়খুর হাদীস আল্লামা <b>ড. মোঃ এনায়েতুল্লাহ আব্বাসি ওয়া সিদ্দিকী</b>।</p><br>
        <p>উক্ত মাহফিলে দুধমুখার পীর <b>আলহাজ্ব হযরত মাওলানা লোকমান হোসাইন সাহেব</b> ও <b>আলহাজ্ব হযরত মাওলানা সোলায়মান হোসাইন সাহেব</b> এবং কুমিল্লা বার্ডের সাবেক পরিচালক <b>আলহাজ্ব হযরত মাওলানা আব্দুল কাদের সাহেব</b> আমন্ত্রিত পীর মাশায়েক হিসেবে বয়ান করেছেন।</p><br>
        <p>বিশেষ আকর্ষন হিসেবে উপস্থিত ছিলেন ইসলামি নাসিদ আটিষ্ট <b>ইকবাল হোসেন জীবন</b>।</p>`,

        'lokman': `
        <div class="deshead">
            <p>২০২২ সালের ২রা ডিসেম্বর রোজ শুক্রবার পীরজাদী ফাউন্ডেশন ও তাহরীকে খতমে নবুওয়্যাত বাংলাদেশ ফেনী জেলা আহ্বায়ক কমিটি এর যৌথ উদ্দ্যোগে আয়োজিত ১৫ তম বার্ষিক ইসালে ছওয়াব ও ওয়াজ মাহফিলের দুধমুখার পীর আলহাজ্ব হযরত লোকমান হোসাইন হুজুরের বয়ান।</p>
        </div><br>
        <p>২০২২ সালের ২রা ডিসেম্বর রোজ শুক্রবার পীরজাদী ফাউন্ডেশন ও তাহরীকে খতমে নবুওয়্যাত বাংলাদেশ ফেনী জেলা আহ্বায়ক কমিটি এর যৌথ উদ্দ্যোগে ফেনীর ঐতিহাসিক মিজান ময়দানে ১৫ তম বার্ষিক ইসালে ছওয়াব ও ওয়াজ মাহফিলের আয়োজন করে।</p><br>
        <p>উক্ত মাহফিলে প্রধান মেহমান হিসেবে বয়ান রাখেন জৈানপুর দরবার শরীফ এর পীর আমিরে তাহরিকে খতমে নবুওয়্যাত বাংলাদেশ শায়খুর হাদীস আল্লামা <b>ড. মোঃ এনায়েতুল্লাহ আব্বাসি ওয়া সিদ্দিকী</b>।</p><br>
        <p>উক্ত মাহফিলে দুধমুখার পীর <b>আলহাজ্ব হযরত মাওলানা লোকমান হোসাইন সাহেব</b> ও <b>আলহাজ্ব হযরত মাওলানা সোলায়মান হোসাইন সাহেব</b> এবং কুমিল্লা বার্ডের সাবেক পরিচালক <b>আলহাজ্ব হযরত মাওলানা আব্দুল কাদের সাহেব</b> আমন্ত্রিত পীর মাশায়েক হিসেবে বয়ান করেছেন।</p><br>
        <p>বিশেষ আকর্ষন হিসেবে উপস্থিত ছিলেন ইসলামি নাসিদ আটিষ্ট <b>ইকবাল হোসেন জীবন</b>।</p>`,

        'taheri': `
        <div class="deshead">
            <p>২০২৪ সালের ১৪ই জুলাই রোজ রবিবার পীরজাদী ফাউন্ডেশন এর উদ্দ্যোগে আয়োজিত ৫০ তম বার্ষিক পবিত্র আশুরার মাহফিলের আলহাজ্ব হযরত মাওলানা মুফতি গিয়াসউদ্দিন আত তাহেরী হুজুরের বয়ান</p>
        </div><br>
        <p>২০২৪ সালের ১৪ই জুলাই রোজ রবিবার পীরজাদী ফাউন্ডেশন এর উদ্দ্যোগে ফেনীর ঐতিহাসিক ওয়াপদা মাঠে ৫০ তম বার্ষিক পবিত্র আশুরার মাহফিলের আয়োজন করে।</p><br>
        <p>উক্ত মাহফিলে প্রধান মেহমান হিসেবে বয়ান রাখেন পীর সাহেব <b>আলহাজ্ব হযরত মাওলানা মুফতি গিয়াসউদ্দিন আত তাহেরী</b> ও দুধমুখা দরবার শরীফের গদিনশীল পীর <b>আলহাজ্ব হযরত মাওলানা লোকমান হোসাইন সাহেব</b>।</p><br>
        <p>উক্ত মাহফিলে প্রধান মেহমান হিসেবে উপস্থিত ছিলেন ছাগলনাইয়া উপজেলা পরিষদের প্রাক্তন চ্যেয়ারমেন <b>আলহাজ্ব মোহাম্মাদ মিজানুর রহমান মজুমদার সাহেব</b>।</p><br>
        <p>বিশেষ আকর্ষন হিসেবে উপস্থিত ছিলেন চট্টগ্রাম ফ'য়সলেক এর দারুল হুদা দরবারে গাউছিয়া শরিফ এর গদিনশীল পীর <b>আলহাজ্ব হযরত মাওলানা ক্বারী বেলায়েত হোসাইন সাহেব</b>।</p>`,

        'liakotali': `
        <div class="deshead">
            <p>২০২৫ সালের ৪ই সেপ্টেম্বর রোজ বৃহস্পতিবার পীরজাদী ফাউন্ডেশন এর উদ্দ্যোগে আয়োজিত ৫৩ তম বার্ষিক পবিত্র ঈদে
            মিলাদুন্নাবী (সাঃ) মাহফিলের সভাপতি হযরত মাওলানা অধ্যাপক লিয়াকত আলী ভূঁইয়া সাহেবের বক্তব্য</p>
        </div><br>
        <p>২০২৫ সালের ৪ই সেপ্টেম্বর রোজ বৃহস্পতিবার পীরজাদী ফাউন্ডেশন এর উদ্দ্যোগে পীরজাদীর বাড়ির আঙ্গিনায় ৫৩ তম বার্ষিক পবিত্র ঈদে মিলাদুন্নাবী (সাঃ) মাহফিলের আয়োজন করে।</p><br>
        <p>উক্ত মাহফিলে সাভাপতিত্ব করেন <b>হযরত মাওলানা অধ্যাপক লিয়াকত আলী ভূঁইয়া সাহেব</b>।</p><br>
        <p>উক্ত মাহফিলে বিশেষ মুফাচ্ছির হিসেবে বয়ান করেন বিশিষ্ট ইসলামি আলোচক, চ্যানেল-২৪ ও RTV, তরুণ মুফাচ্ছির <b>হযরত মাওলানা এম সাব্বির বিন লোকমান সাহেব</b>।</p>`,
        
        'muttaki1': `
        <div class="deshead">
            <p>পীরজাদী ফাউণ্ডেশান কতৃক ওয়াহেদপুর জামে মসজিদে মুত্তাকী হওয়ার জন্য 'মুত্তাকী' প্রতিযোগীদের মধ্যে অর্থ সহ পবিত্র কুরআনুল কারীম বিতরণ অনুষ্ঠান এর প্রথম পর্ব।</p>
        </div><br>
        <p>পীরজাদী ফাউণ্ডেশান কতৃক ওয়াহেদপুর জামে মসজিদে মুত্তাকী হওয়ার জন্য 'মুত্তাকী' প্রতিযোগীদের মধ্যে অর্থ সহ পবিত্র কুরআনুল কারীম বিতরণ অনুষ্ঠান ২৮শে ফেব্রুয়ারী ২০২৫ খ্রিঃ (হিজরি: ২৯ শাবান ১৪৪৬, বাংলা:১৭ ফাল্গুন ১৪৩১) জুমাবার জুমা পুর্বে ১ম পর্ব অনুষ্ঠিত হয়।</p>`,

        'muttaki2': `
         <div class="deshead">
            <p>পীরজাদী ফাউণ্ডেশান কতৃক ওয়াহেদপুর জামে মসজিদে মুত্তাকী হওয়ার জন্য 'মুত্তাকী' প্রতিযোগীদের মধ্যে অর্থ সহ পবিত্র কুরআনুল কারীম বিতরণ অনুষ্ঠান এর দ্বিতিয় পর্ব।</p>
        </div><br>
        <p>পীরজাদী ফাউণ্ডেশান কতৃক ওয়াহেদপুর জামে মসজিদে মুত্তাকী হওয়ার জন্য 'মুত্তাকী' প্রতিযোগীদের মধ্যে অর্থ সহ পবিত্র কুরআনুল কারীম বিতরণ অনুষ্ঠান ২৭শে মার্চ ২০২৫ খ্রিঃ (হিজরি: ২৭ রমাদান ১৪৪৬, বাংলা:১৭ ফাল্গুন ১৪৩১) বাদ এশা ২য় পর্ব অনুষ্ঠিত হয়।</p>`,

        '7': `
        <div class="deshead"></div><br>
        <p></p>`
    }

    const maincontainer = document.querySelectorAll('.video-container')
    maincontainer.forEach(container => {
        const description = container.querySelector('.description');
        const maindescata = description.getAttribute('data-descriptioncatagori');
        description.innerHTML = continardescription[maindescata];


        const videothumbnail = container.querySelector('.video-thumbnail');

        const playicon = document.createElement('div');
        playicon.className = 'play-icon active';
        playicon.innerHTML = `
            <svg width="50" height="50" viewBox="0 0 50 50">
                <polygon points="20,15 20,35 35,25" fill="white" />
            </svg>`;

        videothumbnail.appendChild(playicon)
    })

    let currentlyPlayingVideo = null;
    let currentlyPlayingVideoId = null;

    // Main gallery click event
    document.querySelectorAll('.video-container').forEach(item => {
        item.addEventListener('click', function () {
            const videoId = this.getAttribute('data-vido-url');
            const headline = this.getAttribute('data-headline');
            const description = this.querySelector('.description');
            const headteglin = this.getAttribute('data-head-teglin');
            const catagoriname = this.getAttribute('data-category');
            const videoPlayer = document.getElementById('modalVideoPlayer');
            videoPlayer.innerHTML = `<img src="logo/logo.png" style="height: 480px;">`
            // Hide play icon from currently playing video
            if (currentlyPlayingVideo && currentlyPlayingVideo !== this) {
                hidePlayIcon(currentlyPlayingVideo);
            }

            // Hide play icon from clicked video (with animation)
            hidePlayIcon(this);
            currentlyPlayingVideo = this;
            currentlyPlayingVideoId = videoId;

            openModal(videoId, headline, description, headteglin, catagoriname);
            loadVideoGallery(videoId); // Pass the active video ID

            const errormasege = document.querySelector('.error-message');
            videoloding(errormasege);
        });
    });

    function hidePlayIcon(videoElement) {
        const playIcon = videoElement.querySelector('.play-icon');
        videoElement.classList.add('active');


        if (playIcon) {
            playIcon.classList.add('hiding');

            // After animation completes, add hidden class
            setTimeout(() => {
                playIcon.classList.remove('hiding', 'active');
                playIcon.classList.add('hidden');
            }, 400);
        };
    };
    function showPlayIcon(videoElement) {
        const playIcon = videoElement.querySelector('.play-icon');

        const videocontiner = document.querySelector('.video-container');
        if (videocontiner) {
            videocontiner.classList.remove('active');
        }
        if (playIcon) {
            playIcon.classList.remove('hidden', 'hiding');
            playIcon.classList.add('active');
        };
    };

    function showAllPlayIcons() {
        const allPlayIcons = document.querySelectorAll('.play-icon');
        allPlayIcons.forEach(icon => {
            icon.classList.remove('hidden', 'hiding');
            icon.classList.add('active');
        });
        const videocontiner = document.querySelectorAll('.video-container');
        videocontiner.forEach(cont => {
            cont.classList.remove('active');
        });
        currentlyPlayingVideo = null;
        currentlyPlayingVideoId = null;
    };

    function openModal(videoId, headline, description, headteglin, catagoriname) {
        const modal = document.getElementById('videoModal');
        modal.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        updateModalContent(videoId, headline, description, headteglin, catagoriname);
        modal.style.display = 'block';

    };

    function updateModalContent(videoId, headline, description, headteglin, catagoriname) {
        const videoPlayer = document.getElementById('modalVideoPlayer');
        videoPlayer.innerHTML = `<iframe id="ytVideo" data-src="${videoId}" frameborder="0" allowfullscreen></iframe>`;

        document.getElementById('modalhaedtaegname').textContent = headteglin;
        document.getElementById('modalHeadline').textContent = headline;
        document.getElementById('modalDescription').innerHTML = description.innerHTML;
        document.getElementById('catagoriname').textContent = catagoriname;

        iframeloded(headline);

    };

    async function iframeloded(headline) {
        const iframe = document.getElementById('ytVideo');
        const srcdata = iframe.getAttribute('data-src')
        const messageDiv = document.querySelector('.error-message');


        iframe.addEventListener('error', () => {
            messageDiv.style.display = 'block';
            iframe.style.display = 'none';
            return;
        })

        try {
            const response = await fetch(srcdata, { method: 'HEAD' }); // শুধু ভিডিও আছে কিনা দেখা
            if (response.ok) {
                // ভিডিও আছে → ভিডিও দেখানো
                iframe.src = srcdata
                iframe.addEventListener('load', () => {
                    messageDiv.style.display = 'none';
                    messageDiv.innerHTML = ``
                    iframe.style.display = 'block';
                })
            } else {
                // ভিডিও নাই → মেসেজ দেখানো
                setTimeout(() => {
                    messageDiv.innerHTML = `
                    <div class="internetcanectnone">
                        <div class="neticon"><i class="fas fa-circle-info"></i></div>
                        <div class="videoheadname">${headline}</div>
                        <div class="fastifo">ভিডিও দেয়া হয় নাই।</div>
                        <div class="secendifo">ভিডিওটি কিছুদিনের মধ্যে এখানে দেয়া হবে।</div>
                    </div>`;
                    messageDiv.classList.remove('loading');
                }, 150);
                messageDiv.style.display = 'flex';
            }
        } catch (error) {
            setTimeout(() => {
                messageDiv.innerHTML = `
                <div class="internetcanectnone">
                    <div class="neticon"><img src="icon/offline.svg" alt="offline" class="netim"></div>
                    <div class="fastifo">ভিডিও লোড করা যায়নি।</div>
                    <div class="secendifo">দয়া করে ইন্টারনেট কানেকশন চেক করুন।</div>
                </div>`;
                messageDiv.classList.remove('loading');
            }, 1500); // ১ সেকেন্ড অপেক্ষা করবে
            messageDiv.style.display = 'flex';
        };
    };

    function videoloding(errormasege) {
        errormasege.classList.add('loading');
        errormasege.innerHTML = `
            <div class="viddeolod">
                <div class="videospinandicon">
                    <div class="videospainer"></div>
                    <div class="videoicon"><i class="fas fa-video"></i></div>
                </div>
                <div class="lodingtext">ভিডিও লোড হচ্ছে...</div>
            </div>`;
    };

    function loadVideoGallery(activeVideoId) {
        const modalGallery = document.getElementById('modalVideoGallery');
        const allVideos = document.querySelectorAll('.video-container');

        modalGallery.innerHTML = ''

        allVideos.forEach(video => {
            const clone = video.cloneNode(true);
            const videoId = clone.getAttribute('data-vido-url');

            // Apply hide/show logic in modal gallery too
            if (videoId === activeVideoId) {
                const playIcon = clone.querySelector('.play-icon');
                const videocontiner = clone.querySelector('.video-container');
                if (videocontiner) {
                    videocontiner.classList.add('active');
                }
                if (playIcon) {
                    playIcon.classList.remove('active');
                    playIcon.classList.add('hidden');
                };
            };
            modalGallery.appendChild(clone);
        });
    };


    // Event delegation for modal gallery
    document.getElementById('modalVideoGallery').addEventListener('click', function (e) {
        const videoItem = e.target.closest('.video-container');

        if (videoItem) {
            const videoId = videoItem.getAttribute('data-vido-url');
            const headline = videoItem.getAttribute('data-headline');
            const description = videoItem.querySelector('.description');
            const headteglin = videoItem.getAttribute('data-head-teglin');
            const catagoriname = videoItem.getAttribute('data-category');

            // Update modal main content
            updateModalContent(videoId, headline, description, headteglin, catagoriname);

            // Update play icons in modal gallery
            updateModalGalleryIcons(videoId);

            // Update main gallery to reflect the change
            updateMainGallery(videoId);

            const errormasege = document.querySelector('.error-message')
            videoloding(errormasege);

            currentlyPlayingVideoId = videoId;

            const modal = document.getElementById('videoModal');
            modal.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    });

    function updateModalGalleryIcons(activeVideoId) {
        const modalVideoItems = document.querySelectorAll('#modalVideoGallery .video-container');

        modalVideoItems.forEach(item => {
            const playIcon = item.querySelector('.play-icon');
            const itemVideoId = item.getAttribute('data-vido-url');

            if (itemVideoId === activeVideoId) {
                // Hide play icon for active video in modal
                playIcon.classList.add('hiding');
                setTimeout(() => {
                    playIcon.classList.remove('hiding', 'active');
                    playIcon.classList.add('hidden');
                    item.classList.add('active');
                }, 400);
            } else {
                // Show play icon for other videos in modal
                playIcon.classList.remove('hidden', 'hiding');
                playIcon.classList.add('active');
                item.classList.remove('active');
            }
        });
    }
    function updateMainGallery(activeVideoId) {
        const allVideoItems = document.querySelectorAll('.video-gallery .video-container');

        allVideoItems.forEach(item => {
            const playIcon = item.querySelector('.play-icon');
            const itemVideoId = item.getAttribute('data-vido-url');

            if (itemVideoId === activeVideoId) {
                // Hide play icon for active video
                hidePlayIcon(item);
                currentlyPlayingVideo = item;
            } else {
                // Show play icon for other videos
                showPlayIcon(item);
            }
        });
    }

    // ভিডিও ড্রিস্ক্রিপ্সন দেখানো
    const descriptioncontent = document.getElementById('descriptioncontent');
    const textoverflow = document.getElementById('textoverflow');
    const vidodrisc = document.getElementById('modalDescription');
    const dekhahyeche = document.getElementById('dekhahyeche');
    const dekhun = document.getElementById('dekhun');
    const inicon = document.getElementById('inicon');
    const upicon = document.getElementById('upicon');

    if (textoverflow) {
        textoverflow.addEventListener('click', function () {
            vidodrisc.classList.toggle('active');

            descriptioncontent.classList.toggle('active');
            textoverflow.classList.toggle('active');
            inicon.classList.toggle('active');
            upicon.classList.toggle('active');
            dekhun.classList.toggle('active');
            dekhahyeche.classList.toggle('active');

        });
    };

    // কুইক বাটনের জন্য বাটন একটিভ আপডেট করা
    const quickbtn = document.querySelectorAll('.quick-btn');
    quickbtn.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            quickbtn.forEach(e => e.classList.remove('active'));
            this.classList.add('active');


        });
    });


    // কুইক বাটন ক্লিক ইভেন্ট
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const videoItembtn = e.target.closest('.quick-btn');
            const category = videoItembtn.getAttribute('data-category');
            const alshowbtn = document.getElementById('alshow');
            const titel = document.getElementById('modaltitel');
            const videoItem = document.querySelectorAll('.video-container');
            const noVideosMessage = document.getElementById('elsovideo');
            const catagoricanect = document.getElementById('catagoricanect');

            // ফিল্টার ফাংশন কল
            const found = filtermodalitem(videoItembtn, category, alshowbtn, videoItem, titel);

            // কোনো ভিডিও না থাকলে "দেয়া হয়নি!" দেখাবে
            if (found) {
                noVideosMessage.style.display = "none";
                titel.style.display = 'none';

            } else {
                noVideosMessage.style.display = "block";
                titel.style.display = 'block';
                catagoricanect.innerHTML = videoItembtn.innerHTML

            }

            titel.style.display = 'block';
            alshowbtn.style.display = 'inline-block';
            thistiteladde(videoItembtn, titel, alshowbtn, category);
        });
    });

    function filtermodalitem(videoItembtn, category, alshowbtn, videoItem) {
        let matchFound = false;

        videoItem.forEach(video => {
            const mainvdcata = video.getAttribute('data-category');

            if (category === mainvdcata) {
                video.style.display = 'block';
                video.classList.add('fadeUp');
                matchFound = true;
            } else if (videoItembtn === alshowbtn) {
                video.style.display = 'block';
                video.classList.add('fadeUp');
                matchFound = true;
            } else {
                video.style.display = 'none';
            }
        });

        return matchFound;
    }
    function thistiteladde(videoItembtn, titel, alshowbtn, category) {

        if (videoItembtn === alshowbtn) {
            titel.innerHTML = `<div style="color:#0A192e;background-color:#c3ddff4a;padding:5px 10px;font-size:15px;animation:fadeIn 1.2s ease;">${category}</div>`;
        } else {
            titel.innerHTML = `<div style="color:#0A192e;background-color:#c3ddff4a;padding:5px 10px;font-size:15px;animation:fadeIn 1.2s ease;">${videoItembtn.innerHTML}</div>`;
        }

        setTimeout(() => {
            if (videoItembtn === alshowbtn) {
                titel.style.display = 'none';
                alshowbtn.style.display = 'none';
            } else {
                titel.style.display = 'block';
                alshowbtn.style.display = 'inline-block';
            }
        }, 1000);

    }


    // Close modal - Show all icons when modal closes
    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('videoModal').style.display = 'none';

        const videoPlayer = document.getElementById('modalVideoPlayer');
        videoPlayer.innerHTML = `<div>কোনো ভিডিও নাই</div>`;
        const modalGallery = document.getElementById('modalVideoGallery');

        quickbtn.forEach(e => e.classList.remove('active'));

        const titel = document.getElementById('modaltitel');
        titel.innerHTML = ``

        document.querySelectorAll('.video-container').forEach(
            videoItem => {
                videoItem.style.display = 'block'
            });

        modalGallery.innerHTML = '';
        showAllPlayIcons();
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


    // লোডিং এফেক্ট
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });
});
