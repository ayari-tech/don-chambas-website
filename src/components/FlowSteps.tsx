const STEPS = [
  {
    num: "01",
    title: "Registro WA",
    body: "Sin app. El candidato entra por WhatsApp y el agente IA le arma su perfil.",
  },
  {
    num: "02",
    title: "Perfil con IA",
    body: "Conversación de texto o voz. CV generado sin que el candidato escriba un formato.",
  },
  {
    num: "03",
    title: "Vacantes ordenadas",
    body: "Por cercanía real (transporte público a ese turno), no solo por código postal.",
  },
  {
    num: "04",
    title: "Aplicar 1-tap",
    body: "El candidato aplica en un toque. El negocio ve su ranking antes de agendar.",
  },
  {
    num: "05",
    title: "Confirmar 1-tap",
    body: "Recordatorios automáticos. Sin perseguir. El bot absorbe las preguntas.",
  },
  {
    num: "06",
    title: "Contratar",
    body: "Día de prueba pagado vía Don Chambas. Backoffice humano resuelve disputas.",
  },
];

export default function FlowSteps() {
  return (
    <div className="flow">
      {STEPS.map((s) => (
        <div className="step" key={s.num}>
          <div className="step-num">{s.num}</div>
          <strong>{s.title}</strong>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
