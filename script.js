/* ============================================================
   Nayla — site behaviour + Arabic / English text
   Content (programs, team, partners, numbers) lives in data.js
   ============================================================ */

const D = window.NAYLA_DATA;

/* ---------- UI text ---------- */
const i18n = {
  ar: {
    skip: 'تخطي للمحتوى',
    navAbout: 'عن نايلة', navPrograms: 'البرامج', navImpact: 'أثرنا', navTeam: 'الفريق',
    navPartners: 'الشركاء', navContact: 'تواصل', navJoin: 'انضم لنايلة',

    heroEyebrow: 'مبادرة من بنات أسوان · جزء من Girl Up MENA',
    heroTitle: 'بنفتح أبواب الـ STEAM لكل بنت في الصعيد',
    heroLead: 'برامج وكورسات وورش مجانية — أونلاين وأوفلاين في أسوان — في البرمجة، والتسويق، والتصميم، والبحث العلمي، والجاهزية لسوق العمل. ومجتمع من البنات بيدعم بعضه.',
    heroCta1: 'اكتشف البرامج', heroCta2: 'انضم لينا',
    statParticipants: 'مشارِكة ومشارك', statPrograms: 'برامج وورش', statTeam: 'عضو في الفريق',
    chip1: '💻 Code with Nayla', chip2: '📍 أسوان + أونلاين', chip3: '✨ مجاني بالكامل',

    aboutTag: 'عن نايلة',
    aboutTitle: 'مبادرة بتقودها البنات، من أسوان',
    aboutBody1: 'نايلة مبادرة أسستها بنات من أسوان عشان توصّل فرص التعلم في مجالات الـ STEAM — العلوم والتكنولوجيا والهندسة والفنون والرياضيات — لبنات أسوان والصعيد، اللي غالبًا الفرص دي مش بتوصلهم.',
    aboutBody2: 'كجزء من شبكة Girl Up MENA، بنعمل برامج أونلاين وفعاليات على الأرض في أسوان، وبنبني مساحة آمنة البنت تتعلم فيها وتجرب وتقود.',
    visionTitle: 'رؤيتنا',
    visionBody: 'إن كل بنت في أسوان والصعيد يبقى عندها فرصة حقيقية تدخل مجالات الـ STEAM بثقة، وتبني مستقبلها اللي تختاره.',
    missionTitle: 'رسالتنا',
    missionBody: 'نوصّل برامج تعليمية وتدريبية مجانية — أونلاين وأوفلاين — لبنات الصعيد، ونبني مجتمع من البنات بيدعم بعضه.',
    goalsTitle: 'أهدافنا',
    goal1Title: 'نعرّف بمجالات الـ STEAM', goal1Body: 'نكسر الصورة إن المجالات دي "مش للبنات"، ونعرض قصص نجاح قريبة منهم.',
    goal2Title: 'نعلّم مهارات عملية', goal2Body: 'برمجة، تسويق رقمي، تصميم، وبحث علمي — بتطبيق حقيقي من أول يوم.',
    goal3Title: 'نجهّز للفرص وسوق العمل', goal3Body: 'من التقديم على معسكرات عالمية لحد خبرة تطوعية تتضاف للـ CV.',
    goal4Title: 'نبني مجتمع وشبكة', goal4Body: 'بنات بيدعموا بعض، وشراكات مع مؤسسات بتفتح أبواب جديدة.',

    programsTag: 'البرامج', programsTitle: 'اللي بنقدمه',
    programsDesc: 'كل برامجنا مجانية ومصممة للمبتدئين — مش محتاج خبرة سابقة، محتاج بس تبدأ.',
    filterAll: 'الكل', filterCore: 'برامج ممتدة', filterCourse: 'كورسات', filterWorkshop: 'ورش وجلسات',
    typeCore: 'برنامج ممتد', typeCourse: 'كورس', typeWorkshop: 'ورشة / جلسة',
    participantsLabel: 'مشارك',

    impactTag: 'أثرنا', impactTitle: 'أثرنا بالأرقام',
    impactDesc: 'أرقام تقريبية لعدد المشاركين في برامجنا وورشنا لحد دلوقتي.',
    statParticipantsLong: 'مشارك ومشاركة في برامجنا', statProgramsLong: 'برامج وكورسات وورش',
    statTeamLong: 'عضو في فريق نايلة', statPartnersLong: 'شركاء ومؤسسات متعاونة',
    barsTitle: 'المشاركين في كل برنامج',

    teamTag: 'الفريق', teamTitle: 'الناس اللي ورا نايلة',
    teamDesc: 'فريق من {team} عضو — طالبات ومهندسين ومتطوعين — بيشتغلوا عشان كل بنت تلاقي فرصتها.',
    foundersTitle: 'المؤسِّسات', founderRole: 'مؤسِّسة نايلة', membersTitle: 'من فريقنا',

    partnersTag: 'الشركاء', partnersTitle: 'شركاء النجاح',
    partnersDesc: 'مؤسسات وجهات اشتغلنا معاها عشان نوصّل الفرص لبنات أكتر.',
    collabTitle: 'عايز تتعاون مع نايلة؟',
    collabBody: 'بنرحب بالشركات والمؤسسات والمساحات اللي حابة تدعم بنات الصعيد. ممكن نتعاون في:',
    collab1: '🏫 استضافة برنامج أو توفير مكان في أسوان',
    collab2: '💻 توفير أجهزة أو أدوات للمشاركات',
    collab3: '🎤 تقديم جلسة أو ورشة من خبرائكم',
    collab4: '💼 فرص تدريب (Internships) أو منح',
    collab5: '🤝 رعاية برنامج أو دعم شهاداته',
    collabCta: 'ابدأ شراكة معانا',

    joinTag: 'انضم لينا', joinTitle: 'فيه مكان ليك في نايلة',
    joinDesc: 'اختار الطريقة اللي تناسبك، واملا الفورم، وفريقنا هيتواصل معاك.',
    roleParticipant: 'مشاركة', roleParticipantBody: 'سجلي في برامجنا وورشنا الجاية',
    roleVolunteer: 'متطوع / متطوعة', roleVolunteerBody: 'ساعد في التنظيم والمحتوى والتصميم والتواصل',
    roleTrainer: 'مدرب / منتور', roleTrainerBody: 'علّم مهارة أو تابع البنات في رحلتهم',
    roleSpeaker: 'Speaker', roleSpeakerBody: 'شارك قصتك أو خبرتك في جلسة ملهمة',
    rolePartner: 'شريك / جهة', rolePartnerBody: 'مؤسسة أو شركة حابة تتعاون معانا',
    roleOther: 'سؤال أو استفسار',

    contactTag: 'تواصل', contactTitle: 'يلا نبني ده سوا 💜',
    contactDesc: 'عندك سؤال، أو حابب تنضم، أو عايز تتعاون معانا؟ ابعتلنا وهنرد عليك في أقرب وقت.',
    contactLocation: 'أسوان، مصر — فعاليات أونلاين وأوفلاين',
    formName: 'الاسم', formNamePh: 'اسمك بالكامل', formRole: 'عايز تنضم كـ',
    formEmail: 'الإيميل', formPhone: 'رقم الموبايل (اختياري)',
    formMessage: 'رسالتك', formMessagePh: 'احكيلنا عنك وعن اللي حابب تعمله مع نايلة...',
    formSubmit: 'ابعت لنايلة ✉️', formSending: 'جاري الإرسال...',
    formSuccess: '✅ وصلتنا رسالتك! هنتواصل معاك قريب.',
    formError: 'حصلت مشكلة في الإرسال. جرّب تاني أو ابعتلنا على naylasteamaswan@gmail.com',
    formInvalid: 'من فضلك اكتب اسمك وإيميل صحيح ورسالتك.',

    footerAbout: 'مبادرة من بنات أسوان بتوصّل فرص الـ STEAM لبنات الصعيد. جزء من شبكة Girl Up MENA.',
    footerExplore: 'استكشف', footerJoin: 'انضم', footerFollow: 'تابعنا',
    footerRights: '© 2026 نايلة | STEAM Like a Girl',
    footerMade: 'معمول بحب 💜 لبنات الصعيد'
  },

  en: {
    skip: 'Skip to content',
    navAbout: 'About', navPrograms: 'Programs', navImpact: 'Impact', navTeam: 'Team',
    navPartners: 'Partners', navContact: 'Contact', navJoin: 'Join Nayla',

    heroEyebrow: 'A girls-led initiative from Aswan · Part of Girl Up MENA',
    heroTitle: 'Opening the doors of STEAM to every girl in Upper Egypt',
    heroLead: 'Free programs, courses and workshops — online and offline in Aswan — in coding, marketing, design, scientific research and career readiness. And a community of girls who lift each other up.',
    heroCta1: 'Explore programs', heroCta2: 'Join us',
    statParticipants: 'participants', statPrograms: 'programs & workshops', statTeam: 'team members',
    chip1: '💻 Code with Nayla', chip2: '📍 Aswan + Online', chip3: '✨ 100% free',

    aboutTag: 'About Nayla',
    aboutTitle: 'A girls-led initiative from Aswan',
    aboutBody1: 'Nayla was founded by girls from Aswan to bring STEAM learning — Science, Technology, Engineering, Arts and Math — to girls in Aswan and Upper Egypt, where these opportunities rarely reach.',
    aboutBody2: 'As part of the Girl Up MENA network, we run online programs and in-person events in Aswan, building a safe space where girls can learn, experiment and lead.',
    visionTitle: 'Our vision',
    visionBody: 'Every girl in Aswan and Upper Egypt has a real chance to enter STEAM with confidence and build the future she chooses.',
    missionTitle: 'Our mission',
    missionBody: 'Deliver free learning and training programs — online and offline — to girls in Upper Egypt, and build a community of girls who support each other.',
    goalsTitle: 'Our goals',
    goal1Title: 'Introduce STEAM', goal1Body: 'Break the idea that these fields are "not for girls", with success stories close to home.',
    goal2Title: 'Teach practical skills', goal2Body: 'Coding, digital marketing, design and research — hands-on from day one.',
    goal3Title: 'Prepare for opportunities', goal3Body: 'From applying to global camps to volunteer experience that strengthens a CV.',
    goal4Title: 'Build community & network', goal4Body: 'Girls supporting girls, and partnerships that open new doors.',

    programsTag: 'Programs', programsTitle: 'What we offer',
    programsDesc: 'All our programs are free and beginner-friendly — no experience needed, just the will to start.',
    filterAll: 'All', filterCore: 'Core programs', filterCourse: 'Courses', filterWorkshop: 'Workshops & sessions',
    typeCore: 'Core program', typeCourse: 'Course', typeWorkshop: 'Workshop / session',
    participantsLabel: 'participants',

    impactTag: 'Impact', impactTitle: 'Our impact in numbers',
    impactDesc: 'Approximate participant numbers across our programs and workshops so far.',
    statParticipantsLong: 'participants in our programs', statProgramsLong: 'programs, courses & workshops',
    statTeamLong: 'Nayla team members', statPartnersLong: 'partner organizations',
    barsTitle: 'Participants per program',

    teamTag: 'Team', teamTitle: 'The people behind Nayla',
    teamDesc: 'A team of {team} — students, engineers and volunteers — working so every girl finds her opportunity.',
    foundersTitle: 'Founders', founderRole: 'Co-founder of Nayla', membersTitle: 'Meet the team',

    partnersTag: 'Partners', partnersTitle: 'Our partners',
    partnersDesc: 'Organizations we have worked with to reach more girls.',
    collabTitle: 'Want to partner with Nayla?',
    collabBody: 'We welcome companies, organizations and spaces that want to support girls in Upper Egypt. We can work together on:',
    collab1: '🏫 Hosting a program or offering a venue in Aswan',
    collab2: '💻 Providing laptops or tools for participants',
    collab3: '🎤 A session or workshop led by your experts',
    collab4: '💼 Internships or scholarships',
    collab5: '🤝 Sponsoring a program or its certificates',
    collabCta: 'Start a partnership',

    joinTag: 'Join us', joinTitle: 'There’s a place for you at Nayla',
    joinDesc: 'Pick how you want to get involved, fill in the form, and our team will reach out.',
    roleParticipant: 'Participant', roleParticipantBody: 'Sign up for our upcoming programs',
    roleVolunteer: 'Volunteer', roleVolunteerBody: 'Help with organizing, content, design or outreach',
    roleTrainer: 'Trainer / Mentor', roleTrainerBody: 'Teach a skill or guide girls on their journey',
    roleSpeaker: 'Speaker', roleSpeakerBody: 'Share your story or expertise in a session',
    rolePartner: 'Partner organization', rolePartnerBody: 'A company or organization that wants to collaborate',
    roleOther: 'Question / other',

    contactTag: 'Contact', contactTitle: 'Let’s build this together 💜',
    contactDesc: 'Have a question, want to join, or want to collaborate? Send us a message and we’ll get back to you soon.',
    contactLocation: 'Aswan, Egypt — online & offline events',
    formName: 'Name', formNamePh: 'Your full name', formRole: 'I want to join as',
    formEmail: 'Email', formPhone: 'Phone (optional)',
    formMessage: 'Message', formMessagePh: 'Tell us about yourself and what you’d like to do with Nayla...',
    formSubmit: 'Send to Nayla ✉️', formSending: 'Sending...',
    formSuccess: '✅ Message received! We’ll be in touch soon.',
    formError: 'Something went wrong. Please try again or email naylasteamaswan@gmail.com',
    formInvalid: 'Please add your name, a valid email and a message.',

    footerAbout: 'A girls-led initiative from Aswan bringing STEAM opportunities to girls in Upper Egypt. Part of the Girl Up MENA network.',
    footerExplore: 'Explore', footerJoin: 'Join', footerFollow: 'Follow',
    footerRights: '© 2026 Nayla | STEAM Like a Girl',
    footerMade: 'Made with 💜 for girls in Upper Egypt'
  }
};

