// 1. Print odd numbers in an array(iife)

var arr=[1,2,3,4,5];
(function(a){

for(var i in a){
    if(a[i]%2===1||a[i]===1){
        console.log(a[i]);
    }
}

})(arr);

// 2. Convert all the strings to title caps in a string array(anonymous)

var str=["abc", "efg", "hij"];

var f=function(str){
    str=str.map((element)=>{
     return element.toUpperCase();
});

return str;
};

console.log(f(str));

// 3. Sum of all numbers in an array(iife)

arr=[1,2,3,4,5];

(function(){
    arr=arr.reduce((a,b)=>{
   return a+b;
});

console.log(arr);
})();

// 4. Return all the prime numbers in an array(anonymous)

arr=[1,2,3,4,5,6];

var check=function(item){
    var count=0;
    for(i=1;i<=item;i++){
        if(item%i===0){
            count++;
        }
        if(count>2){
            return false;
        }
    }
    return true;
};

var a=function(arr){
    var arr1=arr.filter(item=>check(item)).map(item=>item);
    return arr1;
};

console.log(a(arr));

// 5. Return all the palindromes in an array(iife)

arr=["malayalam", "aa", "ab", "bb", "tat", "vat", "sas"];

check=function(item){
    
    i=0;
    var j=item.length-1;
    while(i<j){
        if(item[i]!==item[j]){
            break;
        }
        i++;
        j--;
    }
    if(i<j){
        return false;
    }else{
        return true;
    }
};

(function(arr){

arr=arr.filter(item=>check(item)).map(item=>item);
console.log(arr);

})(arr);

// 6. Return median of two sorted arrays of same size(anonymous)

arr=[1,2,3,4,5];
var arr1=[6,7,8,9,10];
 
i=0;
j=0;
var k=0;
var sum=0;
while(i<=arr.length&&j<arr.length&&k<arr.length){
    
if(arr[j]<arr1[k]){
    if(i===arr.length-1||i===arr.length){
        sum=sum+arr[j];
    }
    j++;
}else if(arr1[k]<arr[j]){
    if(i===arr.length-1||i===arr.length){
        sum=sum+arr1[k];
    }
    k++;
}
i++;
}
while(i<=arr.length&&j<arr.length){
    if(i===arr.length-1||i===arr.length){
        sum=sum+arr[j];
    }
    j++;
    i++;
}
while(i<=arr.length&&k<arr.length){
    if(i===arr.length-1||i===arr.length){
        sum=sum+arr1[k];
    }
    k++;
    i++;
}
console.log(sum/2);

// 7. Remove duplicates from an array

arr=[1,1,2,2,3,3];

var b=arr.reduce((obj, item)=>{
    if(!obj[item]){
        obj[item]=1
    }
    return obj;
},{});
 var ans="";
 for(i in b){
     if(ans===""){
         ans=ans+i;
     }else{
         ans=ans+" "+i;
     }
 }
 console.log(ans);
 
// 8. Rotate an array by k times and return the rotated array

arr=[1,2,3,4,5,6];
k=5;
var b=[];
for(i=0;i<arr.length;i++){
    b.push(arr[(i+k)%arr.length]);
}
console.log(b);