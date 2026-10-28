/* ============================================================
   Nayla website content — edit this file to update the site.
   محتوى موقع نايلة — عدّلوا الملف ده عشان تحدّثوا الموقع.

   - Each item has Arabic (ar) and English (en) text.
   - "participants" numbers feed the Impact section automatically.
   ============================================================ */

window.NAYLA_DATA = {

  /* Numbers that are not tied to one program */
  teamSize: 31,

  /* ---------- PROGRAMS ----------
     type: "core" | "course" | "workshop"
     icon: any emoji
  */
  programs: [
    {
      id: 'what-is-steam',
      type: 'core',
      icon: '🔭',
      participants: 25,
      title: { ar: 'What is STEAM?', en: 'What is STEAM?' },
      format: { ar: 'أونلاين · 4 أيام · مجاني', en: 'Online · 4 days · Free' },
      desc: {
        ar: 'برنامج أونلاين بيعرّف بنات أسوان والصعيد بمجالات الـ STEAM وأهميتها، ويعرض قصص نجاح لبنات في المجال، ويساعدهم ياخدوا أول خطوة عملية.',
        en: 'An online program introducing girls in Aswan and Upper Egypt to STEAM fields and why they matter, sharing success stories of women in the field and helping each girl take her first practical step.'
      },
      highlights: {
        ar: ['شهادة مشاركة', 'جلسات ملهمة', 'تفاعلي بالكامل'],
        en: ['Certificate of participation', 'Inspiring sessions', 'Fully interactive']
      }
    },
    {
      id: 'code-with-nayla',
      type: 'core',
      icon: '💻',
      participants: 55,
      title: { ar: 'Code with Nayla', en: 'Code with Nayla' },
      format: { ar: 'أوفلاين في أسوان + أونلاين · 12–19 سنة', en: 'Offline in Aswan + Online · Ages 12–19' },
      desc: {
        ar: 'برنامج برمجة للبنات المبتدئات تمامًا بدون أي خبرة سابقة: أساسيات لغة ++C والتفكير البرمجي، بتطبيق عملي وتوجيه مباشر من مهندسين متخصصين.',
        en: 'A coding program for complete beginners — no experience needed. C++ fundamentals and computational thinking, with hands-on practice and direct mentoring from engineers.'
      },
      highlights: {
        ar: ['لابتوب متوفر للمشاركات في أسوان', 'جلسات أونلاين للبنات خارج أسوان', 'تطبيق عملي'],
        en: ['Laptops provided in Aswan', 'Online sessions outside Aswan', 'Hands-on practice']
      }
    },
    {
      id: 'marketing-course',
      type: 'course',
      icon: '📣',
      participants: 91,
      title: { ar: 'كورس التسويق الرقمي والسوشيال ميديا', en: 'Digital & Social Media Marketing' },
      format: { ar: 'أونلاين · مجاني · 14–20 سنة', en: 'Online · Free · Ages 14–20' },
      desc: {
        ar: 'أساسيات التسويق الرقمي والعمل الحر: منصات السوشيال ميديا، تحديد الجمهور المستهدف، صناعة محتوى جذاب، التخطيط للمحتوى من الصفر، والتفكير الاستراتيجي.',
        en: 'Digital marketing and freelancing fundamentals: social platforms, target audience, engaging content, content planning from scratch, and strategic thinking.'
      },
      highlights: {
        ar: ['شهادة معتمدة من Nayla STEAM Aswan', 'بدعم من Girl Up'],
        en: ['Certificate from Nayla STEAM Aswan', 'Supported by Girl Up']
      }
    },
    {
      id: 'hr-course',
      type: 'course',
      icon: '🤝',
      participants: 35,
      title: { ar: 'كورس الموارد البشرية والجاهزية لسوق العمل', en: 'HR Essentials & Career Readiness' },
      format: { ar: 'مجاني بالكامل', en: 'Completely free' },
      desc: {
        ar: 'كورس بيحل مشكلة "مطلوب خبرة سابقة": أساسيات الـ HR، مهارات التواصل وإدارة الأشخاص، التوظيف وإجراء المقابلات، وتنظيم العمل وإدارة الفرق.',
        en: 'Built to solve the "experience required" problem: HR basics, communication and people management, recruitment and interviews, and organizing work and teams.'
      },
      highlights: {
        ar: ['المتميزين ينضموا لفريق نايلة كمتطوعين', 'خبرة عملية تتضاف للـ CV'],
        en: ['Top participants join the Nayla team', 'Real experience for your CV']
      }
    },
    {
      id: 'kwk-prep',
      type: 'workshop',
      icon: '🚀',
      participants: 37,
      title: { ar: 'Ready, NOT Perfect', en: 'Ready, NOT Perfect' },
      format: { ar: 'جلسة تجهيز لمعسكر Kode With Klossy', en: 'Kode With Klossy prep session' },
      desc: {
        ar: 'جلسة إعداد ذهني وعملي للبنات المتقدمات لمعسكرات التكنولوجيا العالمية: تخطي حاجز اللغة والأكسنت، فهم طبيعة المعسكر، والتعامل مع التحديات والعمل في فرق متعددة الثقافات.',
        en: 'Mental and practical prep for girls applying to global tech camps: getting past language and accent barriers, understanding the camp, handling challenges and working in multicultural teams.'
      },
      highlights: { ar: [], en: [] }
    },
    {
      id: 'marketing-ai-panel',
      type: 'workshop',
      icon: '🤖',
      participants: 33,
      title: { ar: 'Marketing × AI', en: 'Marketing × AI Panel' },
      format: { ar: 'حلقة نقاش', en: 'Panel discussion' },
      desc: {
        ar: 'إزاي نستخدم أدوات الذكاء الاصطناعي في التسويق وصناعة المحتوى وتحليل البيانات وتطوير الاستراتيجيات، مع الحفاظ على اللمسة البشرية.',
        en: 'How to use AI tools in marketing, content creation, data analysis and strategy — while keeping the human touch.'
      },
      highlights: { ar: [], en: [] }
    },
    {
      id: 'research-workshop',
      type: 'workshop',
      icon: '🔬',
      participants: 15,
      title: { ar: 'ورشة البحث العلمي', en: 'Scientific Literacy & Research' },
      format: { ar: 'بالتعاون مع Urbanbears Network', en: 'With Urbanbears Network' },
      desc: {
        ar: 'رحلة لاكتشاف إزاي نفكر زي العلماء، ونقرا الأبحاث بالطريقة الصحيحة، ونبدأ رحلة التعلم في عالم العلم والبحث. تقديم خديجة البدوي.',
        en: 'Learn to think like a scientist, read research papers the right way, and start your journey into science and research. Presented by Khadija Elbedwehy.'
      },
      highlights: { ar: [], en: [] }
    },
    {
      id: 'graphic-design',
      type: 'workshop',
      icon: '🎨',
      participants: 15,
      title: { ar: 'ورشة الجرافيك ديزاين', en: 'Graphic Design Workshop' },
      format: { ar: 'Nayla × بصمة · أسوان', en: 'Nayla × Basma · Aswan' },
      desc: {
        ar: '50 معلومة أساسية في الجرافيك ديزاين عشان تبدأ صح، تبني أول Portfolio، وتعرف إزاي تجيب أول عميل.',
        en: '50 graphic design essentials to get started, build your first portfolio, and land your first client.'
      },
      highlights: { ar: [], en: [] }
    }
  ],

  /* ---------- TEAM ---------- */
  founders: [
    {
      name: { ar: 'ملك عدلان', en: 'Malak Adlan' },
      photo: 'malak.jpeg',
      bio: {
        ar: 'طالبة ثانوي شغوفة بالتكنولوجيا والعمل المجتمعي وبناء أفكار ليها أثر حقيقي. شاركت في Samsung Innovation Campus وGirls Make، ومهتمة بحل مشكلات حياة الطلاب، وإتاحة الوصول، والصحة النفسية.',
        en: 'A high school student passionate about technology, community work and ideas with real impact. Alumna of Samsung Innovation Campus and Girls Make, focused on student life, accessibility and mental well-being.'
      }
    },
    {
      name: { ar: 'تقوى مجدي', en: 'Taqwa Magdy' },
      photo: 'takwa.jpeg',
      bio: {
        ar: 'شغوفة بالتكنولوجيا والابتكار، وعندها مهارات في البرمجة والجرافيك ديزاين والأمن السيبراني. قدّمت جلسات توعية في أسوان عن البرمجة والذكاء الاصطناعي، ومنسق عام في نقابة المخترعين المصريين، وخريجة Girls Make.',
        en: 'Passionate about technology and innovation, with skills in programming, graphic design and cybersecurity. Has delivered awareness sessions on programming and AI across Aswan; General Coordinator at the Egyptian Inventors Syndicate and a Girls Make graduate.'
      }
    }
  ],

  team: [
    { name: { ar: 'م. يوسف إيهاب', en: 'Eng. Youssef Ehab' }, photo: 'youssef.jpeg',
      role: { ar: 'منتور برمجة · مهندس برمجيات', en: 'Programming Mentor · Software Engineer' } },
    { name: { ar: 'م. أحمد عبدالله', en: 'Eng. Ahmed Abdullah' }, photo: 'ahmed.jpeg',
      role: { ar: 'منتور برمجة · مهندس', en: 'Programming Mentor · Engineer' } },
    { name: { ar: 'م. فرح عبده', en: 'Eng. Farah Abdo' }, photo: 'farah.jpeg',
      role: { ar: 'منتور متطوعة · Community Lead', en: 'Volunteer Mentor · Community Lead' } },
    { name: { ar: 'خديجة البدوي', en: 'Khadija Elbedwehy' }, photo: 'khadija.jpeg',
      role: { ar: 'منتور متطوعة · البحث العلمي', en: 'Volunteer Mentor · Research' } },
    { name: { ar: 'م. فاطمة أحمد', en: 'Eng. Fatima Ahmed' }, photo: 'fatima.jpeg',
      role: { ar: 'منتور متطوعة · Soft Skills', en: 'Volunteer Mentor · Soft Skills' } },
    { name: { ar: 'م. تحية أيمن', en: 'Eng. Tahya Ayman' }, photo: 'tahia.jpeg',
      role: { ar: 'مهندسة طاقة · التواصل والتوعية', en: 'Energy Engineer · Communication & Outreach' } },
    { name: { ar: 'رودينا أمجد', en: 'Rodina Amgad' }, photo: 'rodina.jpeg',
      role: { ar: 'كتابة المحتوى', en: 'Content Writing' } },
    { name: { ar: 'سما سعد', en: 'Sama Saad' }, photo: 'sama.jpeg',
      role: { ar: 'التنظيم والإدارة', en: 'Organization & Management' } },
    { name: { ar: 'سما كرم', en: 'Sama Karam' }, photo: 'sama karam.jpeg',
      role: { ar: 'التنظيم والإدارة', en: 'Organization & Management' } },
    { name: { ar: 'جنى علي', en: 'Jana Ali' }, photo: 'jana.jpeg',
      role: { ar: 'التواصل والتوعية', en: 'Communication & Outreach' } }
  ],

  /* ---------- PARTNERS ---------- */
  partners: [
    {
      name: 'Girl Up',
      note: { ar: 'مبادرة تابعة لمؤسسة الأمم المتحدة — نايلة جزء من شبكة Girl Up MENA وبتدعم شهادات كورس التسويق.',
              en: 'A UN Foundation initiative — Nayla is part of the Girl Up MENA network, which backs our marketing course certificates.' }
    },
    {
      name: 'Urbanbears Network',
      note: { ar: 'شريك ورشة البحث العلمي ومحو الأمية البحثية.',
              en: 'Partner for our Scientific Literacy & Research workshop.' }
    },
    {
      name: { ar: 'بصمة / سوا', en: 'Basma / Sawa' },
      note: { ar: 'مساحة ثقافية في أسوان — شريك ورشة الجرافيك ديزاين.',
              en: 'A cultural space in Aswan — partner for our graphic design workshop.' }
    }
  ]
};
