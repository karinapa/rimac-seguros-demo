import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Redirect, useHistory } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const history = useHistory();
  const [dates, setDates] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [typedocument, setTypeDocument] = useState("1");

  const currencies = [
    {
      value: "1",
      label: "DNI",
    },
    {
      value: "2",
      label: "C.E.",
    },
  ];
  const [state, setState] = useState({
    politica1: false,
    politica2: false,
  });

  const { politica1, politica2 } = state;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const err = [politica1, politica2].filter((v) => v).length !== 2;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    if (dates && document && phone && typedocument) {
      history.push("/steps", { from: "HomePage" });
    }
  };
  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-field-group doc">
          <TextField
            id="outlined-select-currency"
            select
            label=""
            helperText=""
            variant="outlined"
            name="documentSelected"
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            value={typedocument}
            onChange={(e) => setTypeDocument(e.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="Nro. de documento"
            aria-describedby="basic-addon1"
            type="text"
            name="DNI"
            className=""
            id="numDocumento2"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
            label="Nro. de documento"
            variant="outlined"
          />
        </div>

        <div className="input-field">
          <TextField
            placeholder="fecha de nacimiento"
            aria-describedby="basic-addon1"
            type="date"
            name="fecha"
            className=""
            id="fecha"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            label="fecha de nacimiento"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="input-field">
          <TextField
            placeholder="Celular"
            className=" "
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Celular"
            variant="outlined"
          />
        </div>
        <span className="show-error"></span>

        <FormControl required error={err} component="fieldset">
          <FormGroup className="checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  checked={politica1}
                  onChange={handleChange}
                  name="politica1"
                />
              }
              label="Acepto la Política de Protección de Datos Personales y los Términos y
              Condiciones"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={politica2}
                  onChange={handleChange}
                  name="politica2"
                />
              }
              label="Debe confirmar los términos y condiciones"
            />
          </FormGroup>
          <FormHelperText>{err}</FormHelperText>
        </FormControl>
        <div className="two-tbn text-center">
          <button className="btn__primary large">COMENCEMOS</button>
        </div>
      </form>
      Campos obligatorios
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
