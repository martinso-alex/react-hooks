import React, { useContext, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { ValidaCadastro } from "../contexts/valida-cadastro";
import { useErros } from "../hooks/useErros";

export function DadosPessoais(props) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);

	const validacoes = useContext(ValidaCadastro);

	const [erros, validarCampos, canSubmit] = useErros(validacoes);

	const { submit } = props;

	function handleChangeNome(event) {
		setNome(event.target.value);
	}

	function handleChangeSobrenome(event) {
		setSobrenome(event.target.value);
	}

	function handleChangeCpf(event) {
		setCpf(event.target.value);
	}

	function handleChangePromocoes(event) {
		setPromocoes(event.target.checked);
	}

	function handleChangeNovidades(event) {
		setNovidades(event.target.checked);
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (canSubmit()) submit({ nome, sobrenome, cpf, promocoes, novidades });
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
				onBlur={validarCampos}
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
				Próximo
			</Button>
		</form>
	);
}
