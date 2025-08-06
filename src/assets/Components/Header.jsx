import "./Header.css";

const Header = ({ setIsEdit }) => {
	const handleEdit = () => {
		setIsEdit(true);
	};

	return (
		<header style={{ background: "#ff9051" }}>
			<div className="info-container">
				<div className="info-edit" onClick={handleEdit}>
					Edit
				</div>
				<img src="" className="info-ava" alt="" />
				<div className="info-username">minhquan</div>
				<div className="info-age">20</div>
				<div className="info-about">Student in PTIT</div>
			</div>
		</header>
	);
};
export default Header;
