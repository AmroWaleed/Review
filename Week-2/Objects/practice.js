console.log("objects") 


//Pulse check
//1

const person_1= {name:"Amro",age:23,gender:"Male"}

const movie={length:2 ,name:"Inception" ,genre:"Science"
}


const favorateFood = {fast:["pizza","burger"],homeMade:["magloba"]
}

const store = {name:"Geox",address:["buildingNumber","street"]
}
store.address.buildingNumber=12
store.address.street="University St."


//2
const orderedSolarSystem = {
    Mercery: "first",
    Venus: "second",
    Earth: "third",
    Mars: "fourth",
  };


  const animalDiet = {
    mammals: {
      cat: "carnivore",
      dog: "carnivore",
      koala: "herbivore",
    },
    fish: {
      shark: "carnivore",
    },
  };

   orderedSolarSystem.Mars     //1
   orderedSolarSystem['Mars']  //2
   animalDiet.mammals.koala  //3


//3
  const studentOne = {      
    englishGrade: "80",
    scienceGrade: "90",
  }
  studentOne.mathGrade= 80   
 
  studentOne.englishGrade=90  
  
  studentOne.scienceGrade=80   
  
  studentOne.average=(80+90+80)/3  // we can`t used variabeles because it is dot.notation

  
  const studentTwo = {
    englishGrade: 80,
    scienceGrade: 90,
  };
  studentTwo["mathGrade"]=80   
  studentTwo["englishGrade"]=90
  studentTwo["average"]=(90+90+80)/3 // how to make it dynamic ????


  const objectKey = "key";
const ObjectValue = "value";

const object = {objectKey:"Key",ObjectValue:"value"};


// Practice
//1

const person_2 = {name: "john", age:20}

const car = {brand: "toyota", model: 2020}

const employee ={name: "Jane", position: "developer"}


 
//2
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  };
  
  person.age   // access age 

  person["age"]=23 // modifying the person age 

  person.work=["position","salary"] //add a proparetty 
  person.work.position="CTO"
  person.work.salary="3000 $"


  const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
  ];

  employees[0].name.first 
  employees[1].name.first  // how to access the both of them within one code ???
 

  const others = {          // i don`t know if it the best practice or not !!!
    id:3,
    name:
    {
      first:"Amro",
      last:"Waleed"
    },
    position:"Full Stack Developer"
  }

employees.push(others)



const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};

cars.toyota.model
cars.nissan.model // how to access both of them in one code??

cars.toyota.model=2020

const newCar ={audi:{name:"Audi A6",model:2020}}
 
cars.audi=newCar



const createCar = function (brand, carName, color) {
 return {brand:brand,carName:carName,color:color};
};

const getFullName = function (person) {
  return 
};












