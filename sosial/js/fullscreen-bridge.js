try{const g=document.getElementById("gm");new MutationObserver(()=>{try{parent.postMessage({sosialGame:!g.hidden},"*")}catch(e){}}).observe(g,{attributes:true,attributeFilter:["hidden"]})}catch(e){}
