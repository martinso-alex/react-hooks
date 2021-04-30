import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export function DadosUsuario(props) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const { submit } = props;

	function handleChangeEmail(event) {
		setEmail(event.target.value);
	}

	function handleChangeSenha(event) {
		setSenha(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		submit({ email, senha });
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
				id='senha'
				label='Senha'
				type='password'
				required
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<Button type='submit' variant='contained' color='primary'>
				Cadastrar
			</Button>
		</form>
	);
}
