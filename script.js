// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const i18n = {
  en: {
    langToggle: 'AR',
    brandName: 'Nayla',
    brandTagline: 'STEAM Like a Girl',
    navHome: 'Home',
    navPrograms: 'Programs',
    navTeam: 'Team Members',
    navAbout: 'About',
    navContact: 'Contact',
    navJoin: 'Join Us',
    navLearn: 'Learn More',
    heroBadge: 'Empowering Girls in Aswan Through STEAM',
    heroTitle: 'Nayla | STEAM Like a Girl',
    heroText: '<span>Empowering girls in Aswan</span> through online sessions, offline events, and real opportunities. Our mission is to expand access for girls in Upper Egypt and build a strong <bdi>community</bdi> where girls support each other.',
    heroJoin: 'Join Us',
    heroLearn: 'Learn More',
    aboutTag: 'About Nayla',
    aboutTitle: 'A Girls-Led Initiative <span>From Aswan</span>',
    aboutBody: 'We are a girls-led initiative from Aswan focused on opening STEAM opportunities for every girl. As part of Girl Up MENA, we create safe spaces where girls can learn, lead, and grow together.',
    feat1Title: 'Empowerment First',
    feat1Body: 'We work so every girl feels confident entering STEAM fields.',
    feat2Title: 'Girl Up MENA Network',
    feat2Body: "Connected to a regional movement that supports girls' leadership and impact.",
    feat3Title: 'Community & Belonging',
    feat3Body: 'Online and offline in Aswan, we learn together and support each other.',
    statsGirls: 'Girls Reached',
    statsSessions: 'Sessions Held',
    statsVolunteers: 'Volunteers',
    statsEvents: 'Aswan Events',
    subjectsTag: 'Programs',
    subjectsTitle: 'Our Programs',
    subjectsDesc: 'Practical learning tracks designed to open real STEAM opportunities for girls in Upper Egypt.',
    subjectTitles: [
      'Programming',
      'Engineering Basics',
      'Science Workshops',
      'Personal Development',
      'Career Exploration',
      'Community Projects'
    ],
    subjectBodies: [
      'Learn coding basics and build real projects in a friendly, beginner-safe environment.',
      'Discover how engineering works through simple challenges and creative teamwork.',
      'Hands-on activities that make science fun, practical, and easy to relate to daily life.',
      'Build confidence, leadership, and communication skills for school, university, and beyond.',
      'Meet women in STEAM careers and explore pathways that fit your passion.',
      'Girls-led initiatives that turn ideas into local impact across Aswan.'
    ],
    subjectMeta: ['Girls', 'Sessions', 'Girls', 'Sessions', 'Girls', 'Workshops', 'Girls', 'Circles', 'Girls', 'Talks', 'Girls', 'Projects'],
    teamTag: 'Team Members',
    teamTitle: 'Meet Our Team Members',
    teamDesc: 'Supportive role models from engineering, universities, and volunteering communities.',
    teacherSubjects: [
      'Programming Mentor',
      'Programming Mentor',
      'Programming Mentor',
      'Volunteer Mentor',
      'Volunteer Mentor',
      'High School Student',
      'High School Student',
      'High School Student',
      'High School Student',
      'High School Student'
    ],
    teacherExp: [
      '⭐ Software Engineer',
      '⭐ Engineer',
      '⭐ Community Lead',
      '⭐ Mentor',
      '⭐ University Student',
      '⭐ Content Writing',
      '⭐ Organization & Management',
      '⭐ Design',
      '⭐ Communication & Outreach',
      '⭐ Communication & Outreach'
    ],
    teacherBio: [
      'Guides girls in problem-solving and Programming thinking in many Domains.',
      'Connects technical skills to real-life community solutions.',
      'Builds a safe and inspiring space for every participant.',
      'Guides girls in their learning journey.',
      'Empowering girls with essential soft skills to grow, communicate, and succeed in real life. From confidence to career readiness, learn it, practice it, live it.',
      'Creates engaging content to inspire and inform the Nayla community.',
      'Organizes and manages various initiatives within the Nayla community.',
      "Designs visually appealing materials to support Nayla's initiatives.",
      'Communicates with the Nayla community and organizes outreach initiatives.',
      'Communicates with students and organizes outreach initiatives.'
    ],
    foundersTag: 'Founders',
    foundersTitle: 'Meet the Founders 💜',
    foundersDesc: 'Two passionate young leaders building Nayla to empower girls in Aswan through community, innovation, and STEAM.',
    founderRole: 'Founder of Nayla',
    founderBio1: "Hi, I'm Malak 👋<br>A high school student passionate about technology, community work, and building ideas that create real impact.<br><br>I've been part of experiences like Samsung Innovation Campus and Girls Make Program, working on projects, organizing sessions, and volunteering.<br><br>I'm especially interested in solving real-life problems in student life, accessibility, and mental well-being.<br><br>Still learning, still growing, and always ready for new challenges 🚀",
    founderBio2: "Hi, I'm Taqwa 👋<br>I'm passionate about technology &amp; innovation, with skills in programming, graphic design, and cybersecurity.<br><br>I've delivered awareness sessions across Aswan to promote programming and AI.<br><br>Currently, I'm a General Coordinator at the Egyptian Inventors Syndicate and a Girls Make graduate.",
    contactTag: 'Contact',
    contactTitle: "Let's Build This Together!<br>We'd Love to Hear from You 💜",
    contactDesc: 'Have a question, want to join, or interested in collaborating with Nayla? Send us a message anytime — we are one community.',
    contactLocation: 'Aswan, Egypt (Online + Offline Events)',
    formFirstName: 'First Name',
    formLastName: 'Last Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formFirstNamePh: 'Your name',
    formLastNamePh: 'Family name',
    formEmailPh: 'you@example.com',
    formMessagePh: 'Say hello to Nayla community...',
    formSubmit: 'Send to Nayla ✉️',
    footerSupport: 'Support',
    footerCommunity: 'Community',
    footerQuickLinks: 'Quick Links',
    footerJoinParticipant: 'Join as Participant',
    footerJoinVolunteer: 'Join as Volunteer',
    footerAbout: 'About',
    footerPrograms: 'Programs',
    footerContact: 'Contact',
    footerRights: '© 2026 Nayla | STEAM Like a Girl. All rights reserved.',
    footerMade: 'Made with ❤️ for girls in Upper Egypt',
    formSuccess: '✅ Message Sent!',
    formError: 'Error sending ❌'
  },
  ar: {
    langToggle: 'EN',
    brandName: 'نايلا',
    brandTagline: 'STEAM للبنات',
    navHome: 'الرئيسية',
    navPrograms: 'البرامج',
    navTeam: 'فريقنا',
    navAbout: 'من نحن',
    navContact: 'تواصل معنا',
    navJoin: 'انضمي إلينا',
    navLearn: 'اعرفي أكثر',
    heroBadge: 'تمكين بنات أسوان من خلال مجالات STEAM',
    heroTitle: 'نايلا | STEAM للبنات',
    heroText: '<span>نمكّن بنات أسوان</span> من خلال محاضرات أونلاين، فعاليات على الأرض، وفرص حقيقية. هدفنا نوصل الفرص لبنات الصعيد ونبني <bdi>community</bdi> قوية من بنات لبعض.',
    heroJoin: 'انضمي إلينا',
    heroLearn: 'اعرفي أكثر',
    aboutTag: 'عن نايلا',
    aboutTitle: 'مبادرة تقودها البنات <span>من أسوان</span>',
    aboutBody: 'إحنا مبادرة من بنات أسوان هدفنا نوصل فرص STEAM لكل بنت. وكجزء من Girl Up MENA بنخلق مساحات آمنة تتعلم فيها البنات وتكبر وتقود.',
    feat1Title: 'التمكين أولًا',
    feat1Body: 'بنشتغل عشان كل بنت تحس إنها قادرة تدخل مجالات STEAM بثقة.',
    feat2Title: 'شبكة Girl Up MENA',
    feat2Body: 'متصلين بحركة إقليمية تدعم قيادة البنات وتأثيرهم في المجتمع.',
    feat3Title: 'المجتمع والانتماء',
    feat3Body: 'أونلاين وأوفلاين في أسوان، بنتعلم مع بعض وبندعم بعض.',
    statsGirls: 'بنت وصلنا لها',
    statsSessions: 'محاضرهات قدمناها',
    statsVolunteers: 'متطوعة',
    statsEvents: 'فعاليات في أسوان',
    subjectsTag: 'البرامج',
    subjectsTitle: 'برامجنا',
    subjectsDesc: 'مسارات عملية بتفتح فرص حقيقية في مجالات STEAM لبنات الصعيد.',
    subjectTitles: [
      'البرمجة',
      'أساسيات الهندسة',
      'ورش العلوم',
      'التطوير الشخصي',
      'الاستكشاف المهني',
      'مشاريع مجتمعية'
    ],
    subjectBodies: [
      'اتعلمي أساسيات الكود وابني مشاريع حقيقية في بيئة آمنة للمبتدئات.',
      'اكتشفي عالم الهندسة من خلال تحديات بسيطة وتعاون إبداعي.',
      'أنشطة عملية تخلي العلوم ممتعة وقريبة من حياتك اليومية.',
      'ابني ثقتك ومهارات القيادة والتواصل للمدرسة والجامعة وما بعدهم.',
      'اتعرفي على نماذج نسائية في مجالات STEAM واستكشفي المسار المناسب ليكي.',
      'مبادرات تقودها البنات لتحويل الأفكار إلى أثر حقيقي في أسوان.'
    ],
    subjectMeta: ['بنت', 'محاضرات', 'بنت', 'محاضرات', 'بنت', 'ورش', 'بنت', 'دوائر', 'بنت', 'لقاءات', 'بنت', 'مشاريع'],
    teamTag: 'فريقنا',
    teamTitle: 'تعرّفي على فريقنا',
    teamDesc: 'قدوات داعمة من مجالات الهندسة والجامعات والعمل التطوعي.',
    teacherSubjects: [
      'مرشد برمجة',
      'مرشد برمجة',
      'مرشدة برمجة',
      'مرشدة متطوعة',
      'مرشدة متطوعة',
      'طالبة ثانوي',
      'طالبة ثانوي',
      'طالبة ثانوي',
      'طالبة ثانوي',
      'مهندسه طاقه '
    ],
    teacherExp: [
      '⭐ مهندس برمجيات',
      '⭐ مهندس',
      '⭐ قائدة مجتمعية',
      '⭐ مرشدة',
      '⭐ طالبة جامعية',
      '⭐ كتابة المحتوى',
      '⭐ التنظيم والإدارة',
      '⭐ التصميم',
      '⭐ التواصل والتوعية',
      '⭐ التواصل والتوعية'
    ],
    teacherBio: [
      'يرشد البنات في حل المشكلات والتفكير البرمجي في مجالات متعددة.',
      'يربط المهارات التقنية بحلول واقعية تخدم المجتمع.',
      'تبني مساحة آمنة وملهمة لكل مشاركة.',
      'تدعم البنات في رحلتهم التعليمية خطوة بخطوة.',
      'تمكّن البنات بمهارات شخصية أساسية للنمو والتواصل والنجاح في الحياة.',
      'تقدّم محتوى جذابًا يلهم مجتمع نايلا ويثريه.',
      'تنظم وتدير مبادرات متنوعة داخل مجتمع نايلا.',
      'تصمم مواد بصرية مميزة لدعم مبادرات نايلا.',
      'تتواصل مع مجتمع نايلا وتنظم مبادرات التوعية.',
      'تتواصل مع الطالبات وتنظم مبادرات التوعية.'
    ],
    foundersTag: 'المؤسسات',
    foundersTitle: 'تعرّفي على المؤسِسات 💜',
    foundersDesc: 'قائدتان شابتان بتبنوا نايلة لتمكين بنات أسوان بالمجتمع والابتكار ومجالات STEAM.',
    founderRole: 'مؤسسة نايلا',
    founderBio1: 'مرحبًا، أنا ملك 👋<br>طالبة في المرحلة الثانوية، شغوفة بالتكنولوجيا والعمل المجتمعي وبناء أفكار تصنع أثرًا حقيقيًا.<br><br>شاركت في تجارب مثل Samsung Innovation Campus وGirls Make Program، وعملت على مشاريع وتنظيم محاضرات وأنشطة تطوعية.<br><br>أهتم بحل مشكلات واقعية تخص حياة الطالبات، وإتاحة الوصول، والصحة النفسية.<br><br>ما زلت أتعلم وأتطور ودائمًا مستعدة لتحديات جديدة 🚀',
    founderBio2: 'مرحبًا، أنا تقوى 👋<br>شغوفة بالتكنولوجيا والابتكار، وعندي مهارات في البرمجة والتصميم الجرافيكي والأمن السيبراني.<br><br>قدمت محاضرات توعوية في أسوان لنشر الوعي بالبرمجة والذكاء الاصطناعي.<br><br>حاليًا أعمل كمنسق عام في نقابة المخترعين المصريين، وأنا خريجة برنامج Girls Make.',
    contactTag: 'تواصل معنا',
    contactTitle: 'خلّينا نبني ده سوا!<br>يسعدنا نسمع منك 💜',
    contactDesc: 'عندك سؤال؟ حابة تنضمي؟ أو عايزة تتعاوني مع نايلة؟ ابعتيلنا في أي وقت — إحنا مجتمع واحد.',
    contactLocation: 'أسوان، مصر (فعاليات أونلاين وأوفلاين)',
    formFirstName: 'الاسم الأول',
    formLastName: 'اسم العائلة',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'الرسالة',
    formFirstNamePh: 'اكتبي اسمك',
    formLastNamePh: 'اسم العائلة',
    formEmailPh: 'you@example.com',
    formMessagePh: 'ابعتي رسالة لفريق نايلا...',
    formSubmit: 'إرسال إلى نايلا ✉️',
    footerSupport: 'الدعم',
    footerCommunity: 'المجتمع',
    footerQuickLinks: 'روابط سريعة',
    footerJoinParticipant: 'انضمي كمشاركة',
    footerJoinVolunteer: 'انضمي كمتطوعة',
    footerAbout: 'من نحن',
    footerPrograms: 'البرامج',
    footerContact: 'تواصل معنا',
    footerRights: '© 2026 نايلا | STEAM للبنات. جميع الحقوق محفوظة.',
    footerMade: 'صُنع بحب ❤️ لبنات الصعيد',
    formSuccess: '✅ تم إرسال الرسالة!',
    formError: 'حدث خطأ في الإرسال ❌'
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function setText(selector, value, index) {
  const nodes = document.querySelectorAll(selector);
  const node = typeof index === 'number' ? nodes[index] : nodes[0];
  if (node) node.textContent = value;
}

function setHTML(selector, value, index) {
  const nodes = document.querySelectorAll(selector);
  const node = typeof index === 'number' ? nodes[index] : nodes[0];
  if (node) node.innerHTML = value;
}

function setPlaceholder(selector, value, index) {
  const nodes = document.querySelectorAll(selector);
  const node = typeof index === 'number' ? nodes[index] : nodes[0];
  if (node) node.placeholder = value;
}

function setTextList(selector, values) {
  if (!Array.isArray(values)) return;
  const nodes = document.querySelectorAll(selector);
  values.forEach((value, index) => {
    if (nodes[index]) nodes[index].textContent = value;
  });
}

function applyLanguage(lang) {
  const t = i18n[lang];
  if (!t) return;

  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  setText('#langToggle', t.langToggle);
  setHTML('.nav-logo', '<span>📚</span> ' + t.brandName);
  setText('.nav-links a', t.navHome, 0);
  setText('.nav-links a', t.navPrograms, 1);
  setText('.nav-links a', t.navTeam, 2);
  setText('.nav-links a', t.navAbout, 3);
  setText('.nav-links a', t.navContact, 4);
  setText('.nav-actions a', t.navJoin, 0);
  setText('.nav-actions a', t.navLearn, 1);

  setText('.hero-badge', t.heroBadge);
  setText('.hero-brand-box p', t.brandTagline);
  setText('.hero-text-block h2 span', t.heroTitle, 0);
  setHTML('.hero-text-block h2', t.heroText, 1);
  setText('.hero-actions a', t.heroJoin, 0);
  setText('.hero-actions a', t.heroLearn, 1);

  setText('#About .section-tag', t.aboutTag);
  setHTML('#About .about-text h2', t.aboutTitle);
  setText('#About .about-text > p', t.aboutBody);
  setText('#About .feature-item h4', t.feat1Title, 0);
  setText('#About .feature-item p', t.feat1Body, 0);
  setText('#About .feature-item h4', t.feat2Title, 1);
  setText('#About .feature-item p', t.feat2Body, 1);
  setText('#About .feature-item h4', t.feat3Title, 2);
  setText('#About .feature-item p', t.feat3Body, 2);

  setText('#About .about-stat-card .lbl', t.statsGirls, 0);
  setText('#About .about-stat-card .lbl', t.statsSessions, 1);
  setText('#About .about-stat-card .lbl', t.statsVolunteers, 2);
  setText('#About .about-stat-card .lbl', t.statsEvents, 3);

  setText('#Subjects .section-tag', t.subjectsTag);
  setText('#Subjects .section-header h2', t.subjectsTitle);
  setText('#Subjects .section-header p', t.subjectsDesc);
  setTextList('#Subjects .subject-card h3', t.subjectTitles);
  setTextList('#Subjects .subject-card p', t.subjectBodies);
  setTextList('#Subjects .subject-card .meta-lbl', t.subjectMeta);

  setText('#Teachers .section-tag', t.teamTag);
  setText('#Teachers .section-header h2', t.teamTitle);
  setText('#Teachers .section-header p', t.teamDesc);
  setTextList('#Teachers .teacher-subject', t.teacherSubjects);
  setTextList('#Teachers .teacher-exp', t.teacherExp);
  setTextList('#Teachers .teacher-bio', t.teacherBio);

  setText('#Founders .section-tag', t.foundersTag);
  setText('#Founders .section-header h2', t.foundersTitle);
  setText('#Founders .section-header p', t.foundersDesc);
  setText('#Founders .founder-role', t.founderRole, 0);
  setText('#Founders .founder-role', t.founderRole, 1);
  setHTML('#Founders .founder-text p', t.founderBio1, 0);
  setHTML('#Founders .founder-text p', t.founderBio2, 1);

  setText('.stats-banner .lbl', t.statsGirls, 0);
  setText('.stats-banner .lbl', t.statsSessions, 1);
  setText('.stats-banner .lbl', t.statsVolunteers, 2);
  setText('.stats-banner .lbl', t.statsEvents, 3);

  setText('#Contact .section-tag', t.contactTag);
  setHTML('#Contact .contact-info h2', t.contactTitle);
  setText('#Contact .contact-info > p', t.contactDesc);
  setText('#Contact .contact-detail span', t.contactLocation, 2);
  setText('#Contact label', t.formFirstName, 0);
  setText('#Contact label', t.formLastName, 1);
  setText('#Contact label', t.formEmail, 2);
  setText('#Contact label', t.formMessage, 3);
  setPlaceholder('#Contact input', t.formFirstNamePh, 0);
  setPlaceholder('#Contact input', t.formLastNamePh, 1);
  setPlaceholder('#Contact input', t.formEmailPh, 2);
  setPlaceholder('#Contact textarea', t.formMessagePh);
  setText('#Contact button[type="submit"]', t.formSubmit);

  setText('footer .footer-col h5', t.footerSupport, 0);
  setText('footer .footer-col h5', t.footerCommunity, 1);
  setText('footer .footer-col h5', t.footerQuickLinks, 2);
  setText('footer .footer-col:nth-child(3) a', t.footerJoinParticipant, 0);
  setText('footer .footer-col:nth-child(3) a', t.footerJoinVolunteer, 1);
  setText('footer .footer-col:nth-child(4) a', t.footerAbout, 0);
  setText('footer .footer-col:nth-child(4) a', t.footerPrograms, 1);
  setText('footer .footer-col:nth-child(4) a', t.footerContact, 2);
  setHTML('footer .footer-brand .logo', '<span>✨</span> ' + t.brandName);
  setText('footer .footer-brand p', t.brandTagline);
  setText('footer .footer-bottom span', t.footerRights, 0);
  setText('footer .footer-bottom span', t.footerMade, 1);
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });
}

applyLanguage(currentLang);

// Form submit

function sendEmail(e) {
  e.preventDefault();

  const form = e.target;

  emailjs.send("service_yodfvhf", "template_0go4iy4", {
    from_name: form[0].value,
    email: form[2].value,
    message: form[3].value
  })
  .then(() => {
    const btn = form.querySelector('button');
    btn.textContent = i18n[currentLang].formSuccess;
    btn.style.background = '#10b981';
    form.reset();
  })
  .catch(() => {
    alert(i18n[currentLang].formError);
  });
}


