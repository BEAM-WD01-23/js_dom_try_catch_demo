'use strict'
//
    // a = 10;
    // b = 5;
    // console.log(a-b);
    //
    //const a = 10;
    //const b = 5;
    //console.log(a-b);
//
    //
    //throw true;
    //throw 'Javeline';
    let one = 1;
    let two = 2;
    let three = one + two;
    //console.log(three);//3
    //
//
    //
    let myOne = 5;
    let myTwo = 0;
    let myOperation = myOne/myTwo;
    //console.log(myOperation);//Infinity
    //
// try ... catch
    //
    try{
        let a = 0;
        let b = 1;
        console.log(a+b === myVariable);//1
    }catch(error){
        console.log(error.name);//ReferenceError
        console.log(error.message);//myVariable is not defined
        console.log(error);//ReferenceError: myVariable is not defined
    }
    //
//
    //
    // let myDay = new Date();
    // console.log(myDay);
    //
    try{
        let myDay = new date();//simulating error
        //console.log(myDay);
    }catch(err){
        //console.log(err);
        //console.error(err);
        //console.warn(err);
        //console.error(err.stack);
    }
    //
//      try ... catch ... finally ...
    //
    try{
        let myDay = new date();//simulating error
        //console.log(myDay);
    }catch(err){
        //console.warn(err);
    }finally{
        let myDay = new Date();//simulating error
        //console.log(myDay);
    }
    //
// function inside try ... catch ... finally 
    //
    try{
        function showName(myName){
            //console.log(myame);//simulating error
        }
        showName('Ahmed')

    }catch(err){
        //console.log(err);
    }finally{
        //console.log('this will be always running!');
    }
    //
// loop inside try ... catch ... finally 
    //
    function tryCatchInFunction(){
        let myArray = [1,2,3,4,5,6,7];
        for(let a=0; a<myArray.length; a++){
            //console.log(myArray[a])
            try{
                if(myArray[a] % 2 == 0){
                   // throw new Error('these numbers are even');
                }
                //console.log('these are odd numbers');
            }catch(err){
                //console.warn(err);
            }finally{
                //console.log('message shown despite any error');
            }
        }
    }
    tryCatchInFunction();
    //

//
    try{
        function tryCatchInFunction(){
            let myArray = [1,3,5,7];
            for(let a=0; a<myArray.length; a++){
            //console.log(myArray[a])
                    if(myArray[a] === mystrng){
                        //console.log(myArray[a]);
                        //throw new Error('these numbers are even');
                    }       
        }
    }
        tryCatchInFunction();
    }catch(err){
        //console.log(err)
    }finally{
        //console.log('message shown despite any error');
    }
    //
//fetch and try ... catch ...
    //
    
   try{
        const url = 'https://random-word-api.herokuapp.com/all';
        fetch(url)
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
   }catch(err){
        console.error(err.name);
   }
   //
//try ... catch ... finally on DOM 
   //
   
   const myContainer = document.getElementById('.container');
   const myBtn = document.getElementById('btn');
   myBtn.addEventListener('click', myFunction);

   function myFunction(){
    try{
        myContainer.style.backgroundColor = 'green';
     }catch(err){
        console.log(err)
     }finally{
            const myContainer = document.getElementById('container');
            myContainer.style.backgroundColor = 'gold';
     }
   }
   //function
        //declaration
        //logic
        //call



