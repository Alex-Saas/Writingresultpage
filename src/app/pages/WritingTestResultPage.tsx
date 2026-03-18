import { useState } from 'react';
import { Award, Clock, FileText, TrendingUp, CheckCircle2, XCircle, AlertCircle, BookOpen, ArrowLeft, Share2, Download, ChevronDown, ChevronUp, Lightbulb, Target, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import * as Tabs from '@radix-ui/react-tabs';
import svgPaths from '../../imports/svg-kef88hpn4e';

// بيانات تجريبية للرسم البياني - كل محاولة مع بيانات المعايير
const attemptData = [
  {
    id: 'progress-1',
    attempt: 'المحاولة 1',
    score: 3.5,
    criteria: [
      { id: 'c1', criteria: 'Task Achievement', score: 3.0, fullMark: 9 },
      { id: 'c2', criteria: 'Coherence', score: 3.5, fullMark: 9 },
      { id: 'c3', criteria: 'Lexical Resource', score: 4.0, fullMark: 9 },
      { id: 'c4', criteria: 'Grammar', score: 3.5, fullMark: 9 },
    ]
  },
  {
    id: 'progress-2',
    attempt: 'المحاولة 2',
    score: 4.0,
    criteria: [
      { id: 'c1', criteria: 'Task Achievement', score: 3.5, fullMark: 9 },
      { id: 'c2', criteria: 'Coherence', score: 4.0, fullMark: 9 },
      { id: 'c3', criteria: 'Lexical Resource', score: 4.5, fullMark: 9 },
      { id: 'c4', criteria: 'Grammar', score: 4.0, fullMark: 9 },
    ]
  },
  {
    id: 'progress-3',
    attempt: 'المحاولة 3',
    score: 4.5,
    criteria: [
      { id: 'c1', criteria: 'Task Achievement', score: 4.0, fullMark: 9 },
      { id: 'c2', criteria: 'Coherence', score: 4.5, fullMark: 9 },
      { id: 'c3', criteria: 'Lexical Resource', score: 5.0, fullMark: 9 },
      { id: 'c4', criteria: 'Grammar', score: 4.5, fullMark: 9 },
    ]
  },
];

// معايير الكتابة الأربعة في IELTS
const writingCriteria = [
  { id: 'all', label: 'الكل', color: 'bg-[#1B2A4A] text-white', icon: '📋' },
  { id: 'task-achievement', label: 'تحقيق المهمة', color: 'bg-[#DBEAFE] text-[#1E40AF]', activeColor: 'bg-[#1E40AF] text-white', icon: '🎯' },
  { id: 'coherence-cohesion', label: 'الترابط والتماسك', color: 'bg-[#E0E7FF] text-[#3730A3]', activeColor: 'bg-[#3730A3] text-white', icon: '🔗' },
  { id: 'lexical-resource', label: 'الثروة اللغوية', color: 'bg-[#FEF3C7] text-[#92400E]', activeColor: 'bg-[#92400E] text-white', icon: '📖' },
  { id: 'grammatical-accuracy', label: 'المدى النحوي والدقة', color: 'bg-[#FEE2E2] text-[#991B1B]', activeColor: 'bg-[#991B1B] text-white', icon: '✏️' },
];

// بيانات الأخطاء مجمعة حسب المعيار والمهمة
const errorExamples = [
  // Task 1 errors
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'I want tell you about swimming class',
    corrected: 'I want to tell you about a swimming class',
    explanation: '"want" يتبعه "to" + فعل — "want to tell" وليس "want tell"، وأيضاً ينقص أداة التنكير "a"'
  },
  {
    task: 'task1',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'The comunity center',
    corrected: 'The community center',
    explanation: '"community" وليس "comunity" — حرفان m'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'The comunity center have new class',
    corrected: 'The community center has a new class',
    explanation: 'Center مفرد — يتطلب "has" وليس "have"، وينقص أداة التنكير "a"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'people who dont know swim',
    corrected: "people who don't know how to swim",
    explanation: '"know how to swim" وليس "know swim" — ولا تنسَ الفاصلة العليا في "don\'t"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'The class is in Tuesday and Thursday',
    corrected: 'The class is on Tuesday and Thursday',
    explanation: 'نستخدم "on" مع أيام الأسبوع وليس "in"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'in evening time',
    corrected: 'in the evening',
    explanation: '"in the evening" هي العبارة الصحيحة — لا نقول "evening time"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'he teached many peoples before',
    corrected: 'he taught many people before',
    explanation: 'فعل شاذ: "teach" يصبح "taught" وليس "teached"، و"people" لا تُجمع بإضافة s'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'It cost 50 dollar per month',
    corrected: 'It costs 50 dollars per month',
    explanation: 'المفرد يتطلب "costs" مع s، و"dollars" جمع مع الأرقام'
  },
  {
    task: 'task1',
    type: 'vocabulary',
    criteria: 'lexical-resource',
    original: 'they give you all thing you need',
    corrected: 'they provide you with everything you need',
    explanation: '"thing" يجب أن تكون "things" (جمع)، واستخدم "provide" بدلاً من "give" للغة أكاديمية'
  },
  {
    task: 'task1',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'the price is not much expensif',
    corrected: 'the price is not very expensive',
    explanation: '"expensive" وليس "expensif"، و"very" وليس "much" مع الصفات'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'maybe me and you can go togather',
    corrected: 'maybe you and I can go together',
    explanation: '"you and I" وليس "me and you" — الضمير المرفوع "I" وليس "me"، و"together" وليس "togather"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'you want learn swimming',
    corrected: 'you want to learn swimming',
    explanation: '"want to learn" — يجب إضافة "to" بعد "want"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'if we go same class',
    corrected: 'if we go to the same class',
    explanation: 'ينقص حرف الجر "to" وأداة التعريف "the" قبل "same"'
  },
  {
    task: 'task1',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'do practise in weekend togather',
    corrected: 'practice on the weekend together',
    explanation: '"practice" (فعل)، "on the weekend" وليس "in weekend"، و"together" وليس "togather"'
  },
  {
    task: 'task1',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'Waiting your reply',
    corrected: 'I await your reply / Awaiting your reply',
    explanation: '"Waiting your reply" غير صحيح — استخدم "Awaiting your reply" أو "I await your reply"'
  },
  // Task 2 errors
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'technology have become very importent part',
    corrected: 'technology has become a very important part',
    explanation: 'Technology مفرد — يتطلب "has"، وينقص "a"، و"important" وليس "importent"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'Some peoples think technology make life hard',
    corrected: 'Some people think technology makes life hard',
    explanation: '"people" لا تُجمع بـ s، و"technology" مفرد يتطلب "makes"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'I will talk about both side',
    corrected: 'I will talk about both sides',
    explanation: '"both" تتبعها كلمة جمع: "sides" وليس "side"'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'some people belive technology is bad',
    corrected: 'some people believe technology is bad',
    explanation: '"believe" وليس "belive"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'it make people lazy',
    corrected: 'it makes people lazy',
    explanation: '"it" مفرد — يتطلب "makes" وليس "make"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'many person spend all the time on there phone',
    corrected: 'many people spend all their time on their phones',
    explanation: '"many" تتبعها جمع: "people"، و"their" وليس "there"، و"phones" جمع'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'dont do any exercice or go outside',
    corrected: "don't do any exercise or go outside",
    explanation: '"don\'t" بفاصلة عليا، و"exercise" وليس "exercice"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'childs now play video game all day',
    corrected: 'children now play video games all day',
    explanation: 'جمع شاذ: "children" وليس "childs"، و"games" جمع'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'dont study good',
    corrected: "don't study well",
    explanation: '"well" حال وليس "good" — نستخدم الحال مع الأفعال'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'Another probleme is that people dont talk becouse',
    corrected: "Another problem is that people don't talk because",
    explanation: '"problem" وليس "probleme"، و"because" وليس "becouse"'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'technology is also very usefull',
    corrected: 'technology is also very useful',
    explanation: '"useful" بحرف l واحد وليس "usefull"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'It help people to communecate with family who live in diffrent country',
    corrected: 'It helps people communicate with family who live in different countries',
    explanation: '"helps" مع المفرد، "communicate" بدون to، "different" و"countries" جمع'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'student can learn many thing from internet',
    corrected: 'students can learn many things from the internet',
    explanation: '"students" و"things" جمع، و"the internet" مع أداة التعريف'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'it help me alot',
    corrected: 'it helps me a lot',
    explanation: '"helps" مع المفرد، و"a lot" كلمتان منفصلتان وليس "alot"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'hospital use technology for help sick people and save lifes',
    corrected: 'hospitals use technology to help sick people and save lives',
    explanation: '"hospitals" جمع، "to help" وليس "for help"، و"lives" وليس "lifes"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'technology brung more good thing than bad thing',
    corrected: 'technology brought more good things than bad things',
    explanation: 'فعل شاذ: "brought" وليس "brung"، و"things" جمع'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'it will be very helpfull for everyone. Goverments should also teach',
    corrected: 'it will be very helpful for everyone. Governments should also teach',
    explanation: '"helpful" بحرف l واحد، و"Governments" وليس "Goverments"'
  },
  {
    task: 'task2',
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'In conclution, technology have both good and bad side',
    corrected: 'In conclusion, technology has both good and bad sides',
    explanation: '"conclusion" وليس "conclution"، و"has" مع المفرد، و"sides" جمع'
  },
  {
    task: 'task2',
    type: 'vocabulary',
    criteria: 'lexical-resource',
    original: 'I believe it is more good than bad',
    corrected: 'I believe the benefits outweigh the drawbacks',
    explanation: '"more good" غير صحيح — استخدم "better" أو عبارة أكاديمية مثل "benefits outweigh drawbacks"'
  },
  {
    task: 'task2',
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'We need to be carefull and use it wisely',
    corrected: 'We need to be careful and use it wisely',
    explanation: '"careful" بحرف l واحد وليس "carefull"'
  },
];

