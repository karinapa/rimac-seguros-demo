import { useState } from "react";

interface ChildProps {
  onTrigger: () => void;
  onBack: () => void;
}

const Step3: React.FC<ChildProps> = ({ onTrigger, onBack }) => {

  return (
    <div className="col right w100">
      <div className="headermobile">
        <div className="headermobile__title">
          <div className="headermobile__text title">
          <div className="text-right">
            <img src="img/Recurso.png" alt="" className=""/>
          </div>
            <h2>
            ¡Gracias por<b> confiar en nosotros!</b>{" "}
              <p>Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.</p>
              <div className="text-right">
                <button className="btn__primary btn-left">
                  IR A SALUD RIMAC <i></i>
                </button>
              </div>
               
            </h2>
          </div>
        </div>
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default Step3;

