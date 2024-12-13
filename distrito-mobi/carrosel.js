let currentImage = 0; // Índice da imagem atualmente exibida
let timer; // Variável que armazenará o temporizador para o carrossel

function startCarousel() {
    // Seleciona todas as imagens dentro do carrossel e os botões de navegação
    const images = document.querySelectorAll('.carrosel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Função que exibe a imagem no índice fornecido
    function showImage(index) {
        images.forEach(img => img.classList.remove('active')); // Remove a classe 'active' de todas as imagens
        currentImage = (index + images.length) % images.length; // Garante que o índice seja cíclico
        images[currentImage].classList.add('active'); // Adiciona a classe 'active' à imagem atual
    }

    // Função que avança para a próxima imagem
    function nextImage() {
        showImage(currentImage + 1); // Chama showImage com o próximo índice
    }

    // Função que volta para a imagem anterior
    function prevImage() {
        showImage(currentImage - 1); // Chama showImage com o índice anterior
    }

    // Adiciona ouvintes de evento aos botões de navegação
    nextButton.addEventListener('click', () => {
        nextImage(); // Vai para a próxima imagem
        clearInterval(timer); // Interrompe o temporizador atual
        startTimer(); // Reinicia o temporizador
    });

    prevButton.addEventListener('click', () => {
        prevImage(); // Vai para a imagem anterior
        clearInterval(timer); // Interrompe o temporizador atual
        startTimer(); // Reinicia o temporizador
    });

    // Função que inicia o temporizador do carrossel
    function startTimer() {
        timer = setInterval(nextImage, 6000); // Alterna para a próxima imagem a cada 3 segundos
    }

    startTimer(); // Inicia o temporizador ao carregar o carrossel

    // Pausa o carrossel ao passar o mouse sobre ele
    document.querySelector('.carrosel-container').addEventListener('mouseenter', () => {
        clearInterval(timer); // Interrompe o temporizador
    });

    // Reinicia o carrossel ao tirar o mouse de cima dele
    document.querySelector('.carrosel-container').addEventListener('mouseleave', () => {
        startTimer(); // Reinicia o temporizador
    });
}

// Inicia o carrossel quando a página for carregada
window.addEventListener('load', startCarousel);
