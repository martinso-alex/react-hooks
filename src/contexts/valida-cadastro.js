import React from "react";

const ValidaCadastro = React.createContext({
	cpf: semValidacao,
	senha: semValidacao,
});

function semValidacao(dados) {
	console.log(dados);
	return { valido: true, text: "" };
}

export { ValidaCadastro };
