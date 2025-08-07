import { useState } from "react";
import "./edit.css";
import Input from "../InputFiled/Input";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../redux/userSlice";
import useSound from "use-sound";

const EditPage = ({ setIsEdit }) => {
	const avaUrl = [
		"https://images.pexels.com/photos/33209986/pexels-photo-33209986.jpeg",
		"https://images.pexels.com/photos/8979918/pexels-photo-8979918.jpeg",
		"https://images.pexels.com/photos/31448780/pexels-photo-31448780.jpeg",
		"https://images.pexels.com/photos/33246790/pexels-photo-33246790.jpeg",
		"https://images.pexels.com/photos/31942327/pexels-photo-31942327.jpeg",
		"https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://cdn.pixabay.com/photo/2025/04/30/13/05/cat-9569386_1280.jpg",
		"https://cdn.pixabay.com/photo/2020/05/01/08/33/building-5115897_1280.jpg",
		"https://cdn.pixabay.com/photo/2025/06/19/16/21/adventure-9669329_1280.jpg",
	];

	const users = useSelector((state) => state.user);
	const [play] = useSound("../../../public/sound/sound-effect.mp3");

	const [name, setName] = useState(users.name);
	const [age, setAge] = useState(users.age);
	const [about, setAbout] = useState(users.about);
	const [url, setUrl] = useState(users.avaUrl);
	const [theme, setTheme] = useState(users.theme);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsEdit(false);
		const newUser = {
			name,
			age,
			about,
			avaUrl: url,
			theme,
		};
		dispatch(update(newUser));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<section className="edit-container">
					<button className="close">SAVE</button>
					<div className="edit-profile">Edit profile</div>
					<div className="input-container">
						<Input label="Name" data={users.name} setData={setName} />
						<Input label="Age" data={users.age} setData={setAge} />
						<Input
							inputType="textarea"
							classStyle="input-about"
							label="About"
							data={users.about}
							setData={setAbout}
						/>

						<label>Profile Picture</label>
						<div className="input-image-container">
							{avaUrl.map((url) => {
								return (
									<div key={url}>
										<img
											onClick={(e) => {
												setUrl(e.target.src);
												play();
											}}
											src={url}
											alt=""
											className="input-image"
										/>
									</div>
								);
							})}
						</div>
						<div className="theme-container">
							<Input label="Theme" inputType="color" data={theme} setData={setTheme} />
						</div>
					</div>
				</section>
			</form>
		</>
	);
};
export default EditPage;
