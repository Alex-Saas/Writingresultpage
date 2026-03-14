import svgPaths from "./svg-xyt385zwky";
import imgGoIeltsDashboard from "figma:asset/0080ff4893f820231f61c6e5ff3cf8f38df41a27.png";
import imgGoIeltsAiLogo from "figma:asset/6281e8248848f2ef48acbb6a3612de25b9b987fc.png";
import imgQrCode from "figma:asset/b6c01100a5df6c86811e14a7569eaa290b716f53.png";
import { imgGroup } from "./svg-vn7pa";

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center leading-[0] left-[176px] not-italic text-[#012069] top-[135px] w-[1088px]">
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center relative shrink-0 text-[56px] text-right w-full">
        <p className="leading-[78.4px]" dir="auto">
          خليك ذيب… وختّم درجة أحلامك من أول محاولة
        </p>
      </div>
      <div className="flex flex-col font-['Tajawal:Regular',sans-serif] justify-center relative shrink-0 text-[32px] text-center w-full">
        <p className="leading-[44.8px]" dir="auto">
          اختر خطتك وختّمها الحين
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Tajawal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#012069] text-[24px] text-center w-full">
        <p className="leading-[33.6px] whitespace-pre-wrap" dir="auto">
          اختر الخطة اللي تناسب وقتك
          <br aria-hidden="true" />
          كل الخطط المدفوعة تفتح لك مزايا المنصة الكاملة.
          <br aria-hidden="true" />
          {` الفرق فقط في مدة الاشتراك.`}
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[295px] w-[1088px]">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#012069] text-[48px] text-center w-full">
        <p className="leading-[67.2px]" dir="auto">
          الباقات
        </p>
      </div>
      <Frame18 />
    </div>
  );
}

function Group86() {
  return (
    <div className="h-[19.443px] relative shrink-0 w-[13.999px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9991 19.4432">
        <g id="Group 2147223741">
          <path clipRule="evenodd" d={svgPaths.p1e3e8480} fill="var(--fill-0, #FF8C00)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fff2cb] content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[999px] shrink-0 size-[40px]">
      <Group86 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fff2cb] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-bl-[24px] rounded-tl-[24px] shrink-0 w-[124px]" data-name="Button">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#ce7100] text-[14px] whitespace-nowrap" dir="auto">
        جرّب قبل لا تدفع
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Frame16 />
      <Button />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[33.6px] relative shrink-0 text-[#1a1d2d] text-[24px]" dir="auto">
        خطة مجانية بالكامل
      </p>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[#4a4a4a] text-[12px]" dir="auto">
        ودّك تتأكد إن GoIELTS تناسبك قبل الاشتراك
      </p>
    </div>
  );
}

function Component48Px() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="48 PX">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="48 PX">
          <path d={svgPaths.p8b3d300} fill="var(--fill-0, #012169)" id="SAR" />
        </g>
      </svg>
    </div>
  );
}

function Component99Usd() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="99usd">
      <Component48Px />
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#012169] text-[48px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Component99Usd />
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap" dir="auto">
        جرّب قبل لا تدفع ولا ريال
      </p>
    </div>
  );
}

function Price() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] py-[4px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#fff2cb] content-stretch flex flex-col gap-[6px] h-[112px] items-center justify-center p-[16px] relative rounded-[12px] shrink-0 w-[376px]">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#012169] text-[20px] text-center w-full" dir="auto">
        هذي تجربة مصغّرة… والباقي يتفتح لك مع الاشتراك
      </p>
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        اختبار كامبريدج كامل واحد (محاولتين فقط)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded />
      <Frame20 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        3 فرص تدريب لكل مهارة
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded1 />
      <Frame21 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تقييم ذكي بنسخة محدودة
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded2 />
      <Frame22 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        لمحة سريعة عن التحليل والتقارير
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded3 />
      <Frame23 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Content">
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <div className="bg-white h-[224px] shrink-0 w-[320px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#012269] relative rounded-[6px] shrink-0 w-full" data-name="→ Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[19.6px]" dir="auto">
              اعرف مستواك الحين
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_-0.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 1">
              <path d="M0.5 0.5H376.5" id="Line 1" stroke="var(--stroke-0, #1A1D2D)" strokeLinecap="round" strokeOpacity="0.08" />
            </svg>
          </div>
        </div>
        <Content4 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function PlanCards() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[922px] items-center justify-center overflow-clip py-[40px] relative rounded-[16px] shrink-0 w-[424px]" data-name="Plan Cards">
      <Content />
      <Frame12 />
      <Price />
      <Frame17 />
      <Content3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[999px] shrink-0 size-[40px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="book-mark-solid">
        <div className="absolute inset-[14.58%_16.67%_12.5%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.5">
            <path clipRule="evenodd" d={svgPaths.p2e919900} fill="var(--fill-0, #012169)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-bl-[24px] rounded-tl-[24px] shrink-0 w-[124px]" data-name="Button">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#012269] text-[14px] whitespace-nowrap" dir="auto">
        الخيار الأذكى
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Frame13 />
      <Button1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[33.6px] relative shrink-0 text-[#1a1d2d] text-[24px]" dir="auto">
        خطة النجاح المتكامل
      </p>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[#4a4a4a] text-[12px]" dir="auto">
        تبي تتدرّب بهدوء وتبني مستواك بثبات
      </p>
    </div>
  );
}

function Component48Px1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="48 PX">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="48 PX">
          <path d={svgPaths.p8b3d300} fill="var(--fill-0, #012169)" id="SAR" />
        </g>
      </svg>
    </div>
  );
}

