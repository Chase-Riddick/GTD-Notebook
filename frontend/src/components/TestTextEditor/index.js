import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function TestTextEditor () {
  const [state, setState] = useState({ value: null });

  const handleChange = value => {
    setState({ value });
  };

    const onSubmit = (data) => {
      console.log(data);
    };


    return (
      <div className="text-editor">
          <h2>Hello</h2>
          <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        // modules={modules}
        // formats={formats}
      />

        <input type="submit"
        // onClick={}
        />
      </div>
    );
  };