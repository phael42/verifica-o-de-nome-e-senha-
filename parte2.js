const usuarios = [
    {usuario: "Yue", senha: "3456"},
    {usuario: "Sola", senha: "7890"},
    {usuario: "Beatriz", senha: "1290"},
];
const loginDigitado = document.getElementById("loginform");
const senhaDigitado = document.getElementById("mensagem");
const mensagem = document.getElementById("mensagem");
let encontrado = true;

for (let i = 0; i < usuarios.length; i++) {
    if(login === usuarios.login[i] && senha === usuarios.senha [i]){
       encontrado = false;
       mensagem.innerHTML= "Login bem sucedido ," + usuarios[1].login + "!";
    }
   }
   
   if(encontrado){
    mensagem.innerHTML = "Login ou senha incorretos, por favor tente novamente";
   }
    