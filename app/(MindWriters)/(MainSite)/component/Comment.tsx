'use client'
const comments = [
    {
        text: 'This is the first comment',
        upvotes: 10,
        replies: [
            {
                text: 'This is a reply to the first comment',
                upvotes: 5,
            },
            {
                text: 'This is another reply to the first comment',
                upvotes: 2,
            },
        ],
    },
    {
        text: 'This is the second comment',
        upvotes: 20,
        replies: [
            {
                text: 'This is a reply to the second comment',
                upvotes: 3,
            },
        ],
    },
    {
        text: 'This is the third comment',
        upvotes: 30,
        replies: [],
    },
];


import React, { useState } from 'react';

function Comment({ comment, onReply }) {
    const [upvoteCount, setUpvoteCount] = useState(comment.upvotes);

    const onUpvote = () => {
        setUpvoteCount(upvoteCount + 1);
    };

    const onDownvote = () => {
        setUpvoteCount(upvoteCount - 1);
    };

    return (
        <div className="bg-gray-100 p-3 my-2 rounded-md">
            <div>
                <button onClick={onUpvote}>Upvote</button>
                <button onClick={onDownvote}>Downvote</button>
                <span>{upvoteCount}</span>
            </div>
            <p>{comment.text}</p>
            <button onClick={() => onReply(comment)}>Reply</button>
        </div>
    );
}


function CommentSection() {
    const [currentComment, setCurrentComment] = useState('');

    const onSubmitComment = (event) => {
        event.preventDefault();
        comments.push({ text: currentComment, upvotes: 0 });
        setCurrentComment('');
    };

    const onReply = (parentComment) => {
        const replyText = prompt('Enter your reply:');
        parentComment.replies.push({ text: replyText, upvotes: 0 });
    };

    return (
        <div>
            <form onSubmit={onSubmitComment}>
                <input
                    type="text"
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                />
                <button type="submit">Post comment</button>
            </form>

            <div>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} onReply={onReply} />
                ))}
            </div>
        </div>
    );
}

export default CommentSection;
