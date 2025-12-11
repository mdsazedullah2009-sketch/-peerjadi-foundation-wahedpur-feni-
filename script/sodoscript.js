// আপনার Google Apps Script এর Web app URL টি এখানে দিন (ধাপ ২ দেখুন)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx_cRv72oJKkm4iB7JvqmTHk94lqzGMReHZ1ceMlXu04xlT_J1MtBImlXXzgBhDISfm/exec";

// ফাইল সাইজের নতুন কনস্ট্যান্ট (৫০ KB)
const MAX_FILE_SIZE = 50 * 1024;

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

    const pageprint = document.querySelector(".printforom");
    if (pageprint) {
        pageprint.addEventListener('click', function () {
            const summary = document.getElementById('stutesfr')
            summary.select(print(summary))
        })
    }

    // সদস্য প্রকার লজিক
    const radios = document.querySelectorAll('input[name="memberType"]');
    const spans = document.querySelectorAll('.selectedMember');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            spans.forEach(span => {
                span.textContent = radio.value;
            }
            );
        });
    });

    // বর্তমান ও স্থায়ী ঠিকানা অটো-কপি লজিক
    const sameAddress = document.getElementById('sameAddress');

    const presentFields = {
        haus: document.getElementById('present_haus'),
        village: document.getElementById('present_village'),
        post: document.getElementById('present_post'),
        thana: document.getElementById('present_thana'),
        district: document.getElementById('present_district')
    };

    const permanentFields = {
        haus: document.getElementById('permanent_haus'),
        village: document.getElementById('permanent_village'),
        post: document.getElementById('permanent_post'),
        thana: document.getElementById('permanent_thana'),
        district: document.getElementById('permanent_district')
    };

    function updatePermanentFieldsState(isDisabled) {
        for (let key in permanentFields) {
            if (isDisabled) {
                permanentFields[key].value = presentFields[key].value;
                permanentFields[key].setAttribute('disabled', true);
                permanentFields[key].removeAttribute('required');
            } else {
                permanentFields[key].value = '';
                permanentFields[key].removeAttribute('disabled');
                permanentFields[key].setAttribute('required', true);
            }
        }
    }

    sameAddress.addEventListener('change', function () {
        updatePermanentFieldsState(this.checked);
    });

    // যদি বর্তমান ঠিকানা পরিবর্তন হয় এবং sameAddress চেক করা থাকে, তবে স্থায়ী ঠিকানাও পরিবর্তন হবে
    for (let key in presentFields) {
        presentFields[key].addEventListener('input', () => {
            if (sameAddress.checked) {
                permanentFields[key].value = presentFields[key].value;
            }
        });
    }

    // পেমেন্ট মাধ্যম লজিক
    const bikas = document.getElementById('bikas');
    const ngod = document.getElementById('ngod');
    const cas = document.getElementById('cas');
    const trajectionDiv = document.getElementById('trajection');
    const txidInput = document.getElementById('txid');
    const numberLink = document.getElementById('number');
    const bikasnong = document.getElementById('bikasnong');
    const ngodnong = document.getElementById('ngodnong');

    function updatePaymentDisplay(method) {
        if (method === 'বিকাশ') {
            numberLink.style.display = 'block';
            trajectionDiv.style.display = 'block';
            numberLink.style.color = '#ba075d';
            numberLink.style.border = '2px solid #ba075d';
            bikasnong.style.display = 'block';
            ngodnong.style.display = 'none';
            txidInput.required = true;
        } else if (method === 'নগদ') {
            numberLink.style.display = 'block';
            trajectionDiv.style.display = 'block';
            numberLink.style.color = '#ba070d';
            numberLink.style.border = '2px solid #ba070d';
            ngodnong.style.display = 'block';
            bikasnong.style.display = 'none';
            txidInput.required = true;
        } else { // ক্যাশ
            numberLink.style.display = 'none';
            trajectionDiv.style.display = 'none';
            bikasnong.style.display = 'none';
            ngodnong.style.display = 'none';
            txidInput.required = false;
            txidInput.value = ''
        }
    }
    // ইনিশিয়াল চেক:
    updatePaymentDisplay(document.querySelector('input[name="payMethod"]:checked')?.value || 'বিকাশ');

    bikas.addEventListener('change', () => updatePaymentDisplay('বিকাশ'));
    ngod.addEventListener('change', () => updatePaymentDisplay('নগদ'));
    cas.addEventListener('change', () => updatePaymentDisplay('ক্যাশ'));

    // লক্ষনিয় লজিক
    const formnotis = document.getElementById('formnotis');
    const notisbody1 = document.getElementById('notisbody1');
    const notisbody2 = document.getElementById('notisbody2');
    const cllosnotis = document.getElementById('cllosnotis');
    const lkkhonio = document.getElementById('lkkhonio');
    const niomaboli = document.getElementById('niomaboli');
    const closebtn = document.getElementById('closebtn');
    const nextbuton = document.getElementById('nextbuton');
    const backbuton = document.getElementById('backbuton');

    if (cllosnotis) {
        cllosnotis.addEventListener('click', function () {
            formnotis.style.display = 'none';
        });
    }

    if (closebtn) {
        closebtn.addEventListener('click', function () {
            formnotis.style.display = 'none';
        });
    }

    if (nextbuton) {
        nextbuton.addEventListener('click', function () {
            lkkhonio.style.display = 'none';
            notisbody1.style.display = 'none';
            nextbuton.style.display = 'none';
            niomaboli.style.display = 'block';
            closebtn.style.display = 'block';
            backbuton.style.display = 'block';
            notisbody2.style.display = 'block';
        });
    }

    if (backbuton) {
        backbuton.addEventListener('click', function () {
            notisbody2.style.display = 'none';
            niomaboli.style.display = 'none';
            lkkhonio.style.display = 'block';
            notisbody1.style.display = 'block';
            backbuton.style.display = 'none';
            closebtn.style.display = 'none';
            nextbuton.style.display = 'block';
        });
    }


    // DOM Elements
    const form = document.getElementById('memberForm');
    const saveBtn = document.getElementById('saveBtn');
    const nid1silectInput = document.getElementById('nid1silect');
    const nid2silectInput = document.getElementById('nid2silect'); // NID 2/Signature
    const nid1Div = document.getElementById('nid1');
    const nid2Div = document.getElementById('nid2');
    const dobInput = document.getElementById('dob');
    const dateOptionManual = document.getElementById('dateOptionManual');
    const dateOptionDropdown = document.getElementById('dateOptionDropdown');
    const dropdownDateSelector = document.getElementById('dropdownDateSelector');
    const daySelect = document.getElementById('daySelect');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    const setDateBtn = document.getElementById('setDateBtn');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const memberKajCheckboxes = document.querySelectorAll('input[name="secendarymemberType"]');


    // তারিখ ড্রপডাউন পপুলেট করুন
    function populateDateDropdowns() {
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i < 10 ? '0' + i : i;
            option.textContent = i;
            daySelect.appendChild(option);
        }

        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1900; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    // তারিখ অপশন পরিবর্তন হলে
    dateOptionManual.addEventListener('change', () => {
        if (dateOptionManual.checked) {
            dropdownDateSelector.style.display = 'none';
            dobInput.style.display = 'block';
        }
    });

    dateOptionDropdown.addEventListener('change', () => {
        if (dateOptionDropdown.checked) {
            dropdownDateSelector.style.display = 'block';
            dobInput.style.display = 'none';
        }
    });

    // তারিখ সেট বাটন ক্লিক হলে
    setDateBtn.addEventListener('click', () => {
        const day = daySelect.value;
        const month = monthSelect.value;
        const year = yearSelect.value;

        if (!day || !month || !year) {
            alert('দয়া করে দিন, মাস এবং বছর নির্বাচন করুন');
            return;
        }

        dobInput.value = `${year}-${month}-${day}`;
        dobInput.style.display = 'block'; // ম্যানুয়াল ইনপুটটি visible করে ডেটা বসানো
        alert(`তারিখ সেট করা হয়েছে: ${day}/${month}/${year}`);
    });

    // মডাল বন্ধ করার ফাংশন
    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            imageModal.style.display = 'none';
        });
    });

    // মডালের বাইরে ক্লিক করলে বন্ধ হবে
    window.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });

    // File preview functionality (Base64 রূপান্তর)
    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            // ফাইল সাইজ চেক যোগ করা হলো
            if (file.size > MAX_FILE_SIZE) {
                reject(`ফাইলের আকার ${Math.round(MAX_FILE_SIZE / 1024)} KB এর বেশি হওয়া চলবে না।`);
                return;
            }

            const fr = new FileReader();
            fr.onload = () => resolve(fr.result);
            fr.onerror = reject;
            fr.readAsDataURL(file);
        });
    }

    // প্রিভিউ তৈরি করা এবং সাইজ চেক
    function setupImagePreview(inputElement, previewDiv) {
        inputElement.addEventListener('change', async e => {
            previewDiv.innerHTML = '';
            const file = e.target.files[0];
            if (!file) return;

            // সাইজ চেক
            if (file.size > MAX_FILE_SIZE) {
                alert(`ফাইলের আকার ${Math.round(MAX_FILE_SIZE / 1024)} KB এর বেশি হওয়া চলবে না। ফাইলটি বাতিল করা হয়েছে।`);
                inputElement.value = ''; // ইনপুট রিসেট
                return;
            }

            try {
                const url = URL.createObjectURL(file);
                const img = document.createElement('img');
                img.src = url;
                img.className = 'preview-img';
                img.onclick = () => {
                    modalImage.src = url;
                    imageModal.style.display = 'flex';
                };
                previewDiv.appendChild(img);
            } catch (error) {
                console.error("Preview Error:", error);
                alert("ছবি প্রিভিউ করতে সমস্যা হয়েছে।");
            }
        });
    }

    setupImagePreview(nid1silectInput, nid1Div);
    setupImagePreview(nid2silectInput, nid2Div);



    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // বাধ্যতামূলক ফিল্ড চেক
        const memberType = document.querySelector('input[name="memberType"]:checked')?.value;
        const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value;
        const nid1silectFile = nid1silectInput.files[0];
        const nid2silectFile = nid2silectInput.files[0];
        const agree = document.getElementById('agree').checked;

        // বাধ্যতামূলক ইনপুটগুলি সরাসরি ফর্মের মাধ্যমে HTML5 দিয়ে চেক হবে

        // স্থায়ী ঠিকানা বাধ্যবাধকতা লজিক
        if (!sameAddress.checked) {
            let permanentFieldsMissing = false;
            for (let key in permanentFields) {
                if (permanentFields[key].value.trim() === '') {
                    permanentFieldsMissing = true;
                    break;
                }
            }
            if (permanentFieldsMissing) {
                alert('দয়া করে আপনার বাড়ির বা স্থায়ী ঠিকানার সকল তথ্য সঠিকভাবে পূরণ করুন অথবা "বর্তমান ঠিকানাই স্থায়ী ঠিকানা" চেকবক্সে টিক দিন।');
                return;
            }
        }

        if (!nid1silectFile || !nid2silectFile) {
            alert('দয়া করে NID কার্ডের উভয় পৃষ্ঠার ছবি আপলোড করুন।');
            return;
        }

        if (!memberType) {
            alert('দয়া করে সদস্য প্রকারভেদ নির্বাচন করুন।');
            return;
        }

        if (!payMethod) {
            alert('দয়া করে টাকা প্রদান মাধ্যম নির্বাচন করুন।');
            return;
        }

        if (!agree) {
            alert('দয়া করে শর্তাবলী মেনে চেকবক্সে টিক দিন।');
            return;
        }

        // ট্রানজেকশন আইডি চেক
        const txid = document.getElementById('txid').value.trim();
        if ((payMethod === 'বিকাশ' || payMethod === 'নগদ') && !txid) {
            if (!confirm('আপনি লেনদেনের ট্রানজেকশন আইডি দেননি। নিশ্চিতভাবে জমা দিতে চান?')) {
                return;
            }
        }

        // অন্যান্য কার্যক্রম সংগ্রহ করা
        const selectedKaj = Array.from(memberKajCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);


        // Show loading state
        saveBtn.textContent = 'জমা হচ্ছে...';
        saveBtn.disabled = true;

        try {
            // Base64 রূপান্তর (সাইজ চেক এর মধ্যেই করা আছে)
            const nid1silectBase64 = await readFileAsDataURL(nid1silectFile);
            const nid2silectBase64 = await readFileAsDataURL(nid2silectFile);

            // ডেটা সংগ্রহ
            const applicationData = {
                maberid: Date.now(),
                application_date: new Date().toLocaleString('bn-BD'),
                fullname: document.getElementById('fullname').value.trim(),
                fathername: document.getElementById('fathername').value.trim(),
                mothername: document.getElementById('mothername').value.trim(),
                jov: document.getElementById('jov').value.trim(),
                dob: dobInput.value,
                mobile: document.getElementById('mobile').value.trim(),
                email: document.getElementById('email').value.trim(),
                present_haus: presentFields.haus.value.trim(),
                present_village: presentFields.village.value.trim(),
                present_post: presentFields.post.value.trim(),
                present_thana: presentFields.thana.value.trim(),
                present_district: presentFields.district.value.trim(),
                permanent_haus: permanentFields.haus.value.trim(),
                permanent_village: permanentFields.village.value.trim(),
                permanent_post: permanentFields.post.value.trim(),
                permanent_thana: permanentFields.thana.value.trim(),
                permanent_district: permanentFields.district.value.trim(),
                memberType: memberType,
                secendarymemberType: selectedKaj, // অ্যারে হিসেবে পাঠানো হচ্ছে
                payMethod: payMethod,
                txid: txid,
                nid1silect: nid1silectBase64,
                nid2silect: nid2silectBase64
            };

            // GAS এ ডেটা পাঠানো
            const response = await fetch(WEB_APP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(applicationData)
            });

            if (response.ok) {
                const result = await response.json();
                if (result.result === 'success') {
                    resultshow(applicationData);
                    alert('আপনার আবেদন সফলভাবে জমা হয়েছে!');
                    form.reset();
                    nid1Div.innerHTML = '';
                    nid2Div.innerHTML = '';
                    updatePermanentFieldsState(false); // ঠিকানা রিসেট
                } else {
                    alert('আবেদন জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
                }
            } else {
                alert('আবেদন জমা দিতে সমস্যা হয়েছে (নেটওয়ার্ক / সার্ভার ত্রুটি)। অনুগ্রহ করে আবার চেষ্টা করুন।');
            }
        } catch (error) {
            alert(`ত্রুটি: ${error.message || 'আবেদন জমা দেওয়া যায়নি।'}`);
            console.error('Error:', error);
        } finally {
            saveBtn.textContent = 'সাবমিট করুন';
            saveBtn.disabled = false;
        }
    });

    function resultshow(applicationData) {
        const resultcont = document.getElementById('fromproview');
        const summary = document.getElementById('stutesfr')
        resultcont.style.display = 'block';
        summary.innerHTML = `
        <div class="appl-date">${applicationData.application_date}</div>
        <div class="sumbody">
            <section class="userformal">
                <div>নাম: <span id="name">${applicationData.fullname}</span></div>
                <div>পিতার নাম: <span id="dade">${applicationData.fathername}</span></div>
                <div>মাতার নাম: <span id="mother">${applicationData.mothername || `দেন নাই`} </span></div>
                <div>পেশা: <span id="pesa">${applicationData.jov}</span></div>
                <div>জন্ম তারিখ: <span id="bard">${applicationData.dob || `দেন নাই`}</span></div>
            </section>
            <section class="userformal">
                বর্তমান ঠিকানা
                <div>বাড়ি বা বাসার নাম: <span id="prshaus">${applicationData.present_haus}</span></div>
                <div>গ্রাম / পাড়া: <span id="prsvill">${applicationData.present_village}</span></div>
                <div>ডাকঘর: <span id="prspost">${applicationData.present_post}</span></div>
                <div>থানা: <span id="prsthana">${applicationData.present_thana}</span></div>
                <div>জেলা: <span id="prsdis">${applicationData.present_district}</span></div>
            </section>
            <section class="userformal">
                স্থাই ঠিকানা
                <div>বাড়ি বা বাসার নাম: <span id="parhaus">${applicationData.permanent_haus}</span></div>
                <div>গ্রাম / পাড়া: <span id="parvill">${applicationData.permanent_village}</span></div>
                <div>ডাকঘর: <span id="parpost">${applicationData.permanent_post}</span></div>
                <div>থানা: <span id="parthana">${applicationData.permanent_thana}</span></div>
                <div>জেলা: <span id="pardis">${applicationData.permanent_district}</span></div>
            </section>
            <section class="userformal">
                <div class="usersecend">
                    <div>আপনার NID কাার্ডের ছবি (প্রথম পৃষ্ঠা): <img src="${applicationData.nid1silect}"
                            alt="nid1" id="nid1">
                    </div>
                </div>
                <div class="usersecend">
                    <div>আপনার NID কাার্ডের ছবি (দ্বিতীয় পৃষ্ঠা): <img src="${applicationData.nid2silect}"
                            alt="nid2" id="nid2">
                    </div>
                </div>
            </section>
            <section class="userformal">
                <div class="usersecend">
                    <div>সদস্য প্রকার: <span id="meber">${applicationData.memberType}</span></div>
                </div>
                <div class="usersecend">
                    <div>আপনি যে কার্যক্রমের জন্য বিশেষভাবে ইচ্ছুক:
                        <span id="suvceta">
                            <span>${applicationData.secendarymemberType || `দেন নাই`}</span>
                        </span>
                    </div>
                </div>
            </section>
            <section class="userformal">
                    <div>মোবাইল নম্বর: <span id="moba"><a href="tel:${applicationData.mobile}">
                                ${applicationData.mobile}</a>
                        </span></div>
                    <div>ইমেইল ঠিকানা: <span id="melt"><a
                                href="mailto:${applicationData.email}">${applicationData.email || `দেন নাই`}</a></span>
                    </div>
                <div>টাকা প্রদান মাধ্যম: <span id="paymatod">${applicationData.payMethod}</span></div>
                <div>ট্রানজেকশন আইডি: <span id="trajecnm">${applicationData.txid || `...`}</span></div>
            </section>
        </div>`;
    };

    // Initial setup
    populateDateDropdowns();


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


    // লিংকের জন্য অ্যাকর্ডিয়ন ফাংশনালিটি
    const accli = document.getElementsByClassName('accordion');

    for (let i = 0; i < accli.length; i++) {
        accli[i].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
});
