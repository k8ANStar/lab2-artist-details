import { artists } from "../best-selling-music-artists";
import React from "react";
import ArtistsDetails from "./ArtistDetails";

function App() {
	return (
		<div className="app">
			<header className="header">
				<h1 className="title">Best-selling Music Artists</h1>
			</header>

			{artists.map((artists) => (
				<ArtistsDetails key={artists.id} artists={artists} />
			))}
			<footer className="footer">Katelyn Starchuk ©</footer>
		</div>
	);
}

export default App;
