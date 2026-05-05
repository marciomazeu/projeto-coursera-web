// --- 1. SELEÇÃO DE ELEMENTOS ---
const btnMobile = document.getElementById('btn-mobile');
const btnTheme = document.getElementById('toggle-theme');
const form = document.getElementById('form-contato');
const emailInput = document.getElementById('email');
const skills = document.querySelectorAll('#habilidades-lista li');
const feedback = document.getElementById('skill-feedback');
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.projeto-card');

// --- 2. MODO ESCURO (Persistência com LocalStorage) ---
function carregarTema() {
    const temaSalvo = localStorage.getItem('theme');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
carregarTema();

if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// --- 3. MENU MOBILE ACESSÍVEL ---
// --- CORREÇÃO DO MENU MOBILE ---
// --- CORREÇÃO DO MENU MOBILE ---
if (btnMobile) {
    // Criamos a função aqui dentro para evitar o erro de "not defined"
    const aoClicarNoMenu = (event) => {
        if (event.type === 'touchstart') event.preventDefault();
        
        const nav = document.getElementById('nav');
        const active = nav.classList.toggle('active');
        
        // Acessibilidade
        event.currentTarget.setAttribute('aria-expanded', active);
        event.currentTarget.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
    };

    // Adicionamos o evento de clique e de toque
    btnMobile.addEventListener('click', aoClicarNoMenu);
    btnMobile.addEventListener('touchstart', aoClicarNoMenu);
}

// --- 4. SCROLL SUAVE E FECHAMENTO AUTOMÁTICO DO MENU ---
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const id = this.getAttribute('href');
        if (id === "#") return;

        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            const pos = target.offsetTop;

            window.scroll({
                top: pos - 80, // Ajuste para não cobrir o título
                behavior: "smooth"
            });

            // Fecha o menu mobile após clicar em um link (Melhor UX)
            document.getElementById('nav').classList.remove('active');
        }
    });
});

// --- 5. VALIDAÇÃO E ENVIO DE FORMULÁRIO ---
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btnSubmit = form.querySelector('button');
        const emailValue = emailInput.value;

        if (emailValue.includes('@') && emailValue.includes('.')) {
            btnSubmit.innerText = "Enviando...";
            btnSubmit.disabled = true;

            setTimeout(() => {
                alert('Mensagem enviada com sucesso!');
                btnSubmit.innerText = "Enviar Mensagem";
                btnSubmit.disabled = false;
                form.reset();
            }, 1000);
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

// --- 6. INTERATIVIDADE DE HABILIDADES (Hover) ---
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const nivel = skill.getAttribute('data-nivel');
        if (feedback) feedback.innerText = `Nível de domínio: ${nivel}`;
    });
    skill.addEventListener('mouseleave', () => {
        if (feedback) feedback.innerText = '';
    });
});

// --- 7. FILTRO DE PROJETOS ---
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-type');
        
        projects.forEach(project => {
            const projectCat = project.getAttribute('data-category');
            project.style.display = (category === 'all' || category === projectCat) ? 'block' : 'none';
        });
    });
});

console.log("Portfólio interativo carregado com sucesso.");