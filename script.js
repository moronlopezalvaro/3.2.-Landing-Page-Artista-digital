// cuando se pulsa una miniatura la imagen grande cambia con un fundido
const imagenGrande = document.querySelector("#visor-imagen");
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener("click", function () {
        imagenGrande.classList.add("oculta"); // se desvanece

        setTimeout(function () {
            imagenGrande.src = miniatura.dataset.grande; // cambia la imagen
            imagenGrande.classList.remove("oculta"); // vuelve a aparecer
        }, 300);
    });
});

const modal = document.querySelector("#modal");
const video = document.querySelector("#video-reel");
const botonAbrir = document.querySelector("#abrir-modal");
const botonCerrar = document.querySelector("#cerrar-modal");

function abrirModal() {
    modal.classList.add("abierto");
    video.play();
}

function cerrarModal() {
    modal.classList.remove("abierto");
    video.pause();
}

botonAbrir.addEventListener("click", abrirModal);
botonCerrar.addEventListener("click", cerrarModal);

// cuando se hace click fuera del vídeo tambien se cierra
modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        cerrarModal();
    }
});

const audio = document.querySelector("#audio-ambiente");
const botonAudio = document.querySelector("#boton-audio");

botonAudio.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        botonAudio.textContent = "⏸ Pausar ambiente espacial";
    } else {
        audio.pause();
        botonAudio.textContent = "▶ Escuchar ambiente espacial";
    }
});
