import React,{useState} from 'react'


const SignIn = ({loadUser, onRouteChange}) => {
  const [signInEmail, setsignInEmail] = useState('');
  const [signInPassword, setsignInPassword] = useState('');
  
  const onSubmitSignIn =  () => {
     fetch('https://intense-inlet-71380.herokuapp.com/signin',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         email:signInEmail,
         password:signInPassword
       })
     })
    .then(response =>response.json())
    .then(user =>{
         if(user.email){
          loadUser(user);
         onRouteChange('home')
         }else{
           alert('wrong credentials')
         }})
    .catch(err=>{console.log(err,'cant loginn')})
   } 
  return (
        <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={(e)=>setsignInEmail(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input  onChange={(e)=>setsignInPassword(e.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={()=>onSubmitSignIn()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in"/>
         </div>
          <div className="lh-copy mt3">
            <p onClick={()=>onRouteChange('register')} style={{cursor:'pointer'}} className="f6 link dim black db">Register</p>
          </div>
        </form>
      </main>
      </article>
    )
}

export default SignIn
