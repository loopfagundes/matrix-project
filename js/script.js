const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tamanhoFonte = 16;
const colunas = Math.floor(canvas.width / tamanhoFonte);
const efeitosChuva = Array(colunas).fill(0);

// ctx.fillRect(0, 0, 100, 100)
// ctx.fillRect(0, 0, c.width, c.height);
// ctx.fillStyle = "#0F0";
// ctx.font = `60px arial`;
// ctx.fillText("Test", 0, 60);
// const numeroByte = ["0", "1"];
// const caracteresJapones = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン0123456789";

const caracteres = "01"
const arrayDeCaracteres = caracteres.split("");

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = `${tamanhoFonte}px monospace`;

    for (let i = 0; i < efeitosChuva.length; i++) {
        const char = arrayDeCaracteres[Math.floor(Math.random() * arrayDeCaracteres.length)];
        ctx.fillText(char, i * tamanhoFonte, efeitosChuva[i] * tamanhoFonte);

        if (efeitosChuva[i] * tamanhoFonte > canvas.height && Math.random() > 0.95) {
            efeitosChuva[i] = 0;
        }

        efeitosChuva[i]++;
    }
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

setInterval(draw, 50);