/* ---------- helpers ---------- */
let lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
if (!i18n[lang]) lang = 'ar';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pick = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] ?? v.en) : v;
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n) => n.toLocaleString('en-US');

const totalParticipants = D.programs.reduce((s, p) => s + (p.participants || 0), 0);
const typeLabel = { core: 'typeCore', course: 'typeCourse', workshop: 'typeWorkshop' };
let activeFilter = 'all';

/* ---------- renderers ---------- */
function renderPrograms() {
  const t = i18n[lang];
  $('#programsGrid').innerHTML = D.programs.map(p => {
    const hl = (pick(p.highlights) || []);
    return `
    <article class="program-card" data-type="${p.type}" ${activeFilter !== 'all' && activeFilter !== p.type ? 'hidden' : ''}>
      <div class="pc-top">
        <span class="pc-icon">${p.icon}</span>
        <span class="pc-type pc-${p.type}">${t[typeLabel[p.type]]}</span>
      </div>
      <h3 dir="auto">${esc(pick(p.title))}</h3>
      <p class="pc-format">${esc(pick(p.format))}</p>
      <p class="pc-desc">${esc(pick(p.desc))}</p>
      ${hl.length ? `<ul class="pc-highlights">${hl.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
      <div class="pc-foot"><strong>${fmt(p.participants)}+</strong> <span>${t.participantsLabel}</span></div>
    </article>`;
  }).join('');
}

function renderImpact() {
  const max = Math.max(...D.programs.map(p => p.participants));
  const sorted = [...D.programs].sort((a, b) => b.participants - a.participants);
  $('#impactBars').innerHTML = sorted.map(p => `
    <li>
      <span class="bar-label">${p.icon} <bdi>${esc(pick(p.title))}</bdi></span>
      <span class="bar-track"><span class="bar-fill" style="--w:${(p.participants / max * 100).toFixed(1)}%"></span></span>
      <span class="bar-num">${fmt(p.participants)}</span>
    </li>`).join('');

  $$('.js-total-participants').forEach(el => el.textContent = fmt(totalParticipants) + '+');
  $$('.js-program-count').forEach(el => el.textContent = fmt(D.programs.length));
  $$('.js-team-size').forEach(el => el.textContent = fmt(D.teamSize));
  $$('.js-partner-count').forEach(el => el.textContent = fmt(D.partners.length));
}

function renderTeam() {
  const t = i18n[lang];
  $('#foundersGrid').innerHTML = D.founders.map(f => `
    <article class="founder">
      <img src="${encodeURI(f.photo)}" alt="${esc(pick(f.name))}" loading="lazy">
      <div>
        <h4>${esc(pick(f.name))}</h4>
        <span class="founder-role">${t.founderRole}</span>
        <p>${esc(pick(f.bio))}</p>
      </div>
    </article>`).join('');

  $('#teamGrid').innerHTML = D.team.map(m => `
    <article class="member">
      <img src="${encodeURI(m.photo)}" alt="${esc(pick(m.name))}" loading="lazy">
      <h4>${esc(pick(m.name))}</h4>
      <p>${esc(pick(m.role))}</p>
    </article>`).join('');
}

function renderPartners() {
  $('#partnersGrid').innerHTML = D.partners.map(p => {
    const name = pick(p.name);
    return `
    <article class="partner">
      <span class="partner-mark">${esc(name.trim().charAt(0))}</span>
      <h4 dir="auto">${esc(name)}</h4>
      <p>${esc(pick(p.note))}</p>
    </article>`;
  }).join('');
}

function applyLanguage(next) {
  lang = next;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  $$('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v != null) el.textContent = v.replace('{team}', fmt(D.teamSize));
  });
  $$('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v != null) el.placeholder = v;
  });
  $('#langToggle').textContent = lang === 'ar' ? 'EN' : 'ع';
  $('#langToggle').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل للعربي');

  renderPrograms();
  renderImpact();
  renderTeam();
  renderPartners();
}

/* ---------- interactions ---------- */
$('#langToggle').addEventListener('click', () => applyLanguage(lang === 'ar' ? 'en' : 'ar'));

// mobile menu
const nav = $('#navbar');
const menuBtn = $('#menuToggle');
function closeMenu() { nav.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
$$('#navLinks a').forEach(a => a.addEventListener('click', closeMenu));

// navbar shadow on scroll
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// program filters
$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  activeFilter = btn.dataset.filter;
  $$('.filter').forEach(b => {
    const on = b === btn;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-selected', String(on));
  });
  $$('.program-card').forEach(c => { c.hidden = activeFilter !== 'all' && c.dataset.type !== activeFilter; });
}));

// any [data-role] → pre-select role in the form and jump to it
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-role]');
  if (!trigger) return;
  e.preventDefault();
  $('#roleSelect').value = trigger.dataset.role;
  closeMenu();
  $('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => $('#contactForm [name="name"]').focus({ preventScroll: true }), 500);
});

// contact form → EmailJS
try { if (window.emailjs) emailjs.init('gEWHQJAw0wEoXuQYP'); } catch (e) {}

$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const f = form.elements;
  const t = i18n[lang];
  const status = $('#formStatus');
  const btn = form.querySelector('button[type="submit"]');
  const name = f.namedItem('name').value.trim();
  const email = f.namedItem('email').value.trim();
  const message = f.namedItem('message').value.trim();

  status.className = 'form-status';
  if (!name || !message || !email || !f.namedItem('email').checkValidity()) {
    status.textContent = t.formInvalid;
    status.classList.add('is-error');
    return;
  }

  const roleSel = f.namedItem('role');
  const roleText = roleSel.options[roleSel.selectedIndex].textContent;
  const phone = f.namedItem('phone').value.trim();
  const fullMessage = `[${roleText}]${phone ? ' · ' + phone : ''}\n\n${message}`;

  if (!window.emailjs) {
    status.textContent = t.formError;
    status.classList.add('is-error');
    return;
  }

  btn.disabled = true;
  btn.textContent = t.formSending;
  emailjs.send('service_yodfvhf', 'template_0go4iy4', {
    from_name: name,
    email,
    phone,
    role: roleText,
    message: fullMessage
  }).then(() => {
    status.textContent = t.formSuccess;
    status.classList.add('is-success');
    form.reset();
  }).catch(() => {
    status.textContent = t.formError;
    status.classList.add('is-error');
  }).finally(() => {
    btn.disabled = false;
    btn.textContent = t.formSubmit;
  });
});

/* ---------- go ---------- */
applyLanguage(lang);
