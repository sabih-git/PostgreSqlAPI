const Link = "https://solid-memory-4j64gpj6wxr5c7964-5005.app.github.dev/job";
fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobtable tbody");
    data.forEach(c=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${j.job_id}</td>
        <td>${j.job_title}</td>
        <td>${j.max_salary}</td>
        <td>${j.min_salary}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
console.log(err.message);
});