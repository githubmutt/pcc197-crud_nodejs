//import logo from './logo.svg';
import './App.css';
import Axios from 'axios'


import {useState , useEffect} from 'react'

function App() {

  const [ fname, setFName] = useState("")
  const [ lname , setLName] = useState("")
  const [ email, setEmail] = useState("")
  const [ password, setPassword]= useState("")

  const [students , setStudents]  = useState( []  )

  const [ error , setError] = useState("-")
  
  useEffect(

      ()=>{

        Axios.get("http://localhost:3001/api/read").then(

           (response) => {
               console.log("xxxxxx")
               console.log( response.data )
               setStudents(response.data)
               console.log( students )
           }


        )




      }, [ ]

  )

  const StudentList = () =>{

          return students?.map(item => (
              <div>                                                                                                                                                          
                 <span>{item.fname}   {item.lname} {item.email} {item.password}</span>                                                                                               
              </div>
         ));
    
    
    }


/*
    function StudentBody(){
     return(
         <div className="map-list">
                  {
                    students?.map( item => {      }                  )  
                  }

        </div>
      )

  }

*/



  const  onLogin = (evt) =>{
    //alert("onLogin")
    console.log("evt: " + evt.target.value)
    setError( evt.target.value ) 
  }

  const Members = () => {

    let response = []
     Axios.get("http://localhost:3001/api/members" , {params:{}}).then(

           function(response){
             //setStudents( response )
             
           }

     )
     return(
           <div>
             <h1>Students</h1>
           </div>


     )
     

     


  }
  const TestPost = (evt) => {
    console.log("TestPost")

    

    Axios.post("http://localhost:3001/api/post",{fname: "FNAME"})
      .then(
            ()=> {
              alert("success")
            }
      ).catch(
            () => {
              alert("fail")

            }

      ).finally(
          () => {
            alert("finally")
          }


      )

  }
  const CreateButton = ( evt)=> {
       console.log("Submit: " + fname + " " + lname + " " + email + " " + password )

       let axiosConfig = {
        headers:{
                'Content-type' : 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin" : "*"

        }
       }

       const body = {fname:fname, lname:lname,email:email, password:password }
       Axios.post('http://localhost:3001/api/create', body , axiosConfig )
        .then(()=>{
            console.log("successfull insert ")
        }).catch( ()=>{
            alert("error")
        })


  }

   const ReadButton = ( evt)=> {

    Axios.get('http://localhost:3001/api/read', {params: {} } )
     .then( (response)=>{
         console.log(response)
         setStudents(response.data)
         console.log( students )
     })
}

   const UpdateButton = (evt) => {

       const body = {fname:fname, lname:lname,email:email, password:password }
       let axiosConfig = {
        headers:{
                'Content-type' : 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin" : "*"
      
        }
       }
      
       Axios.post('http://localhost:3001/api/update',body, axiosConfig )
       .then(  (response) => {

           console.log("successfull delete")

       }).catch(  ()=> {
            alert("error")

       }


       )





   }

   const DeleteButton = (evt) => {
    
    const body = {fname:fname, lname:lname,email:email, password:password }
    let axiosConfig = {
      headers:{
              'Content-type' : 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin" : "*"

      }
     }

    console.log("DeleteButton ")
    Axios.post('http://localhost:3001/api/delete', body , axiosConfig )
     .then(()=>{
         console.log("successfull deletion ")
     }).catch( ()=>{
         alert("error")
     })



   }

   return (
    <div className="App">

         <h1> CRUD Application</h1>
         <h2> Membership</h2>

         <div className="form">
           <label><b>First Name</b></label>
           <input type="text" name = "fname"
           
           onChange = { (evt)=>{ setFName( evt.target.value)    }}
           ></input>

           <label><b>Last Name</b></label>
           <input type="text" name = "lname"
             onChange = { (evt)=>{ setLName( evt.target.value)    }}
           ></input>

           <label><b>Email</b></label>
           <input type="text" name="email"
            onChange = { (evt)=>{ setEmail( evt.target.value)    }}
           
           ></input>
         
           <label><b>Password</b></label>
           <input type="text" name="password"
             onChange = { (evt)=>{ setPassword( evt.target.value)    }}
           ></input>
            <hr/>
           {fname} &nbsp; {lname} &nbsp; {email} &nbsp; {password} <br/>
           {EvalError}
           <hr/>
           CRUD Commands (Create Read, Update, Delete)
           <button
               onClick= {CreateButton }
           ><b>C</b>reate:
           </button>

           <button
               onClick= {ReadButton }
           ><b>R</b>ead:</button>
         
           <button
               onClick = {UpdateButton}
           ><b>U</b>pdate ( base on email)

           </button> 

           <button
             onClick = {DeleteButton}
             ><b>D</b>elete (base on email)
           </button>

           </div>
         <p/>

         <hr/>
          <h2>Database </h2>
          <StudentList />
          
          <hr/>

         </div>
  );
}

export default App;
