import { useState } from "react";
import Header from "./assets/Components/Header";
import EditPage from "./assets/Components/Edit/EditPage";
import Footer from "./assets/Components/Footer/Footer";

function App() {
	const [isEdit, setIsEdit] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isEdit ? <EditPage setIsEdit={setIsEdit} /> : <Header setIsEdit={setIsEdit} />}{" "}
			<Footer setIsOpen={setIsOpen} isOpen={isOpen} isEdit={isEdit} />
		</>
	);
}

export default App;
