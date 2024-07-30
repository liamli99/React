import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy value
  const [text, setText] = useState('');
  // truthy value
  const [name, setName] = useState('Liam');

  const example = text || 'hello world';

  return (
    <div>
      {/* 'hello world' */}
      <h4>Falsy OR : {text || 'hello world'}</h4> 
      {/* Nothing */}
      <h4>Falsy AND : {text && 'hello world'}</h4>
      {/* 'Liam' */}
      <h4>Truthy OR : {name || 'hello world'}</h4>
      {/* 'hello world' */}
      <h4>Truthy AND : {name && 'hello world'}</h4>

      {example}
    </div>
  );
};
export default ShortCircuitOverview;
