const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

const currentTheme = getTheme();
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        saveTheme('dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        saveTheme('light');
    }
});

let themeStorage = currentTheme || 'light';

function saveTheme(theme) {
    themeStorage = theme;
}

function getTheme() {
    return themeStorage;
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const typingText = document.getElementById('typingText');
const words = ['Full Stack Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                const category = item.getAttribute('data-category');
                if (category === filterValue) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});

const skillsSection = document.querySelector('.skills-section');
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.clientHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > skillsSectionTop + skillsSectionHeight / 3 && !skillsAnimated) {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);

const blogSearch = document.getElementById('blogSearch');
const blogCards = document.querySelectorAll('.blog-card');

blogSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    blogCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const content = card.getAttribute('data-content').toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const modal = document.getElementById('blogModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

const blogArticles = [{
        title: 'Memahami React Hooks dengan Mudah',
        date: '15 Januari 2025',
        category: 'Tutorial',
        content: `
            <h2>Memahami React Hooks dengan Mudah</h2>
            <p class="blog-meta"><i class="far fa-calendar"></i> 15 Januari 2025 | <i class="far fa-user"></i> John Doe</p>
            <img src="https://via.placeholder.com/800x400/2563eb/ffffff?text=React+Hooks" alt="React Hooks" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
            <p>React Hooks adalah fitur yang diperkenalkan di React 16.8 yang memungkinkan kita menggunakan state dan fitur React lainnya tanpa menulis class component. Hooks membuat kode lebih bersih dan mudah dipahami.</p>
            <h3>Apa itu Hooks?</h3>
            <p>Hooks adalah fungsi spesial yang memungkinkan kita "hook into" fitur-fitur React. Hooks yang paling umum digunakan adalah useState dan useEffect.</p>
            <h3>useState Hook</h3>
            <p>useState memungkinkan kita menambahkan state ke functional component. Contoh penggunaannya:</p>
            <pre style="background: #f8fafc; padding: 1rem; border-radius: 8px; overflow-x: auto;">
const [count, setCount] = useState(0);
            </pre>
            <h3>useEffect Hook</h3>
            <p>useEffect memungkinkan kita melakukan side effects di functional component. Ini menggantikan lifecycle methods seperti componentDidMount dan componentDidUpdate.</p>
            <p>Dengan memahami Hooks, Anda dapat menulis kode React yang lebih efisien dan mudah dimaintain.</p>
        `
    },
    {
        title: '10 Tips Optimasi Performa Website',
        date: '12 Januari 2025',
        category: 'Tips',
        content: `
            <h2>10 Tips Optimasi Performa Website</h2>
            <p class="blog-meta"><i class="far fa-calendar"></i> 12 Januari 2025 | <i class="far fa-user"></i> John Doe</p>
            <img src="https://via.placeholder.com/800x400/f97316/ffffff?text=Website+Optimization" alt="Website Optimization" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
            <p>Performa website yang baik sangat penting untuk pengalaman pengguna dan SEO. Berikut adalah 10 tips untuk meningkatkan performa website Anda.</p>
            <h3>1. Optimalkan Gambar</h3>
            <p>Kompres gambar tanpa mengurangi kualitas visual. Gunakan format modern seperti WebP.</p>
            <h3>2. Minify CSS dan JavaScript</h3>
            <p>Hapus spasi dan karakter yang tidak perlu dari file CSS dan JavaScript untuk mengurangi ukuran file.</p>
            <h3>3. Gunakan Browser Caching</h3>
            <p>Simpan file statis di browser pengguna untuk mengurangi waktu loading di kunjungan berikutnya.</p>
            <h3>4. Lazy Loading</h3>
            <p>Muat konten hanya ketika dibutuhkan, terutama untuk gambar dan video.</p>
            <h3>5. CDN (Content Delivery Network)</h3>
            <p>Gunakan CDN untuk mendistribusikan konten Anda ke server yang lebih dekat dengan pengguna.</p>
            <p>Dengan menerapkan tips-tips ini, website Anda akan lebih cepat dan memberikan pengalaman yang lebih baik kepada pengunjung.</p>
        `
    },
    {
        title: 'Tren Web Development di 2025',
        date: '8 Januari 2025',
        category: 'Insight',
        content: `
            <h2>Tren Web Development di 2025</h2>
            <p class="blog-meta"><i class="far fa-calendar"></i> 8 Januari 2025 | <i class="far fa-user"></i> John Doe</p>
            <img src="https://via.placeholder.com/800x400/10b981/ffffff?text=Web+Trends+2025" alt="Web Trends 2025" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
            <p>Industri web development terus berkembang dengan cepat. Mari kita lihat tren-tren yang akan mendominasi tahun 2025.</p>
            <h3>1. AI dan Machine Learning</h3>
            <p>Integrasi AI dalam web development semakin umum, dari chatbot hingga personalisasi konten.</p>
            <h3>2. Progressive Web Apps (PWA)</h3>
            <p>PWA memberikan pengalaman seperti native app di browser, dengan kemampuan offline dan push notifications.</p>
            <h3>3. Jamstack Architecture</h3>
            <p>Arsitektur modern yang memisahkan frontend dan backend untuk performa dan keamanan yang lebih baik.</p>
            <h3>4. WebAssembly</h3>
            <p>Memungkinkan aplikasi web berjalan dengan performa mendekati native application.</p>
            <h3>5. Voice Search Optimization</h3>
            <p>Optimasi untuk pencarian suara semakin penting dengan meningkatnya penggunaan voice assistant.</p>
            <p>Developer yang mengikuti tren ini akan memiliki keunggulan kompetitif di industri.</p>
        `
    }
];

function openBlogModal(index) {
    modal.style.display = 'block';
    modalBody.innerHTML = blogArticles[index].content;
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Mohon isi semua field!';
        formMessage.className = 'form-message error';
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Email tidak valid!';
        formMessage.className = 'form-message error';
        return;
    }

    // Simulate form submission
    formMessage.textContent = 'Pesan berhasil dikirim! Terima kasih telah menghubungi saya.';
    formMessage.className = 'form-message success';

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .portfolio-item, .blog-card, .skill-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== INITIALIZE ON LOAD ==========
window.addEventListener('load', () => {
    // Trigger initial animations
    animateSkills();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});