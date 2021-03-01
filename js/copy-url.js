function Copy() {
    alert('URLをコピーしました');

    var url = "https://mrmkroll.github.io/profile";

    var listener = function(e){

        e.clipboardData.setData("text/plain" , url);

        e.preventDefault();

        document.removeEventListener("copy", listener);
    }
    
    document.addEventListener("copy" , listener);
    
    document.execCommand("copy");
}