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
TotalRecovered:''



}



}



onSearchChanges =(event)=>{


    const dropdownvalue=event.target.value;
    console.log(dropdownvalue);
    
    fetch('https://api.covid19api.com/summary').then(response=>response.json())
    .then(users=> 
    users.Countries.forEach(items=>{
  
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
    
    
    })
    
    
    
        );
    
    
    
    
    }

render(){


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
<h1 className='title'>CoronaVirus</h1>
<span className='subtitle' >A Pandemic</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>CoronaVirus</h1>
<span className='subtitle' >A Pandemic</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>CoronaVirus</h1>
<span className='subtitle' >A Pandemic</span>
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

<div className='content'>
<h1 className='title'>In Progess ....</h1>
<span className='subtitle' >In Progress ...</span>
</div>
</div>
</div>
</div>







);




}


















}


export default Countries;