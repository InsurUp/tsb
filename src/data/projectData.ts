interface BannerData {
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
}

export const BannerData: BannerData =
{
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
        title: "Minister of Treasury and Finance (TBC)",
        image: "/images/speakers/mehmet_simsek.png",
        bio: `
         
        `,
    },
    {
        id: 2,
        name: "Davut Menteş",
        title: "Chairman, IPRSA",
        image: "/images/speakers/davut_mentes.png",
        bio: `
        
        Lisans derecesini İstanbul Üniversitesi Siyasal Bilgiler Fakültesi İşletme Bölümünden alan Davut Menteş, iş hayatına MÜSİAD Akademide iş dünyasına yönelik eğitim faaaliyetleri organizasyonu ile başlamış, ardından denetim-danışmanlık sektörü ile devam ederek, SMMM ve başdenetçi unvanları ile bu alanda 5 yıl çalışmıştır. Akabinde, hızlı tüketim, gayrimenkul, tekstil ve yenilenebilir enerji sektörlerinde yaklaşık 15 sene üst düzey yöneticilik yapmıştır. 2018 yılı başında girdiği sigorta ve özel emeklilik sektöründe, Bereket Sigorta ve Bereket Emeklilik şirketlerinde; mali işler, finans, hukuk ve bilgi teknolojileri fonksiyonlarının yanısıra, bütçe-raporlama, kurumsal iletişim ve destek hizmetlerinden sorumlu genel müdür yardımcısı olarak görev yapmakta iken 7 Temmuz 2022 tarihinde SEDDK ikinci başkanlığına, 14 Kasım 2023 tarihinde ise SEDDK Başkanlığına atanan Davut Menteş, İngilizce bilmekte olup evli ve 1 çocuk babasıdır. 
        `,
    },
    {
        id: 9,
        name: "Uğur GÜLEN",
        title: "Chairman, The Association of Insurance, Reinsurance and Pension Companies of Türkiye General Manager, Aksigorta ",
        image: "/images/speakers/ugur_gulen.png",
        bio: `
        Uğur Gülen took his undergraduate and master degrees at the Department of Industrial Engineering at Middle East Technical University. He began his career in 1991 and worked at various positions at Interbank, Denizbank, Ak Internet and MNG Bank. During 2004-2009. He served at AK Emeklilik A.Ş. ve AvivaSA Emeklilik ve Hayat A.Ş. as the Assistant General Manager. He has been assigned as the General Manager and a Board member at Aksigorta since May 2009. In addition to his current duties, he was elected President of the Association of Insurance, Reinsurance and Pension Companies of Türkiye in September 2023. 
        `,
    },
    {
        id: 15,
        name: "Thea Utoft Høj Jensen",
        title: "Director General, Insurance Europe",
        image: "/images/speakers/theaa.png",
        bio: `
         Thea Utoft Høj Jensen is director general of Insurance Europe, the European insurance and reinsurance federation, and secretary general of the Global Federation of Insurance Associations (GFIA). With extensive experience in EU affairs, she previously served as senior managing director at FTI Consulting and financial counsellor for the Denmark to the EU. Thea holds a Master of Arts in Law from the University of Copenhagen. She is a Danish national, and calls Brussels her home since 2016. 
        `,
    }, 
    {
        id: 3,
        name: "Özgür Obalı",
        title: "Secretary General, TSB",
        image: "/images/speakers/ozgur_obali.png",
        bio: `
        Özgür Obalı graduated from Bogazici University, Department of Economics, and completed his master's degree in International Banking and Finance at the University of Birmingham.  

In institutions such as Isbank and Turkiye Finans; He served in various positions from Inspector to Head of Inspection Board.  

Between 2012 and 2016, Human Resources, Support Services, After Sales Services at Vakıf Emeklilik; Obalı, who assumed the position of Deputy General Manager of Marketing, Operations and Information Technologies; He served as the General Manager of Vakıf Emeklilik between February 2016 and July 2020.  

Obalı has been working as the Secretary General of the Insurance Association of Turkey since August 2020. 
        `,
    },
    {
        id: 7,
        name: "Sachin Sahni",
        title: "Asscociate Director, S&P Global Ratings",
        image: "/images/speakers/sachin.png",
        bio: ` 
        Sachin Sahni is a part of S&P Global Ratings since 2015, based in DIFC - Dubai office, covering Insurance Ratings spread across MENA, Turkiye & South Africa. As a credit analyst, he manages a large portfolio of insurers and is responsible for assigning and conducting ongoing surveillance of their Credit Ratings. Mr. Sahni is also actively involved in market research and has published various insurance industry report cards & articles on industry current affairs. He is a qualified Chartered Accountant & MBA (Finance) and has 25 years of experience in Financial Services (Banking & Insurance) encompassing Credit Ratings, Governance, Risk & Compliance, Internal Controls & Statutory Audit. 
        `,
    },
    {
        id: 14,
        name: "Levent Tuzun",
        title: "Principal II at EBRD & Fellow at the Trilateral Commission",
        image: "/images/speakers/levent-uzun.png",
        bio: `
        Levent Tuzun is a Principal Economist at the European Bank for Reconstruction and Development (EBRD). He focuses on investments and policy dialogue with clients and policymakers in financial services and capital markets, including fintech and private equity/venture capital. His work also spans projects that relate to the EBRD’s strategic agenda, addressing global challenges around climate change, inequality and innovation gaps. Previously, he worked in investment banking at J.P. Morgan in New York. Levent was a Weidenfeld-Chevening Scholar at the University of Oxford and completed the Master of Public Policy degree at the Blavatnik School of Government. He graduated from Yale University with undergraduate degrees in Economics and International Studies, and completed the Brady-Johnson Program in Grand Strategy. Levent’s areas of interest in policymaking include foreign relations, macroeconomics, education, and science & technology. He’s an active follower of advancements in consumer-facing technologies, and is trained in media content production. 
        `
    },
    {
        id: 8,
        name: "Alexandru CIUNCAN",
        title: "President & General Manager, The National Union of Insurance and Reinsurance Companies of Romania - UNSAR",
        image: "/images/speakers/alexandru.png",
        bio: "With over 2 decades in insurance and private pensions across CEE, Alexandru Ciuncan is currently President and General Manager of UNSAR and a Board Member at ISF. He formerly contributed to EIOPA’s IRSG and OPSG, and led initiatives at APPA and XPRIMM. He holds certifications in project and agile management, and he is  Henley Business School graduate in Board Practice and Directorship. ",
    },
    {
        id: 6,
        name: "Robert Gordon",
        title: "Senior Vice President, American Property Casualty Insurance Association (APCIA) Policy, Research & International ",
        image: "/images/speakers/robert.png",
        bio: `
        Robert Gordon is the Senior Vice President of Policy, Research & International at APCIA, leading insurance policy development at state, federal, and international levels. Previously, he served as senior counsel for the U.S. House Financial Services Committee, contributing to key insurance laws and issues like data security, privacy, and liability reform. `
    },
    {
        id: 11,
        name: "Magdalena Ramada Sarasola",
        title: " PhD Global InsurTech Innovation Leader - Senior Director at WTW",
        image: "/images/speakers/ramada.png",
        bio: "Magdalena is a Senior Director and Global InsurTech Innovation Leader at WTW. With 20+ years in R&D and international strategy consulting, she focuses on digital transformation, blockchain, and analytics in insurance. A pioneer in applying emerging tech to risk transfer, she’s also a speaker, educator, and advocate for tech governance and women in tech. ",
    },
    {
        id: 10,
        name: "Yavuz Ölken",
        title: "Member of Non-Life Executive Board, TSB & CEO, AXA Türkiye",
        image: "/images/speakers/yavuz_olken.png",
        bio: " ",
    }, 
    {
        id: 13,
        name: "Hassan El-Shabrawishi",
        title: "AXA International Markets, CEO",
        image: "/images/speakers/hassan.png",
        bio: "",
    },
    {
        id: 16,
        name: "Çağrı Akpınar",
        title: "Assistant General Manager Türkiye Sigorta",
        image: "/images/speakers/cagri-akpinar.png",
        bio: `
        2003 yılında Marmara Üniversitesi Bankacılık ve Sigortacılık Yüksek Okulu’ndan mezun olan Sayın Çağrı Akpınar, 2007 yılında Marmara Üniversitesi’nde Bankacılık ve Sigortacılık bölümünde yüksek lisansını bitirmiştir. Çalışma hayatına 2007 yılında Aviva Sigorta Kurumsal Satış Müdürlüğü’nde Satış Danışmanı olarak başlayan Akpınar, sonrasında 2009-2017 yılları arasında Güneş Sigorta Oto Dışı Sigortaları Teknik Müdürlüğü’nde Müdür Yardımcısı, 2017-2019 yılları arasında Halk Sigorta Oto Dışı Sigortaları Teknik Müdürlüğü’nde Direktör olarak görev almıştır. 2019 yılında Marsh Sigorta ve Reasürans Brokerliği’nde Kıdemli Müdür olarak çalışan Sayın Akpınar, Aralık 2019 tarihinde Türkiye Sigorta’da Oto Dışı Sigortalar Direktörü olarak görev yapmaya başlamıştır. Sayın Akpınar, 6 Eylül 2023 tarihi itibarıyla Türkiye Sigorta Teknik Genel Müdür Yardımcılığı görevine atanmıştır. Sayın Akpınar aynı zamanda; Turk P&I Sigorta Yönetim Kurulu Üyesi olarak görevine devam etmektedir. 
        `,
    },
    {
        id: 5,
        name: "Aysun Yıldız",
        title: "PhD (Assistant Secretary General, TSB)",
        image: "/images/speakers/aysun-yildiz.png",
        bio: `
        Aysun Yıldız Özer earned her BA in International Relations from Middle East Technical University (METU) and pursued specialized training in pension funds at Boston University. She holds a master’s degree in European Economic Integration from the UK and a PhD from Essex Business School.
She began her career as an Assistant Specialist at the Insurance Directorate of the Turkish Treasury and later served as a Senior Expert in departments responsible for bilateral finance and the management of EU funds.
From 2012 to 2015, she led the Marketing Department at Ziraat Private Pension and Life Insurance Company. Since 2015, she has been serving as the Assistant Secretary General of the Insurance Association of Türkiye.
        `,
    }, 
    {
        id: 12,
        name: "Matti Leppala",
        title: "Secretary General/CEO of PensionsEurope",
        image: "/images/speakers/matti.png",
        bio: `
        Matti Leppälä has served as Secretary General/CEO of PensionsEurope since 2011. He has held key roles in EIOPA and the European Commission and chaired the World Pension Alliance. Previously, he worked at The Finnish Pension Alliance TELA and began his career at Finland’s Ministry of Justice. He holds an LLM and an Executive MBA in Insurance and Financial Services. `,
    }, 
    {
        id: 4,
        name: "Matt Singleton",
        title: "Proposition Manager CUO L&H Reinsurance Swiss Re",
        image: "/images/speakers/matt.png",
        bio: ` Matt is the Propositions manager in Swiss Re Life & Health's Chief Underwriting Office and is an ageing specialist. He holds an MSc in Gerontology from the Centre for Research on Ageing at The University of Southampton and has in-depth experience of the research, strategy, product development and effective targeting of later-life solutions. 
Matt is also a qualified marketer with more than 25 years' experience in the financial services industry. `,
    }, 
];

