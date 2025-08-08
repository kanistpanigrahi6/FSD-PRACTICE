
// var bodyParser=require('body-parser')
// var app = express()
// var port = 3000
// app.use(bodyParser.json())

// function calculatesum(counter){
//     var sum=0
//     for (var i=1;i<=counter;i++){
//         sum+=i;
//     }
//     return sum;
// }


// function handlefirstrequest(req,res){
//     var counter=req.query.counter;
//     var calculate=calculatesum(counter);
//     var answerobject={
//         sum:calculate,
//     };
//    var answer="sum is :"+calculate
//     res.send(answerobject);   
// }
// app.get('/',handlefirstrequest)



// function started(){
//  console.log(`Example app listening on port ${port}`)
// }
// app.listen(port,started)




////////using fetch library 
function logResponseBody(jsonbody){
    console.log(jsonbody)
}
function callbackfn(result){
    result.json().then(logResponseBody)

}
var sendobj={
    method:"GET",
};
fetch("http://localhost:3000/?counter=10",sendobj).then(callbackfn);
