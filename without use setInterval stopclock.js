let cnt=1
function stopclock(){
    console.clear()
    console.log(cnt)
    cnt++
    setTimeout(stopclock,1000)
}
setTimeout(stopclock,1000)
