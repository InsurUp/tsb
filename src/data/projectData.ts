interface BannerData {
    en: {
        title: string;
        buttonText: string;
        buttonHref: string;
        eventStartDate: string;
        eventLocation: string;
        eventText: string;
        eventTargetDate: string;
        bgImage: string;
        tsbLogo: string;
        summitLogo: string;
        menuLogo: string;
        countdownWeeks: number;
        countdownDays: number;
        countdownHours: number;
    };
    tr: {
        title: string;
        buttonText: string;
        buttonHref: string;
        eventStartDate: string;
        eventLocation: string;
        eventText: string;
        eventTargetDate: string;
        bgImage: string;
        tsbLogo: string;
        summitLogo: string;
        menuLogo: string;
        countdownWeeks: number;
        countdownDays: number;
        countdownHours: number;
    };
}




export const BannerData: BannerData =
{
    en: {
        title: "DIGITAL FUTURES: HOW TECHNOLOGY CHANGES THE INSURANCE SECTOR",
        buttonText: "Sign up now!",
        buttonHref: "#guest-registration-form",
        eventStartDate: "29 - 30 September",
        eventLocation: "Swissôtel The Bosphorus - İstanbul",
        eventText: "29 - 30 September",
        eventTargetDate: "2025-09-29T09:00:00Z",
        bgImage: "/images/bg-main.webp",
        tsbLogo: "/images/logo_tsb.png",
        summitLogo: "/images/banner-image.png",
        menuLogo: "/images/menu_logos.png",
        countdownWeeks: 10,
        countdownDays: 5,
        countdownHours: 1800,
    },
    tr: {
        title: "DİJİTAL GELECEK: TEKNOLOJİ SİGORTA SEKTÖRÜNÜ NASIL DEĞİŞTİRİYOR? ",
        buttonText: "Hemen kaydolun! ",
        buttonHref: "#guest-registration-form",
        eventStartDate: "29 - 30 Eylül",
        eventLocation: "Swissôtel The Bosphorus - İstanbul",
        eventText: "29 - 30 Eylül",
        eventTargetDate: "2025-09-29T09:00:00Z",
        bgImage: "/images/bg-main.webp",
        tsbLogo: "/images/logo_tsb_tr.svg",
        summitLogo: "/images/tsb_banner_white.png",
        menuLogo: "/images/menu_logos.png",
        countdownWeeks: 10,
        countdownDays: 5,
        countdownHours: 1800,
    }
}

export interface Speaker {
    id: number;
    name: string;
    image: string;
    title: {
        en: string;
        tr: string;
    };
    bio: {
        en: string;
        tr: string;
    };
}

