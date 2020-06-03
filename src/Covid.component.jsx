import React from 'react';

import Total from './Total.component';
import Allcountries from './Allcountries/Allcountries.component';

const world=[];
class Covid extends React.Component{

constructor(){
super();


this.state={

country:[],
Global:{
Global:{},
Countries:[]


},
TotalRecovered:'',
TotalConfirmed:'',
TotalDeaths:''
,abc:[]



}






}
componentDidMount() {
   // const{Countries,TotalRecovered,TotalConfirmed,TotalDeaths}=this.state;
    fetch('https://api.covid19api.com/summary').then(response=>response.json())
  .then(users=>



this.setState({Global:users}),






    

    
    //console.log(users.Global.NewConfirmed)

  )



}

render(){
    const{Global,abc,country,TotalRecovered,TotalConfirmed,TotalDeaths}=this.state;

    // Global.Countries.map(country=>
    //     world.push(country.Country)
        
    //     );

    //     console.log(world);
    


return (

    
    



  
<div className='homepage'>
    <h1>dsasfs</h1>
{


        
    <Total TotalRecovered={Global.Global.TotalRecovered}  TotalConfirmed={Global.Global.TotalConfirmed}  TotalDeaths={Global.Global.TotalDeaths} />,
    Global.Countries.map(({CountryCode, Country,...otherprops})=>
    (
console.log(Country),
<Allcountries key={CountryCode} Country={Country} {...otherprops}/>


    ))
    
    



}




</div>

)


}









}

export default Covid;