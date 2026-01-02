function timeFunctionExecution(n){
    var starttime=new Date().getTime();
    var ans=0;
    for(var i=1;i<=n;i++){
        ans=ans+i;
    }
    console.log("Sum from 1 to "+n+" is: "+ans);
    var endtime=new Date().getTime();   
    console.log("Time taken to execute the code: "+(endtime-starttime)+" milliseconds");
}
timeFunctionExecution(10000);