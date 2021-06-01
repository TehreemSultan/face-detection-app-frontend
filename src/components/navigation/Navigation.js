import React from 'react'

const Navigation = ({onRouteChange,route}) => {
    return (
            route==='home'?
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signin')} 
            className='f3 link din black underline p3 pointer mr3'>Sign Out</p>
            </nav>
            :
            <div>
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signin')} 
            className='f3 link din black underline p3 pointer'>Sign In</p>
            <p className='f3 link din black p3'>/</p>
            <p onClick={()=>onRouteChange('register')} 
            className='f3 link din black underline p3 pointer mr3'>Register</p>
            </nav>
            </div>
        
            
        
       
    )
}

export default Navigation
