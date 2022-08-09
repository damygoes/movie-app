import { useSelector, useDispatch } from "react-redux";
import {
	getUserData,
	getUserLoggedIn,
	setUserData,
} from "../features/userDetails/userDetailsSlice";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
	const dispatch = useDispatch();
	const logInStatus = useSelector(getUserLoggedIn).payload.user.isLoggedIn;
	const user = useSelector(getUserData).payload.user.data;

	const { given_name, picture } = user;

	const handleLogOut = () => {
		let user = { isLoggedIn: false, data: {} };
		dispatch(setUserData(user));
	};

	return (
		<nav className="flex items-center justify-between p-4 fixed w-full z-50 bg-black md:px-12 md:py-6">
			<Link to="/">
				<h1 className="text-white text-xl font-bold cursor-pointer uppercase hover:text-blue-500 md:text-3xl ">
					the movie app
				</h1>
			</Link>
			{logInStatus && (
				<section className="flex justify-center items-center gap-3">
					<button
						className="text-white font-base text-xs rounded-xl flex justify-start items-center italic hover:text-red-500 md:text-lg"
						onClick={handleLogOut}
					>
						logout <BiLogOutCircle className="text-red-500 " />
					</button>
					<img
						src={picture}
						alt={given_name}
						className="h-6 w-6 rounded-full md:h-10 md:w-10"
					/>
				</section>
			)}
		</nav>
	);
};

export default Navbar;