// الإجابات النموذجية لكل مهمة
const modelAnswers = [
  {
    id: 'task1',
    title: 'المهمة 1 - General Training Letter',
    type: 'General Training - رسالة شخصية',
    bandScore: '7.0',
    answer: `Dear Sarah,

I hope this letter finds you well. I am writing to share my thoughts about a wonderful idea that I believe could benefit both of us.

As you know, I have been exploring various ways to improve our community's engagement with local sports activities. Recently, I came across an initiative that encourages residents to participate in weekly group exercises at the local park.

The programme offers a range of activities, including yoga, jogging, and team sports such as football and basketball. I believe this would be an excellent opportunity for us to stay active while also meeting new people in our neighbourhood.

I would love it if you could join me for the first session next Saturday morning. The activities begin at 8 AM and typically last for about two hours. Please let me know if you are available, and I will register both of us.

I look forward to hearing from you soon.

Best wishes,
Alex`,
  },
  {
    id: 'task2',
    title: 'المهمة 2 - Essay',
    type: 'General Training - مقال',
    bandScore: '7.5',
    answer: `In recent years, the impact of technology on education has become a topic of considerable debate. While some argue that traditional teaching methods remain superior, others believe that technology has revolutionised the way we learn. In my opinion, technology, when used effectively, can significantly enhance the educational experience.

To begin with, technology provides students with access to a vast array of resources that were previously unavailable. Online libraries, educational videos, and interactive platforms enable learners to explore subjects in greater depth. For instance, a student studying biology can watch detailed animations of cellular processes, which would be difficult to replicate in a traditional classroom setting.

Furthermore, technology facilitates personalised learning. Adaptive software can assess a student's strengths and weaknesses, tailoring content to their individual needs. This approach ensures that each learner progresses at their own pace, which is particularly beneficial for those who may struggle with certain topics.

However, it is important to acknowledge that technology alone cannot replace the role of a skilled teacher. The human element of education — including mentorship, motivation, and emotional support — remains indispensable. Therefore, the most effective approach combines technological tools with traditional teaching methods.

In conclusion, while technology offers numerous advantages in education, it should be viewed as a complement to, rather than a replacement for, conventional teaching. A balanced approach that leverages the strengths of both will yield the best outcomes for students.`,
  }
];

