const InputNote = document.querySelector(".note");
const ButtonFind = document.querySelector(".find-out");

function FindOutNote() {
  const InputValue = document.querySelector(".note").value;

  const MediaDosAlunos = InputValue;
  const MediaAprovação = 70;

  if (MediaDosAlunos == MediaAprovação) {
    alert("Parabéns, foi aprovado");
  } else if (MediaDosAlunos > 70 && MediaDosAlunos <= 80) {
    alert("Parabéns, ficou acima da média");
  } else if (MediaDosAlunos > 80 && MediaDosAlunos <= 90) {
    alert("Incrível, conseguiu uma nota excelente");
  } else if (MediaDosAlunos > 90 && MediaDosAlunos < 100) {
    alert("Maravilhoso, és um dos melhores");
  } else if (MediaDosAlunos == 100) {
    alert("Você é demais, conseguiu a nota máxima!");
  } else if (MediaDosAlunos < 70 && MediaDosAlunos >= 51) {
    alert("Infelizmente você foi reprovado");
  } else if (MediaDosAlunos >= 0 && MediaDosAlunos <= 50) {
    alert("Mais sorte da próxima vez, sei que consegue ser melhor");
  } else {
    InputValue >= 101;
    alert("Insira um valor entre 0 e 100");
  }
}
