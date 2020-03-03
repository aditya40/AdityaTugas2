
## adityaTugas2.github.io


#### JavaScript - Exception and Error Handling

##### - Exception
###### * _merupakan mekanisme yang paling diperlukan dalam menangani error yang terjadi pada saat runtime (program berjalan) atau yang lebih dikenal dengan sebutan runtime error._

##### - Error Handling
###### * _adalah satu penanganan kesalahan (eror) pada berbagai macam keadaan dalam pemrograman. Setiap ada kesalahan, maka eksekusi program tidak akan dihentikan secara tiba tiba, tetapi akan diteruskan ke baris program yang terdapat script penanganan kesalahan._

##### - Try Catch Finally
###### *_keyword yang digunakan Java sebagai error handler_
````
try {
    let hello = ("hello");
    if (hello != "hello"){
      throw new Error("Error")
    }
 } catch(e) {
    console.log(e.message);
 } finally {
    console.log("thanks for playing!");
 }
````

##### - Throw
###### *_Sebuah perintah yang akan melemparkan sebagai exeption or error_
````
    const x = 10, y = 2;

    try {
        if(x == y)
            throw "e1";
        else
            throw "e2";
    } catch(e) {
        if(e == "e1")
            console.log("Exception: Both are same value!");
        if(e == "e2")
            console.log("Exception: Both are different!");
    }
````


#### JavaScript - Function

###### *_Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.Fungsi di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method._
````
function a (){
    console.log("Hello World");
}

a();
````

##### - Function Expression
###### * _Sebuah function dapat didefinisikan dengan menggunakan expression yang dapat disimpan dalam sebuah variabel.
````
const sayHi = function() {
    console.log( "Hello" );
  };

  sayHi();
````

##### - Default Parameter
###### * _memungkinkan parameter bernama diinisialisasi dengan nilai-nilai default jika tidak ada nilai atau tidak ditentukan dilewatkan._
````
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  
  console.log(multiply(1));
````

##### - Arrow Function
###### * _Mendeklarasikan sebuah expression function dengan menggunakan panah ( => ) hal ini untuk mempersingkat dalam membuat function._
````
const print = (value) => value.length;
const fun  = (a,b) => {
    let c = a*b;
    let d = Math.floor((Math.random() * 10) + 1);
    console.log(c/d);
}
console.log(print("hello world"));
fun(10,20);
````

#### JavaScript - Array

###### * _adalah sekumpulan variabel yang memiliki tipe data yang sama dan dinyatakan dengan nama yang sama_

##### - Spraed Operator
###### * _Adalah operator yang digunakan untuk menyebarkan array baik ke dalam function ataupun kedalam object atau arrray, Penggunaan spread operator memakai simbol tiga dot atau titik (…)_
````
var  a = ["banana","cherry"];
var fruits = ["apple",...a,"durian"];
console.log(fruits); // output : ["apple","banana","cherry","durian"]

var a = [1, 2, 3];
var b = [...arr];
b.push(4);
console.log(b); // output : [1,2,3,4];
````

##### - Spread Operator in Parameter
###### * _bisa dilakukan ke dalam sebuah function yang memiliki parameter_
````
const array = [1,2,3,4];
const fun = (a,b,c) => console.log(a * b * c);

fun (...array); // element 4 ignore
fun (...[1,2]); // output Nan (multiply with undefined)
````

##### - Rest Parameter
###### * _Sebuah parameter berupa array atau fungsi dapat dipanggil dengan sejumlah argumen, tidak peduli bagaimana itu didefinisikan._
````
const add = (a, b, c, ...rest) => {
 
    const allOtherNumbers = rest.reduce((number, acc) => number += acc) 
    const sum =  a + b + c + allOtherNumbers
    
    return sum
  }
  
  console.log(add(1, 2, 3, 4, 5, 6)); // output 21
````

##### - Array Operation
###### * _Operasi yang ada pada array Javascript_

##### - Array.Sort()
###### *_Sort adalah proses pengurutan data yang tadinya tersusun secara acak sehingga menjadi tersusun secara teratur menurut suatu aturan tertentu._
````
let points = [50,30,40,10,20];
points.sort();
console.log(points); // 10 20 30 40 50

let b = ["andi","amin","firman","desi","budi"];
console.log(b.sort()); // amin, andi, budi, desi, firman

b.sort((a,b) => b < a ? - 1 : 1);
console.log(b); // firman, desi, budi, andi, amin
````

##### - push(), pop(), shift(), unshift(), indexOf(), splice()
###### * _Operasi untuk memanipulasi jumlah array_
````
let a = [1,2,3];
a.push(4); // [ 1, 2, 3, 4 ]
a.push(5,6); // [ 1, 2, 3, 4, 5, 6 ] 
a.pop(); // [ 1, 2, 3, 4, 5 ]
a.unshift(0); // [ 0, 1, 2, 3, 4, 5 ]
a.unshift(-2,-1); // [ -2, -1, 0, 1, 2, 3, 4, 5 ] 
a.shift() // [ -1, 0, 1, 2, 3, 4, 5 ] 
console.log(a.indexOf(4) > 0 ? "Ada" : "Tidak"); // Ada
a.splice(a.indexOf(0),1); // [ -1, 1, 2, 3, 4, 5 ] 
a.splice(a.indexOf(4),0,6,7,8) //  [ -1, 1, 2, 3, 6, 7, 8, 4, 5 ] 
console.log (a);
````

##### - Array.forEach(), reduce(), map()
###### * _Operasi untuk mereturn value_
````
let a = [1,2,3];
a.forEach(x => console.log(x));
console.log(a.map(x => x % 2 == 0 ? "Genap":"Ganjil")); // [ 'Ganjil', 'Genap', 'Ganjil' ] 
console.log(a.reduce((x,y) => x + y)); // 6
console.log(a.reduce((x,y,z) => x + y + z)); // 9
````

#### JavaScript - Object

##### - Array.forEach(), reduce(), map()
###### * _Spread operator adalah operator yang digunakan menyebarkan key dan value object pada JavaScript_
````
const a = {
    id: 1,
    name: "Adit"
}

const b = {
    ...a,
    live: "depok"
}

const c = {
    id: 2,
    age: 10
}

console.log({...b,...c});
````

##### - Spread Operator in Parameter
###### * _Spread operator bisa dilakukan ke dalam sebuah function yang memiliki parameter._
````
const array = [1,2,3,4];
const fun = (a,b,c) => console.log(a * b * c);

fun (...array); // element 4 ignore
fun (...[1,2]); // output Nan (multiply with undefined)
````

##### - Object Assign
###### * _Menyalin semua properti object ke dalam object target, jika ada key yang sama maka akan mengubah value dari key tersebut_
````
const a = {
    id: 1,
    name: "Adit"
}

const b = {
    id: 2,
    name: "budi"
}

console.log((Object.assign(a,b))); // { id: 2, name: 'budi' } 
````

##### - Object Entries()
###### * _Mengembalikkan sebuah array yang setiap element berupa array dengan ukuran 2,dimana index pertama sebagai array dan index kedua berupa value_
````
const a = {
    id: 1,
    name: "Adit"
}

for (const [k,v] of Object.entries(a)){
    console.log(k,v);
}

console.log(Object.entries(a));
````

##### - Object.fromEntries()
###### * _Mengembalikkan sebuah object dari Array, dimana setiap element hanya mempunyai dua ukuran, index pertama sebagai key dan index kedua sebagai value._
````

````