// معايير التقييم التفصيلية - مجمعة حسب المهمة
const detailedCriteriaByPart = [
  {
    partId: 'task1',
    partTitle: 'المهمة 1 - General Training Letter',
    partType: 'رسالة شخصية',
    partScore: 4.0,
    criteria: [
      {
        id: 'task1-task-achievement',
        name: 'Task Achievement',
        nameAr: 'إنجاز المهمة',
        score: 4.0,
        color: '#FEF2F2',
        borderColor: '#EF4444',
        strengths: [
          { text: 'حاولت الإجابة على السؤال', example: 'ذكرت بعض المعلومات المطلوبة' }
        ],
        improvements: [
          { text: 'لم تتناول جميع أجزاء المهمة بشكل كامل', tip: 'Task 1 يتطلب وصف البيانات بشكل دقيق مع مقارنات' },
          { text: 'عدد الكلمات أقل من المطلوب', tip: 'Task 1 يحتاج 150 كلمة على الأقل' },
          { text: 'الأفكار غير متطورة بشكل كافٍ', tip: 'اشرح كل فكرة بتفصيل أكثر مع أمثلة داعمة' }
        ],
        currentBand: {
          level: '4.0',
          description: 'يحاول معالجة المهمة لكن لا يغطي جميع المتطلبات، الأفكار محدودة ومكررة'
        },
        nextBand: {
          level: '5.0',
          description: 'يعالج المهمة جزئياً، التنسيق قد يكون غير مناسب في بعض الأماكن',
          howToReach: 'اكتب عدد الكلمات المطلوب، تناول جميع أجزاء السؤال، طور أفكارك بشكل أفضل'
        },
        examples: [
          { text: 'The chart show information', highlight: 'خطأ نحوي - يجب "shows" وتحتاج لمزيد من التفاصيل' },
          { text: 'I think this is good', highlight: 'فكرة عامة جداً وغير مدعومة بأمثلة' }
        ]
      },
      {
        id: 'task1-coherence-cohesion',
        name: 'Coherence & Cohesion',
        nameAr: 'التماسك والترابط',
        score: 4.5,
        color: '#FEF3C7',
        borderColor: '#F59E0B',
        strengths: [
          { text: 'حاولت تنظيم الأفكار في فقرات', example: 'قسمت الإجابة لأكثر من فقرة' }
        ],
        improvements: [
          { text: 'الفقرات غير منظمة بشكل منطقي', tip: 'كل فقرة يجب أن تتناول فكرة واحدة واضحة' },
          { text: 'قلة استخدام أدوات الربط', tip: 'استخدم روابط مثل: However, Moreover, Furthermore, In addition' },
          { text: 'الأفكار متقطعة وغير مترابطة', tip: 'اربط الجمل ببعضها باستخدام ضمائر الإشارة وأدوات الربط' }
        ],
        currentBand: {
          level: '4.5',
          description: 'يقدم معلومات وأفكار لكنها غير منظمة بشكل منطقي، استخدام محدود وغير دقيق لأدوات الربط'
        },
        nextBand: {
          level: '5.0',
          description: 'يقدم معلومات بتماسك واضح ولكن قد يكون هناك تكرار',
          howToReach: 'استخدم روابط مناسبة بين الجمل، نظم كل فقرة حول فكرة مركزية واحدة'
        },
        examples: [
          { text: 'I like sport. Sport is good. I play sport.', highlight: 'تكرار واضح - استخدم ضمائر: I like sports because they are good for health' }
        ]
      },
      {
        id: 'task1-lexical-resource',
        name: 'Lexical Resource',
        nameAr: 'الثروة اللغوية',
        score: 5.0,
        color: '#DBEAFE',
        borderColor: '#3B82F6',
        strengths: [
          { text: 'استخدمت كلمات أساسية صحيحة', example: 'good, bad, people, important' }
        ],
        improvements: [
          { text: 'المفردات محدودة ومتكررة', tip: 'تعلم مرادفات: good → excellent, beneficial, advantageous' },
          { text: 'أخطاء إملائية متكررة', tip: 'راجع الإملاء: "imporve" → "improve", "becouse" → "because"' }
        ],
        currentBand: {
          level: '5.0',
          description: 'يستخدم مجموعة محدودة من المفردات، أخطاء واضحة في اختيار الكلمات'
        },
        nextBand: {
          level: '6.0',
          description: 'يستخدم مجموعة كافية من المفردات، يحاول استخدام مفردات أقل شيوعاً',
          howToReach: 'تعلم مفردات جديدة يومياً، استخدم مرادفات، راجع الإملاء'
        },
        examples: [
          { text: 'very good, very bad, very important', highlight: 'تكرار "very" - استخدم: excellent, terrible, crucial' },
          { text: 'alot, becouse, imporve', highlight: 'أخطاء إملائية - الصحيح: a lot, because, improve' }
        ]
      },
      {
        id: 'task1-grammatical-range',
        name: 'Grammatical Range & Accuracy',
        nameAr: 'التنوع والدقة النحوية',
        score: 4.5,
        color: '#FCE7F3',
        borderColor: '#EC4899',
        strengths: [
          { text: 'استخدمت بعض الجمل البسيطة الصحيحة', example: 'I like swimming. It is good.' }
        ],
        improvements: [
          { text: 'أخطاء نحوية متكررة وتؤثر على الفهم', tip: 'راجع subject-verb agreement: "He like" → "He likes"' },
          { text: 'أخطاء في الأزمنة', tip: 'راجع الأزمنة: Present Simple, Present Perfect, Past Simple' },
          { text: 'نقص علامات الترقيم', tip: 'استخدم الفواصل والنقاط بشكل صحيح' }
        ],
        currentBand: {
          level: '4.5',
          description: 'يستخدم مزيج محدود من الجمل البسيطة والمعقدة، أخطاء نحوية متكررة'
        },
        nextBand: {
          level: '5.0',
          description: 'يستخدم مجموعة محدودة من التراكيب، محاولات للجمل المعقدة لكن بأخطاء',
          howToReach: 'راجع القواعد الأساسية، تدرب على الجمل المركبة، قلل الأخطاء النحوية'
        },
        examples: [
          { text: 'She don\'t like, He go to school', highlight: 'أخطاء أساسية - الصحيح: doesn\'t like, goes to school' },
          { text: 'If I will have time I will go', highlight: 'خطأ شرطي وترقيم - الصحيح: If I have time, I will go' }
        ]
      }
    ]
  },
  {
    partId: 'task2',
    partTitle: 'المهمة 2 - Essay',
    partType: 'مقال',
    partScore: 4.5,
    criteria: [
      {
        id: 'task2-task-achievement',
        name: 'Task Response',
        nameAr: 'الاستجابة للمهمة',
        score: 4.5,
        color: '#FEF2F2',
        borderColor: '#EF4444',
        strengths: [
          { text: 'حاولت تقديم رأيك في الموضوع', example: 'ذكرت موقفك من القضية المطروحة' }
        ],
        improvements: [
          { text: 'لم تتناول جميع أجزاء السؤال', tip: 'اقرأ السؤال بعناية وتأكد من الإجابة على كل جزء' },
          { text: 'الأفكار غير مدعومة بأمثلة كافية', tip: 'قدم مثالاً واحداً على الأقل لكل فكرة رئيسية' },
          { text: 'عدد الكلمات أقل من 250 كلمة', tip: 'Task 2 يحتاج 250 كلمة على الأقل ويمثل 67% من الدرجة' }
        ],
        currentBand: {
          level: '4.5',
          description: 'يستجيب للمهمة بشكل جزئي فقط، الموقف غير واضح أو متكرر'
        },
        nextBand: {
          level: '5.5',
          description: 'يعبر عن موقف واضح مع بعض الأفكار الداعمة',
          howToReach: 'حدد موقفك بوضوح في المقدمة، ادعم كل فكرة بأمثلة، اكتب خاتمة تلخص رأيك'
        },
        examples: [
          { text: 'I think education is important.', highlight: 'رأي عام بدون دعم - أضف: because it provides skills needed for career success' },
          { text: 'Some people think this. Other people think that.', highlight: 'عرض سطحي - طور كل وجهة نظر بتفصيل' }
        ]
      },
      {
        id: 'task2-coherence-cohesion',
        name: 'Coherence & Cohesion',
        nameAr: 'التماسك والترابط',
        score: 4.5,
        color: '#FEF3C7',
        borderColor: '#F59E0B',
        strengths: [
          { text: 'قسمت المقال إلى فقرات', example: 'مقدمة وجسم المقال وخاتمة' }
        ],
        improvements: [
          { text: 'ضعف في الروابط بين الفقرات', tip: 'استخدم: On the other hand, Furthermore, In contrast' },
          { text: 'التكرار الواضح للكلمات والأفكار', tip: 'استخدم ضمائر الإشارة (this, that, these) والمرادفات' },
          { text: 'غياب الجمل الموضوعية في بداية الفقرات', tip: 'ابدأ كل فقرة بجملة موضوعية تلخص الفكرة الرئيسية' }
        ],
        currentBand: {
          level: '4.5',
          description: 'تنظيم الأفكار غير واضح، روابط محدودة وقد تكون ميكانيكية'
        },
        nextBand: {
          level: '5.5',
          description: 'تنظيم واضح للفقرات مع استخدام أفضل للروابط',
          howToReach: 'استخدم هيكل واضح: مقدمة → فقرة 1 → فقرة 2 → خاتمة مع روابط مناسبة'
        },
        examples: [
          { text: 'First point. Second point. Third point.', highlight: 'روابط ضعيفة - استخدم: Firstly, Moreover, Finally' }
        ]
      },
      {
        id: 'task2-lexical-resource',
        name: 'Lexical Resource',
        nameAr: 'الثروة اللغوية',
        score: 5.0,
        color: '#DBEAFE',
        borderColor: '#3B82F6',
        strengths: [
          { text: 'استخدمت بعض المفردات الأكاديمية', example: 'important, development, society' }
        ],
        improvements: [
          { text: 'تكرار نفس الكلمات في المقال', tip: 'استخدم مرادفات: important → crucial, significant, vital' },
          { text: 'استخدام كلمات عامية غير أكاديمية', tip: 'تجنب: kids → children, lots of → numerous, good → beneficial' },
          { text: 'أخطاء في التعبيرات الاصطلاحية', tip: 'تعلم collocations: make a decision (not do a decision)' }
        ],
        currentBand: {
          level: '5.0',
          description: 'مفردات كافية للمهمة لكن محدودة النطاق، بعض الأخطاء في اختيار الكلمات'
        },
        nextBand: {
          level: '6.0',
          description: 'مفردات متنوعة مع بعض المحاولات لاستخدام كلمات أقل شيوعاً',
          howToReach: 'احفظ 5 مرادفات لكل كلمة شائعة، تعلم التعبيرات الأكاديمية'
        },
        examples: [
          { text: 'good → beneficial, advantageous', highlight: 'استبدل الكلمات البسيطة بمفردات أكاديمية' }
        ]
      },
      {
        id: 'task2-grammatical-range',
        name: 'Grammatical Range & Accuracy',
        nameAr: 'التنوع والدقة النحوية',
        score: 4.5,
        color: '#FCE7F3',
        borderColor: '#EC4899',
        strengths: [
          { text: 'محاولة لاستخدام جمل مركبة', example: 'استخدمت because و although في بعض الجمل' }
        ],
        improvements: [
          { text: 'استخدام محدود للتراكيب المعقدة', tip: 'تعلم: Although..., Despite..., Not only... but also...' },
          { text: 'أخطاء في حروف الجر', tip: 'احفظ: depend on, result in, lead to, contribute to' },
          { text: 'أخطاء في الأزمنة المختلطة', tip: 'حافظ على زمن واحد في الفقرة الواحدة ما لم يتطلب السياق التغيير' },
          { text: 'أخطاء في المبني للمجهول', tip: 'تعلم: It is believed that..., It can be argued that...' }
        ],
        currentBand: {
          level: '4.5',
          description: 'جمل بسيطة في الغالب مع محاولات محدودة للجمل المعقدة'
        },
        nextBand: {
          level: '5.5',
          description: 'مزيج من الجمل البسيطة والمعقدة مع أخطاء أقل',
          howToReach: 'تدرب على كتابة جملة معقدة واحدة في كل فقرة، راجع القواعد الأساسية'
        },
        examples: [
          { text: 'People is thinking that technology good', highlight: 'أخطاء متعددة - الصحيح: People think that technology is beneficial' }
        ]
      }
    ]
  }
];