export const speakers: Speaker[] = [
    {
        id: 1,
        name: "Mehmet ŞİMŞEK",
        title: {
            en: "Minister of Treasury and Finance (TBC)",
            tr: "Hazine ve Maliye Bakanı (Teyit Bekleniyor)",
        },
        image: "/images/speakers/mehmet_simsek.png",
        bio: {
            en: `
            `,
            tr: `
            `,
        },
    },
    {
        id: 2,
        name: "Davut Menteş",
        title: {
            en: "Chairman, IPRSA",
            tr: "Başkan, SEDDK ",
        },
        image: "/images/speakers/davut_mentes.png",
        bio: {
            en: `
            Davut Menteş, who received his undergraduate degree from Istanbul University Faculty of Political Sciences, Business Administration, started his business life with the organization of training activities for the business world at MUSIAD Academy, then continued with the audit-consultancy sector and worked in this field for 5 years with the titles of SMMM and chief auditor. Subsequently, he worked as a senior executive for approximately 15 years in fast-moving consumer goods, real estate, textile and renewable energy sectors. In the insurance and private pension sector, which he entered at the beginning of 2018, he served as assistant general manager responsible for financial affairs, finance, law and information technologies functions, as well as budget-reporting, corporate communication and support services in Bereket Sigorta and Bereket Emeklilik companies. Davut Menteş, who was appointed as the second chairman of SEDDK on July 7, 2022 and as the chairman of SEDDK on November 14, 2023, knows English and is married with 1 child.
            `,
            tr: `
Lisans derecesini İstanbul Üniversitesi Siyasal Bilgiler Fakültesi İşletme Bölümünden alan Davut Menteş, iş hayatına MÜSİAD Akademide iş dünyasına yönelik eğitim faaaliyetleri organizasyonu ile başlamış, ardından denetim-danışmanlık sektörü ile devam ederek, SMMM ve başdenetçi unvanları ile bu alanda 5 yıl çalışmıştır. Akabinde, hızlı tüketim, gayrimenkul, tekstil ve yenilenebilir enerji sektörlerinde yaklaşık 15 sene üst düzey yöneticilik yapmıştır. 2018 yılı başında girdiği sigorta ve özel emeklilik sektöründe, Bereket Sigorta ve Bereket Emeklilik şirketlerinde; mali işler, finans, hukuk ve bilgi teknolojileri fonksiyonlarının yanısıra, bütçe-raporlama, kurumsal iletişim ve destek hizmetlerinden sorumlu genel müdür yardımcısı olarak görev yapmakta iken 7 Temmuz 2022 tarihinde SEDDK ikinci başkanlığına, 14 Kasım 2023 tarihinde ise SEDDK Başkanlığına atanan Davut Menteş, İngilizce bilmekte olup evli ve 1 çocuk babasıdır.         `,
        },
    },
    {
        id: 9,
        name: "Uğur GÜLEN",
        title: {
            en: "Chairman, The Association of Insurance, Reinsurance and Pension Companies of Türkiye General Manager, Aksigorta ",
            tr: "Başkan, Türkiye Sigorta, Reasürans ve Emeklilik Şirketleri Birliği Genel Müdür, Aksigorta ",
        },
        image: "/images/speakers/ugur_gulen.png",
        bio: {
            en: `
        Uğur Gülen took his undergraduate and master degrees at the Department of Industrial Engineering at Middle East Technical University. He began his career in 1991 and worked at various positions at Interbank, Denizbank, Ak Internet and MNG Bank. During 2004-2009. He served at AK Emeklilik A.Ş. ve AvivaSA Emeklilik ve Hayat A.Ş. as the Assistant General Manager. He has been assigned as the General Manager and a Board member at Aksigorta since May 2009. In addition to his current duties, he was elected President of the Association of Insurance, Reinsurance and Pension Companies of Türkiye in September 2023. 
        `,
            tr: `
            Uğur Gülen, lisans ve yüksek lisans eğitimini Orta Doğu Teknik Üniversitesi Endüstri Mühendisliği Bölümü’nde tamamlamıştır. 1991 yılında iş hayatına başlamış; Interbank, Denizbank, Ak Internet ve MNG Bank gibi kurumlarda çeşitli görevlerde bulunmuştur. 2004-2009 yılları arasında AK Emeklilik A.Ş. ve AvivaSA Emeklilik ve Hayat A.Ş.'de Genel Müdür Yardımcısı olarak görev yapmıştır. Mayıs 2009’dan bu yana Aksigorta’da Genel Müdür ve Yönetim Kurulu Üyesi olarak görevini sürdürmektedir. Hâlihazırdaki görevlerinin yanı sıra, Eylül 2023’te Türkiye Sigorta, Reasürans ve Emeklilik Şirketleri Birliği Başkanlığı’na seçilmiştir. 
             `,
        },
    },
    {
        id: 15,
        name: "Thea Utoft Høj Jensen",
        title: {
            en: "Director General, Insurance Europe",
            tr: "Genel Direktör, Insurance Europe",
        },
        image: "/images/speakers/theaa.png",
        bio: {
            en: `
         Thea Utoft Høj Jensen is director general of Insurance Europe, the European insurance and reinsurance federation, and secretary general of the Global Federation of Insurance Associations (GFIA). With extensive experience in EU affairs, she previously served as senior managing director at FTI Consulting and financial counsellor for the Denmark to the EU. Thea holds a Master of Arts in Law from the University of Copenhagen. She is a Danish national, and calls Brussels her home since 2016. 
        `,
            tr: `
Thea Utoft Høj Jensen, Avrupa sigorta ve reasürans sektörünü temsil eden Insurance Europe’un Genel Direktörü ve Küresel Sigorta Birlikleri Federasyonu’nun (GFIA) Genel Sekreteridir. Avrupa Birliği nezdindeki görevleri konusunda geniş deneyime sahip olan Jensen, daha önce FTI Consulting’de Kıdemli Yönetici Direktör ve Danimarka’nın AB nezdindeki Maliye Müşaviri olarak görev yapmıştır. Kopenhag Üniversitesi'nden Hukuk Yüksek Lisans derecesine sahiptir. Danimarka vatandaşı olan Jensen, 2016 yılından bu yana Brüksel’de ikamet etmektedir.             `,
        },
    },
    {
        id: 3,
        name: "Özgür Obalı",
        title: {
            en: "Secretary General, TSB",
            tr: "Genel Sekreter, Türkiye Sigorta Birliği (TSB)",
        },
        image: "/images/speakers/ozgur_obali.png",
        bio: {
            en: `
        Özgür Obalı graduated from Bogazici University, Department of Economics, and completed his master's degree in International Banking and Finance at the University of Birmingham.  

In institutions such as Isbank and Turkiye Finans; He served in various positions from Inspector to Head of Inspection Board.  

Between 2012 and 2016, Human Resources, Support Services, After Sales Services at Vakıf Emeklilik; Obalı, who assumed the position of Deputy General Manager of Marketing, Operations and Information Technologies; He served as the General Manager of Vakıf Emeklilik between February 2016 and July 2020.  

Obalı has been working as the Secretary General of the Insurance Association of Turkey since August 2020. 
        `,
            tr: `Özgür Obalı, lisans eğitimini Boğaziçi Üniversitesi İktisat Bölümü’nde tamamlamış, yüksek lisans derecesini ise Birmingham Üniversitesi’nde Uluslararası Bankacılık ve Finans alanında almıştır. İş Bankası ve Türkiye Finans gibi kurumlarda Müfettişlikten Teftiş Kurulu Başkanlığı’na kadar çeşitli görevlerde bulunmuştur. 2012–2016 yılları arasında Vakıf Emeklilik’te İnsan Kaynakları, Destek Hizmetleri, Satış Sonrası Hizmetler, Pazarlama, Operasyon ve Bilgi Teknolojilerinden sorumlu Genel Müdür Yardımcısı olarak görev yapmıştır. Şubat 2016 – Temmuz 2020 tarihleri arasında Vakıf Emeklilik Genel Müdürü olarak görevine devam etmiştir. Ağustos 2020’den bu yana Türkiye Sigorta Birliği Genel Sekreteri olarak görev yapmaktadır. `,
        },
    },
    {
        id: 7,
        name: "Sachin Sahni",
        title: {
            en: "Associate Director, S&P Global Ratings",
            tr: "Sachin Sahni Yardımcı Direktör, S&P Global Ratings ",
        },
        image: "/images/speakers/sachin.png",
        bio: {
            en: ` 
        Sachin Sahni is a part of S&P Global Ratings since 2015, based in DIFC - Dubai office, covering Insurance Ratings spread across MENA, Turkiye & South Africa. As a credit analyst, he manages a large portfolio of insurers and is responsible for assigning and conducting ongoing surveillance of their Credit Ratings. Mr. Sahni is also actively involved in market research and has published various insurance industry report cards & articles on industry current affairs. He is a qualified Chartered Accountant & MBA (Finance) and has 25 years of experience in Financial Services (Banking & Insurance) encompassing Credit Ratings, Governance, Risk & Compliance, Internal Controls & Statutory Audit. 
        `,
            tr: ` 
Sachin Sahni, 2015 yılından beri S&P Global Ratings bünyesinde, DIFC - Dubai ofisinde görev yapmaktadır. MENA bölgesi, Türkiye ve Güney Afrika’yı kapsayan sigorta derecelendirmelerinden sorumludur. Kredi analisti olarak geniş bir sigorta portföyünü yönetmekte ve bu kurumların Kredi Derecelendirmelerinin atanması ve takibinden sorumludur. Ayrıca piyasa araştırmalarında aktif rol almakta ve sektörle ilgili çeşitli raporlar ile güncel makaleler yayınlamaktadır. Sahni, Sertifikalı Muhasebeci (Chartered Accountant) ve Finans alanında MBA derecesine sahiptir. Finansal Hizmetler (Bankacılık ve Sigortacılık) alanında kredi derecelendirmeleri, yönetişim, risk ve uyum, iç denetim ve yasal denetim konularını kapsayan 25 yıllık deneyime sahiptir.             `,
        },
    },
    {
        id: 7,
        name: "Talar Gül",
        title: {
            en: "PwC Türkiye Financial Services Leader",
            tr: "PwC Türkiye Finansal Hizmetler Lideri",
        },
        image: "/images/speakers/talan-gull.png",
        bio: {
            en: "",
            tr: `
            
            Notre Dame De Sion Fransız Lisesi ve Kanada Concordia Üniversitesi İşletme Bölümü
mezunu olan Talar Gül, 1991 yılında PwC Türkiye'ye katıldı.
2001 yılında şirket ortaklığına atanan Talar Gül, 2021 yılından bu yana PwC Türkiye
Finansal Hizmetler Sektörü Lideri olarak görev yapmaktadır.
BDDK Mevzuatı, Uluslararası Finansal Raporlama Standartları, Türkiye Finansal
Raporlama Standartları, SEDDK ve SPK mevzuatı konularında uzmanlaşmış olan Gül,
bankacılık ve sigortacılık sektörlerindeki geniş denetim ve danışmanlık tecrübesine
sahiptir. Bunların yanı sıra; holdingler, uluslararası gruplar, tüketici ürünleri ve
teknoloji şirketlerinin denetimlerinde görev almıştır.
PwC Paris Ofisinde Finansal Hizmetler alanında da çalışmış olan Gül; teknik eğitimler,
bağımsız denetim derneği çalışmaları ve düzenleyici kurumlar ile yapılan mevzuat
çalışmalarında (Sermaye yeterliliği, konsolide gözetim ve muhasebe değişiklikleri
alanında) aktif rol almıştır.
Uluslararası Finansal Raporlama Standartları uyarlama projesinde Sigortacılar Birliği ve
Reasürans Şirketleri ve Hazine’ye danışmanlık yapmış olan Gül, aynı zamanda TÜSİAD
sigorta alt komitesi ve Solvency II komitesi üyeliğinde bulunmuştur.
            
            `
        },
    },
    {
        id: 14,
        name: "Levent Tuzun",
        title: {
            en: "Principal II at EBRD & Fellow at the Trilateral Commission",
            tr: "II. Başkan, Avrupa İmar ve Kalkınma Bankası (EBRD) & Üçlü Komisyon Üyesi",
        },
        image: "/images/speakers/levent-uzun.png",
        bio: {
            en: `
        Levent Tuzun is a Principal Economist at the European Bank for Reconstruction and Development (EBRD). He focuses on investments and policy dialogue with clients and policymakers in financial services and capital markets, including fintech and private equity/venture capital. His work also spans projects that relate to the EBRD’s strategic agenda, addressing global challenges around climate change, inequality and innovation gaps. Previously, he worked in investment banking at J.P. Morgan in New York. Levent was a Weidenfeld-Chevening Scholar at the University of Oxford and completed the Master of Public Policy degree at the Blavatnik School of Government. He graduated from Yale University with undergraduate degrees in Economics and International Studies, and completed the Brady-Johnson Program in Grand Strategy. Levent’s areas of interest in policymaking include foreign relations, macroeconomics, education, and science & technology. He’s an active follower of advancements in consumer-facing technologies, and is trained in media content production. 
            `,
            tr: `
Levent Tuzun, Avrupa İmar ve Kalkınma Bankası’nda (EBRD) Baş Ekonomist olarak görev yapmaktadır. Fintech ve özel sermaye/risk sermayesi de dahil olmak üzere, finansal hizmetler ve sermaye piyasalarındaki müşteriler ve politika yapıcılarla yatırımlar ve politika diyaloğu üzerine çalışmaktadır. Ayrıca, iklim değişikliği, eşitsizlik ve inovasyon açığı gibi küresel zorluklara odaklanan EBRD’nin stratejik gündemine yönelik projelerde yer almaktadır. Daha önce New York'ta J.P. Morgan’da yatırım bankacılığı alanında çalışmıştır. Levent, Oxford Üniversitesi’nde Weidenfeld-Chevening bursiyeri olarak bulunmuş ve Blavatnik School of Government’ta Kamu Politikası alanında yüksek lisansını tamamlamıştır. Lisans eğitimini Yale Üniversitesi’nde Ekonomi ve Uluslararası İlişkiler dallarında tamamlamış, ayrıca Brady-Johnson Grand Strategy Programı’nı bitirmiştir. Politika yapımıyla ilgili ilgi alanları arasında dış ilişkiler, makroekonomi, eğitim ve bilim & teknoloji yer almaktadır. Tüketici odaklı teknolojilerdeki gelişmeleri yakından takip etmekte ve medya içeriği üretimi konusunda eğitim almıştır.             `,
        },
    },
    {
        id: 8,
        name: "Alexandru CIUNCAN",
        title: {
            en: "President & General Manager, The National Union of Insurance and Reinsurance Companies of Romania - UNSAR",
            tr: "Başkan ve Genel Müdür, Romanya Sigorta ve Reasürans Şirketleri Birliği (UNSAR) ",
        },
        image: "/images/speakers/alexandru.png",
        bio: {
            en: "With over 2 decades in insurance and private pensions across CEE, Alexandru Ciuncan is currently President and General Manager of UNSAR and a Board Member at ISF. He formerly contributed to EIOPA’s IRSG and OPSG, and led initiatives at APPA and XPRIMM. He holds certifications in project and agile management, and he is  Henley Business School graduate in Board Practice and Directorship.",
            tr: "Orta ve Doğu Avrupa bölgesinde sigorta ve özel emeklilik alanında 20 yılı aşkın deneyime sahip olan Alexandru Ciuncan, şu anda UNSAR’ın Başkanlığı ve Genel Müdürlüğünü yürütmektedir, ayrıca ISF Yönetim Kurulu üyesidir. Daha önce EIOPA’nın IRSG ve OPSG komitelerinde görev almış, APPA ve XPRIMM’de çeşitli girişimlere liderlik etmiştir. Proje ve çevik yönetim sertifikalarına sahip olan Ciuncan, Henley İşletme Okulu’ndan Yönetim Kurulu Uygulamaları ve Yöneticiliği alanından mezundur. ",
        },
    },
    {
        id: 6,
        name: "Robert Gordon",
        title: {
            en: "Senior Vice President, American Property Casualty Insurance Association (APCIA) Policy, Research & International ",
            tr: "Kıdemli Başkan Yardımcısı, Amerikan Mal ve Kaza Sigortaları Birliği (APCIA) – Politika, Araştırma ve Uluslararası İlişkiler ",
        },
        image: "/images/speakers/robert.png",
        bio: {
            en: `
            Robert Gordon is the Senior Vice President of Policy, Research & International at APCIA, leading insurance policy development at state, federal, and international levels. Previously, he served as senior counsel for the U.S. House Financial Services Committee, contributing to key insurance laws and issues like data security, privacy, and liability reform. `,
            tr: `
Robert Gordon, APCIA’da politika geliştirme, araştırma ve uluslararası ilişkilerden sorumlu Kıdemli Başkan Yardımcısıdır. Sigorta politikalarının eyalet, federal ve uluslararası düzeylerde geliştirilmesine liderlik etmektedir. Daha önce ABD Temsilciler Meclisi Finansal Hizmetler Komitesi’nde Kıdemli Danışman olarak görev yapmış; veri güvenliği, gizlilik ve sorumluluk reformu gibi önemli sigorta yasalarının hazırlanmasına katkıda bulunmuştur. `        },
    },
    {
        id: 11,
        name: "Magdalena Ramada Sarasola",
        title: {
            en: "PhD Global InsurTech Innovation Leader - Senior Director at WTW",
            tr: "Global InsurTech İnovasyon Lideri – Kıdemli Direktör, WTW",
        },
        image: "/images/speakers/ramada.png",
        bio: {
            en: "Magdalena is a Senior Director and Global InsurTech Innovation Leader at WTW. With 20+ years in R&D and international strategy consulting, she focuses on digital transformation, blockchain, and analytics in insurance. A pioneer in applying emerging tech to risk transfer, she’s also a speaker, educator, and advocate for tech governance and women in tech.",
            tr: "Magdalena, WTW’de Kıdemli Direktör ve Global InsurTech İnovasyon Lideri olarak görev yapmaktadır. 20 yılı aşkın Ar-Ge ve uluslararası strateji danışmanlığı deneyimiyle sigortada dijital dönüşüm, blokzincir ve veri analitiği konularına odaklanmaktadır. Risk transferinde yeni teknolojilerin uygulanmasında öncü olan Magdalena, aynı zamanda konuşmacı, eğitimci ve teknoloji yönetişimi ile kadınların teknoloji alanındaki temsilinin destekçilerindendir. ",
        },
    },
    {
        id: 10,
        name: "Yavuz Ölken",
        title: {
            en: "Member of Non-Life Executive Board, TSB & CEO, AXA Türkiye",
            tr: "TSB Hayat Dışı İcra Kurulu Üyesi & AXA Türkiye CEO'su",
        },
        image: "/images/speakers/yavuz_olken.png",
        bio: {
            en: " ",
            tr: " ",
        },
    },
    {
        id: 13,
        name: "Hassan El-Shabrawishi",
        title: {
            en: "AXA International Markets, CEO",
            tr: "AXA Uluslararası Pazarlar CEO'su",
        },
        image: "/images/speakers/hassan.png",
        bio: {
            en: "",
            tr: "",
        },
    },
    {
        id: 16,
        name: "Çağrı Akpınar",
        title: {
            en: "Assistant General Manager Türkiye Sigorta",
            tr: "Genel Müdür Yardımcısı, Türkiye Sigorta",
        },
        image: "/images/speakers/cagri-akpinar.png",
        bio: {
            en: `
             `,
            tr: `
        2003 yılında Marmara Üniversitesi Bankacılık ve Sigortacılık Yüksek Okulu’ndan mezun olan Sayın Çağrı Akpınar, 2007 yılında Marmara Üniversitesi’nde Bankacılık ve Sigortacılık bölümünde yüksek lisansını bitirmiştir. Çalışma hayatına 2007 yılında Aviva Sigorta Kurumsal Satış Müdürlüğü’nde Satış Danışmanı olarak başlayan Akpınar, sonrasında 2009-2017 yılları arasında Güneş Sigorta Oto Dışı Sigortaları Teknik Müdürlüğü’nde Müdür Yardımcısı, 2017-2019 yılları arasında Halk Sigorta Oto Dışı Sigortaları Teknik Müdürlüğü’nde Direktör olarak görev almıştır. 2019 yılında Marsh Sigorta ve Reasürans Brokerliği’nde Kıdemli Müdür olarak çalışan Sayın Akpınar, Aralık 2019 tarihinde Türkiye Sigorta’da Oto Dışı Sigortalar Direktörü olarak görev yapmaya başlamıştır. Sayın Akpınar, 6 Eylül 2023 tarihi itibarıyla Türkiye Sigorta Teknik Genel Müdür Yardımcılığı görevine atanmıştır. Sayın Akpınar aynı zamanda; Turk P&I Sigorta Yönetim Kurulu Üyesi olarak görevine devam etmektedir. 
        `,
        },
    },
    {
        id: 5,
        name: "Aysun Yıldız",
        title: {
            en: "PhD (Assistant Secretary General, TSB)",
            tr: "Genel Sekreter Yardımcısı, Türkiye Sigorta Birliği (TSB) ",
        },
        image: "/images/speakers/aysun-yildiz.png",
        bio: {
            en: `
        Aysun Yıldız Özer earned her BA in International Relations from Middle East Technical University (METU) and pursued specialized training in pension funds at Boston University. She holds a master’s degree in European Economic Integration from the UK and a PhD from Essex Business School.
She began her career as an Assistant Specialist at the Insurance Directorate of the Turkish Treasury and later served as a Senior Expert in departments responsible for bilateral finance and the management of EU funds.
From 2012 to 2015, she led the Marketing Department at Ziraat Private Pension and Life Insurance Company. Since 2015, she has been serving as the Assistant Secretary General of the Insurance Association of Türkiye.
        `,
            tr: `
           Orta Doğu Teknik Üniversitesi (ODTÜ) Uluslararası İlişkiler Bölümü’nden mezun olan Aysun Yıldız Özer, Boston Üniversitesi’nde emeklilik fonları üzerine uzmanlık eğitimi almıştır. Avrupa Ekonomik Entegrasyonu alanında Birleşik Krallık’ta yüksek lisans, Essex Business School’da ise doktora derecesi elde etmiştir. 

Kariyerine T.C. Hazine Müsteşarlığı Sigortacılık Genel Müdürlüğü’nde Uzman Yardımcısı olarak başlayan Yıldız, daha sonra ikili finansman ve AB fonlarının yönetimiyle ilgili birimlerde Kıdemli Uzman olarak görev yapmıştır. 2012–2015 yılları arasında Ziraat Hayat ve Emeklilik A.Ş.’de Pazarlama Müdürü olarak görev almıştır. 2015 yılından bu yana Türkiye Sigorta Birliği’nde Genel Sekreter Yardımcısı olarak görevine devam etmektedir. `,
        },
    },
    {
        id: 12,
        name: "Matti Leppala",
        title: {
            en: "Secretary General/CEO of PensionsEurope",
            tr: "Genel Sekreter / CEO, PensionsEurope",
        },
        image: "/images/speakers/matti.png",
        bio: {
            en: `
        Matti Leppälä has served as Secretary General/CEO of PensionsEurope since 2011. He has held key roles in EIOPA and the European Commission and chaired the World Pension Alliance. Previously, he worked at The Finnish Pension Alliance TELA and began his career at Finland’s Ministry of Justice. He holds an LLM and an Executive MBA in Insurance and Financial Services. `,
            tr: `
Matti Leppälä, 2011 yılından bu yana PensionsEurope’un Genel Sekreteri ve CEO’su olarak görev yapmaktadır. Avrupa Sigorta ve Mesleki Emeklilik Otoritesi (EIOPA) ile Avrupa Komisyonu’nda önemli görevler üstlenmiş, ayrıca Dünya Emeklilik Birliği’nin (World Pension Alliance) başkanlığını yürütmüştür. Daha önce Finlandiya Emeklilik Birliği TELA’da görev almış, kariyerine ise Finlandiya Adalet Bakanlığı’nda başlamıştır. Hukuk yüksek lisans derecesine ve Sigortacılık ile Finansal Hizmetler alanında Executive MBA derecesine sahiptir.             `,
        },
    },
    {
        id: 4,
        name: "Matt Singleton",
        title: {
            en: "Proposition Manager CUO L&H Reinsurance Swiss Re",
            tr: "Hayat ve Sağlık Reasüransı Risk Değerlendirme Ofisi, Ürün ve Çözüm Yöneticisi – Swiss Re",
        },
        image: "/images/speakers/matt.png",
        bio: {
            en: ` Matt is the Propositions manager in Swiss Re Life & Health's Chief Underwriting Office and is an ageing specialist. He holds an MSc in Gerontology from the Centre for Research on Ageing at The University of Southampton and has in-depth experience of the research, strategy, product development and effective targeting of later-life solutions. 
Matt is also a qualified marketer with more than 25 years' experience in the financial services industry. `,
            tr: `Matt Singleton, Swiss Re’nin Hayat ve Sağlık Reasüransı Risk Değerlendirme Ofisi’nde Ürün ve Çözüm Yöneticisi olarak görev yapmaktadır. Aynı zamanda yaşlanma alanında uzmanlaşmıştır. Southampton Üniversitesi Yaşlanma Araştırmaları Merkezi’nden Gerontoloji alanında yüksek lisans derecesine sahiptir. Yaşlı nüfusa yönelik çözümlerin araştırma, strateji, ürün geliştirme ve etkin hedefleme süreçlerinde derinlemesine deneyime sahiptir. 
</br>
Matt, ayrıca pazarlama alanında yetkin bir uzmandır ve finansal hizmetler sektöründe 25 yılı aşkın bir tecrübeye sahiptir.  `,
        },
    },
];

