
var formulario={}

function sendForm() {
    debugger;
    formulario.nome=document.getElementById("nome").value 
    formulario.email=document.getElementById("email").value 
    formulario.telefone=document.getElementById("telefone").value 
    formulario.mensagem=document.getElementById("mensagem").value 

    document.getElementById("formulario").remove() 

    var tag = document.createElement("h1");
    var text = document.createTextNode(" Formulário enviado com sucesso ");
    tag.appendChild(text);
    var element = document.getElementById("sucesso");
    tag.setAttribute("style", "margin-left: 30%");
    var img = document.createElement("img");
    img.setAttribute("style", "margin-left: 50%; width: 100px; height:100px");
    img.src = "../assets/okay.png";
     
    element.appendChild(img);

    element.appendChild(tag);
    
    console.log (formulario)
    var responseElement = document.getElementById("response");
    responseElement.setAttribute("style", "margin-left:40%")
    document.getElementById("formNome").innerHTML = "Nome - " + formulario.nome
    document.getElementById("formEmail").innerHTML = "Email - " + formulario.email 
    document.getElementById("formTelefone").innerHTML = "Telefone - " + formulario.telefone
    document.getElementById("formMensagem").innerHTML = "Mensagem - " + formulario.mensagem
}