function Component99Usd1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="99usd">
      <Component48Px1 />
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#012169] text-[48px] text-center whitespace-nowrap">499</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[normal] line-through not-italic relative shrink-0 text-[#c8102e] text-[28px] text-center whitespace-nowrap">849</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Content">
      <Component99Usd1 />
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap" dir="auto">
        مدة الاشتراك 3 شهور
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] py-[4px] relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#e6f1ff] content-stretch flex flex-col gap-[6px] items-center not-italic p-[16px] relative rounded-[12px] shrink-0 text-center w-[376px]">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#012169] text-[20px] w-full" dir="rtl">
        وفّر 350 ريال - بخصم 41%
      </p>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[22.4px] relative shrink-0 text-[#4a4a4a] text-[16px] w-full" dir="rtl">
        تدفع 499 ريال (بدل 849)
      </p>
      <p className="font-['Tajawal:Light',sans-serif] leading-[16.8px] relative shrink-0 text-[#4a4a4a] text-[12px] w-full" dir="rtl">
        ≈ 5.5 ريال / اليوم
      </p>
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        نفس شاشة الاختبار الحقيقي 100%
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded4 />
      <Frame26 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        اختبارات كامبريدج الرسمية (100+)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded5 />
      <Frame27 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تقييم ذكي وفوري (10 د)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded6 />
      <Frame28 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تعرف وش تحسّن بالضبط
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded7 />
      <Frame29 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        نتوقّع درجتك قبل يوم الجد
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded8 />
      <Frame30 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        أنماط (امتحان / تدريب)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded9 />
      <Frame31 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تدرّب بلا حدود
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded10 />
      <Frame32 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        شوف تقدمك بوضوح
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded11 />
      <Frame33 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تدريب كتابة ذكي
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded12 />
      <Frame34 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-pre" dir="auto">{`محادثة  بدون انتظار`}</p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded13 />
      <Frame35 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Content">
      <Content14 />
      <Content15 />
      <Content16 />
      <Content17 />
      <Content18 />
      <Content19 />
      <Content20 />
      <Content21 />
      <Content22 />
      <Content23 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#012269] relative rounded-[6px] shrink-0 w-full" data-name="→ Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[19.6px]" dir="auto">
              ابدأ تطويرك بثقة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_-0.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 1">
              <path d="M0.5 0.5H376.5" id="Line 1" stroke="var(--stroke-0, #1A1D2D)" strokeLinecap="round" strokeOpacity="0.08" />
            </svg>
          </div>
        </div>
        <Content13 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#e2fbff] content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[999px] shrink-0 size-[40px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mynaui:rocket-solid">
        <div className="absolute inset-[14.58%_14.58%_14.56%_14.59%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9995 17.0056">
            <path d={svgPaths.p328ed600} fill="var(--fill-0, #17A2B8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e2fbff] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-bl-[24px] rounded-tl-[24px] shrink-0 w-[124px]" data-name="Button">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#008095] text-[14px] whitespace-nowrap" dir="auto">
        الأكثر اختيارا
      </p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Frame36 />
      <Button2 />
    </div>
  );
}

function Content24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] relative w-full">
          <Content25 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[33.6px] relative shrink-0 text-[#1a1d2d] text-[24px]" dir="auto">
        خطة التدريب المكثف
      </p>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[16.8px] relative shrink-0 text-[#4a4a4a] text-[12px]" dir="auto">
        اختبارك قريب وتبي وتبي تجهز بأسرع وقت
      </p>
    </div>
  );
}

function Component48Px2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="48 PX">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="48 PX">
          <path d={svgPaths.p8b3d300} fill="var(--fill-0, #012169)" id="SAR" />
        </g>
      </svg>
    </div>
  );
}

function Component99Usd2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="99usd">
      <Component48Px2 />
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#012169] text-[48px] text-center whitespace-nowrap">399</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[normal] line-through not-italic relative shrink-0 text-[#c8102e] text-[28px] text-center whitespace-nowrap">599</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Component99Usd2 />
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap" dir="auto">
        مدة الاشتراك شهر
      </p>
    </div>
  );
}

