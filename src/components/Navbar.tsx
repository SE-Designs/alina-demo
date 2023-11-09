import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function Navbar() {
  const [value, setValue] = useState("");
  return (
    <nav>
      <h1>header</h1>
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <div className="card flex justify-content-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </nav>
  );
}

export default Navbar;
