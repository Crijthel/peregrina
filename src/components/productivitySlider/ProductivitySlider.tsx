import React, { useRef, useState, useEffect, useCallback } from "react";
import "./ProductivitySlider.scss";  
import tratamiento from "../../assets/proyectos/tratamiento/Guadalupe Novas - Final - Tratamiento 2.png";
import tratamientoHover from "../../assets/proyectos/tratamiento/ilustraciones.gif";
import tresd from "../../assets/proyectos/3d/video_auto_00031.png";
import tresdHover from "../../assets/proyectos/3d/tresd.gif";
import ilustraciones from "../../assets/proyectos/ilustraciones/cami.avif";
import ilustracionesHover from "../../assets/proyectos/ilustraciones/ilustraciones.gif";
import motion from "../../assets/proyectos/motion-g/15sMotionGraphicsAbasto_00072.png";
import motionHover from "../../assets/proyectos/motion-g/motion.gif";
import vfx from "../../assets/proyectos/vfx/ejemplo4.jpg";
import vfxHover from "../../assets/proyectos/vfx/vfx.gif";
import { useNavigate } from 'react-router-dom';
const initialCardsData = [
    {
        title: "Tratamiento de imágenes",
        desc: "Mejorar su calidad visual o adaptarlas a necesidades específicas.",
        bgSrc: tratamiento,
        thumbSrc: tratamientoHover,
        link: "tratamiento-de-imagenes",
    },
    {
        title: "Motion Graphics",
        desc: "Movimiento a elementos gráficos.",
        bgSrc: motion,
        thumbSrc: motionHover,
        link: "motion-graphics",
    },
    {
        title: "Ilustraciones",
        desc: "Hechos con todo tipo de herramientas digitales y dispositivos electrónicos.",
        bgSrc: ilustraciones,
        thumbSrc: ilustracionesHover,
        link: "ilustraciones",
    },
    {
        title: "VFX",
        desc: "Efectos especiales personalizados a tu necesidad.",
        bgSrc: vfx,
        thumbSrc: vfxHover,
        link: "vfx",
    },
    {
        title: "3D",
        desc: "¿Por qué quedarse en 2D?",
        bgSrc: tresd,
        thumbSrc: tresdHover,
        link: "3d",
    },
];

const ProductivitySlider = () => {
    const trackRef = useRef(null);
    const cardsRef: any = useRef([]);
    const wrapRef = useRef(null);  
    const [current, setCurrent] = useState(0);
    const isMobile = () => window.matchMedia("(max-width:767px)").matches;
    const cardsLength = initialCardsData.length;
  const navigate = useNavigate();
    const centerCard = useCallback((index: any) => {
        if (!wrapRef.current || !cardsRef.current[index]) return;

        const card: any = cardsRef.current[index];
        const wrap: any = wrapRef.current;

        const mobile = isMobile();
        const axis = mobile ? "top" : "left";
        const sizeProp = mobile ? "clientHeight" : "clientWidth";
        const start = mobile ? card.offsetTop : card.offsetLeft;

        wrap.scrollTo({
            [axis]: start - (wrap[sizeProp] / 2 - card[sizeProp] / 2),
            behavior: "smooth",
        });
    }, []);
 
    const activate = useCallback(
        (index: any, scroll = false) => {
            if (index === current) return;

            const newIndex = Math.min(Math.max(index, 0), cardsLength - 1);
            setCurrent(newIndex);
            if (scroll) centerCard(newIndex);
        },
        [current, cardsLength, centerCard]
    ); 
    const go = (step: any) => {
        const newIndex = current + step;
        activate(newIndex, true);
    };
 
    useEffect(() => {
        centerCard(current);

        const handleResize = () => centerCard(current);
        window.addEventListener("resize", handleResize);
 
        return () => window.removeEventListener("resize", handleResize);
    }, [centerCard, current]);
 
    useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
            if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);  
    useEffect(() => {
        if (!trackRef.current) return;
        let sx = 0;
        let sy = 0;

        const handleTouchStart = (e: any) => {
            sx = e.touches[0].clientX;
            sy = e.touches[0].clientY;
        };
        const handleTouchEnd = (e: any) => {
            const dx = e.changedTouches[0].clientX - sx;
            const dy = e.changedTouches[0].clientY - sy;
            const mobile = isMobile();

            if (mobile ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
                go((mobile ? dy : dx) > 0 ? -1 : 1);
            }
        };

        const trackElement: any = trackRef.current;
        trackElement.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        trackElement.addEventListener("touchend", handleTouchEnd, {
            passive: true,
        });

        return () => {
            trackElement.removeEventListener("touchstart", handleTouchStart);
            trackElement.removeEventListener("touchend", handleTouchEnd);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <div className="slider" ref={wrapRef}>
                <div className="track" id="track" ref={trackRef}>
                    {initialCardsData.map((card, index) => (
                        <article
                            key={index}
                            className="project-card"
                            data-active={current === index ? "true" : undefined}
                            ref={(el: HTMLElement | null) => {
                                cardsRef.current[index] = el;
                            }}
                            onClick={() => activate(index, true)}
                            onMouseEnter={() =>
                                window.matchMedia("(hover:hover)").matches &&
                                activate(index, true)
                            }
                        >
                            <img
                                className="project-card__bg"
                                src={card.bgSrc}
                                alt=""
                            />
                            <div className="project-card__content">
                                {current === index && ( 
                                    <>
                                        <img
                                            className="project-card__thumb"
                                            src={card.thumbSrc}
                                            alt=""
                                        />
                                        <div>
                                            <h3 className="project-card__title">
                                                {card.title}
                                            </h3>
                                            <p className="project-card__desc">
                                                {card.desc}
                                            </p>
                                            <button className="project-card__btn" onClick={()=>navigate("portfolio/" +
                                                        card.link)}>
                                               
                                                    Ver más
                                               
                                            </button>
                                        </div>
                                    </>
                                )}
                                {current !== index && ( 
                                    <h3 className="project-card__title">
                                        {card.title}
                                    </h3>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="dots" id="dots">
                {initialCardsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${current === index ? "active" : ""}`}
                        onClick={() => activate(index, true)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default ProductivitySlider;
