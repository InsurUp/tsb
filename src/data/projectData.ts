interface BannerData {
    title: string;
    buttonText: string;
    buttonHref: string;
    eventStartDate: string;
    eventLocation: string;
    eventText: string;
    bgImage: string;
    tsbLogo: string;
    summitLogo: string;
    menuLogo: string;
    countdownWeeks: number;
    countdownDays: number;
    countdownHours: number;
}

export const BannerData: BannerData =
{
    title: "DIGITAL FUTURES: HOW TECHNOLOGY CHANGES THE INSURANCE SECTOR",
    buttonText: "Sign up now!",
    buttonHref: "#",
    eventStartDate: "29 - 30 September",
    eventLocation: "Swissôtel The Bosphorus - İstanbul",
    eventText: "29 - 30 September",
    bgImage: "/images/bg-main.webp",
    tsbLogo: "/images/tsb_logo.png",
    summitLogo: "/images/banner-image.png",
    menuLogo: "/images/menu_logo.png",
    countdownWeeks: 10,
    countdownDays: 5,
    countdownHours: 1800,
}

export interface Speaker {
    id: number;
    name: string;
    title: string;
    image: string;
    bio: string;
}

export const speakers: Speaker[] = [
    {
        id: 1,
        name: "Mehmet ŞİMŞEK",
        title: "Minister of Treasury and Finance",
        image: "/images/speakers/mehmet_simsek.png",
        bio: `
        
        
        Sachin Sahni is a part of S&P Global Ratings since 2015, based in DIFC - Dubai office, covering Insurance Ratings spread across MENA, Turkiye & South Africa. As a credit analyst, he manages a large portfolio of insurers and is responsible for assigning and conducting ongoing 

surveillance of their Credit Ratings. Mr. Sahni is also actively involved in market research and has published various insurance industry report cards & articles on industry current affairs. 

He is a qualified Chartered Accountant & MBA (Finance) and has 25 years of experience in Financial Services (Banking & Insurance) encompassing Credit Ratings, Governance, Risk & Compliance, Internal Controls & Statutory Audit.  
        
        `,
    },
    {
        id: 2,
        name: "Davut MENTEŞ",
        title: "Chairman, TSB",
        image: "/images/speakers/davut_mentes.png",
        bio: "Davut Menteş, TSB Yönetim Kurulu Başkanıdır.",
    },
    {
        id: 3,
        name: "Özgür OBAK",
        title: "Secretary General, TSB",
        image: "/images/speakers/ozgur-obak.png",
        bio: "Özgür Obak, TSB Genel Sekreteridir.",
    },
    {
        id: 4,
        name: "Matt Singleton",
        title: "Proposition Manager CUO L&H Renaissance Reinsurance Plc",
        image: "/images/speakers/matt-singleton.png",
        bio: "Matt Singleton, Renaissance Reinsurance Plc şirketinde Proposition Manager CUO L&H olarak görev yapmaktadır.",
    },
    {
        id: 5,
        name: "Aysim YILDIZ",
        title: "PHD (Honorary) Secretary-General, TSD",
        image: "/images/speakers/aysim-yildiz.png",
        bio: "Aysim Yıldız, TSD Onursal Genel Sekreteridir.",
    },
    {
        id: 6,
        name: "Robert Gordon",
        title: "Senior Vice President and Head of Regulatory Affairs & Asia Zone Re, Swiss Re",
        image: "/images/speakers/robert-gordon.png",
        bio: "Robert Gordon, Swiss Re şirketinde Kıdemli Başkan Yardımcısı ve Düzenleyici İşler ve Asya Bölgesi Re Sigortası Başkanıdır.",
    },
    {
        id: 7,
        name: "Sachin Sahel",
        title: "Associate Director, S&P Global Ratings",
        image: "/images/speakers/sachin-sahel.png",
        bio: "Sachin Sahel, S&P Global Ratings şirketinde Yardımcı Direktördür.",
    },
    {
        id: 8,
        name: "Alexandru OLUNCAN",
        title: "President of the National Union of Insurance and Reinsurance Companies of Romania - UNSAR",
        image: "/images/speakers/alexandru-oluncan.png",
        bio: "Alexandru Oluncan, Romanya Ulusal Sigorta ve Reasürans Şirketleri Birliği (UNSAR) Başkanıdır.",
    },
    {
        id: 9,
        name: "Uğur GÜLEN",
        title: "Chairman, TSB",
        image: "/images/speakers/ugur-gulen.png",
        bio: "Uğur Gülen, TSB Yönetim Kurulu Başkanıdır.",
    },
    {
        id: 10,
        name: "Yavuz ÖZKAN",
        title: "Member of Non-Life Executive Board, TSB & CEO, KMP Türkiye",
        image: "/images/speakers/yavuz-ozkan.png",
        bio: "Yavuz Özkan, KMP Türkiye'de Hayat Dışı Yönetim Kurulu Üyesi ve CEO'sudur.",
    },
    {
        id: 11,
        name: "Magdalena Kamada Szmacioch",
        title: "CFO, Global InsurTech Innovation Leader - Senior Director at PwC",
        image: "/images/speakers/magdalena-kamada-szmacioch.png",
        bio: "Magdalena Kamada Szmacioch, PwC'de CFO, Global InsurTech İnovasyon Lideri ve Kıdemli Direktör olarak görev yapmaktadır.",
    },
    {
        id: 12,
        name: "Marti Lappala",
        title: "Secretary General/CEO of Finanssi-Europe",
        image: "/images/speakers/marti-lappala.png",
        bio: "Marti Lappala, Finanssi-Europe Genel Sekreteri/CEO'sudur.",
    },
    {
        id: 13,
        name: "Hassan El-Shabrawishi",
        title: "AXA International Markets, CEO",
        image: "/images/speakers/hassan-el-shabrawishi.png",
        bio: "Hassan El-Shabrawishi, AXA International Markets CEO'sudur.",
    },
    {
        id: 14,
        name: "Levent Tazun",
        title: "Principal II at E&I & Fellow at IHS Markit Commodity",
        image: "/images/speakers/levent-tazun.png",
        bio: "Levent Tazun, E&I'de Principal II ve IHS Markit Commodity'de Fellow olarak görev yapmaktadır.",
    },
    {
        id: 15,
        name: "Thea Utoft Jensen",
        title: "Director General, Insurance Europe",
        image: "/images/speakers/thea-utoft-jensen.png",
        bio: "Thea Utoft Jensen, Insurance Europe Genel Direktörüdür.",
    },
    {
        id: 16,
        name: "Çağrı Akpınar",
        title: "Assistant General Manager, Türkiye Sigorta",
        image: "/images/speakers/cagri-akpinar.png",
        bio: "Çağrı Akpınar, Türkiye Sigorta'da Genel Müdür Yardımcısıdır.",
    },
    {
        id: 17,
        name: "Yavuz ÖZKEN",
        title: "Member of Non-Life Executive, TSB & CEO, Aksigorta Türkiye",
        image: "/images/speakers/yavuz-ozken-aksigorta.png",
        bio: "Yavuz Özken, Aksigorta Türkiye'de Hayat Dışı Yönetim Kurulu Üyesi ve CEO'sudur.",
    },
];

