import { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Favorite from "@material-ui/icons/Favorite";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
interface ChildProps {
  onTrigger: () => void;
  onBack: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    roota: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: "right",
      color: theme.palette.text.secondary,
    },
  })
);

const Step2: React.FC<ChildProps> = ({ onTrigger, onBack }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="col right w100">
      <div className="headermobile">
        <div className="headermobile__title">
          <div className="breadcrumb">
            <a className="back" onClick={onBack}>
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
              <span>Paso </span>2
            </strong>{" "}
            de 7
          </div>
          <div className="headermobile__text title">
            <h2>
              Elige<b> tu protección</b>{" "}
              <p>Selecciona tu plan de salud ideal.</p>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit = {onTrigger}>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3} sm={3} className="radio-conteiner">
              <input
                className="radio-section-radio"
                type="radio"
                value="1"
                name="paquete"
              />
              <Paper className="radio-section">
                <span>BÁSICO</span>
                <br></br>
                <span>S/ </span>
                <span className="price">160</span>
                <br></br>
                <span>mensual</span>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3} className="radio-conteiner">
              <input
                className="radio-section-radio"
                type="radio"
                value="1"
                name="paquete"
              />
              <Paper className="radio-section">
                <span>AVANZADO</span>
                <br></br>
                <span>S/ </span>
                <span className="price">200</span>
                <br></br>
                <span>mensual</span>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3} className="radio-conteiner">
              <input
                className="radio-section-radio"
                type="radio"
                value="1"
                name="paquete"
              />
              <Paper className="radio-section">
                <span>PREMIUM</span>
                <br></br>
                <span>S/ </span>
                <span className="price">250</span>
                <br></br>
                <span>mensual</span>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={3} className="radio-conteiner">
              <input
                className="radio-section-radio"
                type="radio"
                value="1"
                name="paquete"
              />
              <Paper className="radio-section">
                <span>FULL</span>
                <br></br>
                <span>S/ </span>
                <span className="price">500</span>
                <br></br>
                <span>mensual</span>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div className="acordeon">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Tienes (3) asegurados
              </Typography>
              <Typography className={classes.secondaryHeading}>
                RESUMEN DEL PLAN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                  <Paper className={classes.paper}>Cónyuge</Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Paper className={classes.paper2}>S/ 40</Paper>
                </Grid>

                <Grid item xs={6} sm={6} className="grid-total">
                  <Paper className={classes.paper}>Cónyuge</Paper>
                </Grid>
                <Grid item xs={6} sm={6} className="grid-total">
                  <Paper className={classes.paper2}>S/ 40</Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
        <br></br>
        <div className="grid-normal">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} className="grid-title">
              <Paper className={classes.paper}>
                Cuentas con estos beneficios:
              </Paper>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Paper className={classes.paper}>
                Cobertura máxima<br></br>S/1MM<br></br>Plan básico
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper className={classes.paper2}>
                <img
                  src="./img/costo.png"
                  className="w100"
                  alt=""
                  style={{ width: "75px" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <List
                component="nav"
                className="list-special"
                aria-label="main mailbox folders"
              >
                <ListItem button className="list-active">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Lima (Zona de cobertura)" />
                </ListItem>
                <ListItem button className="list-active">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="+30 clínicas (en red afiliada)" />
                </ListItem>
                <ListItem button className="list-inactive">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Médico a domicilio" />
                </ListItem>
                <ListItem button className="list-inactive">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Chequeos preventivos" />
                </ListItem>
                <ListItem button className="list-inactive">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Reembolso nacional" />
                </ListItem>
                <ListItem button className="list-inactive">
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Reembolso internacional" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <div className="acordeon-title">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  Revisa nuestros <b>servicios y exclusiones</b>
                </h3>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paper2}>
                <img src="img/broder.png" alt="" />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                {" "}
                Servicios brindados
              </Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </div>
        <div className="col btn">
          <button className="btn__primary btn-left">
            COMPRAR PLAN <i></i>
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
