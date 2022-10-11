import { useState } from "react";
import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import {
	Descricao,
	Foto,
	Informacoes,
	ItemLista,
	ListaStyled,
	ListaVazia,
	Nome,
	Valor,
} from "./Lista.style";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

interface ListaProps {
	professores: Professor[];
}

const Lista = (props: ListaProps) => {
	return (
		<div>
			{props.professores.length > 0 ? (
				<ListaStyled>
					{props.professores.map((professor) => (
						<ItemLista key={professor.id}>
							<Foto src={professor.avatar} />
							<Informacoes>
								<Nome>{professor.name}</Nome>
								<Descricao>{professor.description}</Descricao>
								<Valor>
									{" "}
									{professor.price.toLocaleString("pt-BR", {
										minimumFractionDigits: 2,
										style: "currency",
										currency: "BRL",
									})}{" "}
									por hora
								</Valor>
							</Informacoes>
							<Button sx={{ width: "70%" }}>
								Agendar aula com {professor.name}
							</Button>
						</ItemLista>
					))}
				</ListaStyled>
			) : (
				<ListaVazia>
					<ReportProblemIcon sx={{ fontSize: 20 }} />
					Não há informações a serem exibidas.
				</ListaVazia>
			)}
		</div>
	);
};

export default Lista;
