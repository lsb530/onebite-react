import React, { useContext, useRef, useState } from 'react';
import './Editor.css'
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext)

  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    const key = e.key || e.keyCode
    if (key === 'Enter' && !e.shiftKey || key === 13 && key !== 16) {
      onSubmit()
    }
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;