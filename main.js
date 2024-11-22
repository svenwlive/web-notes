console.info("hiya! your javascript is working!");
console.info("^_^");

const createnewnote = document.querySelector('.createnewbtn');

createnewnote.addEventListener("click", function (e) {
    console.info("a new note will be created")
    let newtitle = prompt("Enter a title")
    console.log("new title: " + newtitle)
})