// اقتراحات محسّنة - مجمعة حسب المهمة
const improvementsByPart = [
  {
    partId: 'task1',
    partTitle: 'المهمة 1 - General Training Letter',
    partType: 'رسالة شخصية',
    improvements: [
      {
        category: 'استخدام المفردات',
        suggestions: [
          { original: 'good', improved: 'excellent, beneficial, advantageous' },
          { original: 'show', improved: 'demonstrate, illustrate, indicate' },
          { original: 'very', improved: 'considerably, significantly, remarkably' }
        ]
      },
      {
        category: 'الروابط والتماسك',
        suggestions: [
          { original: 'and', improved: 'moreover, furthermore, in addition' },
          { original: 'but', improved: 'however, nevertheless, on the other hand' },
          { original: 'so', improved: 'therefore, consequently, as a result' }
        ]
      }
    ],
    tips: [
      { title: 'تصحيح الأخطاء النحوية الأساسية', priority: 'عالية', description: 'راجع subject-verb agreement والأزمنة الأساسية - هذا سيرفع درجتك بشكل كبير' },
      { title: 'زيادة عدد الكلمات', priority: 'عالية', description: 'اكتب 150 كلمة على الأقل لـ Task 1' },
      { title: 'تحسين التماسك باستخدام الروابط', priority: 'عالية', description: 'استخدم روابط مناسبة: However, Moreover, Therefore بين الجمل' }
    ]
  },
  {
    partId: 'task2',
    partTitle: 'المهمة 2 - Essay',
    partType: 'مقال',
    improvements: [
      {
        category: 'استخدام المفردات الأكاديمية',
        suggestions: [
          { original: 'important', improved: 'crucial, significant, vital, paramount' },
          { original: 'think', improved: 'believe, consider, argue, contend' },
          { original: 'a lot of', improved: 'numerous, a significant number of, considerable' }
        ]
      },
      {
        category: 'التعبيرات الأكاديمية',
        suggestions: [
          { original: 'I think', improved: 'In my opinion, From my perspective, I firmly believe' },
          { original: 'In conclusion', improved: 'To sum up, In light of the above, Taking everything into account' },
          { original: 'For example', improved: 'For instance, A case in point is, To illustrate' }
        ]
      },
      {
        category: 'الروابط المتقدمة',
        suggestions: [
          { original: 'Also', improved: 'Furthermore, Moreover, In addition to this' },
          { original: 'But', improved: 'Nevertheless, Conversely, On the contrary' },
          { original: 'Because', improved: 'Due to the fact that, Owing to, As a consequence of' }
        ]
      }
    ],
    tips: [
      { title: 'تطوير الأفكار بشكل كامل', priority: 'عالية', description: 'اشرح كل فكرة بجملتين أو ثلاث مع أمثلة داعمة' },
      { title: 'توسيع الثروة اللغوية', priority: 'متوسطة', description: 'تعلم 10 كلمات أكاديمية جديدة يومياً وتجنب تكرار نفس الكلمات' },
      { title: 'كتابة 250 كلمة على الأقل', priority: 'عالية', description: 'Task 2 يمثل 67% من الدرجة - تأكد من كتابة العدد المطلوب' }
    ]
  }
];

