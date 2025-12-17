// 이미지 로드 실패 시 빈 박스 표시
document.addEventListener('DOMContentLoaded', function() {
    const cardImages = document.querySelectorAll('.card-image img');
    
    cardImages.forEach(function(img) {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const cardImage = this.parentElement;
            if (!cardImage.style.backgroundImage || cardImage.style.backgroundImage === 'none') {
                cardImage.style.backgroundImage = 'none';
                cardImage.style.border = '2px dashed #ddd';
            }
        });
        
        img.addEventListener('load', function() {
            this.style.display = 'block';
            const cardImage = this.parentElement;
            cardImage.style.border = 'none';
        });
    });
});

