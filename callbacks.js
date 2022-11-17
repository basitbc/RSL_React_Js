const getData = (filename, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState === 4 && this.status === 200){
            let posts = JSON.parse(this.responseText);
            callback(undefined,posts);
        }else if (this.readyState === 4 && this.status === 404){
            callback("Data Not Fetched", undefined);

        }
    }

    xhttp.open("GET",'filename', true);
    xhttp.send();
}


getData("data1.json",(err, data) => {
    console.log("callback executed");
    if(err == true){
        console.log(err);
    } else {
        console.log(data);
        getData((err, data) => {
            console.log("callback 2 executed");
            if(err == true){
                console.log(err);
            } else {
                console.log(data);
                getData(() =>{
                    console.log("callback 3 executed");
                    if(err == true){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                })
            } 
            });
    }
})