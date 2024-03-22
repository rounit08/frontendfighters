import { useState } from "react";
import "../App.css";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder">
          <span onClick={handleExpand}>📁{explorer.name}</span>
          <div>
            <button>Folder +</button>
            <button>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            // return <span>{exp.name}</span>;
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
}

export default Folder;
