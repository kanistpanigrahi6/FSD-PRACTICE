const fs=require('fs');
function readfilefun(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data)


}
fs.readFile('a.txt','utf8',readfilefun)
var count=0;
for (var i=0;i<10000;i++){
    count+=1
}
console.log(count);
