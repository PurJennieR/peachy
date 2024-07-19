document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
   let peach = new FormData(this);
   let result = "Name : "  + 
        peach.get("name")    +"<br>" +"Email : "     +
        peach.get("email")   +"<br>" +"Age : "       +
        peach.get("age")     +"<br>" +"Gender : "    +
        peach.get("gender")  +"<br>" +"Comment : "   +
        peach.get("comment");
        document.getElementById("peach").innerHTML = "<h1> Your result : </h1>" + result;
})