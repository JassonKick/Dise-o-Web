import React from 'react'
import styles from './Home.module.css'


const Home = () => {

    return (
        <div className={styles.home}>
            <section>
                <div id="carouselExampleCaptions" className="carousel slide" style={{paddingTop:"100px"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label=">lide "></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide "></button>
                    </div>
                    <div className="carousel-inner " style={{height:"500px",padding:"50px"}}>
                        <div className="carousel-item active">
                            <img src={require('../assets/AMD_Ryzen_7_5800X.png')} className="roynded mx-auto d-flex" style={{height:"298px", width:"298px"}}/>
                            <div className="corousel-caption d-2">
                                <h4 style={{color:"#000"}}>PROXIMAMENTE</h4>
                                <p style={{color:"#000"}}>AMD Ryzen 7 5800X <br/> 8 núcleos / 16 hilos <br/> [100-100000063WOF] </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src={require('../assets/Radeon.png')} className="roynded mx-auto d-flex" style={{height:"300px", width:"300px"}}/>
                            <div className="corousel-caption d-2">
                                <h4 style={{color:"#000"}}>PROXIMAMENTE</h4>
                                <p style={{color:"#000"}}>Yeston RX7900XT-20GD6 <br/> AMD Radeon RX 7900 XT</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src={require('../assets/MSI TOMAHAWK.png')} className="roynded mx-auto d-block" style={{height:"300px", width:"300px"}}/>
                            <div className="corousel-caption d-2">
                                <h4 style={{color:"#000"}}>PROXIMAMENTE</h4>
                                <p style={{color:"#000"}}>MSI MAG B550 TOMAHAWK <br/> AMD B550 (AM4) <br/> AM4</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </section>
            <section className="container" >
                <div className={styles.contenedor}>
                    <div className={styles.contenedoritems}>
                        <div className={styles.items}>
                            <p className={styles.tituloitem}>AMD Ryzen 5 5600X</p>
                            <img className={styles.imgitem} src={require("../assets/AMD_Ryzen_5_5600x.png")} ></img>
                            <span className={styles.precioitem}>$157.789</span>
                            <button className={styles.botonitem}>Agregar al carrito</button>
                        </div>
                        <div class={styles.items}>
                            <p className={styles.tituloitem}>LG UltraGear 24GN60R-B</p>
                            <img className={styles.imgitem} src={require("../assets/LG_ultra.png")} ></img>
                            <span className={styles.precioitem}>$205.290</span>
                            <button className={styles.botonitem}>Agregar al carrito</button>
                        </div>
                        <div class={styles.items}>
                            <p className={styles.tituloitem}>Apple MacBook Pro 16 2023</p>
                            <img className={styles.imgitem} src={require("../assets/MacBook-Pro-16-8.png")} ></img>
                            <span className={styles.precioitem}>$2.882.764</span>
                            <button className={styles.botonitem}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
}
/*<footer className="bg-black">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-black">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width:"200px",marginLeft:"100px",color:"#fff", backgroundColor:"#000"}}>Atención al cliente</button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Preguntas frecuentes</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p><br/>¿Cuánto se demoran en llevar los productos?<br/>
                                        Los productos se demoran entre 5 a 7 dias habiles, dependiendo de la distancia.<br/>
                                        <br/>¿Cómo se hacen los cambios?<br/>
                                        Los cambios se efectúan a través del mismo medio en el cual llego, solo se efectúan cambios por NO FUNCIONAMIENTO del producto.<br/>
                                        <br/>¿Cómo se puede retirar el producto?<br/>
                                        Por el momento solo contamos con tienda online, esperamos próximamente contar con una tienda física<br/>
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto d-inline-block" style={{width:"200px"}}>
                        <div className="text-center">
                            <img className="logo2" src={require("../assets/Logo.png")} style={{width:"300", height:"100px", marginLeft:"-50px",borderRadius:"80%"}} />
                        </div>
                        <div className="Telefono" style={{width:"100px",marginLeft:"200px"}}>
                            <img src={require("../assets/telefono1.jpg")} style={{height:"35px",width:"35px",marginLeft:"-200px"}}/>
                            <p>+56956764090</p>
                        </div>
                    </div>
                </nav>
            </footer>*/
export default Home
