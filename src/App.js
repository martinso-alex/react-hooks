import { Container, Typography } from "@material-ui/core";
import { FormCadastro } from "./components/form-cadastro";

import "./App.css";
import "fontsource-roboto";

function App() {
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
			<FormCadastro />
		</Container>
	);
}

export default App;
