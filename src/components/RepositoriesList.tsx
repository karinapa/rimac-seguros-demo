import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Redirect, useHistory } from "react-router-dom";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const history = useHistory();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    history.push("/pasos", { from: "HomePage" });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputGroup className="">
          <div className="input-field doc">
            <Form.Control
              as="select"
              size="lg"
              name="documentSelected"
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option value="2">DNI</option>
              <option value="4">C.E.</option>
            </Form.Control>
          </div>
          <div className="input-field num">
            <FormControl
              placeholder="fecha de nacimiento"
              aria-describedby="basic-addon1"
              type="text"
              name="fecha"
              className=""
              id="fecha"
            />
          </div>
        </InputGroup>
        <div className="input-field">
          <FormControl
            placeholder="Nro. de documento"
            aria-describedby="basic-addon1"
            type="text"
            name="DNI"
            className=""
            id="numDocumento2"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="input-field">
          <FormControl
            placeholder="Celular"
            className=" "
            type="text"
            name="phone"
            id="phone"
            value=""
          />
        </div>
        <span className="show-error"></span>
        <div className="terminos">
          <div className=" checkbox w100">
            <input type="checkbox" id="termscc" name="termscc" value="true" />
            <p>
              <label></label>
              <a className="link__check">
                {" "}
                Acepto la{" "}
                <span> Política de envío de Comunicaciones Comerciales</span>
              </a>
            </p>
          </div>
        </div>
        <div className="checkbox w100">
          <input type="checkbox" id="termslp" name="termslp" value="true" />
          <p>
            <label> </label>
            <a className="link__check">
              Acepto la{" "}
              <span>
                Política de Protección de Datos Personales y los Términos y
                Condiciones
              </span>
            </a>
          </p>
          <span className="show-error" style={{ display: "none" }}>
            Debe confirmar los términos y condiciones
          </span>
        </div>
        <div className="two-tbn text-center">
          <button className="btn__primary large">COMENCEMOS</button>
        </div>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
