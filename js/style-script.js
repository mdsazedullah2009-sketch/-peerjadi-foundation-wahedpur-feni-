// IntersectionObserver (স্পেস ছাড়া এবং ও বড় হাতের হবে)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // সেকশনটি যখনই স্ক্রিনে আসবে
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // একবার অ্যানিমেশন হয়ে গেলে ট্র্যাক করা বন্ধ করতে চাইলে নিচের লাইনটি রাখতে পারেন
            // observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 // সেকশনটির ১৫% স্ক্রিনে আসলে অ্যানিমেশন চালু হবে
});

// সব 'reveal' ক্লাস যুক্ত উপাদানগুলোকে ট্র্যাক করা
const sections = document.querySelectorAll('.reveal');
sections.forEach((section) => {
    observer.observe(section);
});