export interface SponsorCategory {
    category: string;
    sponsors: { name: string; logo: string, width: number, height: number }[];
}

export const sponsorData: SponsorCategory[] = [
    {
        category: "Platinum Sponsor",
        sponsors: [
            { name: "Türkiye Sigorta", logo: "/images/brands/ts_logo.png", width: 260, height: 35 },
        ],
    },
    {
        category: "Gold Sponsor",
        sponsors: [
            { name: "Axa", logo: "/images/brands/axa.png", width: 130, height: 67 },
            { name: "Guy Carpenter", logo: "/images/brands/guy.png", width: 160, height: 67 },
            { name: "TSPB", logo: "/images/brands/tspb.png", width: 160, height: 67 }, 
            { name: "Sigorta Bilgi ve Gözetim Merkezi", logo: "/images/brands/sigorta_bilgi.png", width: 160, height: 67 },
        ],
    },
    {
        category: "Silver Sponsor",
        sponsors: [
            { name: "Benefit Global", logo: "/images/brands/benefit.png", width: 130, height: 67 },
            { name: "Gallagher Re", logo: "/images/brands/gallagher.png", width: 130, height: 67 },
        ],
    }, 
    {
        category: "Support Sponsor",
        sponsors: [
            { name: "AM Best", logo: "/images/brands/ambest.png", width: 100, height: 67 },
            { name: "Garanti BBVA", logo: "/images/brands/garanti_bbva.png", width: 100, height: 100 },
            { name: "Insurtech Hub", logo: "/images/brands/insurtech-logo.png", width: 100, height: 100 },
            { name: "Remed Assistance", logo: "/images/brands/remed_logo.png", width: 100, height: 100 },
            { name: "PwC", logo: "/images/brands/pwc.png", width: 100, height: 100 }, 
            { name: "Segem", logo: "/images/brands/segem.png", width: 100, height: 100 }, 
        ],
    },
    {
        category: "Gala Dinner Sponsor",
        sponsors: [
            { name: "Agito", logo: "/images/brands/agito_logo.png", width: 125, height: 50 },
        ],
    },
    {
        category: "Medya Sponsor",
        sponsors: [
            { name: "Xprimm", logo: "/images/brands/primm.png", width: 145, height: 35 },
        ],
    },
];

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

