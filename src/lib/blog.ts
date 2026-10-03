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

const VENUES = {
  PLAIN_FANCY: { label: "Plain & Fancy Farm — Private dining for showers & celebrations (incl. AmishView Inn & Suites room)", url: "https://plainandfancyfarm.com/private-events/small-private-events/" },
  VENUE_272: { label: "Venue 272 — Bridal & baby showers", url: "https://venue272.com/events/bridal-baby-showers/" },
  HORST: { label: "Horst Arts Center — Bridal & baby showers in Lancaster County", url: "https://horstarts.com/experience/bridal-baby-showers-lancaster-county/" },
  BURKE_POPPY: { label: "Burke & Poppy Venue — Lancaster PA party venue & event space", url: "https://burkeandpoppy.com/burke-and-poppy-venue" },
  TEA_AFFAIR: { label: "A Tea Affair — The Tea Room (Lititz)", url: "https://teaaffair1776.wixsite.com/a-tea-affair/tea-room" },
  LITITZ_SPRINGS: { label: "Lititz Springs Inn — Private event spaces", url: "https://lititzspringsinn.com/inn-venues/" },
  SCOOTERS: { label: "Scooter’s Restaurant & Bar (Lititz) — Group events", url: "https://scooterslititz.com/group_events.html" },
} satisfies Record<string, Source>;