function Price2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] py-[4px] relative w-full">
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#e2fbff] content-stretch flex flex-col gap-[6px] items-center not-italic p-[16px] relative rounded-[12px] shrink-0 text-center w-[376px]">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#012169] text-[20px] w-full" dir="rtl">
        وفّر 200 ريال - بخصم 33%
      </p>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[22.4px] relative shrink-0 text-[#4a4a4a] text-[16px] w-full whitespace-pre-wrap" dir="rtl">{`تدفع  399 ريال (بدل 599)`}</p>
      <p className="font-['Tajawal:Light',sans-serif] leading-[16.8px] relative shrink-0 text-[#4a4a4a] text-[12px] w-full" dir="rtl">
        ≈ 13 ريال / اليوم
      </p>
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        نفس شاشة الاختبار الحقيقي 100%
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded14 />
      <Frame39 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        اختبارات كامبريدج الرسمية (100+)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded15 />
      <Frame40 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تقييم ذكي وفوري (10 د)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded16 />
      <Frame41 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تعرف وش تحسّن بالضبط
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded17 />
      <Frame42 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        نتوقّع درجتك قبل يوم الجد
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded18 />
      <Frame43 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        أنماط (امتحان / تدريب)
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded19 />
      <Frame44 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تدرّب بلا حدود
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded20 />
      <Frame45 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        شوف تقدمك بوضوح
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded21 />
      <Frame46 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-nowrap" dir="auto">
        تدريب كتابة ذكي
      </p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded22 />
      <Frame47 />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:info-outline-rounded">
          <path d={svgPaths.pc6da480} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[#1a1d2d] text-[14px] whitespace-pre" dir="auto">{`محادثة  بدون انتظار`}</p>
      <div className="relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[29.17%_20.83%]" data-name="stroke">
          <div className="absolute inset-[-7.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
              <path d={svgPaths.p1bbfe798} id="stroke" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <MaterialSymbolsInfoOutlineRounded23 />
      <Frame48 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Content">
      <Content29 />
      <Content30 />
      <Content31 />
      <Content32 />
      <Content33 />
      <Content34 />
      <Content35 />
      <Content36 />
      <Content37 />
      <Content38 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#012269] relative rounded-[6px] shrink-0 w-full" data-name="→ Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[19.6px]" dir="auto">
              ابدأ تدريبك الحين
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_-0.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 1">
              <path d="M0.5 0.5H376.5" id="Line 1" stroke="var(--stroke-0, #1A1D2D)" strokeLinecap="round" strokeOpacity="0.08" />
            </svg>
          </div>
        </div>
        <Content28 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
          <Buttons2 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[60px] top-[512px] w-[1320px]">
      <PlanCards />
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip py-[40px] relative rounded-[16px] shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] shrink-0 w-[424px]" data-name="Plan Cards">
        <Content9 />
        <Frame24 />
        <Price1 />
        <Frame25 />
        <Content12 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip py-[40px] relative rounded-[16px] shrink-0 w-[424px]" data-name="Plan Cards">
        <Content24 />
        <Frame37 />
        <Price2 />
        <Frame38 />
        <Content27 />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#012069] top-[1482px] w-[373px]">
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center relative shrink-0 text-[32px] text-right whitespace-nowrap">
        <p className="leading-[44.8px]" dir="rtl">
          كفو لا تتردد
        </p>
      </div>
      <div className="flex flex-col font-['Tajawal:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[24px] text-center w-[min-content]">
        <p className="leading-[33.6px]" dir="rtl">
          اختر خطتك… وختّم درجة أحلامك.
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[4043px] left-0 overflow-clip top-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(168.739deg, rgba(219, 224, 255, 0.3) 8.5641%, rgba(254, 190, 142, 0.3) 171.12%)" }}>
      <Frame15 />
      <Frame19 />
      <Frame14 />
      <Frame49 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#c90f2e] relative rounded-[6px] shrink-0 w-full" data-name="→ Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[19.6px]" dir="auto">
              أنشيء حساب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[97px]" data-name="Button">
      <Buttons3 />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="→ Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[19.6px]" dir="auto">
              تسجيل دخول
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Button">
      <Buttons4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.74%_12.06%_12.05%_12.26%]" data-name="Group">
      <div className="absolute inset-[-8.31%_-11.68%_-11.75%_-8.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5225 14.4479">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p2abee2f2} id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="square" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TdesignSearch() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="tdesign:search">
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white h-[40px] left-[212px] rounded-[6px] top-[0.5px] w-[219px]" data-name="Search">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] size-full">
        <TdesignSearch />
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[12px] whitespace-nowrap">
          <p className="leading-[16.8px]" dir="auto">
            دوّر في GoIELTS...
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[431px]">
      <Button3 />
      <Button4 />
      <Search />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            تواصل معنا
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            المدونة
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            اختبار آيلتس تجريبي
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            الباقات
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            الميزات
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            رحلتك
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="Menu Item">
        <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1a1d2d] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.2]" dir="auto">
            الرئيسية
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[152.785px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.785 40">
        <g id="Frame 1171275277">
          <line id="Line 3" stroke="var(--stroke-0, #F2F2F2)" x1="0.500002" x2="0.5" y1="2.18558e-08" y2="40" />
          <g id="Group 309">
            <g id="Group">
              <path d={svgPaths.p38c1c00} fill="var(--fill-0, #C8102E)" id="Vector" />
              <path d={svgPaths.p1230f300} fill="url(#paint0_linear_9_44320)" id="Vector_2" />
              <path d={svgPaths.p2ee19a00} fill="url(#paint1_linear_9_44320)" id="Vector_3" />
              <path d={svgPaths.p29bb9700} fill="var(--fill-0, #C8102E)" id="Vector_4" />
            </g>
            <path d={svgPaths.p244a5980} fill="var(--fill-0, #012169)" id="Vector_5" />
            <path d={svgPaths.pc3bd00} fill="var(--fill-0, #012169)" id="Vector_6" />
            <path d={svgPaths.p2767a800} fill="var(--fill-0, #012169)" id="Vector_7" />
            <path d={svgPaths.p1ac2ec00} fill="var(--fill-0, #012169)" id="Vector_8" />
            <path d={svgPaths.p2a87ec00} fill="var(--fill-0, #012169)" id="Vector_9" />
            <path d={svgPaths.p21f71a00} fill="var(--fill-0, #C8102E)" id="Vector_10" />
            <path d={svgPaths.p323a6e00} fill="var(--fill-0, #C8102E)" id="Vector_11" />
            <path d={svgPaths.p27da6680} fill="var(--fill-0, #C8102E)" id="Vector_12" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_44320" x1="29.1962" x2="38.5911" y1="22.1685" y2="22.1685">
            <stop stopColor="#C8102E" />
            <stop offset="0.15" stopColor="#C40F2D" />
            <stop offset="0.3" stopColor="#B80F2B" />
            <stop offset="0.44" stopColor="#A50E29" />
            <stop offset="0.54" stopColor="#930D27" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_9_44320" x1="45.2015" x2="31.676" y1="14.5466" y2="16.0661">
            <stop stopColor="#C8102E" />
            <stop offset="0.21" stopColor="#AE0E2A" />
            <stop offset="0.41" stopColor="#930D27" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[833px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function HeaderNavigationContiener() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header navigation contiener">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 px-[60px] py-[12px] top-0 w-[1440px]" data-name="Header">
      <HeaderNavigationContiener />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Tajawal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[24px] text-center w-full">
        <p dir="auto">
          <span className="leading-[33.6px]">{`كانوا يقولون زيّك: `}</span>
          <span className="font-['Tajawal:Bold',sans-serif] leading-[33.6px] not-italic">
            {`"أنا محتار… أنا مو جاهز؟"`}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[33.6px]">والحين يطوّرون مستواهم بثقة</span>
        </p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[1080px]">
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#012069] text-[48px] text-center w-full">
        <p className="leading-[67.2px]" dir="auto">
          أكثر من 2,500 طالب سعودي يثقون بـ GoIELTS
        </p>
      </div>
      <Frame51 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2891 10.425">
        <g id="Group">
          <path d={svgPaths.p32e32600} fill="url(#paint0_linear_9_46495)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46495" x1="54.1131" x2="-18.136" y1="131.134" y2="-49.8742">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 141">
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="url(#paint0_linear_9_46475)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46475" x1="54.1131" x2="-18.136" y1="131.134" y2="-49.8742">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3b091900} fill="url(#paint0_linear_9_46469)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46469" x1="50.102" x2="-22.1471" y1="120.843" y2="-60.1655">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 144">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[74.33%] mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid2 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="url(#paint0_linear_9_46467)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46467" x1="50.102" x2="-22.1471" y1="120.843" y2="-60.1655">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2891 10.4249">
        <g id="Group">
          <path d={svgPaths.paa0fd00} fill="url(#paint0_linear_9_46554)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46554" x1="45.3145" x2="-26.9334" y1="108.474" y2="-72.5323">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 156">
      <Group7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid7 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.paa0fd00} fill="url(#paint0_linear_9_46465)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46465" x1="45.3145" x2="-26.9334" y1="108.474" y2="-72.5323">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
        <g id="Group">
          <path d={svgPaths.pd7de00} fill="url(#paint0_linear_9_46415)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46415" x1="41.3031" x2="-30.9447" y1="98.1826" y2="-82.8242">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 159">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[74.33%] mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid9 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.pd7de00} fill="url(#paint0_linear_9_46443)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46443" x1="41.3031" x2="-30.9447" y1="98.1826" y2="-82.8242">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2891 10.425">
        <g id="Group">
          <path d={svgPaths.p33c2ea00} fill="url(#paint0_linear_9_46462)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46462" x1="36.5155" x2="-35.7336" y1="85.8705" y2="-95.1375">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 171">
      <Group11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid14 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33c2ea00} fill="url(#paint0_linear_9_46452)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46452" x1="36.5155" x2="-35.7336" y1="85.8705" y2="-95.1375">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p2ea7c800} fill="url(#paint0_linear_9_46492)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46492" x1="32.5043" x2="-39.7447" y1="75.5789" y2="-105.429">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 174">
      <Group13 />
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[74.33%] mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid16 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2ea7c800} fill="url(#paint0_linear_9_46447)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46447" x1="32.5043" x2="-39.7447" y1="75.5789" y2="-105.429">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2891 10.425">
        <g id="Group">
          <path d={svgPaths.p32e32600} fill="url(#paint0_linear_9_46437)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46437" x1="27.7167" x2="-44.5324" y1="63.2115" y2="-117.796">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 186">
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid21 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="url(#paint0_linear_9_46418)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46418" x1="27.7167" x2="-44.5324" y1="63.2115" y2="-117.796">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3b091900} fill="url(#paint0_linear_9_46387)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46387" x1="23.7055" x2="-48.5436" y1="52.9201" y2="-128.088">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 189">
      <Group17 />
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[74.33%] mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid23 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="url(#paint0_linear_9_46514)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46514" x1="23.7055" x2="-48.5436" y1="52.9201" y2="-128.088">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2891 10.425">
        <g id="Group">
          <path d={svgPaths.p33ef1900} fill="url(#paint0_linear_9_46425)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46425" x1="18.9179" x2="-53.3311" y1="40.6068" y2="-140.401">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid28() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 201">
      <Group19 />
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid28 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33ef1900} fill="url(#paint0_linear_9_46516)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46516" x1="18.9179" x2="-53.3311" y1="40.6068" y2="-140.401">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p2e7c5b00} fill="url(#paint0_linear_9_46412)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46412" x1="14.9067" x2="-57.3423" y1="30.3153" y2="-150.693">
            <stop />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid30() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 204">
      <Group21 />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[74.33%] mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid30 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2e7c5b00} fill="url(#paint0_linear_9_46485)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_46485" x1="14.9067" x2="-57.3423" y1="30.3153" y2="-150.693">
              <stop stopColor="#97C3F9" />
              <stop offset="1" stopColor="#93C1F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[69.95%] opacity-60 place-items-start relative row-1" data-name="Group">
      <Group2 />
      <Group4 />
      <Group6 />
      <Group8 />
      <Group10 />
      <Group12 />
      <Group14 />
      <Group16 />
      <Group18 />
      <Group20 />
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 141">
      <Group24 />
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid1 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 144">
      <Group26 />
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.01%] mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid3 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p31374a80} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 147">
      <Group28 />
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.03%] mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid4 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3440400} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 150">
      <Group30 />
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.04%] mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid5 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3440400} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p3f489300} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 153">
      <Group32 />
    </div>
  );
}

