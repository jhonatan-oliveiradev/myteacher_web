import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
	return (
		<CabecalhoContainer>
			<Logo src="/images/myteacher.png" />
			<p>Encontre o professor perfeito!</p>
		</CabecalhoContainer>
	);
};

export default Cabecalho;
