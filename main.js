var display_submitted_names =[];

   function submit(){

   var guestnames= document.getElementById("guestname1").value;
   display_submitted_names.push(guestnames);

   console.log(guestnames);
   console.log(display_submitted_names);
   
   document.getElementById("display_names").innerHTML=display_submitted_names;
}

function show(){

     var newline = display_submitted_names.join("<br>");
     console.log(newline);
     document.getElementById("show_entered_names").innerHTML=newline;
     document.getElementById("sort_button").style.display = "inline-block";
}

function sortnames(){

    display_submitted_names.sort();

    var sorted_names = display_submitted_names.join("<br>");
     console.log(sorted_names);
     document.getElementById("sort_entered_names").innerHTML=sorted_names;


}

function search(){

    var sname =  document.getElementById("searchname").value;
    var found =0;
    for (var i=0; i<display_submitted_names.length; i++){
        if(sname == display_submitted_names[i]){
            found=found+1;
        }
    }
    console.log("Name found " + found + " time/s");
    document.getElementById("display_searched_names").innerHTML="Name found " + found + " time/s";
}

