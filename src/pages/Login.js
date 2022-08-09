import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserData } from "../features/userDetails/userDetailsSlice";

const Login = () => {
	const dispatch = useDispatch();

	const handleGoogleSignIn = (response) => {
		let userData = jwtDecode(response.credential);
		let user = { isLoggedIn: false, data: {} };
		if (userData.email_verified) {
			user.isLoggedIn = true;
			user.data = userData;
		}
		dispatch(setUserData(user));
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
			callback: handleGoogleSignIn,
		});
		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "medium",
		});
	});
	return (
		<>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[20] object-cover" />
			<section className="flex flex-col justify-start items-center w-full h-screen relative bg-gradient-to-t from-gray-900 ">
				<video
					src={
						"https://player.vimeo.com/external/477296655.sd.mp4?s=393edd2fa7a94d00727f3f851eb6461dacd5a499&profile_id=165&oauth2_token_id=57447761"
					}
					type="video/mp4"
					autoPlay
					muted
					loop
					className="absolute top-0 left-0 w-full h-screen object-cover"
				></video>
				<div className="text-white z-[2] flex flex-col justify-center items-start mt-40">
					<span className="capitalize text-sm text-blue-300 font-base mb-2 italic sm:text-base md:text-2xl">
						explore
					</span>
					<h1 className="font-bold text-3xl uppercase text-white shadow-sm shadow-white p-2 sm:text-5xl md:text-7xl">
						the movie app
					</h1>
				</div>
				<div
					id="signInDiv"
					className="absolute text-white top-[30%] left-[30%] z-[30] sm:left-[37%] md:top-[40%] md:left-[42%] lg:top-[45%] xl:left-[45%]"
				></div>
			</section>
		</>
	);
};

export default Login;
