var request = new XMLHttpRequest()
    request.open('GET', 'https://asli-fun-fact-api.herokuapp.com/', true)
        request.onload = function () {

            var data = JSON.parse(this.response)
    
            let ff = document.getElementById("FF");
    
            ff.innerHTML = "Dato Curioso: <b>" + data.data.fact + "</b>";
        }
        request.send()
