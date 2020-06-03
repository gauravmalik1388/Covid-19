import React from 'react' ;




const Total =({TotalRecovered,TotalConfirmed,TotalDeaths})=>(
<div>
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
<span>{TotalConfirmed}</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalDeaths</h1>
<span>{TotalDeaths}</span>
</div>
</div>
<div className='menu-item1'>

<div className='content'>
<h1 className='title'>TotalRecovered</h1>
<span>{TotalRecovered}</span>
</div>
</div>
</div>




</div>




);

export default Total;