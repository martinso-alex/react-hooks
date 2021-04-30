import { Container, Typography } from "@material-ui/core";
import { FormCadastro } from "./components/form-cadastro";

import "./App.css";
import "fontsource-roboto";

function App() {
	function submit(dados) {
		console.log(dados);
	}

	function validarCpf(cpf) {
		if (cpf.length !== 11)
			return { valido: false, text: "CPF deve ter 11 dígitos" };
		else return { valido: true, text: "" };
	}

	return (
		<Container maxWidth='sm'>
			<Typography
				variant='h3'
				component='h1'
				color='textPrimary'
				align='center'
			>
				Formulário de Cadastro
			</Typography>

			<FormCadastro submit={submit} validarCpf={validarCpf} />
		</Container>
	);
}

export default App;
