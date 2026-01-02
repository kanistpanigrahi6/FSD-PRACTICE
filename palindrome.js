function reverseofstr(str){
    var ans="";
    for(var i=str.length-1;i>=0;i--){
        ans=ans+str[i];
    }
    return ans;
}

function transform(str){
    var ans="";
    for(var i=0;i<str.length;i++){
        if(str[i]===" " || str[i]==="," || str[i]==="." || str[i]==="!" || str[i]==="?" || str[i]==="'" || str[i]==="\"" || str[i]===";"){
            continue;
    }
    else{
        ans=ans+str[i];
    }
}
return ans;
}

function palin(str){
    var str = str.toLowerCase();
    var str=transform(str)
  var rever=reverseofstr(str)
    if(str===rever){
        return true;
    }
    else{
        return false;
    }
}
console.log(palin("madam, I'm Adam"));