export interface SponsorCategory {
    category: {
        en: string;
        tr: string;
    };
    sponsors: { name: string; logo: string, width: number, height: number }[];
}

interface LocalizedSponsorData {
    tr: SponsorCategory[];
    en: SponsorCategory[];
}

export const sponsorData: LocalizedSponsorData = {
    tr: [
        {
            category: {
                en: "Platinum Sponsor",
                tr: "Platin Sponsor",
            },
            sponsors: [
                { name: "Türkiye Sigorta", logo: "/images/brands/ts_logo.png", width: 260, height: 35 },
            ],
        },
        {
            category: {
                en: "Gold Sponsor",
                tr: "Altın Sponsor",
            },
            sponsors: [
                { name: "Axa", logo: "/images/brands/axa.png", width: 130, height: 67 },
                { name: "Guy Carpenter", logo: "/images/brands/guy.png", width: 160, height: 67 },
                { name: "TSPB", logo: "/images/brands/tspb.png", width: 160, height: 67 },
                { name: "Sigorta Bilgi ve Gözetim Merkezi", logo: "/images/brands/sigorta_bilgi.png", width: 160, height: 67 },
            ],
        },
        {
            category: {
                en: "Silver Sponsor",
                tr: "Gümüş Sponsor",
            },
            sponsors: [
                { name: "Benefit Global", logo: "/images/brands/benefit.png", width: 130, height: 67 },
                { name: "Gallagher Re", logo: "/images/brands/galla_new.svg", width: 130, height: 67 },
                { name: "Güvence", logo: "/images/brands/guvence.png", width: 125, height: 10 },
                { name: "Tahkim", logo: "/images/brands/tahkim-logo.png", width: 125, height: 40 },
                { name: "TMT", logo: "/images/brands/tmt-logo.png", width: 125, height: 40 },
            ],
        },
        {
            category: {
                en: "Support Sponsor",
                tr: "Destek Sponsoru",
            },
            sponsors: [
                { name: "AM Best", logo: "/images/brands/ambest.png", width: 100, height: 67 },
                { name: "C Consulting S.p.A.", logo: "/images/brands/logicc.png", width: 100, height: 100 },
                { name: "Garanti BBVA", logo: "/images/brands/garanti_bbva.png", width: 100, height: 100 },
                { name: "Insurtech Hub", logo: "/images/brands/insurtech-logo.png", width: 100, height: 100 },
                { name: "Remed Assistance", logo: "/images/brands/remed_logo.png", width: 100, height: 100 },
                { name: "PwC", logo: "/images/brands/pwc_logo.png", width: 100, height: 100 },
                { name: "Segem", logo: "/images/brands/segem.png", width: 100, height: 100 },
                { name: "SFS", logo: "/images/brands/sfs.JPG", width: 100, height: 100 },
                { name: "URS – Ultimate Risk Solutions", logo: "/images/brands/urs.png", width: 100, height: 100 },

            ],
        },
        {
            category: {
                en: "Gala Dinner Sponsor",
                tr: "Gala Yemeği Sponsoru",
            },
            sponsors: [
                { name: "Agito", logo: "/images/brands/agito_logo.png", width: 125, height: 50 },
            ],
        },
        {
            category: {
                en: "Media Sponsor",
                tr: "Medya Sponsoru",
            },
            sponsors: [
                { name: "Xprimm", logo: "/images/brands/primm.png", width: 145, height: 35 },
            ],
        },
    ],
    en: [
        {
            category: {
                en: "Platinum Sponsor",
                tr: "Platin Sponsor",
            },
            sponsors: [
                { name: "Türkiye Sigorta", logo: "/images/brands/ts_logo.png", width: 260, height: 35 },
            ],
        },
        {
            category: {
                en: "Gold Sponsor",
                tr: "Altın Sponsor",
            },
            sponsors: [
                { name: "Axa", logo: "/images/brands/axa.png", width: 130, height: 67 },
                { name: "Guy Carpenter", logo: "/images/brands/guy.png", width: 160, height: 67 },
                { name: "TSPB", logo: "/images/brands/tspb.png", width: 160, height: 67 },
                { name: "Sigorta Bilgi ve Gözetim Merkezi", logo: "/images/brands/sigorta_bilgi.png", width: 160, height: 67 },
            ],
        },
        {
            category: {
                en: "Silver Sponsor",
                tr: "Gümüş Sponsor",
            },
            sponsors: [
                { name: "Benefit Global", logo: "/images/brands/benefit.png", width: 130, height: 67 },
                { name: "Gallagher Re", logo: "/images/brands/galla_new.svg", width: 130, height: 67 },
                { name: "Güvence", logo: "/images/brands/guvence.png", width: 125, height: 10 },
                { name: "Tahkim", logo: "/images/brands/tahkim-logo.png", width: 125, height: 40 },
                { name: "TMT", logo: "/images/brands/tmt-logo.png", width: 125, height: 40 },
            ],
        },
        {
            category: {
                en: "Support Sponsor",
                tr: "Destek Sponsoru",
            },
            sponsors: [
                { name: "AM Best", logo: "/images/brands/ambest.png", width: 100, height: 67 },
                { name: "C Consulting S.p.A.", logo: "/images/brands/logicc.png", width: 100, height: 100 },
                { name: "Garanti BBVA", logo: "/images/brands/garanti_bbva.png", width: 100, height: 100 },
                { name: "Insurtech Hub", logo: "/images/brands/insurtech-logo.png", width: 100, height: 100 },
                { name: "Remed Assistance", logo: "/images/brands/remed_logo.png", width: 100, height: 100 },
                { name: "PwC", logo: "/images/brands/pwc.png", width: 100, height: 100 },
                { name: "Segem", logo: "/images/brands/segem.png", width: 100, height: 100 },
                { name: "SFS", logo: "/images/brands/sfs.JPG", width: 100, height: 100 },
                { name: "URS – Ultimate Risk Solutions", logo: "/images/brands/urs.png", width: 100, height: 100 },

            ],
        },
        {
            category: {
                en: "Gala Dinner Sponsor",
                tr: "Gala Yemeği Sponsoru",
            },
            sponsors: [
                { name: "Agito", logo: "/images/brands/agito_logo.png", width: 125, height: 50 },
            ],
        },
        {
            category: {
                en: "Media Sponsor",
                tr: "Medya Sponsoru",
            },
            sponsors: [
                { name: "Xprimm", logo: "/images/brands/primm.png", width: 145, height: 35 },
            ],
        },
    ],
};

