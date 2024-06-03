document.addEventListener('DOMContentLoaded', () => {
    function getPostIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    const postId = getPostIdFromUrl();

    if (postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then((post) => {
                let postContainer = document.getElementById('post-container');
                postContainer.classList.add('container');

                let stringFields = ['userId', 'id', 'title', 'body'];
                stringFields.forEach(field => {
                    let p = document.createElement('p');
                    p.classList.add('detail-item');
                    p.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${post[field]}`;
                    postContainer.appendChild(p);
                });

                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        console.log('Comments data:', comments);
                        let commentsContainer = document.getElementById('comments');
                        commentsContainer.classList.add('comments-container');

                        comments.forEach(comment => {
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');

                            let commentFields = ['postId', 'id', 'name', 'email', 'body'];
                            commentFields.forEach(field => {
                                let p = document.createElement('p');
                                p.classList.add('comment-item');
                                p.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${comment[field]}`;
                                commentDiv.appendChild(p);
                            });

                            commentsContainer.appendChild(commentDiv);
                        });
                    })
            })
    }
});