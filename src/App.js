import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { getUserLoggedIn } from "./features/userDetails/userDetailsSlice";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import "./index.css";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";

function App() {
	const logInStatus = useSelector(getUserLoggedIn).payload.user.isLoggedIn;

	return (
		<>
			{logInStatus ? (
				<>
					<Navbar />
					<Layout>
						<div className="flex flex-col justify-start items-center">
							<Routes>
								<Route path="/" element={<Movies />} />
								<Route path="/movie/:slug" element={<MovieDetails />} />
							</Routes>
						</div>
					</Layout>
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
