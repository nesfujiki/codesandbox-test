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
