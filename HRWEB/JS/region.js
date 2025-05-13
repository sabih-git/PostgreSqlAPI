const Link = "https://cuddly-adventure-7vwqrjpj46p72xgp9-5005.app.github.dev/region";

fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#regiontable tbody");

    data.forEach(e=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${e.region_id}</td>
        <td>${e.region_name}</td>
        `;
        tbody.appendChild(row)
    });
}).catch(err=>{
    console.log(err.message);
});