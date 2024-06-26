var UserTable =+ prompt("Enter a Table name upto which you have to require table!");
var tableBook = "";
var tableName = "";
for(var i = 1; i <= UserTable; i++){
       
        for(var j = 1; j <= 10; j++){
             tableBook += i +" x" +" " + j +  " =" + " " +  i * j + "  ";
             tableBook += "<br>";
        }
        tableBook += "<br>";

     
}
document.write(tableName);
document.write(tableBook);