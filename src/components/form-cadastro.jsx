import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export function FormCadastro(props) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);

	const [erros, setErros] = useState({ cpf: { valido: true, text: "" } });

	const { submit, validarCpf } = props;

	function handleChangeNome(event) {
		setNome(event.target.value);
	}

	function handleChangeSobrenome(event) {
		setSobrenome(event.target.value);
	}

	function handleChangeCpf(event) {
		setCpf(event.target.value);
	}

	function handleBlurCpf() {
		setErros({ ...erros, cpf: validarCpf(cpf) });
	}

	function handleChangePromocoes(event) {
		setPromocoes(event.target.checked);
	}

	function handleChangeNovidades(event) {
		setNovidades(event.target.checked);
	}

	function handleSubmit(event) {
		event.preventDefault();
		submit({ nome, sobrenome, cpf, promocoes, novidades });
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				value={nome}
				onChange={handleChangeNome}
				id='nome'
				label='Nome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				value={sobrenome}
				onChange={handleChangeSobrenome}
				id='sobrenome'
				label='Sobrenome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				value={cpf}
				onChange={handleChangeCpf}
				onBlur={handleBlurCpf}
				error={!erros.cpf.valido}
				helperText={erros.cpf.text}
				id='cpf'
				label='CPF'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<FormControlLabel
				label='Promoções'
				control={
					<Switch
						name='promocoes'
						color='primary'
						checked={promocoes}
						onChange={handleChangePromocoes}
					/>
				}
			/>

			<FormControlLabel
				label='Novidades'
				control={
					<Switch
						name='novidades'
						color='primary'
						checked={novidades}
						onChange={handleChangeNovidades}
					/>
				}
			/>

			<Button type='submit' variant='contained' color='primary'>
				Cadastrar
			</Button>
		</form>
	);
}
