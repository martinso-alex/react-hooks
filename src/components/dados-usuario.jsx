import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { ValidaCadastro } from "../contexts/valida-cadastro";

export function DadosUsuario(props) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const [erros, setErros] = useState({ senha: { valido: true, text: "" } });

	const { submit } = props;

	const validacoes = useContext(ValidaCadastro);

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

	function handleChangeEmail(event) {
		setEmail(event.target.value);
	}

	function handleChangeSenha(event) {
		setSenha(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (canSubmit()) submit({ email, senha });
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				value={email}
				onChange={handleChangeEmail}
				id='email'
				label='E-mail'
				type='email'
				required
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				value={senha}
				onChange={handleChangeSenha}
				onBlur={validarCampos}
				error={!erros.senha.valido}
				helperText={erros.senha.text}
				id='senha'
				label='Senha'
				type='password'
				required
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<Button type='submit' variant='contained' color='primary'>
				Próximo
			</Button>
		</form>
	);
}
