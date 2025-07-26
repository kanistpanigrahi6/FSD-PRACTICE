function reverse(str){
    var answer=""
    for ( var i=str.length-1;i>=0;i--){
        answer+=str[i];
    }
    return answer;
}
function palindrome(str){
    str=str.toLowerCase();
    str=transform(str);
    // str=str.replace(/[^a-z0-9]/gi, "");

    reversedstring=reverse(str)
    if (str==reversedstring){
        return true;
    }
    else{
        return false;
    }

}
console.log(palindrome("racecar"))

function transform(str){
    var ans=""
    for(var i=0;i<str.length;i++){
        if (str[i]==" "|| str[i]==","||str[i]=="!"){

        }
        else{
            ans+=str[i];
        }
        
    }
    return ans;
}

