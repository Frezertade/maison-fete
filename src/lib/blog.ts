import type { Faq } from "@/lib/seo";
import { SOURCES, type Source } from "@/lib/service-pages";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  /** <title>; brand appended by template */
  metaTitle: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  body: BlogBlock[];
  faqs: Faq[];
  sources: Source[];
  related: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "interior-decorator-cost-lancaster-pa",
    title: "How Much Does an Interior Decorator Cost in Lancaster, PA? (2026)",
    metaTitle: "Interior Decorator Cost in Lancaster, PA (2026 Guide)",
    description:
      "What an interior decorator or designer costs in Lancaster, PA in 2026: fee structures, cited national ranges, what changes the price, and how to get an accurate quote.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/designer-florals.jpg",
    imageAlt: "Decorator styling a floral arrangement",
    excerpt:
      "Fee structures, cited 2026 national ranges, and how to get an accurate local quote.",
    body: [
      { type: "p", text: "“How much will this cost?” is usually the first question people ask before hiring a decorator, and the honest answer is that it depends on how much you want done and how the pro bills. This guide covers how Lancaster County decorators and interior designers typically structure fees, what published national data says, and how to get a quote you can rely on." },
      { type: "p", text: "One note up front: there’s no reliable public dataset for Lancaster County decorator pricing specifically. The figures below come from a national cost guide (cited at the bottom) and are meant as a reference point, not a local price list." },
      { type: "h2", text: "How decorators and designers charge" },
      { type: "p", text: "Most pros use one of these models, or a mix of them:" },
      { type: "ul", items: [
        "Hourly: common for consultations, shelf styling, art hanging, or ongoing “as needed” help.",
        "Flat fee or per room: a set price for a defined scope, like designing one living room.",
        "Per square foot: more common for larger projects or new construction.",
        "Percentage of project or markup on furnishings: some designers charge a percentage of the total project cost, or earn part of their fee through trade pricing on furniture they order for you.",
      ] },
      { type: "p", text: "Ask every pro which model they use and what it includes (design time, shopping, delivery management, installation) so you’re comparing like with like." },
      { type: "h2", text: "What the national data says (2026)" },
      { type: "p", text: "Angi’s 2026 interior designer cost guide, based on projects completed by pros on its platform, reports:" },
      { type: "ul", items: [
        "National average project cost: $8,550, with most homeowners paying $2,055–$15,256.",
        "Hourly rates: about $100–$500 per hour.",
        "Flat fees: about $2,000–$12,000 for full-service projects with a clear scope.",
        "Per square foot: about $5–$17.",
        "Initial consultations: about $200–$800.",
        "Design visuals (mood boards, 3D renderings): an extra $500–$3,000.",
      ] },
      { type: "p", text: "Those numbers usually don’t include furniture, materials, or contractor labor. That’s often the biggest part of the budget, so set a separate furnishings budget." },
      { type: "h2", text: "What pushes the price up or down" },
      { type: "ul", items: [
        "Scope: one room vs. a whole house, and decorating vs. renovation design.",
        "Service level: a consultation and shopping list costs far less than full-service sourcing and installation.",
        "Furnishings: new custom pieces vs. reusing what you own.",
        "Timeline: rush projects can cost more.",
        "Experience and specialty: kitchen/bath designers and established firms often charge more than stylists who focus on decorating.",
      ] },
      { type: "h2", text: "Ways to get more for your budget" },
      { type: "ul", items: [
        "Start with a consultation-only visit and do the shopping yourself.",
        "Ask for a “use what you have” redesign before buying anything new.",
        "Do the rooms in phases, starting with the ones you use most.",
        "Get quotes from more than one pro and compare portfolios as well as price.",
      ] },
      { type: "h2", text: "Getting an accurate Lancaster quote" },
      { type: "p", text: "Measure the room, take a few photos, decide what stays, and pick a budget range you’re comfortable with. Then request quotes. Through Lancaster Decorators you can describe the project once and we’ll pass it to up to two independent local decorators or designers who fit. It’s free, and you don’t have to hire anyone." },
    ],
    faqs: [
      { q: "How much does an interior decorator charge per hour?", a: "Nationally, Angi’s 2026 guide lists about $100–$500 per hour for interior designers. Lancaster rates vary by pro, so request a free quote for local pricing." },
      { q: "Is a consultation worth it if I want to do the work myself?", a: "Often, yes. A one-time consultation can give you a layout, palette and shopping list, and Angi’s guide lists consultations at roughly $200–$800 nationally." },
      { q: "Does the decorator’s fee include furniture?", a: "Usually not. Design fees and furnishings are typically separate, so budget for both." },
    ],
    sources: [SOURCES.ANGI_DESIGN],
    related: ["/interior-decorating", "/home-staging", "/service-area"],
  },
  {
    slug: "christmas-holiday-decorating-lancaster-county",
    title: "Christmas & Holiday Decorating Services in Lancaster County",
    metaTitle: "Christmas & Holiday Decorating Services in Lancaster County",
    description:
      "A guide to hiring a Christmas or holiday decorator in Lancaster County, PA: indoor stylists vs. light installers, when to book, cited cost ranges, and questions to ask.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/bridal-shower.jpg",
    imageAlt: "Candlelit table with red florals and taper candles",
    excerpt:
      "Indoor stylists vs. light installers, when to book, and what holiday decorating costs.",
    body: [
      { type: "p", text: "Between work, family, and the calendar of Christmas events around Lancaster County, decorating the house can slip to the bottom of the list. More homeowners now hire it out: a stylist trims the tree and dresses the mantel, a lighting crew handles the roofline, and someone comes back in January to pack it all away. Here’s how to hire well." },
      { type: "h2", text: "Two kinds of holiday pros" },
      { type: "p", text: "Search “Christmas decorating Lancaster” and most results are outdoor lighting companies. That’s one kind of service. The other is interior holiday styling. They’re often different businesses:" },
      { type: "ul", items: [
        "Interior holiday stylists: tree trimming, mantels, staircase garland, tablescapes, entryways and porch styling. Often work with your existing décor.",
        "Lighting installers: rooflines, trees, bushes, walkways and outdoor displays. Usually supply the lights and often offer takedown and storage.",
      ] },
      { type: "p", text: "Decide which matters most to you, or get one of each. A lot of homes look best with a lighting installer outside and a stylist indoors." },
      { type: "h2", text: "When to book" },
      { type: "p", text: "Install dates right after Thanksgiving are the first to go. Requesting quotes in October or early November gives you the most choice. If you’re hosting a party, plan backwards from that date and leave a buffer. Ask about takedown too; early January is common." },
      { type: "h2", text: "What it costs" },
      { type: "p", text: "There’s no public price list for Lancaster County holiday decorating. As a national reference, Angi’s 2026 Christmas decorating cost guide reports:" },
      { type: "ul", items: [
        "Holiday decorating service: about $300 to $2,500+, depending on scope.",
        "Professional tree decorating: about $200–$600 for labor and materials (the tree itself is extra).",
        "Holiday design by interior designers: about $50–$200 per hour, or per-project pricing.",
        "Takedown: about $100–$200 when not included.",
      ] },
      { type: "p", text: "The same guide notes that materials can be a large share of the first year’s cost, so later years can cost less if you reuse the décor. Local quotes vary, so ask for a written estimate." },
      { type: "h2", text: "Questions to ask a holiday decorator" },
      { type: "ul", items: [
        "Can you use my existing décor, or do you supply everything?",
        "Is takedown included? When, and how will things be packed?",
        "For lights: who owns them, and are maintenance visits included if a strand fails?",
        "Are you insured for ladder and roof work?",
        "What do you need from me before install day?",
      ] },
      { type: "h2", text: "Prep that makes install day smoother" },
      { type: "ul", items: [
        "Bring bins out of the attic or basement and label what’s inside.",
        "Test light strands and toss the dead ones.",
        "Clear the mantel, entry table and tree area.",
        "Save a few photos of looks you like.",
      ] },
      { type: "h2", text: "Get matched with a Lancaster holiday decorator" },
      { type: "p", text: "Tell us what you want decorated (indoors, outdoors, or both), your preferred install date, and a budget range. We’ll pass your request to up to two independent Lancaster County pros. Free, no obligation." },
    ],
    faqs: [
      { q: "How much does a Christmas decorating service cost?", a: "Nationally, Angi’s 2026 guide lists about $300 to $2,500+ depending on scope. Lancaster pricing varies, so request a free quote." },
      { q: "When should I book a Christmas decorator in Lancaster County?", a: "October or early November is a good time to request quotes. Late-November install dates fill up first." },
      { q: "Do holiday decorators also take decorations down?", a: "Many do, either included or as an add-on, usually in early January. Confirm when you book." },
    ],
    sources: [SOURCES.ANGI_HOLIDAY],
    related: ["/holiday-decorating", "/event-decor", "/interior-decorating"],
  },
  {
    slug: "home-staging-lancaster-pa",
    title: "Home Staging in Lancaster, PA: What Sellers Should Know",
    metaTitle: "Home Staging in Lancaster, PA: Costs, Options & Tips",
    description:
      "Home staging in Lancaster, PA explained: occupied vs. vacant staging, what NAR’s 2025 data says about results and cost, which rooms to stage first, and prep tips.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/place-setting.jpg",
    imageAlt: "Dining table set with gold chargers and florals",
    excerpt:
      "Occupied vs. vacant staging, cited NAR data on cost and results, and where to start.",
    body: [
      { type: "p", text: "If you’re listing a home in Lancaster County, someone has probably told you to stage it. Staging means arranging furniture and décor so rooms look their best in listing photos and buyers can picture themselves living there. Here’s what it involves, what the data says, and how to choose the right level of help." },
      { type: "h2", text: "Your staging options" },
      { type: "ul", items: [
        "Consultation only: a stager walks through and gives you a room-by-room to-do list. Lowest cost; you do the work.",
        "Occupied staging: you keep living there while the stager edits and rearranges your furniture and adds rented accessories or a few pieces.",
        "Vacant staging: furniture and décor are brought into an empty home for photos and showings, then picked up later.",
        "Photo-day styling: a final pass right before the photographer arrives.",
      ] },
      { type: "h2", text: "What the data says" },
      { type: "p", text: "The National Association of Realtors’ 2025 Profile of Home Staging surveyed real estate agents nationwide. Key findings:" },
      { type: "ul", items: [
        "83% of buyers’ agents said staging made it easier for buyers to picture the property as their future home.",
        "49% of sellers’ agents said staging reduced time on market (30% slightly, 19% significantly).",
        "29% of agents reported a 1%–10% increase in the dollar value offered for staged homes.",
        "The median cost of using a staging service was $1,500, compared with $500 when the seller’s agent staged the home.",
      ] },
      { type: "p", text: "These are national survey results, not a guarantee for any particular house. Your agent can tell you how staged homes are doing in your price range and neighborhood." },
      { type: "h2", text: "Which rooms to stage first" },
      { type: "p", text: "Buyers’ agents in the NAR report ranked the living room as the most important room to stage (37%), followed by the primary bedroom (34%) and the kitchen (23%). Guest bedrooms ranked lowest. If your budget only covers a few rooms, start there." },
      { type: "h2", text: "Prep you can do now" },
      { type: "p", text: "The three most common recommendations agents gave sellers in the NAR report were decluttering (91%), cleaning the entire home (88%), and improving curb appeal (77%). A few practical steps:" },
      { type: "ul", items: [
        "Pack away personal photos, collections, and most countertop items.",
        "Clear floors and the tops of furniture; rent a storage unit or pod if needed.",
        "Fix small things buyers notice: burnt-out bulbs, sticky doors, chipped paint.",
        "Tidy the front entry: swept walk, clean door, a simple planter.",
      ] },
      { type: "h2", text: "Choosing a Lancaster stager" },
      { type: "p", text: "Ask to see before-and-after photos, how pricing works (consultation fee, per-room, or monthly furniture rental), how long rental terms last, and who handles pickup after closing. Agents: ask whether the stager offers realtor packages." },
      { type: "p", text: "Want a couple of options to compare? Send us the property details and list date and we’ll connect you with up to two independent Lancaster County stagers. Free, no obligation." },
    ],
    faqs: [
      { q: "How much does home staging cost?", a: "NAR’s 2025 Profile of Home Staging reports a national median of $1,500 when a staging service is used. Lancaster quotes vary by home and scope, so request a free quote." },
      { q: "Is home staging worth it in Lancaster?", a: "It depends on the home and the market. Nationally, 49% of sellers’ agents in NAR’s 2025 report said staging reduced time on market. Ask your agent how staged listings are doing locally." },
      { q: "Can I stage my home while living in it?", a: "Yes. That’s called occupied staging, and it works with your own furniture plus a few rented pieces." },
    ],
    sources: [SOURCES.NAR_STAGING],
    related: ["/home-staging", "/interior-decorating", "/service-area"],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p])) as Record<string, BlogPost>;
