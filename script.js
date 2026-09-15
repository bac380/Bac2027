// Comprehensive Algerian Baccalaureate Syllabus Database for ALL Streams
const bacDatabase = {
  exp_sci: {
    name: "علوم تجريبية",
    icon: "fa-flask",
    subjects: [
      {
        id: "sci_nat",
        name: "علوم الطبيعة والحياة",
        coeff: 6,
        lessons: ["تركيب البروتين والنشاط الإنزيمي", "دور البروتينات في الدفاع عن الذات (المناعة)", "دور البروتينات في الاتصال العصبي", "التكتونية العامة والطاقة الضوئية"],
        exercises: ["تمارين استرجاع المعارف (التمرين الأول)", "تمارين الاستدلال العلمي والمسعى العلمي (التمرين 2 و 3)", "مواضيع حوليات البكالوريا السابقة مع الحلول النموذجية"],
        revisions: ["ملخص آليات النسخ الترجمة والأنزيمات", "مخططات المناعة الخلطية والخلوية والسيدا", "منهجية الإجابة الخاصة بالتفسير والتحليل والاستنتاج"]
      },
      {
        id: "phy_chem",
        name: "العلوم الفيزيائية",
        coeff: 5,
        lessons: ["المتابعة الزمنية لتحول كيميائي", "تطور جملة ميكانيكية (قوانين نيوتن)", "الظواهر الكهربائية (RC و RL)", "تطور جملة كيميائية نحو حالة التوازن (أحماض وأسس)", "التحولات النواوية والطاقة"],
        exercises: ["سلاسل تمارين الأستاذ قزوري وأستاذ قزونة", "تمارين حوليات البكالوريا السابقة للمواضيع المقترحة", "تمارين قياس ناقلية وأكسدة إرجاع"],
        revisions: ["ملخص كامل القوانين الوحدات والتحويلات", "قوانين الحركة والأقمار الاصطناعية والسقوط الشاقولي", "برهنة العلاقات الشائعة في الأحماض والأسس"]
      },
      {
        id: "math_sci",
        name: "الرياضيات",
        coeff: 5,
        lessons: ["الدوال العددية والاستمرارية والاشتقاقية", "الدالة الأسية والدالة اللوغاريتمية", "المتتاليات العددية والاستدلال بالتراجع", "الهندسة في الفضاء والاحتمالات الأعداد المركبة"],
        exercises: ["دراسة دوال شاملة مع التمثيل البياني", "سلاسل التمارين في المتتاليات والاحتمالات", "حلول موضوعي البكالوريا السابقة"],
        revisions: ["ملخص القوانين وإزالة حالات عدم التعيين", "طرق برهان المتتاليات ومناهج الحساب الدقيق"]
      },
      {
        id: "arabic_sci",
        name: "اللغة العربية وآدابها",
        coeff: 3,
        lessons: ["ظاهرة الالتزام في الشعر الحديث", "شعر القضية الفلسطينية والجزائرية", "النثر العلمي المتأدب", "القواعد: الإعراب التقديري واللفظي وإعراب إذ وإذا"],
        exercises: ["تطبيقات البناء الفكري والبناء اللغوي", "مواضيع بكالوريا سابقة مع التقويم النقدي"],
        revisions: ["ملخص الصور البيانية والمحسنات البديعية", "تجميعية التقويمات النقدية المقترحة"]
      },
      {
        id: "french_sci",
        name: "اللغة الفرنسية",
        coeff: 2,
        lessons: ["Projet 1: Le texte historique", "Projet 2: Le texte d'appel", "Projet 3: Le débat d'idées"],
        exercises: ["Sujets de BAC corrigés", "Exercices sur le compte rendu objectif"],
        revisions: ["Résumé des outils de la langue et règles du compte rendu"]
      },
      {
        id: "eng_sci",
        name: "اللغة الإنجليزية",
        coeff: 2,
        lessons: ["Ethics in Business", "Safety First / Advertising", "Astronomy and Solar System"],
        exercises: ["BAC Grammar Tasks & Written Expressions", "Passages & Comprehension Exercises"],
        revisions: ["Grammar Rules Summary & Key Essays"]
      },
      {
        id: "philo_sci",
        name: "الفلسفة",
        coeff: 2,
        lessons: ["المشكلة والجميعة", "فلسفة العلوم والرياضيات", "العلوم التجريبية والعلوم البيولوجية", "المشعور واللاشعور والأخلاق"],
        exercises: ["تدريبات على كتابة مقالة جدلية واستقصاء بالوضع", "تحليل نصوص فلسفية بكالوريا"],
        revisions: ["مخططات المقالات الفلسفية المقررة"]
      },
      {
        id: "hist_geo_sci",
        name: "التاريخ والجغرافيا",
        coeff: 2,
        lessons: ["بروز الثنائية القطبية والحرب الباردة", "الثورة الجزائرية 1954-1962", "واقع الاقتصاد العالمي والقوى الاقتصادية الكبرى"],
        exercises: ["توقيع المصطلحات والشخصيات والخرائط", "رسم البيانات والتعليق على الجداول"],
        revisions: ["ملخص شامل التواريخ المصطلحات والشخصيات"]
      },
      {
        id: "islamic_sci",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["وسائل القرآن في تثبيت العقيدة", "موقف القرآن من العقل والصحة النفسية", "أحكام الأسرة والمعاملات المالية الجائزة والمحرمة"],
        exercises: ["تطبيقات استخراج الفوائد الأحكام والآيات"],
        revisions: ["ملخص كراس العلوم الإسلامية الشامل"]
      }
    ]
  },
  foreign_lang: {
    name: "لغات أجنبية",
    icon: "fa-language",
    subjects: [
      {
        id: "spanish_lang",
        name: "اللغة الإسبانية (أو الإيطالية/الألمانية)",
        coeff: 5,
        lessons: ["Ámbito Personal y Social", "Ámbito Educativo y Laboral", "Ámbito Cultural y Medio Ambiente", "Gramática: Ser/Estar, Subjuntivo, Gerundio, Tiempos del Pasado"],
        exercises: ["Comprensión del texto y Expresión escrita", "Ejercicios de Gramática y Transformaciones"],
        revisions: ["Vocabulario por ámbitos y Resumen de reglas gramaticales"]
      },
      {
        id: "arabic_lang",
        name: "اللغة العربية وآدابها",
        coeff: 5,
        lessons: ["أدب عصر الضعف والانحطاط", "المدرسة الرومانسية وشعر المهجر", "شعر القضية الفلسطينية والجزائرية", "القواعد: الإعراب اللفظي والتقديري وأحكام إذ وإذا"],
        exercises: ["تحليل النصوص الشعرية والنثرية بكالوريا", "تطبيقات الإعراب والبلاغة"],
        revisions: ["ملخص البناء الفكري والبلاغة والتقويم النقدي"]
      },
      {
        id: "french_lang",
        name: "اللغة الفرنسية",
        coeff: 5,
        lessons: ["Projet 1: Le texte historique", "Projet 2: L'appel / L'exhortation", "Projet 3: Le débat d'idées"],
        exercises: ["Production écrite: Compte rendu critique & objectif", "BAC Sujets corrigés"],
        revisions: ["Guide complet du Compte Rendu et Visée communicative"]
      },
      {
        id: "eng_lang",
        name: "اللغة الإنجليزية",
        coeff: 5,
        lessons: ["Ancient Civilizations", "Ethics in Business", "Education in the World", "Feelings and Emotions"],
        exercises: ["Written Expression Prompts", "BAC Reading Comprehension Tasks"],
        revisions: ["Grammar Cheat Sheet & Vocabulary Guide"]
      },
      {
        id: "hist_geo_lang",
        name: "التاريخ والجغرافيا",
        coeff: 2,
        lessons: ["الحرب الباردة والصراع بين المعسكرين", "إستراتيجية تنفيذ الثورة الجزائرية", "واقع الاقتصاد العالمي والتكتلات الاقتصادية"],
        exercises: ["تطبيقات الخرائط والشخصيات والمصطلحات"],
        revisions: ["الملخص الذهبي للتواريخ والمصطلحات"]
      },
      {
        id: "philo_lang",
        name: "الفلسفة",
        coeff: 2,
        lessons: ["إدراك العالم الخارجي (الإحساس والإدراك، اللغة والفكر)", "الشعور واللاشعور والذاكرة والتخيل", "الأخلاق والسلوك الفردي والجماعي"],
        exercises: ["تدريبات المقالات الجدلية والاستقصائية"],
        revisions: ["منهجية تحليل النص والمقالات الجاهزة"]
      },
      {
        id: "islamic_lang",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["العقيدة الإسلامية والعقل", "الصحة النفسية والجسدية", "أحكام النسب والكفالة والتبني"],
        exercises: ["أسئلة بكالوريا سابقة مع حلول سريعة"],
        revisions: ["ملخص حفظ دروس العلوم الإسلامية"]
      },
      {
        id: "math_lang",
        name: "الرياضيات",
        coeff: 2,
        lessons: ["المتتاليات الحسابية والهندسية", "الدوال الكثيرات الحدود والتآلفية", "الاستدلال بالتراجع وتغيرات الدالة"],
        exercises: ["تمارين المتتاليات الشائعة في البكالوريا"],
        revisions: ["ملخص قوانين المتتاليات والدوال الأساسية"]
      }
    ]
  },
  literary: {
    name: "آداب وفلسفة",
    icon: "fa-book",
    subjects: [
      {
        id: "philo_lit",
        name: "الفلسفة",
        coeff: 6,
        lessons: ["الإحساس والإدراك واللغة والفكر", "الشعور واللاشعور والذاكرة والتخيل", "الأسرة والأنظمة الاقتصادية والسياسية", "فلسفة الرياضيات والعلوم التجريبية"],
        exercises: ["كتابة مقالات جدلية واستقصاء بالوضع كاملة", "تحليل نصوص فلسفية مفصلة"],
        revisions: ["جميع مخططات المقالات الفلسفية المقررة"]
      },
      {
        id: "arabic_lit",
        name: "اللغة العربية وآدابها",
        coeff: 6,
        lessons: ["أدب عصر الضعف والمدائح النبوية", "الشعر الرومانسي وشعر التفعيلة والالتزام", "النثر العلمي المتأدب وروافد الأدب", "القواعد: التمييز، البدل، عطف البيان، وإعراب الجمل"],
        exercises: ["نصوص وبكالوريات سابقة للبناء الفكري واللغوي"],
        revisions: ["دليل التقييم النقدي والإعراب البلاغي"]
      },
      {
        id: "hist_geo_lit",
        name: "التاريخ والجغرافيا",
        coeff: 4,
        lessons: ["العالم بعد 1945 والصراع الأيديولوجي", "الثورة الجزائرية واستعادة السيادة الوطنية", "المناطق الاقتصادية الكبرى والعولمة"],
        exercises: ["توقيع المصطلحات والخرائط البيانية"],
        revisions: ["ملخص شامل للتواريخ الشخصيات والمفاهيم"]
      },
      {
        id: "french_lit",
        name: "اللغة الفرنسية",
        coeff: 3,
        lessons: ["Le texte historique", "L'appel / L'exhortation", "Le débat d'idées"],
        exercises: ["Compte rendu critique exercices", "BAC Sujets"],
        revisions: ["Résumé des points clés de grammaire et rédaction"]
      },
      {
        id: "eng_lit",
        name: "اللغة الإنجليزية",
        coeff: 3,
        lessons: ["Ancient Civilizations", "Ethics in Business", "Education"],
        exercises: ["Writing Essays & Grammar Tasks"],
        revisions: ["Key Essays and Core Grammar Summary"]
      },
      {
        id: "islamic_lit",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["العقيدة والعقل والصحة النفسية", "أحكام الأسرة المعاملات المالية والجريمة والعقاب"],
        exercises: ["تطبيقات على الآيات والأحكام الشرعية"],
        revisions: ["ملخص حفظ المادة المعتمد"]
      },
      {
        id: "math_lit",
        name: "الرياضيات",
        coeff: 2,
        lessons: ["المتتاليات الحسابية والهندسية", "الدوال ومخطط التغيرات"],
        exercises: ["تمارين بكالوريا مبسطة في المتتاليات والدوال"],
        revisions: ["ملخص القوانين الحسابية الهامة"]
      }
    ]
  },
  math_stream: {
    name: "رياضيات",
    icon: "fa-calculator",
    subjects: [
      {
        id: "math_m",
        name: "الرياضيات",
        coeff: 7,
        lessons: ["الدوال والاستمرارية والاشتقاقية والتقعر", "الدوال الأسية اللوغاريتمية والزايد المقارن", "الأعداد والحساب (الأعداد الأولية والموافقات)", "المتتاليات والأعداد المركبة والهندسة الفضائية"],
        exercises: ["مسائل شاملة ودوال معقدة", "تمارين الموافقة والحساب والأعداد المركبة BAC"],
        revisions: ["ملخص قوانين الرياضيات العميقة وإزالة عدم التعيين"]
      },
      {
        id: "phy_m",
        name: "العلوم الفيزيائية",
        coeff: 6,
        lessons: ["المتابعة الزمنية والميكانيك المتقدم", "الكهرباء RC, RL, RLC والاهتزازات", "الأحماض والأسس والتحولات النواوية"],
        exercises: ["سلاسل التمارين الصعبة وتمارين البكالوريا المجهزة"],
        revisions: ["ملخص القوانين والاهتزازات والوحدات الفيزيائية"]
      },
      {
        id: "sci_m",
        name: "علوم الطبيعة والحياة",
        coeff: 2,
        lessons: ["تركيب البروتين النشاط الإنزيمي المناعة والاتصال العصبي"],
        exercises: ["تمارين استرجاع المهارات والاستدلال العلمية"],
        revisions: ["ملخص مختصر وشامل لمادة العلوم"]
      },
      {
        id: "arabic_m",
        name: "اللغة العربية",
        coeff: 2,
        lessons: ["الالتزام الشفافية الشعرية والقواعد المفصلة"],
        exercises: ["تطبيقات البناء اللغوي والفكري"],
        revisions: ["ملخص قواعد وبلاغة اللغة العربية"]
      },
      {
        id: "hist_geo_m",
        name: "التاريخ والجغرافيا",
        coeff: 2,
        lessons: ["الصراع بين المعسكرين والثورة الجزائرية والاقتصاد العالمي"],
        exercises: ["توقيع المصطلحات والخرائط الجغرافية"],
        revisions: ["ملخص شامل للتواريخ الشخصيات والخرائط"]
      },
      {
        id: "philo_m",
        name: "الفلسفة",
        coeff: 2,
        lessons: ["فلسفة العلوم الرياضيات اليقين الرياضي والعلوم التجريبية"],
        exercises: ["مقالات جدلية مخصصة لشعبة الرياضيات"],
        revisions: ["منهجية المقالة الفلسفية العلمية"]
      },
      {
        id: "islamic_m",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["العقيدة والعقل والصحة النفسية وأحكام الأسرة"],
        exercises: ["تطبيقات الأحكام والفوائد"],
        revisions: ["ملخص حفظ دروس العلوم الإسلامية"]
      },
      {
        id: "foreign_m",
        name: "اللغة الفرنسية والإنجليزية",
        coeff: 4,
        lessons: ["Projet Historique / Ancient Civilizations & Ethics"],
        exercises: ["BAC Written Expression & Grammar Tasks"],
        revisions: ["Summaries and Rule Sheets"]
      }
    ]
  },
  tech_math: {
    name: "تقني رياضي",
    icon: "fa-gears",
    subjects: [
      {
        id: "tech_spec",
        name: "التكنولوجيا (كهربائية / ميكانيكية / مدنية / طرائق)",
        coeff: 7,
        lessons: ["الأنظمة الآلية والمنطق الشعاعي", "التحليل البنيوي والميكانيكي والإنشاء", "الكيمياء العضوية والديناميكا الحرارية (حسب الفرع)"],
        exercises: ["مواضيع وبكالوريات هندسية سابقة كاملة", "دراسة أنظمة وآليات معقدة"],
        revisions: ["ملخص القوانين المخططات والتصاميم الهندسية"]
      },
      {
        id: "math_tech",
        name: "الرياضيات",
        coeff: 6,
        lessons: ["الدوال الاستمرارية المتتاليات الهندسة والأعداد المركبة"],
        exercises: ["تمارين شاملة ومسائل دوال بكالوريا"],
        revisions: ["ملخص القوانين ومناهج الحساب المضمون"]
      },
      {
        id: "phy_tech",
        name: "العلوم الفيزيائية",
        coeff: 6,
        lessons: ["المتابعة الزمنية الميكانيك الكهرباء الأحماض والأسس والنواوي"],
        exercises: ["سلاسل التمارين وتمارين البكالوريا مع الحل"],
        revisions: ["ملخص القوانين والبرهانات المباشرة"]
      },
      {
        id: "arabic_tech",
        name: "اللغة العربية",
        coeff: 2,
        lessons: ["الالتزام شعر القضية والنثر العلمي والقواعد"],
        exercises: ["تطبيقات مواضيع بكالوريا سابقة"],
        revisions: ["ملخص البناء الفكري والبلاغة"]
      },
      {
        id: "hist_geo_tech",
        name: "التاريخ والجغرافيا",
        coeff: 2,
        lessons: ["الحرب الباردة الثورة الجزائرية والاقتصاد العالمي"],
        exercises: ["تطبيقات المصطلحات والخرائط"],
        revisions: ["ملخص كراس التاريخ والجغرافيا"]
      },
      {
        id: "philo_tech",
        name: "الفلسفة",
        coeff: 2,
        lessons: ["فلسفة العلوم والرياضيات والنتائج العلمية"],
        exercises: ["تدريبات المقالات الفلسفية المخصصة"],
        revisions: ["منهجية كتابة المقال الفلسفي"]
      },
      {
        id: "islamic_tech",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["دروس العقيدة العقل والأسرة والمعاملات"],
        exercises: ["استخراج الأحكام والفوائد"],
        revisions: ["كراس العلوم الإسلامية الشامل"]
      },
      {
        id: "lang_tech",
        name: "اللغات الأجنبية (فرنساوية وإنجليزي)",
        coeff: 4,
        lessons: ["Projet Historique / Ethics & Safety"],
        exercises: ["BAC Grammar & Written Prompts"],
        revisions: ["Rule Cheat Sheets & Summaries"]
      }
    ]
  },
  management: {
    name: "تسيير واقتصاد",
    icon: "fa-chart-pie",
    subjects: [
      {
        id: "accounting",
        name: "التسيير المحاسبي والمالي",
        coeff: 6,
        lessons: ["أعمال نهاية السنة والاستهلاكات ومؤونات نقص القيمة", "تسوية الحسابات وحسابات النتائج حسب الطبيعة والوظيفة", "إعداد الميزانية الوظيفية وتحليل الاستغلال وخزينة المؤسسة"],
        exercises: ["تطبيقات حسابية وإعداد الجداول والميزانية BAC"],
        revisions: ["ملخص القيود المحاسبية والقوانين المالية"]
      },
      {
        id: "economics",
        name: "الاقتصاد والمكجمنت",
        coeff: 5,
        lessons: ["النقود والنظام المصرفي", "السوق والأسعار والتجارة الخارجية", "المرونة والشركة والوظائف التسييرية"],
        exercises: ["أسئلة الفهم والمواضيع النموذجية بكالوريا"],
        revisions: ["حفظ المصطلحات والتعاريف الشاملة"]
      },
      {
        id: "law",
        name: "القانون",
        coeff: 2,
        lessons: ["عقد العمل وعلاقات العمل الفردية والجماعية", "الشركات التجارية (شركة التضامن المسؤولية المحدودة المساهمة)", "الضرائب والرسوم والهيئات القضائية"],
        exercises: ["حل قضايا قانونية واستشارات بكالوريا"],
        revisions: ["ملخص الكراس الشامل لمادة القانون"]
      },
      {
        id: "math_mgt",
        name: "الرياضيات",
        coeff: 5,
        lessons: ["الدوال والاستمرارية", "المتتاليات الحسابية والهندسية والرياضيات المالية (الفوائد المركبة والأنقاط)"],
        exercises: ["تمارين الرياضيات المالية المتكررة بكالوريا"],
        revisions: ["ملخص قوانين الرياضيات المالية والدوال"]
      },
      {
        id: "arabic_mgt",
        name: "اللغة العربية",
        coeff: 3,
        lessons: ["ظاهرة الالتزام والنثر العلمي المكتوب والقواعد"],
        exercises: ["مواضيع البناء الفكري واللغوي بكالوريا"],
        revisions: ["ملخص البلاغة وقواعد اللغة"]
      },
      {
        id: "hist_geo_mgt",
        name: "التاريخ والجغرافيا",
        coeff: 4,
        lessons: ["الحرب الباردة الثورة الجزائرية والاقتصاد العالمي وحركة رؤوس الأموال"],
        exercises: ["توقيع المصطلحات والخرائط والرسومات البيانية"],
        revisions: ["ملخص التاريخ والجغرافيا الشامل"]
      },
      {
        id: "philo_mgt",
        name: "الفلسفة",
        coeff: 2,
        lessons: ["المشكلة والأنساق الاقتصادية والأنظمة والعلوم"],
        exercises: ["مقالات الجدل والاستقصاء بالوضع"],
        revisions: ["مخططات المقالات الجاهزة"]
      },
      {
        id: "islamic_mgt",
        name: "العلوم الإسلامية",
        coeff: 2,
        lessons: ["دروس العقيدة العقل الصحة والمعاملات المالية"],
        exercises: ["استخراج الأحكام والفوائد الشرعية"],
        revisions: ["ملخص مادة العلوم الإسلامية"]
      },
      {
        id: "lang_mgt",
        name: "اللغات الأجنبية (فرنسية وإنجليزية)",
        coeff: 4,
        lessons: ["Textes Historiques / Ethics in Business & Management"],
        exercises: ["Comprehension & Written Prompts BAC"],
        revisions: ["Key Vocabulary and Rules Sheets"]
      }
    ]
  }
};

