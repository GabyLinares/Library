function Book(name, author, numpages, readstatus) {
    this.name = name;
    this.author = author;
    this.numpages = numpages;
    this.readstatus = readstatus;
    this.info = () => {
        return `${this.name} by ${this.author}, ${this.numpages} pages, ${readstatus == 0 ? 'read' : 'not read yet'}`
    }
}

const myLib = [];

// let Hobbit = new Book("The Hobbit", "Tolkien", 295, 0);
// console.log(Hobbit.info())

const modalFunc = () => {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("newBook");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



const addBookToLib = () => {
    let btn = document.getElementById("submit");
    btn.onclick = function () {
        let name = document.getElementById("name").value;
        let author = document.getElementById("author").value;
        let numpages = document.getElementById("numpages").value;
        let readstatus = document.getElementById("readstatus").value;
        let book = new Book(name, author, numpages, readstatus);
        myLib.push(book);
        
        
        console.clear();
        console.log(myLib.length);
        for (let i = 0; i < myLib.length; i++) {
            console.log(myLib[i]);
          }
    }
    return myLib;

}


modalFunc();
addBookToLib();