export interface SponsorCategory {
    category: string;
    sponsors: { name: string; logo: string }[];
}

export const sponsorData: SponsorCategory[] = [
    {
        category: "Platinum Sponsor",
        sponsors: [
            { name: "Türkiye Sigorta", logo: "/images/brands/ts_logo.png" },
        ],
    },
    {
        category: "Gold Sponsor",
        sponsors: [
            { name: "Sigorta Bilgi ve Gözetim Merkezi", logo: "/images/brands/sigorta_bilgi.png" },
        ],
    },
    {
        category: "Support Sponsor",
        sponsors: [
            { name: "Garanti BBVA", logo: "/images/brands/garanti_bbva.png" },
            { name: "Segem", logo: "/images/brands/segem.png" },
            { name: "Remed Assistance", logo: "/images/brands/remed_logo.png" },
            { name: "PwC", logo: "/images/brands/pwc.png" },
            { name: "Insurtech Hub", logo: "/images/brands/insurtech-logo.png" },
        ],
    },
    {
        category: "Gala Dinner Sponsor",
        sponsors: [
            { name: "Agito", logo: "/images/brands/agito_logo.png" },
        ],
    },
    {
        category: "Medya Sponsor",
        sponsors: [
            { name: "Xprimm", logo: "/images/brands/primm.png" },
        ],
    },
];

interface FAQItem {
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        question: "Zirvenin amacı nedir?",
        answer: "TSB Zirvesi, sigorta sektörüne adanmış, uzmanları, profesyonelleri ve kilit paydaşları bir araya getiren önde gelen bir etkinliktir. Sigortacılıktaki en son trendleri, yenilikleri ve zorlukları tartışmak için bir platform görevi görür."
    },
    {
        question: "Faydaları nelerdir ve kimler içindir?",
        answer: "Uluslararası Sigorta Zirvesi, sigorta sektörünün geleceğini şekillendiren küresel liderleri, uzmanları ve karar alıcıları bir araya getiriyor. Bu yılki teması, “Dijital Gelecekler: Teknoloji Sigorta Sektörünü Nasıl Dönüştürüyor?” yapay zeka, veri analizi, dijital dönüşüm ve gelişmekte olan teknolojiler gibi temel konuları ele alacak. Zirve, gelişen sigorta ortamı için içgörü alışverişinde bulunmak, küresel eğilimleri keşfetmek ve sürdürülebilir çözümler üzerinde işbirliğini teşvik etmek için dinamik bir platform sağlayacak."
    },
    {
        question: "Biletler nasıl teslim edilecek?",
        answer: "Biletler elektronik olarak e-posta yoluyla teslim edilecektir. Etkinlikten 7 gün önce kayıt sırasında verilen e-posta adresinize gönderilecektir. Lütfen spam klasörünüzü de kontrol edin."
    }
];