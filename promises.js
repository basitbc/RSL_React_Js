const getData = fileName => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState === 4 && this.status === 200){
            let posts = JSON.parse(this.responseText);
            resolve(posts);
        }else if (this.readyState === 4 && this.status === 404){
            reject("Data Not Fetched");

        }
    };

    xhttp.open("GET",fileName, true);
    xhttp.send();
    });
};



getData('data3.json').then(data => {
    data.forEach((post) => {
        let element = document.createElement("div");
        element.innerHTML = `
        <img style="display: flex; height:200px; width: 200px;  flex-wrap: wrap;
        padding: 10px;" src="${post.url}" class="rounded mx-auto" alt="...">
        
        `
        document.querySelector("#myDiv").appendChild(element);
    });
    return getData("data3.json")
}).then((data)=>{
    console.log(data, " Promise 2 Resolved")
    return getData("data2.json")
}).then((data)=>{
    console.log(data, " Promise 3 Resolved")
    return getData("data1.json")

    
}).then((data)=>{
    console.log(data, " Promise 4 Resolved")
    return getData("data1.json")
    
})
.catch(err => {
    console.log(err," Promise Rejected");
})
.finally(() => {
    console.log("I am finally block")
});