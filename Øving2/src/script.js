
    let input = document.getElementById("inputText");
    let button = document.getElementById("confirmButton");
    var window = document.getElementById("container");

    let url = "http://bigdata.stud.iie.ntnu.no/sentiment/webresources/sentiment/log?api-key=Happy!!!";

    let colors = {
        0: "red",
        1: "orange",
        2: "yellow",
        3: "green",
        4: "lightblue"
    };


    button.onclick = function() {
        let color = "blue"
        let data = {
            sentence: input.value
        }
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json =>  document.body.style.backgroundColor = colors[json.value])
        //.then(json => console.log(JSON.stringify(json)))
        .catch(error => console.error("Error: ", error));
    
        
    }
