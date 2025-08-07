import { useState } from "react";
import Input from "../InputFiled/Input";
import "./post.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/Slices/postSLice";

const MakePost = ({ setIsOpen }) => {
	const [title, setTitle] = useState("Add a title");
	const [desc, setDesc] = useState("Add some descriptions");
	const [selectedIdx, setSelectedId] = useState(0);

	const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
	const dispatch = useDispatch();

	const handlePost = () => {
		setIsOpen(false);
		const newPost = {
			title: title,
			description: desc,
			tag: selectedIdx,
		};
		dispatch(createPost(newPost));
	};

	return (
		<section className="makepost-container">
			<div className="makepost-navigation">
				<p className="makepost-save" onClick={handlePost}>
					Post
				</p>
			</div>

			<Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />

			<Input data={desc} inputType="textarea" setData={setDesc} label="Descriptions" classStyle="makepost-desc" />

			<label>Tags</label>
			<div className="makepost-tags">
				{tags.map((tag, id) => {
					return (
						<button
							key={id}
							className={`${id === selectedIdx ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}
							onClick={() => setSelectedId(id)}
						>
							{tag}
						</button>
					);
				})}
			</div>
		</section>
	);
};
export default MakePost;
