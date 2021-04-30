import React, { useEffect, useState } from "react";
import { DadosPessoais } from "./dados-pessoais";
import { DadosUsuario } from "./dados-usuario";
import { DadosEntrega } from "./dados-entrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

export function FormCadastro({ submit, validarCpf }) {
	const [etapa, setEtapa] = useState(0);
	const [dados, setDados] = useState({});

	useEffect(() => {
		if (etapa === formularios.length - 1) submit(dados);
	});

	const formularios = [
		<DadosUsuario submit={coletaDados} />,
		<DadosPessoais submit={coletaDados} validarCpf={validarCpf} />,
		<DadosEntrega submit={coletaDados} />,
		<Typography variant='h5'>Obrigado por se Cadastrar!</Typography>,
	];

	function coletaDados(novosDados) {
		setDados({ ...dados, ...novosDados });
		proximaEtapa();
	}

	function proximaEtapa() {
		setEtapa(etapa + 1);
	}

	return (
		<>
			<Stepper activeStep={etapa}>
				<Step>
					<StepLabel>Login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Pessoal</StepLabel>
				</Step>
				<Step>
					<StepLabel>Entrega</StepLabel>
				</Step>
				<Step>
					<StepLabel>Finalização</StepLabel>
				</Step>
			</Stepper>

			{formularios[etapa]}
		</>
	);
}
