    import React, { useState } from 'react'
    import Profile from './Profile';
    import Interest from './Interest';
    import Settings from './Settings';
    const Form = () => {
      const [data , setData] = useState({
        name:"",
        email:"",
        age:"",
        interest:[],
        theme:""
      })
      const [isActive , setIsActivate]=useState(0);
      const tabs = [
        {
          title:'Profile',
          component:Profile,
          index:'0'
        },
        {
          title:'Interest',
          component:Interest,
          index:'1'
        },
        {
          title:'Settings',
          component:Settings,
          index:'2'
        }
      ]
     
      let ActiveComponent = tabs[isActive].component;
      return (
        <div>
          <div className='tab-container'>{tabs.map((tab,index)=><span className='tabs' key={tab.index} onClick={()=>setIsActivate(index)}>{tab.title}</span>)}</div>
          <div className='form-container '><ActiveComponent data ={data}  setData = {setData}/></div>
        </div>
      )
    }
    
    export default Form