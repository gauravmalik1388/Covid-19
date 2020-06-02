import React from 'react';




class Covid extends React.Component{

constructor(){
super();


this.state={

Countries:[],
Countryinfo:[
{
Country:''


}


]



}






}
componentDidMount() {

    fetch('https://api.covid19api.com/summary').then(response=>response.json())
  .then(users=>
this.setState({Countries:users.Countries})
    
    
    
    
    );





}

render(){
    const{Countries,Countryinfo}=this.state;



  console.log(Countries);





return (
  
<div></div>

)


}









}

export default Covid;