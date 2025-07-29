const fs=require('fs');
var data="Is this really happening";
function afterwrite(err){
    if (err){
        console.error(err);
        return;
    }
    console.log('file has been written');

}
fs.writeFile('a.txt',data,'utf8',afterwrite);
