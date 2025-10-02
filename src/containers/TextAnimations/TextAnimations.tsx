import "./TextAnimations.scss";
const TextAnimations = () => {
    return (
        <div className="text-a-container">
            <div className="espacio"></div>

            <div className="textos-container">
                <div className="split-text-container uno">
                    <span className="text-part left">Somos</span>
                    <span className="text-part right">curiosidad</span>
                </div>
                <div className="split-text-container-dos">
                    <span className="text-part left">Somos</span>
                    <span className="text-part right">aventura</span>
                </div>
                <div className="split-text-container tres">
                    <span className="text-part left">Somos</span>
                    <span className="text-part right">PEREGRINA</span>
                </div>
            </div>
        </div>
    );
};

export default TextAnimations;
