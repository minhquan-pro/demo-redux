import { useSelector } from "react-redux";

const Post = () => {
	const posts = useSelector((state) => state.post.posts).slice(1);
	const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

	return (
		<section className="post-container">
			{posts.map((post, index) => {
				return (
					<div key={index} className="posts">
						<p className="posts-title">{post.title}</p>
						<p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
						<p className="posts-description">{post.description}</p>
					</div>
				);
			})}
		</section>
	);
};
export default Post;
