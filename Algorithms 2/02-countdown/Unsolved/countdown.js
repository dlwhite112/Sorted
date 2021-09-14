// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    let arr = []
    for (let i = 1;num > 0; num--){
        i-=num
        console.log(num)
    }
    
};

countdown(10)
