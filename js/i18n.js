(function () {
  const STRINGS = {
    ku: {
      metaTitle: "کێڵگە — بەڕێوەبردنی کێڵگەی پەلەوەر",
      brand: "کێڵگە",
      navFeatures: "تایبەتمەندییەکان",
      navPricing: "پلان و نرخ",
      navPrivacy: "سیاسەتی تایبەتمەندی",
      heroTitle: "بەڕێوەبردنی کێڵگەی پەلەوەر، بە شێوەیەکی ڕێکوپێک",
      heroSub:
        "ئەم سیستەمە گونجاوە بۆ بەڕێوەبردنی کێڵگەی پەلەوەر. هەنگاوەکان تۆمار بکە، داتاکانت پارێزراون، و بە کوردی، عەرەبی و ئینگلیزی کار بکە.",
      heroBadge: "پشتگیری سێ زمان",
      li1: "پاشەکەوتکردنی زانیاری لەسەر ئینتەرنێت",
      li2: "تۆمارکردنی هەنگاوەکانی کێڵگەکەت یەک بە دوای یەک",
      li3: "ڕاپۆرت و بەڕێوەبردنی خەرجی و کارمەند",
      sectionFeatures: "ئەمە چی پێشکەش دەکات؟",
      sectionFeaturesSub:
        "ئامرازێکی تەواو بۆ خاوەن کێڵگەکان کە دەزانین چەندە ماندوو دەبن بۆ بەرهەمهێنان.",
      f1t: "تۆمارکردنی ڕۆژانە",
      f1d: "شوێنی جووجەڵە، فرۆشتن، دەرمان، سووتەمەنی و زیاتر لە یەک شوێن.",
      f2t: "سێ زمان",
      f2d: "ڕووکار بە کوردی، عەرەبی و ئینگلیزی — هەمان ئەزموونی ئەپەکە.",
      f3t: "داتای پارێزراو",
      f3d: "پەیوەندی بە سێرڤەرەوە بۆ هەماهەنگکردن و پاراستنی زانیارییەکان.",
      f4t: "بەڕێوەبردنی تیم",
      f4d: "کارمەند و مۆڵەتەکان بە شێوەیەکی کۆنترۆڵکراو.",
      f5t: "ڕاپۆرت و چاپ",
      f5d: "دەرهێنانی PDF و کورتەی کارەکان بۆ بڕیارگرتن.",
      f6t: "دیزاینی نوێ",
      f6d: "ڕووکارێکی ساکار و ئاسان بۆ بەکارهێنان لە مۆبایل.",
      ctaTitle: "ئامادەیت بۆ دەستپێکردن؟",
      ctaSub: "ئەپەکە دابەزێنە و یەکەم هەنگاوەکانت تۆمار بکە.",
      sectionPricing: "پلان و نرخ",
      sectionPricingSub:
        "دوو پلان هەیە. بۆ هەڵبژاردنی پلان، لە واتسئاپ نامە بنێرە (٧٥٠٢٣٢١٦٣٧) و دەقی خوارەوە لە نامەکەدا بنووسە.",
      plan6Title: "پلانی شەش مانگ",
      plan6Price: "١٢٠٬٠٠٠ دیناری عێراقی",
      plan6MsgLabel: "دەقی نامە بۆ ئەم پلانە:",
      plan6Msg: "پلانی شەش مانگی ئەپی کێڵگەم دەوێت",
      plan12Title: "پلانی یەک ساڵ",
      plan12Price: "٢٠٠٬٠٠٠ دیناری عێراقی",
      plan12MsgLabel: "دەقی نامە بۆ ئەم پلانە:",
      plan12Msg: "پلانی یەک ساڵی ئەپی کێڵگەم دەوێت",
      btnWhatsApp6: "داواکاری پلانی ٦ مانگ لە واتسئاپ",
      btnWhatsApp12: "داواکاری پلانی یەک ساڵ لە واتسئاپ",
      contactToggle: "پەیوەندی — کرتە بکە بۆ بینینی زانیارییەکان",
      contactTitle: "زانیاری پەیوەندی",
      contactEmailLabel: "ئیمەیڵ",
      contactWhatsAppLabel: "واتسئاپ",
      contactTelegramLabel: "تیلیگرام",
      contactFacebookLabel: "فەیس بووک",
      dlPlay: "گووگڵ پلەی",
      dlIos: "ئەپ ستۆر",
      footerCopy: "© کێڵگە. هەموو مافەکان پارێزراون.",
      storePlayAria: "کردنەوەی پەڕەی کێڵگە لە گووگڵ پلەی",
      storeIosAria: "گەڕان بە ئەپ ستۆر بۆ کێڵگە",
      ariaWhatsApp6: "ناردنی داوای پلانی شەش مانگ لە واتسئاپ",
      ariaWhatsApp12: "ناردنی داوای پلانی یەک ساڵ لە واتسئاپ",
    },
    ar: {
      metaTitle: "كيلكة — إدارة مزارع دواجن اللحم",
      brand: "كيلكة",
      navFeatures: "الميزات",
      navPricing: "الخطط والأسعار",
      navPrivacy: "سياسة الخصوصية",
      heroTitle: "إدارة مزرعة دواجن اللحم بكل تنظيم",
      heroSub:
        "هذا النظام مناسب لمزارع دواجن اللحم. سجّل الخطوات، احفظ بياناتك بأمان، واعمل بالكردية والعربية والإنجليزية.",
      heroBadge: "دعم ثلاث لغات",
      li1: "حفظ البيانات عبر الإنترنت",
      li2: "تسجيل خطوات المزرعة واحدة تلو الأخرى",
      li3: "تقارير ومصروفات وموظفون",
      sectionFeatures: "ماذا يقدّم؟",
      sectionFeaturesSub:
        "أداة متكاملة لأصحاب المزارع الذين نقدّر تعبهم واستثمارهم.",
      f1t: "تسجيل يومي",
      f1d: "كتكوت، مبيعات، أدوية، وقود وأكثر في مكان واحد.",
      f2t: "ثلاث لغات",
      f2d: "واجهة بالكردية والعربية والإنجليزية — كما في التطبيق.",
      f3t: "بيانات آمنة",
      f3d: "مزامنة مع الخادم لحفظ معلوماتك.",
      f4t: "إدارة الفريق",
      f4d: "حسابات الموظفين والصلاحيات بشكل منضبط.",
      f5t: "تقارير وطباعة",
      f5d: "ملفات PDF وملخصات لدعم قراراتك.",
      f6t: "تصميم عصري",
      f6d: "واجهة بسيطة وسهلة على الجوال.",
      ctaTitle: "جاهز للبدء؟",
      ctaSub: "حمّل التطبيق وسجّل أولى خطواتك.",
      sectionPricing: "الخطط والأسعار",
      sectionPricingSub:
        "خطتان: ٦ أشهر بـ ١٢٠٬٠٠٠ دينار عراقي، أو سنة بـ ٢٠٠٬٠٠٠ د.ع. لاختيار الخطة، راسلنا على واتساب ٧٥٠٢٣٢١٦٣٧ واكتب عبارة الطلب أدناه في الرسالة.",
      plan6Title: "خطة ٦ أشهر",
      plan6Price: "١٢٠٬٠٠٠ دينار عراقي",
      plan6MsgLabel: "نص الرسالة لهذه الخطة:",
      plan6Msg: "أريد خطة ٦ أشهر لتطبيق كيلكة",
      plan12Title: "خطة سنة واحدة",
      plan12Price: "٢٠٠٬٠٠٠ دينار عراقي",
      plan12MsgLabel: "نص الرسالة لهذه الخطة:",
      plan12Msg: "أريد خطة سنة واحدة لتطبيق كيلكة",
      btnWhatsApp6: "طلب خطة ٦ أشهر عبر واتساب",
      btnWhatsApp12: "طلب خطة سنة عبر واتساب",
      contactToggle: "تواصل — اضغط لعرض بيانات التواصل",
      contactTitle: "بيانات التواصل",
      contactEmailLabel: "البريد",
      contactWhatsAppLabel: "واتساب",
      contactTelegramLabel: "تيليغرام",
      contactFacebookLabel: "فيسبوك",
      dlPlay: "جوجل بلاي",
      dlIos: "آب ستور",
      footerCopy: "© كيلكة. جميع الحقوق محفوظة.",
      storePlayAria: "فتح صفحة كيلكة على جوجل بلاي",
      storeIosAria: "البحث عن كيلكة على آب ستور",
      ariaWhatsApp6: "إرسال طلب خطة ٦ أشهر عبر واتساب",
      ariaWhatsApp12: "إرسال طلب خطة سنة عبر واتساب",
    },
    en: {
      metaTitle: "Kelga — Broiler farm management",
      brand: "Kelga",
      navFeatures: "Features",
      navPricing: "Plans & pricing",
      navPrivacy: "Privacy policy",
      heroTitle: "Run your broiler farm with clarity",
      heroSub:
        "Built for meat poultry farms: track every step, keep data safe, and work in Kurdish, Arabic, or English.",
      heroBadge: "3 languages",
      li1: "Cloud sync so your records stay backed up",
      li2: "Log farm steps one after another",
      li3: "Expenses, team, and reporting in one flow",
      sectionFeatures: "What you get",
      sectionFeaturesSub:
        "A focused toolkit for farm owners—we know how hard you work.",
      f1t: "Daily logging",
      f1d: "Chicks, sales, medicine, fuel, and more in one place.",
      f2t: "Trilingual UI",
      f2d: "Kurdish, Arabic, and English—same as the mobile app.",
      f3t: "Protected data",
      f3d: "Server sync designed around your operational records.",
      f4t: "Team control",
      f4d: "Employee access with sensible permissions.",
      f5t: "Reports & print",
      f5d: "PDFs and summaries to support decisions.",
      f6t: "Modern UX",
      f6d: "Clean, mobile-first screens you can trust daily.",
      ctaTitle: "Ready to start?",
      ctaSub: "Download the app and record your first steps.",
      sectionPricing: "Plans & pricing",
      sectionPricingSub:
        "Two plans: 6 months at 120,000 IQD, or 1 year at 200,000 IQD. To subscribe, message us on WhatsApp (7502321637) and include the phrase below for your chosen plan.",
      plan6Title: "6-month plan",
      plan6Price: "120,000 Iraqi dinars",
      plan6MsgLabel: "Message to send for this plan:",
      plan6Msg: "I want the 6-month Kelga app plan",
      plan12Title: "1-year plan",
      plan12Price: "200,000 Iraqi dinars",
      plan12MsgLabel: "Message to send for this plan:",
      plan12Msg: "I want the 1-year Kelga app plan",
      btnWhatsApp6: "Request 6-month plan on WhatsApp",
      btnWhatsApp12: "Request 1-year plan on WhatsApp",
      contactToggle: "Contact — tap to show details",
      contactTitle: "Contact details",
      contactEmailLabel: "Email",
      contactWhatsAppLabel: "WhatsApp",
      contactTelegramLabel: "Telegram",
      contactFacebookLabel: "Facebook",
      dlPlay: "Google Play",
      dlIos: "App Store",
      footerCopy: "© Kelga. All rights reserved.",
      storePlayAria: "Open Kelga on Google Play",
      storeIosAria: "Search for Kelga on the App Store",
      ariaWhatsApp6: "Send 6-month plan request on WhatsApp",
      ariaWhatsApp12: "Send 1-year plan request on WhatsApp",
    },
  };

  const privacyStrings = {
    ku: {
      brand: "کێڵگە",
      metaTitle: "سیاسەتی تایبەتمەندی — کێڵگە",
      h1: "سیاسەتی تایبەتمەندی",
      lead:
        "ئەم پەڕەیە ڕوون دەکاتەوە چۆن ئەپی کێڵگە زانیاری بەکارهێنەران و داتای کارەکی مامەڵە دەکات. تکایە بە وردی بخوێنەرەوە.",
      s1h: "زانیاری کۆکراوە",
      s1p:
        "لە کاتی بەکارهێنانی ئەپەکە، زانیاری وەک هەژمار (ئیمەیڵ) و داتای تۆمارکراوی کێڵگەکەت لە ڕێگەی خزمەتگوزاری پاشەکەوت (هاوسەپ) هەڵدەگیرێت بۆ دابینکردنی تایبەتمەندییەکان.",
      s2h: "بەکارهێنانی زانیاری",
      s2p:
        "زانیارییەکان تەنها بۆ کارکردنی ئەپەکە، هەماهەنگکردن، و پاراستنی هەژمارەکەت بەکاردەهێنرێن. نافرۆشرێنە بۆ لایەنی سێیەم مەگەر یاسا پێویستی پێبکات.",
      s3h: "مافەکانت",
      s3p:
        "دەتوانیت داوای سڕینەوە یان ڕوونکردنەوەی داتا بکەیت لە ڕێگەی پەیوەندی بە گەشەپێدەرەوە. وردەکارییەکانی پەیوەندی لە ئەپەکەدا دیارن.",
      s4h: "گۆڕانکاری",
      s4p:
        "ئەم سیاسەتە دەتوانێت نوێ بکرێتەوە. بەردەوامبوون لە بەکارهێنانی ئەپەکە دوای بڵاوکردنەوەی وەشانی نوێ ڕەزامەندیی تێدەگەین.",
      back: "گەڕانەوە بۆ سەرەکی",
    },
    ar: {
      brand: "كيلكة",
      metaTitle: "سياسة الخصوصية — كيلكة",
      h1: "سياسة الخصوصية",
      lead:
        "توضّح هذه الصفحة كيف يتعامل تطبيق كيلكة مع معلومات المستخدمين وبيانات العمليات. يُرجى القراءة بعناية.",
      s1h: "البيانات المجمّعة",
      s1p:
        "عند استخدام التطبيق، قد تُجمع معلومات مثل الحساب (البريد الإلكتروني) وبيانات المزرعة المسجّلة عبر خدمة التخزين السحابي لتقديم الميزات.",
      s2h: "استخدام المعلومات",
      s2p:
        "تُستخدم المعلومات لتشغيل التطبيق والمزامنة وحماية حسابك فقط. لا تُباع لأطراف ثالثة إلا إذا اقتضى القانون ذلك.",
      s3h: "حقوقك",
      s3p:
        "يمكنك طلب حذف البيانات أو توضيحها عبر التواصل مع المطوّر. تفاصيل الاتصال متوفرة في التطبيق.",
      s4h: "التعديلات",
      s4p:
        "قد تُحدَّث هذه السياسة. استمرارك باستخدام التطبيق بعد نشر نسخة جديدة يعني موافقتك عليها.",
      back: "العودة للصفحة الرئيسية",
    },
    en: {
      brand: "Kelga",
      metaTitle: "Privacy policy — Kelga",
      h1: "Privacy policy",
      lead:
        "This page explains how the Kelga app handles user information and operational farm data. Please read it carefully.",
      s1h: "Data we process",
      s1p:
        "When you use the app, information such as your account (email) and farm records you enter may be stored through our backend service to provide syncing and core features.",
      s2h: "How we use it",
      s2p:
        "Data is used to operate the app, sync your records, and protect your account. We do not sell personal data to third parties unless required by law.",
      s3h: "Your rights",
      s3p:
        "You may request deletion or clarification of data by contacting the developer. Contact details are available inside the app.",
      s4h: "Changes",
      s4p:
        "We may update this policy. Continued use after updates means you accept the revised text.",
      back: "Back to home",
    },
  };

  const PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.karoxghafoor.kelga";
  const IOS_SEARCH_URL =
    "https://apps.apple.com/us/search?term=Kelga&entity=software";
  const WHATSAPP_URL = "https://wa.me/9647502321637";
  const EMAIL_KELGA = "mailto:karox.ghafoor@gmail.com";
  const FACEBOOK_URL = "https://www.facebook.com/systemkelga";

  function getLang() {
    return localStorage.getItem("kelga_lang") || "ku";
  }

  function setLang(code) {
    if (!STRINGS[code]) return;
    localStorage.setItem("kelga_lang", code);
    applyLang(code);
  }

  function applyLang(code) {
    const t = STRINGS[code];
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute("lang", code === "ku" ? "ckb" : code);
    const rtl = code === "ku" || code === "ar";
    html.setAttribute("dir", rtl ? "rtl" : "ltr");
    body.classList.toggle("lang-en", code === "en");

    document.title = t.metaTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === code);
    });

    var play = document.getElementById("link-play");
    var ios = document.getElementById("link-ios");
    if (play) {
      play.href = PLAY_URL;
      play.setAttribute("aria-label", t.storePlayAria);
    }
    if (ios) {
      ios.href = IOS_SEARCH_URL;
      ios.setAttribute("aria-label", t.storeIosAria);
    }

    var ctaP = document.querySelector("[data-cta-play]");
    var ctaI = document.querySelector("[data-cta-ios]");
    if (ctaP) {
      ctaP.href = PLAY_URL;
      ctaP.setAttribute("aria-label", t.storePlayAria);
    }
    if (ctaI) {
      ctaI.href = IOS_SEARCH_URL;
      ctaI.setAttribute("aria-label", t.storeIosAria);
    }

    var wa6 = document.getElementById("link-whatsapp-6");
    var wa12 = document.getElementById("link-whatsapp-12");
    if (wa6 && t.plan6Msg) {
      wa6.href = WHATSAPP_URL + "?text=" + encodeURIComponent(t.plan6Msg);
      wa6.setAttribute("aria-label", t.ariaWhatsApp6);
    }
    if (wa12 && t.plan12Msg) {
      wa12.href = WHATSAPP_URL + "?text=" + encodeURIComponent(t.plan12Msg);
      wa12.setAttribute("aria-label", t.ariaWhatsApp12);
    }

    var wa = document.getElementById("link-whatsapp-contact");
    if (wa) wa.href = WHATSAPP_URL;
    var em = document.getElementById("link-email");
    if (em) em.href = EMAIL_KELGA;
    var fb = document.getElementById("link-facebook");
    if (fb) fb.href = FACEBOOK_URL;
  }

  function applyPrivacyLang(code) {
    const t = privacyStrings[code];
    if (!t) return;
    const html = document.documentElement;
    const body = document.body;
    html.setAttribute("lang", code === "ku" ? "ckb" : code);
    html.setAttribute("dir", code === "ku" || code === "ar" ? "rtl" : "ltr");
    body.classList.toggle("lang-en", code === "en");
    document.title = t.metaTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === code);
    });
  }

  window.KelgaI18n = {
    init: function () {
      applyLang(getLang());
      document.querySelectorAll(".lang-switch button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          setLang(btn.getAttribute("data-lang"));
        });
      });
    },
    initPrivacy: function () {
      applyPrivacyLang(getLang());
      document.querySelectorAll(".lang-switch button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const code = btn.getAttribute("data-lang");
          localStorage.setItem("kelga_lang", code);
          applyPrivacyLang(code);
        });
      });
    },
  };
})();
