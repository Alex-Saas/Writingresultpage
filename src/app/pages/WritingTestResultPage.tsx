import { useState, useRef, useEffect, useCallback } from 'react';
import { FileText, TrendingUp, CheckCircle2, XCircle, AlertCircle, BookOpen, ChevronDown, ChevronUp, Lightbulb, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as Tabs from '@radix-ui/react-tabs';
import svgPaths from '../../imports/svg-kef88hpn4e';

// Figma asset URLs
const imgLogo = "https://www.figma.com/api/mcp/asset/3c3922ed-23e0-4b00-91bd-13a9319e72c8";
const imgArrowLeftOutline = "https://www.figma.com/api/mcp/asset/546fecda-a787-4a46-b443-e23be9134dbe";
const imgCaretDownSolid = "https://www.figma.com/api/mcp/asset/84187bd0-1dc9-43ab-9bd5-48dae4503f40";
const imgIconSetFilled = "https://www.figma.com/api/mcp/asset/35b90242-1562-4430-bb80-fc8599169fc4";
const imgGroup2147223679 = "https://www.figma.com/api/mcp/asset/91efb245-fde4-4cdb-807b-698b2a7afcfc";
const imgGroup2147223680 = "https://www.figma.com/api/mcp/asset/5ee5fb82-9404-4bce-89f7-9cb153b8aebf";
const imgEllipse = "https://www.figma.com/api/mcp/asset/a1bbbe08-1b54-4748-bad4-b45be59337e3";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/900288a6-af52-4726-b9b1-a66cfe6ba07c";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/1979b781-f164-4438-bab8-9d2dc8b28296";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/76880041-a4ad-44bf-8227-339c744dc363";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/79f53ac4-0550-427f-a33b-8e0c0ec6cf24";
const imgFrame = "https://www.figma.com/api/mcp/asset/f35f9870-0995-412e-8d0d-449881c23078";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/25072425-0b59-48dd-872a-fff6c8c6e2dc";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/8851b6bc-d321-41e3-9474-1386c8569b5d";

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

// الإجابات الأصلية للطالب (نص خام بدون تعليقات)
const originalAnswers = [
  {
    id: 'task1',
    answer: `Dear Sarah,

I am writing to you because I want tell you about swimming class in our area. The comunity center have new class for people who dont know swim.

The class is in Tuesday and Thursday in evening time. The teacher is good and he teached many peoples before. It cost 50 dollar per month and they give you all thing you need like towel and cap. I think the price is not much expensif.

I was thinking maybe me and you can go togather. You said before you want learn swimming. It will be very fun if we go same class. We can also do practise in weekend togather.

Please tell me what you think about this. I hope you will come with me.

Waiting your reply,
Alex`,
  },
  {
    id: 'task2',
    answer: `In today days, technology is very importent in our lifes. Some peoples think technology have become very importent part of daily life and it make everything easy. Other peoples think it is make life more hard. I will give my opinion about this topic.

First, technology help us alot in many thing. For exemple, I use technology for study english and it help me alot. Also we can use internet to find informations easy about anything we want. This is make our life more easier than before.

On the other hand, some people think technology is bad for the society. This is very bad for the society because peoples spend too much time on phone and they dont talk to each other. Also childs use technology too much and this is not good for there health.

I believe it is more good than bad. Technology is very useful if we use it in good way. We should use technology but not too much. In my opinion technology make life easy and we should use it carefully.`,
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
    criteriaImprovements: [
      {
        criteriaName: 'Task Achievement',
        criteriaNameAr: 'إنجاز المهمة',
        score: 4.0,
        color: '#EF4444',
        bgColor: '#FEF2F2',
        goodPoints: [
          { text: 'ذكرت اسم الرياضة (Swimming) بشكل واضح', example: '"I am writing to you because I want tell you about swimming class in our area"' },
          { text: 'حاولت اقتراح التعلم معاً', example: '"maybe me and you can go togather"' },
        ],
        tips: [
          { title: 'زيادة عدد الكلمات', priority: 'عالية', description: 'اكتب 150 كلمة على الأقل لـ Task 1 — عدد الكلمات الحالي أقل من المطلوب', scoreImpact: '+0.5', examples: [{ fromAnswer: 'الإجابة بأكملها 155 كلمة فقط وهي على الحد الأدنى — حاول إضافة تفاصيل أكثر عن الرياضة وفوائدها', suggestion: 'أضف جملتين عن فوائد السباحة الصحية وجملة عن تجربتك الشخصية' }] },
          { title: 'تناول جميع أجزاء السؤال', priority: 'عالية', description: 'لم يتم تغطية جميع متطلبات المهمة — تأكد من الإجابة على كل نقطة', scoreImpact: '+0.5', examples: [{ fromAnswer: '"Explain how your friend could learn this sport" — ذكرت فقط أوقات الدرس لكن لم تشرح كيف سيتعلم صديقك', suggestion: 'أضف: "The instructor will start with basic techniques like floating and breathing, so beginners can learn step by step"' }] },
        ],
        suggestions: []
      },
      {
        criteriaName: 'Coherence & Cohesion',
        criteriaNameAr: 'التماسك والترابط',
        score: 4.5,
        color: '#F59E0B',
        bgColor: '#FEF3C7',
        goodPoints: [
          { text: 'بنية الرسالة موجودة (تحية + محتوى + خاتمة)', example: '"Dear Sarah," ... "Waiting your reply, Alex"' },
          { text: 'تقسيم الأفكار إلى فقرات', example: 'فقرة للمقدمة، فقرة لتفاصيل الصف، فقرة للاقتراح' },
        ],
        tips: [
          { title: 'تحسين التماسك باستخدام الروابط', priority: 'عالية', description: 'استخدم روابط مناسبة: However, Moreover, Therefore بين الجمل', scoreImpact: '+0.5', examples: [{ fromAnswer: '"The class is in Tuesday and Thursday in evening time. The teacher is good and he teached many peoples before."', suggestion: 'بدلاً من ذلك: "The classes are held on Tuesdays and Thursdays in the evening. Moreover, the teacher is experienced and has taught many students before."' }] },
        ],
        suggestions: [
          { original: 'and', improved: 'moreover, furthermore, in addition' },
          { original: 'but', improved: 'however, nevertheless, on the other hand' },
          { original: 'so', improved: 'therefore, consequently, as a result' }
        ]
      },
      {
        criteriaName: 'Lexical Resource',
        criteriaNameAr: 'الثروة اللغوية',
        score: 5.0,
        color: '#3B82F6',
        bgColor: '#DBEAFE',
        goodPoints: [
          { text: 'استخدمت مفردات مناسبة لموضوع الرياضة', example: '"swimming class", "towel and cap", "practise"' },
          { text: 'النبرة مناسبة لرسالة شخصية', example: '"I was thinking maybe me and you can go togather"' },
        ],
        tips: [
          { title: 'تنويع المفردات', priority: 'متوسطة', description: 'تجنب تكرار نفس الكلمات واستخدم مرادفات أكثر تقدماً', scoreImpact: '+0.5', examples: [{ fromAnswer: '"The teacher is good" — كلمة "good" عامة جداً', suggestion: 'استخدم: "The instructor is highly experienced" أو "The coach is excellent"' }] },
        ],
        suggestions: [
          { original: 'good', improved: 'excellent, beneficial, advantageous' },
          { original: 'show', improved: 'demonstrate, illustrate, indicate' },
          { original: 'very', improved: 'considerably, significantly, remarkably' }
        ]
      },
      {
        criteriaName: 'Grammatical Range & Accuracy',
        criteriaNameAr: 'التنوع والدقة النحوية',
        score: 4.5,
        color: '#EC4899',
        bgColor: '#FCE7F3',
        goodPoints: [
          { text: 'بعض الجمل البسيطة مبنية بشكل صحيح', example: '"I think the price is not much expensive" — الهيكل صحيح رغم وجود خطأ في المفردات' },
        ],
        tips: [
          { title: 'تصحيح الأخطاء النحوية الأساسية', priority: 'عالية', description: 'راجع subject-verb agreement والأزمنة الأساسية — هذا سيرفع درجتك بشكل كبير', scoreImpact: '+1.0', examples: [{ fromAnswer: '"comunity center have new class" — المفرد يتطلب "has" وليس "have"', suggestion: '"The community center has a new class"' }, { fromAnswer: '"he teached many peoples before" — فعل شاذ', suggestion: '"he has taught many people before"' }] },
          { title: 'تنويع التراكيب النحوية', priority: 'متوسطة', description: 'استخدم جمل مركبة ومعقدة بجانب الجمل البسيطة', scoreImpact: '+0.5', examples: [{ fromAnswer: '"It cost 50 dollar per month and they give you all thing you need like towel and cap." — جملة بسيطة متصلة بـ "and"', suggestion: '"The monthly fee is only 50 dollars, which includes all the equipment you need, such as towels and swimming caps."' }] },
        ],
        suggestions: []
      }
    ],
    // Keep flat tips for action plan
    tips: [
      { title: 'تصحيح الأخطاء النحوية الأساسية', priority: 'عالية', description: 'راجع subject-verb agreement والأزمنة الأساسية - هذا سيرفع درجتك بشكل كبير', scoreImpact: '+1.0', criteria: 'التنوع والدقة النحوية' },
      { title: 'زيادة عدد الكلمات', priority: 'عالية', description: 'اكتب 150 كلمة على الأقل لـ Task 1', scoreImpact: '+0.5', criteria: 'إنجاز المهمة' },
      { title: 'تحسين التماسك باستخدام الروابط', priority: 'عالية', description: 'استخدم روابط مناسبة: However, Moreover, Therefore بين الجمل', scoreImpact: '+0.5', criteria: 'التماسك والترابط' }
    ]
  },
  {
    partId: 'task2',
    partTitle: 'المهمة 2 - Essay',
    partType: 'مقال',
    criteriaImprovements: [
      {
        criteriaName: 'Task Achievement',
        criteriaNameAr: 'إنجاز المهمة',
        score: 4.0,
        color: '#EF4444',
        bgColor: '#FEF2F2',
        goodPoints: [
          { text: 'تناولت الجانبين (مع وضد التكنولوجيا)', example: '"First, technology help us alot" ... "On the other hand, some people think technology is bad"' },
          { text: 'ذكرت رأيك الشخصي في النهاية', example: '"I believe it is more good than bad"' },
        ],
        tips: [
          { title: 'تطوير الأفكار بشكل كامل', priority: 'عالية', description: 'اشرح كل فكرة بجملتين أو ثلاث مع أمثلة داعمة', scoreImpact: '+1.0', examples: [{ fromAnswer: '"technology help us alot in many thing. For exemple, I use technology for study english and it help me alot." — الفكرة غير مطورة بشكل كافٍ', suggestion: '"Technology has significantly improved access to education. For instance, online platforms such as Coursera and Khan Academy allow millions of students worldwide to learn new skills from the comfort of their homes, which was previously impossible."' }] },
          { title: 'كتابة 250 كلمة على الأقل', priority: 'عالية', description: 'Task 2 يمثل 67% من الدرجة — تأكد من كتابة العدد المطلوب', scoreImpact: '+0.5', examples: [{ fromAnswer: 'الإجابة الحالية قصيرة وكل فقرة تحتوي على أفكار غير مطورة', suggestion: 'طور كل فقرة بإضافة: سبب + مثال + نتيجة — هذا سيزيد عدد الكلمات بشكل طبيعي' }] },
        ],
        suggestions: [
          { original: 'I think', improved: 'In my opinion, From my perspective, I firmly believe' },
          { original: 'In conclusion', improved: 'To sum up, In light of the above, Taking everything into account' }
        ]
      },
      {
        criteriaName: 'Coherence & Cohesion',
        criteriaNameAr: 'التماسك والترابط',
        score: 4.5,
        color: '#F59E0B',
        bgColor: '#FEF3C7',
        goodPoints: [
          { text: 'بنية المقال واضحة (مقدمة + فقرتين + خاتمة)', example: 'فقرة أولى (مع)، فقرة ثانية (ضد)، خاتمة برأي شخصي' },
          { text: 'استخدمت بعض الروابط الأساسية', example: '"First,", "On the other hand,", "In conclusion,"' },
        ],
        tips: [
          { title: 'استخدام روابط متنوعة', priority: 'عالية', description: 'لا تكرر نفس الروابط — نوّع بين الروابط المختلفة', scoreImpact: '+0.5', examples: [{ fromAnswer: '"Also childs use technology too much and this is not good for there health. Also..." — تكرار "Also"', suggestion: 'بدلاً من ذلك: "Furthermore, children tend to overuse technology, which negatively impacts their health. Moreover,..."' }] },
        ],
        suggestions: [
          { original: 'Also', improved: 'Furthermore, Moreover, In addition to this' },
          { original: 'But', improved: 'Nevertheless, Conversely, On the contrary' },
          { original: 'Because', improved: 'Due to the fact that, Owing to, As a consequence of' }
        ]
      },
      {
        criteriaName: 'Lexical Resource',
        criteriaNameAr: 'الثروة اللغوية',
        score: 5.0,
        color: '#3B82F6',
        bgColor: '#DBEAFE',
        goodPoints: [
          { text: 'حاولت استخدام كلمات أكاديمية', example: '"society", "communicate", "conclusion"' },
          { text: 'تنويع بسيط في المفردات', example: '"helpful", "useful", "benefit"' },
        ],
        tips: [
          { title: 'توسيع الثروة اللغوية', priority: 'متوسطة', description: 'تعلم 10 كلمات أكاديمية جديدة يومياً وتجنب تكرار نفس الكلمات', scoreImpact: '+0.5', examples: [{ fromAnswer: '"technology is very importent" ... "technology have become very importent part" — تكرار "very important"', suggestion: 'نوّع: "technology plays a crucial role" أو "technology has become an integral part" أو "technology is indispensable"' }] },
        ],
        suggestions: [
          { original: 'important', improved: 'crucial, significant, vital, paramount' },
          { original: 'think', improved: 'believe, consider, argue, contend' },
          { original: 'a lot of', improved: 'numerous, a significant number of, considerable' },
          { original: 'For example', improved: 'For instance, A case in point is, To illustrate' }
        ]
      },
      {
        criteriaName: 'Grammatical Range & Accuracy',
        criteriaNameAr: 'التنوع والدقة النحوية',
        score: 4.5,
        color: '#EC4899',
        bgColor: '#FCE7F3',
        goodPoints: [
          { text: 'حاولت استخدام جمل مركبة', example: '"If people use technology with balance it will be very helpful for everyone"' },
        ],
        tips: [
          { title: 'تصحيح الأخطاء النحوية المتكررة', priority: 'عالية', description: 'راجع subject-verb agreement و أزمنة الأفعال والأخطاء الإملائية', scoreImpact: '+1.0', examples: [{ fromAnswer: '"Some peoples think technology make life hard" — "people" لا تُجمع، و"make" يجب أن تكون "makes"', suggestion: '"Some people think technology makes life difficult"' }, { fromAnswer: '"many person spend all the time on there phone" — أخطاء متعددة', suggestion: '"many people spend all their time on their phones"' }] },
        ],
        suggestions: []
      }
    ],
    tips: [
      { title: 'تطوير الأفكار بشكل كامل', priority: 'عالية', description: 'اشرح كل فكرة بجملتين أو ثلاث مع أمثلة داعمة', scoreImpact: '+1.0', criteria: 'إنجاز المهمة' },
      { title: 'توسيع الثروة اللغوية', priority: 'متوسطة', description: 'تعلم 10 كلمات أكاديمية جديدة يومياً وتجنب تكرار نفس الكلمات', scoreImpact: '+0.5', criteria: 'الثروة اللغوية' },
      { title: 'كتابة 250 كلمة على الأقل', priority: 'عالية', description: 'Task 2 يمثل 67% من الدرجة - تأكد من كتابة العدد المطلوب', scoreImpact: '+0.5', criteria: 'إنجاز المهمة' }
    ]
  }
];

function SmartTooltip({ borderColor, children }: { borderColor: string; children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ top?: string; bottom?: string; left?: string; right?: string; arrowTop?: boolean; arrowLeft?: number }>({ bottom: '100%', right: '0', arrowLeft: 24 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const parent = el.parentElement;
    const rect = el.getBoundingClientRect();
    const parentRect = parent?.getBoundingClientRect();
    const vw = window.innerWidth;
    const tooltipW = 256; // 16rem
    const newPos: typeof pos = {};

    // Vertical: show below if not enough space above
    if (rect.top < 10) {
      newPos.top = '100%';
      newPos.arrowTop = true;
    } else {
      newPos.bottom = '100%';
      newPos.arrowTop = false;
    }

    // Horizontal: center tooltip on parent word, clamp to viewport
    if (parentRect) {
      const parentCenter = parentRect.left + parentRect.width / 2;
      let tooltipLeft = parentCenter - tooltipW / 2;
      // Clamp to viewport
      if (tooltipLeft < 10) tooltipLeft = 10;
      if (tooltipLeft + tooltipW > vw - 10) tooltipLeft = vw - 10 - tooltipW;

      // Convert to offset relative to parent
      const offsetLeft = tooltipLeft - parentRect.left;
      newPos.left = `${offsetLeft}px`;
      newPos.right = undefined;

      // Arrow points to center of parent word relative to tooltip
      const arrowPos = parentCenter - tooltipLeft;
      newPos.arrowLeft = Math.max(12, Math.min(arrowPos, tooltipW - 12));
    } else {
      newPos.right = '0';
      newPos.arrowLeft = 24;
    }

    setPos(newPos);
  }, []);

  const style: React.CSSProperties = {
    position: 'absolute',
    zIndex: 9999,
    width: '16rem',
    ...(pos.bottom ? { bottom: pos.bottom, marginBottom: '0.5rem' } : {}),
    ...(pos.top ? { top: pos.top, marginTop: '0.5rem' } : {}),
    ...(pos.right !== undefined ? { right: pos.right } : {}),
    ...(pos.left !== undefined ? { left: pos.left } : {}),
  };

  return (
    <span
      ref={ref}
      className={`bg-white border-2 rounded-[12px] p-4 shadow-lg`}
      style={{ ...style, borderColor }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <span
        className="absolute w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent"
        style={
          pos.arrowTop
            ? { bottom: '100%', left: `${pos.arrowLeft ?? 24}px`, transform: 'translateX(-8px)', borderBottom: `8px solid ${borderColor}` }
            : { top: '100%', left: `${pos.arrowLeft ?? 24}px`, transform: 'translateX(-8px)', borderTop: `8px solid ${borderColor}` }
        }
      ></span>
    </span>
  );
}

export function WritingTestResultPage() {
  const [activeTab, setActiveTab] = useState('answer');
  const [selectedAttempt, setSelectedAttempt] = useState(2); // index of current attempt (latest)
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [expandedCriteria, setExpandedCriteria] = useState<string[]>(['task-achievement']);
  const [activeErrorFilter, setActiveErrorFilter] = useState('all');
  const [task1ErrorFilter, setTask1ErrorFilter] = useState<'all' | 'grammar' | 'spelling' | 'vocabulary'>('all');
  const [task2ErrorFilter, setTask2ErrorFilter] = useState<'all' | 'grammar' | 'spelling' | 'vocabulary'>('all');
  const [expandedExamples, setExpandedExamples] = useState<string[]>([]);
  const [expandedParts, setExpandedParts] = useState<string[]>(['task1']);
  const [expandedImprovementParts, setExpandedImprovementParts] = useState<string[]>(['task1']);
  const [highlightFilter, setHighlightFilter] = useState<'all' | 'error' | 'warning' | 'good'>('all');
  const [task1AnswerTab, setTask1AnswerTab] = useState<'original' | 'model' | 'improvements'>('original');
  const [task2AnswerTab, setTask2AnswerTab] = useState<'original' | 'model' | 'improvements'>('original');
  const [expandedAnswerTasks, setExpandedAnswerTasks] = useState<string[]>(['answer-task1']);

  const toggleAnswerTask = (taskId: string) => {
    setExpandedAnswerTasks(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

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
            {/* Logo - first in DOM = rightmost in RTL */}
            <div className="h-[42px] w-[118px] overflow-hidden relative shrink-0">
              <img alt="GoIELTS" className="h-full w-full object-contain" src={imgLogo} />
            </div>

            {/* Share Link + Copy - second in DOM = leftmost in RTL */}
            <div className="flex items-center gap-4">
              <div className="relative bg-[#f2f2f2] h-[36px] rounded-[7px] w-[258px]">
                <span className="absolute right-[19px] top-1/2 -translate-y-1/2 font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#6b7280] whitespace-nowrap">
                  app.goielts.ai/score/1063
                </span>
                <div className="absolute left-0 top-0 h-[36px] w-[57px] bg-[#012269] rounded-[7px] flex items-center justify-center shadow-sm">
                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-white">نسخ</span>
                </div>
              </div>
              <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#0a0a0a] whitespace-nowrap hidden md:block">
                شارك درجتك
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-6">
            {/* Success Message — first in DOM = rightmost in RTL */}
            <div className="flex items-center gap-3">
              <h1 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] sm:text-[24px] lg:text-[32px] text-[#012269]">
                مبروك! خلّصت الاختبار بنجاح
              </h1>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full"><circle cx="18" cy="18" r="18" fill="#4CAF50"/><path d="M10 18l6 6 10-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            {/* Nav Buttons — last in DOM = leftmost in RTL */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 bg-[#012269] text-white px-3 py-2 rounded-[6px] hover:bg-[#011a50] transition-colors h-[40px]">
                <img alt="" className="w-6 h-6" src={imgArrowLeftOutline} />
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px]">رجوع</span>
              </button>
              <button className="bg-white border border-[#d1d5db] px-4 py-2 rounded-[6px] hover:bg-gray-50 transition-colors opacity-70 h-[40px]">
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[16px] text-[#374151]">إعادة الاختبار</span>
              </button>
              <button className="bg-white border border-[#d1d5db] px-4 py-2 rounded-[6px] hover:bg-gray-50 transition-colors opacity-70 h-[40px]">
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[16px] text-[#374151]">الاختبارات</span>
              </button>
              <button className="flex items-center gap-1 bg-white border border-[#d1d5db] px-3 py-2 rounded-[6px] hover:bg-gray-50 transition-colors h-[40px]">
                <img alt="" className="w-6 h-6" src={imgCaretDownSolid} />
                <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#374151]">الكتابة</span>
              </button>
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
          <div className="bg-white rounded-[8px] p-4 shadow-[0px_2px_0px_0px_#c90f2e]">
            <div className="flex items-center gap-4">
              {/* Icon — first in DOM = rightmost in RTL */}
              <div className="w-10 h-10 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                  <path d={svgPaths.p123ef3f0} fill="#4CAF50" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 text-right">
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#023196] mb-1">
                  أداء رهيب! 🔥 باقي 4.0 بس وتوصل لهدفك!
                </h3>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[16px] text-[#46484c]">
                  أنت قريب بـ 4.0 درجة فقط من الدرجة 8! جرب باقة التدريب السريع عشان ترفع درجتك
                </p>
              </div>
              {/* Button — last in DOM = leftmost in RTL */}
              <button className="bg-[#c90f2e] text-white px-3 py-2.5 rounded-[6px] font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[14px] hover:bg-[#a80d27] transition-colors whitespace-nowrap shrink-0">
                اشترك الآن
              </button>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full h-[6px] bg-[#e0e7ff] rounded-[30px] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2c277f] to-[#22c55e] rounded-[30px]" style={{ width: '51.79%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[12px] text-black opacity-60">الدرجة المستهدفة  8.0</span>
                <span className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[12px] text-black opacity-60">الدرجة الحالية  7.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        
        {/* Score Hero Section */}
        <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-8 flex-wrap">
          {/* Task 1 + Task 2 + Achievement + Overall big — first in outer DOM = rightmost in RTL */}
          <div className="flex flex-1 gap-4 sm:gap-6 flex-wrap">
            {/* Overall Score big gauge — first in inner DOM = rightmost in RTL */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-6 flex flex-col items-end gap-2 flex-1 relative min-w-[160px]">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">الدرجة الكلية</p>
              <div className="w-full flex flex-col items-center gap-4">
                <div className="relative w-[140px] h-[140px]">
                  <div className="absolute inset-[-4.64%]">
                    <img alt="" className="block w-full h-full" src={imgGroup2147223680} />
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4a4a4a]">7.0 / 9.0</p>
                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4a4a4a]">الدرجة</p>
                </div>
              </div>
              <span className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#c8102e] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">4.5</span>
            </div>

            {/* Task 1 Score */}
            <div className="bg-white rounded-[8px] p-6 flex flex-col items-end gap-8 flex-1 relative min-w-[120px]">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">المهمة 1</p>
              <div className="relative w-[100px] h-[100px] mx-auto">
                <div className="absolute inset-[-6.5%]">
                  <img alt="" className="block w-full h-full" src={imgGroup2147223679} />
                </div>
              </div>
              <span className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#ff8c00] left-1/2 -translate-x-1/2 top-[125px]">6.5</span>
            </div>

            {/* Task 2 Score */}
            <div className="bg-white rounded-[8px] p-6 flex flex-col items-end gap-8 flex-1 relative min-w-[120px]">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">المهمة 2</p>
              <div className="relative w-[100px] h-[100px] mx-auto">
                <div className="absolute inset-[-6.5%]">
                  <img alt="" className="block w-full h-full" src={imgGroup2147223679} />
                </div>
              </div>
              <span className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#ff8c00] left-1/2 -translate-x-1/2 top-[125px]">4.5</span>
            </div>

            {/* Achievement Badge — last in inner DOM = leftmost in RTL */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-6 flex flex-col items-center justify-center gap-2 min-w-[160px] flex-1">
              <div className="w-[60px] h-[60px] overflow-hidden">
                <img alt="" className="w-full h-full object-contain" src={imgIconSetFilled} />
              </div>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[16px] text-[#4caf50]">تقدم ممتاز</p>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4B5563] text-center">
                لقد اقتربت كثيرًا من النتيجة المستهدفة! استمر في العمل الرائع!
              </p>
            </div>
          </div>

          {/* Small Overall Score — last in outer DOM = leftmost in RTL */}
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] p-5 shadow-sm flex flex-col items-center gap-3 min-w-[140px]">
            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">
              الدرجة الكلية
            </p>
            <div className="relative w-[120px] h-[120px]">
              <img alt="" className="absolute inset-0 w-full h-full" src={imgEllipse} />
              <div className="absolute inset-0" style={{ left: '50%', right: 0, top: 0, bottom: 0 }}>
                <img alt="" className="block w-full h-full" src={imgEllipse1} />
              </div>
              <span className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#c30020]"
                style={{ left: '42px', top: '44px' }}>4.5</span>
            </div>
            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4A4A4A]">4.5 / 9.0</p>
          </div>
        </div>

        {/* Criteria Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-8">
          <div className="bg-white rounded-[16px] border border-[#EEEEEE] px-5 py-4 overflow-hidden">
            <div className="flex items-center overflow-hidden mb-2">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">انجاز المهمة</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#c30020]">4</p>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[16px] text-[#4a4a4a] mb-1">/9</p>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] px-5 py-4 overflow-hidden">
            <div className="flex items-center overflow-hidden mb-2">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">التماسك والترابط</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#f59e0b]">4.5</p>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[16px] text-[#4a4a4a] mb-1">/9</p>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] px-5 py-4 overflow-hidden">
            <div className="flex items-center overflow-hidden mb-2">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">الثروة اللغوية</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#ff8c00]">5</p>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[16px] text-[#4a4a4a] mb-1">/9</p>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#EEEEEE] px-5 py-4 overflow-hidden">
            <div className="flex items-center overflow-hidden mb-2">
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#012269]">التنوع والدقة النحوية</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[28px] text-[#c90f2e]">4.5</p>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[16px] text-[#4a4a4a] mb-1">/9</p>
            </div>
          </div>
        </div>

        {/* Detailed Analysis Tabs */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-[16px] border border-[#EEEEEE] shadow-sm">
          <Tabs.List className="flex border-b border-[#EEEEEE] bg-[#F9FAFB]">
            <Tabs.Trigger
              value="overview"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              نظرة عامة
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

            {/* Progress Chart - Full Width */}
            <div className="mb-8">
              <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#EEEEEE] flex flex-col">
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                  تطور الدرجات
                </h3>
                <div className="h-[280px]">
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
                {(() => {
                  const allTips = improvementsByPart.flatMap(p => p.tips.map(t => ({ ...t, completed: false })));
                  // Sort: عالية first, then متوسطة, then by scoreImpact descending
                  const sorted = [...allTips].sort((a, b) => {
                    const priorityOrder: Record<string, number> = { 'عالية': 0, 'متوسطة': 1, 'منخفضة': 2 };
                    const pA = priorityOrder[a.priority] ?? 2;
                    const pB = priorityOrder[b.priority] ?? 2;
                    if (pA !== pB) return pA - pB;
                    return parseFloat(b.scoreImpact) - parseFloat(a.scoreImpact);
                  });
                  return sorted.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 sm:p-5 bg-[#F9FAFB] rounded-[12px] border border-[#EEEEEE]">
                      {/* Number */}
                      <span className="w-8 h-8 rounded-full bg-[#1B2A4A] text-white text-[14px] font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">
                            {tip.title}
                          </p>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] ${
                            tip.priority === 'عالية' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'
                          }`}>
                            {tip.priority === 'عالية' ? 'أولوية عالية' : 'أولوية متوسطة'}
                          </span>
                        </div>
                        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6B7280] mb-2">
                          {tip.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1 text-[11px] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[#6B7280]">
                            <Target className="w-3.5 h-3.5 text-[#6B7280]" />
                            {tip.criteria}
                          </span>
                        </div>
                      </div>
                      {/* Score Impact */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[18px] text-[#4CAF50]">
                          {tip.scoreImpact}
                        </span>
                        <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[10px] text-[#6B7280]">
                          درجة متوقعة
                        </span>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </Tabs.Content>

          {/* Improvements Tab */}
          {/* Answer Tab */}
          <Tabs.Content value="answer" className="p-4 sm:p-8">
            <div className="space-y-4">
              {/* Task 1 Collapsible */}
              <div className="rounded-[16px] border border-[#EEEEEE] overflow-visible">
                <button
                  onClick={() => toggleAnswerTask('answer-task1')}
                  className="w-full bg-gradient-to-bl from-[#012269] via-[#1B2A4A] to-[#0f1d3d] p-4 sm:p-5 flex items-center justify-between rounded-t-[16px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] sm:text-[17px] text-white">
                        المهمة 1 - General Training Letter
                      </h4>
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-white/60">
                        رسالة شخصية • 150 كلمة • 33%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-white">4<span className="text-[14px] text-white/50">/9</span></span>
                    {expandedAnswerTasks.includes('answer-task1') ? <ChevronUp className="w-5 h-5 text-white/70" /> : <ChevronDown className="w-5 h-5 text-white/70" />}
                  </div>
                </button>
                {expandedAnswerTasks.includes('answer-task1') && (
                <div className="p-4 sm:p-6 space-y-6">
              <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-[12px] p-4 sm:p-6 border border-[#BAE6FD]">
                
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

              {/* Task 1 Answer - Sub Tabs */}
              <div className="bg-white rounded-[12px] border border-[#EEEEEE] overflow-visible">
                {/* Sub-tab switcher */}
                <div className="flex border-b border-[#EEEEEE]">
                  <button
                    onClick={() => setTask1AnswerTab('improvements')}
                    className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                      task1AnswerTab === 'improvements'
                        ? 'bg-white text-[#FF8C00] border-b-2 border-[#FF8C00]'
                        : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                    }`}
                  >
                    اقتراحات التحسين
                  </button>
                  <button
                    onClick={() => setTask1AnswerTab('model')}
                    className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                      task1AnswerTab === 'model'
                        ? 'bg-white text-[#4CAF50] border-b-2 border-[#4CAF50]'
                        : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                    }`}
                  >
                    النسخة المحسنة
                  </button>
                  <button
                    onClick={() => setTask1AnswerTab('original')}
                    className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                      task1AnswerTab === 'original'
                        ? 'bg-white text-[#012269] border-b-2 border-[#012269]'
                        : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                    }`}
                  >
                    إجابتك الأصلية
                  </button>
                </div>

                {task1AnswerTab === 'original' ? (
                <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[16px] text-[#1B2A4A]">
                      إجابتك - المهمة 1
                    </h4>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]">
                      155 كلمة ✅
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {([
                      { key: 'all' as const, label: 'الكل', active: 'bg-[#1B2A4A] text-white border-[#1B2A4A]', dot: '' },
                      { key: 'error' as const, label: 'خطأ', active: 'bg-[#C30020] text-white border-[#C30020]', dot: 'bg-[#FEE2E2] border-[#C30020]' },
                      { key: 'warning' as const, label: 'تحسين', active: 'bg-[#FF8C00] text-white border-[#FF8C00]', dot: 'bg-[#FEF3C7] border-[#FF8C00]' },
                      { key: 'good' as const, label: 'ممتاز', active: 'bg-[#4CAF50] text-white border-[#4CAF50]', dot: 'bg-[#D1FAE5] border-[#4CAF50]' },
                    ] as const).map((f) => (
                      <button
                        key={f.key}
                        onClick={() => setHighlightFilter(f.key)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                          highlightFilter === f.key ? f.active : 'bg-white text-[#6B7280] border-[#D1D5DB] hover:bg-[#F3F4F6]'
                        }`}
                      >
                        {f.dot && <div className={`w-2 h-2 rounded-full border ${highlightFilter === f.key ? 'bg-white/40 border-white/60' : f.dot}`}></div>}
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Annotation highlight styles based on filter */}
                <style>{`
                  .ann-error { background: #FEE2E2; border-bottom: 2px solid #C30020; padding: 0 3px; cursor: pointer; display: inline-flex; flex-direction: column; }
                  .ann-error:hover { background: #FCA5A5; }
                  .ann-warning { background: #FEF3C7; border-bottom: 2px solid #FF8C00; padding: 0 3px; cursor: pointer; display: inline-flex; flex-direction: column; }
                  .ann-warning:hover { background: #FDE68A; }
                  .ann-good { background: #D1FAE5; border-bottom: 2px solid #4CAF50; padding: 0 3px; cursor: pointer; display: inline-flex; flex-direction: column; }
                  .ann-good:hover { background: #BBF7D0; }
                  .ann-hidden { background: transparent !important; border-bottom: none !important; cursor: default !important; padding: 0 !important; }
                  .ann-dimmed { opacity: 0.4; }
                `}</style>
                <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed space-y-4">
                  <p>
                    <span className={`relative ann-good ${highlightFilter !== 'all' && highlightFilter !== 'good' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 0 ? null : 0); }}>
                      Dear Sarah,
                      {activeTooltip === 0 && (
                        <SmartTooltip borderColor="#4CAF50">
                          <div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">تحية مناسبة ⭐</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">بداية صحيحة للرسالة غير الرسمية</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>
                  </p>
                  <p>
                    I am writing to you because I <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 1 ? null : 1); }}>
                      want tell you
                      {activeTooltip === 1 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"want to tell" وليس "want tell" — يجب إضافة "to" بعد "want"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span> about <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 2 ? null : 2); }}>
                      swimming class in our area
                      {activeTooltip === 2 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"a swimming class" — ينقص أداة التنكير "a" قبل "swimming class"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. The <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 3 ? null : 3); }}>
                      comunity center have new class
                      {activeTooltip === 3 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملائي + نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"community" وليس "comunity"، و"has" وليس "have" مع المفرد، وينقص "a" قبل "new class"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span> for people who <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 4 ? null : 4); }}>
                      dont know swim
                      {activeTooltip === 4 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"don't know how to swim" — ينقص "how to" ولا تنسَ الفاصلة العليا في "don't"`}</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>.
                  </p>
                  <p>
                    The class is <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 5 ? null : 5); }}>
                      in Tuesday and Thursday
                      {activeTooltip === 5 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ حرف جر ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"on Tuesday and Thursday" — نستخدم "on" مع أيام الأسبوع وليس "in"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span> <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 6 ? null : 6); }}>
                      in evening time
                      {activeTooltip === 6 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">تعبير خاطئ ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"in the evening" هي العبارة الصحيحة — لا نقول "evening time"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. <span className={`relative ann-warning ${highlightFilter !== 'all' && highlightFilter !== 'warning' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 20 ? null : 20); }}>
                      The teacher is good
                      {activeTooltip === 20 && (
                        <SmartTooltip borderColor="#FF8C00">
                          <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مفردات بسيطة</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"good" مفردة بسيطة جداً — استخدم "experienced" أو "qualified" أو "skilled" لرفع مستوى الكتابة</p></div></div>

                        </SmartTooltip>
                      )}
                    </span> and he <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 7 ? null : 7); }}>
                      teached many peoples before
                      {activeTooltip === 7 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">فعل شاذ: "taught" وليس "teached"، و"people" لا تُجمع بإضافة s</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 8 ? null : 8); }}>
                      It cost 50 dollar per month
                      {activeTooltip === 8 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"It costs 50 dollars" — المفرد يتطلب "costs" مع s، و"dollars" جمع</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span> and they give you <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 9 ? null : 9); }}>
                      all thing you need
                      {activeTooltip === 9 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"everything you need" أو "all the things you need" — "thing" يجب أن تكون جمع "things"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span> like towel and cap. I think the price is <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 10 ? null : 10); }}>
                      not much expensif
                      {activeTooltip === 10 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"expensive" وليس "expensif"، و"not very expensive" وليس "not much expensif"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>.
                  </p>
                  <p>
                    I was thinking <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 11 ? null : 11); }}>
                      maybe me and you can go togather
                      {activeTooltip === 11 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي + إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"you and I" وليس "me and you"، و"together" وليس "togather"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. You said before you <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 12 ? null : 12); }}>
                      want learn swimming
                      {activeTooltip === 12 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"want to learn" — يجب إضافة "to" بعد "want"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. It will be very fun if we go <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 13 ? null : 13); }}>
                      same class
                      {activeTooltip === 13 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"to the same class" — ينقص "to" و"the" قبل "same"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>. We can also <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 14 ? null : 14); }}>
                      do practise in weekend togather
                      {activeTooltip === 14 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"practice on the weekend together" — "practice" (فعل)، "on the weekend"، و"together" وليس "togather"</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span>.
                  </p>
                  <p>
                    <span className={`relative ann-warning ${highlightFilter !== 'all' && highlightFilter !== 'warning' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 21 ? null : 21); }}>
                      Please tell me what you think about this. I hope you will come with me.
                      {activeTooltip === 21 && (
                        <SmartTooltip borderColor="#FF8C00">
                          <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أسلوب بسيط</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">الخاتمة مقبولة لكن بسيطة — يمكنك كتابة: "I would love to hear your thoughts" أو "Let me know if you are interested"</p></div></div>

                        </SmartTooltip>
                      )}
                    </span>
                  </p>
                  <p>
                    <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 15 ? null : 15); }}>
                      Waiting your reply,
                      {activeTooltip === 15 && (
                        <SmartTooltip borderColor="#C30020">
                          <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خاتمة خاطئة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"Awaiting your reply" أو "I await your reply" — "Waiting your reply" غير صحيح</p></div></div>
                          
                        </SmartTooltip>
                      )}
                    </span><br />
                    Alex
                  </p>
                </div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TASK 1 - Errors and Corrections */}
              {/* ═══════════════════════════════════════════════════════ */}
              {(() => {
                const task1AllErrors = errorExamples.filter(e => e.task === 'task1');
                const task1Errors = task1ErrorFilter === 'all' ? task1AllErrors : task1AllErrors.filter(e => e.type === task1ErrorFilter);
                const task1GrammarCount = task1AllErrors.filter(e => e.type === 'grammar').length;
                const task1SpellingCount = task1AllErrors.filter(e => e.type === 'spelling').length;
                const task1VocabCount = task1AllErrors.filter(e => e.type === 'vocabulary').length;
                return (
                  <div className="mt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-[#C30020]" />
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                          الأخطاء وتصحيحها - المهمة 1
                        </h4>
                        <span className="px-3 py-1 rounded-full text-[12px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                          {task1Errors.length} أخطاء
                        </span>
                      </div>
                      <div className="flex gap-1.5 flex-wrap">
                        {([
                          { key: 'all' as const, label: 'الكل', count: task1AllErrors.length, active: 'bg-[#1b2a4a] text-white border-[#1b2a4a]', dotImg: null },
                          { key: 'grammar' as const, label: 'خطأ نحوي', count: task1GrammarCount, active: 'bg-[#C30020] text-white border-[#C30020]', dotImg: imgEllipse2 },
                          { key: 'spelling' as const, label: 'خطأ إملائي', count: task1SpellingCount, active: 'bg-[#3B82F6] text-white border-[#3B82F6]', dotImg: imgEllipse3 },
                          { key: 'vocabulary' as const, label: 'استخدام المفردات', count: task1VocabCount, active: 'bg-[#FF8C00] text-white border-[#FF8C00]', dotImg: imgEllipse4 },
                        ] as const).filter(f => f.key === 'all' || f.count > 0).map((f) => (
                          <button
                            key={f.key}
                            onClick={() => setTask1ErrorFilter(f.key)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                              task1ErrorFilter === f.key ? f.active : 'bg-white text-[#4a4a4a] border-[#d1d5da] hover:bg-[#F3F4F6]'
                            }`}
                          >
                            {f.dotImg && <img alt="" src={f.dotImg} className="w-2 h-2 rounded-full" />}
                            {f.label}
                            <span className="text-[10px] px-1.5 py-0.5 rounded-[10px] bg-[#f3f4f6] text-[#6b7280]">{f.count}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {task1Errors.map((error, idx) => (
                        <div key={idx} className="bg-[#F9FAFB] rounded-[12px] px-5 py-4 border border-[#EEEEEE] flex flex-col gap-3">
                          <div className="flex items-center gap-2">
                            <div className="bg-[#1b2a4a] w-6 h-6 rounded-[12px] flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-[11px] font-bold">{idx + 1}</span>
                            </div>
                            <div className="px-3 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                              {error.type === 'grammar' ? 'خطأ نحوي' :
                               error.type === 'vocabulary' ? 'استخدام المفردات' :
                               error.type === 'spelling' ? 'خطأ إملائي' :
                               error.type === 'punctuation' ? 'علامات الترقيم' :
                               error.type === 'article' ? 'أدوات التعريف' : error.type}
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">جملتك:</p>
                              <div className="bg-[#FEE2E2] px-3 py-2 rounded-[8px]">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.original}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame1} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">التصحيح:</p>
                              <div className="bg-[#D1FAE5] px-3 py-2 rounded-[8px]">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.corrected}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame2} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">الشرح:</p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.explanation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

                </div>
                ) : task1AnswerTab === 'model' ? (
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Original Answer - Left */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-[#C30020]" />
                        <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#C30020]">
                          إجابتك الأصلية
                        </span>
                      </div>
                      <div className="bg-[#FFF5F5] rounded-[12px] p-5 border border-[#FEE2E2] flex-1">
                        <pre className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] leading-[1.8] whitespace-pre-wrap" style={{ direction: 'ltr', textAlign: 'left' }}>
                          {originalAnswers[0].answer}
                        </pre>
                      </div>
                    </div>
                    {/* Model Answer - Right */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                        <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#4CAF50]">
                          إجابة نموذجية — Band {modelAnswers[0].bandScore}
                        </span>
                      </div>
                      <div className="bg-[#FAFFFE] rounded-[12px] p-5 border border-[#D1FAE5] flex-1">
                        <pre className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] leading-[1.8] whitespace-pre-wrap" style={{ direction: 'ltr', textAlign: 'left' }}>
                          {modelAnswers[0].answer}
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-2 bg-[#EFF6FF] rounded-[8px] p-3">
                    <Lightbulb className="w-5 h-5 text-[#1E40AF] mt-0.5 flex-shrink-0" />
                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#1E40AF]">
                      قارن إجابتك بالإجابة النموذجية ولاحظ كيف تم تنظيم الأفكار واستخدام المفردات والروابط بشكل فعّال.
                    </p>
                  </div>
                </div>
                ) : (
                <div className="p-4 sm:p-6 space-y-6">
                  {(() => {
                    const part = improvementsByPart.find(p => p.partId === 'task1');
                    if (!part) return null;
                    return (
                      <div className="space-y-6">
                        {part.criteriaImprovements.map((criteria, cIdx) => (
                          <div key={cIdx} className="bg-white rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                            {/* Criteria Header */}
                            <div className="px-4 sm:px-6 py-4 border-b border-[#EEEEEE] flex items-center justify-between" style={{ backgroundColor: criteria.bgColor }}>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-8 rounded-full" style={{ backgroundColor: criteria.color }}></div>
                                <div>
                                  <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">{criteria.criteriaNameAr}</h4>
                                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280]">{criteria.criteriaName}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[18px]" style={{ color: criteria.color }}>{criteria.score}</span>
                                <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#9CA3AF]">/ 9.0</span>
                              </div>
                            </div>
                            <div className="p-4 sm:p-6 space-y-4">
                              {/* Good Points */}
                              {criteria.goodPoints && criteria.goodPoints.length > 0 && (
                                <div className="space-y-3">
                                  <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#065F46] flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                                    ما أجدته
                                  </h5>
                                  {criteria.goodPoints.map((point: { text: string; example: string }, gIdx: number) => (
                                    <div key={gIdx} className="bg-[#F0FDF4] rounded-[10px] p-3 sm:p-4 border border-[#BBF7D0]">
                                      <div className="flex items-start gap-2.5">
                                        <div className="w-5 h-5 rounded-full bg-[#4CAF50] text-white text-[10px] font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                        <div className="flex-1">
                                          <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">{point.text}</p>
                                          <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4B5563] bg-[#ECFDF5] px-3 py-2 rounded-[6px] border border-[#D1FAE5]" style={{ direction: 'ltr', textAlign: 'left' }}>{point.example}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {/* Tips for this criteria */}
                              {criteria.tips.length > 0 && (
                                <div className="space-y-3">
                                  <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#6B7280] flex items-center gap-2">
                                    <Target className="w-4 h-4 text-[#FF8C00]" />
                                    نصائح للتحسين
                                  </h5>
                                  {criteria.tips.map((tip: any, tIdx: number) => {
                                    const exampleKey = `task1-${cIdx}-${tIdx}`;
                                    const isExpanded = expandedExamples.includes(exampleKey);
                                    return (
                                    <div key={tIdx} className="bg-[#F9FAFB] rounded-[10px] border border-[#EEEEEE] overflow-hidden">
                                      <div className="p-3 sm:p-4 flex items-start gap-3">
                                        <div className={`px-2.5 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] flex-shrink-0 mt-0.5 ${
                                          tip.priority === 'عالية' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'
                                        }`}>
                                          {tip.priority}
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center justify-between mb-1">
                                            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">{tip.title}</p>
                                            {tip.scoreImpact && (
                                              <span className="px-2 py-0.5 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                                                {tip.scoreImpact} درجة
                                              </span>
                                            )}
                                          </div>
                                          <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280]">{tip.description}</p>
                                        </div>
                                      </div>
                                      {/* Collapsible examples from answer */}
                                      {tip.examples && tip.examples.length > 0 && (
                                        <>
                                          <button
                                            onClick={() => setExpandedExamples(prev => prev.includes(exampleKey) ? prev.filter(k => k !== exampleKey) : [...prev, exampleKey])}
                                            className="w-full flex items-center justify-center gap-2 py-2 bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors border-t border-[#EEEEEE] cursor-pointer"
                                          >
                                            <BookOpen className="w-3.5 h-3.5 text-[#6B7280]" />
                                            <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] text-[#6B7280]">
                                              {isExpanded ? 'إخفاء الأمثلة من إجابتك' : 'عرض أمثلة من إجابتك'}
                                            </span>
                                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#6B7280]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />}
                                          </button>
                                          {isExpanded && (
                                            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 space-y-2.5 bg-[#FFFBEB] border-t border-[#FEF3C7]">
                                              {tip.examples.map((ex: any, eIdx: number) => (
                                                <div key={eIdx} className="space-y-2">
                                                  <div className="bg-[#FEF2F2] px-3 py-2.5 rounded-[8px] border border-[#FECACA]">
                                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#991B1B] mb-1">من إجابتك:</p>
                                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151]" style={{ direction: 'ltr', textAlign: 'left' }}>{ex.fromAnswer}</p>
                                                  </div>
                                                  <div className="bg-[#ECFDF5] px-3 py-2.5 rounded-[8px] border border-[#A7F3D0]">
                                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#065F46] mb-1">الاقتراح:</p>
                                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151]" style={{ direction: 'ltr', textAlign: 'left' }}>{ex.suggestion}</p>
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </>
                                      )}
                                    </div>
                                    );
                                  })}
                                </div>
                              )}
                              {/* Suggestions for this criteria */}
                              {criteria.suggestions.length > 0 && (
                                <div className="space-y-3">
                                  <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#6B7280] flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-[#012269]" />
                                    بدائل مقترحة
                                  </h5>
                                  {criteria.suggestions.map((suggestion: any, sIdx: number) => (
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
                              )}
                              {/* Empty state */}
                              {criteria.tips.length === 0 && criteria.suggestions.length === 0 && (!criteria.goodPoints || criteria.goodPoints.length === 0) && (
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#9CA3AF] text-center py-2">لا توجد اقتراحات لهذا المعيار حالياً</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
                )}
              </div>
                </div>
                )}
              </div>

              {/* Task 2 Collapsible */}
              <div className="rounded-[16px] border border-[#EEEEEE] overflow-visible">
                <button
                  onClick={() => toggleAnswerTask('answer-task2')}
                  className="w-full bg-gradient-to-bl from-[#012269] via-[#1B2A4A] to-[#0f1d3d] p-4 sm:p-5 flex items-center justify-between rounded-t-[16px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] sm:text-[17px] text-white">
                        المهمة 2 - Essay
                      </h4>
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-white/60">
                        مقال أكاديمي • 250 كلمة • 67%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-white">4.5<span className="text-[14px] text-white/50">/9</span></span>
                    {expandedAnswerTasks.includes('answer-task2') ? <ChevronUp className="w-5 h-5 text-white/70" /> : <ChevronDown className="w-5 h-5 text-white/70" />}
                  </div>
                </button>
                {expandedAnswerTasks.includes('answer-task2') && (
                <div className="p-4 sm:p-6 space-y-6">
              <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-[12px] p-4 sm:p-6 border border-[#BAE6FD]">

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

                {/* Task 2 Answer - Sub Tabs */}
                <div className="bg-white rounded-[12px] border border-[#EEEEEE] mt-6 overflow-visible">
                  {/* Sub-tab switcher */}
                  <div className="flex border-b border-[#EEEEEE]">
                    <button
                      onClick={() => setTask2AnswerTab('improvements')}
                      className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                        task2AnswerTab === 'improvements'
                          ? 'bg-white text-[#FF8C00] border-b-2 border-[#FF8C00]'
                          : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                      }`}
                    >
                      اقتراحات التحسين
                    </button>
                    <button
                      onClick={() => setTask2AnswerTab('model')}
                      className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                        task2AnswerTab === 'model'
                          ? 'bg-white text-[#4CAF50] border-b-2 border-[#4CAF50]'
                          : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                      }`}
                    >
                      النسخة المحسنة
                    </button>
                    <button
                      onClick={() => setTask2AnswerTab('original')}
                      className={`flex-1 px-4 py-3 text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                        task2AnswerTab === 'original'
                          ? 'bg-white text-[#012269] border-b-2 border-[#012269]'
                          : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]'
                      }`}
                    >
                      إجابتك الأصلية
                    </button>
                  </div>

                  {task2AnswerTab === 'original' ? (
                  <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] sm:text-[16px] text-[#1B2A4A]">
                        إجابتك - المهمة 2
                      </h4>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]">
                        258 كلمة ✅
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {([
                        { key: 'all' as const, label: 'الكل', active: 'bg-[#1B2A4A] text-white border-[#1B2A4A]', dot: '' },
                        { key: 'error' as const, label: 'خطأ', active: 'bg-[#C30020] text-white border-[#C30020]', dot: 'bg-[#FEE2E2] border-[#C30020]' },
                        { key: 'warning' as const, label: 'تحسين', active: 'bg-[#FF8C00] text-white border-[#FF8C00]', dot: 'bg-[#FEF3C7] border-[#FF8C00]' },
                        { key: 'good' as const, label: 'ممتاز', active: 'bg-[#4CAF50] text-white border-[#4CAF50]', dot: 'bg-[#D1FAE5] border-[#4CAF50]' },
                      ] as const).map((f) => (
                        <button
                          key={f.key}
                          onClick={() => setHighlightFilter(f.key)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                            highlightFilter === f.key ? f.active : 'bg-white text-[#6B7280] border-[#D1D5DB] hover:bg-[#F3F4F6]'
                          }`}
                        >
                          {f.dot && <div className={`w-2 h-2 rounded-full border ${highlightFilter === f.key ? 'bg-white/40 border-white/60' : f.dot}`}></div>}
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed space-y-4">
                    <p>
                      In todays world technology <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 100 ? null : 100); }}>
                        have become very importent part
                        {activeTooltip === 100 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"has become a very important part" — "has" مع المفرد، ينقص "a"، و"important" وليس "importent"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> of our life. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 101 ? null : 101); }}>
                        Some peoples think technology make life hard
                        {activeTooltip === 101 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"people" لا تُجمع بـ s، و"technology makes" مع المفرد</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> and some think it make life easy. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 102 ? null : 102); }}>
                        I will talk about both side
                        {activeTooltip === 102 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"both sides" — "both" تتبعها كلمة جمع</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> and <span className={`relative ann-warning ${highlightFilter !== 'all' && highlightFilter !== 'warning' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 120 ? null : 120); }}>
                        give my opinion
                        {activeTooltip === 120 && (
                          <SmartTooltip borderColor="#FF8C00">
                            <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">مقدمة ضعيفة</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">أسلوب ضعيف للمقدمة — استخدم: "and present my perspective" أو "and share my viewpoint" لرفع الدرجة</p></div></div>

                          </SmartTooltip>
                        )}
                      </span>.
                    </p>
                    <p>
                      First, some people <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 103 ? null : 103); }}>
                        belive technology is bad because it make people lazy
                        {activeTooltip === 103 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملائي + نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"believe" وليس "belive"، و"it makes" مع المفرد</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. For example <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 104 ? null : 104); }}>
                        many person spend all the time on there phone
                        {activeTooltip === 104 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"many people" وليس "person"، "their" وليس "there"، و"phones" جمع</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> and <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 105 ? null : 105); }}>
                        dont do any exercice
                        {activeTooltip === 105 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">إملاء + ترقيم ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"don't" بفاصلة عليا، و"exercise" وليس "exercice"`}</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> or go outside. Also <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 106 ? null : 106); }}>
                        childs now play video game all day and dont study good
                        {activeTooltip === 106 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"children" وليس "childs"، "games" جمع، "don't study well" — "well" حال وليس "good"`}</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 107 ? null : 107); }}>
                        Another probleme is that people dont talk to each other becouse they always on social media
                        {activeTooltip === 107 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء إملائية ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">{`"problem" وليس "probleme"، "don't" بفاصلة عليا، "because" وليس "becouse"، وينقص "are" — "they are always"`}</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. <span className={`relative ann-warning ${highlightFilter !== 'all' && highlightFilter !== 'warning' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 108 ? null : 108); }}>
                        This is very bad for the society
                        {activeTooltip === 108 && (
                          <SmartTooltip borderColor="#FF8C00">
                            <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">يمكن تحسينه</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"This is detrimental to society" أكاديمي أكثر — "very bad" مفردات بسيطة جداً للكتابة الأكاديمية</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>.
                    </p>
                    <p>
                      <span className={`relative ann-good ${highlightFilter !== 'all' && highlightFilter !== 'good' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 121 ? null : 121); }}>
                        On the other hand,
                        {activeTooltip === 121 && (
                          <SmartTooltip borderColor="#4CAF50">
                            <div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">رابط ممتاز ⭐</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">استخدام جيد لرابط المقارنة — يُظهر قدرة على تنظيم الأفكار والانتقال بين الحجج</p></div></div>

                          </SmartTooltip>
                        )}
                      </span> technology is also very <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 109 ? null : 109); }}>
                        usefull
                        {activeTooltip === 109 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"useful" بحرف l واحد وليس "usefull"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 110 ? null : 110); }}>
                        It help people to communecate with family who live in diffrent country
                        {activeTooltip === 110 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"helps" مع المفرد، "communicate" بدون to، "different" و"countries" جمع</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. Also <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 111 ? null : 111); }}>
                        student can learn many thing from internet
                        {activeTooltip === 111 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"students" و"things" جمع، و"the internet" مع أداة التعريف</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> and <span className={`relative ann-warning ${highlightFilter !== 'all' && highlightFilter !== 'warning' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 122 ? null : 122); }}>
                        get informations easy
                        {activeTooltip === 122 && (
                          <SmartTooltip borderColor="#FF8C00">
                            <div className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">نحوي + أسلوب</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"information" اسم غير معدود لا يُجمع، و"easily" (حال) وليس "easy" (صفة) — "obtain information easily"</p></div></div>

                          </SmartTooltip>
                        )}
                      </span>. <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 112 ? null : 112); }}>
                        For exemple, I use technology for study english and it help me alot
                        {activeTooltip === 112 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"example" وليس "exemple"، "to study/studying" وليس "for study"، "English" بحرف كبير، "helps" مع المفرد، "a lot" كلمتان</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. Moreover, <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 113 ? null : 113); }}>
                        hospital use technology for help sick people and save lifes
                        {activeTooltip === 113 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"hospitals" جمع، "to help" وليس "for help"، و"lives" وليس "lifes"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>.
                    </p>
                    <p>
                      In my <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 114 ? null : 114); }}>
                        openion, I think technology brung more good thing than bad thing
                        {activeTooltip === 114 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"opinion" وليس "openion"، "brought" وليس "brung"، و"things" جمع</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. But we should use it in a good way and not too much. If people use technology with balance it will be very <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 115 ? null : 115); }}>
                        helpfull for everyone. Goverments should also teach
                        {activeTooltip === 115 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء إملائية ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"helpful" بحرف l واحد، و"Governments" وليس "Goverments"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> people how to use technology in correct way.
                    </p>
                    <p>
                      <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 116 ? null : 116); }}>
                        In conclution, technology have both good and bad side
                        {activeTooltip === 116 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">أخطاء متعددة ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"conclusion" وليس "conclution"، "has" مع المفرد، و"sides" جمع</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> but <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 117 ? null : 117); }}>
                        I believe it is more good than bad
                        {activeTooltip === 117 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ نحوي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"more good" خطأ — الصفة الشاذة: "better" وليس "more good"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span>. We need to be <span className={`relative ann-error ${highlightFilter !== 'all' && highlightFilter !== 'error' ? 'ann-hidden' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 118 ? null : 118); }}>
                        carefull
                        {activeTooltip === 118 && (
                          <SmartTooltip borderColor="#C30020">
                            <div className="flex items-start gap-2"><XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" /><div><p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">خطأ إملائي ❌</p><p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">"careful" بحرف l واحد وليس "carefull"</p></div></div>
                            
                          </SmartTooltip>
                        )}
                      </span> and use it wisely.
                    </p>
                  </div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TASK 2 - Errors and Corrections */}
              {/* ═══════════════════════════════════════════════════════ */}
              {(() => {
                const task2AllErrors = errorExamples.filter(e => e.task === 'task2');
                const task2Errors = task2ErrorFilter === 'all' ? task2AllErrors : task2AllErrors.filter(e => e.type === task2ErrorFilter);
                const task2GrammarCount = task2AllErrors.filter(e => e.type === 'grammar').length;
                const task2SpellingCount = task2AllErrors.filter(e => e.type === 'spelling').length;
                const task2VocabCount = task2AllErrors.filter(e => e.type === 'vocabulary').length;
                return (
                  <div className="mt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-[#C30020]" />
                        <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                          الأخطاء وتصحيحها - المهمة 2
                        </h4>
                        <span className="px-3 py-1 rounded-full text-[12px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                          {task2Errors.length} أخطاء
                        </span>
                      </div>
                      <div className="flex gap-1.5 flex-wrap">
                        {([
                          { key: 'all' as const, label: 'الكل', count: task2AllErrors.length, active: 'bg-[#1b2a4a] text-white border-[#1b2a4a]', dotImg: null },
                          { key: 'grammar' as const, label: 'خطأ نحوي', count: task2GrammarCount, active: 'bg-[#C30020] text-white border-[#C30020]', dotImg: imgEllipse2 },
                          { key: 'spelling' as const, label: 'خطأ إملائي', count: task2SpellingCount, active: 'bg-[#3B82F6] text-white border-[#3B82F6]', dotImg: imgEllipse3 },
                          { key: 'vocabulary' as const, label: 'استخدام المفردات', count: task2VocabCount, active: 'bg-[#FF8C00] text-white border-[#FF8C00]', dotImg: imgEllipse4 },
                        ] as const).filter(f => f.key === 'all' || f.count > 0).map((f) => (
                          <button
                            key={f.key}
                            onClick={() => setTask2ErrorFilter(f.key)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all ${
                              task2ErrorFilter === f.key ? f.active : 'bg-white text-[#4a4a4a] border-[#d1d5da] hover:bg-[#F3F4F6]'
                            }`}
                          >
                            {f.dotImg && <img alt="" src={f.dotImg} className="w-2 h-2 rounded-full" />}
                            {f.label}
                            <span className="text-[10px] px-1.5 py-0.5 rounded-[10px] bg-[#f3f4f6] text-[#6b7280]">{f.count}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {task2Errors.map((error, idx) => (
                        <div key={idx} className="bg-[#F9FAFB] rounded-[12px] px-5 py-4 border border-[#EEEEEE] flex flex-col gap-3">
                          <div className="flex items-center gap-2">
                            <div className="bg-[#1b2a4a] w-6 h-6 rounded-[12px] flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-[11px] font-bold">{idx + 1}</span>
                            </div>
                            <div className="px-3 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#FEE2E2] text-[#991B1B]">
                              {error.type === 'grammar' ? 'خطأ نحوي' :
                               error.type === 'vocabulary' ? 'استخدام المفردات' :
                               error.type === 'spelling' ? 'خطأ إملائي' :
                               error.type === 'punctuation' ? 'علامات الترقيم' :
                               error.type === 'article' ? 'أدوات التعريف' : error.type}
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">جملتك:</p>
                              <div className="bg-[#FEE2E2] px-3 py-2 rounded-[8px]">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.original}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame1} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">التصحيح:</p>
                              <div className="bg-[#D1FAE5] px-3 py-2 rounded-[8px]">
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.corrected}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <img alt="" src={imgFrame2} className="w-6 h-6 shrink-0" />
                            <div className="flex-1">
                              <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] text-[#4a4a4a] mb-1">الشرح:</p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">{error.explanation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

                  </div>
                  ) : task2AnswerTab === 'model' ? (
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Original Answer - Left */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <XCircle className="w-5 h-5 text-[#C30020]" />
                          <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#C30020]">
                            إجابتك الأصلية
                          </span>
                        </div>
                        <div className="bg-[#FFF5F5] rounded-[12px] p-5 border border-[#FEE2E2] flex-1">
                          <pre className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] leading-[1.8] whitespace-pre-wrap" style={{ direction: 'ltr', textAlign: 'left' }}>
                            {originalAnswers[1].answer}
                          </pre>
                        </div>
                      </div>
                      {/* Model Answer - Right */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                          <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#4CAF50]">
                            إجابة نموذجية — Band {modelAnswers[1].bandScore}
                          </span>
                        </div>
                        <div className="bg-[#FAFFFE] rounded-[12px] p-5 border border-[#D1FAE5] flex-1">
                          <pre className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] leading-[1.8] whitespace-pre-wrap" style={{ direction: 'ltr', textAlign: 'left' }}>
                            {modelAnswers[1].answer}
                          </pre>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 bg-[#EFF6FF] rounded-[8px] p-3">
                      <Lightbulb className="w-5 h-5 text-[#1E40AF] mt-0.5 flex-shrink-0" />
                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#1E40AF]">
                        قارن إجابتك بالإجابة النموذجية ولاحظ كيف تم تنظيم الأفكار واستخدام المفردات والروابط بشكل فعّال.
                      </p>
                    </div>
                  </div>
                  ) : (
                  <div className="p-4 sm:p-6 space-y-6">
                    {(() => {
                      const part = improvementsByPart.find(p => p.partId === 'task2');
                      if (!part) return null;
                      return (
                        <div className="space-y-6">
                          {part.criteriaImprovements.map((criteria, cIdx) => (
                            <div key={cIdx} className="bg-white rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                              {/* Criteria Header */}
                              <div className="px-4 sm:px-6 py-4 border-b border-[#EEEEEE] flex items-center justify-between" style={{ backgroundColor: criteria.bgColor }}>
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-8 rounded-full" style={{ backgroundColor: criteria.color }}></div>
                                  <div>
                                    <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">{criteria.criteriaNameAr}</h4>
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280]">{criteria.criteriaName}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[18px]" style={{ color: criteria.color }}>{criteria.score}</span>
                                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#9CA3AF]">/ 9.0</span>
                                </div>
                              </div>
                              <div className="p-4 sm:p-6 space-y-4">
                                {/* Good Points */}
                                {criteria.goodPoints && criteria.goodPoints.length > 0 && (
                                  <div className="space-y-3">
                                    <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#065F46] flex items-center gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                                      ما أجدته
                                    </h5>
                                    {criteria.goodPoints.map((point: { text: string; example: string }, gIdx: number) => (
                                      <div key={gIdx} className="bg-[#F0FDF4] rounded-[10px] p-3 sm:p-4 border border-[#BBF7D0]">
                                        <div className="flex items-start gap-2.5">
                                          <div className="w-5 h-5 rounded-full bg-[#4CAF50] text-white text-[10px] font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                          <div className="flex-1">
                                            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">{point.text}</p>
                                            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#4B5563] bg-[#ECFDF5] px-3 py-2 rounded-[6px] border border-[#D1FAE5]" style={{ direction: 'ltr', textAlign: 'left' }}>{point.example}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {/* Tips for this criteria */}
                                {criteria.tips.length > 0 && (
                                  <div className="space-y-3">
                                    <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#6B7280] flex items-center gap-2">
                                      <Target className="w-4 h-4 text-[#FF8C00]" />
                                      نصائح للتحسين
                                    </h5>
                                    {criteria.tips.map((tip: any, tIdx: number) => {
                                      const exampleKey = `task2-${cIdx}-${tIdx}`;
                                      const isExpanded = expandedExamples.includes(exampleKey);
                                      return (
                                      <div key={tIdx} className="bg-[#F9FAFB] rounded-[10px] border border-[#EEEEEE] overflow-hidden">
                                        <div className="p-3 sm:p-4 flex items-start gap-3">
                                          <div className={`px-2.5 py-1 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] flex-shrink-0 mt-0.5 ${
                                            tip.priority === 'عالية' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'
                                          }`}>
                                            {tip.priority}
                                          </div>
                                          <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#1B2A4A]">{tip.title}</p>
                                              {tip.scoreImpact && (
                                                <span className="px-2 py-0.5 rounded-full text-[11px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                                                  {tip.scoreImpact} درجة
                                                </span>
                                              )}
                                            </div>
                                            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280]">{tip.description}</p>
                                          </div>
                                        </div>
                                        {/* Collapsible examples from answer */}
                                        {tip.examples && tip.examples.length > 0 && (
                                          <>
                                            <button
                                              onClick={() => setExpandedExamples(prev => prev.includes(exampleKey) ? prev.filter(k => k !== exampleKey) : [...prev, exampleKey])}
                                              className="w-full flex items-center justify-center gap-2 py-2 bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors border-t border-[#EEEEEE] cursor-pointer"
                                            >
                                              <BookOpen className="w-3.5 h-3.5 text-[#6B7280]" />
                                              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] text-[#6B7280]">
                                                {isExpanded ? 'إخفاء الأمثلة من إجابتك' : 'عرض أمثلة من إجابتك'}
                                              </span>
                                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#6B7280]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />}
                                            </button>
                                            {isExpanded && (
                                              <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 space-y-2.5 bg-[#FFFBEB] border-t border-[#FEF3C7]">
                                                {tip.examples.map((ex: any, eIdx: number) => (
                                                  <div key={eIdx} className="space-y-2">
                                                    <div className="bg-[#FEF2F2] px-3 py-2.5 rounded-[8px] border border-[#FECACA]">
                                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#991B1B] mb-1">من إجابتك:</p>
                                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151]" style={{ direction: 'ltr', textAlign: 'left' }}>{ex.fromAnswer}</p>
                                                    </div>
                                                    <div className="bg-[#ECFDF5] px-3 py-2.5 rounded-[8px] border border-[#A7F3D0]">
                                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#065F46] mb-1">الاقتراح:</p>
                                                      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151]" style={{ direction: 'ltr', textAlign: 'left' }}>{ex.suggestion}</p>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        )}
                                      </div>
                                      );
                                    })}
                                  </div>
                                )}
                                {/* Suggestions for this criteria */}
                                {criteria.suggestions.length > 0 && (
                                  <div className="space-y-3">
                                    <h5 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#6B7280] flex items-center gap-2">
                                      <TrendingUp className="w-4 h-4 text-[#012269]" />
                                      بدائل مقترحة
                                    </h5>
                                    {criteria.suggestions.map((suggestion: any, sIdx: number) => (
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
                                )}
                                {/* Empty state */}
                                {criteria.tips.length === 0 && criteria.suggestions.length === 0 && (!criteria.goodPoints || criteria.goodPoints.length === 0) && (
                                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#9CA3AF] text-center py-2">لا توجد اقتراحات لهذا المعيار حالياً</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                  )}
                </div>
                </div>
                )}
              </div>
            </div>
          </Tabs.Content>

          {/* Model Answer Tab */}
          {/* Model Answer tab removed — now inline with answer tab */}
        </Tabs.Root>

      </div>
    </div>
  );
}