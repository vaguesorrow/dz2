//задача 1

let a=parseInt(prompt("введите свой возраст:"));
if (a>=65){
    console.log('Поздравляем с пенсионным возрастом');
} else {
    console.log('Вам ещё рано на пенсию');
}

//задача 2

let b=parseInt(prompt('введите первое число'));
let c=parseInt(prompt('введите второе число'));
if (b>c){
    console.log('Первое число больше');
} else if (b<c){
    console.log('Второе число больше');
} else {
    console.log('Числа равны');
}

//задача 3

let d=parseInt(prompt('введите число'));
if (d%2===0){
    console.log('это число четное');
} else{
    console.log('это число нечетное');
}

//задача 4

let e=5
let f=parseInt(prompt('введите свое число'));
if (f===e){
    console.log('Вы угадали!');
} else{
    console.log('Попробуйте еще раз!');
}

//задача 5

let g=prompt('введите логин');
let h=prompt('введите пароль');
if (g==='admin'&& h==='12345'){
    console.log('Добро пожаловать!');
} else {
    console.log('Неверный логин или пароль');
}

//задача 6

let i=parseInt(prompt('введите год'));
if ((i%100===0 && i%400===0) || (i%4===0 && i%100!=0)){
    console.log('это високосный год');
} else{
    console.log('это не високосный год');
}

//задача 7

let j=parseInt(prompt('введите второе число'));
if (j>100){
    console.log('Большое число');
} else if (j<100){
    console.log('Маленькое число');
} else {
    console.log('Точно 100!');
}