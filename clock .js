function printtime(){
    console.clear();
    printcurrenttime();
}
setInterval(printtime,1000);
function printcurrenttime(){
    var currentdate=new Date();
    const ans=currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds()
    console.log(ans)
}
