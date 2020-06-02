import React from 'react' ;


const Allcountries =({world1,countries})=>(



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

</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalDeaths</h1>

</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalRecovered</h1>

</div>
</div>
</div>



<div className='directory-menu'>

<div className='menu-item' >


<div className='bar'>
<label htmlFor="cars">Choose a Country:</label>

 <select   className='dropdown' id="cars"   >

 {countries.map((team) => <option key={team.value} value={team.value}>{team.value}</option>)}

 </select> 
 </div>

 <div></div>
<div className='bar'>
<table className='tableborder'>
    <tbody>
  <tr>
    <th>Confirmed Cases:</th>
  
    </tr>
   <tr><th>NewConfirmed:</th><td></td></tr>
  <tr>
    <th>NewDeaths:</th>
<td></td>
   </tr>
  <tr>
    <th>TotalDeaths:</th>
<td></td>
   </tr>
  <tr>
    <th>NewRecovered:</th>
<td></td>
   </tr>
  <tr>
    <th>TotalRecovered:</th>
<td></td>
    </tr>
  </tbody>
  </table>
  </div>
</div>
</div>


<div className='directory-menu'>
<div className='menu-item'>

<table className='table'>
<tbody>
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
  <tr><td>{world1}
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

 











);



export default Allcountries;