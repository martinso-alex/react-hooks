import React, { useState } from "react";

export function useErros(validacoes) {
	const estado = criarEstadoInicial(validacoes);

	const [erros, setErros] = useState(estado);

	function validarCampos(event) {
		const { value, id } = event.target;
		const valid = { ...erros };
		valid[id] = validacoes[id](value);
		setErros(valid);
	}

	function canSubmit() {
		for (let campo in erros) if (!erros[campo].valido) return false;

		return true;
	}

	return [erros, validarCampos, canSubmit];
}

function criarEstadoInicial(validacoes) {
	let estadoInicial = {};

	for (let campo in validacoes)
		estadoInicial[campo] = { valido: true, text: "" };

	return estadoInicial;
}
