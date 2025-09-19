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
    day:1|2,
    title: {
        en: string;
        tr: string;
    };
    bio: {
        en: string;
        tr: string;
    };
}

export const speakers:Speaker[] = [
    {
        id: 1,
        day:1,
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
        day:1,
        name: "Davut Menteş",
        title: {
            en: "President, IPRSA",
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
        day:1,
        title: {
            en: "President, Insurance Association of Türkiye",
            tr: "Başkan, Türkiye Sigorta Birliği",
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
        id: 9,
        name: "Birant Yıldız",
        day:1,
        title: {
            en: "Master of Ceremony",
            tr: "Sunucu",
        },
        image: "/images/speakers/birant-yildiz.png",
        bio: {
            en: `
Birant Yıldız graduated from Anadolu University, Faculty of Communication Sciences, Department of Journalism in 2000. He has been working as a journalist for 25 years, 20 of which have been dedicated to insurance media. Between 2016 and 2018, his columns on insurance and private pensions were published in Milliyet newspaper. After working for 13 years at Sigortacı Gazetesi, he has been serving for the past seven years as Partner and Editor-in-Chief at Sigorta Dünyası magazine.

<strong>Books:</strong>
<ul className="list-disc! list-inside!">
        <li>The Doyen of Insurance, David Kohen / Five Generations of an Insurance Family</li>
        <li>A Life Lived This Way / İlham Saner</li>
        <li>Are You Among Those We Couldn’t Insure? / Servet Gürkan</li>
</ul>
He also has two books currently in preparation. 
            `,
            tr: `
 Anadolu Üniversitesi İletişim Bilimleri Fakültesi Basın Yayın Bölümünden 2000 yılında mezun oldu. 20 yılı sigorta basınında olmak üzere 25 yıldır gazetecilik yapıyor. Milliyet gazetesinde 2016-2018 yılları arasında sigortacılık ve bireysel emeklilikle ilgili köşe yazıları yayınlandı. Sigortacı Gazetesi'nde 13 yıl çalıştıktan sonra yedi yıldır Sigorta Dünyası'nda partner ve yayın yönetmeni olarak yer alıyor.
<strong>Kitapları:</strong>
<ul className="list-disc! list-inside!">
        <li>“Sigortacılığın Duayeni David Kohen / Sigortacı Bir Ailenin Beş Nesillik Serüveni”</li>
        <li>“Bir Hayat Böyle Geçti / İlham Saner”</li>
        <li>Sigortalayamadıklarımızdan mısınız? / Servet Gürkan</li>
</ul>
İki kitabı da hazırlık aşamasında.


 
            `,
        },
    },
    {
        id: 15,
        day:1,
        name: "Thea Utoft Høj Jensen",
        title: {
            en: "General Director, Insurance Europe",
            tr: "Genel Müdür, Insurance Europe",
        },
        image: "/images/speakers/theaa.png",
        bio: {
            en: `
         Thea Utoft Høj Jensen is director general of Insurance Europe, the European insurance and reinsurance federation, and secretary general of the Global Federation of Insurance Associations(GFIA).With extensive experience in EU affairs, she previously served as senior managing director at FTI Consulting and financial counsellor for the Denmark to the EU.Thea holds a Master of Arts in Law from the University of Copenhagen.She is a Danish national, and calls Brussels her home since 2016. 
        `,
            tr: `
Thea Utoft Høj Jensen, Avrupa sigorta ve reasürans sektörünü temsil eden Insurance Europe’un Genel Direktörü ve Küresel Sigorta Birlikleri Federasyonu’nun(GFIA) Genel Sekreteridir.Avrupa Birliği nezdindeki görevleri konusunda geniş deneyime sahip olan Jensen, daha önce FTI Consulting’de Kıdemli Yönetici Direktör ve Danimarka’nın AB nezdindeki Maliye Müşaviri olarak görev yapmıştır.Kopenhag Üniversitesi'nden Hukuk Yüksek Lisans derecesine sahiptir. Danimarka vatandaşı olan Jensen, 2016 yılından bu yana Brüksel’de ikamet etmektedir.             `,
        },
    },
    {
        id: 3,
        day:1,
        name: "Özgür Obalı",
        title: {
            en: " Secretary General, Insurance Association of Türkiye ",
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
        day:1,
        title: {
            en: "Associate Director, S&P Global Ratings",
            tr: "Yardımcı Direktör, S&P Global Ratings",
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
        day:1,
        title: {
            en: "Financial Services Leader, PwC Turkey ",
            tr: "Türkiye Finansal Hizmetler Lideri PwC",
        },
        image: "/images/speakers/talan-gull.png",
        bio: {
            en: `
            A graduate of Notre Dame De Sion French High School and the Business Administration Department of Concordia University in Canada, Talar Gül joined PwC Turkey in 1991. 

She was admitted to partnership in 2001 and has been serving as the Financial Services Leader of PwC Turkey since 2021. 

Specialized in BRSA regulations, International Financial Reporting Standards (IFRS), Turkish Financial Reporting Standards (TFRS), SEDDK and CMB regulations, Gül has extensive audit and advisory experience in the banking and insurance sectors. In addition, she has taken part in the audits of holding companies, international groups, consumer products, and technology companies. 

Gül also worked at PwC’s Paris office in the field of Financial Services. She has played an active role in technical training, independent audit association initiatives, and regulatory projects with supervisory authorities on areas such as capital adequacy, consolidated supervision, and accounting changes. 

She has provided advisory support to the Insurance Association of Turkey, reinsurance companies, and the Treasury in the IFRS implementation project. Gül has also served as a member of TÜSİAD’s insurance subcommittee and the Solvency II committee. 
            
            `,
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
        day:1,
        title: {
            en: "Vice President, European Bank for Reconstruction and Development (EBRD) / Member, Trilateral Commission ",
            tr: "II. Başkan, Avrupa İmar ve Kalkınma Bankası (EBRD) / Üye, Üçlü Komisyon ",
        },
        image: "/images/speakers/tuz.png",
        bio: {
            en: `
        Levent Tuzun is a Principal at the European Bank for Reconstruction and Development (EBRD). He focuses on investments and policy dialogue with clients and policymakers in financial services. Previously, he worked at J.P. Morgan in New York. Levent completed the Master of Public Policy degree at the University of Oxford as a Weidenfeld-Chevening Scholar. He graduated from Yale University with undergraduate degrees in Economics and International Studies. Levent is a David Rockefeller Fellow at the Trilateral Commission and a Millennium Fellow at the Atlantic Council. 
            `,
            tr: `
 Levent Tuzun, Avrupa İmar ve Kalkınma Bankası’nda (EBRD) Kıdemli Uzmandır. Finansal hizmetler alanında müşteriler ve politika yapıcılarla yatırımlar ve politika diyaloğu üzerine çalışmaktadır. Daha önce New York’ta J.P. Morgan’da görev yapmıştır. Levent, Weidenfeld-Chevening bursiyeri olarak Oxford Üniversitesi’nde Kamu Politikası Yüksek Lisansını tamamlamıştır. Lisans eğitimini Yale Üniversitesi’nde Ekonomi ve Uluslararası İlişkiler alanlarında yapmıştır. Levent, Üçlü Komisyon’da David Rockefeller Bursiyeri ve Atlantik Konseyi’nde Millennium Fellow’dur.
            `,
        },
    },
    {
        id: 8,
        name: "Alexandru CIUNCAN",
        day:1,
        title: {
            en: "President & General Manager, The National Association of Insurance and Reinsurance Companies in Romania (UNSAR)  ",
            tr: "Başkan & Genel Müdür, Romanya Sigorta ve Reasürans Şirketleri Birliği (UNSAR) ",
        },
        image: "/images/speakers/alexandru.png",
        bio: {
            en: "With over 2 decades in insurance and private pensions across CEE, Alexandru Ciuncan is currently President and General Manager of UNSAR and a Board Member at ISF. He formerly contributed to EIOPA’s IRSG and OPSG, and led initiatives at APPA and XPRIMM. He holds certifications in project and agile management, and he is  Henley Business School graduate in Board Practice and Directorship.",
            tr: "Orta ve Doğu Avrupa bölgesinde sigorta ve özel emeklilik alanında 20 yılı aşkın deneyime sahip olan Alexandru Ciuncan, şu anda UNSAR’ın Başkanlığı ve Genel Müdürlüğünü yürütmektedir, ayrıca ISF Yönetim Kurulu üyesidir. Daha önce EIOPA’nın IRSG ve OPSG komitelerinde görev almış, APPA ve XPRIMM’de çeşitli girişimlere liderlik etmiştir. Proje ve çevik yönetim sertifikalarına sahip olan Ciuncan, Henley İşletme Okulu’ndan Yönetim Kurulu Uygulamaları ve Yöneticiliği alanından mezundur. ",
        },
    },
    {
        id: 11,
        name: "Magdalena Ramada Sarasola",
        day:1,
        title: {
            en: "Global InsurTech Innovation Leader / Senior Director, WTW",
            tr: "Global InsurTech İnovasyon Lideri / Kıdemli Direktör, WTW ",
        },
        image: "/images/speakers/ramada.png",
        bio: {
            en: "Magdalena is a Senior Director and Global InsurTech Innovation Leader at WTW. With 20+ years in R&D and international strategy consulting, she focuses on digital transformation, blockchain, and analytics in insurance. A pioneer in applying emerging tech to risk transfer, she’s also a speaker, educator, and advocate for tech governance and women in tech.",
            tr: "Magdalena, WTW’de Kıdemli Direktör ve Global InsurTech İnovasyon Lideri olarak görev yapmaktadır. 20 yılı aşkın Ar-Ge ve uluslararası strateji danışmanlığı deneyimiyle sigortada dijital dönüşüm, blokzincir ve veri analitiği konularına odaklanmaktadır. Risk transferinde yeni teknolojilerin uygulanmasında öncü olan Magdalena, aynı zamanda konuşmacı, eğitimci ve teknoloji yönetişimi ile kadınların teknoloji alanındaki temsilinin destekçilerindendir. ",
        },
    },
    {
        id: 16,
        day:1,
        name: "Melike Nur Çınar",
        title: {
            en: "Assistant General Manager, Türkiye Sigorta ",
            tr: "Oto, Tarım Sigortaları ve Aktüerya Genel Müdür Yardımcısı, Türkiye Sigorta ",
        },
        image: "/images/speakers/melike.png",
        bio: {
            en: `
            Graduated from Department of Economics of Gazi University in 2006, Ms. Melike Nur Çınar has completed her postgraduate study in Business Management MBA program of Yıldız Technical University between 2021 and 2022. Ms. Çınar, who started her career as an expert at Eureko Sigorta in 2007, worked as Manager at Ak Sigorta between 2015 and 2017 and as Auto Accidents Unit Manager at Halk Sigorta between 2017 and 2019. Following her transfer to Güneş Sigorta in 2019, she worked as Director in Auto Insurances and Actuary Department and she continued in the same position at Türkiye Sigorta and Türkiye Hayat Emeklilik after the merger. Ms. Çınar was assigned as Assistant General Manager for Auto and Agriculture Insurances and Actuary at Türkiye Sigorta and as Assistant General Manager for Actuary at Türkiye Hayat Emeklilik as of 2 November 2023.
             `,
            tr: `
 Gazi Üniversitesi İktisat Bölümü’nden 2006 yılında mezun olan Sayın Melike Nur Çınar, Yüksek Lisansını 2021-2022 yılları arasında Yıldız Teknik Üniversitesi İşletme Yönetimi MBA programında tamamlamıştır. Kariyerine 2007 yılında Eureko Sigorta’da uzman olarak başlayan Sayın Çınar, 2015-2017 yılları arasında Ak Sigorta’da yönetici, 2017-2019 yılları arasında Halk Sigorta’da Oto Kaza Birim Müdürü olarak görev almıştır. 2019 yılında Güneş Sigorta’ya geçen Sayın Melike Nur Çınar, Oto Sigortaları ve Aktüerya Direktörlüğü’nde direktör olarak görev almış, birleşmenin ardından Türkiye Sigorta ve Türkiye Hayat Emeklilik’de aynı pozisyonda görevini sürdürmüştür. Sayın Çınar, 2 Kasım 2023 itibarıyla Türkiye Sigorta Oto, Tarım Sigortaları ve Aktüerya Genel Müdür Yardımcılığı ve Türkiye Hayat Emeklilik Aktüerya Genel Müdür Yardımcılığı görevine atanmıştır.

            `,
        },
    },
    {
        id: 10,
        name: "Yavuz Ölken",
        day:1,
        title: {
            en: "Member of Non-Life Executive Board, TSB / CEO, AXA Türkiye ",
            tr: "Hayat Dışı Yönetim Komitesi Üyesi, TSB / CEO, AXA Türkiye  ",
        },
        image: "/images/speakers/yavuz_olken.png",
        bio: {
            en: `
            Yavuz Ölken, born in 1966 in Izmir, graduated from Istanbul Technical University as a Civil Engineer. He began his insurance career in 1991 at Halk Sigorta and held managerial roles at Inter Sigorta and Aviva Sigorta. In 2002, he joined AXA Sigorta as Assistant General Manager. Over the years, he led various departments including IT, Reinsurance, and Health. On April 1, 2018, he was appointed CEO of AXA Sigorta. 
            `,
            tr: `
            1966 İzmir doğumlu Yavuz Ölken, İTÜ İnşaat Mühendisliği mezunudur. Sigortacılık kariyerine 1991’de Halk Sigorta’da başlamış, ardından İnter Sigorta ve Aviva Sigorta’da teknik yöneticilik yapmıştır. 2002’de AXA Sigorta’da Genel Müdür Yardımcısı olmuş; farklı birimlerden sorumlu görevler üstlenmiştir. 1 Nisan 2018'de AXA Sigorta CEO’su olarak atanmıştır. 
            `,
        },
    },
    {
        id: 13,
        name: "Hassan El-Shabrawishi",
        day:1,
        title: {
            en: "AXA International Markets, CEO",
            tr: "AXA Uluslararası Pazarlar CEO'su",
        },
        image: "/images/speakers/hassan.png",
        bio: {
            en: `
            Hassan El-Shabrawishi is the CEO of AXA International Markets and a member of the AXA Group Management Committee. He previously served as CEO of AXA Africa Holding, AXA Next, and AXA Egypt. He led high-level projects at the IFC–World Bank and has extensive experience in insurance, innovation, and emerging markets. He is fluent in English, French, Spanish, and Arabic. 
            
            `,
            tr: `
            Hassan El-Shabrawishi, AXA International Markets CEO’su ve AXA Group Yönetim Komitesi üyesidir. Daha önce AXA Africa Holding, AXA Next, AXA Egypt gibi birimlerde CEO olarak görev yapmıştır. IFC Dünya Bankası'nda üst düzey projeler yürütmüş; sigorta, inovasyon ve gelişmekte olan pazarlarda geniş tecrübeye sahiptir. İngilizce, Fransızca, İspanyolca ve Arapça bilmektedir. 
            `,
        },
    },
    {
        id: 5,
        name: "Aysun Yıldız",
        day:1,
        title: {
            en: "Assistant Secretary General, Insurance Association of Türkiye",
            tr: "Genel Sekreter Yardımcısı, Türkiye Sigorta Birliği ",
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
        day:1,
        title: {
            en: "Secretary General / CEO, PensionsEurope",
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
        day:1,
        title: {
            en: "Proposition Manager at CUO L&H Reinsurance, Swiss Re",
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
    {
        id: 17,
        name: "SERKAN AVCI ",
        day:1,
        title: {
            en: "CEO, Insurance Information and Monitoring Center",
            tr: "Merkez Müdürü & İcra Komitesi Başkanı, SBM ",
        },
        image: "/images/speakers/serkan.png",
        bio: {
            en: `
Mr. Serkan Avcı, a graduate of Ege University, Department of Computer Engineering, has held senior leadership roles in information technologies, infrastructure management, and digital transformation within the finance and insurance sectors. Following his executive experience at Aksigorta, Aviva, Groupama, and Gulf Sigorta, he was appointed as General Manager/CEO of the Insurance Information and Monitoring Center in 2022, a position he continues to hold. 
            `,
            tr: `
Ege Üniversitesi Bilgisayar Mühendisliği mezunu olan Sayın Serkan Avcı, finans ve sigorta sektörlerinde bilgi teknolojileri, altyapı yönetimi ve dijital dönüşüm alanlarında üst düzey görevlerde bulunmuştur. Aksigorta, Aviva, Groupama ve Gulf Sigorta’daki yöneticilik tecrübelerinin ardından 2022 yılında Sigorta Bilgi ve Gözetim Merkezi’ne Merkez Müdürü olarak atanmış olup, görevini halen sürdürmektedir. 
            `,
        },
    },
    {
        id: 19,
        day:1,
        name: "Onursal Polat",
        title: {
            en: "General Manager, SFS Software & Consultancy CO.",
            tr: "Genel Müdür, SFS Software & Consultancy CO.",
        },
        image: "/images/speakers/onursal.png",
        bio: {
            en: ` 
            With over 30 years of experience in the finance industry, Onursal Polat has specialized in information technologies, project management, and senior executive roles across the finance, banking, and insurance sectors. 
Polat joined SFS in 2002 and, since November 2023, has been serving as the General Manager of SFS Strategic Functional Systems. He stands out with his leadership approach centered on strategic management, operational excellence, financial sustainability, and customer satisfaction. 
            
            `,
            tr: `
30 yılı aşkın finans alanında deneyime sahip olan Onursal Polat, finans, bankacılık ve sigortacılık sektörlerinde bilgi teknolojileri, proje yönetimi ve üst düzey yöneticilik alanlarında uzmanlaşmıştır.  

2002 yılında SFS’ye katılan Polat, Kasım 2023’ten bu yana SFS Stratejik Fonksiyonel Sistemler Genel Müdürü olarak görev yapmaktadır. Polat, stratejik yönetim, operasyonel mükemmeliyet, finansal sürdürülebilirlik ve müşteri memnuniyeti odaklı liderlik anlayışıyla öne çıkmaktadır.         `,
        },
    },
    {
        id: 19,
        day:1,
        name: "Mutlu Uğursal",
        title: {
            en: "CEO, Agito",
            tr: "CEO, Agito",
        },
        image: "/images/speakers/mutlubey.png",
        bio: {
            en: `
Mutlu Uğursal, born in 1971, graduated in Computer Engineering from ODTÜ METU. He began his career in 1993, working at Bayındır Hayat Sigorta, Tepe Technology and IBM, where he contributed to multinational projects. In 2006, he co-founded Bt-Grup, which merged with Agito in 2013. After leadership roles, he became Agito CEO in 2019. Uğursal has been pivotal in Turkey’s insurtech ecosystem, co-founding İTÜ Insurtech Hub and mentoring startups.            `,
            tr: `
1971 doğumlu Mutlu Uğursal, ODTÜ Bilgisayar Mühendisliği mezunudur. 1993’te başladığı kariyerinde Bayındır Hayat Sigorta, Tepe Teknoloji ve IBM’de görev aldı. 2006’da kurucu ortağı olduğu Bt-Grup, 2013’te Agito ile birleşti. 2019’dan bu yana Agito CEO’su olan Uğursal, Türkiye insurtech ekosistemine yön veren isimlerden biridir; İTÜ Insurtech Hub’un kuruluşuna katkı sağlamış, girişimlere mentor ve yatırımcı olarak destek vermektedir.            `,
        },
    },
    {
        id: 18,
        name: "Bilal Türkmen",
        day:1,
        title: {
            en: "CEO, RS Holding Destech Technology Group",
            tr: "CEO, RS Holding Destech Teknoloji Grubu ",
        },
        image: "/images/speakers/bilal-turkmen.png",
        bio: {
            en: `
 Bilal Türkmen completed his undergraduate studies in Business Administration at Akdeniz University and earned his Executive MBA from Sabancı University. He began his career in 2010 at Atheneum Partners in Berlin and stepped into the insurance sector in 2012 with Aksigorta. Between 2012 and 2018, he served as an Expert at the Insurance General Directorate of the Undersecretariat of Treasury, where he worked on insurance regulations and took part in the coordination of DASK and TARSİM. 

From 2018 to 2019, he held the position of Deputy Secretary General of DASK at Eureko Sigorta. In 2019, he joined Güneş Sigorta as Group Manager responsible for Strategy and Project Management, where he led the Integration Management Office in the merger of six state-owned insurance and pension companies. 

Between 2020 and 2023, Türkmen served as Executive Vice President responsible for Strategy, Marketing, and Digital at Türkiye Sigorta and Türkiye Hayat Emeklilik. In March 2024, he joined RS Automotive Group as Executive Vice President of Technology and Member of the Board of Directors. Today, he continues his career as CEO of RS Holding’s Technology Group and as Co-Founder & General Manager of SigortaAcentesi.com. 
            `,
            tr: `
Bilal Türkmen, lisans eğitimini Akdeniz Üniversitesi İşletme bölümünde tamamlamış, yüksek lisansını Sabancı Üniversitesi Executive MBA programında yapmıştır. İş hayatına 2010’da Berlin’de Atheneum Partners’ta başlamış; 2012 yılında Aksigorta ile sigortacılık kariyerine adım atmıştır. 2012–2018 yılları arasında Hazine Müsteşarlığı Sigortacılık Genel Müdürlüğü’nde Uzman olarak sigorta düzenlemeleri üzerinde çalışmış, DASK ve TARSİM koordinasyonunda yer almıştır. 2018–2019’da Eureko Sigorta’da DASK Genel Sekreter Yardımcılığı görevinde bulunmuş; 2019 yılında Strateji ve Proje Yönetiminden sorumlu Grup Müdürü olarak Güneş Sigorta’ya katılmıştır. Kamu bankalarına ait altı sigorta ve emeklilik şirketinin birleşmesinde Entegrasyon Yönetim Ofisi’ne liderlik etmiştir. 2020–2023 yılları arasında Türkiye Sigorta ve Türkiye Hayat Emeklilik’te Strateji, Pazarlama ve Dijital’den sorumlu Genel Müdür Yardımcısı olarak görev yapan Türkmen, Mart 2024’te RS Otomotiv Grubu’na Teknolojiden Sorumlu Genel Müdür Yardımcısı ve Yönetim Kurulu Üyesi olarak katılmış olup, bugün RS Holding’in Teknoloji Grubu CEO’luğu ve SigortaAcentesi.com’un kurucu ortak/genel müdürü görevlerini sürdürmektedir.             `,
        },
    },
    // Day 2
    {
        id: 170,
        day:2,
        name: "Emine Feray SEZGİN",
        title: {
            en: "Vice President, IPRSA",
            tr: "Başkan Yardımcısı, SEDDK ",
        },
        image: "/images/speakers/emine.png",
        bio: {
            en: `
            Born in Ankara in 1982, Emine Feray Sezgin holds degrees in Mathematics and Business, and completed graduate studies in Actuarial Science at the University of Kent with honors. She began her career at the Turkish Treasury in 2009 as Assistant Actuary and became an Actuary in 2012. Since 2023, she has served as Vice President of the Insurance and Private Pension Regulation and Supervision Authority (SEDDK). She is fluent in English. 
         `,
            tr: `
            1982 yılında Ankara’da doğan Emine Feray SEZGİN, lisans eğitimini 2005 yılında Orta Doğu Teknik Üniversitesi Matematik Bölümünde ve ikinci lisans eğitimini ise 2008 yılında Anadolu Üniversitesi İşletme Bölümünde tamamlamıştır. Ayrıca 2006 yılında başladığı ODTÜ İktisat Bölümünde “İktisat Teorisi” üzerine yan dal programını bitirmiştir. 2005-2006 yılları arasında Ankara Üniversitesi İktisat Bölümü Yüksek Lisans Programının ders aşamasını başarıyla tamamlamıştır.  

Aralık 2009’da (mülga) T.C. Hazine Müsteşarlığı (güncel adı ile T.C. Hazine ve Maliye Bakanlığı) Sigorta Denetleme Aktüer Yardımcısı olarak göreve başlamış, 2012 yılında Kurulun yeterlilik sınavını kazanarak Sigorta Denetleme Aktüeri olarak atanmıştır. 2016-2018 yılları arasında Canterbury, İngiltere’de bulunan University of Kent’te Uygulamalı Aktüeryal Bilimler Yüksek Lisans programını şeref öğrencisi olarak tamamlamıştır.  

Ayrıca İngiltere Aktüerler Derneği (IFoA) üyesi olup, 15 aktüerya sınavının 11 tanesini tamamlamıştır. Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumunun (SEDDK) kurulması ile birlikte 2020 yılından itibaren Hayat ve Sağlık Sigortaları Düzenleme Dairesi’nde Daire Başkanı olarak görev yapmış olup, 22.11.2023 tarihinden itibaren SEDDK Başkan Yardımcısı olarak görevini yürütmektedir.  

Aktüerler Sicili’ne 148 sicil numarası ile kayıtlı olan Sayın Emine Feray SEZGİN, evli ve bir çocuk sahibi olup, iyi derecede İngilizce bilmektedir. 
         `,
        },
    },
    {
        id: 20,
        name: "Ahmet Yaşar",
        day:2,
        title: {
            en: "Vice President, Insurance Association of Türkiye ",   
            tr: "Başkan Yardımcısı, Türkiye Sigorta Birliği",
        },
        image: "/images/speakers/ahmet-yasar.png",
        bio: {
            en: `
            Ahmet Yaşar was born in Adapazarı in 1968. He graduated from Gazi University, Department of International Economics in 1990.

He started his career in 1983 as a reporter, representative and local newspaper publisher while he was a student. In parallel with publishing during his university years, he entered the insurance industry in 1989 with Çağ Sigorta Agency. He worked at Merkez Sigorta in 1992, at Universal Sigorta in 1994, in 2000 at EGS Sigorta A.Ş. as Ankara and Adana Regional Manager. He worked HDI Sigorta as Deputy General Manager between 2003-2013, and worked at Sigortayeri Sigorta ve Reasürans Brokerliği A.Ş. between 2013-2015 as the founding General Manager.

Since 2015, he took part in the establishment of Quick Sigorta within the Maher Holding family. Since 2018, he has been in charge as General Manager and Board Member at Maher Holding, for Quick Sigorta and Corpus Sigorta companies. He has still been in charge as the President of Maher Holding Insurance Group and a Member of the Board of Directors in Group Companies.

As well as being Vise Chairman of  Executive Board at the Insurance Association of Turkey & Chairman of Non-Life Management Comittee and Vise Chairman of the Management Board of Insurance Arbitration Commitee, he has taken on responsibilities in all areas of the insurance market by continuing his civil society and professional solidarity activities in organizations such as TÜSİAD Insurance Group, Insurance Practitioners Association, GESID Ankara. 

Constitution of ephemera, materials and library / museum in respect of Insurance and insurance activities and collecting of permanent publication are among his hobies.
            `,
            tr:  `
            Ahmet Yaşar, 1968 yılında Adapazarı'nda doğdu. 1990 yılında Gazi Üniversitesi Uluslararası Ekonomi Bölümü'nden mezun oldu. 

Kariyerine 1983 yılında öğrenciyken muhabir, temsilci ve yerel gazete yayıncısı olarak başladı. Üniversite yıllarında yayıncılıkla paralel olarak, 1989 yılında Çağ Sigorta Acentesi ile sigorta sektörüne girdi. 1992 yılında Merkez Sigorta'da, 1994 yılında Universal Sigorta'da, 2000 yılında EGS Sigorta A.Ş.'de Ankara ve Adana Bölge Müdürü olarak çalıştı. 2003-2013 yılları arasında HDI Sigorta'da Genel Müdür Yardımcısı olarak çalıştı ve 2013-2015 yılları arasında Sigortayeri Sigorta ve Reasürans Brokerliği A.Ş.'de kurucu Genel Müdür olarak görev yaptı. 

2015 yılından itibaren Maher Holding bünyesinde Quick Sigorta'nın kuruluşunda görev almıştır. 2018 yılından itibaren Maher Holding'de Quick Sigorta ve Corpus Sigorta şirketlerinde Genel Müdür ve Yönetim Kurulu Üyesi olarak görev yapmaktadır. Halen Maher Holding Sigorta Grubu Başkanı ve Grup Şirketleri Yönetim Kurulu Üyesi olarak görevine devam etmektedir. 

Türkiye Sigortacılar Birliği Yönetim Kurulu Başkan Vekilliği, Hayat Dışı Yönetim Komitesi Başkanlığı ve Sigorta Tahkim Komitesi Yönetim Kurulu Başkan Vekilliği görevlerinin yanı sıra, TÜSİAD Sigorta Grubu, Sigorta Uygulayıcıları Derneği, GESID Ankara gibi kuruluşlarda sivil toplum ve mesleki dayanışma faaliyetlerini sürdürerek sigorta piyasasının tüm alanlarında sorumluluklar üstlenmiştir.  
            
            
            
            `
        },
    },
    {
        id: 26,
        day:2,
        name: "Fahri Altıngöz",
        title: {
            en: "President, Sigorta Tatbikatçıları Derneği  ",
            tr: "Başkan, Sigorta Tatbikatçıları Derneği",
        },
        image: "/images/speakers/fahri.png",
        bio: {
            en: `
Mr. Fahri Altıngöz has nearly 40 years of professional experience in the insurance sector. He has held executive positions in reinsurance, technical operations, claims, legal affairs, underwriting, and sales.

He served as the founding General Manager of TEB Sigorta A.Ş. (Zurich Insurance) and as Deputy General Manager at Aksigorta A.Ş., overseeing reinsurance, sales, technical operations, underwriting, and claims.

For almost 30 years, he taught as a lecturer at Istanbul University and Marmara University, contributed as an instructor at TSEV (Turkish Insurance Institute Foundation), and played a significant role in training many young professionals for the sector.

Mr. Fahri Altıngöz has provided consultancy services to insurance companies and led the Insurance Working Groups of TÜSİAD and YASED.

He has served as a Board Member of the Insurance, Reinsurance, and Pension Companies Association of Turkey and as a member of its Non-Life Insurance Committee.

Mr. Fahri Altıngöz currently serves as the President of the Association of Insurance Practitioners.

            `,
            tr: `
            Fahri Altıngöz, sigorta sektöründe 40 yıla yaklaşan profesyonel deneyime sahiptir. Reasürans, teknik, hasar, hukuk, underwriting ve satış alanlarında yöneticilik görevlerinde bulunmuştur. 

TEB Sigorta A.Ş. (Zurich Sigorta) ’nin kurucu Genel Müdürlüğü'nü yapmış, Aksigorta A.Ş.’de reasürans, satış, teknik, underwriting ve hasar fonksiyonlarında Genel Müdür Yardımcısı olarak görev yapmıştır. 

30 yıla yakın bir süre boyunca, kesintisiz olarak İstanbul Üniversitesi, Marmara Üniversitesi’nde  öğretim görevlisi olarak çalışmış, TSEV’de eğitimcilik yapmış ve birçok genç profesyonelin sektöre kazandırılmasına katkı sağlamıştır. 

Sigorta şirketlerine danışmanlık yapmış, TÜSİAD, YASED Sigortacılık Çalışma Grupları’na liderlik etmiştir.   

Türkiye Sigorta, Reasürans ve Emeklilik Şirketleri Birliği’nde Yönetim Kurulu Üyeliği ve hayat dışı yönetim komitesi üyeliği görevlerinde bulunmuştur. 

Halen, Sigorta Tatbikatçıları Derneği Başkanlığı görevini sürdürmektedir. 
            `
        },
    },
    {
        id: 22,
        day:2,
        name: "Charles Whitmore",
        title: {
            en: "President Global Clients, Guy Carpenter ",
            tr: "Global Müşteri İlişkileri Başkanı, Guy Carpenter",
        },
        image: "/images/speakers/charles.png",
        bio: {
            en: `
          “Charles Whitmore is President of Global Clients, responsible for the coordination across the firm and overall consistency of service to our largest Global clients. He has extensive experience in all property product lines, in particular pro rata treaty business. He is also the International lead for Guy Carpenter’s Public Sector Practice and is the Account Executive for a number of UK and European clients. 
 Charles joined C.T. Bowring Re (now part of Guy Carpenter) in 1991 in the Latin American and Caribbean Department.  In 2000 he moved to the International Department of Guy Carpenter's New York office, where he worked on a variety of International accounts (including UK, European, Retro and Caribbean business).  In 2003 he returned to the UK to focus on UK and European clients and was appointed President of Global Clients in November 2019.”

            `,
            tr: `
            Charles Whitmore, Global Müşteri İlişkileri Başkanı olarak, şirket genelinde koordinasyonu ve en büyük global müşterilerimize sunulan hizmetlerin genel tutarlılığını sağlamaktan sorumludur. Tüm Bina ürün gruplarında, özellikle de Trete üzerine geniş deneyime sahiptir. Ayrıca Guy Carpenter'ın Kamu Sektörü Uygulamaları bölümünün uluslararası sorumlusu ve birçok İngiliz ve Avrupalı müşterinin hesap yöneticisidir.  

 Charles, 1991 yılında C.T. Bowring Re'ye (şimdi Guy Carpenter'ın bir parçası) Latin Amerika ve Karayipler Departmanı'nda katıldı. 2000 yılında Guy Carpenter'ın New York ofisinin Uluslararası Departmanı'na geçti ve burada çeşitli uluslararası hesaplar (İngiltere, Avrupa, Retro ve Karayipler işleri dahil) üzerinde çalıştı.  2003 yılında Birleşik Krallık ve Avrupa müşterilerine odaklanmak üzere Birleşik Krallık'a geri döndü ve Kasım 2019'da Global Müşteri İlişkileri Başkanı olarak atandı. 
            
            `
        },
    },
    {
        id: 31,
        name: "Vasilis Katsipis",
        day:2,
        title: {
            en: "General Manager, Market Development, MENA South and Central Asia, A.M. Best Europe ",
            tr: "Genel Müdür, A.M. Best Europe",
        },
        image: "/images/speakers/vasilis.png",
        bio: {
            en: `
Vasilis Katsipis is based in Dubai and is SEO & General Manager, Market Development of AM Best for MENA, South & Central Asia.

He has been with AM Best since 2011, having joined the company in London as a managing senior financial analyst and growing to the position of general manager, analytics for EMEA. He has written several pieces focusing on insurance and regulation in Europe and the MENA region and has participated in international bodies focused on establishing global standards for insurance.

Prior to joining AM Best Vasilis was responsible for alternative distribution channels for GE Insurance Solutions. He has over 20 years of insurance and reinsurance experience, having focused on both the life and non-life sectors. He has held roles in high level operational and strategic positions. For most of his career, he has held international positions with either regional or global responsibilities.

Vasilis holds an MBA from University of Wales and a BSc in economics from Piraeus University.

            `,

            tr: `
            Vasilis Katsipis, Dubai'de ikamet etmekte olup AM Best'in MENA, Güney ve Orta Asya pazar geliştirme SEO ve genel müdürüdür. 

2011 yılından bu yana AM Best'te görev yapan Katsipis, Londra'da yönetici kıdemli finansal analist olarak şirkete katılmış ve EMEA analitik genel müdürü pozisyonuna yükselmiştir. Avrupa ve MENA bölgesindeki sigorta ve düzenlemelere odaklanan birçok makale yazmış ve sigorta için küresel standartlar oluşturmaya odaklanan uluslararası kuruluşlarda yer almıştır. 

AM Best'e katılmadan önce Vasilis, GE Insurance Solutions'ın alternatif dağıtım kanallarından sorumluydu. Hayat ve hayat dışı sektörlere odaklanarak 20 yılı aşkın sigorta ve reasürans deneyimine sahiptir. Üst düzey operasyonel ve stratejik pozisyonlarda görev almıştır. Kariyerinin çoğunda, bölgesel veya küresel sorumlulukları olan uluslararası pozisyonlarda çalışmıştır. 

Vasilis, Galler Üniversitesi'nden MBA ve Pire Üniversitesi'nden ekonomi alanında lisans derecesine sahiptir. 
            `
        },
    }, 
    {
        id: 32,
        name: "Neslihan Neciboğlu",
        day:2,
        title: {
            en: "General Director, Neova Sigorta",
            tr: "Genel Müdür, Neova Sigorta ",
        },
        image: "/images/speakers/neslihan.png",
        bio: {
            en: `
 Neslihan Neciboğlu is the Chief Executive Officer of Neova Participation Insurance, a role she has held since July 2022. She also serves as a Board Member of the Insurance Association of Türkiye.
She began her professional career in 2005 at Kuveyt Türk Participation Bank, where she held a number of senior positions, including Financial Analysis and Intelligence Manager, Corporate and Commercial Branch Sales and Marketing Manager, and Branch Manager. From 2013 onward, she took on several key roles in the bank’s risk management division, serving as Retail and SME Risk Monitoring Manager, Business Loans Risk Monitoring Manager, and ultimately, Risk Monitoring Group Manager.
Ms. Neciboğlu holds a degree in Business Administration from the Middle East Technical University and brings nearly two decades of experience in banking, risk management, finance, and insurance to her current leadership position.
 
            `,

            tr: `
            Neslihan Neciboğlu, Temmuz 2022'den bu yana Neova Katılım Sigorta'nın Genel Müdürü olarak ve ayrıca Türkiye Sigorta Birliği'nde Yönetim Kurulu Üyesi olarak görev almaktadır. 

Profesyonel kariyerine 2005 yılında Kuveyt Türk Katılım Bankası'nda başlayan Neciboğlu, Finansal Analiz ve İstihbarat Müdürü, Kurumsal ve Ticari Şube Satış ve Pazarlama Müdürü ve Şube Müdürü gibi birçok üst düzey pozisyonda görev almıştır. 2013 yılından itibaren bankanın risk yönetimi bölümünde çeşitli önemli görevlerde bulunmuş, Perakende ve KOBİ Risk İzleme Müdürü, İşletme Kredileri Risk İzleme Müdürü ve son olarak Risk İzleme Grup Müdürü olarak görev yapmıştır. Neciboğlu, Orta Doğu Teknik Üniversitesi İşletme Fakültesi mezunudur ve bankacılık, risk yönetimi, finans ve sigorta alanlarında yaklaşık yirmi yıllık deneyimiyle mevcut görevini sürdürmektedir. 
            
            `
        },
    },  
    {
        id: 31,
        day:2,
        name: "Stavros Dimopoulos",
        title: {
            en: "Vice President, European Federation of Loss Adjusting Experts (FUEDI)",
            tr: "Başkan Yardımcısı, Avrupa Hasar Eksperleri Federasyonu (FUEDI)",
        },
        image: "/images/speakers/stavros.png",
        bio: {
            en: `
Stavros is the FUEDI and immediate past President and now serves the association as the vice President. He is a FUEDI ELAE certified loss adjuster and a member of the Technical Chamber of Greece.
He graduated as a Topographer back in 1997 from the National Technical University of Athens, where he also gained his first Master in the very popular nowadays GPS (MSC). Shortly afterwards in 2000 he became the first Greek loss adjuster with a certified Insurance training having completed the Hellenic Insurance Institute annual course. Later on, he completed his Master in Business Administration (MBA) and couple of years later his 3rd master at the field of Cyber and Information Security (InfoSec).
Stavros is currently the General Manager of vrs experteam loss adjusters & surveyors.
He has a more than 20 years of experience in loss adjusting and has actively handled and/or supervised more than 10,000 claims of all types.
When not loss adjusting, Stavros is giving self-defense seminars being a two dan black belt holder and participates in motor racing.
 
            `,

            tr: `
            FUEDI'nin eski başkanıdır ve şu anda derneğin başkan yardımcısı olarak görev yapmaktadır. FUEDI ELAE sertifikalı hasar tespit uzmanı ve Yunanistan Teknik Odası üyesidir. 

1997 yılında Atina Ulusal Teknik Üniversitesi'nden topograf olarak mezun olmuş ve aynı üniversitede günümüzde çok popüler olan GPS (MSC) alanında ilk yüksek lisansını tamamlamıştır. Kısa bir süre sonra, 2000 yılında, Yunan Sigorta Enstitüsü'nün yıllık kursunu tamamlayarak, sertifikalı sigorta eğitimi almış ilk Yunan hasar eksperlerinden biri olmuştur. Daha sonra, İşletme Yüksek Lisansını (MBA) tamamlamış ve birkaç yıl sonra Siber ve Bilgi Güvenliği (InfoSec) alanında üçüncü yüksek lisansını tamamlamıştır. 

Stavros şu anda VRS experteam hasar eksperleri ve bilirkişilerinin Genel Müdürü'dür. 

Hasar eksperliği alanında 20 yılı aşkın deneyime sahip olan Stavros, 10.000'den fazla her türlü hasar talebini aktif olarak ele almış ve/veya denetlemiştir. 
            `
        },
    },
    {
        id: 21,
        day:2,
        name: "Arnaud R. Kopp",
        title: {
            en: "Senior Client Underwriter, Swiss Re ",
            tr: "P&C Türkiye Sorumlusu & Kıdemli Sigorta Uzmanı, Swiss Re ",
        },
        image: "/images/speakers/arnaud.png",
        bio: {
            en: `
          Arnaud Kopp is a senior underwriter at Swiss Re and market head for Property & Casualty business in Türkiye. He started his reinsurance career as a treaty casualty underwriter for the UK and Nordic markets and has since held several positions across Swiss Re’s Zurich office, including roles in underwriting,  client management and regional solutions for the Mediterranean markets.

Beyond his underwriting responsibilities, he is active in education and innovation. He teaches a course on digital transformation in insurance at Université Paris-Dauphine and has mentored early-stage startups through several accelerator programmes.

He studied insurance at Université Paris-Dauphine, management at Imperial College London, and law at the University of Strasbourg, the University of Exeter, and Cornell University.
 
            `,
            tr: `
            Swiss Re Arnaud Kopp, Swiss Re'de kıdemli sigorta uzmanı ve Türkiye'deki P&C market başkanıdır. Reasürans kariyerine İngiltere ve İskandinav pazarları için kaza sigortası uzmanı olarak başlamış ve o zamandan beri Swiss Re'nin Zürih ofisinde sigorta, müşteri yönetimi ve Akdeniz pazarları için bölgesel çözümler gibi çeşitli pozisyonlarda çalışmıştır. 

Sigorta sorumluluklarının yanı sıra, eğitim ve inovasyon alanlarında da aktiftir. Université Paris-Dauphine'de sigortacılıkta dijital dönüşüm üzerine ders vermektedir ve çeşitli hızlandırıcı programlar aracılığıyla erken aşamadaki girişimlere mentorluk yapmaktadır. 

Université Paris-Dauphine'de sigortacılık, Imperial College London'da yönetim ve Strasbourg Üniversitesi, Exeter Üniversitesi ve Cornell Üniversitesi'nde hukuk eğitimi almıştır.
            `
        },
    },
    {
        id: 33,
        name: "Kristian Mangold",
        day:2,
        title: {
            en: "Regional Director EMEA, Munich Re Parametric NatCat",
            tr: "EMEA Bölge Direktörü, Munich Re Parametric NatCat ",
        },
        image: "/images/speakers/mangold.png",
        bio: {
            en: `
                “Kristian Mangold is a seasoned expert in parametric insurance and structured reinsurance, currently leading the Parametric NatCat efforts for EMEA at Munich Re. He holds dual Master’s degree in International Business & Politics and International Management from Copenhagen Business School and Tsinghua University in Beijing.
                Kristian began his career in consulting before joining AXA in Paris, where he focused on climate risk solutions for corporates and developed agricultural insurance programmes across Africa and Asia. At Swiss Re, he worked on both prospective and retrospective structured reinsurance across Property & Casualty and Life & Health.
                At Munich Re, Kristian drives innovation in parametric natural catastrophe and climate solutions, working closely with corporate clients to enhance resilience and risk transfer strategies across the region.”
            `,
            tr: `
            
            Kristian Mangold, parametrik sigorta ve yapılandırılmış reasürans alanında deneyimli bir uzmandır ve şu anda Munich Re'de EMEA için Parametric NatCat çalışmalarını yönetmektedir. Kopenhag İşletme Okulu ve Pekin'deki Tsinghua Üniversitesi'nden Uluslararası İşletme ve Siyaset ile Uluslararası Yönetim alanlarında çift yüksek lisans derecesine sahiptir. 

Kristian, kariyerine danışmanlık alanında başlamış, ardından Paris'teki AXA'ya katılmış ve burada şirketler için iklim riski çözümleri üzerinde çalışmış, Afrika ve Asya'da tarım sigortası programları geliştirmiştir. Swiss Re'de, Mülkiyet ve Kaza ile Hayat ve Sağlık alanlarında hem ileriye dönük hem de geriye dönük yapılandırılmış reasürans üzerinde çalışmıştır. 

Munich Re'de Kristian, parametrik doğal afet ve iklim çözümlerinde inovasyonu teşvik etmekte, kurumsal müşterilerle yakın işbirliği içinde çalışarak bölgedeki dayanıklılık ve risk transferi stratejilerini geliştirmektedir. 
            `
        },
    },
    {
        id: 28,
        name: "Marc M. BÜKER",
        day:2,
        title: {
            en: "Board Member / Market Manager, SCOR ",
            tr: "Yönetim Kurulu Üyesi ve Güney Akdeniz, Kuzey Afrika ve Fransızca Konuşulan Afrika Bölgesi Pazar Müdürü, SCOR SE ",
        },
        image: "/images/speakers/marc.png",
        bio: {
            en: `
SCOR Group Board Member (since 2022) and Market Manager for Southern Mediterranean, North Africa and Francophone Africa (since 2011). Joined SCOR in 2002 and has experience in P&C underwriting over the Middle East and South African markets. In 1992, he was a pioneer by co-founding the first national private radio in Turkey and manager/shareholder of the first foreign radio group investment in Turkiye. Aside the business field, Marc is the chairman of the main Paris-based NGO acting on the Turkish-French bilateral relation and also chairman of the association regrouping all the alumni of Francophone schools of Turkiye.    
            `,
            tr: `
            2002 yılında SCOR'a katıldı ve Orta Doğu ve Güney Afrika pazarlarında P&C sigortacılığı alanında deneyime sahiptir. 1992 yılında, Türkiye'deki ilk ulusal özel radyoyu kurarak öncü oldu ve Türkiye'deki ilk yabancı radyo grubu yatırımının yöneticisi/hissedarı oldu. İş alanının yanı sıra, Marc, Türkiye-Fransa ikili ilişkilerinde faaliyet gösteren Paris merkezli ana STK'nın başkanı ve Türkiye'deki Frankofon okullarının tüm mezunlarını bir araya getiren derneğin başkanıdır. 
            `
        },
    },
    {
        id: 29,
        day:2,
        name: "María Luisa Álvarez",
        title: {
            en: " Head of Sustainability at the Solvency II Subdirectorate, Directorate General for Insurance and Pension Funds Spain",
            tr: "Sermaye Yeterliliği Sürdürülebilirlik Başkanı, Sigorta ve Emeklilik Fonları Genel Müdürlüğü, İspanya ",
        },
        image: "/images/speakers/maria.png",
        bio: {
            en: `
María Luisa Álvarez Barby has been Insurance Inspector for over 10 years. She has previously worked for 15 years in the private sector as a macroeconomic and strategy analyst at brokerage firms. She has been also working as head of unit in the Accounting and Audit Supervisor for more than 2 years. At the DGSFP, she heads the sustainability department, under the Solvency II Subdirectorate, and she is also an expert in the supervision of life insurance companies and financial conglomerates. She participates in several international groups on sustainability: EIOPA, IAIS, ASSAL... and has given sustainability conferences in numerous European and Latin American countries. She has been Project Leader in twinning projects with Georgia and Ukraine related to the harmonization of national regulations with Solvency II.            `,
            tr: `
            María Luisa Álvarez Barby, 10 yılı aşkın bir süredir Sigorta Müfettişi olarak görev yapmaktadır. Daha önce 15 yıl boyunca özel sektörde aracı kurumlarda makroekonomi ve strateji analisti olarak çalışmıştır. Ayrıca 2 yılı aşkın bir süredir Muhasebe ve Denetim Denetçisi biriminde birim başkanı olarak görev yapmaktadır. DGSFP'de Sermaye Yeterliliği Alt Müdürlüğü bünyesinde sürdürülebilirlik departmanının başındadır ve hayat sigortası şirketleri ile finansal holdinglerin denetiminde uzmandır. EIOPA, IAIS, ASSAL gibi sürdürülebilirlik konusunda çeşitli uluslararası gruplara katılmakta ve birçok Avrupa ve Latin Amerika ülkesinde sürdürülebilirlik konferansları vermektedir. Gürcistan ve Ukrayna ile Sermaye Yeterliliği ile ulusal düzenlemelerin uyumlaştırılmasına ilişkin eşleştirme projelerinde Proje Lideri olarak görev yapmıştır. 
            
            `
        },
    },
    {
        id: 25,
        day:2,
        name: "Daniela Ghetu",
        title: {
            en: "Editorial Director, XPRIMM",
            tr: "Yayın Direktörü, XPRIMM",
        },
        image: "/images/speakers/daneila.png",
        bio: {
            en: `
         Daniela Ghetu is Editorial Director at XPRIMM Insurance Publications, a position she has held since 1999. With over two decades of experience, she is recognized as one of the leading voices on the insurance and private pensions markets in Romania and the wider CEE & CIS region.
She coordinates the editorial policy of XPRIMM’s flagship publications, including the XPRIMM Insurance Report – CEE, SEE & CIS, country-specific reports, and thematic analyses on motor and property insurance. Her expertise also extends to developing industry media products, designing content for major international conferences, selecting speakers, and building strategic partnerships across markets.
An experienced public speaker and moderator, Daniela frequently delivers presentations on insurance and pensions-related topics and contributes articles and market analyses to both Romanian and international financial media, including ASFALISTIKI AGORA (Greece), REINSURANCE (UK), Business Standard (Romania), and PLANSPONSOR Europe.
Her specialties include corporate partnership development, publishing and editorial management, market analysis, and international consultancy.

            `,
            tr: `
            Daniela Ghetu, 1999 yılından bu yana XPRIMM Insurance Publications'ın Yayın Direktörü olarak görev yapmaktadır. Yirmi yılı aşkın deneyimi ile Romanya ve daha geniş CEE & CIS bölgesinde sigorta ve özel emeklilik piyasalarının önde gelen isimlerinden biri olarak tanınmaktadır. 

XPRIMM'in amiral gemisi yayınlarının editörlük politikasını koordine etmektedir. Bu yayınlar arasında XPRIMM Insurance Report – CEE, SEE & CIS, ülkeye özgü raporlar ve motorlu araç ve mülk sigortası ile ilgili tematik analizler bulunmaktadır. Uzmanlığı, sektör medya ürünlerinin geliştirilmesi, büyük uluslararası konferanslar için içerik tasarımı, konuşmacı seçimi ve pazarlar arasında stratejik ortaklıklar kurulması alanlarına da uzanmaktadır. 

Deneyimli bir konuşmacı ve moderatör olan Daniela, sigorta ve emeklilikle ilgili konularda sık sık sunumlar yapmakta ve ASFALISTIKI AGORA (Yunanistan), REINSURANCE (İngiltere), Business Standard (Romanya) ve PLANSPONSOR Europe gibi Romanya ve uluslararası finans medyasına makaleler ve piyasa analizleri yazmaktadır. 

Uzmanlık alanları arasında kurumsal ortaklık geliştirme, yayıncılık ve editoryal yönetim, piyasa analizi ve uluslararası danışmanlık bulunmaktadır. 
            `
        },
    },
    {
        id: 32,
        day:2,
        name: "Sinan Akkar",
        title: {
            en: "Director of Catastrophe Modeling and Data Analytics Department, T-Rupt",
            tr: "Afet Modelleme ve Veri Analitiği Departmanı Direktörü, T-Rupt ",
        },
        image: "/images/speakers/sinan-akkae.png",
        bio: {
            en: `
Sinan Akkar is the principal catastrophe modeler at T Rupt Technology Inc. He served as a full-time professor at the Middle East Technical University and Boğaziçi University between 2003-2021. Professor Akkar’s major fields of expertise are probabilistic earthquake hazard and risk analyses, and he was involved several national and international projects related to these topics. As such, Prof. Akkar acted as the coordinator of National Seismic Hazard Map of Türkiye, and he was involved as hazard expert and ground motion modeler in SSHAC Level 2 and 3 nuclear power plant seismic hazard projects in the US, Europe Türkiye and Kingdom of Saudi Arabia. Prof. Akkar also served as the principal investigator of Revision of the Earthquake Premiums for Turkish Catastrophe Insurance Pool (TCIP) and Insurance Association of Türkiye. He published more than 200 technical papers in the international peer reviewed journals and conference proceedings at international and national levels. Sinan Akkar is the co-author of an international earthquake engineering book published by Springer that is currently translated into Chinese. He is a member of the board of directors in International Earthquake Engineering Association, Turkish Earthquake Foundation and the editorial board member of Journal of Earthquake Engineering.
            `,

            tr: `
            
            2003-2021 yılları arasında Orta Doğu Teknik Üniversitesi ve Boğaziçi Üniversitesi'nde tam zamanlı profesör olarak görev yapmıştır. Prof. Akkar'ın başlıca uzmanlık alanları olasılıklı deprem tehlikesi ve risk analizleridir ve bu konularla ilgili birçok ulusal ve uluslararası projede yer almıştır. Prof. Akkar, Türkiye Ulusal Sismik Tehlike Haritası'nın koordinatörlüğünü yapmış ve ABD, Avrupa, Türkiye ve Suudi Arabistan'da SSHAC Seviye 2 ve 3 nükleer santral sismik tehlike projelerinde tehlike uzmanı ve zemin hareketi modelleyicisi olarak görev almıştır. Prof. Akkar ayrıca, Türkiye Afet Sigorta Havuzu (TCIP) ve Türkiye Sigorta Birliği için Deprem Primlerinin Revizyonu projesinin baş araştırmacısı olarak görev yapmıştır. Uluslararası ve ulusal düzeyde hakemli dergilerde ve konferans bildirilerinde 200'den fazla teknik makale yayınlamıştır. Sinan Akkar, Springer tarafından yayınlanan ve şu anda Çinceye çevrilen uluslararası bir deprem mühendisliği kitabının ortak yazarıdır. Uluslararası Deprem Mühendisliği Derneği ve Türk Deprem Vakfı'nın yönetim kurulu üyesi ve Journal of Earthquake Engineering dergisinin yayın kurulu üyesidir. 
            `
        },
    },
    {
        id: 26,
        day:2,
        name: "Dr Laurent Marescot",
        title: {
            en: "Senior Director, Moody’s Insurance Solutions ",
            tr: "Kıdemli Direktör, Moody’s Insurance Solutions",
        },
        image: "/images/speakers/laurent.png",
        bio: {
            en: `
 Dr Laurent Marescot is a senior catastrophe risk management expert at Moody’s Insurance Solutions, advising leading global and national re/insurers on natural catastrophe, agricultural, cyber, and terrorism risks. He also works with governmental and regulatory bodies, serving on the EIOPA Technical Expert Network on Catastrophe Risk.

Since joining RMS (now part of Moody’s) in 2008, Laurent has held key roles within the company, focusing on the EMEA and APAC regions. These include Head of Product Management for Climate & Weather Risk and Global Agricultural Risk, where he drove strategy for new catastrophe model development. More recently, he has concentrated on developing innovative solutions and expanding into new markets and segments across EMEA.

Before entering the industry, Laurent was a Research Associate and Lecturer in geophysics at ETH Zurich, managing international research programmes. As a regular speaker at leading industry conferences and an academic lecturer, he is recognised for his expertise in catastrophe modelling and the quantification of insurance risk.

Concise version
Dr Laurent Marescot, Senior Director at Moody’s Insurance Solutions, advises global and national re/insurers and regulatory bodies on natural catastrophe, agricultural, cyber, and terrorism risks. Recognised internationally for his expertise in catastrophe modelling, climate risk, and insurance risk quantification, he is a regular speaker at leading industry conferences and an academic lecturer.

            `,
            tr: `
            Moody’s Insurance Solutions’ın Kıdemli Direktörü Dr. Laurent Marescot, küresel ve ulusal reasürans şirketlerine ve düzenleyici kurumlara doğal afetler, tarım, siber ve terör riskleri konusunda danışmanlık hizmetleri vermektedir. Afet modelleme, iklim riski ve sigorta riski ölçümleme alanındaki uzmanlığıyla uluslararası alanda tanınan Marescot, önde gelen sektör konferanslarında düzenli olarak konuşmacı olarak yer almakta ve akademik dersler vermektedir. 
            `
        },
    }, 
    {
        id: 23,
        day:2,
        name: "Dario Schiller",
        title: {
            en: "Business Manager CEE, Ultimate Risk Solutions  ",
            tr: " İş Geliştirme Müdürü - Ultimate Risk Solutions",
        },
        image: "/images/speakers/dario.png",
        bio: {
            en: `
    After the graduation with full votes at the University of Trieste (Italy) in Economic Science with specialization in Statistics and Actuarial Mathematics, started his career in Allianz Group in the Group Actuarial Dept.
Main tasks as from the beginning were the analysis of new tariffs in the various EU countries of competence, the calculation of reserves, the economic impact of the productions, the projection of P/L and Asset & Liabilities of the companies of competence.
After a first years’ period at the Home Office, he has been transfer abroad in Greece at the local Branch Office cooperating to the whole management turn over and being responsible for the underwriting, claim management, reinsurance placement and administration and the Management Information System for the financial planning and reporting to Home Office.
Back to Home Office, after a short period, he has been entitled as CEO in the Group Mexican company, where the economic situation of the firm wasn’t solid so that the main task has been to promptly resolve all the organizational aspect with important impact to the company financial situation. The company after two years has been restored at a profitable status ready for a new Development Plan.
Back again to Home Office, has been intitled to the group reinsurance as a group captive and for the open reinsurance market; additionally had the responsibility of projecting the reinsurance results of various strategic portfolios.
After the experience in the Allianz Group is relevant to mention a positive experience as Reinsurance Broker, cooperating with BMS London for part of the EU market.
Last experience relevant for the project is the one in Serbia as Chief Insurance Officer in a local company privatized by UnipolSai (Italy), where he had as major task the profitability analysis of all the product gamma, the launch of new products and the financial projections of the company.
During the last 8 years he is in charge as Business Development Manager in Ultimate Risk Solutions Llc for the CEE Area and Turkey and as COO in Ultimate Risk Solutions Italia, responsible for the AMEA Area. 
Additionally, during the same period, acting as Business Development Manager in CConsulting  SPA for the same markets.

            `,
            tr: `
            Matematiği bölümünden tam notla mezun olduktan sonra, Allianz Group'un Aktüerya Departmanında kariyerine başladı. 

Başlangıçtan itibaren ana görevleri, çeşitli AB ülkelerinde yeni tarifelerin analizi, rezervlerin hesaplanması, üretimin ekonomik etkisi, ilgili şirketlerin kar/zarar ve varlık/yükümlülüklerinin projeksiyonu idi. 

Merkez ofiste geçirdiği ilk yılın ardından, Yunanistan'daki yerel şubeye transfer oldu ve tüm yönetim dönüşümüne işbirliği yaparak, sigorta, hasar yönetimi, reasürans yerleştirme ve yönetimi ile finansal planlama ve merkez ofise raporlama için Yönetim Bilgi Sisteminden sorumlu oldu. 

Kısa bir süre sonra merkez ofise geri döndü ve Meksika'daki grup şirketinde CEO olarak atandı. Şirketin ekonomik durumu sağlam olmadığı için ana görevi, şirketin finansal durumu üzerinde önemli etkisi olan tüm organizasyonel sorunları derhal çözmekti. İki yıl sonra şirket karlı bir duruma geri döndü ve yeni bir Gelişim Planı için hazır hale geldi. 

Yine Home Office'e geri döndü ve grup reasüransı olarak grup captive ve açık reasürans piyasası için yetkilendirildi; ayrıca çeşitli stratejik portföylerin reasürans sonuçlarını tahmin etme sorumluluğunu üstlendi. 

Allianz Group'taki deneyiminin ardından, AB pazarının bir kısmı için BMS London ile işbirliği yaparak Reasürans Brokerı olarak olumlu bir deneyim yaşadığını belirtmek önemlidir. 

Projeyle ilgili son deneyimi, UnipolSai (İtalya) tarafından özelleştirilen yerel bir şirkette Sigorta Direktörü olarak Sırbistan'da edindiği deneyimdir. Burada, tüm ürün yelpazesinin karlılık analizi, yeni ürünlerin piyasaya sürülmesi ve şirketin finansal tahminleri gibi önemli görevleri üstlenmiştir. 

Son 8 yıldır Ultimate Risk Solutions Llc'de Orta ve Doğu Avrupa Bölgesi ve Türkiye İş Geliştirme Müdürü ve Ultimate Risk Solutions Italia'da COO olarak AMEA Bölgesi'nden sorumludur.  

Ayrıca, aynı dönemde CConsulting  SPA'da aynı pazarlar için İş Geliştirme Müdürü olarak görev yapmaktadır. 
            
            `
        },
    }, 
    {
        id: 30,
        day:2,
        name: "Mehsen Nehmeh",
        title: {
            en: "Division Director, Gallagher Re",
            tr: "Bölüm Direktörü, Gallagher Re London",
        },
        image: "/images/speakers/mehsen.png",
        bio: {
            en: `
            Mehsen Nehmeh is a Divisional Director at Gallagher Re in London, leading actuarial analytics for the Turkish Team. Since joining Gallagher in 2021, he has successfully managed client relationships across Turkey, the Middle East, and North Africa, specialising in portfolio modelling, structural assessments, alternative solutions, and competitive pricing. Fluent in English, French, and Arabic, Mehsen brings 8+ years of industry experience from AXA and AIC, with academic credentials in Actuarial Mathematics and a Master’s in data science.
            `,

            tr: `
            Mehsen Nehmeh, Londra'daki Gallagher Re'de Bölüm Direktörü olarak görev yapmakta ve Türkiye Ekibi için aktüeryal analitik çalışmalarını yönetmektedir. 2021 yılında Gallagher'a katıldığından bu yana, portföy modelleme, yapısal değerlendirmeler, alternatif çözümler ve rekabetçi fiyatlandırma alanlarında uzmanlaşarak Türkiye, Orta Doğu ve Kuzey Afrika'daki müşteri ilişkilerini başarıyla yönetmiştir. İngilizce, Fransızca ve Arapça'yı akıcı bir şekilde konuşan Mehsen, AXA ve AIC'de 8 yılı aşkın sektör deneyimine sahiptir ve aktüeryal matematik alanında akademik yeterliliğe ve veri bilimi alanında yüksek lisans derecesine sahiptir. 
            `
        },
    },
    {
        id: 44,
        day:2,
        name: "Gencay Genç",
        title: {
            en: "CEO & Founder, Gensure Tech ",
            tr: "Yönetici Partner ,Genç Sigorta & Gensure Tech",
        },
        image: "/images/speakers/gencay.png",
        bio: {
            en: `
            Mehsen Nehmeh is a Divisional Director at Gallagher Re in London, leading actuarial analytics for the Turkish Team. Since joining Gallagher in 2021, he has successfully managed client relationships across Turkey, the Middle East, and North Africa, specialising in portfolio modelling, structural assessments, alternative solutions, and competitive pricing. Fluent in English, French, and Arabic, Mehsen brings 8+ years of industry experience from AXA and AIC, with academic credentials in Actuarial Mathematics and a Master’s in data science.
            `,

            tr: `
Gencay Genç, sigorta sektöründe uzun yıllara dayanan deneyime sahip iş geliştirme lideri ve girişimcidir. Brokerlik, sigorta teknolojileri (InsurTech), sağlık sigortası ürünleri ve dijital dağıtım alanlarında uzmanlığı bulunan Genç, iş planlama, operasyon yönetimi, satış ve dijital pazarlama konularında güçlü bir geçmişe sahip olup çağrı merkezi yönetimi ve yeni iş modelleri geliştirme alanında deneyim sahibidir.              `
        },
    },
    {
        id: 55,
        day:2,
        name: "Zerrin Sonışık",
        title: {
            en: "Assistant General Manager, Sigortam.net  ",
            tr: "Genel Müdür Yardımcısı, Sigortam.net",
        },
        image: "/images/speakers/zerrin.png",
        bio: {
            en: `
            Zerrin Sonışık is a senior executive with over 30 years of experience in the insurance sector, with a strong background in finance, strategy, compliance, digital transformation, and brokerage. She was part of the founding team of Sigortam.net, Turkey’s first and leading digital insurance platform, where she served as CFO and Deputy GM (CSO & CCO), leading strategic partnerships, regulatory relations, and financial management. She has also served as a Board Member and Head of the Digital Committee at the Association of Insurance and Reinsurance Brokers (SBD). 
             `,

            tr: `
Sigorta sektöründe 30 yılı aşkın deneyime sahip üst düzey yönetici. Finans, strateji, uyum, dijital dönüşüm ve brokerlik alanlarında güçlü bir geçmişe sahip. Türkiye’nin ilk ve lider dijital sigorta platformu Sigortam.net’in kurucu ekibinde yer almış, CFO ve Genel Müdür Yardımcısı (Deputy GM – CSO & CCO) olarak stratejik iş birliklerini, regülasyon ilişkilerini ve finansal yönetimi yürütmüştür. Sigorta ve Reasürans Brokerleri Derneği’nde (SBD) Yönetim Kurulu Üyeliği ve Dijital Komite Başkanlığı görevlerinde bulunmuştur.             `
        },
    },
    {
        id: 43,
        day:2,
        name: "Ersin Al ",
        title: {
            en: "CEO, Colendi Sigorta",
            tr: "CEO, Colendi Sigorta",
        },
        image: "/images/speakers/ersin.png",
        bio: {
            en: `
            Ersin Al is an executive with over 15 years of experience in the insurance and finance sectors, specializing in digital transformation, strategic planning, and project and portfolio management. He led the digital transformation at Türkiye Sigorta and currently serves as the CEO of Colendi Sigorta. With entrepreneurial experience in the startup ecosystem, he has a strong vision in technology, data analytics, and customer experience. 
             `,

            tr: `
Sigorta ve finans sektöründe 15 yılı aşkın deneyime sahip yönetici. Dijital dönüşüm, stratejik planlama, proje ve portföy yönetimi alanlarında uzman. Türkiye Sigorta’da dijital dönüşümün liderliğini üstlenmiş, şu anda Colendi Sigorta CEO’su olarak görev yapmaktadır. Startup ekosisteminde girişimci deneyimine sahip olup teknoloji, veri analitiği ve müşteri deneyimi konularında güçlü bir vizyona sahiptir. 
            `
         },
    },
    {
        id: 42,
        day:2,
        name: "Buket Arslanalp Erşan",
        title: {
            en: "Assistant General Manager, Fiba Sigorta",
            tr: "Genel Müdür Yardımcısı,  Fiba Sigorta",
        },
        image: "/images/speakers/buket.png",
        bio: {
            en: `
            Buket Arslanalp Erşan is an experienced executive with nearly 20 years in the insurance sector, specializing in sales, marketing, alternative distribution channels, and customer experience. She has a strong background in bancassurance, corporate sales, call center management, and project development. She currently serves as the Deputy General Manager responsible for Marketing (CMO) at Fiba Sigorta A.Ş. 
             `,

            tr: `
Sigorta sektöründe 20 yıla yakın deneyime sahip, satış, pazarlama, alternatif dağıtım kanalları ve müşteri deneyimi alanlarında uzman yönetici. Bancassurance, kurumsal satış, çağrı merkezi yönetimi ve proje geliştirme alanlarında güçlü bir geçmişe sahip. Halen Fiba Sigorta A.Ş.’de Pazarlamadan Sorumlu Genel Müdür Yardımcısı (CMO) olarak görev yapmaktadır.             `
         },
    },
    {
        id: 41,
        day:2,
        name: "Mehmet Akif Özdemir ",
        title: {
            en: "Co-Founder & CEO  EasyCep ",
            tr: "Kurucu Ortak & CEO  EasyCep ",
        },
        image: "/images/speakers/mehmet-akif.png",
        bio: {
            en: `
            Mehmet Akif Özdemir is an entrepreneur and technology leader. As the co-founder and CEO of EasyCep, he established one of Türkiye’s leading brands in the refurbished electronics market. With a background in software and mechanical engineering, he specializes in business development, operations management, and scalable technology-based business models. He is an active member of global entrepreneurship communities as a member of the Forbes Business Council. 
             `,

            tr: `
Girişimci ve teknoloji lideri. EasyCep’in kurucu ortağı ve CEO’su olarak yenilenmiş elektronik pazarında Türkiye’nin öncü markalarından birini kurdu. Yazılım mühendisliği ve makine mühendisliği geçmişi ile iş geliştirme, operasyon yönetimi ve ölçeklenebilir teknoloji tabanlı iş modelleri üzerine uzmanlaşmıştır. Forbes Business Council üyesi olarak global girişimcilik topluluklarında aktiftir. 
            `
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
                { name: "Garanti BBVA", logo: "/images/brands/bbva.jpeg", width: 100, height: 100 },
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
                { name: "Sigortacı", logo: "/images/brands/sigortaci.png", width: 145, height: 35 },
            ],
        },
        {
            category: {
                en: "Global Communication Partner",
                tr: "Global İletişim Ortağı",
            },
            sponsors: [
                { name: "AA", logo: "/images/brands/anadolu-logo.svg", width: 125, height: 35 },
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
                { name: "Garanti BBVA", logo: "/images/brands/bbva.jpeg", width: 100, height: 100 },
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
                { name: "Sigortacı", logo: "/images/brands/sigortaci.png", width: 145, height: 35 },
            ],
        },
        {
            category: {
                en: "Global Communication Partner",
                tr: "Global İletişim Ortağı",
            },
            sponsors: [
                { name: "AA", logo: "/images/brands/anadolu-logo.svg", width: 125, height: 35 },
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
                    time: "08.00 - 09.00",
                    title: "Kayıt & Kahvaltı",
                },
                {
                    time: "09.00 - 09.30",
                    title: "Zirve Açılış",
                },
                {
                    time: "09.30 - 09.45",
                    title: "Hoş Geldiniz Konuşması, Uğur GÜLEN (Başkan, Türkiye Sigorta Birliği - TSB) ",
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
                    time: "13.45 - 14.15",
                    title: "Motivasyon Konuşması",
                    content: `
                    <p>Sigortacılıkta Dijital Dönüşüm ve Yapay Zekâ: Yenilik ve Etkinin Güçlü Yolculuğu</p>
                    <p><strong>Magdalena Ramada Sarasola,</strong> (Global InsurTech İnovasyon Lideri – Kıdemli Direktör, WTW) </p>
                    `
                },
                {
                    time: "14.15 - 14.30",
                    title: "İkinci Ana Tema Konuşmacısı",
                    content: `
                     
                        <p>Hayat dışı sigortacılıkta operasyon, fiyatlama ve risk değerlendirmesinin şekillenmesinde gelişmiş teknolojiler, otomasyon ve yapay zekânın rolü: zorluklar ve fırsatlar</p>
                      <p><strong>Melike Nur Çınar</strong> Türkiye Sigorta Oto, Tarım Sigortaları ve Aktüerya Genel Müdür Yardımcısı</p>
                    `
                },
                {
                    time: "14.30 - 15.00",
                    title: "Kahve Molası"
                },
                {
                    time: "15.00 - 15.30",
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
                    time: "15.30 - 16.00",
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
                    time: "16.00 - 16.45",
                    title: "OTURUM 4",
                    content: ` 
                    <p>Insurtech Bakış Açısıyla Dijitalleşme: Fırsatlar ve Zorluklar</p>
                    <p><strong>Moderatör:</strong> Serkan Avcı – Merkez Müdürü, SBM </p>
                    <p><strong>Konuşmacılar:</strong></p>
                    <ul>
                      <li>Onursal Polat - SFS Stratejik Fonksiyonel Sistemler Genel Müdürü</li>
                      <li>Mutlu Uğursal – Agito CEO</li>
                      <li>Bilal Türkmen - Destech Teknoloji Grubu CEO, RS Holding</li>
                    </ul>
                  `
                },
                {
                    time: "16.45 - 17.00",
                    title: "Kapanış Konuşması",
                },
                {
                    time: "18.00 - 20.00",
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
                    time: "08.30 - 09.30",
                    title: "Kayıt & Kahvaltı",
                },
                {
                    time: "09.30 - 10.45",
                    title: "Açılış ve Hoş Geldiniz Konuşmaları",
                    content: `
                              <p>Konuşmacılar:</p>
      <ul>
        <li>Emine Feray SEZGİN – (Deputy Chairman, SEDDK)</li>
         <li>Ahmet Yaşar – (Deputy Chairman, TSB) </li>
        <li>Fahri Altıngöz – (Chairman, STD) </li> 
       </ul>
                    `
                },
                {
                    time: "11.00 - 11.15",
                    title: "Ana Tema Konuşmacısı",
                    content: ` 
                    <p><strong>Charles WHITMORE </strong>  (President of Global Clients, Guy Carpenter)</p>
                    `
                },
                {
                    time: "10.45 - 11.15",
                    title: "Kahve Molası",
                },
                {
                    time: "11.15 - 13.00",
                    title: "OTURUM 1",
                    content: `
                      <p>Sigorta Sektöründe Dijital Dönüşüm: 

Yeni Teknolojilerin Etkileri, Üretken Yapay Zekâ ve Sigortacıların Karşılaştığı Zorluklar </p>
      <p><strong>Moderatör:</strong> Vasilis KATSIPIS - (General Manager MENA, South & Central Asia A.M. Best)</p>
      <p>Konuşmacılar:</p>
      <ul>
        <li>Neslihan NECİBOGLU (CEO, Neova Sigorta)</li>
         <li>Stavros DIMOPOULOS (Vice President, European Federation of Loss Adjustin
Experts (FUEDI)</li>
        <li>Arnaud R. KOPP (Senior Underwriter P&C – Head P&C Türkiye, Swiss Re)</li>
        <li>Kristian Mangold (Regional Director EMEA, Munich Re Parametric NatCat)</li>
        <li>Marc M. BÜKER (Board Member & Market Manager for Southern Mediterranean,
North Africa and Francophone Africa, SCOR SE) </li>
       </ul>
                    `
                },
                {
                    time: "13.00 - 14.00",
                    title: "Öğle Yemeği",
                },
                {
                    time: "14.00 - 14.30",
                    title: "Ana Tema Konuşmacısı",
                    content: ` 
                    <p><strong>Maria Luisa ALVAREZ BARBY </strong> (Head of Sustainability at the Solvency II Subdirectorate,
Directorate General for Insurance and Pension Funds, Spain)</p>
                    `
                },
                {
                    time: "14.30 - 16.00",
                    title: "OTURUM 2",
                    content: `
                      <p>InsurTech ve Dijital Dönüşüm: Sigortacılıkta Yapay Zeka, Makine Öğrenmesi ve Tahmine Dayalı Analitiğin Rolü</p>
      <p><strong>Moderatör:</strong> Daniela GHETU (Editorial Director, The XPRIMM Publications)</p>
      <p>Konuşmacılar:</p>
      <ul>
        <li>Prof. Dr. Sinan AKKAR (Director of Catastrophe Modeling and Data Analytics
Department, T-Rupt)</li>
         <li>Dr. Laurent MARESCOT (Senior Director, Moody’s Insurance Solutions) </li>
        <li>Dario SCHILLER (Business Development Manager - Ultimate Risk Solutions
& CConsulting SPA)</li>
        <li>Mehsen Nehmeh (Divisional Director Gallagher Re) 
</li> 
       </ul>
                    `
                },
                {
                    time: "16.00 - 17.30",
                    title: "OTURUM 3",
                    content: `
                      <p>Gömülü Sigortacılık Çağı: Ortaya Çıkan Teknolojilerin Sessiz Devrimi</p>
      <p><strong>Moderatör:</strong> Gencay Genç (Managing Partner , Genç Sigorta & Gensure Tech)</p>
      <p>Konuşmacılar:</p>
      <ul>
        <li>Zerrin Sonışık (Deputy General Manager, Sigortam.net)</li>
         <li>Ersin Al (CEO, Colendi Sigorta) </li>
        <li>Buket Arslanalp Erşan (Asistant General Manager , Fiba Sigorta)</li>
        <li>Mehmet Akif Özdemir (Co-Founder&CEO  , EasyCep) </li> 
       </ul>
                    `
                },
                {
                    time: "17.30 - 18.00",
                    title: "Kapanış Konuşması",
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
                    time: "08.00 - 09.00",
                    title: "Registration & Breakfast",
                },
                {
                    time: "09.00 - 09.30",
                    title: "Summit Opening",
                },
                {
                    time: "09.30 - 09.45",
                    title: "Welcome Speech, Uğur GÜLEN (Chairman, TSB)  ",
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
                    time: "13.45 - 14.15",
                    title: "Motivational Speaker",
                    content: `
                <p>Digital Transformation and AI in Insurance: A Tour de Force of Innovation and Impact </p>
                    <p><strong>Magdalena Ramada Sarasola,</strong> (PhD Global InsurTech Innovation Leader - Senior Director at WTW)   </p>
                `
                },
                {
                    time: "14.15 - 14.30",
                    title: "Second Keynote Speaker",
                    content: `
                
                    <p> The role of advanced technologies, automation, and AI in reshaping operations, pricing and underwriting in non-life insurance: challenges and opportunities </p>
                      <p><strong>Melike Nur Çınar</strong> Assistant General Manager</p>
                `
                },
                {
                    time: "14.30 - 15.00",
                    title: "Coffee Break"
                },
                {
                    time: "15.00 - 15.30",
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
                    time: "15.30 - 16.00",
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
                    time: "16.00 - 16.45",
                    title: "SESSION 4",
                    content: ` 
                    <p>Digitalization from Insurtech Perspective Opportunities and Challenges</p>
                    <p><strong>Moderatör:</strong> Serkan Avcı – CEO Chairman of Executive Committee </p>
                    <p><strong>Speakers:</strong></p>
                    <ul>
                      <li>Onursal Polat - General Manager of Strategic Functional Systems, SFS</li>
                      <li>Mutlu Uğursal – CEO, Agito</li>
                      <li>Bilal Türkmen - Member of the Management Board of RS Otomotiv Grubu</li>
                    </ul>
                  `
                },
                {
                    time: "16.45 - 17.00",
                    title: "Closing Remarks",
                },
                {
                    time: "18.00 - 20.00",
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
                    time: "08.30 - 09.30",
                    title: "Registration & Breakfast",
                },
                {
                    time: "09.30 - 10.45",
                    title: "Opening Speeches",
                    content: `
                              <p>Speakers:</p>
      <ul>
   <li>Emine Feray SEZGİN – (Deputy Chairman, SEDDK)</li>
         <li>Ahmet Yaşar – (Deputy Chairman, TSB) </li>
        <li>Fahri Altıngöz – (Chairman, STD) </li> 
       </ul>
                    `
                },
                {
                    time: "10.30 - 10.45",
                    title: "Keynote Speaker:",
                    content: ` 
                    <p><strong>Charles WHITMORE</strong> (President of Global Clients, Guy Carpenter)</p>
                    `
                },
                {
                    time: "10.45 - 11.15",
                    title: "Coffee Break",
                },
                {
                    time: "11.15 - 13.00",
                    title: "SESSION 1",
                    content: `
                      <p>Digital Transformation in (Re)Insurance:  AI-Powered Reinsurance Pricing and Portfolio Optimization </p>
                      <p> Digital Tools for Climate Risk Modeling and Catastrophe Bond Structuring</p>
      <p><strong>Moderetor:</strong> Vasilis KATSIPIS - (General Manager MENA, South & Central Asia A.M. Best)</p>
      <p>Speakers:</p>
      <ul>
        <li>Neslihan NECİBOGLU (CEO, Neova Sigorta)</li>
         <li>Stavros DIMOPOULOS (Vice President, European Federation of Loss Adjustin
Experts (FUEDI)</li>
        <li>Arnaud R. KOPP (Senior Underwriter P&C – Head P&C Türkiye, Swiss Re)</li>
        <li>Kristian Mangold (Regional Director EMEA, Munich Re Parametric NatCat)</li>
        <li>Marc M. BÜKER (Board Member & Market Manager for Southern Mediterranean,
North Africa and Francophone Africa, SCOR SE) </li>
       </ul>
                    `
                },
                {
                    time: "13.00 - 14.00",
                    title: "Lunch Break",
                },
                {
                    time: "14.00 - 14.30",
                    title: "Keynote Speaker:",
                    content: ` 
                    <p><strong>Maria Luisa ALVAREZ BARBY </strong> (Head of Sustainability at the Solvency II Subdirectorate,
Directorate General for Insurance and Pension Funds, Spain)</p>
                    `
                },
                {
                    time: "14.30 - 16.00",
                    title: "SESSION 2",
                    content: `
                      <p>InsurTech & Digital Innovation in (Re)Insurance:
                      Role of AI, Machine Learning, and Predictive Analytics in Underwriting 
</p>
<p>Personalization through AI: Tailoring Policies to Customer Behavior</p>
      <p><strong>Moderetor:</strong> Daniela GHETU (Editorial Director, The XPRIMM Publications)</p>
      <p>Speakers:</p>
      <ul>
        <li>Prof. Dr. Sinan AKKAR (Director of Catastrophe Modeling and Data Analytics
Department, T-Rupt)</li>
         <li>Dr. Laurent MARESCOT (Senior Director, Moody’s Insurance Solutions) </li>
        <li>Dario SCHILLER (Business Development Manager - Ultimate Risk Solutions
& CConsulting SPA)</li>
        <li>Mehsen Nehmeh (Divisional Director Gallagher Re) 
</li> 
       </ul>
                    `
                },
                {
                    time: "16.00 - 17.30",
                    title: "SESSION 3",
                    content: `
                      <p>Embedded Insurance Era: A Silent Revolution of Emerging Technologies</p> 
      <p><strong>Moderetor:</strong> Gencay Genç (Managing Partner , Genç Sigorta & Gensure Tech)</p>
      <p>Speakers:</p>
      <ul>
        <li>Zerrin Sonışık (Deputy General Manager, Sigortam.net)</li>
         <li>Ersin Al (CEO, Colendi Sigorta) </li>
        <li>Buket Arslanalp Erşan (Asistant General Manager , Fiba Sigorta)</li>
        <li>Mehmet Akif Özdemir (Co-Founder&CEO  , EasyCep) </li> 
       </ul>
                    `
                },
                {
                    time: "17.30 - 18.00",
                    title: "BILATERAL MEETINGS",
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