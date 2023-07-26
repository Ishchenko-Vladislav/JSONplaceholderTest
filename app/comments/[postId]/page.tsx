import React, { FC } from "react";
interface Props {
  params: {
    postId: number;
  };
}
const CommentsPage: FC<Props> = async ({ params: { postId } }) => {
  const comments: IComment[] = await getComments(postId);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="mb-5 text-xl text-center">Comments for post {postId}</h2>
      <ul className="flex flex-col gap-3 list-decimal ml-5">
        {comments && comments.map((comment) => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    </div>
  );
};

const getComments = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
    (response) => response.json()
  );
  return res;
};
export default CommentsPage;
