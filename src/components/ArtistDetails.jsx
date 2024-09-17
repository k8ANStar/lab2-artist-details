import React from "react";
const ArtistsDetails = ({ artists }) => {
	return (
		<div className="artist-container">
			<img
				className="images"
				src={artists.photo_url}
				alt="images of rendered artists"
				style={{ width: "100px", height: "100px" }}
			/>
			<div className="artist-info">
				<h2 className="artist-name">{artists.name}</h2>
				<p>
					<strong>Country:</strong> {artists.country}
				</p>
				<p>
					<strong>Years Active:</strong>
					{artists.years_active}
				</p>
			</div>
		</div>
	);
};

export default ArtistsDetails;
