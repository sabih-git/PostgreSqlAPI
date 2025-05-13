const Link = "https://cuddly-adventure-7vwqrjpj46p72xgp9-5005.app.github.dev/job_history";

fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobhistorytable tbody");

    data.forEach(j=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${j.employee_id}</td>
        <td>${j.start_date}</td>
        <td>${j.end_date}</td>
        <td>${j.job_id}</td>
        <td>${j.department_id}</td>
        `;
        tbody.appendChild(row)
    });
}).catch(err=>{
    console.log(err.message);
});