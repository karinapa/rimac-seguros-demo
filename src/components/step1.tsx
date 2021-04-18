import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);


interface ChildProps {
  onTrigger: () => void
}

const Step1: React.FC<ChildProps> = ({onTrigger}) => {
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedValue2, setSelectedValue2] = useState("s");
  const history = useHistory();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue2(event.target.value);
  };

  const [typedocument, setTypeDocument] = useState("1");
  const [document, setDocument] = useState("");
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

  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [lastnameMother, setLastnameMother] = useState("");
  const [lastnamefather, setLastnameFather] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //history.push("/steps2", { from: "HomePage" });
    
  };

  return (
    <div className="col right w100">
      <div className="headermobile">
        <div className="headermobile__title">
          <div className="breadcrumb">
            <a className="back" href="/comprar/seguro-salud">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.5"
                  transform="rotate(-180 12 12)"
                  stroke="#FF888D"
                ></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3789 15.1772C13.5366 15.3449 13.5402 15.609 13.3902 15.7813C13.3089 15.8745 13.1928 15.9284 13.0697 15.9284C12.953 15.9284 12.8419 15.88 12.7609 15.7941L9.62135 12.5226C9.54071 12.4369 9.5 12.3246 9.5 12.2141C9.5 12.1034 9.54048 11.9915 9.62113 11.9058L12.7605 8.63451C12.9349 8.44943 13.2246 8.45673 13.3901 8.64681C13.5402 8.81913 13.5366 9.08324 13.3789 9.25095L10.5292 12.2141L13.3789 15.1772Z"
                  fill="#EF3340"
                ></path>
              </svg>
            </a>
            <strong>
              <span>Paso </span>1
            </strong>{" "}
            de 7
          </div>
          <div className="headermobile__text title">
            <h2>
              Hola,<b> Karina</b> <p>Valida que los datos sean correctos.</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="right__content">
      <form onSubmit = {onTrigger}>
          <div className="insured-data col w100">
            <div className="col insured-data__form">
              <div className="col cardinsured w100">
                <div className="col cardinsured__data">
                  <h3 className="cardinsured__data--name">
                    Datos personales del titular
                  </h3>
                </div>
              </div>
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
                  placeholder="Nombres"
                  aria-describedby="basic-addon1"
                  type="text"
                  name="fecha"
                  className=""
                  id="fecha"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Nombres"
                  variant="outlined"
                />
              </div>
              <div className="input-field">
                <TextField
                  placeholder="Apellido Paterno"
                  aria-describedby="basic-addon1"
                  type="text"
                  name="fecha"
                  className=""
                  id="fecha"
                  value={lastnamefather}
                  onChange={(e) => setLastnameFather(e.target.value)}
                  label="Apellido Paterno"
                  variant="outlined"
                />
              </div>
              <div className="input-field">
                <TextField
                  placeholder="Apellido Materno"
                  aria-describedby="basic-addon1"
                  type="text"
                  name="fecha"
                  className=""
                  id="fecha"
                  value={lastnameMother}
                  onChange={(e) => setLastnameMother(e.target.value)}
                  label="Apellido Materno"
                  variant="outlined"
                />
              </div>
              <div className="input-field">
                <TextField
                  placeholder="Fecha de Nacimiento"
                  aria-describedby="basic-addon1"
                  type="text"
                  name="fecha"
                  className=""
                  id="fecha"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  label="Fecha de Nacimiento"
                  variant="outlined"
                />
              </div>
              <span className="show-error"></span>
              <div className="title w100 gender">
                <h4 className="title__subtitle">Género</h4>
              </div>
              <div>
                <RadioGroup
                  defaultValue="female"
                  aria-label="gender"
                  name="customized-radios"
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <GreenRadio
                        checked={selectedValue === "f"}
                        onChange={handleChange}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "F" }}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <GreenRadio
                        checked={selectedValue === "c"}
                        onChange={handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "C" }}
                      />
                    }
                    label="Male"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className="col insured-data__choose w100">
              <div className="title w100">
                <h4 className="title__subtitle">¿A quién vamos a asegurar?</h4>
              </div>
              <RadioGroup
                defaultValue=""
                aria-label="gender"
                name="customized-radios2"
              >
                <FormControlLabel
                  value="solo"
                  control={
                    <GreenRadio
                      checked={selectedValue2 === "s"}
                      onChange={handleChange2}
                      value="s"
                      name="radio-button-demo2"
                      inputProps={{ "aria-label": "S" }}
                    />
                  }
                  label="Solo a mí"
                />
                <FormControlLabel
                  value="ami"
                  control={
                    <GreenRadio
                      checked={selectedValue2 === "a"}
                      onChange={handleChange2}
                      value="a"
                      name="radio-button-demo2"
                      inputProps={{ "aria-label": "A" }}
                    />
                  }
                  label="A mí y a mi familia"
                />
              </RadioGroup>
            </div>
            <div className="col btn">
              <button className="btn__primary btn-right">
                CONTINUAR <i></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
