export default function SystemOverview() {
  return (
    <section className="jp-overview" aria-label="Resumen del sistema">
      <div className="jp-orbit-stage" aria-hidden="true">
        <div className="jp-orbit jp-orbit-one">
          <span />
        </div>
        <div className="jp-orbit jp-orbit-two">
          <span />
        </div>
        <div className="jp-orbit jp-orbit-three" />
        <div className="jp-core">
          <div className="jp-core-inner">J</div>
        </div>
        <span className="jp-orbit-label jp-label-one">CREATIVE</span>
        <span className="jp-orbit-label jp-label-two">TECHNOLOGY</span>
        <span className="jp-orbit-label jp-label-three">SYSTEMS</span>
      </div>

      <div className="jp-overview-copy">
        <span className="jp-kicker">OPERATOR PROFILE</span>
        <h2>Johann Orjuela</h2>
        <p>
          Creador multidisciplinario explorando software, automatización,
          videojuegos, música e infraestructura.
        </p>
      </div>

      <div className="jp-overview-stats" aria-label="Estado de módulos">
        <div>
          <span>MODULES</span>
          <strong>05</strong>
        </div>
        <div>
          <span>STATUS</span>
          <strong>ONLINE</strong>
        </div>
        <div>
          <span>MODE</span>
          <strong>BUILD</strong>
        </div>
      </div>
    </section>
  );
}