function Group31() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.05%] mt-0 place-items-start relative row-1" data-name="Group">
      <Svgid6 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.4249">
        <g id="Group">
          <path d={svgPaths.paa0fd00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 156">
      <Group34 />
    </div>
  );
}

function Group33() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid8 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.paa0fd00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
        <g id="Group">
          <path d={svgPaths.pd7de00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 159">
      <Group36 />
    </div>
  );
}

function Group35() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.01%] mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid10 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.pd7de00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.4249">
        <g id="Group">
          <path d={svgPaths.p1c06ad00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 162">
      <Group38 />
    </div>
  );
}

function Group37() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.03%] mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid11 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.pd7de00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
        <g id="Group">
          <path d={svgPaths.p9e1c300} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 165">
      <Group40 />
    </div>
  );
}

function Group39() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.04%] mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid12 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.p9e1c300} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.4249">
        <g id="Group">
          <path d={svgPaths.p18c12900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 168">
      <Group42 />
    </div>
  );
}

function Group41() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.05%] mt-[22.76%] place-items-start relative row-1" data-name="Group">
      <Svgid13 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.4249">
          <path d={svgPaths.paa0fd00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p33c2ea00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 171">
      <Group44 />
    </div>
  );
}

function Group43() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid15 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33c2ea00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p2ea7c800} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 174">
      <Group46 />
    </div>
  );
}

function Group45() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.01%] mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid17 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2ea7c800} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p102b0b00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 177">
      <Group48 />
    </div>
  );
}

function Group47() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.03%] mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid18 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2ea7c800} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p30b23780} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 180">
      <Group50 />
    </div>
  );
}

function Group49() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.04%] mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid19 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p30b23780} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p297f2000} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 183">
      <Group52 />
    </div>
  );
}

function Group51() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.05%] mt-[45.47%] place-items-start relative row-1" data-name="Group">
      <Svgid20 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33c2ea00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 186">
      <Group54 />
    </div>
  );
}

function Group53() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid22 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid24() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 189">
      <Group56 />
    </div>
  );
}

function Group55() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.01%] mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid24 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group58() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p31374a80} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 192">
      <Group58 />
    </div>
  );
}

function Group57() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.03%] mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid25 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3b091900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group60() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3440400} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid26() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 195">
      <Group60 />
    </div>
  );
}

function Group59() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.04%] mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid26 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3440400} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p3f489300} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid27() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 198">
      <Group62 />
    </div>
  );
}

function Group61() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.05%] mt-[68.22%] place-items-start relative row-1" data-name="Group">
      <Svgid27 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p32e32600} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p33ef1900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid29() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 201">
      <Group64 />
    </div>
  );
}

function Group63() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid29 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33ef1900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group66() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p2e7c5b00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid31() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 204">
      <Group66 />
    </div>
  );
}

function Group65() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.01%] mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid31 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2e7c5b00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group68() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p17adfe00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid32() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 207">
      <Group68 />
    </div>
  );
}

function Group67() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.03%] mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid32 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p2e7c5b00} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group70() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
        <g id="Group">
          <path d={svgPaths.p3eb91900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid33() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 210">
      <Group70 />
    </div>
  );
}

function Group69() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.04%] mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid33 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p3eb91900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group72() {
  return (
    <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.289 10.425">
        <g id="Group">
          <path d={svgPaths.p37542900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svgid34() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="SVGID 213">
      <Group72 />
    </div>
  );
}

function Group71() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.05%] mt-[90.93%] place-items-start relative row-1" data-name="Group">
      <Svgid34 />
      <div className="col-1 h-[10.425px] ml-0 mt-0 relative row-1 w-[10.289px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2889 10.425">
          <path d={svgPaths.p33ef1900} fill="var(--fill-0, #97C3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[89.21%] mt-0 opacity-40 place-items-start relative row-1" data-name="Group">
      <Group23 />
      <Group25 />
      <Group27 />
      <Group29 />
      <Group31 />
      <Group33 />
      <Group35 />
      <Group37 />
      <Group39 />
      <Group41 />
      <Group43 />
      <Group45 />
      <Group47 />
      <Group49 />
      <Group51 />
      <Group53 />
      <Group55 />
      <Group57 />
      <Group59 />
      <Group61 />
      <Group63 />
      <Group65 />
      <Group67 />
      <Group69 />
      <Group71 />
    </div>
  );
}

function TestmonialTitle() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Testmonial Title">
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] font-['Tajawal:Bold',sans-serif] relative shrink-0 text-[#1a1d2d] text-[0px] text-[44px]" dir="auto">
        <span className="leading-[normal]">قصص نجاح بدأت مع GoIELTS.</span>
        <span className="leading-[normal] lowercase">a</span>
        <span className="leading-[normal]">i</span>
      </p>
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] font-['Tajawal:Medium',sans-serif] relative shrink-0 text-[#4a4a4a] text-[20px]" dir="auto">
        <span className="leading-[normal]">شوف كيف GoILETS.</span>
        <span className="leading-[normal] lowercase">ai</span>
        <span className="leading-[normal]">{` يساعد آلاف الأشخاص يحققون درجة الآيلتس المطلوبة!`}</span>
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[174px] top-[32px] w-[773px]">
      <TestmonialTitle />
      <div className="bg-[#c5c5c5] h-[2px] rounded-[6px] shrink-0 w-[56px]" />
    </div>
  );
}

