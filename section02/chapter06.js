// 반복문으로 배열과 객체 순회하기
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함.

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
// length는 배열의 길이를 저장하는 프로퍼티

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

// 1-2. for of 반복문
// 오직 배열을 순회하기 위해서만 존재하는 특수한 반복문
for(let item of arr){ // of 뒤에 있는 배열의 값을 하나씩 순서대로 꺼내와서 item에 저장함.
    console.log(item);
}

// 2. 객체 순회
let person = {
    name : "박정하",
    age : 27,
    hobby : "테니스"
};

// 2-1. Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 변환

let keys = Object.keys(person);
console.log(keys);
for(let i = 0; i < keys.length; i++){
    console.log(keys[i]);
};

for(let item of keys){
    console.log(item)
}

for(let item of keys){
    console.log(item, person[item]);
}

// 2-2. Object.values 사용
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);
console.log(values);

for(let value of values){
    console.log(value);
}

// 2-3. for in
// for of와 비슷
for(let key in person) {// person 객체의 프로퍼티의 키를 key라는 변수에 할당.
    const value = person[key];
    console.log(key, value);
}

// for of는 배열에만, for in은 객체에서만 사용 가능. 
