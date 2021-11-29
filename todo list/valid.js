
$(document).ready(function() {
    var wait = new Promise(function(resolve, reject) {

        try {

            var xhttp = new XMLHttpRequest();

            //Event Listener
            xhttp.onreadystatechange = function() {
                //condition
                if (this.readyState == 4 && this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    var output = "<table><tr><th>UserID</th><th>ID</th><th>Title</th><th>Completed</th></tr><tr>";
                    var marked = "";
                    for (var i = 0; i < response.length; i++) {
                        if (JSON.stringify(response[i].completed) == "true") {
                            marked = "<input type='checkbox' disabled checked class='check' name='state' value='done'>";
                           
                        } else {
                            marked = "<input type='checkbox' class='check' name='state' value='notdone'>";
                        }
                        output += "<td>" + response[i].userId + "</td><td>" + response[i].id + "</td><td>" + response[i].title + "</td><td>" + marked + "</td></tr><tr>";
                    }
                    document.getElementById('output').innerHTML = output + "</tr></table>";
                }
            }

            xhttp.open("GET", 'https://jsonplaceholder.typicode.com/todos', true);
            xhttp.send();

        } catch (e) {
            reject();
        } finally {
            console.log('Done');
            resolve();
        }
    })

    .then(function(s) {
        console.log('Promise called');
        main();
    })
});

function main() {
    setTimeout(function() {
        if (count == 5) {
                setTimeout(function() {
                    alert("congats!!! you have successfully completed 5 task");
                }, );
            }
        var checked = $('input:checkbox:checked');
        var select = $('input:checkbox');
        console.log("Checkboxes: " + select.length);
        console.log("Checked: " + checked.length);
        count = 0;
        select.change(function() {
            var newly_checked = $('input:checkbox:checked');
            console.log("Newly Checked: " + newly_checked.length);
            count = newly_checked.length - checked.length;
            console.log(count);  

            if (count == 5) {
                setTimeout(function() {
                    alert("congats!!! you have successfully completed 5 task");
                }, );
            }
        })
    }, );
}
  
    

