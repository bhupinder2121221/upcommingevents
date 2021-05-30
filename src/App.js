
import './App.css';
import Headers from "./myconponents/header"
import Todoarea from "./myconponents/todolist"
import Footer from "./myconponents/footer"
import React,{useState,useEffect} from "react"
import Addtodo from "./myconponents/addTodo"
import AddButton from "./myconponents/addeventbtn"
import AboutPage from "./myconponents/about"
import Searchcomponent from "./myconponents/Searchinf"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  function changeSearchTxt(text){
      setSearchText(text);
      
  }
  function onDelete(todolst){
    console.log("Deleted list : ",todolst);
    settodolistwork(todolistwork.filter((element)=>{
        return element!==todolst
    }))
  }
  function addTodolist(place,work){
    console.log("place stored :",place , " work stored :",work);
    let id=1;
    if(todolistwork.length!==0){
     id = todolistwork[todolistwork.length-1].id +1;
     
    }
     let mytodo ={
      id:id,
      place:place,
      work:work
    }
    settodolistwork([...todolistwork,mytodo]);
   
    setaddbuttonclicked(false);
    setupcomingEvents(true);
    setaddbtnName("Add Events")
  }
  function changeaddbuttonclicked(){
    console.log("add btn called")
    if (addbuttonclicked === false){
      setaddbuttonclicked(true)
      setaddbtnName("Close X")
      setupcomingEvents(false)
      
    }
    else{
      setaddbuttonclicked(false)
      setupcomingEvents(true)
      setaddbtnName("Add Events")
    }
    
  }
  let initTodoList ;
  if(localStorage.getItem("Tododata")==="null"){
    initTodoList =[]
  }
  else{
    initTodoList = JSON.parse(localStorage.getItem("Tododata"));
  }
  const [todolistwork , settodolistwork] =useState(initTodoList)
  const [addbuttonclicked,setaddbuttonclicked] = useState(false)
  const [addbtnName,setaddbtnName] =useState("Add Events")
  const [upcomingEvents,setupcomingEvents] = useState(true)
  const [searchTxt,setSearchText] = useState("");
  useEffect(() => {
    localStorage.setItem("Tododata",JSON.stringify(todolistwork))
   
  }, [todolistwork])
  return (
    <div>
      <Router>
          <Headers title="Daily Events" searchbar={false} searchFun={changeSearchTxt}/>
          <Switch>
            <Route exact path="https://bhupinder2121221.github.io/upcommingevent/" render = {()=>{
              return (
                <>
                <AddButton name={addbtnName} addbutton ={changeaddbuttonclicked}/>
                {addbuttonclicked?<Addtodo adding={addTodolist}/>:""}
                {upcomingEvents? <Todoarea todo = {todolistwork} ondelete ={onDelete} /> : ""}
                </>
              )
            }}>
            </Route>
            <Route exact path="https://bhupinder2121221.github.io/upcommingevent/about" render={()=>{
              return(
                <>
                <AboutPage/>
                </>
              )
            }}>
            </Route>
            <Route exact path="/search" render={()=>{
              return(
                <>
                <Searchcomponent searchtxt ={searchTxt} todolist = {todolistwork}/>
                </>
              )
            }}>
            </Route>
          </Switch>
            
          <Footer/>
      </Router>
  </div>
  );
}

export default App;