export const agendaData: AgendaDay[] = [
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
    <li>Sachin Sahni (Associate Director, S&amp;P Global Ratings)</li>
    <li>Levent Tuzun (Principal II at EBRD &amp; Fellow at the Trilateral Commission)</li>
    <li>Alexandru Ciuncan (Chairman, The National Union of Insurance and Reinsurance Companies of Romania - UNSAR)</li>
    <li>Robert Gordon (Senior Vice President, American Property Casualty Insurance Association, GFIA Cyber Risks WG, Chair)</li>
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
                <p><strong>Magdalena Ramada Sarasola,</strong> (Global InsurTech Innovation Leader - Senior Director at WTW)   </p>
                `
            },
            {
                time: "14.15 - 14.45",
                title: "SESSION 2",
                content: `
                  <p><strong>A Dialogue on the Digital Future of Insurers in Europe and Türkiye:</strong></p>
                  <p>Exploring Innovation, Regulation, and Collaboration Across Insurance Ecosystems</p>
                  <ul>
                    <li><strong>Yavuz Ölken</strong> (Member of Non-Life Executive Board, TSB & CEO, AXA Türkiye)</li>
                    <li><strong>Hassan El-Shabrawishi</strong> (AXA International Markets CEO)</li>
                  </ul>
                `
            },
            {
                time: "14.45 - 15.15",
                title: "Coffee Break"
            },
            {
                time: "15.15 - 15.30",
                title: "Second Key Note",
                content: `
                  <p> The role of advanced technologies, automation, and AI in reshaping operations, pricing and underwriting in non-life insurance: challenges and opportunities </p>
                  <p><strong>Çağrı Akpınar</strong> (Assistant General Manager, Türkiye Sigorta)</p>
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
                    <li>Matt Singleton (Proposition Manager CUO L&H Reinsurance, Swiss Re)</li>
                  </ul>
                `
            },
            {
                time: "16.15 - 16.30",
                title: "Closing Remarks"
            },
            {
                time: "17.00 - 19.00",
                title: "Smart-I Awards"
            }, 

        ],
    },
    {
        day: 2,
        title: "Day 2",
        items: [
            {
                time: "", // Add time for Day 2 items if available
                title: "Click for program details",
                href: "https://www.iucevents.com/international-insurance-summit"
            },
        ],
    },
];

interface FAQItem {
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        question: "What is the purpose of the summit? ",
        answer: `
        <p>
        The purpose of the International Insurance Summit is to bring together global leaders, experts, and decision-makers from the insurance ecosystem to explore the future of the industry. With a focus on innovation and sustainability, the summit aims to provide a platform for sharing insights, discussing key trends, and fostering cross-border collaboration on the digital transformation of insurance. 
        </p>
        
        `
    },
    {
        question: "What are the benefits, and who is it for? ",
        answer: `
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
        `
    },
    {
        question: "How will the tickets be delivered? ",
        answer: `
        <p>
 All tickets will be delivered electronically. Once registration is complete, you will receive a confirmation email with your digital ticket and QR code. You can present the QR code at the venue for fast and easy entry. Printed badges will be provided at the registration desk upon arrival. 
        </p>
        `
    }
];