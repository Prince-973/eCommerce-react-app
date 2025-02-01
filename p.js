const str = "AAAAAAAAAAAAABBBBBBBBBBBBBBBBDDDDDJJJ";
let str2 = "";
let num = 0;
let ans = "";
for (let index = 0; index < str.length; index++) {
  let ptr1 = str[index];
  let ptr2 = str[index + 1];

  if (ptr1 === ptr2) {
    num++;
    if (num === 8) {
      str2 += `${num + 1}${ptr1}`;
      num = -1;
    }
  }

  if (ptr1 !== ptr2) {
    str2 += `${num + 1}${ptr1}`;
    num = 0;
  }
}
console.log(str2);

for (let index = 0; index < str2.length; index++) {
  let char = str2[index];
  if (char >= "0" && char <= "9") {
    let char2 = str2[index + 1];
    ans += char2.repeat(+char);
  }
}

console.log(ans === str);

let num1 = [1, 1, 2, 1, 3, 5, 6, 4];
let low = 0,
  high = num1.length;

while (low <= high) {
  let mid = Math.floor((high + low) / 2);

  if (num1[mid] >= num1[mid + 1] && num1[mid] >= num1[mid - 1]) {
    console.log(num1[mid]);
    break;
  }

  if (num1[mid] > num1[mid - 1]) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

// const date = new Date("2025-01-31 05:39:57.617");

// console.log(date.toLocaleString("en-IN"));
// const date = new Date("2025-01-31 05:39:57.617Z");
// const indianTime = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
// console.log(indianTime);

const arr = [1, 2, 3, 0, 3, 5, 0, 0, 4];
let ptr1;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] === 0) {
    ptr1 = index;
    break;
  }
}

for (let index = ptr1 + 1; index < arr.length; index++) {
  if (arr[index] !== 0) {
    [arr[ptr1], arr[index]] = [arr[index], arr[ptr1]];
    ptr1++;
  }
}
console.log(arr);

const arr1 = [1, 0, 2, 3, 0, 0, 5];
let last = arr1.length - 1,
  first = 0;

for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] === 1) {
    [arr1[index], arr1[last]] = [arr1[last], arr1[index]];
    last--;
  }
  if (arr1[index] === 0) {
    [arr1[index], arr1[first]] = [arr1[first], arr1[index]];
    first++;
  }
}
console.log(arr1);

const data = "1:25 PM";

const time = data.split(" ");
const hours = time[0].split(":")[0];
const minutes = time[0].split(":")[1];
const amPm = time[1];
let newhours ;

if (amPm === "PM" && hours !== "12") {
  newhours = (+hours) + 12;
}
if (amPm === "AM" && hours === "12") {
  newhours = 0;
}
if (amPm === "PM" && hours === "12") {
  newhours = 12;
}
console.log(newhours, minutes);
