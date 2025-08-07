import MakePost from "../Post/MakePost";
import Post from "../Post/Post";
import "./footer.css";

const Footer = ({ isOpen, setIsOpen, isEdit }) => {
	if (isEdit) return;

	return (
		<div>
			<Post />
			<footer>
				<div onClick={() => setIsOpen(!isOpen)} className="footer-title">
					{isOpen ? "x" : "+"}
				</div>
			</footer>
			{isOpen && <MakePost setIsOpen={setIsOpen} />}
		</div>
	);
};
export default Footer;