export interface AgendaItem {
    time: string;
    title: string;
    speaker?: string;
    sessionType?: 'morning' | 'afternoon';
    content?: string;
    href?: string;

}

export interface AgendaDay {
    day: number;
    title: string;
    items: AgendaItem[];
}

interface LocalizedAgendaData {
    tr: AgendaDay[];
    en: AgendaDay[];
}

export const agendaData: LocalizedAgendaData = {
    tr: [
        {
            day: 1,
            title: "Gün 1",
            items: [
                {
                    time: "08.30 - 09.30",
                    title: "Kayıt & Kahvaltı",
                },
                {
                    time: "09.30 - 09.45",
                    title: "Açılış ve Hoş Geldiniz Konuşmaları, Uğur GÜLEN (Başkan, Türkiye Sigorta Birliği - TSB) ",
                },
                {
                    time: "09.45 - 10.00",
                    title: "Davut MENTEŞ (Başkan, SEDDK)",
                },
                {
                    time: "10.00 - 10.15",
                    title: "Mehmet ŞİMŞEK (Hazine ve Maliye Bakanı) (Teyit Bekleniyor)",
                },
                {
                    time: "10.15 - 10.45",
                    title: "Kahve Molası",
                },
                {
                    time: "10.45 - 11.00",
                    title: "Ana Tema Konuşmacısı",
                    content: `
                    <p>Önemli Dijital Eğilimler ve Sigorta Sektörünü Etkileme Biçimleri  </p>
                    <p><strong>Thea Utoft Høj Jensen</strong> (Genel Direktör, Insurance Europe)</p>
                    `
                },
                {
                    time: "11.00 - 12.15",
                    title: "OTURUM 1",
                    content: `
                      <p>Sigorta Sektöründe Dijital Dönüşüm: 

Yeni Teknolojilerin Etkileri, Üretken Yapay Zekâ ve Sigortacıların Karşılaştığı Zorluklar </p>
      <p><strong>Moderatör:</strong> Özgür Obalı (Genel Sekreter, TSB)</p>
      <p>Konuşmacılar:</p>
      <ul>
        <li>Sachin Sahni (Yardımcı Direktör, S&P Global Ratings)</li>
         <li>Talar Gül (PwC Türkiye Finansal Hizmetler Lideri)</li>
        <li>Levent Tuzun (Avrupa İmar ve Kalkınma Bankası II. Başkanı & Üçlü Komisyon Üyesi) </li>
        <li>Alexandru Ciuncan (Başkan, Romanya Sigorta ve Reasürans Şirketleri Birliği – UNSAR) </li>
       </ul>
                    `
                },
                {
                    time: "12.15 - 13.45",
                    title: "Öğle Yemeği",
                },
                {
                    time: "13.45-14.15",
                    title: "Motivasyon Konuşması",
                    content: `
                    <p>Sigortacılıkta Dijital Dönüşüm ve Yapay Zekâ: Yenilik ve Etkinin Güçlü Yolculuğu</p>
                    <p><strong>Magdalena Ramada Sarasola,</strong> (Global InsurTech İnovasyon Lideri – Kıdemli Direktör, WTW) </p>
                    `
                },
                {
                    time: "14.15 - 14.45",
                    title: "İkinci Ana Tema Konuşmacısı",
                    content: `
                     
                        <p>Hayat dışı sigortacılıkta operasyon, fiyatlama ve risk değerlendirmesinin şekillenmesinde gelişmiş teknolojiler, otomasyon ve yapay zekânın rolü: zorluklar ve fırsatlar</p>
                      <p><strong>Çağrı Akpınar</strong> (Genel Müdür Yardımcısı, Türkiye Sigorta) </p>
                    `
                },
                {
                    time: "14.45 - 15.15",
                    title: "Kahve Molası"
                },
                {
                    time: "15.15 - 15.30",
                    title: "OTURUM 2 ",
                    content: `
                     <p><strong>Avrupa ve Türkiye'de Sigortacılığın Dijital Geleceği Üzerine Bir Diyalog:</strong></p>
                      <p>İnovasyon, Regülasyon ve Sigorta Ekosistemleri Arası İş Birliği </p>
                      <ul>
                        <li><strong>Yavuz Ölken</strong> (TSB Hayat Dışı Yönetim Komitesi Üyesi & CEO, AXA Türkiye) </li>
                        <li><strong>Hassan El-Shabrawishi</strong> (AXA Uluslararası Pazarlar, CEO)</li>
                      </ul>
                    `
                },
                {
                    time: "15.30 - 16.15",
                    title: "OTURUM 3",
                    content: `
                      <p>Dijital Dönüşüm, Hayat ve Sağlık Sigortacılığında Yeni Bir Dönem mi Başlatıyor?</p>
                      <p>Yapay Zekâ Çağında Tasarruf Açığını Kapatmak: Uzun Ömür ve Yaşlanan Toplum Konusunun Ele Alınması </p>
                      <p><strong>Moderatör:</strong> Aysun Yıldız, PhD (Genel Sekreter Yardımcısı, TSB) </p>
                      <p><strong>Konuşmacılar:</strong></p>
                      <ul>
                        <li>Matti Leppala (Genel Sekreter/CEO, PensionsEurope)</li>
                        <li>Matt Singleton (Hayat ve Sağlık Reasüransı Ürün ve Çözüm Yöneticisi, Swiss Re)</li>
                      </ul>
                    `
                },
                {
                    time: "16.15 - 17.00",
                    title: "Insurtech Bakış Açısıyla Dijitalleşme: Fırsatlar ve Zorluklar",
                    content: ` 
                    <p><strong>Konuşmacılar:</strong></p>
                    <ul>
                      <li>Onursal Polat - SFS Stratejik Fonksiyonel Sistemler Genel Müdürü</li>
                      <li>Mutlu Uğursal – Agito CEO</li>
                      <li>RS Otomotiv Grubu Yönetim Kurulu Üyesi Bilal Türkmen</li>
                    </ul>
                  `
                },
                {
                    time: "17.00 - 17.15",
                    title: "Kapanış Konuşması", 
                },
                {
                    time: "18.00 - 12.00",
                    title: "Smart-I Ödülleri",
                    content: `
                   <a  target="_blank" href="https://smartiawards.com/">Smart-i Ödülleri</a>
                    `
                },
            ],
        },
        {
            day: 2,
            title: "Gün 2",
            items: [
                {
                    time: "",
                    title: "Program detayları için tıklayınız",
                    href: "https://www.iucevents.com/international-insurance-summit"
                },
            ],
        },
    ],
    en: [
        {
            day: 1,
            title: "Day 1",
            items: [
                {
                    time: "08.30 - 09.30",
                    title: "Registration & Breakfast",
                },
                {
                    time: "09.30 - 09.45",
                    title: "Opening Remarks & Welcome Speech, Uğur GÜLEN (Chairman, TSB)  ",
                },
                {
                    time: "09.45 - 10.00",
                    title: "Davut MENTEŞ (Chairman, IPRSA)",
                },
                {
                    time: "10.00 - 10.15",
                    title: "Mehmet ŞİMŞEK (Minister of Treasury and Finance) (TBC)",
                },
                {
                    time: "10.15 - 10.45",
                    title: "Coffee Break",
                },
                {
                    time: "10.45 - 11.00",
                    title: "Keynote Speaker",
                    content: `
                <p>Key Digital Trends and the Way They Impact the Insurance Sector</p>
                <p><strong>Thea Utoft Høj Jensen</strong> (Director General, Insurance Europe)</p>
                `
                },
                {
                    time: "11.00 - 12.15",
                    title: "SESSION 1",
                    content: `
                  <p>Digital Transformation in the Insurance Sector: Impacts of Emerging Technologies, Generative AI, and the Challenges Facing Insurers</p>
  <p><strong>Moderator:</strong> Özgür Obalı (Secretary General, TSB)</p>
  <p>Speakers:</p>
  <ul>
        <li>Sachin Sahni (Associate Director, S&P Global Ratings)</li>
         <li>Talar Gül (PwC Türkiye Financial Services Leader)</li>
        <li>Levent Tuzun (Principal II at EBRD & Fellow at the Trilateral Commission)</li>
        <li>Alexandru Ciuncan (President & General Manager, The National Union of Insurance and Reinsurance Companies of Romania - UNSAR)</li>
   </ul>
                `
                },
                {
                    time: "12.15 - 13.45",
                    title: "Lunch",
                },
                {
                    time: "13.45-14.15",
                    title: "Motivational Speaker",
                    content: `
                <p>Digital Transformation and AI in Insurance: A Tour de Force of Innovation and Impact </p>
                    <p><strong>Magdalena Ramada Sarasola,</strong> (PhD Global InsurTech Innovation Leader - Senior Director at WTW)   </p>
                `
                },
                {
                    time: "14.15 - 14.45",
                    title: "Second Keynote Speaker",
                    content: `
                
                    <p> The role of advanced technologies, automation, and AI in reshaping operations, pricing and underwriting in non-life insurance: challenges and opportunities </p>
                      <p><strong>Çağrı Akpınar</strong> (Assistant General Manager Türkiye Sigorta)</p>
                `
                },
                {
                    time: "14.45 - 15.15",
                    title: "Coffee Break"
                },
                {
                    time: "15.15 - 15.30",
                    title: "SESSION 2",
                    content: `
                  <p><strong>A Dialogue on the Digital Future of Insurers in Europe and Türkiye:</strong></p>
                  <p>Exploring Innovation, Regulation, and Collaboration Across Insurance Ecosystems</p>
                  <ul>
                    <li><strong>Yavuz Ölken</strong> (Member of Non-Life Executive Board, TSB & CEO, AXA Türkiye)</li>
                        <li><strong>Hassan El-Shabrawishi</strong> (AXA International Markets, CEO)</li>
                  </ul>

                `
                },
                {
                    time: "15.30 - 16.15",
                    title: "SESSION 3",
                    content: `
                  <p> Is Digital Transformation Reshaping the Landscape for Life & Health Insurers? </p>
                  <p>Closing the Savings Gap in the Age of AI: Addressing Longevity and an Aging Society</p>
                  <p><strong>Moderator:</strong> Aysun Yıldız, PhD (Assistant Secretary General, TSB)</p>
                  <p><strong>Speakers:</strong></p>
                  <ul>
                    <li>Matti Leppala (Secretary General/CEO of PensionsEurope)</li>
                        <li>Matt Singleton (Proposition Manager CUO L&H Reinsurance Swiss Re)</li>
                  </ul>
                `
                }, 
                {
                    time: "16.15 - 17.00",
                    title: "Digitalization from Insurtech Perspective: Opportunities and Challenges",
                    content: ` 
                    <p><strong>Speakers:</strong></p>
                    <ul>
                      <li>Onursal Polat - General Manager of Strategic Functional Systems, SFS</li>
                      <li>Mutlu Uğursal – CEO, Agito</li>
                      <li>Bilal Türkmen - Member of the Management Board of RS Otomotiv Grubu</li>
                    </ul>
                  `
                },
                {
                    time: "17.00 - 17.15",
                    title: "Closing Remarks", 
                },
                {
                    time: "18.00 - 12.00",
                    title: "Smart-I Awards",
                    content: `
                   <a  target="_blank" href="https://smartiawards.com/">Smart-i Awards</a>
                    `
                },

            ],
        },
        {
            day: 2,
            title: "Day 2",
            items: [
                {
                    time: "",
                    title: "Click for program details",
                    href: "https://www.iucevents.com/international-insurance-summit"
                },
            ],
        },
    ],
};

