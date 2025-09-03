function verificarLogin() { 
 const usuarios = [
    { usuario: "Yue", senha: "3456" },
    { usuario: "Sola", senha: "7890" },
    { usuario: "Beatriz", senha: "1290" },
  ];
  const loginDigitado = document.getElementById("usuario").value;
  const senhaDigitado = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");
  let encontrado = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (
      loginDigitado === usuarios[i].usuario &&
      senhaDigitado === usuarios[i].senha
    ) {
      encontrado = true;
      mensagem.innerHTML = "Login bem sucedido ," + usuarios[i].usuario + "!";
      window.location.href=""
    }
  }

  if (!encontrado) {

    setTimeout(() => {
    mensagem.innerHTML = "Login ou senha incorretos, por favor tente novamente";
    mensagem.innerHTML = "Login bem sucedido";
    titulo.innerHTML = "Pagina de login";
  }, 2000);

  document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    window.location.href = "https://pt.wikipedia.org/wiki/Mitologia_grega";

  }
}

