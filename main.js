const dialist = ["şifreyi istiyon mu","lüüütfeen","vermicem","cok kotusun","ver nolur","al tamam şifre 12345"];
const picleft = ["bunnynormal.png","bunnynormal.png","bunnyscary.png","horsenormal.png","bunnynormal.png","bunnynormal.png"]
const picright = ["bebito.PNG","bebito2.png","bebito.PNG","bebito2.png","bebito.PNG","bebito2.png"]
const names = ["bebiş","tavşan","bebiş","tavşan","bebiş","tavşan"]
const opaleft = [0.7,1,0.7,1,0.7,1]
let dia = 0;

function menuhov(){
    document.getElementById("menuimage").src = "menuhover.png";
}
function menuexit(){
    document.getElementById("menuimage").src = "menunormal.png";
}
function dialoguefor(){
    if(dia>=(dialist.length-1)){
        alert("Diyalog Sonu")
    }
    else{
        dia = dia +1;
        document.getElementById("text").innerText = dialist[dia];
        document.getElementById("leftim").src = picleft[dia];
        document.getElementById("rightim").src = picright[dia];
        document.getElementById("name").innerText = names[dia];
        document.getElementById("leftim").style.opacity = opaleft[dia];
    }
}
function dialogueprev(){
    if(dia<=0){
        alert("Geriye Gidemezsin")
    }
    else{
        dia = dia -1;
        document.getElementById("text").innerText = dialist[dia];
        document.getElementById("leftim").src = picleft[dia];
        document.getElementById("rightim").src = picright[dia];
        document.getElementById("name").innerText = names[dia];
        document.getElementById("leftim").style.opacity = opaleft[dia];

    }
}

    document.addEventListener("DOMContentLoaded", function() {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close"); 
        const images = document.querySelectorAll('.myImg');
        if (images.length === 0) {
            console.error("hata");
        }

        images.forEach(img => {
                img.addEventListener('click', function() {
                    const correctPassword = "12345";
                    let userPassword = prompt("Şifre?");


                    if (userPassword === correctPassword) {
                        const audio = document.getElementById('myAudio1');
                        audio.play()
                        modal.style.display = "flex";
                        modal.style.flexDirection = "column";
                        modal.style.justifyContent = "center";
                        modal.style.alignItems = "center";

                        modalImg.src = this.src;
                        captionText.innerHTML = this.alt;

                    } else if (userPassword === null) {

                    } else {

                        alert("Hatalı şifre girdiniz! Resim görüntülenemiyor.");
                    }
                });
            });


        function closeModal() {
            modal.style.display = "none";
        }


        if (closeBtn) {
           closeBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });


        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModal();
            }
        });

    });
    document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');
    const commentCountSpan = document.getElementById('comment-count');

    let comments = [];
    function updateCommentCount() {
        commentCountSpan.textContent = comments.length;
    }
    function renderComments() {
        commentsContainer.innerHTML = '';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            const dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const formattedDate = new Date(comment.timestamp).toLocaleDateString('tr-TR', dateOptions);

            commentDiv.innerHTML = `
                <div class="comment-header">
                    <span class="comment-username">${comment.username}</span>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <p class="comment-body">${comment.text}</p>
            `;
            commentsContainer.prepend(commentDiv);
        });
        updateCommentCount();
    }
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username');
        const commentTextInput = document.getElementById('comment-text');
        const newComment = {
            username: usernameInput.value.trim() || 'Anonim', 
            text: commentTextInput.value.trim(),
            timestamp: new Date().toISOString()
        };
        if (newComment.text) {
            comments.push(newComment); 
            renderComments();         
            commentForm.reset();
            usernameInput.focus();
        } else {
            alert('Lütfen bir yorum yazın.');
        }
    });
    renderComments();
});
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        audio.play()
            .then(() => {
                playButton.style.display = 'none';
            })
            .catch(error => {
                console.error("Otomatik oynatma başarısız oldu:", error);
                alert("Müziği çalmak için tarayıcınızın iznine ihtiyacımız var.");
            });
    });
});