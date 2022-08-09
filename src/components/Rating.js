import { BsStarFill, BsStar } from "react-icons/bs";

const Rating = ({ number }) => {
	return (
		<div className="flex justify-evenly items-center">
			{[...Array(5)].map((element, index) => (
				<div className="" key={index}>
					{number >= index + 1 ? (
						<BsStarFill className="fill-yellow-500" />
					) : (
						<BsStar className="fill-yellow-500" />
					)}
				</div>
			))}
		</div>
	);
};

export default Rating;
