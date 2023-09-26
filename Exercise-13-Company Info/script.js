fetch("Data.json")
.then(function(response){
    return response.json();
})
.then(function(Data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let item of Data){
        out += `
        <tr>
            <td>${item.company_name}</td>
            <td> <img src='${item.img_src}'></td>
            <td>${item.about}</td>

        </tr>
        
        `;
    }

    placeholder.innerHTML = out;

})