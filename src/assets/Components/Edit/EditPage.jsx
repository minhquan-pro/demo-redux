import { useState } from "react";
import "./edit.css";
import Input from "../InputFiled/Input";

const EditPage = () => {
	const avaUrl = [
		"https://images.pexels.com/photos/33209986/pexels-photo-33209986.jpeg",
		"https://images.pexels.com/photos/8979918/pexels-photo-8979918.jpeg",
		"https://images.pexels.com/photos/31448780/pexels-photo-31448780.jpeg",
		"https://images.pexels.com/photos/33246790/pexels-photo-33246790.jpeg",
		"https://images.pexels.com/photos/31942327/pexels-photo-31942327.jpeg",
		"https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	const [name, setName] = useState("Minh Quan");
	const [age, setAge] = useState(19);
	const [about, setAbout] = useState("I'm a student");
	const [url, setUrl] = useState();
	const [theme, setTheme] = useState("#ff9051");

	return (
		<>
			<form>
				<section className="edit-container">
					<button className="close">SAVE</button>
					<div className="edit-profile">Edit profile</div>
					<div className="input-container">
						<Input label="Display name" data={name} setData={setName} />
						<Input label="Age" data={age} setData={setAge} />
						<Input
							inputType="textarea"
							classStyle="input-about"
							label="About"
							data={about}
							setData={setAbout}
						/>

						<label>Profile Picture</label>
						<div className="input-image-container">
							{avaUrl.map((url) => {
								return (
									<div key={url}>
										<img
											onClick={(e) => setUrl(e.target.src)}
											src={url}
											alt=""
											className="input-image"
										/>
									</div>
								);
							})}
						</div>
						<div className="theme-container">
							<label>Theme</label>
							<input
								type="color"
								name=""
								id=""
								className="theme-color"
								value={theme}
								onChange={(e) => setTheme(e.target.value)}
							/>
						</div>
					</div>
				</section>
			</form>
		</>
	);
};
export default EditPage;
