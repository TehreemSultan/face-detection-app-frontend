 import React,{useState} from 'react'

const SignIn = ({loadUser,onRouteChange}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');

  
  const onSubmitRegister =  () => {
    fetch('https://intense-inlet-71380.herokuapp.com/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:email,
        password:password,
        name:name
      })
    })
   .then(response => response.json())
   .then(user =>{
        if(user.email){
          loadUser(user);
        onRouteChange('home');
        }})
  } 

    return (
        <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={(e)=>setname(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={(e)=>setemail(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={(e)=>setpassword(e.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={()=>onSubmitRegister()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register"/>
         </div>
         <div></div>
        </form>
      </main>
      </article>
    )
}

export default SignIn
