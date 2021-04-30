import React, { useState } from "react";
import { DadosPessoais } from "./dados-pessoais";
import { DadosUsuario } from "./dados-usuario";
import { DadosEntrega } from "./dados-entrega";

export function FormCadastro({ submit, validarCpf }) {
	const [etapa, setEtapa] = useState(0);

	const formularios = [
		<DadosUsuario submit={proximaEtapa} />,
		<DadosPessoais submit={proximaEtapa} validarCpf={validarCpf} />,
		<DadosEntrega submit={submit} />,
	];

	function proximaEtapa() {
		setEtapa(etapa + 1);
	}

	return <>{formularios[etapa]}</>;
}
