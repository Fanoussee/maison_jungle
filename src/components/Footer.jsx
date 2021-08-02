import { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function validValue() {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
    }
  }

  function setValue(e){
      setInputValue(e.target.value);
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        onBlur={validValue}
        type="email"
        name="email"
        value={inputValue}
        onChange={setValue}
      />
    </footer>
  );
}

export default Footer;