interface FAQItem {
    question: {
        en: string;
        tr: string;
    };
    answer: {
        en: string;
        tr: string;
    };
}

interface LocalizedFAQData {
    tr: FAQItem[];
    en: FAQItem[];
}

export const faqData: LocalizedFAQData = {
    tr: [
        {
            question: {
                en: "What is the purpose of the summit? ",
                tr: "Zirvenin amacı nedir? ",
            },
            answer: {
                en: `
                <p>
                The purpose of the International Insurance Summit is to bring together global leaders, experts, and decision-makers from the insurance ecosystem to explore the future of the industry. With a focus on innovation and sustainability, the summit aims to provide a platform for sharing insights, discussing key trends, and fostering cross-border collaboration on the digital transformation of insurance. 
                </p>
                
                `,
                tr: `
                <p>
Uluslararası Sigorta Zirvesi’nin amacı, sigorta ekosisteminden küresel liderleri, uzmanları ve karar vericileri bir araya getirerek sektörün geleceğini keşfetmektir. İnovasyon ve sürdürülebilirlik odağında düzenlenen zirve, sigortacılığın dijital dönüşümüne ilişkin bilgi paylaşımına, temel eğilimlerin tartışılmasına ve sınır ötesi iş birliklerinin geliştirilmesine zemin hazırlamayı hedeflemektedir.                 </p>
                
                `,
            },
        },
        {
            question: {
                en: "What are the benefits, and who is it for? ",
                tr: "Katılımcılar için faydaları nelerdir ve kimler katılabilir? ",
            },
            answer: {
                en: `
                <p>
                The summit offers participants the opportunity to: 
                </p>
                <ul> 
                    <li>Gain insights into the latest technologies and global developments in the insurance sector</li>
                    <li>Network with international thought leaders, executives, and policymakers</li>
                    <li>Join expert-led sessions on AI, data analytics, and digital transformation</li>
                    <li>Explore future strategies for innovation and sustainability</li>
                </ul>
                <p>
                The event is ideal for insurance professionals, technology providers, regulators, investors, academics, and anyone shaping or studying the future of the insurance industry. 
              </p>
                `,
                tr: `
                <p>
                Zirveye katılanlar; 
                </p>
                <ul> 
                    <li>Sigorta sektöründeki en son teknolojiler ve küresel gelişmeler hakkında bilgi edinebilir,</li>
                    <li>Uluslararası kanaat önderleri, üst düzey yöneticiler ve politika yapıcılarla ağ kurma fırsatı yakalayabilir, </li>
                    <li>Yapay zekâ, veri analitiği ve dijital dönüşüm konularında uzmanların oturumlarına katılabilir, </li>
                    <li>İnovasyon ve sürdürülebilirlik alanında gelecek stratejilerini keşfedebilirler. </li>
                </ul>
                <p>
Etkinlik; sigorta profesyonelleri, teknoloji sağlayıcıları, düzenleyici kurumlar, yatırımcılar, akademisyenler ve sektörün geleceğini şekillendiren ya da bu alanda çalışmalar yürüten herkes için uygundur.               </p>
                `,
            },
        },
        {
            question: {
                en: "How will the tickets be delivered? ",
                tr: "Biletler nasıl teslim edilecek? ",
            },
            answer: {
                en: `
                <p>
         All tickets will be delivered electronically. Once registration is complete, you will receive a confirmation email with your digital ticket and QR code. You can present the QR code at the venue for fast and easy entry. Printed badges will be provided at the registration desk upon arrival. 
                </p>
                `,
                tr: `
                <p>
Tüm biletler elektronik olarak iletilecektir. Kayıt işleminizi tamamladıktan sonra, dijital biletinizin ve QR kodunuzun yer aldığı bir onay e-postası alacaksınız. Hızlı ve kolay giriş için etkinlik alanında bu QR kodu göstermeniz yeterlidir. Kayıt masasında adınıza basılmış yaka kartı teslim edilecektir.                 </p>
                `,
            },
        },
    ],
    en: [
        {
            question: {
                en: "What is the purpose of the summit? ",
                tr: "Zirvenin amacı nedir? ",
            },
            answer: {
                en: `
        <p>
        The purpose of the International Insurance Summit is to bring together global leaders, experts, and decision-makers from the insurance ecosystem to explore the future of the industry. With a focus on innovation and sustainability, the summit aims to provide a platform for sharing insights, discussing key trends, and fostering cross-border collaboration on the digital transformation of insurance. 
        </p>
        
                `,
                tr: `
                <p>
                Uluslararası Sigorta Zirvesi'nin amacı, sigorta ekosisteminden küresel liderleri, uzmanları ve karar vericileri bir araya getirerek sektörün geleceğini keşfetmektir. İnovasyon ve sürdürülebilirlik odaklı zirve, içgörüleri paylaşmak, temel eğilimleri tartışmak ve sigortacılığın dijital dönüşümü konusunda sınır ötesi işbirliğini teşvik etmek için bir platform sağlamayı amaçlamaktadır. 
                </p>
                
                `,
            },
        },
        {
            question: {
                en: "What are the benefits, and who is it for? ",
                tr: "Faydaları nelerdir ve kimler içindir? ",
            },
            answer: {
                en: `
        <p>
        The summit offers participants the opportunity to: 
        </p>
        <ul> 
            <li>Gain insights into the latest technologies and global developments in the insurance sector</li>
            <li>Network with international thought leaders, executives, and policymakers</li>
            <li>Join expert-led sessions on AI, data analytics, and digital transformation</li>
            <li>Explore future strategies for innovation and sustainability</li>
        </ul>
        <p>
        The event is ideal for insurance professionals, technology providers, regulators, investors, academics, and anyone shaping or studying the future of the insurance industry. 
      </p>
                `,
                tr: `
                <p>
                Zirve, katılımcılara şu fırsatları sunmaktadır: 
                </p>
                <ul> 
                    <li>Sigorta sektöründeki en son teknolojiler ve küresel gelişmeler hakkında bilgi edinme</li>
                    <li>Uluslararası düşünce liderleri, yöneticiler ve politika yapıcılarla ağ kurma</li>
                    <li>Yapay zeka, veri analitiği ve dijital dönüşüm konularında uzman liderliğindeki oturumlara katılma</li>
                    <li>İnovasyon ve sürdürülebilirlik için gelecekteki stratejileri keşfetme</li>
                </ul>
                <p>
                Etkinlik, sigorta profesyonelleri, teknoloji sağlayıcıları, düzenleyiciler, yatırımcılar, akademisyenler ve sigorta sektörünün geleceğini şekillendiren veya inceleyen herkes için idealdir. 
              </p>
                `,
            },
        },
        {
            question: {
                en: "How will the tickets be delivered? ",
                tr: "Biletler nasıl teslim edilecek? ",
            },
            answer: {
                en: `
        <p>
 All tickets will be delivered electronically. Once registration is complete, you will receive a confirmation email with your digital ticket and QR code. You can present the QR code at the venue for fast and easy entry. Printed badges will be provided at the registration desk upon arrival. 
        </p>
                `,
                tr: `
                <p>
         Tüm biletler elektronik olarak teslim edilecektir. Kayıt tamamlandıktan sonra, dijital biletiniz ve QR kodunuzu içeren bir onay e-postası alacaksınız. Hızlı ve kolay giriş için QR kodunu etkinlik alanında ibraz edebilirsiniz. Basılı yaka kartları varışta kayıt masasından temin edilecektir. 
                </p>
                `,
            },
        },
    ],
};

