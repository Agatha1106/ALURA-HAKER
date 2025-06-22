// hawk_tuah.js
(function () {
    'use strict';

    console.log("🧠 Alura Destroyer ativado por Agatha1106");
    console.log("⚠️ Só os brabos automatizam estudo kkk");

    window.addEventListener("load", () => {
        const video = document.querySelector('video');

        if (video) {
            video.currentTime = video.duration - 2;
            console.log("⏩ Pulando vídeo quase até o final");
        }

        const marcarComoConcluida = () => {
            const btn = document.querySelector('[data-task-button]');
            if (btn && btn.innerText.includes("Marcar como concluída")) {
                btn.click();
                console.log("✅ Tarefa marcada como concluída!");
            }
        };
        setTimeout(marcarComoConcluida, 1500);

        const irParaProxima = () => {
            const next = document.querySelector('[data-next-task-button]');
            if (next) {
                console.log("➡️ Indo para a próxima lição...");
                next.click();
            } else {
                console.log("🏁 Última lição ou botão não encontrado.");
            }
        };
        setTimeout(irParaProxima, 3000);
    });
})();
