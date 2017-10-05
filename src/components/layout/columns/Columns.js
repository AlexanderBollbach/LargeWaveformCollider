import React from "react";
import Styles from "./Columns.css";

const Columns = ({ children, width }) => {
	const columns = React.Children
		.map(children, child => {
			return "1fr";
		})
		.join(" ");

	return (
		<div className={Styles.Column} 
		style={{ gridTemplateColumns: columns, width: width }}
		>
			{children}
		</div>
	);
};

export default Columns;
