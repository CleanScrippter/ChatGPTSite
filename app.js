// Wrap the code in a DOMContentLoaded event listener to make sure the HTML is fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
    // Get the post button element
    
    const postButton = document.querySelector('#post-button');
    
    // Check if the post button element exists in the document
    if (postButton) {
        // Add an event listener for when the button is clicked
        postButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            const postContent = document.querySelector('#post-content').value; // Get the post content
            // Check if the post content is not empty
            if (postContent.trim() !== '') {
                // Create a new post element
                const newPost = document.createElement('div');
                newPost.classList.add('post');
                newPost.innerHTML = `
                <div class="post-header">
                <img src="https://picsum.photos/50/50" alt="User profile picture">
                <h3>Jane Doe</h3>
				</div>
               
                    <div>
                        <p>${postContent}</p>
                        
                        <div class="post-actions">
                        <a href="#" class="like-button">Like</a>
                        <a href="#" class="like-count"></a>
                        <a href="#">Share</a>
                        <a class="comment-button" href="#">Comment</a>
                        <div class="comment-section hidden">
                            <form>
                              <textarea placeholder="Add a comment..."></textarea>
                              <button type="submit">Post</button>
                            </form>
                            <ul class="comment-list"></ul>
                          </div>
                        </div>
                    </div>
                `;
                // Insert the new post at the top of the feed
                const feed = document.querySelector('.post');
                feed.insertBefore(newPost, feed.firstChild);
                // Reset the input field
                document.querySelector('#post-content').value = '';
            }
        });
    }


    // Get the like button element
    const likeButton = document.querySelector('.like-button');
    // Get the like count element
    const likeCount = document.querySelector('.like-count');
    // Set the initial like count to 0
    let count = 0;
    // Check if the like button element exists in the document
    if (likeButton) {
        // Add an event listener for when the button is clicked
        likeButton.addEventListener('click', () => {
            // Increment the like count and update the text content of the like count element
            count++;
            likeCount.textContent = `${count} likes`;
        });
    }

 

    const commentButtons = document.querySelectorAll('.comment-button');

    commentButtons.forEach(function(commentButton) {
      commentButton.addEventListener('click', function(event) {
        const commentSection = event.target.nextElementSibling;
        commentSection.classList.toggle('hidden');
      });
    });
    
    document.addEventListener('submit', function(event) {
      if (event.target.matches('.comment-section form')) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
        const commentTextarea = event.target.querySelector('textarea');
        const commentText = commentTextarea.value;
    
        if (commentText !== '') {
          const commentList = event.target.nextElementSibling;
          const newComment = document.createElement('li');
          newComment.textContent = commentText;
          commentList.appendChild(newComment);
          commentTextarea.value = '';
        }
      }
    });
    

});