function Star1() {
  return (
    <div className="col-1 h-[18.139px] ml-0 mt-0 relative row-1 w-[17.408px]" data-name="star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4085 18.1385">
        <g id="star">
          <path d={svgPaths.p1c9cea00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 1">
      <Star1 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 2">
      <Layer />
    </div>
  );
}

function Star2() {
  return (
    <div className="col-1 h-[18.139px] ml-0 mt-0 relative row-1 w-[17.408px]" data-name="star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4085 18.1385">
        <g id="star">
          <path d={svgPaths.p1c9cea00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 1">
      <Star2 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21.68%] mt-0 place-items-start relative row-1" data-name="Layer 3">
      <Layer3 />
    </div>
  );
}

function Star3() {
  return (
    <div className="col-1 h-[18.139px] ml-0 mt-0 relative row-1 w-[17.408px]" data-name="star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4085 18.1385">
        <g id="star">
          <path d={svgPaths.p1c9cea00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 1">
      <Star3 />
    </div>
  );
}

function Layer4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[43.36%] mt-0 place-items-start relative row-1" data-name="Layer 4">
      <Layer5 />
    </div>
  );
}

function Star4() {
  return (
    <div className="col-1 h-[18.139px] ml-0 mt-0 relative row-1 w-[17.408px]" data-name="star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4085 18.1385">
        <g id="star">
          <path d={svgPaths.p1c9cea00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 1">
      <Star4 />
    </div>
  );
}

function Layer6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.04%] mt-0 place-items-start relative row-1" data-name="Layer 5">
      <Layer7 />
    </div>
  );
}

function Star5() {
  return (
    <div className="col-1 h-[18.139px] ml-0 mt-0 relative row-1 w-[17.408px]" data-name="star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4085 18.1385">
        <g id="star">
          <path d={svgPaths.p1c9cea00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Layer 1">
      <Star5 />
    </div>
  );
}

function Layer8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[86.72%] mt-0 place-items-start relative row-1" data-name="Layer 6">
      <Layer9 />
    </div>
  );
}

function Star() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="STAR">
      <Layer1 />
      <Layer2 />
      <Layer4 />
      <Layer6 />
      <Layer8 />
    </div>
  );
}

function Button5() {
  return <div className="bg-[rgba(30,58,95,0.2)] rounded-[22369600px] shrink-0 size-[8px]" data-name="button" />;
}

function Button6() {
  return <div className="bg-[rgba(30,58,95,0.2)] rounded-[22369600px] shrink-0 size-[8px]" data-name="button" />;
}

function Button7() {
  return <div className="bg-[rgba(30,58,95,0.2)] rounded-[22369600px] shrink-0 size-[8px]" data-name="button" />;
}

function Button8() {
  return <div className="bg-[#1e3a5f] h-[8px] rounded-[22369600px] shrink-0 w-[24px]" data-name="button" />;
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[8px] items-start justify-center relative shrink-0" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Star />
      <p className="font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-right whitespace-nowrap" dir="auto">
        فاطمة - طالبة دراسات عليا
      </p>
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] h-[215px] items-end left-[calc(50%+20.99px)] top-[174px] w-[646px]">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] text-center w-full whitespace-pre-wrap" dir="auto">
        {`معكم قدرت أغيّر طريقتي في التحضير للآيلتس! `}
        <br aria-hidden="true" />
        {`التقييمات الفورية والإرشادات ساعدتني أطور مهاراتي في القراءة والكتابة، `}
        <br aria-hidden="true" />
        {`ورفعت درجتي لـ 6.5 بسرعة. والحمد لله، وصلت للي أبغاه!"`}
      </p>
      <Frame4 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="caret-left-outline">
          <div className="absolute inset-[30.21%_40.55%_30.13%_36.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.3574 12.6907">
              <path clipRule="evenodd" d={svgPaths.p25140a00} fill="var(--fill-0, #989898)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#989898] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="caret-right-outline">
          <div className="absolute inset-[30.21%_36.46%_30.13%_40.55%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.3574 12.6907">
              <path clipRule="evenodd" d={svgPaths.p1c9b5000} fill="var(--fill-0, #1E3A5F)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e3a5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute content-stretch flex gap-[12px] inset-[81%_5.29%_7.6%_85.09%] items-center">
      <Frame52 />
      <Frame54 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(219,224,255,0.3)] col-1 h-[421px] ml-[38.47px] mt-[15px] relative rounded-[24px] row-1 w-[1122.01px]">
      <Frame9 />
      <Frame10 />
      <Frame53 />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Testimonial Card">
      <Group1 />
      <Group22 />
      <Frame8 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[24px] items-center left-1/2 py-[40px] top-[1621px] w-[1440px]" data-name="testimonials">
      <Frame50 />
      <TestimonialCard />
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#012069] text-[32px] text-center w-[min-content]">
        <p className="leading-[44.8px]" dir="auto">
          جاهز تنضم لهم الحين؟
        </p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#012169] text-[48px] whitespace-nowrap" dir="auto">
        أسئلة ممكن تدور في بالك
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group73 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        وش الفرق بين الخطة المجانية والخطط المدفوعة؟
      </p>
      <HugeiconsQuiz8 />
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon />
      <Frame55 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content40 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group74 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        هل المزايا تختلف من خطة لأخرى؟
      </p>
      <HugeiconsQuiz />
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-center min-h-px min-w-px relative" data-name="Content">
      <Frame56 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 1">
            <line id="Line 37" stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" x1="0.5" x2="1119.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-right w-[min-content]">
        <p className="mb-0" dir="auto">
          لا. كل الخطط المدفوعة تفتح لك نفس مزايا المنصة الكاملة
        </p>
        <p dir="auto">الفرق الوحيد: مدة الاشتراك يعني تختار الخطة حسب وقتك المتاح</p>
      </div>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <Content42 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <Content41 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown2 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group75 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        أي خطة تناسبني؟
      </p>
      <HugeiconsQuiz1 />
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon2 />
      <Frame57 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content43 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown3 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group76 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        كيف أتمرّن على السبيكنق بدون الحاجة لانتظار شريك؟ وهل التقييم فعلي؟
      </p>
      <HugeiconsQuiz2 />
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon3 />
      <Frame58 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content44 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown4 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group77 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        أقدر أبدأ بعد الاشتراك؟
      </p>
      <HugeiconsQuiz3 />
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon4 />
      <Frame59 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content45 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown5 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        هل أحتاج كتب أو مصادر خارجية؟
      </p>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group78 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Frame61 />
      <HugeiconsQuiz4 />
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon5 />
      <Frame60 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content46 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown6 />
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group79 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        هل الدفع آمن؟
      </p>
      <HugeiconsQuiz5 />
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon6 />
      <Frame62 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content47 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown7 />
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group80 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        هل أقدر أسترجع فلوسي إذا ما ناسبتني المنصة؟
      </p>
      <HugeiconsQuiz6 />
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon7 />
      <Frame63 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content48 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="bg-[#012169] content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <ChevronDown8 />
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.499 21.5005">
          <g id="Group">
            <path d={svgPaths.p317d5d80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.pc1769c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10.7415 15.751H10.7505" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsQuiz7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hugeicons:quiz-01">
      <Group81 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" dir="auto">
        ليش ما أتدرب من كتب كامبريدج أو يوتيوب؟
      </p>
      <HugeiconsQuiz7 />
    </div>
  );
}

