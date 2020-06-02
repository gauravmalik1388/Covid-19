import React,{Component} from 'react';
import './countries.styles.scss';
import 'country-list';
import Allcountries from './Allcountries/Allcountries.component.jsx';
const countryList  = require('country-list');
const countryListNames = countryList.getNames();
const countries=[
{
value:'',
key:''


}
]

const  world=[
{




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

// fetch('https://api.covid19api.com/summary').then(response=>response.json())
//   .then(users=> 
    
//     //console.log(users)
//     //this.setState({Country:users.Countries.Country})   , 
//   //  console.log(this.state.Country)
//   users.Countries.map(items=>

    
// //  //console.log(items)
//     world.push({
      
// Country:items.Country



// })
// //     //   this.setState({TotalConfirmed1:users.Global.NewConfirmed}),
// //     // this.setState({TotalDeaths1:users.Global.TotalDeaths}),
// //     // this.setState({TotalRecovered1:users.Global.TotalRecovered})
    
// //    // this.setState({Country:items.Country}) 
    
    
    
//      )
//     //console.log(users),
//    // this.setState({Country:users.Countries.Country})



//   )



this.state={
  Country:[{
    Country:''
    
    
    
    }
    ],
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
count:''
}



}


componentDidMount() {

  fetch('https://api.covid19api.com/summary').then(response=>response.json())
  .then(users=> 
  
    //this.setState({Country:users.Countries.Country})   , 
  //  console.log(this.state.Country)

//    users.Countries.map(items=>
// //  //console.log(items)
//      world.push(items)
// //     //   this.setState({TotalConfirmed1:users.Global.NewConfirmed}),
// //     // this.setState({TotalDeaths1:users.Global.TotalDeaths}),
// //     // this.setState({TotalRecovered1:users.Global.TotalRecovered})
    
// //    // this.setState({Country:items.Country}) 
    
    
    
//     )
    users.Countries.map(items=>

    
      // //  //console.log(items)
          world.push(
            items.Country
      
      
      
      )




    //console.log(users),
   // this.setState({Country:users.Countries.Country})

    )

  )

  this.setState({
    Country: world
})


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


    ),
  //  users.Countries.map(items=>
    
  //   ),
    //this.setState({Country:users}),
    
    //console.log(Country),
    
    
  

    
        );
    
    
  
    
    }










render(){

  const{Country}=this.state;
  
  console.log(Country);

return(
  world.map(items=>
  <Allcountries countries={countries}world1={items} />






)

);


}


















}


export default Countries;