// Figma asset URLs
export const imgTrophy = "https://www.figma.com/api/mcp/asset/d029ba19-fcd6-4ba5-815a-668727f1b152";
export const imgLogo = "https://www.figma.com/api/mcp/asset/3c3922ed-23e0-4b00-91bd-13a9319e72c8";
export const imgArrowLeftOutline = "https://www.figma.com/api/mcp/asset/546fecda-a787-4a46-b443-e23be9134dbe";
export const imgCaretDownSolid = "https://www.figma.com/api/mcp/asset/84187bd0-1dc9-43ab-9bd5-48dae4503f40";
export const imgIconSetFilled = "https://www.figma.com/api/mcp/asset/35b90242-1562-4430-bb80-fc8599169fc4";
export const imgGroup2147223679 = "https://www.figma.com/api/mcp/asset/91efb245-fde4-4cdb-807b-698b2a7afcfc";
export const imgGroup2147223680 = "https://www.figma.com/api/mcp/asset/5ee5fb82-9404-4bce-89f7-9cb153b8aebf";
export const imgEllipse = "https://www.figma.com/api/mcp/asset/a1bbbe08-1b54-4748-bad4-b45be59337e3";
export const imgEllipse1 = "https://www.figma.com/api/mcp/asset/900288a6-af52-4726-b9b1-a66cfe6ba07c";
export const imgEllipse2 = "https://www.figma.com/api/mcp/asset/1979b781-f164-4438-bab8-9d2dc8b28296";
export const imgEllipse3 = "https://www.figma.com/api/mcp/asset/76880041-a4ad-44bf-8227-339c744dc363";
export const imgEllipse4 = "https://www.figma.com/api/mcp/asset/79f53ac4-0550-427f-a33b-8e0c0ec6cf24";
export const imgFrame = "https://www.figma.com/api/mcp/asset/f35f9870-0995-412e-8d0d-449881c23078";
export const imgFrame1 = "https://www.figma.com/api/mcp/asset/25072425-0b59-48dd-872a-fff6c8c6e2dc";
export const imgFrame2 = "https://www.figma.com/api/mcp/asset/8851b6bc-d321-41e3-9474-1386c8569b5d";

// بيانات تجريبية للرسم البياني - كل محاولة مع بيانات المعايير
export const attemptData = [
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
export const writingCriteria = [
  { id: 'all', label: 'الكل', color: 'bg-[#1B2A4A] text-white', icon: '📋' },
  { id: 'task-achievement', label: 'تحقيق المهمة', color: 'bg-[#DBEAFE] text-[#1E40AF]', activeColor: 'bg-[#1E40AF] text-white', icon: '🎯' },
  { id: 'coherence-cohesion', label: 'الترابط والتماسك', color: 'bg-[#E0E7FF] text-[#3730A3]', activeColor: 'bg-[#3730A3] text-white', icon: '🔗' },
  { id: 'lexical-resource', label: 'الثروة اللغوية', color: 'bg-[#FEF3C7] text-[#92400E]', activeColor: 'bg-[#92400E] text-white', icon: '📖' },
  { id: 'grammatical-accuracy', label: 'المدى النحوي والدقة', color: 'bg-[#FEE2E2] text-[#991B1B]', activeColor: 'bg-[#991B1B] text-white', icon: '✏️' },
];

// بيانات الأخطاء مجمعة حسب المعيار والمهمة
export const errorExamples = [
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
export const modelAnswers = [
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
export const originalAnswers = [
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
export const detailedCriteriaByPart = [
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
export const improvementsByPart = [
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
