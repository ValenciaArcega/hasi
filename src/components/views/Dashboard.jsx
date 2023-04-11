import { IconMessages, IconJob, IconSkill } from '../icons/CardsWhy';

const Dashboard = () => {
  return (
    <section>

      <header className="dashboard-header">
        <h1 className="dashboard-header-h1">Diles <span className="highlightBubble-container"><span className="highlightBubble">Hola</span></span>con Hasi!
        </h1>
        <p className="dashboard-header-p">Escucha con los ojos y habla con las manos</p>
      </header>

      <h1 className="whyHS-h1">¿Porqué es importante conocer el lenguaje de señas?</h1>
      <section className="section-whyHS">

        <main className="card-reasonWhy">
          <IconMessages />
          <h2 className="card-reasonWhy-h2">Comunicación inclusiva</h2>
          <p className="card-reasonWhy-p">Con personas sordas e incluirlos en la conversación de manera efectiva</p>
        </main>

        <main className="card-reasonWhy">
          <IconJob />
          <h2 className="card-reasonWhy-h2">Oportunidades de empleo</h2>
          <p className="card-reasonWhy-p">En sectores como educación, salud, servicio al cliente y medios de comunicación</p>
        </main>

        <main className="card-reasonWhy">
          <IconSkill />
          <h2 className="card-reasonWhy-h2">Expansión de habilidades</h2>
          <p className="card-reasonWhy-p">Memoria visual y aumentar tu conciencia sobre las necesidades de accesibilidad</p>
        </main>
      </section>

      <footer>&copy; Hasi, 2023</footer>

    </section >
  );
};

export default Dashboard;
