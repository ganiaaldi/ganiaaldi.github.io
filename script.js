
function handleCardClick(event, clickedCard) {
    const target = event.target;

    // Jangan collapse kalau klik di dalam expand-section atau tombol swiper
    const isInsideExpand = target.closest('.expand-section');
    const isSwiperNav = target.classList.contains('swiper-button-next') ||
                        target.classList.contains('swiper-button-prev') ||
                        target.closest('.swiper-pagination');

    if (isInsideExpand || isSwiperNav) return;

    const allCards = document.querySelectorAll('.project-card, .award-card');
    const isAlreadyExpanded = clickedCard.classList.contains('expanded');

    // Collapse semua
    allCards.forEach(card => card.classList.remove('expanded'));

    // Kalau card belum expanded, baru kita expand
    if (!isAlreadyExpanded) {
        clickedCard.classList.add('expanded');

        const swiperContainer = clickedCard.querySelector('.swiper-container');
        if (swiperContainer && !swiperContainer.classList.contains('swiper-initialized')) {
            new Swiper(swiperContainer, {
                loop: true,
                navigation: {
                    nextEl: swiperContainer.querySelector('.swiper-button-next'),
                    prevEl: swiperContainer.querySelector('.swiper-button-prev'),
                },
                pagination: {
                    el: swiperContainer.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadAwards();
    loadPortfolio();
    loadPersonalPortfolio()
});

// Load Awards
function loadAwards() {
    fetch('data/awards.json')
        .then(response => response.json())
        .then(data => {
            const awardsContainer = document.querySelector('#awards-container');
            data.data.forEach(award => {
                const awardCard = document.createElement('div');
                awardCard.classList.add('award-card');
                
                awardCard.innerHTML = `
                    <div class="award-header">
                        <div class="circle-icon">
                            <img src="${award.icon}" alt="icon">
                        </div>
                        <div class="award-info">
                            <h3>${award.title}</h3>
                            <p>${award.subtitle}</p>
                        </div>
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
                                ${award.technologies.map(tech => `<img src="assets/icons/${tech}.png" alt="${tech}">`).join('')}
                            </div>
                            <p>${award.description}</p>
                        </div>
                    </div>
                `;
                
                awardCard.addEventListener('click', (event) => handleCardClick(event, awardCard));
                awardsContainer.appendChild(awardCard);
            });
        })
        .catch(error => console.error('Error loading awards:', error));
}

// Load Portfolio
function loadPortfolio() {
    fetch('data/work.json')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.querySelector('#portfolio-container');
            data.data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
            <div class=" main-icon">
        <img src="${project.icon}" alt="${project.title}">
            </div>
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
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                </div>
                <div class="expand-right">
                <h3>${project.title}</h3>
                <p class="subtitle">${project.subtitle}</p>
                <div class="tech-icons">
                    ${project.technologies.map(tech => `<img src="assets/icons/${tech}.png" alt="${tech}">`).join('')}
                </div>
                <p>${project.description}</p>
                </div>
            </div>
            `;


                projectCard.addEventListener('click', (event) => handleCardClick(event, projectCard));
                portfolioContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading portfolio:', error));
}

function loadPersonalPortfolio() {
    fetch('data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.querySelector('#portfolio-personal');
            data.data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
            <div class="main-icon">
        <img src="${project.icon}" alt="${project.title}">
            </div>
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
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                </div>
                <div class="expand-right">
                <h3>${project.title}</h3>
                <p class="subtitle">${project.subtitle}</p>
                <div class="tech-icons">
                    ${project.technologies.map(tech => `<img src="assets/icons/${tech}.png" alt="${tech}">`).join('')}
                </div>
                <p>${project.description}</p>
                </div>
            </div>
            `;


                projectCard.addEventListener('click', (event) => handleCardClick(event, projectCard));
                portfolioContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading portfolio:', error));
}

