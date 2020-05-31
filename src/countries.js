import React,{Component} from 'react';
import './countries.styles.scss';
import 'country-list';

const countryList  = require('country-list');
const countryListNames = countryList.getNames();
const countries=[
{
value:'',
key:''


}
]

const  world=[]

countryListNames.forEach(items=>{

countries.push({

value:items,
key:items

})


});





class Countries extends Component{
constructor(){

super();

this.state={

teams:[
{
value:'',
kaey:''
}


],
confirmednumbers:'',
NewConfirmed:'',
NewDeaths:'',
TotalDeaths:'',
NewRecovered:'',
TotalRecovered:'',
TotalConfirmed:'',
TotalDeaths1 :'',
TotalRecovered1:'',
Countryconfirmed:'',
Country:[]
}



}

onload=()=>{

  fetch('https://api.covid19api.com/summary').then(response=>response.json())
  .then(users=> 

console.log(users)

  );


}

onSearchChanges =(event)=>{
  const{Country}=this.state;

    const dropdownvalue=event.target.value;
    console.log(dropdownvalue);
    
    fetch('https://api.covid19api.com/summary').then(response=>response.json())
    .then(users=> 

    



    users.Countries.map(items=>
  
      //world.push(items.Country);
{
    if(items.Country === dropdownvalue){
       this.setState({confirmednumber:items.TotalConfirmed});
       this.setState({NewConfirmed:items.NewConfirmed});
       this.setState({NewDeaths:items.NewDeaths});
       this.setState({TotalDeaths:items.TotalDeaths});
       this.setState({NewRecovered:items.NewRecovered});
       this.setState({TotalRecovered:items.TotalRecovered});
    //a=items.TotalConfirmed;
    //console.log(a);
    
    
    }

    //console.log(items);
},

this.setState({TotalConfirmed1:users.Global.NewConfirmed}),
    this.setState({TotalDeaths1:users.Global.TotalDeaths}),
    this.setState({TotalRecovered1:users.Global.TotalRecovered})
    ),
  //  users.Countries.map(items=>
    
  //   ),
    //this.setState({Country:users}),
    
    //console.log(Country),
    
    
  

    
        );
    
    
    
    
    }

render(){
  this.onload();
 // const{Country}=this.state;
//console.log(world);
return(
<div className='homepage'>
<div className='directory-menu'>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>CoronaVirus</h1>
<span className='subtitle' >A Pandemic</span>
</div>
</div>
</div>
<div className='directory-menu'>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalConfirmed</h1>
<span className='subtitle' >{this.state.TotalConfirmed1}</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalDeaths</h1>
<span className='subtitle' >{this.state.TotalDeaths1}</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalRecovered</h1>
<span className='subtitle' >{this.state.TotalRecovered1}</span>
</div>
</div>
</div>



<div className='directory-menu'>

<div className='menu-item' >


<div className='bar'>
<label htmlFor="cars">Choose a Country:</label>

 <select   className='dropdown' id="cars"  onClick ={this.onSearchChanges} >

 {countries.map((team) => <option key={team.value} value={team.value}>{team.value}</option>)}

 </select> 
 </div>

 <div></div>
<div className='bar'>
<table className='tableborder'>
  <tr>
    <th>Confirmed Cases:</th>
    <td>{this.state.confirmednumber}</td>
    </tr>
   <tr> <th>NewConfirmed:</th><td>{this.state.NewConfirmed}</td>  </tr>
  <tr>
    <th>NewDeaths:</th>
<td>{this.state.NewDeaths}</td>
   
  </tr>
  <tr>
    <th>TotalDeaths:</th>
<td>{this.state.TotalDeaths}</td>
   
  </tr>
  <tr>
    <th>NewRecovered:</th>
<td>{this.state.NewRecovered}</td>
   
  </tr>
  <tr>
    <th>TotalRecovered:</th>
<td>{this.state.TotalRecovered}</td>
   
  </tr>

  </table>
  </div>


</div>
</div>


<div className='directory-menu'>
<div className='menu-item'>
<table className='table'>
  <tr >
    <th>Country</th>
  <th>TotalConfirmed</th>
  <th>NewConfirmed</th>
    <th>TotalConfirmed</th> 
    <th>NewDeaths</th>   
    <th>TotalDeaths</th>   
    <th>NewRecovered</th>    
    <th>TotalRecovered</th>   
  </tr>
  <tr ><td>{this.state.Country}</td></tr>
  </table>



</div>
</div>
</div>







);




}


















}


export default Countries;