const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];

let total = 0;
const totalComment2 =  (data) => {
    data.map(function (comment) {
        total++;
        if (comment.replies) {
            totalComment2(comment.replies);
        }
    });
    return total;
};

console.log(totalComment2(comments));

