export function receiveForm(formulario) {
    console.log('Caraiii')
    document.getElementById("formNome").innerHTML = formulario.nome
    document.getElementById("formEmail").innerHTML = formulario.email 
    document.getElementById("formTelefone").innerHTML = formulario.telefone
    document.getElementById("formMensagem").innerHTML = formulario.mensagem
}