interface ArticleContent {
    en: {
        titlePart1: string;
        titlePart2: string;
        titlePart3: string;
        paragraph1: string;
        paragraph2: string;
    };
    tr: {
        titlePart1: string;
        titlePart2: string;
        titlePart3: string;
        paragraph1: string;
        paragraph2: string;
    };
}

export const ArticleData: ArticleContent = {
    en: {
        titlePart1: "What",
        titlePart2: "Awaits You at the 2025",
        titlePart3: "International Insurance Summit?",
        paragraph1: "The International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.",
        paragraph2: `This year’s theme, "<strong>Digital Futures: How Technology is Transforming the Insurance Sector</strong>," will delve into key topics such as artificial intelligence, data analytics, digital transformation, and emerging technologies. The summit will provide a dynamic platform to exchange insights, explore global trends, and foster collaboration on sustainable solutions for the evolving insurance landscape.`,
    },
    tr: {
        titlePart1: "2025",
        titlePart2: "Uluslararası Sigorta Zirvesi'nde Sizi Neler",
        titlePart3: "Bekliyor?",
        paragraph1: "Uluslararası Sigorta Zirvesi, sigorta sektörünün geleceğini şekillendiren küresel liderleri, uzmanları ve karar vericileri bir araya getiriyor.",
        paragraph2: `Bu yılın teması olan "<strong>Dijital Gelecek: Teknoloji Sigorta Sektörünü Nasıl Değiştiriyor?</strong>" , yapay zeka, veri analitiği, dijital dönüşüm ve yeni teknolojiler gibi kritik başlıkları ele alacak. 
 

Zirve, gelişen sigortacılık ekosisteminde sürdürülebilir çözümler için bilgi alışverişine, küresel trendlerin keşfine ve iş birliğine zemin hazırlayan dinamik bir platform sunacak. `,
    },
};

