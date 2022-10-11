import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
	const professores: Professor = [
		{
			id: 1,
			name: "Jhonatan Oliveira",
			avatar: "https://github.com/jhonatan-oliveiradev.png",
			description: "Professor de ReactJS",
			price: 100,
		},
		{
			id: 2,
			name: "Jhonatan Oliveira",
			avatar: "https://github.com/jhonatan-oliveiradev.png",
			description: "Professor de ReactJS",
			price: 100,
		},
		{
			id: 3,
			name: "Jhonatan Oliveira",
			avatar: "https://github.com/jhonatan-oliveiradev.png",
			description: "Professor de ReactJS",
			price: 100,
		},
		{
			id: 4,
			name: "Jhonatan Oliveira",
			avatar: "https://github.com/jhonatan-oliveiradev.png",
			description: "Professor de ReactJS",
			price: 100,
		},
	];

	return (
		<Box sx={{ backgroundColor: "secondary.main" }}>
			<Lista professores={professores} />
		</Box>
	);
};

export default Home;
