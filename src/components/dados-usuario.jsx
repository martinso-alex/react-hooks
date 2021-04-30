import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { ValidaCadastro } from "../contexts/valida-cadastro";
import { useErros } from "../hooks/useErros";

export function DadosUsuario(props) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const validacoes = useContext(ValidaCadastro);

	const [erros, validarCampos, canSubmit] = useErros(validacoes);

	const { submit } = props;

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
