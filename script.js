function toggleExpand(card) {
    console.log('expand')
    const alreadyOpen = card.classList.contains('expanded');

    // Tutup semua card yang sudah terbuka, tetapi jangan tutup jika card ini sudah terbuka
    const allCards = document.querySelectorAll('.award-card, .project-card');
    allCards.forEach(c => {
        // Hanya tutup jika card bukan yang di-klik
        if (c !== card) {
            const expandSection = c.querySelector('.expand-section');
            if (expandSection) {
                // Menutup elemen yang sudah diperluas dengan animasi
                expandSection.style.opacity = 0;
                expandSection.style.transform = 'translateY(20px)';
            }
            c.classList.remove('expanded');
        }
    });
    console.log('already open',alreadyOpen)
    // Jika card ini belum terbuka, buka dengan animasi
    if (!alreadyOpen) {
        card.classList.add('expanded');
        const expandSection = card.querySelector('.expand-section');
        if (expandSection) {
            setTimeout(() => {
                expandSection.style.opacity = 1;
                expandSection.style.transform = 'translateY(0)';
            }, 300); // Delay untuk transisi
        }

        // Inisialisasi swiper jika belum
        const swiperEl = card.querySelector('.swiper-container');
        if (swiperEl && !swiperEl.classList.contains('swiper-initialized')) {
            new Swiper(swiperEl, {
                pagination: {
                    el: swiperEl.querySelector('.swiper-pagination'),
                },
                navigation: {
                    nextEl: swiperEl.querySelector('.swiper-button-next'),
                    prevEl: swiperEl.querySelector('.swiper-button-prev'),
                },
                on: {
                    click: function (swiper, event) {
                        // Mencegah penutupan saat klik di tombol navigasi swiper atau area gambar
                        event.stopPropagation();
                    }
                }
            });
        }
    } else {
        const expandSection = card.querySelector('.expand-section');
        if (expandSection) {
            expandSection.style.opacity = 0;
            expandSection.style.transform = 'translateY(20px)';
        }
        card.classList.remove('expanded');
    }
}

// Event listener untuk tombol minimize
document.querySelectorAll('.minimize-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Menghentikan propagasi event agar tidak menutup card
        event.stopPropagation();
        
        const card = button.closest('.award-card, .project-card');
        if (card) {
            const expandSection = card.querySelector('.expand-section');
            // Menyembunyikan expand section dan mengembalikan card ke posisi semula
            expandSection.style.opacity = 0;
            expandSection.style.transform = 'translateY(20px)';
            card.classList.remove('expanded');
        }
    });
});


    // Menambahkan event listener untuk setiap card (award dan project)
    document.querySelectorAll('.award-card, .project-card').forEach(card => {
        card.addEventListener('click', function(event) {
            console.log('Card clicked:', card);
            if (
                event.target.closest('.expand-section') || 
                event.target.closest('.swiper-slide') || 
                event.target.closest('.swiper-button-next') || 
                event.target.closest('.swiper-button-prev') || 
                event.target.closest('.minimize-btn')
            ) {
                return;  // Cegah aksi di elemen-elemen ini
            }
            toggleExpand(card);  // Panggil fungsi toggleExpand
        });
    });

  
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is fully loaded');
    
    // Memuat dan menambahkan event listener setelah awards dan portfolio dimuat
    loadAwards();
    loadPortfolio();
});
  // Fungsi untuk memuat dan menampilkan data Awards
// Fungsi untuk memuat dan menampilkan data Awards

function loadAwards() {
    fetch('data/awards.json')
        .then(response => response.json())
        .then(data => {
            console.log('data awards', data);
            const awardsContainer = document.querySelector('#awards-container');
            data.data.forEach(award => {
                const awardCard = document.createElement('div');
                awardCard.classList.add('award-card');
                
                awardCard.innerHTML = `
                    <button class="minimize-btn">-</button>
                    <div class="award-icon">🏆</div>
                    <div class="award-info">
                        <h3>${award.title}</h3>
                        <p>${award.subtitle}</p>
                    </div>
                    <div class="expand-section">
                        <div class="expand-left swiper-container">
                            <div class="swiper-wrapper">
                                ${award.screenshots.map(ss => `
                                    <div class="swiper-slide"><img src="${ss}" alt="screenshot"></div>
                                `).join('')}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div class="expand-right">
                            <h3>${award.title}</h3>
                            <p class="subtitle">${award.subtitle}</p>
                            <div class="tech-icons">
                                ${award.technologies.map(tech => `<img src="icons/${tech}.png" alt="${tech}">`).join('')}
                            </div>
                            <p>${award.description}</p>
                        </div>
                    </div>
                `;
                awardsContainer.appendChild(awardCard);
            });

            // Log untuk mengecek apakah kartu ditambahkan ke DOM
            console.log('Awards cards added');
            
            // Memastikan event listener dipasang setelah kartu dimuat
            document.querySelectorAll('.award-card').forEach(card => {
                card.addEventListener('click', function(event) {
                    console.log('Award card clicked');
                    toggleExpand(card); // Memastikan toggleExpand berfungsi
                });
            });
        })
        .catch(error => console.error('Error loading awards:', error));
}

// Fungsi untuk memuat dan menampilkan data Portfolio
function loadPortfolio() {
    fetch('data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            console.log('data portfolio', data);
            const portfolioContainer = document.querySelector('#portfolio-container');
            
            data.data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                
                projectCard.innerHTML = `
                    <button class="minimize-btn">-</button>
                    <h3>${project.title}</h3>
                    <p class="short-desc">${project.subtitle}</p>
                    <div class="expand-section">
                        <div class="expand-left swiper-container">
                            <div class="swiper-wrapper">
                                ${project.screenshots.map(ss => `
                                    <div class="swiper-slide"><img src="${ss}" alt="screenshot"></div>
                                `).join('')}
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="expand-right">
                            <h3>${project.title}</h3>
                            <p class="subtitle">${project.subtitle}</p>
                            <div class="tech-icons">
                                ${project.technologies.map(tech => `<img src="icons/${tech}.png" alt="${tech}">`).join('')}
                            </div>
                            <p>${project.description}</p>
                        </div>
                    </div>
                `;
                portfolioContainer.appendChild(projectCard);
            });

            // Log untuk memastikan portfolio cards ditambahkan ke DOM
            console.log('Portfolio cards added');
            
            // Memastikan event listener dipasang setelah kartu portfolio dimuat
            document.querySelectorAll('.project-card').forEach(card => {
                console.log('Project card:', card);  // Log untuk melihat elemen
                card.addEventListener('click', function(event) {
                    console.log('Project card clicked');  // Log untuk event listener
                    toggleExpand(card); // Memastikan toggleExpand berfungsi
                });
            });
        })
        .catch(error => console.error('Error loading portfolio:', error));
}



