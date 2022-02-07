import { useState } from 'react';
import './index.css';


function App() {
  const [result,setResult]=useState('');
const btnClick=(event)=>{
  setResult(result.concat(event.target.value));
}
const Calculate=()=>{
  setResult(eval(result));
}
const Wipeout=()=>{
  setResult('');
}
const backSlash=()=>{
  var str='';
  var len=result.length;
  for(var i=0;i<len-1;i++){
    str+=result.charAt(i);
  }
    setResult(str);
}
  return (

 <div className="calculator">
 <h1>My Calculator</h1>
 <div className="fields">
 <input type="text" placeholder='0' value={result}/> 
 <div>
<input type="button" value="AC" id='orange' onClick={Wipeout}/>
<input type="button" value="←" id='orange' onClick={backSlash}/>
<input type="button" value="%" id='orange' onClick={btnClick}/>
<input type="button" value="/" id='orange' onClick={btnClick}/>
</div> 
<div>
<input type="button" value="7" onClick={btnClick}/>
<input type="button" value="8" onClick={btnClick}/>
<input type="button" value="9" onClick={btnClick}/>
<input type="button" value="*" id='orange' onClick={btnClick}/>
</div>
<div>
<input type="button" value="4" onClick={btnClick}/>
<input type="button" value="5" onClick={btnClick}/>
<input type="button" value="6" onClick={btnClick}/>
<input type="button" value="-" id='orange'onClick={btnClick}/>
</div>
<div>
<input type="button" value="1" onClick={btnClick}/>
<input type="button" value="2" onClick={btnClick}/>
<input type="button" value="3" onClick={btnClick}/>
<input type="button" value="+" id='orange' onClick={btnClick}/>
</div>
<div>
<input type="button" value="0" onClick={btnClick}/>
<input type="button" value="." onClick={btnClick}/>
<input type="button" value="=" id='equalBtn' onClick={Calculate}/>
</div>
</div>
 </div>
  );
}

export default App;
