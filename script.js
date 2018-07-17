
function startGame() {
// Buscar valor no formulário, marcar pontuação e definir resultado
	var score = 0;
	var question1 = document.getElementById("quest-1").value;
	if (question1 === "não") {
		score+=100;
		var changeResult1 = document.getElementsByClassName("right1")[0];
		changeResult1.innerHTML = "1. HTML é considerada uma linguagem de programação? NÃO";
	} else {
		var changeResult1 = document.getElementsByClassName("wrong1")[0];
		changeResult1.innerHTML = "1. HTML é considerada uma linguagem de programação? NÃO";
	}
	var question2 = document.getElementById("quest-2").value;
	if (question2 === "não") {
		score+=100;
		var changeResult2 = document.getElementsByClassName("right2")[0];
		changeResult2.innerHTML = "2. O significado de CSS é Cascade Style Script? NÃO";
	} else {
		var changeResult2 = document.getElementsByClassName("wrong2")[0];
		changeResult2.innerHTML = "2. O significado de CSS é Cascade Style Script? NÃO";
	}
	var question3 = document.getElementById("quest-3").value;
	if (question3 === "sim") {
		score+=100;
		var changeResult3 = document.getElementsByClassName("right3")[0];
		changeResult3.innerHTML = "3. Em Javascript, existe diferença entre null e undefined? SIM";
	} else {
		var changeResult3 = document.getElementsByClassName("wrong3")[0];
		changeResult3.innerHTML = "3. Em Javascript, existe diferença entre null e undefined? SIM";
	}
// Criar tabela de resultados
	var img1 = document.createElement("img");
	img1.src = "certo.png";
	var src = document.getElementsByClassName("right-simbol")[0];
	src.appendChild(img1);
	var img2 = document.createElement("img");
	img2.src = "errado.png";
	var src = document.getElementsByClassName("wrong-simbol")[0];
	src.appendChild(img2);
// Exibir o nome do usuário, pontuação e gabarito
	var name = document.getElementById("user").value;
	var changeName = document.getElementById("username");
	changeName.innerHTML = "Oi, " + name + "! Você fez " + score + " pontos!";
// Mostrar botão para reiniciar o jogo
	var showRestartButton = document.getElementsByClassName("restart-button")[0];
	showRestartButton.innerHTML = "Jogar outra vez";
}
// Limpar a tela para iniciar uma nova partida
function restart() {
window.open('index.html');
}
