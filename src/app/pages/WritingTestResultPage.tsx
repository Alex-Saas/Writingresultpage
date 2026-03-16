import { useState } from 'react';
import { Award, Clock, FileText, TrendingUp, CheckCircle2, XCircle, AlertCircle, BookOpen, ArrowLeft, Share2, Download, ChevronDown, ChevronUp, Lightbulb, Target, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import * as Tabs from '@radix-ui/react-tabs';
import svgPaths from '../../imports/svg-kef88hpn4e';

// بيانات تجريبية للرسم البياني
const progressData = [
  { id: 'progress-1', attempt: 'Attempt 1', score: 3.5 },
  { id: 'progress-2', attempt: 'Attempt 2', score: 4.0 },
  { id: 'progress-3', attempt: 'Attempt 3', score: 4.5 },
];

// بيانات رادار للمعايير الأربعة
const criteriaRadarData = [
  { id: 'criteria-1', criteria: 'Task Achievement', score: 4.0, fullMark: 9 },
  { id: 'criteria-2', criteria: 'Coherence', score: 4.5, fullMark: 9 },
  { id: 'criteria-3', criteria: 'Lexical Resource', score: 5.0, fullMark: 9 },
  { id: 'criteria-4', criteria: 'Grammar', score: 4.5, fullMark: 9 },
];

// معايير الكتابة الأربعة في IELTS
const writingCriteria = [
  { id: 'all', label: 'الكل', color: 'bg-[#1B2A4A] text-white', icon: '📋' },
  { id: 'task-achievement', label: 'تحقيق المهمة', color: 'bg-[#DBEAFE] text-[#1E40AF]', activeColor: 'bg-[#1E40AF] text-white', icon: '🎯' },
  { id: 'coherence-cohesion', label: 'الترابط والتماسك', color: 'bg-[#E0E7FF] text-[#3730A3]', activeColor: 'bg-[#3730A3] text-white', icon: '🔗' },
  { id: 'lexical-resource', label: 'الثروة اللغوية', color: 'bg-[#FEF3C7] text-[#92400E]', activeColor: 'bg-[#92400E] text-white', icon: '📖' },
  { id: 'grammatical-accuracy', label: 'المدى النحوي والدقة', color: 'bg-[#FEE2E2] text-[#991B1B]', activeColor: 'bg-[#991B1B] text-white', icon: '✏️' },
];

// بيانات الأخطاء مجمعة حسب المعيار
const errorExamples = [
  {
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'Many people is using social media',
    corrected: 'Many people are using social media',
    explanation: 'خطأ في تطابق الفعل مع الفاعل - "people" جمع يتطلب "are"'
  },
  {
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'She don\'t like to play sports',
    corrected: 'She doesn\'t like to play sports',
    explanation: 'استخدام خاطئ للنفي مع الضمير المفرد'
  },
  {
    type: 'vocabulary',
    criteria: 'lexical-resource',
    original: 'I very like this sport',
    corrected: 'I really like this sport',
    explanation: 'ترتيب خاطئ للكلمات - "very" لا تأتي قبل الفعل مباشرة'
  },
  {
    type: 'vocabulary',
    criteria: 'lexical-resource',
    original: 'The price is so much expensive',
    corrected: 'The price is very expensive',
    explanation: 'استخدام خاطئ - "much" لا تستخدم مع الصفات العادية'
  },
  {
    type: 'spelling',
    criteria: 'grammatical-accuracy',
    original: 'I want to imporve my english',
    corrected: 'I want to improve my English',
    explanation: 'خطأ إملائي في "improve" و"English" يجب أن تبدأ بحرف كبير'
  },
  {
    type: 'coherence',
    criteria: 'coherence-cohesion',
    original: 'I like swimming. Swimming good. I swim every day.',
    corrected: 'I like swimming because it is beneficial. I swim every day to stay healthy.',
    explanation: 'جمل متقطعة بدون روابط - تحتاج لتماسك أفضل'
  },
  {
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'If I will have time, I will go',
    corrected: 'If I have time, I will go',
    explanation: 'خطأ في الجملة الشرطية - لا نستخدم "will" بعد "if"'
  },
  {
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'I have study English for 3 years',
    corrected: 'I have studied English for 3 years',
    explanation: 'استخدام خاطئ للمضارع التام - يجب استخدام التصريف الثالث'
  },
  {
    type: 'vocabulary',
    criteria: 'lexical-resource',
    original: 'The weather is very hot in my country in summer time',
    corrected: 'The weather is extremely hot in my country during summer',
    explanation: 'استخدام كلمات بسيطة ومكررة - يمكن استخدام مفردات أقوى'
  },
  {
    type: 'punctuation',
    criteria: 'grammatical-accuracy',
    original: 'I like to read books play football and watch movies',
    corrected: 'I like to read books, play football, and watch movies',
    explanation: 'نقص الفواصل في القائمة'
  },
  {
    type: 'coherence',
    criteria: 'coherence-cohesion',
    original: 'First benefit health. Second benefit money save.',
    corrected: 'The first benefit is improved health. The second benefit is saving money.',
    explanation: 'جمل غير مكتملة - تحتاج لأفعال وتركيب صحيح'
  },
  {
    type: 'grammar',
    criteria: 'grammatical-accuracy',
    original: 'There is many problems in the city',
    corrected: 'There are many problems in the city',
    explanation: 'خطأ في استخدام "there is/are" - مع الجمع نستخدم "are"'
  },
  {
    type: 'task',
    criteria: 'task-achievement',
    original: 'Some people think technology is good. Other people think it is bad.',
    corrected: 'While some argue technology enhances productivity, others contend it diminishes interpersonal connections.',
    explanation: 'لم يتم تناول جميع أجزاء السؤال بشكل كافٍ - يجب تطوير الأفكار بعمق أكثر'
  },
  {
    type: 'task',
    criteria: 'task-achievement',
    original: 'I think education is important.',
    corrected: 'In my view, education plays a pivotal role in shaping individuals and society, as it equips people with essential skills.',
    explanation: 'رأي غير مدعوم - يجب تقديم أسباب وأمثلة واضحة لدعم الموقف'
  }
];

// معايير التقييم التفصيلية
const detailedCriteria = [
  {
    id: 'task-achievement',
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
      { text: 'عدد الكلمات أقل من المطلوب', tip: 'Task 1 يحتاج 150 كلمة على الأقل، Task 2 يحتاج 250 كلمة' },
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
    id: 'coherence-cohesion',
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
      { text: 'الأفكار متقطعة وغير مترابطة', tip: 'اربط الجمل ببعضها باستخدام ضمائر الإشارة وأدوات الربط' },
      { text: 'التكرار الواضح للكلمات', tip: 'استخدم ضمائر الإشارة (this, that, these) لتجنب التكرار' }
    ],
    currentBand: {
      level: '4.5',
      description: 'يقدم معلومات وأفكار لكنها غير منظمة بشكل منطقي، استخدام محدود وغير دقيق لأدوات الربط'
    },
    nextBand: {
      level: '5.0',
      description: 'يقدم معلومات بتماسك واضح ولكن قد يكون هناك تكرار',
      howToReach: 'استخدم روابط مناسبة بين الجمل، نظم كل فقرة حول فكرة مركزية واحدة، تجنب التكرار'
    },
    examples: [
      { text: 'I like sport. Sport is good. I play sport.', highlight: 'تكرار واضح - استخدم ضمائر: I like sports because they are good for health' },
      { text: 'First point. Second point. Third point.', highlight: 'روابط ضعيفة - استخدم: Firstly, Secondly, Finally' }
    ]
  },
  {
    id: 'lexical-resource',
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
      { text: 'أخطاء واضحة في اختيار الكلمات', tip: 'استخدم القاموس للتأكد من المعنى الصحيح' },
      { text: 'أخطاء إملائية متكررة', tip: 'راجع الإملاء: "imporve" → "improve", "becouse" → "because"' },
      { text: 'استخدام كلمات عامية', tip: 'استخدم لغة رسمية أكاديمية في IELTS' }
    ],
    currentBand: {
      level: '5.0',
      description: 'يستخدم مجموعة محدودة من المفردات، أخطاء واضحة في اختيار الكلمات، بعض الأخطاء الإملائية'
    },
    nextBand: {
      level: '6.0',
      description: 'يستخدم مجموعة كافية من المفردات، يحاول استخدام مفردات أقل شيوعاً',
      howToReach: 'تعلم مفردات جديدة يومياً، استخدم مرادفات، راجع الإملاء، تجنب التكرار'
    },
    examples: [
      { text: 'very good, very bad, very important', highlight: 'تكرار "very" - استخدم: excellent, terrible, crucial' },
      { text: 'alot, becouse, imporve', highlight: 'أخطاء إملائية - الصحيح: a lot, because, improve' }
    ]
  },
  {
    id: 'grammatical-range',
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
      { text: 'استخدام محدود للتراكيب المعقدة', tip: 'تعلم الجمل المركبة والمعقدة باستخدام because, although, while' },
      { text: 'أخطاء في الأزمنة', tip: 'راجع الأزمنة: Present Simple, Present Perfect, Past Simple' },
      { text: 'أخطاء في حروف الجر والأدوات', tip: 'احفظ التعبيرات الثابتة مع حروف الجر' },
      { text: 'نقص علامات الترقيم', tip: 'استخدم الفواصل والنقاط بشكل صحيح' }
    ],
    currentBand: {
      level: '4.5',
      description: 'يستخدم مزيج محدود من الجمل البسيطة والمعقدة، أخطاء نحوية متكررة، أخطاء في الترقيم'
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
];

