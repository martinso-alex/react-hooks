function validarCpf(cpf) {
	if (cpf.length !== 11)
		return { valido: false, text: "CPF deve ter 11 dígitos" };
	else return { valido: true, text: "" };
}

function validarSenha(senha) {
	if (senha.length < 4 || senha.length > 72)
		return { valido: false, text: "Senha deve ter entre 4 e 72 dígitos" };
	else return { valido: true, text: "" };
}

export { validarCpf, validarSenha };
