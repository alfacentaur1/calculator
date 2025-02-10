let submit = document.getElementById("od");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    new xhr = new XMLHttpRequest();
    let prijmeni = document.getElementById("prijmeni").value;
    let jmeno = document.getElementById("jmeno").value;

    xhr.open("POST","myserver.php");
    xhr.send("username="+encodeURIComponent(jmeno))

    xhr.addEventListener("load",()=>{
        let response = xhr.responseText;

        if(odpoved xhr ok){
            alert(response)
        }
    })

})

//php

if isset post and post {
    $handle = fopen("text.txt",w)
    fwrite(handle,co)
    fclose
    if(in_array(jmena)){
        echo obsaezo

    }
    else echo dobre
}