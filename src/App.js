import React from 'react';
import Editor from './Editor';
import './App.css';
import { useState } from 'react';
import Previewer from './Previewer';
import defaultContent from './defaultContent';


const App = () => {
  const [content, setContent] = useState(defaultContent);

  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  );
};

export default App;
