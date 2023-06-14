import React from "react";

const Editor =({content, handleTextareaChange})=>{

  
    return(
      <textarea id="editor" value={content} onChange={handleTextareaChange}></textarea>
    );
  };

  export default Editor;