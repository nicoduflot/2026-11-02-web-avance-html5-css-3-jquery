function erase_childs(node){
    if(node.childNodes){
        let childs = node.childNodes;
        while(childs.length > 0){
            node.removeChild(node.lastChild);
        }
    }
}

function appendSessionSelect(){
    const select = document.getElementById('sessionItem');
    erase_childs(select);
    /*<option>Choisissez l'élément item à surpprimer</option>*/
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

appendSessionSelect();