// Global App States
let currentStream = "exp_sci";
let currentViewMode = "lessons"; // lessons | exercises | revisions
let savedChecklist = JSON.parse(localStorage.getItem('bac_portal_saved_v1')) || {};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderStreamButtons();
  loadStreamData(currentStream);
});

// Render Stream Selection Buttons
function renderStreamButtons() {
  const container = document.getElementById('stream-buttons');
  container.innerHTML = '';

  Object.keys(bacDatabase).forEach(key => {
    const stream = bacDatabase[key];
    const btn = document.createElement('button');
    btn.className = `stream-btn ${key === currentStream ? 'active' : ''}`;
    btn.onclick = () => selectStream(key);
    btn.innerHTML = `<i class="fa-solid ${stream.icon}"></i> ${stream.name}`;
    container.appendChild(btn);
  });
}

// Switch Active Stream
function selectStream(streamKey) {
  currentStream = streamKey;
  renderStreamButtons();
  loadStreamData(streamKey);
}

// Switch View Mode (Lessons / Exercises / Revisions)
function switchViewMode(mode, event) {
  currentViewMode = mode;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
  loadStreamData(currentStream);
}

// Load Content for Current Stream and View Mode
function loadStreamData(streamKey) {
  const stream = bacDatabase[streamKey];
  document.getElementById('active-stream-name').innerText = stream.name;

  const container = document.getElementById('subjects-container');
  container.innerHTML = '';

  stream.subjects.forEach(subj => {
    const card = document.createElement('div');
    card.className = 'subject-card';

    let html = `
      <div class="subject-card-header">
        <span class="subject-card-title"><i class="fa-solid fa-book-bookmark"></i> ${subj.name}</span>
        <span class="coeff-badge">المعامل: ${subj.coeff}</span>
      </div>
    `;

    let itemsToDisplay = [];
    let groupTitle = "";

    if (currentViewMode === 'lessons') {
      itemsToDisplay = subj.lessons;
      groupTitle = "البرنامج والدروس المقرر دراستها:";
    } else if (currentViewMode === 'exercises') {
      itemsToDisplay = subj.exercises;
      groupTitle = "التمارين والحوليات النموذجية:";
    } else if (currentViewMode === 'revisions') {
      itemsToDisplay = subj.revisions;
      groupTitle = "المراجعات والملخصات المركزية:";
    }

    html += `<div class="item-group"><div class="item-group-title">${groupTitle}</div>`;

    itemsToDisplay.forEach((itemText, idx) => {
      const itemId = `${streamKey}_${subj.id}_${currentViewMode}_${idx}`;
      const isChecked = savedChecklist[itemId] ? 'checked' : '';
      const doneClass = savedChecklist[itemId] ? 'done' : '';

      html += `
        <label class="checklist-item ${doneClass}" id="lbl_${itemId}">
          <input type="checkbox" id="${itemId}" ${isChecked} onchange="toggleItemCheck('${itemId}')">
          <span>${itemText}</span>
        </label>
      `;
    });

    html += `</div>`;
    card.innerHTML = html;
    container.appendChild(card);
  });

  updateProgressMeter();
}

// Toggle Item State
function toggleItemCheck(itemId) {
  const checkbox = document.getElementById(itemId);
  const label = document.getElementById(`lbl_${itemId}`);

  if (checkbox.checked) {
    savedChecklist[itemId] = true;
    label.classList.add('done');
  } else {
    delete savedChecklist[itemId];
    label.classList.remove('done');
  }

  localStorage.setItem('bac_portal_saved_v1', JSON.stringify(savedChecklist));
  updateProgressMeter();
}

// Calculate Progress for Current Stream
function updateProgressMeter() {
  const stream = bacDatabase[currentStream];
  let totalCount = 0;

  stream.subjects.forEach(subj => {
    totalCount += subj.lessons.length + subj.exercises.length + subj.revisions.length;
  });

  let completedCount = 0;
  Object.keys(savedChecklist).forEach(key => {
    if (key.startsWith(currentStream)) {
      completedCount++;
    }
  });

  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  document.getElementById('progress-percent-text').innerText = `${percent}%`;
  document.getElementById('progress-fill-bar').style.width = `${percent}%`;
}

// Global Live Search Filter
function searchContent() {
  const query = document.getElementById('global-search').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.subject-card');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
