import { useState, useEffect } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
	const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [professorSelecionado, setProfessorSelecionado] =
		useState<Professor | null>(null);
	const [mensagem, setMensagem] = useState("");

	useEffect(() => {
		ApiService.get("/professores").then((res) => {
			setListaProfessores(res.data);
		});
	}, []);

	useEffect(() => {
		limparFormulario();
	}, [professorSelecionado]);

	function marcarAula() {
		if (professorSelecionado !== null) {
			if (validarDadosAula()) {
				ApiService.post("/professores/" + professorSelecionado.id + "/aulas", {
					nome,
					email,
				})
					.then(() => {
						setProfessorSelecionado(null);
						setMensagem("Aula agendada com sucesso!");
					})
					.catch((error) => {
						setMensagem(error.res?.data.message);
					});
			} else {
				setMensagem('Preencha os campos "Nome" e "Email" corretamente!');
			}
		}
	}

	function validarDadosAula() {
		return nome.length > 0 && email.length > 0;
	}

	function limparFormulario() {
		setNome("");
		setEmail("");
	}

	return {
		listaProfessores,
		nome,
		setNome,
		email,
		setEmail,
		professorSelecionado,
		setProfessorSelecionado,
		marcarAula,
		mensagem,
		setMensagem,
	};
}
