import React from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export function FormCadastro() {
	return (
		<form>
			<TextField
				id='nome'
				label='Nome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				id='sobrenome'
				label='Sobrenome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<TextField
				id='cpf'
				label='CPF'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<FormControlLabel
				label='Promoções'
				control={<Switch name='promocoes' color='primary' defaultChecked />}
			/>

			<FormControlLabel
				label='Novidades'
				control={<Switch name='novidades' color='primary' defaultChecked />}
			/>

			<Button type='submit' variant='contained' color='primary'>
				Cadastrar
			</Button>
		</form>
	);
}
