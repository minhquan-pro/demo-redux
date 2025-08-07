import { useState } from "react";
import Header from "./assets/Components/Header";
import EditPage from "./assets/Components/Edit/EditPage";

function App() {
	const [isEdit, setIsEdit] = useState(false);
	return <>{isEdit ? <EditPage setIsEdit={setIsEdit} /> : <Header setIsEdit={setIsEdit} />}</>;
}

export default App;
