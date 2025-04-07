const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function active_one_sec(){
    //making just one section active, after clicking button
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id){
            sectBtns.forEach( (btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}
document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the default behavior of the link
        
        // Create a temporary <a> element for downloading the file
        const link = document.createElement("a");
        link.href = "files/CV.pdf"; // Replace with the actual path to the PDF file
        link.download = "CV.pdf"; // Sets the name of the downloaded file
        document.body.appendChild(link); // Append link to the body
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link from the document
    });
});





active_one_sec();