export const posts: BlogPost[] = [
  {
    slug: "graduation-party-decoration-ideas-cost-lancaster",
    title: "Graduation Party Decoration Ideas & Costs in Lancaster, PA",
    metaTitle: "Graduation Party Decorations: Ideas & Costs in Lancaster, PA",
    description:
      "Graduation party decoration ideas for Lancaster County open houses, tent and hall parties, plus what local balloon and décor businesses publish for arches, backdrops and number stands.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/graduation.jpg",
    imageAlt: "Black and gold graduation party décor with balloons",
    excerpt: "Backdrop, balloon and memory-table ideas, booking timing, and published local prices.",
    body: [
      { type: "p", text: "Graduation season in Lancaster County means a lot of open houses on the same few weekends: backyard tents in Lititz and Mount Joy, pavilions and fire halls, church fellowship halls, and joint parties for groups of friends. Here’s how to decorate a grad party that looks great in photos, when to book, and what local businesses publish for the most popular pieces." },
      { type: "h2", text: "Start with one statement backdrop" },
      { type: "p", text: "Every guest takes a photo with the graduate, so the backdrop is where décor money goes furthest. Popular options:" },
      { type: "ul", items: [
        "Balloon arch or organic garland in school colors, framing a “Class of 2027” or name sign",
        "Framed chiara (rounded) or hoop arch with a custom vinyl message",
        "Shimmer wall or rectangle backdrop with marquee numbers for the graduation year",
        "Cap-and-diploma balloon accents, stars or a balloon “stack” by the entrance",
      ] },
      { type: "h2", text: "Tables that tell the story" },
      { type: "ul", items: [
        "Memory table: baby pictures, team jerseys, varsity letters, awards and the college pennant",
        "Card box and guest book with clear signage",
        "Dessert table: cupcake tower or cake with school-color linens and a balloon garland above",
        "Guest tables: simple school-color runners or small balloon centerpieces (keep them low so people can talk)",
      ] },
      { type: "h2", text: "Tent, garage and hall parties" },
      { type: "p", text: "Book tents, tables and chairs first; those come from rental companies. Then share the layout with your decorator. Under tents, plan for wind (weighted pieces, shorter balloon columns) and keep balloons out of direct afternoon sun, which makes latex fade and pop. In fellowship halls and fire halls, ask about setup time and whether anything can be attached to walls." },
      { type: "h2", text: "When to book" },
      { type: "p", text: "Most Lancaster County high school commencements fall in late May and early June, and grad parties stack up on the following weekends. Decorators fill those Saturdays first, so request quotes as soon as you pick a date, ideally in late winter or early spring." },
      { type: "h2", text: "What local businesses publish (their prices)" },
      { type: "p", text: "There’s no public price survey for Lancaster grad party décor. A few area balloon businesses do publish prices on their own sites (checked October 2026):" },
      { type: "ul", items: [
        "Lala Glam Events (Wyomissing, Berks County): graduation balloon stack $225; 26-inch marquee numbers with side balloons $575.",
        "Lancaster PA Balloon Lady: chiara arches starting at $500 (includes balloons, custom vinyl message, delivery and pickup); golden hoop starting at $375; rectangle backdrop starting at $200.",
        "Balloonables (Lancaster): grab-and-go garlands starting at $80 (one color, 4 ft); themed number stands starting at $125 (pickup).",
      ] },
      { type: "p", text: "These are other businesses’ published prices, not Lancaster Decorators prices; we quote every party individually. Specialty or custom balloons, florals, delivery distance and larger installs change the total, so get a written quote for your party." },
      { type: "h2", text: "Save money without looking cheap" },
      { type: "ul", items: [
        "Put most of the budget into the backdrop and keep the rest simple",
        "Choose a grab-and-go garland and set it up yourself if you’re hosting indoors",
        "Share décor with a joint party for two or three grads",
        "Reuse the backdrop pieces at the dessert table",
      ] },
      { type: "h2", text: "Get a quote from Lancaster Decorators" },
      { type: "p", text: "Tell us the date, location, school colors and guest count, and we’ll send you ideas and a free quote. If we’re already booked on your date, we’ll tell you up front and can connect you with a vetted local decorator." },
    ],
    faqs: [
      { q: "How much do graduation party decorations cost in Lancaster?", a: "It depends on what you want. Area businesses publish starting prices; for example, Lancaster PA Balloon Lady lists chiara arches from $500 and backdrops from $200, and Balloonables lists grab-and-go garlands from $80. Request a free quote for your party." },
      { q: "When should I book grad party décor?", a: "As early as possible. Weekends right after commencement in late May and June fill first, so late winter or early spring is a good time to request quotes." },
      { q: "What are good graduation party decoration ideas?", a: "A balloon arch or garland in school colors with a “Class of” sign, a memory table with photos and jerseys, a styled dessert table, and simple school-color centerpieces." },
    ],
    sources: [SOURCES.LALA_GLAM, SOURCES.BALLOON_LADY, SOURCES.BALLOONABLES],
    related: ["/graduation-party-decorations", "/balloon-decor", "/birthday-party-decorations"],
  },
  {
    slug: "baby-shower-venues-lancaster-county",
    title: "Baby Shower Venues in Lancaster County, PA (+ Décor Checklist)",
    metaTitle: "Baby Shower Venues in Lancaster County, PA + Décor Checklist",
    description:
      "Baby shower venues in Lancaster County, PA: private rooms and small event spaces in Lititz, Manheim, Bird-in-Hand and Adamstown, with guest capacities, plus a shower décor checklist.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/baby-shower.jpg",
    imageAlt: "Sage and cream baby shower décor",
    excerpt: "Private rooms and small venues with listed capacities, and what to ask before you decorate.",
    body: [
      { type: "p", text: "Finding the room is usually the first step in planning a baby shower. Below are Lancaster County spaces that say on their own websites that they host baby showers, with the guest counts they list. We’re not affiliated with any of them; details come from each venue’s site as of October 2026, so confirm availability, pricing and décor rules directly." },
      { type: "h2", text: "Lititz" },
      { type: "ul", items: [
        "A Tea Affair, 8 Sturgis Ln: “The Tea Room” accommodates up to 40–45 guests and lists baby showers among its occasions.",
        "Lititz Springs Inn: the Regency Room holds up to 45 guests, with private access, and is listed for baby showers.",
        "Scooter’s Restaurant & Bar, 921 Lititz Pike: private dining area for up to 40 people or the four-season patio for up to 80, with custom catering menus; baby showers are listed.",
      ] },
      { type: "h2", text: "Manheim" },
      { type: "ul", items: [
        "Burke & Poppy Venue, 25 S Main St: an intimate, already-decorated event space for up to 55 guests; setup and cleanup time are separate from rental hours.",
        "Horst Arts Center, 17 N Main St: three rooms, a full kitchen and a back patio, recommended for showers with fewer than 30 guests; optional DIY workshops.",
      ] },
      { type: "h2", text: "Bird-in-Hand" },
      { type: "ul", items: [
        "Plain & Fancy Farm, 3121 Old Philadelphia Pike: private dining spaces for groups of 20 to 116, with buffet, family-style or limited-menu options, and larger banquet spaces for up to 250.",
        "AmishView Inn & Suites (listed on Plain & Fancy Farm’s site): a private, enclosed room that seats up to 100.",
      ] },
      { type: "h2", text: "Adamstown / Denver" },
      { type: "ul", items: [
        "Venue 272, 112 Muddy Creek Church Rd: the Social Room (up to 30), the Hearth Room (up to 65 standing or 32 seated), the Grace Room (up to 170) and an outdoor patio.",
      ] },
      { type: "h2", text: "Other options" },
      { type: "p", text: "Church fellowship halls, fire company social halls and a relative’s home are also common for Lancaster showers and are often the most affordable. Ask about kitchen access and tables and chairs." },
      { type: "h2", text: "Questions to ask before you book décor" },
      { type: "ul", items: [
        "How early can vendors get in, and when must everything be out?",
        "Are balloons, confetti, candles or wall attachments allowed?",
        "What does the room already have: tables, linens, a backdrop wall, decorations?",
        "Is there a spot for a gift table and a photo backdrop near good light?",
      ] },
      { type: "h2", text: "Baby shower décor checklist" },
      { type: "ul", items: [
        "Backdrop: “Oh Baby” or name sign with a balloon garland or arch",
        "Dessert table: linens, cake stand, risers and signage",
        "Gift table and card box",
        "Guest table centerpieces (low florals, greenery or small balloon pieces)",
        "Welcome sign at the entrance",
        "Games or activity table, if you’re planning games",
      ] },
      { type: "p", text: "Want it set up for you? Tell us the venue, date, theme and guest count, and Lancaster Decorators will send you ideas and a free quote." },
    ],
    faqs: [
      { q: "What are small baby shower venues in Lancaster County?", a: "Examples from venue websites include Horst Arts Center in Manheim (under 30 guests), Venue 272’s Social Room (up to 30), A Tea Affair and Lititz Springs Inn’s Regency Room in Lititz (about 45), and Burke & Poppy in Manheim (up to 55). Confirm details directly with each venue." },
      { q: "Can I bring my own decorator to a restaurant private room?", a: "Usually, but ask about setup time and rules on balloons, candles and wall attachments first." },
      { q: "How far ahead should I book a shower venue?", a: "It depends on the venue and season; popular weekend spots can book well ahead. Reserve the room before you book décor so the decorator knows the space." },
    ],
    sources: [VENUES.TEA_AFFAIR, VENUES.LITITZ_SPRINGS, VENUES.SCOOTERS, VENUES.BURKE_POPPY, VENUES.HORST, VENUES.PLAIN_FANCY, VENUES.VENUE_272],
    related: ["/baby-shower-decorations", "/balloon-decor", "/birthday-party-decorations"],
  },
  {
    slug: "church-anniversary-first-communion-decoration-ideas",
    title: "Church Anniversary & First Communion Decoration Ideas",
    metaTitle: "Church Anniversary & First Communion Decoration Ideas (Lancaster)",
    description:
      "Decoration ideas for church anniversary banquets (25th, 50th, 75th, 100th), first communion and baptism celebrations, and fellowship hall events, with tips for decorating church spaces in Lancaster County.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/sweet-sixteen.jpg",
    imageAlt: "Candlelit banquet hall with floral centerpieces",
    excerpt: "Anniversary banquet, first communion and baptism décor ideas, and how to work within church guidelines.",
    body: [
      { type: "p", text: "Church celebrations mix the sacred with the social: a service in the sanctuary, then a meal in the fellowship hall or a nearby banquet room. Good décor honors both. Here are ideas for church anniversaries, first communions and baptisms, plus practical tips for decorating church spaces." },
      { type: "h2", text: "Start with your church’s guidelines" },
      { type: "ul", items: [
        "Ask the church office or property committee about candles and open flames, aisle runners, petals, and what can be attached to pews, walls or the altar area.",
        "Confirm when the sanctuary and fellowship hall are free between services and other events.",
        "Find out whether décor must be removed the same day and who has keys for setup.",
        "Check what the hall already has: banquet tables, linens, a stage or a screen.",
      ] },
      { type: "h2", text: "Church anniversary decoration ideas" },
      { type: "ul", items: [
        "History display: a timeline of the congregation with photos of past buildings, pastors and confirmation classes, set near the entrance or along a hall wall",
        "Milestone palette: silver for a 25th, gold for a 50th, diamond-white and silver for a 75th, or the church’s own colors",
        "Head table and stage: a fabric or greenery backdrop with the anniversary year and a verse or theme",
        "Centerpieces: low florals or greenery with candles (or LED candles where flames aren’t allowed), so guests can see across long banquet tables",
        "Altar arrangements for the anniversary service that can move to the banquet afterward",
        "Program and guest book table with a framed photo of the church",
      ] },
      { type: "h2", text: "First communion decoration ideas" },
      { type: "ul", items: [
        "White, ivory and gold palette, or soft blush, sage or light blue accents",
        "Backdrop with the child’s name, date and a cross, chalice or dove motif",
        "Balloon garland in white and gold over the dessert table",
        "Cake and dessert table with a framed photo from the ceremony",
        "Simple centerpieces: baby’s breath, white roses or greenery in clear vases",
        "Rosary or keepsake favor table",
      ] },
      { type: "h2", text: "Baptism and christening ideas" },
      { type: "ul", items: [
        "Soft neutral or pastel palette with greenery",
        "Name sign or “God bless” backdrop for family photos",
        "Dessert table with a cake topped by a cross or dove",
        "Small floral centerpieces and a guest book with a photo of the baby",
      ] },
      { type: "h2", text: "Fellowship hall banquets" },
      { type: "p", text: "Long banquet tables and plain walls are the norm. A few changes make the biggest difference: full-length table linens or runners, consistent centerpieces down the tables, a decorated head table or stage, uplighting or string lights where allowed, and a welcome table at the door." },
      { type: "h2", text: "Get help decorating" },
      { type: "p", text: "Committee members and families across Lancaster County can request quotes. Tell us the church or hall, date, guest count and guidelines, and Lancaster Decorators will send you a plan and a free quote." },
    ],
    faqs: [
      { q: "What colors are used for a 50th church anniversary?", a: "Gold is traditional for a 50th, often with white or ivory. Many churches also use their own colors or liturgical colors." },
      { q: "What are simple first communion decorations?", a: "A white-and-gold palette, a name backdrop with a cross or chalice motif, a styled dessert table and simple white floral centerpieces." },
      { q: "Can you set up in our fellowship hall between services?", a: "Usually, if the church allows it. Share the available setup window and any guidelines in your request." },
    ],
    sources: [],
    related: ["/church-event-decorations", "/wedding-decor", "/holiday-decorating"],
  },
  {
    slug: "christmas-holiday-decorating-lancaster-county",
    title: "Christmas Party & Church Christmas Decorations in Lancaster County",
    metaTitle: "Christmas Party & Church Christmas Decorations in Lancaster County",
    description:
      "Planning Christmas party or church Christmas décor in Lancaster County? Ideas for company parties, fellowship dinners, sanctuary greenery and Easter follow-up, plus booking tips.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    image: "/images/bridal-shower.jpg",
    imageAlt: "Candlelit holiday table with red florals and taper candles",
    excerpt: "Company parties, church Christmas dinners and sanctuary décor: ideas and booking tips.",
    body: [
      { type: "p", text: "December brings a packed calendar of company parties, church Christmas dinners, cantatas and community events across Lancaster County. Here’s how to plan the décor for holiday events and church Christmas decorating, and when to book." },
      { type: "h2", text: "Company and venue Christmas parties" },
      { type: "ul", items: [
        "Entrance: a lit garland arch or balloon installation with the company name",
        "Photo backdrop: greenery, ornaments or a black-and-gold shimmer wall",
        "Tables: evergreen runners, candles (or LED candles), chargers and simple florals",
        "New Year’s parties: marquee numbers and metallic balloon installs",
      ] },
      { type: "h2", text: "Church Christmas dinners and fellowship events" },
      { type: "ul", items: [
        "Banquet tables with red, green or white-and-gold runners and low centerpieces",
        "A decorated head table or stage for the program or children’s pageant",
        "Welcome table with programs and a nativity or wreath display",
      ] },
      { type: "h2", text: "Sanctuary décor for Advent and Christmas" },
      { type: "ul", items: [
        "Wreaths and garland on doors, the narthex and windows",
        "Poinsettia displays and altar or chancel arrangements",
        "Advent wreath styling and Christmas Eve candlelight details, within church guidelines",
      ] },
      { type: "p", text: "Planning ahead for spring? We can also help with Easter church décor: altar and chancel flowers, entrance arrangements and Easter brunch tables." },
      { type: "h2", text: "When to book" },
      { type: "p", text: "December weekends fill early for both venues and decorators. Request quotes in October or early November. For churches, share your Advent, Christmas Eve and Christmas Day service times so installs and takedowns fit around them." },
      { type: "h2", text: "Get a quote from Lancaster Decorators" },
      { type: "p", text: "Tell us the event, date, venue and guest count, and we’ll send you ideas and a free quote." },
    ],
    faqs: [
      { q: "When should I book Christmas party décor in Lancaster County?", a: "October or early November gives the most choice; December weekends fill quickly." },
      { q: "Can you set up church Christmas décor around services?", a: "Yes, if the church allows it. Share service times and guidelines so the install and takedown fit your schedule." },
      { q: "Do you decorate homes for Christmas?", a: "No. Lancaster Decorators focuses on events: parties, banquets, church events and celebrations." },
    ],
    sources: [],
    related: ["/holiday-decorating", "/church-event-decorations", "/event-decor"],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p])) as Record<string, BlogPost>;
