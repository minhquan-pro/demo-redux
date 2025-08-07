import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ setIsEdit }) => {
	const handleEdit = () => {
		setIsEdit(true);
	};

	const user = useSelector((state) => state.user);

	return (
		<header style={{ background: `${user.theme}` }}>
			<div className="info-container">
				<div className="info-edit" onClick={handleEdit}>
					Edit
				</div>
				<img src={user.avaUrl} className="info-ava" alt="" />
				<div className="info-username">{user.name}</div>
				<div className="info-age">{user.age} tuổi</div>
				<div className="info-about">{user.about}</div>
			</div>
		</header>
	);
};
export default Header;
