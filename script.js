// =========================================================================
// قاعدة البيانات الكبرى: جميع الشعب، الفصول الثلاثة، المواد والتمارين
// =========================================================================
const defaultDatabase = {
    languages: {
        subjects: [
            // ------------------ الفصل الأول ------------------
            {
                name: "اللغة الإسبانية",
                coef: "المعامل: 5",
                term: "term1",
                items: [
                    { title: "📖 Gramática: El Presente de Indicativo y Subjuntivo", url: "#" },
                    { title: "📖 Vocabulario: La juventud y los problemas sociales", url: "#" },
                    { title: "📝 ملخص قواعد الفصل الأول كاملة + تصاريف الأفعال الشاذة", url: "#" },
                    { title: "✍️ منهجية كتابة Expresión Escrita الجاهزة للنقطة الكاملة", url: "#" }
                ]
            },
            {
                name: "اللغة الفرنسية",
                coef: "المعامل: 5",
                term: "term1",
                items: [
                    { title: "📖 Le texte historique: Les caractéristiques et la visée communicative", url: "#" },
                    { title: "📖 L'expression de la cause et de la conséquence", url: "#" },
                    { title: "📝 Le compte rendu objectif du texte historique (نموذج ثابت)", url: "#" }
                ]
            },
            {
                name: "اللغة الإنجليزية",
                coef: "المعامل: 5",
                term: "term1",
                items: [
                    { title: "📖 Unit 1: Ethics in Business (Vocabulary & Concepts)", url: "#" },
                    { title: "📖 Grammar: Expressing Wish, Desire and Regret (Had better / It's high time)", url: "#" },
                    { title: "📝 All Written Productions for Unit 1 (Corruption, Counterfeiting)", url: "#" }
                ]
            },
            {
                name: "الأدب العربي",
                coef: "المعامل: 5",
                term: "term1",
                items: [
                    { title: "📖 شعر المدائح النبوية والزهد في عصر الضعف والانحطاط", url: "#" },
                    { title: "📖 البناء اللغوي: الإعراب اللفظي والإعراب التقديري", url: "#" },
                    { title: "📝 ملخص الصور البيانية والمحسنات البديعية مع أسرار البلاغة", url: "#" }
                ]
            },
            {
                name: "الفلسفة",
                coef: "المعامل: 5",
                term: "term1",
                items: [
                    { title: "📖 مقالة 1: إشكالية الإحساس والتأويل (بين العقل والحواس)", url: "#" },
                    { title: "📖 مقالة 2: اللغة والفكر (هل الدال يطابق المدلول؟)", url: "#" },
                    { title: "📝 منهجية كتابة المقال الفلسفي: الاستقصاء بالوضع والمقارنة", url: "#" }
                ]
            },
            {
                name: "التاريخ والجغرافيا",
                coef: "المعامل: 4",
                term: "term1",
                items: [
                    { title: "📖 تاريخ: بروز الصراع وتشكل العالم (عالم الغرب والشرق)", url: "#" },
                    { title: "📖 جغرافيا: أشكلية القمح والسلاح الغذائي والبترول", url: "#" },
                    { title: "📝 كراس الشخصيات والمصطلحات التاريخية للجزء الأول", url: "#" }
                ]
            },
            {
                name: "العلوم الإسلامية",
                coef: "المعامل: 2",
                term: "term1",
                items: [
                    { title: "📖 الدرس 1: عقيدة المسلم وأثرها على الفرد والمجتمع", url: "#" },
                    { title: "📖 الدرس 2: وسائل القرآن الكريم في تثبيت العقيدة", url: "#" },
                    { title: "📝 كراس الأسئلة الاستنتاجية والمباشرة لشريعة البكالوريا", url: "#" }
                ]
            },

            // ------------------ الفصل الثاني ------------------
            {
                name: "اللغة الإسبانية",
                coef: "المعامل: 5",
                term: "term2",
                items: [
                    { title: "📖 Gramática: El Pretérito Indefinido vs Imperfecto", url: "#" },
                    { title: "📖 Vocabulario: El medio ambiente y la contaminación", url: "#" },
                    { title: "📝 ملخص قواعد واستعمالات Por y Para", url: "#" }
                ]
            },
            {
                name: "اللغة الفرنسية",
                coef: "المعامل: 5",
                term: "term2",
                items: [
                    { title: "📖 Le texte d'appel (L'exhortatif / Le discours d'exhortation)", url: "#" },
                    { title: "📖 Le discours rapporté (Direct et Indirect)", url: "#" },
                    { title: "📝 Le compte rendu critique (الملاحظة النقدية في النص الآمر)", url: "#" }
                ]
            },
            {
                name: "اللغة الإنجليزية",
                coef: "المعامل: 5",
                term: "term2",
                items: [
                    { title: "📖 Unit 2: Education in the World (Comparing Systems)", url: "#" },
                    { title: "📖 Grammar: Conditionals Type 0, 1, 2, and 3 + Unless", url: "#" },
                    { title: "📝 Written Productions: Education reforms and child labor", url: "#" }
                ]
            },
            {
                name: "الأدب العربي",
                coef: "المعامل: 5",
                term: "term2",
                items: [
                    { title: "📖 أدب المهجر والمدرسة الرومانسية (الرابطة القلمية)", url: "#" },
                    { title: "📖 البناء اللغوي: احكام إذن، إذا، إذ، وحينئذ", url: "#" },
                    { title: "📝 ملخص ظاهرة الحزن والألم والالتزام في الشعر المعاصر", url: "#" }
                ]
            },
            {
                name: "الفلسفة",
                coef: "المعامل: 5",
                term: "term2",
                items: [
                    { title: "📖 مقالة 1: العاطفة والذاكرة (هل الذاكرة ذات طبيعة فردية أم اجتماعية؟)", url: "#" },
                    { title: "📖 مقالة 2: العادة والإنفعال (هل العادة أداة تكيف أم عائق؟)", url: "#" }
                ]
            },

            // ------------------ الفصل الثالث ------------------
            {
                name: "اللغة الإسبانية",
                coef: "المعامل: 5",
                term: "term3",
                items: [
                    { title: "📖 Gramática: El Imperativo Afirmativo y Negativo", url: "#" },
                    { title: "📖 Vocabulario: El turismo y la cultura hispánica", url: "#" },
                    { title: "📝 المراجعة النهائية الشاملة لقواعد الإسبانية للامتحان", url: "#" }
                ]
            },
            {
                name: "اللغة الفرنسية",
                coef: "المعامل: 5",
                term: "term3",
                items: [
                    { title: "📖 Le débat d'idées (Pros et Cons / Concession)", url: "#" },
                    { title: "📝 Révision générale du baccalauréat en français", url: "#" }
                ]
            },
            {
                name: "الأدب العربي",
                coef: "المعامل: 5",
                term: "term3",
                items: [
                    { title: "📖 فن المقال الحديث: خصائصه وأنواعه (نقدي، سياسي، اجتماعي)", url: "#" },
                    { title: "📖 البناء اللغوي: الإعراب التقديري وحروف الجر الإضافية", url: "#" }
                ]
            }
        ],

        // ------------------ بنك التمارين التفاعلية والحلول ------------------
        exercises: [
            {
                id: 1,
                subjectKey: "spanish",
                term: "term1",
                title: "تمرين 1: Gramática - Presente de Subjuntivo",
                question: "Conjugue los verbos entre paréntesis en el tiempo adecuado:<br>1. Es necesario que los alumnos (estudiar) ____ todos los días.<br>2. Ojalá el examen de Bachillerato (ser) ____ fácil.",
                solution: "<strong>التصحيح الشامل والشرح:</strong><br>1. Es necesario que los alumnos <strong>estudien</strong> (فعل Subjuntivo لأن الجملة تعبر عن الوجوب والتمني).<br>2. Ojalá el examen <strong>sea</strong> (بعد الأداة Ojalá يأتي دائماً زمن Subjuntivo)."
            },
            {
                id: 2,
                subjectKey: "spanish",
                term: "term2",
                title: "تمرين 2: Pretérito Indefinido vs Imperfecto",
                question: "Transforma las frases al pasado adecuado:<br>1. Ayer los estudiantes (hacer) ____ un examen difícil.<br>2. Mientras yo (leer) ____, mi hermano dormía.",
                solution: "<strong>التصحيح الشامل:</strong><br>1. Ayer los estudiantes <strong>hicieron</strong> (حدث مكتمل في وقت محدد).<br>2. Mientras yo <strong>leía</strong> (حدث مستمر في الماضي - Imperfecto)."
            },
            {
                id: 3,
                subjectKey: "french",
                term: "term1",
                title: "Exercice 1: La voix active et la voix passive dans le texte historique",
                question: "Transformez la phrase suivante à la voix passive:<br>« Les combattants ont libéré la patrie en 1962. »",
                solution: "<strong>Solution détaillée:</strong><br>« La patrie <strong>a été libérée</strong> par les combattants en 1962. » (تطبيق القاعدة: Passé composé ➔ a été + participe passé avec accord)."
            },
            {
                id: 4,
                subjectKey: "english",
                term: "term1",
                title: "Exercise 1: Expressing Wishes and Regrets",
                question: "Rewrite sentence (b) so that it means the same as (a):<br>(a) It is a pity that companies produce counterfeit goods.<br>(b) I wish companies ____.",
                solution: "<strong>Solution:</strong><br>(b) I wish companies <strong>did not produce</strong> counterfeit goods (أو <strong>would stop producing</strong>)."
            },
            {
                id: 5,
                subjectKey: "arabic",
                term: "term1",
                title: "تمرين الأدب العربي: الإعراب التفصيلي للبناء اللغوي",
                question: "أعرب الكلمات المسطرة إعراباً مفصلاً:<br>1. قال الشاعر: 'المعلمُ يربّي <u>الجيلَ</u>'.<br>2. 'نجح الطُلاّبُ غيرَ <u>الكسولِ</u>'.",
                solution: "<strong>الإعراب النموذجي:</strong><br>1. <strong>الجيلَ:</strong> مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره.<br>2. <strong>الكسولِ:</strong> مضاف إليه مجرور وعلامة جره الكسرة الظاهرة تحت آخره."
            },
            {
                id: 6,
                subjectKey: "philo",
                term: "term1",
                title: "تمرين الفلسفة: صياغة الموقف وتفكيك الإشكالية",
                question: "كيف تصيغ المقدمة وموقف الخصوم في مقالة 'هل الإدراك يعتمد على العقل أم الحواس؟'؟",
                solution: "<strong>طريقة الصياغة والمخطط:</strong><br>1. <strong>طرح المشكلة:</strong> مدخل عام عن عملية الاتصال بالعالم الخارجي + الإشارة إلى الخلاف الفلسفي + التساؤل.<br>2. <strong>الموقف الأول (العقلانيون):</strong> ديكارت وأفلاطون يثبتون أن العقل هو المعيار.<br>3. <strong>نقد الموقف:</strong> إهمال دور الحواس ينقص من شمولية المعرفة."
            }
        ]
    }
};