// اقتراحات محسّنة
const improvements = [
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
];

// نصائح التحسين
const improvementTips = [
  {
    title: 'تصحيح الأخطاء النحوية الأساسية',
    priority: 'عالية',
    description: 'راجع subject-verb agreement والأزمنة الأساسية - هذا سيرفع درجتك بشكل كبير',
    completed: false
  },
  {
    title: 'زيادة عدد الكلمات المطلوب',
    priority: 'عالية',
    description: 'اكتب 150 كلمة على الأقل لـ Task 1 و 250 كلمة لـ Task 2',
    completed: false
  },
  {
    title: 'تحسين التماسك باستخدام الروابط',
    priority: 'عالية',
    description: 'استخدم روابط مناسبة: However, Moreover, Therefore بين الجمل',
    completed: false
  },
  {
    title: 'توسيع الثروة اللغوية',
    priority: 'متوسطة',
    description: 'تعلم 10 كلمات جديدة يومياً وتجنب تكرار نفس الكلمات',
    completed: false
  },
  {
    title: 'تطوير الأفكار بشكل كامل',
    priority: 'متوسطة',
    description: 'اشرح كل فكرة بجملتين أو ثلاث مع أمثلة داعمة',
    completed: false
  }
];

export function WritingTestResultPage() {
  const [activeTab, setActiveTab] = useState('answer');
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [expandedCriteria, setExpandedCriteria] = useState<string[]>(['task-achievement']);
  const [activeErrorFilter, setActiveErrorFilter] = useState('all');

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
              value="answer"
              className="flex-1 px-3 sm:px-6 py-4 font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#374151] hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-[#012269] data-[state=active]:border-b-2 data-[state=active]:border-[#012269] text-center"
            >
              إجابتك والتصحيح
            </Tabs.Trigger>
          </Tabs.List>

          {/* Overview Tab */}
          <Tabs.Content value="overview" className="p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Progress Chart */}
              <div>
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                  Progress Over Time
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={progressData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
                    <XAxis 
                      dataKey="attempt" 
                      tick={{ fontSize: 12, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                      stroke="#374151"
                    />
                    <YAxis 
                      domain={[0, 9]} 
                      tick={{ fontSize: 12, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                      stroke="#374151"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        borderRadius: '8px',
                        border: '1px solid #EEEEEE'
                      }}
                    />
                    <Line 
                      key="progress-line"
                      type="monotone" 
                      dataKey="score" 
                      stroke="#C30020" 
                      strokeWidth={3}
                      dot={{ fill: '#C30020', r: 5 }}
                      activeDot={{ r: 7 }}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Radar Chart for Criteria */}
              <div>
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                  Criteria Breakdown
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart data={criteriaRadarData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                    <PolarGrid stroke="#E5E7EB" strokeWidth={1} />
                    <PolarAngleAxis 
                      dataKey="criteria" 
                      tick={{ 
                        fontSize: 12, 
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif", 
                        fill: '#1B2A4A',
                        fontWeight: 600
                      }}
                    />
                    <PolarRadiusAxis 
                      domain={[0, 9]} 
                      tick={{ 
                        fontSize: 11, 
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif", 
                        fill: '#6B7280' 
                      }}
                      tickCount={4}
                      angle={90}
                    />
                    <Radar 
                      key="criteria-radar"
                      name="Score" 
                      dataKey="score" 
                      stroke="#012269" 
                      fill="#C30020" 
                      fillOpacity={0.15}
                      strokeWidth={3}
                      dot={{ fill: '#C30020', r: 4 }}
                      isAnimationActive={false}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Improvement Plan */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
                🎯 خطة العمل الشخصية
              </h3>
              <div className="space-y-3">
                {improvementTips.map((tip, idx) => (
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
                اضغط على أي معيار للحصول على تحليل شامل مع أمثلة من إجابتك ونصائح للتحسين
              </p>
            </div>
            
            <div className="space-y-4">{detailedCriteria.map((criteria) => (
                <div 
                  key={criteria.id}
                  className="bg-white rounded-[16px] border-2 border-[#EEEEEE] overflow-hidden hover:border-[#BFDBFE] transition-all"
                  style={{ borderLeftColor: expandedCriteria.includes(criteria.id) ? criteria.borderColor : '#EEEEEE', borderLeftWidth: expandedCriteria.includes(criteria.id) ? '4px' : '2px' }}
                >
                  {/* Header */}
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

                  {/* Expanded Content */}
                  {expandedCriteria.includes(criteria.id) && (
                    <div className="px-6 pb-6 border-t border-[#EEEEEE]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        {/* Strengths */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                            <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                              نقاط القوة
                            </h5>
                          </div>
                          <div className="space-y-3">
                            {criteria.strengths.map((strength, idx) => (
                              <div key={idx} className="bg-[#D1FAE5] rounded-[12px] p-4 border border-[#86EFAC]">
                                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-2">
                                  ✓ {strength.text}
                                </p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] bg-white/50 rounded-[8px] p-2">
                                  <span className="text-[#6B7280]">مثال:</span> {strength.example}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Improvements */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-[#FF8C00]" />
                            <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                              مجالات التحسين
                            </h5>
                          </div>
                          <div className="space-y-3">
                            {criteria.improvements.map((improvement, idx) => (
                              <div key={idx} className="bg-[#FEF3C7] rounded-[12px] p-4 border border-[#FDE68A]">
                                <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-2">
                                  💡 {improvement.text}
                                </p>
                                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] bg-white/50 rounded-[8px] p-2">
                                  <span className="text-[#6B7280]">نصيحة:</span> {improvement.tip}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Band Descriptors */}
                      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-[#F9FAFB] rounded-[12px] p-4 border border-[#EEEEEE]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="px-3 py-1 bg-[#E0F2FE] rounded-full">
                              <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[12px] text-[#0369A1]">
                                مستواك الحالي: {criteria.currentBand.level}
                              </span>
                            </div>
                          </div>
                          <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] leading-relaxed">
                            {criteria.currentBand.description}
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-[12px] p-4 border border-[#F59E0B]">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-4 h-4 text-[#92400E]" />
                            <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[13px] text-[#92400E]">
                              للوصول للمستوى {criteria.nextBand.level}
                            </span>
                          </div>
                          <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] leading-relaxed mb-2">
                            {criteria.nextBand.description}
                          </p>
                          <div className="bg-white/70 rounded-[8px] p-2 mt-2">
                            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] text-[#92400E]">
                              📍 كيف تصل: {criteria.nextBand.howToReach}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Examples from Text */}
                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-5 h-5 text-[#012269]" />
                          <h5 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                            أمثلة من إجابتك
                          </h5>
                        </div>
                        <div className="space-y-2">
                          {criteria.examples.map((example, idx) => (
                            <div key={idx} className="bg-white rounded-[8px] p-3 border border-[#EEEEEE]">
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#374151] mb-1 italic">
                                "{example.text}"
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] text-[#6B7280]">
                                → {example.highlight}
                              </p>
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

          {/* Improvements Tab */}
          <Tabs.Content value="improvements" className="p-4 sm:p-8">
            <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-6">
              💡 كان بإمكانك استخدام عبارات أفضل
            </h3>
            <div className="space-y-6">
              {improvements.map((category, idx) => (
                <div key={idx} className="bg-white rounded-[12px] border border-[#EEEEEE] overflow-hidden">
                  <div className="bg-[#F9FAFB] px-4 sm:px-6 py-3 border-b border-[#EEEEEE]">
                    <h4 className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#1B2A4A]">
                      {category.category}
                    </h4>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="space-y-4">
                      {category.suggestions.map((suggestion, sIdx) => (
                        <div key={sIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-[#FEF2F2] px-4 py-3 rounded-[8px] border border-[#FECACA]">
                            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-1">
                              استخدمت:
                            </p>
                            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#991B1B]">
                              {suggestion.original}
                            </p>
                          </div>
                          <div className="bg-[#ECFDF5] px-4 py-3 rounded-[8px] border border-[#A7F3D0]">
                            <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#6B7280] mb-1">
                              يمكنك استخدام:
                            </p>
                            <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] text-[#065F46]">
                              {suggestion.improved}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            
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
                <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#374151] leading-relaxed space-y-4">
                  <p>
                    <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 0 ? null : 0);
                      }}
                    >
                      The chart show
                      {activeTooltip === 0 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ نحوي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                Subject-verb agreement: يجب "shows" وليس "show"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> information about <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 1 ? null : 1);
                      }}
                    >
                      childs
                      {activeTooltip === 1 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ نحوي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                الجمع الشاذ: "children" وليس "childs"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> in Europe. <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 2 ? null : 2);
                      }}
                    >
                      They do many things
                      {activeTooltip === 2 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                عامية جداً
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                استخدم: "They engage in various activities" أو "They spend time on different activities"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span>.
                  </p>
                  <p>
                    <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 3 ? null : 3);
                      }}
                    >
                      There is many
                      {activeTooltip === 3 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ أساسي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                مع الجمع نستخدم "There are" وليس "There is"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> hours for watching TV and playing sports. <span 
                      className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 4 ? null : 4);
                      }}
                    >
                      TV is very good
                      {activeTooltip === 4 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خارج الموضوع
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                Task 1 يتطلب وصف البيانات فقط، وليس إبداء الرأي
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span> The <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 5 ? null : 5);
                      }}
                    >
                      childs watch
                      {activeTooltip === 5 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                أخطاء متعددة ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                "children" (جمع شاذ) و "watched" (زمن ماضي للبيانات عام 2019)
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> TV <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 6 ? null : 6);
                      }}
                    >
                      alot
                      {activeTooltip === 6 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ إملائي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                كلمتان منفصلتان: "a lot" وليس "alot"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span>. Sport <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 7 ? null : 7);
                      }}
                    >
                      is less then
                      {activeTooltip === 7 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ إملائي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                "than" للمقارنة وليس "then"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#C30020]"></div>
                        </span>
                      )}
                    </span> TV. 
                  </p>
                  <p>
                    <span 
                      className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 8 ? null : 8);
                      }}
                    >
                      In conclusion
                      {activeTooltip === 8 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                غير مناسب
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                Task 1 يصف بيانات ولا يحتاج خاتمة بـ "In conclusion"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span> the chart good to see what <span 
                      className="relative bg-[#FEE2E2] border-b-2 border-[#C30020] px-1 cursor-pointer hover:bg-[#FCA5A5] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 9 ? null : 9);
                      }}
                    >
                      childs do
                      {activeTooltip === 9 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#C30020] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-[#C30020] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                خطأ نحوي ❌
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                "children do" أو "children did"
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span> enrolling in beginner classes at the community center. 
                    They offer <span 
                      className="relative bg-[#D1FAE5] border-b-2 border-[#4CAF50] px-1 cursor-pointer hover:bg-[#BBF7D0] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 7 ? null : 7);
                      }}
                    >
                      comprehensive lessons with qualified instructors
                      {activeTooltip === 7 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#4CAF50] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                ممتاز جداً! ⭐
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                استخدام مفردات متقدمة (comprehensive, qualified) يعزز الأكاديمية
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4CAF50]"></div>
                        </span>
                      )}
                    </span> three times a week. The courses are reasonably priced and include all necessary equipment.
                  </p>
                  <p>
                    <span 
                      className="relative bg-[#D1FAE5] border-b-2 border-[#4CAF50] px-1 cursor-pointer hover:bg-[#BBF7D0] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 8 ? null : 8);
                      }}
                    >
                      What makes this even better is that
                      {activeTooltip === 8 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#4CAF50] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                استثنائي! 🎯
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                تعبير طبيعي ومتقدم للانتقال لموضوع جديد بسلاسة
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4CAF50]"></div>
                        </span>
                      )}
                    </span> I've been thinking about learning to swim properly myself! Why don't we sign up together? 
                    It would be <span 
                      className="relative bg-[#FEF3C7] border-b-2 border-[#FF8C00] px-1 cursor-pointer hover:bg-[#FDE68A] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === 4 ? null : 4);
                      }}
                    >
                      very fun
                      {activeTooltip === 4 && (
                        <span className="absolute z-10 bottom-full right-0 mb-2 w-64 bg-white border-2 border-[#FF8C00] rounded-[12px] p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] text-[#1B2A4A] mb-1">
                                يمكن تحسينه
                              </p>
                              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151]">
                                يمكن استخدام 'tremendously enjoyable' أو 'highly motivating'
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF8C00]"></div>
                        </span>
                      )}
                    </span> to learn alongside each other, and we could practice together on weekends.
                  </p>
                  <p>
                    Let me know what you think about this idea!
                  </p>
                  <p>
                    Best wishes,<br />
                    Alex
                  </p>
                </div>
              </div>

              {/* Word Count */}
              <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] px-6 py-3 border border-[#EEEEEE]">
                <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">
                  عدد الكلمات الكلي
                </span>
                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] text-[#1B2A4A]">
                  118 كلمة <span className="text-[#C30020] text-[14px]">(الحد الأدنى: 150) ⚠️ أقل من المطلوب</span>
                </span>
              </div>

              {/* Errors and Corrections Section - Grouped by IELTS Criteria */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-6 h-6 text-[#C30020]" />
                  <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A]">
                    الأخطاء الشائعة وكيفية تصحيحها
                  </h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {writingCriteria.map((criterion) => {
                    const count = criterion.id === 'all'
                      ? errorExamples.length
                      : errorExamples.filter(e => e.criteria === criterion.id).length;
                    const isActive = activeErrorFilter === criterion.id;
                    return (
                      <button
                        key={criterion.id}
                        onClick={() => setActiveErrorFilter(criterion.id)}
                        className={`px-4 py-2 rounded-full text-[13px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] transition-all duration-200 flex items-center gap-2 ${
                          isActive
                            ? (criterion.id === 'all' ? 'bg-[#1B2A4A] text-white shadow-md' : (criterion.activeColor || criterion.color) + ' shadow-md')
                            : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
                        }`}
                      >
                        <span>{criterion.icon}</span>
                        <span>{criterion.label}</span>
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] ${
                          isActive ? 'bg-white/20 text-inherit' : 'bg-[#D1D5DB] text-[#374151]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Grouped Errors */}
                <div className="space-y-6">
                  {writingCriteria.filter(c => c.id !== 'all').map((criterion) => {
                    const criteriaErrors = errorExamples.filter(e => e.criteria === criterion.id);
                    if (criteriaErrors.length === 0) return null;
                    if (activeErrorFilter !== 'all' && activeErrorFilter !== criterion.id) return null;

                    return (
                      <div key={criterion.id} className="rounded-[16px] border border-[#EEEEEE] overflow-hidden">
                        {/* Criteria Header */}
                        <div className={`px-6 py-4 flex items-center justify-between ${
                          criterion.id === 'task-achievement' ? 'bg-[#EFF6FF] border-b-2 border-[#1E40AF]' :
                          criterion.id === 'coherence-cohesion' ? 'bg-[#EEF2FF] border-b-2 border-[#3730A3]' :
                          criterion.id === 'lexical-resource' ? 'bg-[#FFFBEB] border-b-2 border-[#92400E]' :
                          'bg-[#FEF2F2] border-b-2 border-[#991B1B]'
                        }`}>
                          <div className="flex items-center gap-3">
                            <span className="text-[20px]">{criterion.icon}</span>
                            <h4 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] text-[#1B2A4A]">
                              {criterion.label}
                            </h4>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[12px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] ${criterion.color}`}>
                            {criteriaErrors.length} {criteriaErrors.length === 1 ? 'خطأ' : 'أخطاء'}
                          </span>
                        </div>

                        {/* Error Cards */}
                        <div className="p-4 space-y-3 bg-white">
                          {criteriaErrors.map((error, idx) => (
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
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">
                                      جملتك:
                                    </p>
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#FEE2E2] px-3 py-2 rounded-[8px]">
                                      {error.original}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                                  <div className="flex-1">
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">
                                      التصحيح:
                                    </p>
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151] bg-[#D1FAE5] px-3 py-2 rounded-[8px]">
                                      {error.corrected}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3">
                                  <BookOpen className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                                  <div className="flex-1">
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#6B7280] mb-1">
                                      الشرح:
                                    </p>
                                    <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[14px] text-[#374151]">
                                      {error.explanation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>

      </div>
    </div>
  );
}