function Content49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
      <Icon8 />
      <Frame64 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Content49 />
        </div>
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Wrap">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-[1200px]" data-name="Content">
      <Heading />
      <Wrap />
    </div>
  );
}

function FaQs() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip pt-[40px] px-[60px] top-[2378px] w-[1440px]" data-name="FAQs">
      <Content39 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Heading">
      <p className="font-['Tajawal:Bold',sans-serif] leading-[47.6px] relative shrink-0 text-[#012169] text-[34px]" dir="auto">
        إذا وضحت الصورة … خليك ذيب، واختصر الطريق
      </p>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4a4a4a] text-[20px]">
        <p className="leading-[28px]" dir="auto">
          كل اللي عليك:
        </p>
      </div>
    </div>
  );
}

function StreamlineEmojisRocket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="streamline-emojis:rocket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="streamline-emojis:rocket">
          <path d={svgPaths.p332b2ca0} fill="var(--fill-0, #FF6242)" id="Vector" />
          <path d={svgPaths.p3eefba00} fill="var(--fill-0, #FF866E)" id="Vector_2" />
          <path d={svgPaths.p332b2ca0} id="Vector_3" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p5020280} fill="var(--fill-0, #FF6242)" id="Vector_4" />
          <path d={svgPaths.p3b8a4d80} fill="var(--fill-0, #FF866E)" id="Vector_5" />
          <path d={svgPaths.p5020280} id="Vector_6" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p92ed00} fill="var(--fill-0, #E8F4FA)" id="Vector_7" />
          <path d={svgPaths.p3e773580} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p92ed00} id="Vector_9" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p1f784900} fill="var(--fill-0, #45413C)" id="Vector_10" opacity="0.15" />
          <path d={svgPaths.p5d73980} fill="var(--fill-0, #FF6242)" id="Vector_11" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3b6f4e00} fill="var(--fill-0, #C0DCEB)" id="Vector_12" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p1e57c100} fill="var(--fill-0, #00B8F0)" id="Vector_13" />
          <path d={svgPaths.p3e347100} fill="var(--fill-0, #4ACFFF)" id="Vector_14" />
          <path d={svgPaths.p1e57c100} id="Vector_15" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.pabfaa00} fill="var(--fill-0, #FF8A14)" id="Vector_16" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p1f843880} fill="var(--fill-0, #FFE500)" id="Vector_17" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p28993700} fill="var(--fill-0, #FFE500)" id="Vector_18" />
          <path d={svgPaths.p186b7a00} fill="var(--fill-0, #FFF48C)" id="Vector_19" />
          <path d={svgPaths.p28993700} id="Vector_20" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p1006d80} fill="var(--fill-0, #FFE500)" id="Vector_21" />
          <path d={svgPaths.p100ff5f0} fill="var(--fill-0, #FFF48C)" id="Vector_22" />
          <path d={svgPaths.p1006d80} id="Vector_23" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p36187880} fill="var(--fill-0, #9CEB60)" id="Vector_24" />
          <path d={svgPaths.p14ed6180} fill="var(--fill-0, #C8FFA1)" id="Vector_25" />
          <path d={svgPaths.p36187880} id="Vector_26" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p14a23a00} id="Vector_27" stroke="var(--stroke-0, #45413C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end opacity-80 relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1d2d] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          ابدأ فورًا بعد الاشتراك
        </p>
      </div>
      <StreamlineEmojisRocket />
    </div>
  );
}

function Group82() {
  return (
    <div className="h-[25.415px] relative shrink-0 w-[24px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25.4145">
        <g id="Group">
          <path d={svgPaths.p3a81c700} fill="var(--fill-0, #FFC932)" id="Vector" />
          <path d={svgPaths.p26a67b80} fill="var(--fill-0, #FFC932)" id="Vector_2" />
          <path d={svgPaths.p1ed11400} fill="var(--fill-0, #FEB015)" id="Vector_3" />
          <path d={svgPaths.p495b000} fill="var(--fill-0, #FFC932)" id="Vector_4" />
          <path d={svgPaths.p17ef6300} fill="var(--fill-0, #FEB015)" id="Vector_5" />
          <path d={svgPaths.p14c83080} fill="var(--fill-0, #4089D4)" id="Vector_6" />
          <path d={svgPaths.p1cb32980} fill="var(--fill-0, #FEB015)" id="Vector_7" />
          <path d={svgPaths.p1a1d6b0} fill="var(--fill-0, #DF284F)" id="Vector_8" />
          <path d={svgPaths.p3dbdab00} fill="var(--fill-0, #FFC932)" id="Vector_9" />
          <path d={svgPaths.p25d61530} fill="var(--fill-0, #FFC932)" id="Vector_10" />
          <path d={svgPaths.p35953380} fill="var(--fill-0, #FFEC8A)" id="Vector_11" />
          <path d={svgPaths.p347af300} fill="var(--fill-0, #FFEC8A)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end opacity-80 relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1d2d] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          افتح كل مزايا المنصة
        </p>
      </div>
      <Group82 />
    </div>
  );
}

