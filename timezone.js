    function time(){
        console.clear()
        printtime();

    }
    setInterval(time,1000)

    function printtime(){
        let todaydate=new Date();
        let ans=todaydate.getHours()+":"+todaydate.getMinutes()+":"+todaydate.getSeconds();
        console.log(ans);
    }
