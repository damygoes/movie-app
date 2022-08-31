import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Comments = ({ movie }) => {
  const [showComments, setShowComments] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  let [movieComments, setMovieComments] = useState([]);
  const { comments } = movie;

  useEffect(() => {
    setMovieComments(comments);
  }, [comments]);

  const handleShowComments = () => {
    setShowComments(!showComments);
    if (addComment) {
      setAddComment(!addComment);
    }
  };
  const handleAddCommentToggle = () => {
    setAddComment(!addComment);
  };
  const handleSaveComment = () => {
    let commentsArray = [...movieComments];
    if (newComment) {
      commentsArray.push(newComment);
      setMovieComments((movieComments = commentsArray));
      setNewComment("");
    }
  };

  return (
    <section>
      <div className="flex justify-between items-center w-full mt-12">
        {showComments ? (
          <button
            className="bg-red-500 border-none rounded-3xl px-2 py-1 text-xs text-gray-200 capitalize md:text-base md:px-4"
            onClick={handleShowComments}
          >
            hide comments
          </button>
        ) : (
          <button
            className="bg-blue-500 border-none rounded-3xl px-2 py-1 text-xs text-gray-200 capitalize md:text-base md:px-4"
            onClick={handleShowComments}
          >
            show comments
          </button>
        )}
      </div>
      {showComments && (
        <div>
          {movieComments.map((comment, index) => (
            <p
              className="font-extralight text-sm my-4 border border-gray-400 rounded-md p-2 md:text-lg md:my-8"
              key={index}
            >
              {comment}
            </p>
          ))}
          <AiOutlinePlusCircle
            className="text-2xl fill-blue-500 md:text-3xl"
            onClick={handleAddCommentToggle}
          />
        </div>
      )}
      {addComment && (
        <>
          <textarea
            className="mt-4 rounded-md p-2 w-full text-black resize-none md:text-lg"
            placeholder="Add Comment"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <div className="flex justify-end items-center w-full">
            <p
              className="text-white uppercase text-sm font-base mr-2 md:text-xl cursor-pointer"
              onClick={handleSaveComment}
            >
              save
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Comments;