interface GuestFormContent {
    en: {
        title: string;
        fullNamePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        companyPlaceholder: string;
        titlePlaceholder: string;
        participationTypePlaceholder: string;
        kvkkConsentText: string;
        commercialMessageConsentText: string;
        quotaNote: string;
        sendButton: string;
        fullNameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        phoneRequired: string;
        phoneLength: string;
        companyRequired: string;
        titleRequired: string;
        participationTypeRequired: string;
        kvkkConsentRequired: string;
        commercialMessageConsentRequired: string;
        errorTitle: string;
        errorMessageEmailJS: string;
        errorMessageGeneral: string;
        successTitle: string;
        successMessage: string;
    };
    tr: {
        title: string;
        fullNamePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        companyPlaceholder: string;
        titlePlaceholder: string;
        participationTypePlaceholder: string;
        kvkkConsentText: string;
        commercialMessageConsentText: string;
        quotaNote: string;
        sendButton: string;
        fullNameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        phoneRequired: string;
        phoneLength: string;
        companyRequired: string;
        titleRequired: string;
        participationTypeRequired: string;
        kvkkConsentRequired: string;
        commercialMessageConsentRequired: string;
        errorTitle: string;
        errorMessageEmailJS: string;
        errorMessageGeneral: string;
        successTitle: string;
        successMessage: string;
    };
}

