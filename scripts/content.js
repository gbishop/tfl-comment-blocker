const annoying = ["5011", "175198"];
function hide_comments() {
  const comments = document.querySelectorAll("article[data-comment-user-id]");
  for (const comment of comments) {
    if (annoying.indexOf(comment.dataset.commentUserId) >= 0) {
      console.log(comment.dataset.commentUserId);
      comment.style.display = "none";
    }
  }
}
hide_comments();
