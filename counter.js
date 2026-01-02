var count=0
function counter(){

    console.log(count);
    count+=1;
    if (count==7+1){
        clearInterval(timer);

    }

}
var timer=setInterval(counter,1000);
