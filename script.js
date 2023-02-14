
    function showMessage() {
  alert("Prontinho agora estamos namorando, já estou gerando o nosso contrato de namoro, aguarde alguns segundo e clique em download");
  const name = "Edson M. da Costa"
  //const partnerName = prompt("Qual é o seu nome?");
  const partnerName = "Carla Furtado Carrera"

  // Criação de uma nova instância do jsPDF
const doc = new jsPDF();

// Definição da dara
const date = new Date().toLocaleDateString("pt-BR");

// Adição do título do contrato
doc.setFontSize(20);
doc.text("Contrato de Namoro", 105, 20, null, null, "center");

// Adição do texto introdutório
doc.setFontSize(12);
const introText = `O Sr. ${name} tem a satisfação de comunicar que a partir da data de ${date}, encontra-se em um relacionamento amoroso com a Srta. ${partnerName}. O namoro teve início a partir de uma amizade sincera que foi se fortalecendo ao longo do tempo.`;
const introTextLines = doc.splitTextToSize(introText, 170);
doc.text(introTextLines, 20, 40);

// Adição das cláusulas do contrato
doc.setFontSize(12);
const clauses = [
  "Declaro meu amor por você, e que é recíproco. Eu não consigo imaginar minha vida sem você e prometo estar ao seu lado nos momentos bons e ruins. Você é a razão do meu sorriso e do meu coração bater mais forte. ",
  "Prometo respeitá-lo(a) em todas as situações, e tratar sempre com carinho. Seu bem-estar é minha prioridade e prometo sempre te tratar com o respeito e a consideração que você merece. ",
  "Comprometo-me em estar presente sempre que precisar, e respeitar a sua individualidade. Nós somos um casal, mas também somos indivíduos, com nossas próprias vidas, sonhos e ambições. Prometo apoiá-lo(a) em suas escolhas e respeitar o seu espaço e as suas decisões. ",
  "Nós dois concordamos que somos um casal incrível e vamos fazer de tudo para continuar assim. Nós nos amamos, nos respeitamos e nos valorizamos, e isso é a base de um relacionamento feliz e saudável. Prometo sempre cuidar de nosso relacionamento e manter a chama do amor acesa. ",
  "Esse contrato só acaba quando eu deixar de amar você. O amor que eu sinto por você é infinito e eterno, e eu prometo lutar por esse sentimento todos os dias. Esse contrato é uma prova do meu amor e compromisso com você, e espero que ele nos ajude a manter nosso relacionamento cada vez mais forte e duradouro. "
];
clauses.forEach((clause, index) => {
  const clauseLines = doc.splitTextToSize(clause, 170);
  doc.text(`${index + 1}.`, 20, 65 + (index * 30));
  doc.text(clauseLines, 30, 65 + (index * 30));
});

// Adição do texto de encerramento
const outroText = "Este contrato representa um compromisso mútuo entre as partes envolvidas e tem como objetivo estabelecer os termos e condições do relacionamento, bem como garantir o respeito mútuo e a confiança.";
const outroTextLines = doc.splitTextToSize(outroText, 170);
doc.text(outroTextLines, 20, 230);

// Adição das assinaturas das partes envolvidas

doc.text(`Assinado por: ${name}`, 20, 270);
doc.text(`Assinado por: ${partnerName}`, 130, 270);

// Salvamento do arquivo PDF
doc.save(`contrato_de_namoro_${name}_e_${partnerName}.pdf`);
}
    
    function moveNoButton() {
      const noButton = document.querySelector('.button-no');
      const rect = noButton.getBoundingClientRect();
      const x = rect.x + rect.width / 2;
      const y = rect.y + rect.height / 2;
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        noButton.style.left = Math.random() * 80 + 10 + "%";
        noButton.style.top = Math.random() * 80 + 10 + "%";
      }
    }