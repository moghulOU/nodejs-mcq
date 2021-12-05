let comments = []

let commentsWrapper = document.getElementById('blog-comments')

//fetch from local storage
const commentsStore = localStorage.getItem('comments')
if(commentsStore!=null){
    let commentArray = JSON.parse(commentsStore)
    comments = [...commentArray]
    for(let i=0; i<comments.length; i++){
        let theComment = comments[i]
        console.log(theComment)
        let blogComment = createComment(theComment['comment'], theComment['id'], theComment['reply'])
        commentsWrapper.appendChild(blogComment)
    }
}
//create comments
function createComment(commentString, commentIndex, replyArray){
    let blogComment = document.createElement('div')
    blogComment.className = "blog-comment"
    let commentWrap = document.createElement('div')
    commentWrap.className = "comment-wrap"
    let imgDiv = document.createElement('div')
    let commentImg = document.createElement('img')
    commentImg.className = "comment-img"
    commentImg.src = "../img/download.jpg"
    commentImg.alt = "placeholder"
    imgDiv.appendChild(commentImg)
    let commentText = document.createElement('p')
    commentText.innerHTML = commentString
    commentWrap.appendChild(imgDiv)
    commentWrap.appendChild(commentText)
    let commentReply = document.createElement('div')
    commentReply.className = "comment-reply"
    commentReply.id = `comment-reply-${commentIndex}`
    let replyForm = document.createElement('form')
    replyForm.className = "reply-form"
    replyForm.id = `reply-form-${commentIndex}`
    replyForm.onsubmit = submitReply
    let textArea = document.createElement('textarea')
    let btn = document.createElement('button')
    btn.innerHTML = "Post Reply"
    btn.type = 'submit'
    replyForm.appendChild(textArea)
    replyForm.appendChild(btn)
    commentReply.appendChild(replyForm)
    if(replyArray.length >0){
    for(let i = 0; i<replyArray.length; i++) {
        let newReply = createReply(replyArray[i])
        commentReply.appendChild(newReply)
    }
}
    blogComment.appendChild(commentWrap)
    blogComment.appendChild(commentReply)
    return blogComment
}

//create comment reply
function createReply(replyString){
    let commentWrap = document.createElement('div')
    commentWrap.className = "comment-wrap"
    let imgDiv = document.createElement('div')
    let replyImg = document.createElement('img')
    replyImg.className = "reply-img"
    replyImg.src = "../img/download.jpg"
    replyImg.alt = "placeholder"
    imgDiv.appendChild(replyImg)
    let replyText = document.createElement('p')
    replyText.innerHTML = replyString
    commentWrap.appendChild(imgDiv)
    commentWrap.appendChild(replyText)
    return commentWrap;
}

//fetch comments from json file
// fetch("../js/comment.json")
//   .then(response => response.json())
//   .then(json => {
//       comments = [...json]
//       for(let i=0; i<comments.length; i++){
//         let theComment = json[i]
//         let blogComment = createComment(theComment['comment'], theComment['id'], theComment['reply'])
//         commentsWrapper.appendChild(blogComment)
//     }
//     })
//     ;
//show comment form
let commentBtn = document.getElementById("comment-btn")
commentBtn.addEventListener("click", function(){
    document.getElementById("comment-form").classList.remove('hide');

})

//get submit comment
let commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", submitComment)

function submitComment(e) {
    e.preventDefault();
    let newComment = {
        "id": comments.length + 1,
        "comment" : commentForm.elements[0].value,
        "reply" : []
    }
    comments.push(newComment)
    localStorage.setItem('comments', JSON.stringify(comments));
    let blogComment = createComment(commentForm.elements[0].value, comments.length, [])
    commentsWrapper.appendChild(blogComment)
    commentForm.elements[0].value = ""
}

//get submit reply
function submitReply(e) {
    e.preventDefault();
    let theId = e.target.id.split("-")[2]
    let replyId = `comment-reply-${theId}`
    for(let i=0; i<comments.length; i++){
        if(comments[i]['id'] === Number(theId)) {
            comments[i]['reply'].push(e.target.elements[0].value)
            localStorage.setItem('comments', JSON.stringify(comments));
            let newReply = createReply(e.target.elements[0].value)
            document.getElementById(replyId).appendChild(newReply)
            e.target.elements[0].value = ""
        }
    }
}
    