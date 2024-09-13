document.querySelectorAll('a[href^="#]').forEach(anchor => {
    anchor.addEventListener('click'),function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    };
});

function downloadFile(){
    const link = document.createElement('a');
    link.href = 'Assets\Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
}