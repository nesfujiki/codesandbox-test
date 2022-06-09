/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(vall);
// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(vall);
// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);
// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// //let再ggggg
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// //const変数は上書き不可
// val3 = "const変数を上書き";
// //const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能。オブジェクトはconstで宣言する
// const val4 = {
//   name: "yasu",
//   age: 24
// };
// val4.name = "やす";
// val4.address = "Fukuoka";
// console.log(val4);

// // //constで定義した配列はプロパティの変更が可能。配列はconstで宣言する
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "yasu";
// const age = 24;
// //「私の名前はやすです。年齢は24です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return str;
//  }
// console.log(func1("func1です"));
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

//アロー変数
//引数1つなら()を省略できる
//return省略可
// const func2 = (str) => {
//   return str;
// }
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(2, 3));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "yasu",
//   age: 24,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['yasu', 24];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
//引数に初期値で"ゲスト"を入れる
//  const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
//  sayHello("yasu");

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//代入してしまうとarr4の値も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
//従来
// const nameArr = ["田中", "山田", "じゃけ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//mapは配列を順に処理することができる
//引数の2番目には添え字が入る
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//filterはreturnに条件を付けることができる
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

//名前の配列でじぇけ以外にさんをつける
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件?　条件がtureの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }
// console.log(checkSum(50,50));

/**
 * 論理演算子のの本当の意味を知ろう
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log("1か2はtrueになります");
//  }
//  if (flag1 && flag2) {
//    console.log("1も2もtrueになります");
//  }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がfalseなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
