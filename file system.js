const fs= require('fs')
function clean(data){
    let arr=data.split(" ");
    console.log(arr);
    let arr1=[]
    for (var i=0;i<arr.length;i++){
        if (arr[i].length==0){
            //skip
        }
    else{
        arr1.push(arr[i])
    }
    }
    var answerstring=arr1.join(" ");
    return answerstring;

}


function filewritten(err){
    if (err){
        console.error(err);
    }
    else{
        console.log("done")
    }
    
}
function fileread(err,data){
    if(err){
        console.error(err);
        return;
    }
    var cleaneddata=clean(data);
    fs.writeFile('aaa.txt', cleaneddata, 'utf8', filewritten);

}
fs.readFile('aaa.txt','utf8',fileread);
