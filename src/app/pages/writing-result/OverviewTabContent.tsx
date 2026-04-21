import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Target } from 'lucide-react';
import { attemptData, improvementsByPart } from './data';

export function OverviewTabContent() {
  return (
    <>
      {/* Progress Chart - Full Width */}
      <div className="mb-8">
        <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#EEEEEE] flex flex-col">
          <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A] mb-4">
            تطور الدرجات
          </h3>
          <div className="h-[200px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attemptData} margin={{ top: 24, right: 16, left: 0, bottom: 10 }}>
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

      {/* Time Management Section */}
      <div className="mt-6 sm:mt-8 bg-white rounded-[20px] border border-[#EEEEEE] p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[22px]">⏱️</span>
          <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#1B2A4A]">
            إدارة الوقت في الاختبار
          </h3>
        </div>

        {/* Time Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <div className="flex-1 h-[36px] bg-[#dbeafe] rounded-r-[8px] flex items-center justify-center relative overflow-hidden" style={{ flex: '20' }}>
              <div className="absolute inset-0 bg-[#3b82f6] opacity-20" />
              <span className="relative font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[10px] sm:text-[12px] text-[#1d4ed8] text-center px-1 leading-tight">
                <span className="hidden sm:inline">المهمة 1 · </span>20د
              </span>
            </div>
            <div className="flex-1 h-[36px] bg-[#fef3c7] flex items-center justify-center relative overflow-hidden" style={{ flex: '35' }}>
              <div className="absolute inset-0 bg-[#f59e0b] opacity-20" />
              <span className="relative font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[10px] sm:text-[12px] text-[#92400e] text-center px-1 leading-tight">
                <span className="hidden sm:inline">المهمة 2 · </span>35د
              </span>
            </div>
            <div className="h-[36px] bg-[#f3f4f6] rounded-l-[8px] flex items-center justify-center relative overflow-hidden" style={{ flex: '5' }}>
              <div className="absolute inset-0 bg-[#9ca3af] opacity-20" />
              <span className="relative font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[10px] text-[#6b7280]">5د</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-0 text-[11px] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[#9ca3af]">
            <span>المهمة 1: 20 دقيقة · المهمة 2: 35 دقيقة · مراجعة: 5 دقائق</span>
            <span className="hidden sm:inline">المجموع: 60 دقيقة</span>
          </div>
        </div>

        {/* What went well / What to improve */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {/* What went well */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[12px] p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-[12px]">✓</span>
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#15803d]">ما اشتغل معاك</p>
            </div>
            <ul className="space-y-2">
              {[
                'أكملت المهمتين قبل انتهاء الوقت',
                'وصلت للحد الأدنى من الكلمات في المهمة 1',
                'لم تترك أي جزء فارغاً',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#22c55e] text-[13px] mt-0.5">•</span>
                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#166534]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to improve */}
          <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-[12px] p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center text-white text-[12px]">!</span>
              <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#c2410c]">ما تحتاج تحسنه</p>
            </div>
            <ul className="space-y-2">
              {[
                'وقت المراجعة كان قصير جداً (أقل من 5 دقائق)',
                'المهمة 2 احتاجت وقت أكثر من المخصص لها',
                'لم تُخصص وقت للتخطيط قبل الكتابة',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#f97316] text-[13px] mt-0.5">•</span>
                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[13px] text-[#9a3412]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-[12px] p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[18px]">💡</span>
            <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[14px] text-[#1d4ed8]">توصيات للمرة القادمة</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { time: '20 دقيقة', label: 'المهمة 1', tip: 'اكتب 150–180 كلمة واترك وقتاً للمراجعة', color: '#3b82f6' },
              { time: '40 دقيقة', label: 'المهمة 2', tip: 'خصص 5 دقائق للتخطيط و30 للكتابة و5 للمراجعة', color: '#8b5cf6' },
              { time: '5 دقائق', label: 'المراجعة', tip: 'راجع الأخطاء الإملائية والنحوية في كل مهمة', color: '#059669' },
            ].map((rec, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-[48px] h-[48px] rounded-[10px] flex flex-col items-center justify-center" style={{ background: `${rec.color}18`, border: `1px solid ${rec.color}40` }}>
                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[11px] leading-none" style={{ color: rec.color }}>{rec.time}</span>
                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[9px] mt-0.5 text-[#6b7280]">{rec.label}</span>
                </div>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] text-[#374151] leading-relaxed pt-0.5">{rec.tip}</p>
              </div>
            ))}
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
              <div key={idx} className="flex items-start gap-3 p-3 sm:p-5 bg-[#F9FAFB] rounded-[12px] border border-[#EEEEEE]">
                {/* Number */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1B2A4A] text-white text-[13px] sm:text-[14px] font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                    <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] sm:text-[14px] text-[#1B2A4A]">
                      {tip.title}
                    </p>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] ${
                      tip.priority === 'عالية' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'
                    }`}>
                      {tip.priority === 'عالية' ? 'أولوية عالية' : 'أولوية متوسطة'}
                    </span>
                  </div>
                  <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6B7280] mb-1.5 sm:mb-2">
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
                <div className="flex flex-col items-center flex-shrink-0 min-w-[40px]">
                  <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#4CAF50]">
                    {tip.scoreImpact}
                  </span>
                  <span className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[9px] sm:text-[10px] text-[#6B7280] text-center leading-tight">
                    درجة متوقعة
                  </span>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </>
  );
}
