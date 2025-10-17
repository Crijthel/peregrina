import { useForm, ValidationError } from "@formspree/react";
import "./Form.scss";
import CircularProgress from "@mui/material/CircularProgress";

const Formw = () => {
    const [state, handleSubmit] = useForm("manpbrpe");
    //console.log("state", state);

    return (
        <div className="form">  
        <h1 className="title">Contacto</h1>
            {state.succeeded === true && state.submitting === false && (
                <p className="message">Pronto nos pondremos en contacto.</p>
            )}

            {state.submitting === true ? (
                <CircularProgress color="secondary" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="mail"
                        placeholder="Mail de contacto"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        className="textarea"
                        placeholder="Coméntanos tu idea y lo hacemos realidad."
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
};
export default Formw;
