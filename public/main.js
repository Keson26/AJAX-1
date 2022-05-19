getCSS.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
            const style = document.createElement("style");
               style.innerHTML = request.response;
               document.head.appendChild(style);
               console.log('CSS加载成功')
        }
    }
    request.send();
}

getJS.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
            const script = document.createElement("script");
               script.innerHTML = request.response;
               document.body.appendChild(script);
               console.log('JS加载成功')
        }
    }
    request.send();
}

getHTML.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET','/3.html');
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
            const html = document.createElement("html");
               html.innerHTML = request.response;
               document.body.appendChild(html);
               console.log('HTML加载成功')
        }
    }
    request.send();
}

getXML.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml');
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
           const dom = request.responseXML;
           const text = dom.getElementsByTagName("warning")[0].textContent
           console.log(text.trim())
               console.log('XML加载成功')
        }
    }
    request.send();
}

getJSON.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET','/5.json');
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
           const object =  JSON.parse(request.response)
           myName.textContent = object.name
           console.log('JSON加载成功')
        }
    }
    request.send();
}

let n = 1;
getPAGE.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n + 1}`);
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
           const array =  JSON.parse(request.response);
           array.forEach(element => {
               const li = document.createElement("li");
               li.textContent = element.id;
               xxx.appendChild(li);
           });
             n += 1;
           }
           console.log('JSON加载成功')
        }
    request.send();
}