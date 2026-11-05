function erase_childs(node){
    if(node.childNodes){
        let childs = node.childNodes;
        while(childs.length > 0){
            node.removeChild(node.lastChild);
        }
    }
}

/* sessionStorage */

function appendSessionSelect(){
    const select = document.getElementById('sessionItem');
    erase_childs(select);
    const optDefault = document.createElement('option');
    optDefault.innerHTML ='Choisissez l\'élément item à surpprimer';
    select.append(optDefault);
    for(let i = 0; i < sessionStorage.length; i = i+ 1){
        console.log(sessionStorage.key(i));
        const optionSelect = document.createElement('option');
        optionSelect.setAttribute('id', sessionStorage.key(i));
        optionSelect.innerText = sessionStorage.key(i);
        select.append(optionSelect);
    }
}

function createSession(...sessionValues){
    for(sessionValue of sessionValues){
        const input = document.getElementById(sessionValue);
        /* sessionStorage.getItem(sessionValue) */
        if(input.value !== ''){
            sessionStorage.setItem(sessionValue, input.value);
            input.value = '';
        }
    }
    appendSessionSelect();
}


function deleteSessionItem(sessionItem){
    const item = document.getElementById(sessionItem);
    if(item.value !== ''){
        sessionStorage.removeItem(item.value);
    }
    appendSessionSelect();
}

function clearSession(){
    sessionStorage.clear();
    appendSessionSelect();
}

/* localStorage */

function appendLocalSelect(){
    const select = document.getElementById('localItem');
    erase_childs(select);
    const optDefault = document.createElement('option');
    optDefault.innerHTML ='Choisissez l\'élément item à supprimer';
    select.append(optDefault);
    for(let i = 0; i < localStorage.length; i = i+ 1){
        console.log(localStorage.key(i));
        const optionSelect = document.createElement('option');
        optionSelect.setAttribute('id', localStorage.key(i));
        optionSelect.innerText = localStorage.key(i);
        select.append(optionSelect);
    }
}

function createLocal(...localValues){
    for(localValue of localValues){
        const input = document.getElementById(localValue);
        if(input.value !== ''){
            localStorage.setItem(localValue, input.value);
            input.value = '';
        }
    }
    appendLocalSelect();
}


function deleteLocalItem(localItem){
    const item = document.getElementById(localItem);
    if(item.value !== ''){
        localStorage.removeItem(item.value);
    }
    appendLocalSelect();
}

function clearLocal(){
    localStorage.clear();
    appendLocalSelect();
}

appendSessionSelect();
appendLocalSelect();


/* Les cookies */
/*
pour créer un cookie, on va directement écrire le cookie, sa valeur, sa date d'expiration, le niveau de samesite et la securité dans 
la liste des cookie : document.cookie
*/
function setCookie(name, value='', days = -1, path = '/'){
    const maxAge = 60 * 60 * 24 * days;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}; Samesite=Strict; Secure`;
    console.log(document.cookie);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
    return null;
}
