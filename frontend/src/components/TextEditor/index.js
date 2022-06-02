import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function TextEditor ({content, setContent}) {
  const handleChange = value => {
    setContent(value );
}
    return (
      <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    placeholder={"What's on you mind?..."}
                    className="text-editor"
                    // modules={modules}
                    // formats={formats}
                />
    );
  };