export const GuestFormData: GuestFormContent = {
    en: {
        title: "Guest Registration Form",
        fullNamePlaceholder: "Full Name",
        emailPlaceholder: "Email",
        phonePlaceholder: "Phone",
        companyPlaceholder: "Company",
        titlePlaceholder: "Title",
        participationTypePlaceholder: "Participation Type",
        kvkkConsentText: "I have read and accept the KVKK Privacy Notice.",
        commercialMessageConsentText: "I have read and agree to the Commercial Electronic Message Text.",
        quotaNote: "Our capacity is limited; a confirmation email will be sent to you after approval.",
        sendButton: "Send",
        fullNameRequired: "Full Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        phoneRequired: "Phone number is required",
        phoneLength: "Phone number must be 11 digits long",
        companyRequired: "Company name is required",
        titleRequired: "Title is required",
        participationTypeRequired: "Participation Type is required",
        kvkkConsentRequired: "You must accept the KVKK Privacy Notice",
        commercialMessageConsentRequired: "You must accept the Commercial Electronic Message Text",
        errorTitle: "Error!",
        errorMessageEmailJS: "An error occurred while submitting the form: EmailJS credentials missing.",
        errorMessageGeneral: "An unexpected error occurred.",
        successTitle: "Success!",
        successMessage: "Form Sent Successfully",
    },
    tr: {
        title: "Ziyaretçi Kayıt Formu ",
        fullNamePlaceholder: "Ad Soyad",
        emailPlaceholder: "E-posta",
        phonePlaceholder: "Telefon",
        companyPlaceholder: "Şirket",
        titlePlaceholder: "Ünvan",
        participationTypePlaceholder: "Katılım Türü",
        kvkkConsentText: "KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum.",
        commercialMessageConsentText: "Ticari Elektronik İleti Metni'ni okudum ve onaylıyorum.",
        quotaNote: "Kontenjanlarımız sınırlı olup, onay sonrası konfirmasyon maili tarafınıza iletilecektir.",
        sendButton: "Gönder",
        fullNameRequired: "Tam ad gerekli",
        emailRequired: "E-posta gerekli",
        emailInvalid: "Lütfen geçerli bir e-posta adresi girin",
        phoneRequired: "Telefon numarası gerekli",
        phoneLength: "Telefon numarası 11 hane uzunluğunda olmalı",
        companyRequired: "Şirket adı gerekli",
        titleRequired: "Unvan gerekli",
        participationTypeRequired: "Katılım türü gerekli",
        kvkkConsentRequired: "KVKK Aydınlatma Metni'ni kabul etmelisiniz",
        commercialMessageConsentRequired: "Ticari Elektronik İleti Metni'ni kabul etmelisiniz",
        errorTitle: "Hata!",
        errorMessageEmailJS: "Form gönderilirken bir hata oluştu: EmailJS kimlik bilgileri eksik.",
        errorMessageGeneral: "Beklenmeyen bir hata oluştu.",
        successTitle: "Başarılı!",
        successMessage: "Form Başarıyla Gönderildi",
    },
};