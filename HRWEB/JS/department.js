const Link = "https://solid-memory-4j64gpj6wxr5c7964-5005.app.github.dev/department";
fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#departmenttable tbody");
    data.forEach(c=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${d.department_id}</td>
        <td>${d.department_name}</td>
        <td>${d.manager_id}</td>
        <td>${d.location_id}</td>
        <td>${d.location}</td>
        <td>${d.employee}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
console.log(err.message);
});