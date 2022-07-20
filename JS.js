//var는 한번 선언된 변수를 다시 선언할 수 있다.
//let은 불가능

var name = 'Mike';
console.log(name);  //Mike

var name = 'Jane';
console.log(name); // Jane

let name = 'Mike';
console.log(name); // Mike

let name = 'Jane';
console.log(name); // error


const age = 30;
if(age > 19) {
    var txt = '성인';
}
console.log(txt); //성인
// let const 는 블록 스코프이기 때문에 {} 안에서만 사용가능
// let const로 할시 error
// var let const는 함수 내에 생성되면 바깥에서 사용 불가능

//객체 만들기 , 객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}


// 생성자 함수
// 첫 글자는 대문자로
// 여러 객체를 쉽게 만들 수 있다
function User(name, age) {
    this.name = name;
    this.age = age;
}
let user1 = new User('Mike', 30); //new 연산자를 사용해 호출
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);


function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`)
    }
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 5000);

console.log(item1, item2, item3); // Item {title: 'title', price: 'price', showPrice: f}
item1.showPrice();  // 가격은 3000원 입니다.

