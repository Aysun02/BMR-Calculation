const mail="Aysun@gmail.com";
const pass=1392;
const beverageList=["* Riesling"," ** pinot gris","*** syrah"," **** Chardonnay"," ***** Zinfandel"];
const Allowedlist=["true","false"]
function getIdByAuth(mail,pass){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(mail==="Aysun@gmail.com" && pass===1392){
                const data={id:1296};
                
                return resolve(data);
            }else{
                return reject({err:"Auth failed"})
            }
        
        },1000)
    })
}

function Customerlist(id){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(id===1296){
        const customerlist={name:"Aysun",surname:"Huseynli",age:20};
                
        return resolve(customerlist);
      }
      else{
          return reject( {err:"No student list found"})
      }
    },1000)
})
}

function CheckAge(age){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(age>=18){
        
            return resolve(Allowedlist[0])
        }
        else if(age<18){
            return resolve(Allowedlist[1])
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

function Checkedpart(Allowedlist){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(Allowedlist==="true"){
           
            return resolve(beverageList)
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

function Checkedidpart(typeofdrink){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(typeofdrink){
      const checkid={id:101}
            return resolve(checkid)
        }
        else{
            return reject( {err:"No details found"})
        }
    },3000)

})
}

function getInformation(checkid){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(checkid){
      const beverageData={typeofdrink:beverageList[3],ingredient:"Yellow citrus,yellow pomaceous fruits, tropical fruits (banana, pineapple)",Style: "Medium- to Full-Bodied White Wine",}
            return resolve(beverageData)
        }
        else{
            return reject( {err:"No details found"})
        }
    },3000)

})
}

getIdByAuth(mail, pass)
    .then(
            data =>  Customerlist(data.id)
    .then(
            customerlist => CheckAge(customerlist.age)
    .then(
            Allowedlist => Checkedpart(Allowedlist)
    .then(
            beveragelist => Checkedidpart(beveragelist[0])
    .then(
            checkid => getInformation(checkid.id)
    .then(
            information=>console.log(information))
    .catch(err => console.log(err))
        )
    .catch(err => console.log(err))
        )
    .catch(err => console.log(err))
        )
    .catch(err => console.log(err))
        )
    .catch(err => console.log(err))
        )
    .catch(err => console.log(err))