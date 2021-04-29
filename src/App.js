import { Container, Typography } from "@material-ui/core";
import { FormCadastro } from "./components/form-cadastro";

import "./App.css";
import "fontsource-roboto";

function App() {
	function onSubmit(dados) {
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
			<FormCadastro onSubmit={onSubmit} />
		</Container>
	);
}

export default App;
