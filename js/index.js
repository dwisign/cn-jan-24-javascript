// var cars = 'Hello World'
// document.writeln(cars)
// console.log(cars)


//Ini console log

/*
Ini komen multiline
ini baris kedua
*/

console.log('Hey Hello World') //string
console.log(5) //number
console.log(true) //boolean
console.log(false) //boolean
console.log(3/2.5) //aritmetic

//variable
var fullname = "Dwi Pamungkas"
var fullname = "Jhon Doe"


//operation aritmatika
const result = 3 + 5
console.log(result)

const resultKurang = 9 - 7
console.log(resultKurang)

const resultKali = 8 * 5
console.log(resultKali)

const resultBagi = 9 / 3
console.log(resultBagi)

const resultSisa = 10 % 4
console.log(resultSisa)


//prompt 
// const number1 = prompt('Number 1')
// const number2 = prompt('Number 2')
// const result2 = number1 * number2
// alert ("Hasil Perkalian = " + result2 )



//operator perbandingan
const result3 = 5 == '5' //tidak ngecek tipe data
console.log(result3)

const result4 = 5 === '5' //ngecek tipe data
console.log(result4)

const result5 = 5 > 3
console.log(result5)

const result6 = 5 < 3
console.log(result6)



//operator logika
const nilaiUjian = 75
const nilaiAbsen = 74

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulus = lulusUjian && lulusAbsen// dan - dua syarat harus terpenuhi
const lulus2 = lulusUjian || lulusAbsen //atau - salah satu syarat terepenuhi
console.log('Hasil Akhir: ', lulus)
console.log('Hasil Akhir:', lulus2)



//ternery operator
const lulus3 = nilaiUjian >= 75 || nilaiAbsen >= 75 ? 'LULUS' : 'TIDAK LULUS'
console.log(lulus3)



//STring Template
const nama = "Dwi"
const age = 38
console.log("Nama : " + nama + ", Usia: " + age)
console.log(`Nama : ${nama}, Usia: ${age}`)



//ARRAY
const cars = ['Ayla', 'Agya', 'Calya', 'Avanza']
const motorCycle = [
    'Vario',
    'Beat',
    'Scoopy',
    'NMax'
]
console.log('Data Mobil : ' , cars)
console.log('Data Motor : ' , motorCycle)
document.writeln('Data Mobil : ' , cars + '<br>')
document.writeln('Data Mobil : ' , motorCycle)
console.table(cars)
console.table(motorCycle)


//Get data index n
console.log(cars[2])

//Find length
console.log(cars.length)

//array methods
console.log(cars.toString()) //ubah array jadi string

console.log(cars.join(' - '))//array jadi string ubah tanda penghubung

console.log(cars.pop())//remove data terakhir
console.log(cars)

cars.push('Kijang')//nambah data terakhir
console.log(cars)

cars.shift()//remove data pertama
console.log(cars)

delete cars[0]//remove data - ada sisa undefined
console.log(cars)
console.log(cars[0])

const groupVehicle = cars.concat(motorCycle)// gabung data
console.log(groupVehicle)
groupVehicle.shift()
console.log(groupVehicle)


//LOOPING

for(i = 0; i < groupVehicle.length; i++ ){
    console.log(groupVehicle[i] + '<br>')
    document.writeln('<br><br>' + groupVehicle[i] + '<br>')
}

//for in
const users = {
    fullNama : 'Jhon',
    email : 'jhon@mail.com',
    age : '25'
}
let text = ''
for (let a in users) {
    text += users[a] + ' '
}
console.log(text)
document.writeln(text)


//for of
let txt = ''
for (let b of groupVehicle) {
  txt += b + '<br>'
}
document.writeln('<br><br>' + txt)

//forEach
const food = [
    {
        id: 1,
        rasa: 'Manis',
        warna: 'Merah',
        bantuk: 'Bulat'
    },
    {
        id: 2,
        rasa: 'Pahit',
        warna: 'Hitam',
        bantuk: 'Kotak'
    },
    {
        id: 3,
        rasa: 'Asam',
        warna: 'Kuning',
        bantuk: 'Kotak'
    }
]
food.forEach(foods => {
    for(let value in foods){
        document.writeln(`${foods[value]} <br>`)
    }
})


//Conditional
const score = 65

if(score <= 60){
    document.writeln('TIDAK LULUS')
}else{
    document.writeln('LULUS')
}

if(score < 60){
    document.writeln('TIDAK LULUS')
}else if(score >= 60 && score <= 75){
    document.writeln('CUKUP')
}else{
    document.writeln('SEMPURNA')
}

const hasilUjian = score < 60 ? 'TIDAK LULUS' : score >= 60 && score <= 75 ? 'CUKUP' : 'SEMPURNA'
document.writeln(hasilUjian)


//Conditional Switch case
const role = 'PROGRAMER'
switch (role){
    case 'PROGRAMER' :
        document.writeln('Coding')
        break
    case 'DESIGNER' :
        document.writeln('Mendesign')
        break
    case 'PRODUCT MANAGER' :
        document.writeln('Lead')
        break
    default:
        document.writeln('Kerja')
}



//FUNCTION

//decalaration
function user(fullname, email){
    document.writeln(`<br><br> Full Nama: ${fullname}, Email: ${email}`)
}
user('Dwi Pamungkas', 'dw.pamungkas@gmai.com')


//expression1
const user2 = function(fullname, email){
    const resultUser = `<br><br> Full Nama: ${fullname}, Email: ${email}`
    return resultUser
}
document.writeln(user2('Dwi Pamungkas', 'dw.pamungkas@gmail.com'))


//expression2 - arrow function
const user3 = (fullname, email) => {
    const resultUser = `<br><br> Full Nama: ${fullname}, Email: ${email}`
    return resultUser
}
document.writeln(user3('Dwi Pamungkas', 'dw.pamungkas@gmail.com'))
