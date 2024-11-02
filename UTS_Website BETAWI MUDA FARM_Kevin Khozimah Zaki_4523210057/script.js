
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

const logo1 = document.querySelector(".logo1").cloneNode(true);
document.querySelector('.logo-container').appendChild(logo1);


function sendToWhatsapp(){
	let number = "+6285283241920";


	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;


	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";


	window.open(url, '_blank').focus();
}
