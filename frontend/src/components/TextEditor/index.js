import React, { useState, useCallback } from "react"
import { Editor, EditorState, RichUtils } from "draft-js"
import '../../css/TextEditor.css';

export default function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const handleKeyCommand = useCallback((command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command)
      if (newState) {
        setEditorState(newState)
        return "handled"
      }
      return "not-handled"
    })

    const onBoldClick = useCallback(() => {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
    })

    const onUnderlineClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"))
      })

    const onItalicClick = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
    })

    const onCodeClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"))
        })

    return (
      <div className="root">
            <button onClick={onUnderlineClick}>U</button>
            <button onClick={onBoldClick}><b>B</b></button>
            <button onClick={onItalicClick}><em>I</em></button>
            <button onClick={onCodeClick}>C</button>
            <Editor
            className="editor"
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="Enter some text..."
            onChange={setEditorState}
            />
      </div>
    )
  }
