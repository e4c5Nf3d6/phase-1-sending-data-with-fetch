function submitData(nameStr, emailStr) {
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: nameStr,
            email: emailStr
        })
    }

    function handleResponse(obj) {
        const p = document.createElement("p");
        p.textContent = obj.id;
        document.querySelector("body").appendChild(p);
    }

    function handleError(error) {
        const p = document.createElement("p");
        p.textContent = error.message;
        document.querySelector("body").appendChild(p); 
    }

    return fetch("http://localhost:3000/users", configurationObj)
        .then(res => res.json())
        .then(obj => handleResponse(obj))
        .catch(error => handleError(error))
}