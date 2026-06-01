const btnSalvar = document.getElementById("btn-salvar");
const inputUser = document.getElementById("username");
const welcomeMsg = document.getElementById("welcome-msg");

const btnSimular = document.getElementById("btn-simular");
const tempNum = document.getElementById("temp-num");
const umidNum = document.getElementById("umid-num");
const statusBadge = document.getElementById("status-badge");

const themeToggle = document.getElementById("theme-toggle");

btnSalvar.addEventListener("click", () => {

    const nome = inputUser.value.trim();

    if(nome === ""){
        alert("Digite seu nome.");
        return;
    }

    welcomeMsg.classList.remove("hide");
    welcomeMsg.innerHTML =
        `Bem-vindo(a), <strong>${nome}</strong>!`;
});

btnSimular.addEventListener("click", () => {

    const temp = (20 + Math.random() * 12).toFixed(1);
    const umid = Math.floor(40 + Math.random() * 50);

    tempNum.textContent = temp;
    umidNum.textContent = umid;

    if(temp > 30 || umid < 50){
        statusBadge.textContent = "Atenção: Ajustando Ambiente";
        statusBadge.style.background = "#FED7D7";
    }else{
        statusBadge.textContent = "Monitorando Estabilidade";
        statusBadge.style.background = "#C6F6D5";
    }
});

themeToggle.addEventListener("click", () => {

    const atual = document.documentElement.getAttribute("data-theme");

    if(atual === "dark"){
        document.documentElement.removeAttribute("data-theme");
    }else{
        document.documentElement.setAttribute("data-theme","dark");
    }
});