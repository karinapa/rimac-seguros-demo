
interface ChildProps {
  onTrigger: () => void,
  onBack: () => void,
}

const Step2: React.FC<ChildProps> = ({onTrigger, onBack}) => {
  return (
    <div className="col right w100">
      <div className="headermobile">
        <div className="headermobile__title">
          <div className="breadcrumb">
            <a className="back"  onClick = {onBack}>
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
              Elige<b> tu protección</b> <p>Selecciona tu plan de salud ideal.</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="right__content">
      <form onSubmit = {onTrigger}>
          <div className="insured-data col w100">
            

          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
