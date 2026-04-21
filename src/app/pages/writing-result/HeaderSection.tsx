import { UserState } from './types';
import { imgLogo, imgArrowLeftOutline, imgCaretDownSolid, imgTrophy } from './data';

export function HeaderSection({ userState }: { userState: UserState }) {
  return (
    <div className="bg-white border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          {/* Logo - first in DOM = rightmost in RTL */}
          <div className="h-[32px] w-[90px] sm:h-[42px] sm:w-[118px] relative shrink-0 mix-blend-darken">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="GoIELTS" className="absolute left-0 w-full max-w-none" style={{ height: '268.21%', top: '-35.49%' }} src={imgLogo} />
            </div>
          </div>

          {/* Share Link + Copy - second in DOM = leftmost in RTL */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative bg-[#f2f2f2] h-[36px] rounded-[7px] w-[160px] sm:w-[258px] overflow-hidden">
              <span className="absolute right-[12px] sm:right-[19px] left-[54px] sm:left-[62px] top-1/2 -translate-y-1/2 font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[14px] text-[#6b7280] overflow-hidden text-ellipsis whitespace-nowrap block">
                app.goielts.ai/score/1063
              </span>
              <div className="absolute left-0 top-0 h-[36px] w-[50px] sm:w-[57px] bg-[#012269] rounded-[7px] flex items-center justify-center shadow-sm z-10">
                <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[13px] sm:text-[14px] text-white">نسخ</span>
              </div>
            </div>
            <span className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[20px] text-[#0a0a0a] whitespace-nowrap hidden md:block">
              شارك درجتك
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6 flex-wrap">
          {/* Success Message — first in DOM = rightmost in RTL */}
          <div className="flex items-center gap-2">
            <h1 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[16px] sm:text-[20px] lg:text-[28px] text-[#012269] leading-tight">
              مبروك! خلّصت الاختبار بنجاح
            </h1>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full"><circle cx="18" cy="18" r="18" fill="#4CAF50"/><path d="M10 18l6 6 10-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          {/* Nav Buttons — last in DOM = leftmost in RTL */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="flex items-center gap-1 bg-[#012269] text-white px-2 sm:px-3 py-2 rounded-[6px] hover:bg-[#011a50] transition-colors h-[36px] sm:h-[40px]">
              <img alt="" className="w-4 h-4 sm:w-6 sm:h-6" src={imgArrowLeftOutline} />
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] sm:text-[14px]">رجوع</span>
            </button>
            <button className="hidden sm:block bg-white border border-[#d1d5db] px-4 py-2 rounded-[6px] hover:bg-gray-50 transition-colors opacity-70 h-[40px] whitespace-nowrap">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#374151]">إعادة الاختبار</span>
            </button>
            <button className="hidden sm:block bg-white border border-[#d1d5db] px-4 py-2 rounded-[6px] hover:bg-gray-50 transition-colors opacity-70 h-[40px] whitespace-nowrap">
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#374151]">الاختبارات</span>
            </button>
            <button className="flex items-center gap-1 bg-white border border-[#d1d5db] px-2 sm:px-3 py-2 rounded-[6px] hover:bg-gray-50 transition-colors h-[36px] sm:h-[40px]">
              <img alt="" className="w-4 h-4 sm:w-6 sm:h-6" src={imgCaretDownSolid} />
              <span className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[13px] sm:text-[14px] text-[#374151]">الكتابة</span>
            </button>
          </div>
        </div>


        {/* Test Info Grid */}
        <div className="bg-[#F9FAFB] rounded-[16px] border border-[#EEEEEE] p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-6 text-center">
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">اسم المتدرب</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A] break-words">أحمد علي</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">اسم الاختبار</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] sm:text-[14px] text-[#1B2A4A] leading-tight break-words">Cambridge IELTS Practice Test 17</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">نمط الاختبار</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A]">التدريب</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">المهارة</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A]">الكتابة</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">نوع الاختبار</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A]">أكاديمي</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">تاريخ الاختبار</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[11px] sm:text-[14px] text-[#1B2A4A] leading-tight" dir="ltr">12/3/2025 - pm 4:45</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">الوقت المستغرق</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A]">60 دقيقة</p>
            </div>
            <div className="min-w-0">
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#6B7280] mb-1 sm:mb-2">رقم المحاولة</p>
              <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] text-[12px] sm:text-[14px] text-[#1B2A4A]">3</p>
            </div>
          </div>
        </div>

        {/* Progress to Goal */}
        {userState === 'no-goal' ? (
          <div className="bg-white rounded-[8px] p-3 sm:p-4 border border-dashed border-[#C90F2E] flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 shrink-0 bg-[#FEF3C7] rounded-full flex items-center justify-center text-xl">🎯</div>
            <div className="flex-1 text-center sm:text-right">
              <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] sm:text-[18px] text-[#023196] mb-1">
                لم تحدد هدفًا بعد!
              </h3>
              <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[14px] text-[#46484c]">
                حدد درجتك المستهدفة لتتبع تقدمك ومعرفة كم تبقى للوصول إلى هدفك.
              </p>
            </div>
            <button className="bg-[#012269] text-white px-4 py-2 rounded-[6px] font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[13px] sm:text-[14px] hover:bg-[#011a50] transition-colors whitespace-nowrap shrink-0">
              حدد هدفك الآن
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-[8px] p-3 sm:p-4 shadow-[0px_2px_0px_0px_#c90f2e]">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Trophy Icon — first in DOM = rightmost in RTL */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <img alt="" className="w-full h-full" src={imgTrophy} />
              </div>
              <div className="flex-1 min-w-0 text-right">
                <h3 className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] text-[15px] sm:text-[18px] lg:text-[20px] text-[#023196] mb-1 leading-snug">
                  أداء رهيب! 🔥 باقي 4.0 بس وتوصل لهدفك!
                </h3>
                <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] text-[12px] sm:text-[14px] lg:text-[16px] text-[#46484c] leading-snug">
                  أنت قريب بـ 4.0 درجة فقط من الدرجة 8! جرب باقة التدريب السريع عشان ترفع درجتك
                </p>
              </div>
              {/* Button — last in DOM = leftmost in RTL */}
              <button className="bg-[#c90f2e] text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-[6px] font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] text-[12px] sm:text-[14px] hover:bg-[#a80d27] transition-colors whitespace-nowrap shrink-0">
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
        )}
      </div>
    </div>
  );
}