function Group85() {
  return (
    <div className="h-[24.037px] relative shrink-0 w-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0369">
        <g id="Group 2147223493">
          <g id="Vector">
            <path d={svgPaths.p2a5c5d80} fill="#FE405C" />
            <path d={svgPaths.p35368600} fill="#C0126B" />
            <path d={svgPaths.p2018a000} fill="var(--fill-0, #C0136B)" />
            <path d={svgPaths.p15ab5380} fill="#0188FD" />
            <path d={svgPaths.p1b126d00} fill="#00ADED" />
            <path d={svgPaths.p16591580} fill="#FEF3F3" />
            <path d={svgPaths.pdb89b00} fill="#EDE0DB" />
            <path d={svgPaths.p3b0b8200} fill="#ECDFDB" />
            <path d={svgPaths.p18440100} fill="#02337A" />
            <path d={svgPaths.p21be100} fill="#01275A" />
            <path d={svgPaths.p2a464300} fill="#FE405C" />
            <path d={svgPaths.p3e6a2520} fill="var(--fill-0, #C0136B)" />
            <path d={svgPaths.p3f007240} fill="var(--fill-0, #C0136B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end opacity-80 relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1d2d] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          تدرّب بخطة واضحة وبذكاء
        </p>
      </div>
      <Group85 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[644px]">
      <Frame68 />
      <Frame69 />
      <Frame70 />
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-[#012269] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="→ Buttons">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[19.6px]" dir="auto">
          اختر خطتك وختّم درجة احلامك الحين
        </p>
      </div>
    </div>
  );
}

function MdiAbjadArabic() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:abjad-arabic">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:abjad-arabic">
          <path d={svgPaths.pb58c880} fill="var(--fill-0, #4A4A4A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-end p-[16px] relative rounded-[999px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          منصة سعودية • دعم عربي
        </p>
      </div>
      <MdiAbjadArabic />
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute inset-[17.92%_8.33%_15.42%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pcb24500} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FlowbiteVisaSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="flowbite:visa-solid">
      <Group83 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-end p-[16px] relative rounded-[999px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          Visa • Mastercard • مدى • Apple Pay
        </p>
      </div>
      <FlowbiteVisaSolid />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p36115e80} fill="var(--fill-0, #4A4A4A)" id="Vector" />
          <path d={svgPaths.p11e32600} fill="var(--fill-0, #4A4A4A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group84 />
    </div>
  );
}

function IconsaxPadlock() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="iconsax-padlock">
      <ClipPathGroup />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-end p-[16px] relative rounded-[999px] shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          دفع آمن 100%
        </p>
      </div>
      <IconsaxPadlock />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[35px] items-center relative shrink-0 w-full">
      <Frame73 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[891px]">
      <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0" data-name="Button">
        <Buttons5 />
      </div>
      <Frame72 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Heading1 />
      <Frame67 />
      <Frame71 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(219,224,255,0.5)] h-[401px] left-1/2 overflow-clip rounded-[24px] top-[3479px] w-[1200px]">
      <Frame66 />
    </div>
  );
}

function GoIeltsDashboard() {
  return (
    <div className="absolute aspect-[532/543.7999877929688] left-[10%] right-1/2 rounded-[10px] top-0" data-name="GoIELTS Dashboard">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGoIeltsDashboard} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white bottom-[292.22px] left-[1198px] rounded-[50px] top-[339.78px] w-[127px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic right-[24.68px] text-[20px] text-black text-right top-[28px] w-[77.319px]">
        <p className="leading-[33px]" dir="auto">
          اعرف أكثر
        </p>
      </div>
    </div>
  );
}

function GoIeltsAiLogo() {
  return (
    <div className="absolute aspect-[373/105] bottom-[20.21px] left-[952px] top-[563.79px]" data-name="GoIELTS.ai logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGoIeltsAiLogo} />
      </div>
    </div>
  );
}

function RegionFooterWidget3Section() {
  return (
    <div className="absolute h-[689px] left-[55px] right-[60px] top-[20px]" data-name="Region - Footer Widget 3 → Section">
      <GoIeltsDashboard />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] h-[134.39px] justify-center leading-[78.4px] not-italic right-[-0.2px] text-[56px] text-right text-white top-[178.19px] w-[530.75px]">
        <p className="mb-0" dir="auto">
          انضم إلى قصص نجاح
        </p>
        <p dir="auto">طلاب GoIELTS</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[33px] justify-center leading-[0] not-italic right-[-0.4px] text-[20px] text-[rgba(255,255,255,0.7)] text-right top-[288.28px] w-[513.01px]">
        <p className="leading-[33px]" dir="auto">
          جاهز لتحقيق أعلى الدرجات مع حلول الدخول الذكية التي نقدمها؟
        </p>
      </div>
      <Link />
      <GoIeltsAiLogo />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#010101] h-[708.8px] left-0 right-0 rounded-tl-[100px] rounded-tr-[100px] top-0" data-name="Background">
      <RegionFooterWidget3Section />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[16px] right-0 top-[5px] w-[56.45px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.37px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[56.823px]">
        <p className="leading-[26.4px]" dir="auto">
          الرئيسية
        </p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[16px] right-0 top-[39.39px] w-[40.7px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.32px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[41.024px]">
        <p className="leading-[26.4px]" dir="auto">
          رحلتك
        </p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="absolute h-[16px] right-0 top-[73.78px] w-[50.17px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.35px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[50.524px]">
        <p className="leading-[26.4px]" dir="auto">
          الميزات
        </p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="absolute h-[16px] right-0 top-[108.17px] w-[47.17px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.34px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[47.514px]">
        <p className="leading-[26.4px]" dir="auto">
          الباقات
        </p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="absolute h-[16px] right-0 top-[142.56px] w-[49.31px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.35px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[49.661px]">
        <p className="leading-[26.4px]" dir="auto">
          المدونة
        </p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="absolute h-[16px] right-0 top-[176.96px] w-[100.69px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.36px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[101.046px]">
        <p className="leading-[26.4px]" dir="auto">
          حاسبة الايلتس
        </p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="absolute h-[16px] right-0 top-[211.35px] w-[108.97px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.37px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[109.339px]">
        <p className="leading-[26.4px]" dir="auto">
          الاسئلة الشائعة
        </p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="absolute h-[16px] right-0 top-[245.74px] w-[172.2px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.33px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[172.534px]">
        <p className="leading-[26.4px]" dir="auto">
          اختبار آيلتس تجريبي مجاني
        </p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[267.13px] left-[467.8px] right-0 top-[43px]" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="absolute h-[16px] right-0 top-[5px] w-[241.09px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.39px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[241.478px]">
        <p className="leading-[26.4px]" dir="auto">
          التدريب على اختبار الكتابة في الايلتس
        </p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="absolute h-[16px] right-0 top-[39.39px] w-[259.59px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.3px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[259.891px]">
        <p className="leading-[26.4px]" dir="auto">
          التدريب على اختبار الاستماع في الايلتس
        </p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="absolute h-[16px] right-[-0.01px] top-[73.78px] w-[246.64px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.39px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[247.032px]">
        <p className="leading-[26.4px]" dir="auto">
          التدريب على اختبار التحدث في الايلتس
        </p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[95.17px] left-[144.2px] right-[236.21px] top-[43px]" data-name="List">
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="absolute h-[16px] right-0 top-[5px] w-[51.48px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.36px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[51.838px]">
        <p className="leading-[26.4px]" dir="auto">
          من نحن
        </p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="absolute h-[16px] right-0 top-[39.39px] w-[79.64px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.32px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[79.963px]">
        <p className="leading-[26.4px]" dir="auto">
          تواصل معنا
        </p>
      </div>
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="absolute h-[16px] right-0 top-[73.78px] w-[113.44px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.38px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[113.816px]">
        <p className="leading-[26.4px]" dir="auto">
          الشروط والاحكام
        </p>
      </div>
    </div>
  );
}

function ItemLink14() {
  return (
    <div className="absolute h-[16px] right-0 top-[108.17px] w-[128.5px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.4px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[128.899px]">
        <p className="leading-[26.4px]" dir="auto">
          سياسة الخصوصية
        </p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute h-[129.56px] left-[511.5px] right-0 top-[425.13px]" data-name="List">
      <ItemLink11 />
      <ItemLink12 />
      <ItemLink13 />
      <ItemLink14 />
    </div>
  );
}

function ItemLink15() {
  return (
    <div className="absolute h-[16px] right-0 top-[5px] w-[99.63px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.35px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[99.984px]">
        <p className="leading-[26.4px]" dir="auto">
          تسجيل الدخول
        </p>
      </div>
    </div>
  );
}

function ItemLink16() {
  return (
    <div className="absolute h-[16px] right-[0.01px] top-[39.39px] w-[88.08px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic right-[-0.34px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[8px] w-[88.416px]">
        <p className="leading-[26.4px]" dir="auto">
          إنشاء حساب
        </p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="absolute h-[60.78px] left-[347.88px] right-[192.49px] top-[425.13px]" data-name="List">
      <ItemLink15 />
      <ItemLink16 />
    </div>
  );
}

function RegionFooterWidget1Section() {
  return (
    <div className="absolute bg-black h-[562px] left-[745px] right-[60px] top-[50.21px]" data-name="Region - Footer Widget 1 → Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] h-[33px] justify-center leading-[0] not-italic right-[-0.3px] text-[20px] text-right text-white top-[16.5px] w-[67.774px]">
        <p className="leading-[33px]">GoIELTS</p>
      </div>
      <List />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] h-[33px] justify-center leading-[0] not-italic right-[235.84px] text-[20px] text-right text-white top-[16.5px] w-[106.775px]">
        <p className="leading-[33px]" dir="auto">
          روابط مهمة
        </p>
      </div>
      <List1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] h-[33px] justify-center leading-[0] not-italic right-[-0.32px] text-[20px] text-right text-white top-[398.63px] w-[81.075px]">
        <p className="leading-[33px]" dir="auto">
          معلومات
        </p>
      </div>
      <List2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] h-[33px] justify-center leading-[0] not-italic right-[192.19px] text-[20px] text-right text-white top-[398.63px] w-[73.843px]">
        <p className="leading-[33px]" dir="auto">
          مساعدة
        </p>
      </div>
      <List3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end leading-[0] not-italic relative shrink-0 text-right w-[268px]">
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[33px]" dir="auto">
          امسح الباركود لتسجيل الدخول
        </p>
      </div>
      <div className="flex flex-col font-['Tajawal:Medium',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[26.4px]" dir="auto">
          نساعدك على تحقيق حلمك
        </p>
      </div>
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="QR Code">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCode} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame5 />
      <QrCode />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Tajawal:Medium',sans-serif] gap-[20px] items-end leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[#c8102e] text-[31px] whitespace-nowrap">
        <p className="leading-[51.15px]" dir="auto">
          كن أول من يعرف!
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#c1c1c1] text-[18px] text-right w-[558px]">
        <p className="leading-[29.7px]" dir="auto">
          اشترك في نشرتنا البريدية لتصلك أحدث العروض والخصومات والنصائح الحصرية مباشرة إلى بريدك.
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[19px] left-[11.19px] overflow-clip right-[11.18px] top-[15.5px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[16px] top-[9px] w-[103.339px]">
        <p className="leading-[normal]" dir="auto">
          اكتب ايميلك هنا
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f4f4f4] h-[50px] overflow-clip relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[442px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#1e40af] h-[50px] overflow-clip relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[111px]" data-name="Input">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Tajawal:Medium',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[16px] text-center text-white top-[24.5px] w-[65.35px]">
        <p className="leading-[normal]" dir="auto">
          انضم الآن
        </p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Form">
      <Input />
      <Input1 />
    </div>
  );
}

