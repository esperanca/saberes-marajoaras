// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animar o ícone do menu (transformar em X)
            this.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Sistema de Filtragem de Projetos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Atualizar botão ativo
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filtrar projetos
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Adicionar animação ao mostrar
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animação ao scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.project-card, .stat, .about-text, .about-image').forEach(el => {
    observer.observe(el);
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Pegar valores do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validação básica
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Simular envio (em produção, você enviaria para um servidor)
        console.log('Dados do formulário:', formData);

        // Mostrar mensagem de sucesso
        showSuccessMessage();

        // Limpar formulário
        contactForm.reset();

        // Em um ambiente real, você faria algo como:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showSuccessMessage();
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('Erro ao enviar mensagem. Tente novamente.');
        // });
    });
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage() {
    // Criar elemento de mensagem se não existir
    let successMessage = document.querySelector('.success-message');

    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        contactForm.parentNode.insertBefore(successMessage, contactForm);
    }

    successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    successMessage.classList.add('show');

    // Remover mensagem após 5 segundos
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Header com sombra ao scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }

    lastScroll = currentScroll;
});

// Lazy loading para imagens (opcional - para melhorar performance)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que não suportam lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Adicionar efeito parallax sutil no hero (opcional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Contador animado para estatísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observar estatísticas para animar quando visíveis
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                const targetValue = parseInt(statNumber.textContent);
                statNumber.classList.add('animated');
                animateCounter(statNumber, targetValue);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Log de inicialização
console.log('Portfolio Cultural - Arte & Educação inicializado com sucesso!');
