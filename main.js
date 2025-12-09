const dialist = ["şifreyi istiyon mu","lüüütfeen","vermicem","cok kotusun","ver nolur","al tamam şifre 12345"];
const picleft = ["bunnynormal.png","bunnynormal.png","bunnyscary.png","horsenormal.png","bunnynormal.png","bunnynormal.png"]
const picright = ["bebito.PNG","bebito2.png","bebito.PNG","bebito2.png","bebito.PNG","bebito2.png"]
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
        document.getElementById("idk").innerText = dialist[dia];
        document.getElementById("leftim").src = picleft[dia];
        document.getElementById("rightim").src = picright[dia];
    }
}
function dialogueprev(){
    if(dia<=0){
        alert("Geriye Gidemezsin")
    }
    else{
        dia = dia -1;
        document.getElementById("idk").innerText = dialist[dia];
        document.getElementById("leftim").src = picleft[dia];
        document.getElementById("rightim").src = picright[dia];
    }
}

    document.addEventListener("DOMContentLoaded", function() {


        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close"); 
        const images = document.querySelectorAll('.myImg');
        if (images.length === 0) {
            console.error("Hata: .myImg sınıfına sahip resim bulunamadı!");
        }

        images.forEach(img => {
                img.addEventListener('click', function() {
                    const correctPassword = "12345";
                    let userPassword = prompt("Lütfen bu resmi görmek için şifreyi giriniz:");


                    if (userPassword === correctPassword) {
                        // Şifre DOĞRU ise modalı aç
                        modal.style.display = "flex";
                        modal.style.flexDirection = "column";
                        modal.style.justifyContent = "center";
                        modal.style.alignItems = "center";

                        modalImg.src = this.src;
                        captionText.innerHTML = this.alt;

                    } else if (userPassword === null) {
                        // Kullanıcı "İptal" tuşuna bastı, hiçbir şey yapma.
                    } else {
                        // Şifre YANLIŞ ise uyarı ver
                        alert("Hatalı şifre girdiniz! Resim görüntülenemiyor.");
                    }
                });
            });

        // Kapatma fonksiyonu
        function closeModal() {
            modal.style.display = "none";
        }

        // X butonuna tıklanınca kapat
        if (closeBtn) {
           closeBtn.addEventListener('click', closeModal);
        }

        // Resmin dışındaki siyah alana tıklanınca kapat
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // ESC tuşuna basılınca kapat (Ekstra kolaylık)
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModal();
            }
        });

    });