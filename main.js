//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// day4 introduction to nonprimitive datatype


// nonprimitive includes: objects, array 




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1  object 


let testobj= {};
console.log(typeof testobj); 

let textobject={
// key:value
    nr:2,
    str:"text",

}

// to delete a key:
// delete textobject.str

console.log(typeof textobject.nr);
console.log( textobject.nr);

console.log(typeof textobject.str);
console.log( textobject.str);


// end of object
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// challenge

let object0={
    
    name1: "sara",
    surname1:"mohamad",
    age1:22,
    email1:"SaraMohamad@teleworm.us",

}

console.log( object0.name1);
console.log( object0.surname1);
console.log( object0.age1);
console.log( object0.email1);

let object2={

    name2: "salman",
    surname2:"ahmed",
    age2:20,
    email2:"salmanahmed@dayrep.com",

}

console.log( object2.name2);
console.log( object2.surname2);
console.log( object2.age2);
console.log( object2.email2);


// end of challenge
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2   array
// array contains only value inside while objects contains key and value


// 1 array
// ...........-7......-6........-5.......-4..........-3.......-2........-1...........
// ...........0.......1.........2........3............4.........5........6...........
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

console.log(days);
console.log(days[0]);
console.log(days[3]);
console.log(days[6]);

// changing value
days[0]="sun";
days[1]="mon";
days[2]="tue";
days[3]="wed";
days[4]="thu";
days[5]="fri";
days[6]="sat";

console.log(days);


// array with 2 arrays inside
let days2=[
    [1,2,3,4,5,6,7],    // index 0
    ["sun","mon","tue","wed","thu","fri","sat"],    // index 1
    ["days","weeks","months","years"],    // index 2
]

console.log(days2[0][1]);     // 0 is the first array and 1 is the index 1 in array 0
console.log(days2[1][1]);     // 1 is the second array and 1 is the index 1 in array 1
console.log(days2[2][3]);     // 2 is the second array and 3 is the index 3 in array 2


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// array properties

let name=["farah","jumanah","alhanouf"];

// 1  length property يطلع طول المصفوفة
console.log(name.length);


// 2  indexof property  يطلعلك اندكس حقت فاليو داخل المصفوفة
console.log(name.indexOf("jumanah"));

// 3  push property  يزيد من النهاية
name.push("samah");
console.log(name);

// 4  pop property  يحذف من النهاية
name.pop() ;
console.log(name);


// 5  unshift property  يزيد من البداية
name.unshift("x");
console.log(name);


// 6  shift property  يحذف من البداية
name.shift();
console.log(name)

// reverse property
// console.log(name.reverse());

// slice property
console.log(name.slice(1));
console.log(name.slice(1,3));
console.log(name.slice(-1));

// concat property
let farah=[1,2,3,4];
let farah2=[1,2,3,4,5];

let FARAH=farah.concat(farah2);
console.log(FARAH);
// end
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// CHALLENGE

// 1
let user_1= [22,"fatima","fatima@teleworm.us"];
let user_2=[20,"laila@dayrep.com","laila12@#12"];

console.log(user_1);
console.log(user_1.length);

console.log(user_2);
console.log(user_2.length);
// 2
user_1.push(22)
user_1.shift();
console.log(user_1);

user_2.unshift("laila");
console.log(user_2);

user_2.pop();
console.log(user_2);
// 3
console.log(user_1.slice(0,2));
console.log(user_2.slice(1,2));

let alluser=user_1.concat(user_2);
console.log(alluser);

// end


