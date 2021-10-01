import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Title = (props) => {

  const [title, setTitle] = useState("")
  useDocumentTitle(title);

  return (
    <div>
      <h1>Title Component</h1>
      <input
       value={title}
       onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  )

}

export default Title;