export function WritingTestResultPage() {
  const [activeTab, setActiveTab] = useState('answer');
  const [selectedAttempt, setSelectedAttempt] = useState(2); // index of current attempt (latest)
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [expandedCriteria, setExpandedCriteria] = useState<string[]>(['task-achievement']);
  const [activeErrorFilter, setActiveErrorFilter] = useState('all');
  const [expandedParts, setExpandedParts] = useState<string[]>(['task1']);
  const [expandedImprovementParts, setExpandedImprovementParts] = useState<string[]>(['task1']);

  const togglePart = (partId: string) => {
    setExpandedParts(prev =>
      prev.includes(partId) ? prev.filter(id => id !== partId) : [...prev, partId]
    );
  };

  const toggleImprovementPart = (partId: string) => {
    setExpandedImprovementParts(prev =>
      prev.includes(partId) ? prev.filter(id => id !== partId) : [...prev, partId]
    );
  };

  // Close tooltip when clicking anywhere on the page
  const handlePageClick = () => {
    setActiveTooltip(null);
  };

  const toggleCriteria = (criteriaId: string) => {
    setExpandedCriteria(prev => 
      prev.includes(criteriaId) 
        ? prev.filter(id => id !== criteriaId)
        : [...prev, criteriaId]
    );
  };

  return (
    <div className="min-h-screen bg-[rgba(219,224,255,0.3)]" dir="rtl" onClick={handlePageClick}>
      {/* Header */}
      <div className="bg-white border-b border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] sm:text-[24px]">
                <span className="text-[#C30020]">GO</span>
                <span className="text-[#012269]">IELTS</span>
                <span className="text-[#4A4A4A]">.ai</span>
              </span>
            </div>

            {/* Share Link */}
            <div className="hidden md:flex items-center gap-3 bg-[#F9FAFB] border border-[#EEEEEE] rounded-[8px] px-4 py-2">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">
                شارك درجتك
              </span>
              <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280]">
                app.goielts.ai/score/1063
              </span>
            </div>

            {/* Copy Button */}
            <button className="flex items-center gap-2 bg-[#012269] text-white px-3 sm:px-4 py-2 rounded-[8px] hover:bg-[#1B2A4A] transition-colors">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px]">نسخ</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button className="flex items-center gap-2 bg-[#012269] text-white px-4 py-2 rounded-[8px] hover:bg-[#1B2A4A] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px]">رجوع</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#EEEEEE] px-4 py-2 rounded-[8px] hover:bg-gray-50 transition-colors">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#374151]">الاختبارات</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#EEEEEE] px-4 py-2 rounded-[8px] hover:bg-gray-50 transition-colors">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#374151]">إعادة الاختبار</span>
            </button>
          </div>

          {/* Success Message */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] text-[#1B2A4A]">
              مبروك! خَلَّصت الاختبار بنجاح
            </h1>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>

          {/* Test Info Grid */}
          <div className="bg-[#F9FAFB] rounded-[16px] border border-[#EEEEEE] p-6 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">اسم المتدرب</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">أحمد علي</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">اسم الاختبار</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">Cambridge IELTS Practice Test 17</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">نمط الاختبار</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">التدريب</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">المهارة</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">الكتابة</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">نوع الاختبار</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">أكاديمي</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">تاريخ الاختبار</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]" dir="ltr">12/3/2025 - pm 4:45</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">الوقت المستغرق</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">60 دقيقة</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-2">رقم المحاولة</p>
                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">3</p>
              </div>
            </div>
          </div>

          {/* Progress to Goal */}
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6">
            <div className="text-center mb-4">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-2">
                تحتاج مزيد من التدريب 📚 باقي 0.5 درجة للوصول لـ 5.0
              </h3>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#6B7280]">
                ركز على تصحيح الأخطاء النحوية وزيادة عدد الكلمات - يمكنك التحسن!
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#6B7280]">الدرجة الحالية 7.5</span>
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#6B7280]">الدرجة السابقة 8.0</span>
              </div>
              <div className="w-full h-3 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] rounded-full" style={{ width: '93.75%' }}></div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center mt-6">
              <button className="bg-[#C30020] text-white px-6 py-3 rounded-[8px] font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] hover:bg-[#991B1B] transition-colors">
                اضرب الآن!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        
        {/* Score Hero Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-8">
          {/* Overall Score */}
          <div className="col-span-1 bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <div className="text-center">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269] mb-4">
                الدرجة الكلية
              </p>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#E2E8F0"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#FF8C00"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(4.5 / 9.0) * 352} 352`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#C30020]">4.5</span>
                </div>
              </div>
              <div className="text-[12px] text-[#4A4A4A] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif]">
                4.5 / 9.0
              </div>
            </div>
          </div>

          {/* Task 1 Score */}
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269] mb-4 text-center">
              المهمة 1
            </p>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
              <svg className="w-full h-full -rotate-90">
                <circle cx="48" cy="48" r="42" stroke="#E2E8F0" strokeWidth="10" fill="none" />
                <circle
                  cx="48" cy="48" r="42"
                  stroke="#FF8C00" strokeWidth="10" fill="none"
                  strokeDasharray={`${(6.5 / 9.0) * 264} 264`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#FF8C00]">6.5</span>
              </div>
            </div>
          </div>

          {/* Task 2 Score */}
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269] mb-4 text-center">
              المهمة 2
            </p>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
              <svg className="w-full h-full -rotate-90">
                <circle cx="48" cy="48" r="42" stroke="#E2E8F0" strokeWidth="10" fill="none" />
                <circle
                  cx="48" cy="48" r="42"
                  stroke="#C30020" strokeWidth="10" fill="none"
                  strokeDasharray={`${(4.5 / 9.0) * 264} 264`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#C30020]">4.5</span>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm flex flex-col items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3">
              <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
                <path d={svgPaths.p123ef3f0} fill="#4CAF50" />
              </svg>
            </div>
            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#4CAF50] mb-2">
              تقدم ممتاز
            </p>
            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#4B5563] text-center">
              لقد اقتربت كثيراً من النتيجة المستهدفة!
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-8">
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(217,68,68,0.2)] rounded-[12px] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#C30020]" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[24px] text-[#1B2A4A]">287</p>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">كلمة</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(217,68,68,0.2)] rounded-[12px] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#C30020]" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[24px] text-[#1B2A4A]">18:32</p>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">دقيقة</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(217,68,68,0.2)] rounded-[12px] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#C30020]" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[24px] text-[#1B2A4A]">2.0</p>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">كلمة/دقيقة</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(217,68,68,0.2)] rounded-[12px] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#C30020]" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[24px] text-[#C30020]">58%</p>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">دقة القواعد النحوية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analysis Tabs */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-[16px] border border-[#EEEEEE] shadow-sm overflow-hidden">
          <Tabs.List className="flex border-b border-[#EEEEEE] bg-[#F9FAFB]">
            <Tabs.Trigger
              value="overview"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              نظرة عامة
            </Tabs.Trigger>
            <Tabs.Trigger
              value="criteria"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              المعايير التفصيلية
            </Tabs.Trigger>
            <Tabs.Trigger
              value="improvements"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              اقتراحات التحسين
            </Tabs.Trigger>
            <Tabs.Trigger
              value="model-answer"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              الإجابة النموذجية
            </Tabs.Trigger>
            <Tabs.Trigger
              value="answer"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              إجابتك والتصحيح
            </Tabs.Trigger>
          </Tabs.List>

          {/* Overview Tab */}
          <Tabs.Content value="overview" className="p-4 sm:p-8">

            {/* Score + Chart in one row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              {/* Score Card */}
              <div className="bg-gradient-to-bl from-[#012269] via-[#1B2A4A] to-[#0f1d3d] rounded-[20px] p-6 relative overflow-hidden">
                <div className="absolute top-[-40px] left-[-40px] w-[160px] h-[160px] rounded-full border-[30px] border-white opacity-[0.03]" />
                <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full border-[30px] border-white opacity-[0.03]" />

                <div className="relative z-10">
                  <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-white/50 mb-5">
                    الدرجة الإجمالية
                  </p>

                  {/* Ring + Score */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-[140px] h-[140px]">
                      {(() => {
                        const score = attemptData[selectedAttempt].score;
                        const r = 60;
                        const circ = 2 * Math.PI * r;
                        const offset = circ - ((score / 9) * circ);
                        return (
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
                            <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                            <circle cx="70" cy="70" r={r} fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round"
                              strokeDasharray={circ} strokeDashoffset={offset}
                              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                            />
                          </svg>
                        );
                      })()}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[40px] text-white leading-none">
                          {attemptData[selectedAttempt].score}
                        </span>
                        <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-white/35">من 9</span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Criteria - compact row */}
                  <div className="grid grid-cols-2 gap-2">
                    {(() => {
                      const colors = ['#EF4444', '#F59E0B', '#3B82F6', '#EC4899'];
                      const labels = ['إنجاز المهمة', 'الترابط', 'المفردات', 'النحو'];
                      return attemptData[selectedAttempt].criteria.map((c, i) => (
                        <div key={c.id} className="bg-white/8 rounded-[10px] px-3 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i] }} />
                            <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-white/60">{labels[i]}</span>
                          </div>
                          <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-white">{c.score}</span>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#EEEEEE] flex flex-col">
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                  تطور الدرجات
                </h3>
                <div className="flex-1 min-h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={attemptData} margin={{ top: 30, right: 40, left: 0, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                      <XAxis
                        dataKey="attempt"
                        tick={({ x, y, index, payload }: { x: number; y: number; index: number; payload: { value: string } }) => {
                          const isCurrent = index === attemptData.length - 1;
                          return (
                            <g style={{ cursor: isCurrent ? 'default' : 'pointer' }}>
                              <a href={isCurrent ? undefined : `#result-${index + 1}`}>
                                <text
                                  x={x} y={y + 18}
                                  textAnchor="middle"
                                  fill={isCurrent ? '#1B2A4A' : '#012269'}
                                  fontSize={12}
                                  fontWeight={isCurrent ? 700 : 400}
                                  fontFamily="'IBM Plex Sans Arabic', sans-serif"
                                  textDecoration={isCurrent ? 'none' : 'underline'}
                                >
                                  {payload.value}
                                </text>
                              </a>
                            </g>
                          );
                        }}
                        stroke="#E5E7EB"
                        height={35}
                      />
                      <YAxis
                        domain={[0, 9]}
                        tick={{ fontSize: 11, fontFamily: "'IBM Plex Sans Arabic', sans-serif", fill: '#D1D5DB' }}
                        stroke="#E5E7EB"
                        tickCount={5}
                        width={25}
                      />
                      <Line
                        key="progress-line"
                        type="monotone"
                        dataKey="score"
                        stroke="#012269"
                        strokeWidth={3}
                        dot={(props: { cx: number; cy: number; index: number }) => {
                          const { cx, cy, index } = props;
                          const isCurrent = index === attemptData.length - 1;
                          const score = attemptData[index].score;
                          return (
                            <g key={`dot-${index}`}>
                              <circle
                                cx={cx} cy={cy}
                                r={isCurrent ? 6 : 4}
                                fill={isCurrent ? '#012269' : '#fff'}
                                stroke="#012269"
                                strokeWidth={2}
                              />
                              <text
                                x={cx} y={cy - 14}
                                textAnchor="middle"
                                fill="#1B2A4A"
                                fontSize={13}
                                fontWeight={700}
                                fontFamily="'IBM Plex Sans Arabic', sans-serif"
                              >
                                {score}
                              </text>
                            </g>
                          );
                        }}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Improvement Plan */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                🎯 خطة العمل الشخصية
              </h3>
              <div className="space-y-3">
                {improvementsByPart.flatMap(p => p.tips.map(t => ({ ...t, completed: false }))).map((tip, idx) => (
                  <div key={idx} className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 bg-[#F9FAFB] rounded-[8px] border border-[#EEEEEE]">
                    <div className="flex gap-1 flex-shrink-0">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-6 rounded-full ${
                            (tip.priority === 'عالية' && i <= 3) ||
                            (tip.priority === 'متوسطة' && i <= 2) ||
                            (tip.priority === 'منخفضة' && i <= 1)
                              ? tip.completed ? 'bg-[#4CAF50]' : 'bg-[#C30020]'
                              : 'bg-[#EEEEEE]'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] sm:text-[14px] text-[#1B2A4A] mb-1">
                        {tip.title}
                      </p>
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#374151]">
                        {tip.description}
                      </p>
                    </div>
                    {tip.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          {/* Criteria Tab */}
          <Tabs.Content value="criteria" className="p-4 sm:p-8">
            <div className="mb-6">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[18px] sm:text-[20px] text-[#1B2A4A] mb-2">
                تحليل مفصل للمعايير الأربعة
              </h3>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#6B7280]">
                اضغط على أي جزء لعرض المعايير التفصيلية، ثم اضغط على أي معيار للحصول على تحليل شامل
              </p>
            </div>

            <div className="space-y-6">
              {detailedCriteriaByPart.map((part) => (
                <div key={part.partId} className="rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                  {/* Part Header - Collapsible */}
                  <button
                    onClick={() => togglePart(part.partId)}
                    className="w-full bg-gradient-to-l from-[#012269] to-[#1B2A4A] px-6 py-5 flex items-center justify-between hover:opacity-95 transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-white" />
                      <div className="text-right">
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-white">
                          {part.partTitle}
                        </h4>
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-white/70">
                          {part.partType} • المعدل: {part.partScore}/9
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-[8px] px-3 py-1.5">
                        <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[18px] text-white">{part.partScore}</span>
                        <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-white/70">/9</span>
                      </div>
                      {expandedParts.includes(part.partId) ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>

                  {/* Part Content - Criteria List */}
                  {expandedParts.includes(part.partId) && (
                    <div className="p-4 bg-white space-y-4">
                      {part.criteria.map((criteria) => (
                        <div
                          key={criteria.id}
                          className="bg-white rounded-[16px] border-2 border-[#EEEEEE] overflow-hidden hover:border-[#BFDBFE] transition-all"
                          style={{ borderLeftColor: expandedCriteria.includes(criteria.id) ? criteria.borderColor : '#EEEEEE', borderLeftWidth: expandedCriteria.includes(criteria.id) ? '4px' : '2px' }}
                        >
                          <button
                            onClick={() => toggleCriteria(criteria.id)}
                            className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <div
                                className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: criteria.color }}
                              >
                                <BarChart3 className="w-6 h-6" style={{ color: criteria.borderColor }} />
                              </div>
                              <div className="text-right flex-1">
                                <div className="flex items-center justify-between gap-4">
                                  <div>
                                    <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] sm:text-[17px] text-[#1B2A4A] mb-1">
                                      {criteria.nameAr}
                                    </h4>
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6B7280]">
                                      {criteria.name}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="text-left">
                                      <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[24px] sm:text-[28px]" style={{ color: criteria.borderColor }}>
                                        {criteria.score}
                                      </span>
                                      <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#6B7280]">/9</span>
                                    </div>
                                    {expandedCriteria.includes(criteria.id) ? (
                                      <ChevronUp className="w-5 h-5 text-[#6B7280]" />
                                    ) : (
                                      <ChevronDown className="w-5 h-5 text-[#6B7280]" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>

                          {expandedCriteria.includes(criteria.id) && (
                            <div className="px-6 pb-6 border-t border-[#EEEEEE]">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                                    <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">نقاط القوة</h5>
                                  </div>
                                  <div className="space-y-3">
                                    {criteria.strengths.map((strength, idx) => (
                                      <div key={idx} className="bg-[#D1FAE5] rounded-[12px] p-4 border border-[#86EFAC]">
                                        <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-2">✓ {strength.text}</p>
                                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] bg-white/50 rounded-[8px] p-2">
                                          <span className="text-[#6B7280]">مثال:</span> {strength.example}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-[#FF8C00]" />
                                    <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">مجالات التحسين</h5>
                                  </div>
                                  <div className="space-y-3">
                                    {criteria.improvements.map((improvement, idx) => (
                                      <div key={idx} className="bg-[#FEF3C7] rounded-[12px] p-4 border border-[#FDE68A]">
                                        <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-2">💡 {improvement.text}</p>
                                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] bg-white/50 rounded-[8px] p-2">
                                          <span className="text-[#6B7280]">نصيحة:</span> {improvement.tip}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="bg-[#F9FAFB] rounded-[12px] p-4 border border-[#EEEEEE]">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="px-3 py-1 bg-[#E0F2FE] rounded-full">
                                      <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[12px] text-[#0369A1]">مستواك الحالي: {criteria.currentBand.level}</span>
                                    </div>
                                  </div>
                                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] leading-relaxed">{criteria.currentBand.description}</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-[12px] p-4 border border-[#F59E0B]">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Target className="w-4 h-4 text-[#92400E]" />
                                    <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[13px] text-[#92400E]">للوصول للمستوى {criteria.nextBand.level}</span>
                                  </div>
                                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] leading-relaxed mb-2">{criteria.nextBand.description}</p>
                                  <div className="bg-white/70 rounded-[8px] p-2 mt-2">
                                    <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] text-[#92400E]">📍 كيف تصل: {criteria.nextBand.howToReach}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6">
                                <div className="flex items-center gap-2 mb-3">
                                  <BookOpen className="w-5 h-5 text-[#012269]" />
                                  <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">أمثلة من إجابتك</h5>
                                </div>
                                <div className="space-y-2">
                                  {criteria.examples.map((example, idx) => (
                                    <div key={idx} className="bg-white rounded-[8px] p-3 border border-[#EEEEEE]">
                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151] mb-1 italic">"{example.text}"</p>
                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280]">→ {example.highlight}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Tabs.Content>

          {/* Improvements Tab */}
          <Tabs.Content value="improvements" className="p-4 sm:p-8">
            <div className="mb-6">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-2">
                💡 اقتراحات التحسين
              </h3>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#6B7280]">
                اضغط على أي جزء لعرض اقتراحات التحسين الخاصة به مع بدائل أفضل للعبارات المستخدمة
              </p>
            </div>

            <div className="space-y-6">
              {improvementsByPart.map((part) => (
                <div key={part.partId} className="rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                  {/* Part Header - Collapsible */}
                  <button
                    onClick={() => toggleImprovementPart(part.partId)}
                    className="w-full bg-gradient-to-l from-[#012269] to-[#1B2A4A] px-6 py-5 flex items-center justify-between hover:opacity-95 transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-white" />
                      <div className="text-right">
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-white">
                          {part.partTitle}
                        </h4>
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-white/70">
                          {part.partType} • {part.improvements.length} فئات تحسين • {part.tips.length} نصائح
                        </p>
                      </div>
                    </div>
                    {expandedImprovementParts.includes(part.partId) ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>

                  {/* Part Content */}
                  {expandedImprovementParts.includes(part.partId) && (
                    <div className="p-4 bg-white space-y-6">
                      {/* Word Improvements */}
                      <div>
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A] mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-[#012269]" />
                          كان بإمكانك استخدام عبارات أفضل
                        </h4>
                        <div className="space-y-4">
                          {part.improvements.map((category, idx) => (
                            <div key={idx} className="bg-white rounded-[12px] border border-[#EEEEEE] overflow-hidden">
                              <div className="bg-[#F9FAFB] px-4 sm:px-6 py-3 border-b border-[#EEEEEE]">
                                <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] sm:text-[15px] text-[#1B2A4A]">
                                  {category.category}
                                </h5>
                              </div>
                              <div className="p-4 sm:p-5">
                                <div className="space-y-3">
                                  {category.suggestions.map((suggestion, sIdx) => (
                                    <div key={sIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="bg-[#FEF2F2] px-4 py-3 rounded-[8px] border border-[#FECACA]">
                                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-1">استخدمت:</p>
                                        <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#991B1B]">{suggestion.original}</p>
                                      </div>
                                      <div className="bg-[#ECFDF5] px-4 py-3 rounded-[8px] border border-[#A7F3D0]">
                                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-1">يمكنك استخدام:</p>
                                        <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#065F46]">{suggestion.improved}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tips Checklist */}
                      <div>
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A] mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#FF8C00]" />
                          نصائح للتحسين
                        </h4>
                        <div className="space-y-3">
                          {part.tips.map((tip, idx) => (
                            <div key={idx} className="bg-[#F9FAFB] rounded-[12px] p-4 border border-[#EEEEEE] flex items-start gap-3">
                              <div className={`px-2.5 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] flex-shrink-0 mt-0.5 ${
                                tip.priority === 'عالية' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'
                              }`}>
                                {tip.priority}
                              </div>
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A] mb-1">{tip.title}</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280]">{tip.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Tabs.Content>

          {/* Answer Tab */}
          <Tabs.Content value="answer" className="p-4 sm:p-8">
            <div className="space-y-6">
              {/* Task Information */}
              <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-[12px] p-4 sm:p-6 border border-[#BAE6FD]">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#012269] rounded-[12px] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#012269]">
                        المهمة 1 - General Training Letter
                      </h4>
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6B7280]">
                        رسالة شخصية - General Training
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center px-4 py-2 bg-white rounded-[8px] border border-[#BFDBFE]">
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280] mb-1">الحد الأدنى</p>
                      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#012269]">150 كلمة</p>
                    </div>
                    <div className="text-center px-4 py-2 bg-white rounded-[8px] border border-[#BFDBFE]">
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280] mb-1">الوزن</p>
                      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#012269]">33%</p>
                    </div>
                  </div>
                </div>
                
                <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[15px] text-[#012269] mb-3">
                  السؤال:
                </h5>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed">
                  The chart below shows the number of hours per week that children aged 5-14 in a European country spent doing different activities in 2019.
                  <br /><br />
                  Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
                  <br /><br />
                  Write at least 150 words.
                </p>
              </div>

              {/* Your Answer with Annotations */}
              <div className="bg-white rounded-[12px] p-4 sm:p-6 border border-[#EEEEEE]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[16px] text-[#1B2A4A]">
                    إجابتك (مع التعليقات التوضيحية)
                  </h4>
                  <div className="flex gap-2 sm:gap-4 text-[11px] sm:text-[12px] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#D1FAE5] border border-[#4CAF50] rounded"></div>
                      <span className="text-[#374151]">ممتاز</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#FEF3C7] border border-[#FF8C00] rounded"></div>
                      <span className="text-[#374151]">يمكن تحسينه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#FEE2E2] border border-[#C30020] rounded"></div>
                      <span className="text-[#374151]">خطأ</span>
                    </div>
                  </div>
                </div>
                {/* Helper to render annotated text spans */}
                {(() => {
                  const AnnotatedSpan = ({ id, text, type, title, desc }: { id: number; text: string; type: 'error' | 'warning' | 'good'; title: string; desc: string }) => {
                    const colors = type === 'error'
                      ? { bg: 'bg-[#FEE2E2]', border: 'border-[#C30020]', hover: 'hover:bg-[#FCA5A5]', tooltipBorder: 'border-[#C30020]', arrow: 'border-t-[#C30020]' }
                      : type === 'warning'
                      ? { bg: 'bg-[#FEF3C7]', border: 'border-[#FF8C00]', hover: 'hover:bg-[#FDE68A]', tooltipBorder: 'border-[#FF8C00]', arrow: 'border-t-[#FF8C00]' }
                      : { bg: 'bg-[#D1FAE5]', border: 'border-[#4CAF50]', hover: 'hover:bg-[#BBF7D0]', tooltipBorder: 'border-[#4CAF50]', arrow: 'border-t-[#4CAF50]' };
                    const Icon = type === 'error' ? XCircle : type === 'warning' ? AlertCircle : CheckCircle2;
                    const iconColor = type === 'error' ? 'text-[#C30020]' : type === 'warning' ? 'text-[#FF8C00]' : 'text-[#4CAF50]';
                    return (
                      <span
                        className={`relative ${colors.bg} border-b-2 ${colors.border} px-1 cursor-pointer ${colors.hover} transition-colors`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === id ? null : id); }}
                      >
                        {text}
                        {activeTooltip === id && (
                          <span className={`absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 ${colors.tooltipBorder} rounded-[12px] p-4 shadow-lg`} onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2">
                              <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                              <div>
                                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">{title}</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{desc}</p>
                              </div>
                            </div>
                            <div className={`absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent ${colors.arrow}`}></div>
                          </span>
                        )}
                      </span>
                    );
                  };
                  return null;
                })()}
                <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed space-y-4">
                  <p>
                    <span className="relative bg-[#D1FAE5] border-b-2 border-[#4CAF50] px-1 cursor-pointer hover:bg-[#BBF7D0] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 0 ? null : 0); }}>
                      Dear Sarah,
                      {activeTooltip === 0 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#4CAF50] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">تحية مناسبة ⭐</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">بداية صحيحة للرسالة غير الرسمية</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4CAF50]"></div>
                        </span>
                      )}
                    </span>
                  </p>
                  <p>
                    I am writing to you because I <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 1 ? null : 1); }}>
                      want tell you
                      {activeTooltip === 1 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"want to tell" وليس "want tell" — يجب إضافة "to" بعد "want"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> about <span className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 2 ? null : 2); }}>
                      swimming class in our area
                      {activeTooltip === 2 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">موضوع مناسب</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">ذكر الموضوع جيد لكن ينقص أداة التنكير: "a swimming class"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span>. The <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 3 ? null : 3); }}>
                      comunity center have new class
                      {activeTooltip === 3 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملائي + نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"community" وليس "comunity"، و"has" وليس "have" مع المفرد، وينقص "a" قبل "new class"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> for people who <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 4 ? null : 4); }}>
                      dont know swim
                      {activeTooltip === 4 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"don't know how to swim" — ينقص "how to" ولا تنسَ الفاصلة العليا في "don't"`}</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>.
                  </p>
                  <p>
                    The class is <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 5 ? null : 5); }}>
                      in Tuesday and Thursday
                      {activeTooltip === 5 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ حرف جر ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"on Tuesday and Thursday" — نستخدم "on" مع أيام الأسبوع وليس "in"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 6 ? null : 6); }}>
                      in evening time
                      {activeTooltip === 6 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">تعبير خاطئ ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"in the evening" هي العبارة الصحيحة — لا نقول "evening time"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. The teacher is good and he <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 7 ? null : 7); }}>
                      teached many peoples before
                      {activeTooltip === 7 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">فعل شاذ: "taught" وليس "teached"، و"people" لا تُجمع بإضافة s</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 8 ? null : 8); }}>
                      It cost 50 dollar per month
                      {activeTooltip === 8 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"It costs 50 dollars" — المفرد يتطلب "costs" مع s، و"dollars" جمع</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> and they give you <span className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 9 ? null : 9); }}>
                      all thing you need
                      {activeTooltip === 9 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مفردات ضعيفة</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"everything you need" أو "all the things you need" — "thing" يجب أن تكون جمع "things"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span> like towel and cap. I think the price is <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 10 ? null : 10); }}>
                      not much expensif
                      {activeTooltip === 10 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"expensive" وليس "expensif"، و"not very expensive" وليس "not much expensif"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>.
                  </p>
                  <p>
                    I was thinking <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 11 ? null : 11); }}>
                      maybe me and you can go togather
                      {activeTooltip === 11 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي + إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"you and I" وليس "me and you"، و"together" وليس "togather"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. You said before you <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 12 ? null : 12); }}>
                      want learn swimming
                      {activeTooltip === 12 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"want to learn" — يجب إضافة "to" بعد "want"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. It will be very fun if we go <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 13 ? null : 13); }}>
                      same class
                      {activeTooltip === 13 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"to the same class" — ينقص "to" و"the" قبل "same"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. We can also <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 14 ? null : 14); }}>
                      do practise in weekend togather
                      {activeTooltip === 14 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"practice on the weekend together" — "practice" (فعل)، "on the weekend"، و"together" وليس "togather"</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>.
                  </p>
                  <p>
                    Please tell me what you think about this. I hope you will come with me.
                  </p>
                  <p>
                    <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 15 ? null : 15); }}>
                      Waiting your reply,
                      {activeTooltip === 15 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خاتمة خاطئة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"Awaiting your reply" أو "I await your reply" — "Waiting your reply" غير صحيح</p></div></div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span><br />
                    Alex
                  </p>
                </div>
              </div>

              {/* Word Count - Task 1 */}
              <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] px-6 py-3 border border-[#EEEEEE]">
                <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">
                  عدد الكلمات
                </span>
                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-[#1B2A4A]">
                  155 كلمة <span className="text-[#4CAF50] text-[14px]">(الحد الأدنى: 150) ✅</span>
                </span>
              </div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TASK 1 - Errors and Corrections */}
              {/* ═══════════════════════════════════════════════════════ */}
              {(() => {
                const task1Errors = errorExamples.filter(e => e.task === 'task1');
                return (
                  <div className="mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-5 h-5 text-[#C30020]" />
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                        الأخطاء وتصحيحها - المهمة 1
                      </h4>
                      <span className="px-3 py-1 rounded-full text-[12px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                        {task1Errors.length} أخطاء
                      </span>
                    </div>
                    <div className="space-y-3">
                      {task1Errors.map((error, idx) => (
                        <div key={idx} className="bg-[#F9FAFB] rounded-[12px] p-5 border border-[#EEEEEE]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`px-3 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] ${
                              error.type === 'grammar' ? 'bg-[#FEE2E2] text-[#991B1B]' :
                              error.type === 'vocabulary' ? 'bg-[#FEF3C7] text-[#92400E]' :
                              error.type === 'spelling' ? 'bg-[#FCE7F3] text-[#9D174D]' :
                              error.type === 'punctuation' ? 'bg-[#F3E8FF] text-[#6B21A8]' :
                              error.type === 'task' ? 'bg-[#DBEAFE] text-[#1E40AF]' :
                              'bg-[#E0E7FF] text-[#3730A3]'
                            }`}>
                              {error.type === 'grammar' ? 'خطأ نحوي' :
                               error.type === 'vocabulary' ? 'استخدام المفردات' :
                               error.type === 'spelling' ? 'خطأ إملائي' :
                               error.type === 'punctuation' ? 'علامات الترقيم' :
                               error.type === 'task' ? 'تحقيق المهمة' :
                               'الترابط'}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <XCircle className="w-5 h-5 text-[#C30020] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">جملتك:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#FEE2E2] px-3 py-2 rounded-[8px]">{error.original}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">التصحيح:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#D1FAE5] px-3 py-2 rounded-[8px]">{error.corrected}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <BookOpen className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">الشرح:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.explanation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TASK 2 - Essay */}
              {/* ═══════════════════════════════════════════════════════ */}
              <div className="mt-10 pt-8 border-t-2 border-[#E5E7EB]">
                {/* Task 2 Information */}
                <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-[12px] p-4 sm:p-6 border border-[#BAE6FD]">
                  <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#012269] rounded-[12px] flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#012269]">
                          المهمة 2 - Essay
                        </h4>
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6B7280]">
                          مقال أكاديمي - Opinion Essay
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center px-4 py-2 bg-white rounded-[8px] border border-[#BFDBFE]">
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280] mb-1">الحد الأدنى</p>
                        <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#012269]">250 كلمة</p>
                      </div>
                      <div className="text-center px-4 py-2 bg-white rounded-[8px] border border-[#BFDBFE]">
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280] mb-1">الوزن</p>
                        <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#012269]">67%</p>
                      </div>
                    </div>
                  </div>

                  <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[15px] text-[#012269] mb-3">
                    السؤال:
                  </h5>
                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed">
                    Some people believe that technology has made our lives more complicated, while others think it has made life easier.
                    <br /><br />
                    Discuss both views and give your own opinion.
                    <br /><br />
                    Write at least 250 words.
                  </p>
                </div>

                {/* Task 2 Answer with Annotations */}
                <div className="bg-white rounded-[12px] p-4 sm:p-6 border border-[#EEEEEE] mt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                    <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[16px] text-[#1B2A4A]">
                      إجابتك - المهمة 2 (مع التعليقات التوضيحية)
                    </h4>
                    <div className="flex gap-2 sm:gap-4 text-[11px] sm:text-[12px] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif]">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#D1FAE5] border border-[#4CAF50] rounded"></div>
                        <span className="text-[#374151]">ممتاز</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#FEF3C7] border border-[#FF8C00] rounded"></div>
                        <span className="text-[#374151]">يمكن تحسينه</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#FEE2E2] border border-[#C30020] rounded"></div>
                        <span className="text-[#374151]">خطأ</span>
                      </div>
                    </div>
                  </div>
                  <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed space-y-4">
                    <p>
                      In todays world technology <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 100 ? null : 100); }}>
                        have become very importent part
                        {activeTooltip === 100 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"has become a very important part" — "has" مع المفرد، ينقص "a"، و"important" وليس "importent"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> of our life. <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 101 ? null : 101); }}>
                        Some peoples think technology make life hard
                        {activeTooltip === 101 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"people" لا تُجمع بـ s، و"technology makes" مع المفرد</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> and some think it make life easy. <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 102 ? null : 102); }}>
                        I will talk about both side
                        {activeTooltip === 102 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"both sides" — "both" تتبعها كلمة جمع</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> and give my opinion.
                    </p>
                    <p>
                      First, some people <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 103 ? null : 103); }}>
                        belive technology is bad because it make people lazy
                        {activeTooltip === 103 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملائي + نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"believe" وليس "belive"، و"it makes" مع المفرد</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. For example <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 104 ? null : 104); }}>
                        many person spend all the time on there phone
                        {activeTooltip === 104 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"many people" وليس "person"، "their" وليس "there"، و"phones" جمع</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> and <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 105 ? null : 105); }}>
                        dont do any exercice
                        {activeTooltip === 105 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملاء + ترقيم ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"don't" بفاصلة عليا، و"exercise" وليس "exercice"`}</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> or go outside. Also <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 106 ? null : 106); }}>
                        childs now play video game all day and dont study good
                        {activeTooltip === 106 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"children" وليس "childs"، "games" جمع، "don't study well" — "well" حال وليس "good"`}</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 107 ? null : 107); }}>
                        Another probleme is that people dont talk to each other becouse they always on social media
                        {activeTooltip === 107 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء إملائية ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"problem" وليس "probleme"، "don't" بفاصلة عليا، "because" وليس "becouse"، وينقص "are" — "they are always"`}</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. <span className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 108 ? null : 108); }}>
                        This is very bad for the society
                        {activeTooltip === 108 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مفردات ضعيفة</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"This is detrimental to society" أكاديمي أكثر — وبدون "the" قبل "society"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                          </span>
                        )}
                      </span>.
                    </p>
                    <p>
                      On the other hand, technology is also very <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 109 ? null : 109); }}>
                        usefull
                        {activeTooltip === 109 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"useful" بحرف l واحد وليس "usefull"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 110 ? null : 110); }}>
                        It help people to communecate with family who live in diffrent country
                        {activeTooltip === 110 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"helps" مع المفرد، "communicate" بدون to، "different" و"countries" جمع</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. Also <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 111 ? null : 111); }}>
                        student can learn many thing from internet
                        {activeTooltip === 111 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"students" و"things" جمع، و"the internet" مع أداة التعريف</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> and get informations easy. <span className="relative bg-[#D1FAE5] border-b-2 border-[#4CAF50] px-1 cursor-pointer hover:bg-[#BBF7D0] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 112 ? null : 112); }}>
                        For exemple, I use technology for study english and it help me alot
                        {activeTooltip === 112 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#4CAF50] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مثال شخصي جيد</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">محاولة جيدة لإعطاء مثال شخصي يدعم الحجة، رغم الأخطاء الإملائية: "example"، "helps"، "a lot"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4CAF50]"></div>
                          </span>
                        )}
                      </span>. Moreover, <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 113 ? null : 113); }}>
                        hospital use technology for help sick people and save lifes
                        {activeTooltip === 113 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"hospitals" جمع، "to help" وليس "for help"، و"lives" وليس "lifes"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>.
                    </p>
                    <p>
                      In my <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 114 ? null : 114); }}>
                        openion, I think technology brung more good thing than bad thing
                        {activeTooltip === 114 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"opinion" وليس "openion"، "brought" وليس "brung"، و"things" جمع</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span>. But we should use it in a good way and not too much. If people use technology with balance it will be very <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 115 ? null : 115); }}>
                        helpfull for everyone. Goverments should also teach
                        {activeTooltip === 115 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء إملائية ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"helpful" بحرف l واحد، و"Governments" وليس "Goverments"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> people how to use technology in correct way.
                    </p>
                    <p>
                      <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 116 ? null : 116); }}>
                        In conclution, technology have both good and bad side
                        {activeTooltip === 116 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"conclusion" وليس "conclution"، "has" مع المفرد، و"sides" جمع</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> but <span className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 117 ? null : 117); }}>
                        I believe it is more good than bad
                        {activeTooltip === 117 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مفردات ضعيفة</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"more good" غير صحيح — استخدم "better" أو "the benefits outweigh the drawbacks"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                          </span>
                        )}
                      </span>. We need to be <span className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 118 ? null : 118); }}>
                        carefull
                        {activeTooltip === 118 && (
                          <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"careful" بحرف l واحد وليس "carefull"</p></div></div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                          </span>
                        )}
                      </span> and use it wisely.
                    </p>
                  </div>
                </div>

                {/* Word Count - Task 2 */}
                <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] px-6 py-3 border border-[#EEEEEE] mt-6">
                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">
                    عدد الكلمات
                  </span>
                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-[#1B2A4A]">
                    258 كلمة <span className="text-[#4CAF50] text-[14px]">(الحد الأدنى: 250) ✅</span>
                  </span>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TASK 2 - Errors and Corrections */}
              {/* ═══════════════════════════════════════════════════════ */}
              {(() => {
                const task2Errors = errorExamples.filter(e => e.task === 'task2');
                return (
                  <div className="mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-5 h-5 text-[#C30020]" />
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                        الأخطاء وتصحيحها - المهمة 2
                      </h4>
                      <span className="px-3 py-1 rounded-full text-[12px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                        {task2Errors.length} أخطاء
                      </span>
                    </div>
                    <div className="space-y-3">
                      {task2Errors.map((error, idx) => (
                        <div key={idx} className="bg-[#F9FAFB] rounded-[12px] p-5 border border-[#EEEEEE]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`px-3 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] ${
                              error.type === 'grammar' ? 'bg-[#FEE2E2] text-[#991B1B]' :
                              error.type === 'vocabulary' ? 'bg-[#FEF3C7] text-[#92400E]' :
                              error.type === 'spelling' ? 'bg-[#FCE7F3] text-[#9D174D]' :
                              error.type === 'punctuation' ? 'bg-[#F3E8FF] text-[#6B21A8]' :
                              error.type === 'task' ? 'bg-[#DBEAFE] text-[#1E40AF]' :
                              'bg-[#E0E7FF] text-[#3730A3]'
                            }`}>
                              {error.type === 'grammar' ? 'خطأ نحوي' :
                               error.type === 'vocabulary' ? 'استخدام المفردات' :
                               error.type === 'spelling' ? 'خطأ إملائي' :
                               error.type === 'punctuation' ? 'علامات الترقيم' :
                               error.type === 'task' ? 'تحقيق المهمة' :
                               'الترابط'}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <XCircle className="w-5 h-5 text-[#C30020] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">جملتك:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#FEE2E2] px-3 py-2 rounded-[8px]">{error.original}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">التصحيح:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#D1FAE5] px-3 py-2 rounded-[8px]">{error.corrected}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <BookOpen className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">الشرح:</p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.explanation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </Tabs.Content>

          {/* Model Answer Tab */}
          <Tabs.Content value="model-answer" className="p-4 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#012269]" />
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A]">
                  الإجابة النموذجية لكل مهمة
                </h3>
              </div>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#6B7280] mb-4">
                إجابات نموذجية عالية المستوى لكل جزء من أجزاء الاختبار، يمكنك الاستفادة منها لتحسين أسلوبك في الكتابة.
              </p>

              {modelAnswers.map((model) => (
                <div key={model.id} className="rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                  {/* Model Answer Header */}
                  <div className="bg-gradient-to-l from-[#012269] to-[#1B2A4A] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-white" />
                      <div>
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-white">
                          {model.title}
                        </h4>
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-white/70">
                          {model.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white/20 backdrop-blur-sm rounded-[8px] px-3 py-1.5 text-center">
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[10px] text-white/70">
                          Band Score
                        </p>
                        <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-white">
                          {model.bandScore}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Model Answer Body */}
                  <div className="p-6 bg-[#FAFFFE] border-r-4 border-[#4CAF50]">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                      <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#4CAF50]">
                        إجابة نموذجية
                      </span>
                    </div>
                    <div className="bg-white rounded-[12px] p-5 border border-[#E5E7EB] shadow-sm">
                      <pre className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] leading-[1.8] whitespace-pre-wrap" style={{ direction: 'ltr', textAlign: 'left' }}>
                        {model.answer}
                      </pre>
                    </div>
                    <div className="mt-4 flex items-start gap-2 bg-[#EFF6FF] rounded-[8px] p-3">
                      <Lightbulb className="w-5 h-5 text-[#1E40AF] mt-0.5 flex-shrink-0" />
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#1E40AF]">
                        قارن إجابتك بالإجابة النموذجية ولاحظ كيف تم تنظيم الأفكار واستخدام المفردات والروابط بشكل فعّال.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

      </div>
    </div>
  );
}