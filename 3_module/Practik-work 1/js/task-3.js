const calculator = {
  name: "Mango",
  read(a , b){
   this.a = prompt('Введіть перше числове значення')
   this.b = prompt('Введіть друге числове значення')
  },
  sum(){
  return this.a + this.b
  },

 mult(){
  return this.a * this.b 
  }
}


  calculator.read()
  console.log(calculator.sum())
  console.log(calculator.mult())
  console.log(calculator);



  