function RegionFooterWidget2Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-end justify-center left-[61px] right-[811px] top-[50.21px]" data-name="Region - Footer Widget 2 → Section">
      <Frame6 />
      <Frame7 />
      <Form />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#010101] border-[rgba(255,255,255,0.2)] border-solid border-t h-[663.69px] left-0 right-0 top-[708.8px]" data-name="Background+HorizontalBorder">
      <RegionFooterWidget1Section />
      <RegionFooterWidget2Section />
    </div>
  );
}

function LinkX() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - X">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[8.8px] text-[22px] text-right text-white top-[19.5px] w-[22.2px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="LinkedIn">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[10.06px] text-[22px] text-right text-white top-[19.5px] w-[19.564px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - Facebook">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[12.76px] text-[22px] text-right text-white top-[19.5px] w-[14.109px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - Instagram">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[10.06px] text-[22px] text-right text-white top-[19.5px] w-[19.564px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkTikTok() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - TikTok">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[10.06px] text-[22px] text-right text-white top-[19.5px] w-[19.564px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkTelegram() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - Telegram">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[9.02px] text-[22px] text-right text-white top-[19.5px] w-[21.637px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Link - YouTube">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic right-[7.27px] text-[22px] text-right text-white top-[19.5px] w-[25.098px]">
        <p className="leading-[22px]"></p>
      </div>
    </div>
  );
}

function RegionFooterWidget4Section() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[6px] items-center left-[calc(50%-429px)] top-[19.52px] w-[462px]" data-name="Region - Footer Widget 4 → Section">
      <LinkX />
      <LinkedIn />
      <LinkFacebook />
      <LinkInstagram />
      <LinkTikTok />
      <LinkTelegram />
      <LinkYouTube />
      <div className="flex flex-col font-['Tajawal:Medium',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-[32.484px]">
        <p className="leading-[23.1px]" dir="auto">
          تابعنا
        </p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="absolute bg-[#010101] border-[#010101] border-solid border-t h-[81px] left-0 right-0 top-[1372.49px]" data-name="Background+HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Tajawal:Bold',sans-serif] justify-center leading-[0] not-italic right-[60px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[39.3px] tracking-[0.5px] whitespace-nowrap">
        <p dir="auto">
          <span className="leading-[26.4px]">{`جميع الحقوق محفوظة | `}</span>
          <span className="font-['Tajawal:Regular',sans-serif] leading-[26.4px] not-italic">GoIELTS.ai</span>
          <span className="font-['Tajawal:Bold',sans-serif] leading-[26.4px] not-italic">{` 2026`}</span>
          <span className="leading-[26.4px]">{` `}</span>
        </p>
      </div>
      <RegionFooterWidget4Section />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-0.48px] h-[1453.48px] left-1/2 w-[1440px]" data-name="Footer">
      <Background />
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
    </div>
  );
}

export default function Plans() {
  return (
    <div className="bg-white relative size-full" data-name="Plans">
      <Frame11 />
      <Header />
      <Testimonials />
      <FaQs />
      <Frame65 />
      <Footer />
    </div>
  );
}