import { useState } from "react";
import "./CardProyecto.scss";
import MyModal from "../modal/MyModal";

const CardProyecto = ({ item }: any) => {
    const [modalShow, setModalShow] = useState(false);
    const srcImg = item.imagen !== "" ? "../../../" + item.imagen : "";

    return (
        <>
            <div
                className="card-proyecto-container"
                onClick={() => setModalShow(true)}
            >
                <img
                    src={srcImg}
                    className={item.centerRight ? "centerRight" : ""}
                    alt={item.nombre}
                />
                {/* {item.nombre !== "" && <span>{item.nombre}</span>} */}
            </div>

            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
            />
        </>
    );
};

export default CardProyecto;
