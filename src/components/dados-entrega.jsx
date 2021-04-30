import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export function DadosEntrega(props) {
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [estado, setEstado] = useState("");
	const [cidade, setCidade] = useState("");

	const { submit } = props;

	function handleChangeCep(event) {
		setCep(event.target.value);
	}

	function handleChangeEndereco(event) {
		setEndereco(event.target.value);
	}

	function handleChangeNumero(event) {
		setNumero(event.target.value);
	}

	function handleChangeEstado(event) {
		setEstado(event.target.value);
	}

	function handleChangeCidade(event) {
		setCidade(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		submit({ cep, endereco, numero, estado, cidade });
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				value={cep}
				onChange={handleChangeCep}
				id='cep'
				label='CEP'
				type='number'
				variant='outlined'
				margin='normal'
			/>

			<TextField
				value={endereco}
				onChange={handleChangeEndereco}
				id='endereco'
				label='Endereço'
				type='text'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				value={numero}
				onChange={handleChangeNumero}
				id='numero'
				label='Número'
				type='number'
				variant='outlined'
				margin='normal'
			/>

			<TextField
				value={estado}
				onChange={handleChangeEstado}
				id='estado'
				label='Estado'
				type='text'
				variant='outlined'
				margin='normal'
			/>

			<TextField
				value={cidade}
				onChange={handleChangeCidade}
				id='cidade'
				label='Cidade'
				type='text'
				variant='outlined'
				margin='normal'
			/>

			<Button type='submit' variant='contained' color='primary' fullWidth>
				Finalizar Cadastro
			</Button>
		</form>
	);
}
