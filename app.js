/* ============================================================
   ScienceBoard10 – app.js
   ============================================================ */

// ─── Navbar scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 40);
});

// ─── Hamburger ───────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ─── DATA: Paper cards ───────────────────────────────────────
const papers = [
  { year:'2024', subject:'physics',   title:'Physics – Set 1',   board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Electricity & Optics focus' },
  { year:'2024', subject:'chemistry', title:'Chemistry – Set 1', board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Acids, Bases & Carbon Compounds' },
  { year:'2024', subject:'biology',   title:'Biology – Set 1',   board:'CBSE', marks:30, qs:16, time:'3 hrs', highlight:'Life Processes & Reproduction' },
  { year:'2023', subject:'physics',   title:'Physics – Set 2',   board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Magnetic Effects & Light' },
  { year:'2023', subject:'chemistry', title:'Chemistry – Set 2', board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Metals & Periodic Table' },
  { year:'2023', subject:'biology',   title:'Biology – Set 2',   board:'CBSE', marks:30, qs:16, time:'3 hrs', highlight:'Heredity & Environment' },
  { year:'2022', subject:'physics',   title:'Physics – Set 1',   board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Human Eye & Sources of Energy' },
  { year:'2022', subject:'chemistry', title:'Chemistry – Set 1', board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Chemical Reactions & Salts' },
  { year:'2022', subject:'biology',   title:'Biology – Set 1',   board:'CBSE', marks:30, qs:16, time:'3 hrs', highlight:'Control & Coordination' },
  { year:'2020', subject:'physics',   title:'Physics – Set 1',   board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Electricity – Circuits & Formulae' },
  { year:'2020', subject:'chemistry', title:'Chemistry – Set 1', board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Carbon Compounds & Periodic Table' },
  { year:'2019', subject:'physics',   title:'Physics – Set 3',   board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Refraction & Human Eye' },
  { year:'2019', subject:'chemistry', title:'Chemistry – Set 3', board:'CBSE', marks:35, qs:18, time:'3 hrs', highlight:'Acids & Metal Reactivity' },
  { year:'2019', subject:'biology',   title:'Biology – Set 3',   board:'CBSE', marks:30, qs:16, time:'3 hrs', highlight:'Evolution & Ecosystem' },
];

// ─── DATA: Modal paper detail ────────────────────────────────
const paperDetail = {
  'physics-2024': {
    sections: [
      { heading: '⚡ Section A – 1 Mark Questions', qs: [
        { num:'Q1', q:'Define SI unit of electric current.', a:'The SI unit of electric current is Ampere (A). One ampere is defined as the flow of one coulomb of charge per second.', marks:'1M' },
        { num:'Q2', q:'What is the relationship between resistance R, resistivity ρ, length L and area A?', a:'R = ρL/A, where ρ is the resistivity of the material.', marks:'1M' },
        { num:'Q3', q:'State the direction of induced current in a coil when a magnet is moved towards it.', a:'The induced current flows in a direction such that it opposes the motion of the magnet (Lenz\'s Law). Using the right-hand rule, the current flows anticlockwise when north pole approaches.', marks:'1M' },
      ]},
      { heading: '🔋 Section B – 2 Mark Questions', qs: [
        { num:'Q4', q:'Two resistors of 3Ω and 6Ω are connected in parallel. Find the equivalent resistance.', a:'1/R = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ∴ R = 2 Ω', marks:'2M' },
        { num:'Q5', q:'State Ohm\'s Law. Draw V-I graph for an ohmic conductor.', a:'Ohm\'s Law: The current (I) through a conductor between two points is directly proportional to the voltage (V): V = IR. A V-I graph for an ohmic conductor is a straight line passing through the origin with slope = R.', marks:'2M' },
      ]},
      { heading: '💡 Section C – 5 Mark Questions', qs: [
        { num:'Q6', q:'Explain refraction of light through a glass slab with a diagram. Define refractive index.', a:'When light enters a glass slab from air, it bends towards the normal (as it goes from rarer to denser medium). On exiting, it bends away from normal. The emergent ray is parallel to the incident ray but laterally displaced.\n\nRefractive index n = speed of light in vacuum / speed of light in medium = c/v\n\nAlso, n = sin(i)/sin(r) by Snell\'s Law.', marks:'5M' },
      ]},
    ]
  },
  'chemistry-2024': {
    sections: [
      { heading: '🧪 Section A – 1 Mark Questions', qs: [
        { num:'Q1', q:'What is the pH of a neutral solution?', a:'The pH of a neutral solution is 7. Solutions with pH < 7 are acidic; pH > 7 are basic.', marks:'1M' },
        { num:'Q2', q:'Give the IUPAC name of CH₃OH.', a:'Methanol (IUPAC: Methanol). It is the simplest alcohol.', marks:'1M' },
      ]},
      { heading: '⚗️ Section B – 2 Mark Questions', qs: [
        { num:'Q3', q:'Write the balanced chemical equation for the reaction between zinc and dilute sulphuric acid.', a:'Zn + H₂SO₄ → ZnSO₄ + H₂↑\nZinc displaces hydrogen from dilute sulphuric acid forming zinc sulphate and hydrogen gas.', marks:'2M' },
        { num:'Q4', q:'What is a homologous series? Give two examples from the alkane series.', a:'A homologous series is a group of organic compounds having the same general formula, same functional group, and similar chemical properties, differing by –CH₂– unit. Examples: Methane (CH₄) and Ethane (C₂H₆).', marks:'2M' },
      ]},
    ]
  },
  'biology-2024': {
    sections: [
      { heading: '🌿 Section A – 1 Mark Questions', qs: [
        { num:'Q1', q:'Name the process by which plants prepare their own food.', a:'Photosynthesis. Plants use sunlight, water and CO₂ to synthesize glucose: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', marks:'1M' },
        { num:'Q2', q:'What is the role of the pancreas in digestion?', a:'The pancreas secretes pancreatic juice containing enzymes: trypsin (proteins), lipase (fats), and amylase (starch). It also secretes insulin to regulate blood sugar.', marks:'1M' },
      ]},
      { heading: '🧬 Section B – 2 Mark Questions', qs: [
        { num:'Q3', q:'Distinguish between sexual and asexual reproduction.', a:'Asexual: involves single parent, no gametes, offspring genetically identical (clone), e.g., budding in Hydra.\nSexual: involves two parents, gametes fuse (fertilization), offspring have genetic variation, e.g., humans.', marks:'2M' },
        { num:'Q4', q:'What are the advantages of vegetative propagation?', a:'1. Faster reproduction than seeds. 2. Offspring are genetically identical to parent (preserving traits). 3. Plants that do not produce seeds can be propagated. 4. E.g., rose from cuttings, potato from tubers.', marks:'2M' },
      ]},
    ]
  },
};

// ─── DATA: Q&A list ──────────────────────────────────────────
const qaData = [
  // PHYSICS
  { subject:'physics', q:'State Ohm\'s Law and write its mathematical expression.', a:'Ohm\'s Law states that the current (I) flowing through a conductor is directly proportional to the potential difference (V) across its ends, provided temperature and other physical conditions remain constant.\n\nV = I × R, where R is the resistance.', points:[], marks:'2M' },
  { subject:'physics', q:'What is the SI unit of electric power? How is it related to kilowatt-hour?', a:'The SI unit of electric power is Watt (W). 1 kilowatt-hour (kWh) = 1000 W × 3600 s = 3.6 × 10⁶ J. 1 kWh is the unit used for commercial measurement of electrical energy.', points:[], marks:'2M' },
  { subject:'physics', q:'Explain why the sky appears blue during the day.', a:'Sunlight is scattered by the atmosphere. Shorter wavelengths (blue and violet) scatter more than longer wavelengths (red). Our eyes are more sensitive to blue than violet, so the sky appears blue. This is called Rayleigh scattering.', points:[], marks:'3M' },
  { subject:'physics', q:'Draw the ray diagram for a concave mirror forming a real, inverted and diminished image.', a:'Object is placed beyond the centre of curvature (C). Ray 1: parallel to principal axis → reflects through F. Ray 2: through F → reflects parallel to axis. The image forms between F and C, is real, inverted, and diminished.', points:['Object placed beyond 2F (C)', 'Image forms between F and C', 'Image is real, inverted, diminished', 'Used in rear-view mirrors (convex) not concave for this case'], marks:'3M' },
  { subject:'physics', q:'Two bulbs of 100W and 60W are connected in series. Which bulb glows brighter and why?', a:'In series, current is the same. Power dissipated = I²R. Higher resistance → more power → brighter. The 60W bulb has higher resistance (R = V²/P), so the 60W bulb glows brighter.', points:[], marks:'3M' },
  { subject:'physics', q:'State Fleming\'s Left-Hand Rule. Where is it applied?', a:'Hold the left hand such that the thumb, forefinger and middle finger are mutually perpendicular. Forefinger → direction of magnetic field (B), Middle finger → direction of current (I), Thumb → direction of force (F) on the conductor. Applied in electric motors.', points:[], marks:'2M' },
  { subject:'physics', q:'What is meant by the term "power of a lens"? What is its SI unit?', a:'Power of a lens is its ability to converge or diverge light. P = 1/f (in metres). SI unit is dioptre (D). A convex lens has positive power; a concave lens has negative power.', points:[], marks:'2M' },

  // CHEMISTRY
  { subject:'chemistry', q:'What are exothermic and endothermic reactions? Give one example each.', a:'Exothermic: reactions that release energy (heat) to surroundings. e.g., Combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O + Heat.\nEndothermic: reactions that absorb energy from surroundings. e.g., Decomposition of calcium carbonate: CaCO₃ → CaO + CO₂ (requires heat).', points:[], marks:'3M' },
  { subject:'chemistry', q:'Distinguish between displacement and double displacement reactions with examples.', a:'', points:['Displacement: One element displaces another from a compound. e.g., Fe + CuSO₄ → FeSO₄ + Cu', 'Double displacement: Two compounds exchange ions. e.g., NaCl + AgNO₃ → AgCl↓ + NaNO₃', 'Displacement involves single replacement; double displacement involves two swaps', 'Double displacement often produces precipitate, gas or water'], marks:'3M' },
  { subject:'chemistry', q:'Why is the modern periodic table preferred over Mendeleev\'s periodic table?', a:'', points:['Based on atomic number (not atomic mass) – eliminates anomalies', 'Position of isotopes is justified (same atomic number)', 'Correct position of hydrogen', 'Noble gases placed in Group 18 without disturbing order', 'Better correlation of properties with electronic configuration'], marks:'3M' },
  { subject:'chemistry', q:'What happens when sodium hydroxide reacts with hydrochloric acid? Write the equation.', a:'NaOH + HCl → NaCl + H₂O. This is a neutralisation reaction. An acid reacts with a base to form salt and water. The reaction is exothermic.', points:[], marks:'2M' },
  { subject:'chemistry', q:'Explain the properties of ionic compounds.', a:'', points:['High melting and boiling points due to strong electrostatic forces', 'Solid at room temperature', 'Conduct electricity in molten or aqueous state (ions free to move)', 'Soluble in polar solvents like water', 'Form crystals due to regular arrangement of ions'], marks:'3M' },
  { subject:'chemistry', q:'What is saponification? Write the chemical equation for making soap from ester.', a:'Saponification is the alkaline hydrolysis of an ester to produce soap (sodium/potassium salt of fatty acid) and glycerol.\nCH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH\nFor soap: Fat (ester) + NaOH → Soap + Glycerol', points:[], marks:'3M' },

  // BIOLOGY
  { subject:'biology', q:'What is the role of valves in the human heart?', a:'Valves prevent the backflow of blood. The bicuspid (mitral) valve between left atrium and left ventricle, and tricuspid valve between right atrium and right ventricle ensure one-directional flow. Semilunar valves prevent backflow into ventricles from arteries.', points:[], marks:'3M' },
  { subject:'biology', q:'What is transpiration? State its two functions.', a:'Transpiration is the loss of water from plant surfaces (mainly stomata) in the form of water vapour.', points:['Creates suction force (transpiration pull) to absorb water from roots to leaves', 'Cools the plant surface (evaporative cooling)', 'Helps in distribution of minerals absorbed by roots', 'Maintains water balance in the plant'], marks:'3M' },
  { subject:'biology', q:'Explain the process of photosynthesis with equation.', a:'Photosynthesis is the process by which green plants synthesize food using sunlight, CO₂ and water.\n6CO₂ + 6H₂O → (light, chlorophyll) → C₆H₁₂O₆ + 6O₂\nLight reactions (in thylakoid): water splits, O₂ released, ATP & NADPH formed. Dark reactions (Calvin cycle, stroma): CO₂ fixed into glucose.', points:[], marks:'5M' },
  { subject:'biology', q:'What are the differences between DNA and RNA?', a:'', points:['DNA: deoxyribose sugar; RNA: ribose sugar', 'DNA: double-stranded helix; RNA: single-stranded', 'DNA: bases A, T, G, C; RNA: bases A, U, G, C (Uracil instead of Thymine)', 'DNA stores genetic information; RNA transfers it for protein synthesis', 'DNA found mainly in nucleus; RNA found in nucleus and cytoplasm'], marks:'3M' },
  { subject:'biology', q:'What is the greenhouse effect? Name two greenhouse gases.', a:'The greenhouse effect is the trapping of heat (infrared radiation) by greenhouse gases in the atmosphere, warming the Earth. Without it, life couldn\'t exist; excess causes global warming.\nGreenhouse gases: Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), Water vapour.', points:[], marks:'3M' },
  { subject:'biology', q:'Explain the nervous system\'s reflex arc with an example.', a:'A reflex arc is the pathway taken by a nerve impulse during a reflex action.\nReceptor → Afferent nerve → Spinal cord (reflex centre) → Efferent nerve → Effector\nExample: Touching a hot object → pain receptor in skin → sensory neuron → spinal cord → motor neuron → muscle contracts to withdraw hand. This happens without conscious brain involvement.', points:[], marks:'5M' },
];

// ─── Render Papers ───────────────────────────────────────────
let activeYearFilter = 'all';
let activeSubjectFilter = 'all';

function renderPapers() {
  const grid = document.getElementById('papersGrid');
  const filtered = papers.filter(p => {
    const yearOk  = activeYearFilter === 'all' || p.year === activeYearFilter;
    const subjOk  = activeSubjectFilter === 'all' || p.subject === activeSubjectFilter;
    return yearOk && subjOk;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text3);padding:3rem 0;">No papers found for this filter.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const badgeClass = { physics:'badge-phys', chemistry:'badge-chem', biology:'badge-bio' }[p.subject] || 'badge-full';
    const color = { physics:'var(--phys2)', chemistry:'var(--chem2)', biology:'var(--bio2)' }[p.subject];
    return `
    <div class="paper-card" onclick="openPaperModal('${p.subject}','${p.year}','${p.title}','${p.board}','${p.marks}','${p.qs}','${p.time}')">
      <div class="pc-head">
        <span class="pc-year" style="color:${color}">${p.year}</span>
        <span class="pc-badge ${badgeClass}">${p.subject.charAt(0).toUpperCase()+p.subject.slice(1)}</span>
      </div>
      <div>
        <div class="pc-title">${p.title}</div>
        <div class="pc-meta">${p.board} Board • ${p.time}</div>
      </div>
      <p style="font-size:.8rem;color:var(--text3);line-height:1.5;">${p.highlight}</p>
      <div class="pc-stats">
        <div class="pc-stat"><span class="pc-stat-num">${p.marks}</span><span class="pc-stat-lbl">Total Marks</span></div>
        <div class="pc-stat"><span class="pc-stat-num">${p.qs}</span><span class="pc-stat-lbl">Questions</span></div>
      </div>
      <div class="pc-btn">View Full Paper & Answers →</div>
    </div>`;
  }).join('');
}

function setFilter(btn, year) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeYearFilter = year;
  renderPapers();
}

function filterSubject(subj) {
  activeSubjectFilter = subj === activeSubjectFilter ? 'all' : subj;
  document.getElementById('papers').scrollIntoView({ behavior:'smooth' });
  renderPapers();
}

// ─── Render Q&A ──────────────────────────────────────────────
let activeQaFilter = 'all';
let qaSearchTerm = '';

function renderQA() {
  const list = document.getElementById('qaList');
  const filtered = qaData.filter(item => {
    const subjOk  = activeQaFilter === 'all' || item.subject === activeQaFilter;
    const searchOk = !qaSearchTerm || item.q.toLowerCase().includes(qaSearchTerm.toLowerCase());
    return subjOk && searchOk;
  });

  if (!filtered.length) {
    list.innerHTML = `<div style="text-align:center;color:var(--text3);padding:3rem 0;">No questions match your search.</div>`;
    return;
  }

  list.innerHTML = filtered.map((item, i) => {
    const cls = `qa-${item.subject}`;
    const subjLabel = item.subject.charAt(0).toUpperCase() + item.subject.slice(1);
    const pointsHTML = item.points.length
      ? `<div class="answer-points">${item.points.map(pt => `<div class="answer-point">${pt}</div>`).join('')}</div>`
      : `<p class="answer-text">${item.a.replace(/\n/g,'<br/>')}</p>`;
    return `
    <div class="qa-item ${cls}" id="qa-item-${i}">
      <div class="qa-question" onclick="toggleQA(${i})">
        <span class="qa-num">${subjLabel}</span>
        <span class="qa-q-text">${item.q}</span>
        <span class="qa-marks">[${item.marks}]</span>
        <svg class="qa-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-inner">
          <div class="answer-label">✦ Model Answer</div>
          ${pointsHTML}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleQA(i) {
  const item = document.getElementById(`qa-item-${i}`);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.qa-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function filterQA(btn, subj) {
  document.querySelectorAll('.qa-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeQaFilter = subj;
  renderQA();
}

function searchQA(val) {
  qaSearchTerm = val;
  renderQA();
}

// ─── Modal ───────────────────────────────────────────────────
function openPaperModal(subject, year, title, board, marks, qs, time) {
  const key = `${subject}-${year}`;
  const detail = paperDetail[key];
  const color = { physics:'var(--phys2)', chemistry:'var(--chem2)', biology:'var(--bio2)' }[subject] || 'var(--accent2)';

  let sectionsHTML = '';
  if (detail) {
    sectionsHTML = detail.sections.map(sec => `
      <div class="modal-section">
        <h3>${sec.heading}</h3>
        ${sec.qs.map(q => `
          <div class="modal-q">
            <div class="mq-num">${q.num} · ${q.marks}</div>
            <div class="mq-q">${q.q}</div>
            <div style="font-size:.72rem;font-weight:700;color:var(--accent2);margin:.4rem 0 .25rem;">Answer:</div>
            <div class="mq-a">${q.a.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>`).join('');
  } else {
    sectionsHTML = `<p style="color:var(--text2);font-size:.9rem;">Detailed question-by-question answers for this paper are being added. Check back soon!</p>`;
  }

  document.getElementById('modalContent').innerHTML = `
    <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.25rem;">
      <span style="font-size:1.8rem;">${{physics:'⚡',chemistry:'🧪',biology:'🌿'}[subject]}</span>
      <h2 style="color:${color}">${title} – ${year}</h2>
    </div>
    <p class="modal-meta">${board} Board &nbsp;|&nbsp; Total: ${marks} marks &nbsp;|&nbsp; ${qs} Questions &nbsp;|&nbsp; Duration: ${time}</p>
    <hr style="border:none;border-top:1px solid var(--border);margin-bottom:1.5rem;"/>
    ${sectionsHTML}`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── Particles ───────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:absolute;
      width:${Math.random()*3+1}px;
      height:${Math.random()*3+1}px;
      background:rgba(167,139,250,${Math.random()*.4+.1});
      border-radius:50%;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation: particleFloat ${Math.random()*10+8}s ease-in-out infinite;
      animation-delay:${Math.random()*-10}s;`;
    container.appendChild(dot);
  }
  const style = document.createElement('style');
  style.textContent = `@keyframes particleFloat {
    0%,100%{transform:translateY(0) translateX(0);opacity:.6;}
    33%{transform:translateY(-${Math.random()*60+20}px) translateX(${Math.random()*30}px);opacity:.9;}
    66%{transform:translateY(${Math.random()*30}px) translateX(-${Math.random()*30}px);opacity:.4;}
  }`;
  document.head.appendChild(style);
}

// ─── Intersection Observer for fade-in ───────────────────────
function initAnimations() {
  const style = document.createElement('style');
  style.textContent = `.fade-in{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;}.fade-in.visible{opacity:1;transform:none;}`;
  document.head.appendChild(style);
  const targets = document.querySelectorAll('.subject-card,.paper-card,.tip-card,.qa-item,.floating-card');
  targets.forEach(el => el.classList.add('fade-in'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.12 });
  targets.forEach(el => obs.observe(el));
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPapers();
  renderQA();
  initParticles();
  setTimeout(initAnimations, 100);
});