// =========================================================================
// تحميل البيانات المستحفظة في ذاكرة التطبيق (LocalStorage)
// =========================================================================
let platformDatabase = JSON.parse(localStorage.getItem('bac_app_v2_db')) || defaultDatabase;

let currentStream = 'languages';
let currentTerm = 'all';

// التجهيز الابتدائي عند فتح الواجهة
document.addEventListener("DOMContentLoaded", () => {
    updateStats();
    renderSubjects();
    renderExercises();
    loadBacYears();
});

// حفظ البيانات المحدثة تلقائياً في ذاكرة التطبيق
function saveDatabase() {
    localStorage.setItem('bac_app_v2_db', JSON.stringify(platformDatabase));
    updateStats();
    renderSubjects();
    renderExercises();
}

// تحديث الإحصائيات بأعلى الواجهة
function updateStats() {
    const data = platformDatabase[currentStream] || { subjects: [], exercises: [] };
    
    let totalLessons = 0;
    (data.subjects || []).forEach(sub => {
        totalLessons += sub.items.length;
    });

    document.getElementById('totalLessonsCount').innerText = totalLessons;
    document.getElementById('totalExercisesCount').innerText = (data.exercises || []).length;
}

// اختيار الشعبة
function selectStream(streamKey) {
    currentStream = streamKey;
    document.querySelectorAll('.stream-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateStats();
    renderSubjects();
    renderExercises();
}

// تصفية الفصول
function filterTerm(termKey) {
    currentTerm = termKey;
    document.querySelectorAll('.term-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderSubjects();
}

// عرض الدروس والملخصات مع خيارات الحذف والتعديل
function renderSubjects() {
    const container = document.getElementById('subjectsContainer');
    const data = platformDatabase[currentStream] || { subjects: [], exercises: [] };
    
    let filteredSubjects = data.subjects || [];
    if (currentTerm !== 'all') {
        filteredSubjects = filteredSubjects.filter(sub => sub.term === currentTerm);
    }

    if(filteredSubjects.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">لا تتوفر دروس لهذا الفصل حالياً. يمكنك إضافتها فوراً من زر التعديل الإداري.</p>`;
        return;
    }

    container.innerHTML = filteredSubjects.map((sub, sIdx) => `
        <div class="subject-card">
            <div class="subject-header">
                <h3>${sub.name}</h3>
                <div>
                    <span class="subject-badge">${sub.coef}</span>
                    <span class="term-tag">${sub.term === 'term1' ? 'فصل 1' : sub.term === 'term2' ? 'فصل 2' : 'فصل 3'}</span>
                </div>
            </div>
            <div class="subject-items-list">
                ${sub.items.map((item, iIdx) => `
                    <div class="item-link">
                        <span>${item.title}</span>
                        <div>
                            <a href="${item.url}" style="color:var(--accent-cyan); text-decoration:none; font-size:0.85rem; margin-left:8px;">📥 فتح</a>
                            <button class="delete-btn" onclick="deleteLesson(${sIdx}, ${iIdx})">🗑️</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// عرض قائمة التمارين والحلول التفاعلية
function renderExercises() {
    const container = document.getElementById('exercisesContainer');
    const subjectFilter = document.getElementById('exerciseSubjectFilter').value;
    const data = platformDatabase[currentStream] || { subjects: [], exercises: [] };

    let exercises = data.exercises || [];
    if (subjectFilter !== 'all') {
        exercises = exercises.filter(ex => ex.subjectKey === subjectFilter);
    }

    if(exercises.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 30px;">لا توجد تمارين مضافة لهذه المادة. اضغط على زر التعديل في الأسفل لإضافة تمارين جديدة.</p>`;
        return;
    }

    container.innerHTML = exercises.map((ex, index) => `
        <div class="exercise-card">
            <div class="ex-header">
                <h4>${ex.title}</h4>
                <div>
                    <span class="ex-meta">${ex.subjectKey.toUpperCase()}</span>
                    <button class="delete-btn" onclick="deleteExercise(${index})">🗑️ حذف</button>
                </div>
            </div>
            <div class="question-box">
                <p>${ex.question}</p>
            </div>
            <button class="toggle-solution-btn" onclick="toggleSolution(${index})">💡 عرض الإجابة النموذجية والتصحيح</button>
            <div id="solution-${index}" class="solution-box">
                <p>${ex.solution}</p>
            </div>
        </div>
    `).join('');
}

// إظهار وإخفاء الحل التفاعلي
function toggleSolution(id) {
    const box = document.getElementById(`solution-${id}`);
    box.classList.toggle('show');
}

// التنقل بين التبويبات الرئيسيّة
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// محرك البحث الفوري في الدروس
function searchContent() {
    const query = document.getElementById('lessonSearch').value.toLowerCase();
    document.querySelectorAll('.subject-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(query) ? 'flex' : 'none';
    });
}

// توليد أرشيف البكالوريات
function loadBacYears() {
    let html = '';
    for (let year = 2026; year >= 2008; year--) {
        html += `<a href="#" class="year-btn">بكالوريا ${year}</a>`;
    }
    document.getElementById('bacYearsGrid').innerHTML = html;
}

// فتح وإغلاق النافذة المنبثقة للتعديل
function openAdminModal() { document.getElementById('adminModal').style.display = 'flex'; }
function closeAdminModal() { document.getElementById('adminModal').style.display = 'none'; }

function toggleFormFields() {
    const type = document.getElementById('contentType').value;
    document.getElementById('lessonFields').style.display = type === 'lesson' ? 'block' : 'none';
    document.getElementById('exerciseFields').style.display = type === 'exercise' ? 'block' : 'none';
}

// إضافة محتوى جديد وإعادة حفظه
function handleFormSubmit(e) {
    e.preventDefault();
    const type = document.getElementById('contentType').value;
    const stream = document.getElementById('formStream').value;
    const term = document.getElementById('formTerm').value;
    const title = document.getElementById('formTitle').value;
    const subjectSelect = document.getElementById('formSubject');
    const subjectName = subjectSelect.options[subjectSelect.selectedIndex].text;
    const subjectKey = subjectSelect.value;

    if (!platformDatabase[stream]) {
        platformDatabase[stream] = { subjects: [], exercises: [] };
    }

    if (type === 'lesson') {
        const url = document.getElementById('formUrl').value;
        let subjectObj = platformDatabase[stream].subjects.find(s => s.name === subjectName && s.term === term);
        
        if (!subjectObj) {
            subjectObj = { name: subjectName, coef: "المعامل: 5", term: term, items: [] };
            platformDatabase[stream].subjects.push(subjectObj);
        }
        subjectObj.items.push({ title: title, url: url });
    } else {
        const question = document.getElementById('formQuestion').value;
        const solution = document.getElementById('formSolution').value;
        
        platformDatabase[stream].exercises.push({
            id: Date.now(),
            subjectKey: subjectKey,
            term: term,
            title: title,
            question: question,
            solution: solution
        });
    }

    saveDatabase();
    closeAdminModal();
    document.getElementById('adminForm').reset();
    alert('✅ تم حفظ التغييرات ونشرها في التطبيق بنجاح!');
}

// حذف عنصر درس أو تمرين مباشرة
function deleteLesson(subIdx, itemIdx) {
    if(confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
        platformDatabase[currentStream].subjects[subIdx].items.splice(itemIdx, 1);
        saveDatabase();
    }
}

function deleteExercise(exIdx) {
    if(confirm('هل أنت متأكد من حذف هذا التمرين؟')) {
        platformDatabase[currentStream].exercises.splice(exIdx, 1);
        saveDatabase();
    }
}
