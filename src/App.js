import { Container, Typography } from "@material-ui/core";
import { FormCadastro } from "./components/form-cadastro";

import { validarCpf, validarSenha } from "./models/cadastro";
import { ValidaCadastro } from "./contexts/valida-cadastro";

import "./App.css";
import "fontsource-roboto";

function App() {
	function submit(dados) {
		console.log(dados);
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

			<ValidaCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha }}>
				<FormCadastro submit={submit} />
			</ValidaCadastro.Provider>
		</Container>
	);
}

export default App;
