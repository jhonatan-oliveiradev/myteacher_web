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
import { FormatadorService } from "../../services/FormatadorService";

interface ListaProps {
	professores: Professor[];
	onSelect: (professor: Professor) => void;
}

const Lista = (props: ListaProps) => {
	return (
		<div>
			{props.professores.length > 0 ? (
				<ListaStyled>
					{props.professores.map((professor) => (
						<ItemLista key={professor.id}>
							<Foto src={professor.foto} />
							<Informacoes>
								<Nome>{professor.nome}</Nome>
								<Valor>
									{" "}
									{FormatadorService.valorMonetario(professor.valor_hora)} por
									hora
								</Valor>
								<Descricao>
									{FormatadorService.limitarTexto(professor.descricao, 200)}
								</Descricao>
							</Informacoes>
							<Button
								onClick={() => props.onSelect(professor)}
								sx={{ width: "70%" }}
							>
								Agendar aula com {professor.nome}
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
