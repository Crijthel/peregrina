import { useForm, ValidationError } from "@formspree/react";
import "./Form.scss";
//import CircularProgress from "@mui/material/CircularProgress";

const Formw =()=> {
  const [state, handleSubmit] = useForm("mayvjrba");
  //console.log("state", state);

  return (
    <div className="form">
      {state.succeeded === true && state.submitting === false ? (
        <p className="message">Soon I will be in touch, Thanks!</p>
      ) : (
        ""
      )}

      {state.submitting === true ? (
<h1>carganding</h1>
       // <CircularProgress color="secondary" />
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">Send an email!</label>
          <input
            id="email"
            type="email"
            name="email"
            className="mail"
            placeholder="Your Email Address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="button"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
export default Formw;