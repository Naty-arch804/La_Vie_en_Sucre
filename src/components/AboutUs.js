import React from 'react';
import PostreImage from '../assets/Sobrenosotros.jpg';
import './AboutUs.css'; 


function AboutUs() {
    return (
        <section style={styles.container}>
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Sobre Nosotros</h1>
            <p style={styles.description}>
              En <strong>Le Vie en Sucre</strong>, somos un equipo apasionado por
              la repostería gourmet. Nos dedicamos a crear postres artesanales con
              ingredientes frescos y de la más alta calidad. Cada uno de nuestros
              productos está hecho con amor y dedicación, buscando siempre ofrecerte
              una experiencia única y deliciosa.
            </p>
            <p style={styles.description}>
              Nos inspira la belleza en lo simple, por eso nuestro enfoque es
              minimalista y sofisticado, con un diseño elegante y clásico que
              refleja nuestra pasión por lo refinado. Queremos que cada bocado
              transporte a nuestros clientes a un mundo de sabores inigualables.
            </p>
    
            <div style={styles.missionVisionContainer}>
              <h2 style={styles.subTitle}>Nuestra Misión</h2>
              <p style={styles.missionVisionText}>
                Nuestra misión es crear postres de alta calidad, elaborados con los
                mejores ingredientes, para ofrecer a nuestros clientes una experiencia
                culinaria única que los haga regresar una y otra vez. Queremos
                endulzar sus momentos especiales y convertirnos en la opción favorita
                en repostería gourmet.
              </p>
            </div>
    
            <div style={styles.missionVisionContainer}>
              <h2 style={styles.subTitle}>Nuestra Visión</h2>
              <p style={styles.missionVisionText}>
                Ser la repostería gourmet líder en el mercado, reconocida por
                nuestra calidad, innovación y compromiso con nuestros clientes. Nos
                esforzamos por ser un referente en la industria de la repostería,
                llevando la dulzura y el sabor a cada rincón del país.
              </p>
            </div>
          </div>
          <div style={styles.imageContainer}>
        <img src={PostreImage} alt="Le Vie en Sucre" style={styles.image}/>
      </div>
        </section>
      );
    }
    
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: '#f4f4f4',
        color: '#2c3e50',
      },
      textContainer: {
        flex: 1,
        maxWidth: '600px',
        textAlign: 'left',
        marginRight: '40px',
      },
      title: {
        fontSize: '36px',
        fontWeight: '600',
        color: '#030A8C', 
        marginBottom: '20px',
        textTransform: 'uppercase',
      },
      description: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '20px',
      },
      missionVisionContainer: {
        marginBottom: '30px',
      },
      subTitle: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#030A8C',
        marginBottom: '10px',
        textTransform: 'uppercase',
      },
      missionVisionText: {
        fontSize: '18px',
        color: '#333',
        lineHeight: '1.6',
      },
      imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      },
      image: {
        maxWidth: '80%',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    };
    
    export default AboutUs;