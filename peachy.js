//array การนำข้อมูลใหม่ไปต่อท้ายข้อมูลเดิมที่มีอยู่แล้ว
let ages = [50,80,90]
ages.push(60)
console.log = (ages)

//pop เอาข้อมูลเดิมอันสุดท้ายที่มีอยู่แล้วออก
let ages = [50,80,90]
ages.push(60)
console.log = (ages)
ages.pop
console.log (ages)

//if เช็คว่ามีข้อมุูลอยู่ไหม
let ages = [99,69,2]
ages.push(60)
console.log = (ages)
ages.pop
console.log (ages)
if(ages.includes(60)){
    console.log("have 80") //หาข้อมูลใน array
}
else{
    console.log("don't have data")
}

//short ไว้เรียงข้อมูลตัวเลข
ages.short()
console.log(ages)

//loop for 
let name_list = ["Fanky","snoopy","Yuki","Poppy","mark"]
for (let index=1 ; index < name_list.length; index++){
    console.log(name_list[index])
}

 //object คือ array ที่อยู่ในรูปแบบของ Object
 let student = [
    { age:30,name :'kie',grade:'A'},
    { age:40,name :'jane',grade : 'C'},
    { age:25,name :'sompong',grade : 'D'}
 ]