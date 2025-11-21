document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    setActiveLink();
    initScrollEffect();
});

function createNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-content">
            <a href="index.html" class="nav-logo">
                <img src="assets/logo.png" alt="Minimundo Logo">
            </a>
            
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="ingressos.html">Ingressos</a></li>
                <li><a href="parque.html">O Parque</a></li>
                <li><a href="sobre.html">Sobre Nós</a></li>
                <li><a href="grife.html">Grife</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </div>
    </nav>
    `;

    // Insere o navbar no início do body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function setActiveLink() {
    // Obtém o nome do arquivo atual da URL
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        // Remove a classe active de todos (garantia)
        item.classList.remove('active');
        
        // Adiciona active se o href corresponder à página atual
        if (item.getAttribute('href') === page) {
            item.classList.add('active');
        }
    });
}

function initScrollEffect() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.top = '10px';
        } else {
            navbar.style.top = '20px';
        }
        
        lastScroll = currentScroll;
    });
}
