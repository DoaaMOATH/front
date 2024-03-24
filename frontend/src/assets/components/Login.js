import React from 'react';
import pa from './pa.png'
import col from './col.png'
export default function Login() {
  return (
    <><div style={{ position: 'absolute', bottom: 90, width: '100%', textAlign: 'right' ,marginTop: '170px'}}>
      <form style={{ display: 'inline-block', textAlign: 'right' }}>
      <img style={{width: 48, height: 48, float: 'left', marginRight: '10px'}} src={col}/>
 <div style={{width: 149.17, height: 48, paddingRight: 190.17, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
 <h2 style={{ textAlign: 'left', color: '#1A1A1A', fontSize: 20, fontFamily: 'Alatsi', marginBottom: '16px' }}>UI Unicorn</h2>
</div>
        <p style={{ textAlign: 'left',color: '#1A1A1A', fontSize: 20, fontFamily: 'Alatsi',  }}>Nice to see you again</p>
        <h3 style={{ textAlign: 'left', color: '#333333', fontSize: 13, fontFamily: 'ABeeZee', fontWeight: '400',  letterSpacing: 0.30}}>log in</h3>
        <input type='email' className='form-control' placeholder=' Enter email' style={{ width: 360, height: 48, paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 8, borderRadius: 6, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', alignSelf: 'stretch', padding: 5, background: '#E5E5E5', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex',border: 'none' , marginleft: '80px', marginRight: '26px'}} />
        <br />
        <br />
        <h3 style={{ textAlign: 'left', color: '#333333', fontSize: 13, fontFamily: 'ABeeZee', fontWeight: '400',  letterSpacing: 0.30}}>password</h3>
        <input type='password' className='form-control' placeholder=' Enter password' style={{ width: 360, height: 48, paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 8, borderRadius: 6, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', alignSelf: 'stretch', padding: 5, background: '#E5E5E5', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' ,border: 'none', marginleft: '80px', marginRight: '26px'}} />
        <br />
        <div style={{textAlign: 'left', color: '#007AFF', fontSize: 12, fontFamily: 'ABeeZee', fontWeight: '400', lineHeight: 2, letterSpacing: 0.30, wordWrap: 'break-word'}}>forgot password?</div>
        <br />
        <button style={{ width: 360, height: 40, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, background: '#007AFF', borderRadius: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'ABeeZee', fontWeight: '400', lineHeight: 20, letterSpacing: 0.30,marginleft: '80px', marginRight: '26px', wordWrap: 'break-word' ,border: 'none', }}>sign in</button>
        <br/>
        <div style={{width: 195, height: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'inline-flex', marginLeft: '80px', marginRight: '26px'}}>
  <div style={{color: '#1A1A1A', fontSize: 12, fontFamily: 'ABeeZee', fontWeight: '400', lineHeight: 4, letterSpacing: 0.30, wordWrap: 'break-word', textAlign: 'left'}}>Dont have an account?</div>
  <div style={{textAlign: 'right', color: '#007AFF', fontSize: 12, fontFamily: 'ABeeZee', fontWeight: '400', lineHeight: 4, letterSpacing: 0.30, wordWrap: 'break-word'}}>Sign up now</div>
</div>
      </form>
    </div><img style={{width: 845, height: 900.50,}}src={pa} /></>
  );
}