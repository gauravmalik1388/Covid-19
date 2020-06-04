import React from 'react';
import 'tachyons';
import './countries.styles.scss';
import Allcountries from './Allcountries/Allcountries.component';

let check1 =[];
const Total = ({ TotalRecovered, TotalConfirmed, Countries, TotalDeaths }) => (
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
    <div class="outline w-25 pa3 mr2">
    <h2>TotalConfirmed</h2>
          <span>{TotalConfirmed}</span>
  </div>
  <div class="outline w-25 pa3 mr2">
  <h2>TotalDeaths</h2>
          <span>{TotalDeaths}</span>
  </div>
  <div class="outline w-25 pa3 mr2">
  <h2>TotalRecovered</h2>
          <span>{TotalRecovered}</span>
  </div>
</div>
</div>
<div>
<select id="types" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="">
  <option value="">All Types</option>
  
   {
 Countries.map(Country=>(
  <option value={Country.Country} >
   {Country.Country}
   </option>
  ))

   }
  
</select>
<div className='directory-menu'>
    <div className='menu-item1'></div>
</div></div>
<div className='directory-menu'>
      <div class="pa4">
        <div class="overflow-auto">
          <table class="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr class="stripe-dark">
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Country</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">TotalConfirmed</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">NewConfirmed</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">NewDeaths</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">TotalDeaths</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">NewRecovered</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">TotalRecovered</th>
              </tr>
            </thead>
            <tbody class="lh-copy">
              {
                Countries.sort((a,b) => (a.TotalConfirmed > b.TotalConfirmed) ? 1 : ((b.TotalConfirmed > a.TotalConfirmed) ? -1 : 0)).reverse().map(Country=> (
                  <tr class="stripe-dark">
                    <td class="pv3 pr3 bb b--black-20">{Country.Country}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.TotalConfirmed}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.NewConfirmed}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.NewDeaths}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.TotalDeaths}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.NewRecovered}</td>
                    <td class="pv3 pr3 bb b--black-20">{Country.TotalRecovered}</td>
                  </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>










);

export default Total;