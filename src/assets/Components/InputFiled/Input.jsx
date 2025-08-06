import "../Edit/edit.css";

const Input = ({ label, data, setData, inputType, classStyle }) => {
	return (
		<>
			<label>{label}</label>
			{inputType === "textarea" ? (
				<textarea placeholder={data} className={classStyle} onChange={(e) => setData(e.target.value)} />
			) : (
				<input type="text" placeholder={data} value={data} onChange={(e) => setData(e.target.value)} />
			)}
		</>
	);
};
export default Input;
