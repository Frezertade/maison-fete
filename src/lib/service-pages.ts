import type { Faq } from "@/lib/seo";

export type Source = { label: string; url: string };

export type ServicePage = {
  slug: string;
  path: string;
  /** Short name used in breadcrumbs, nav and schema */
  name: string;
  /** <title> (brand appended by template) */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  /** Pre-selects the project type in the lead form */
  projectType: string;
  includes: { heading: string; items: { title: string; text: string }[] };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  pricing: { heading: string; paragraphs: string[]; sources?: Source[] };
  faqs: Faq[];
  related: string[];
};

const ANGI_DESIGN: Source = {
  label: "Angi — How Much Does an Interior Designer Cost? [2026 Data]",
  url: "https://www.angi.com/articles/how-much-does-it-cost-hire-interior-designer.htm",
};
const ANGI_HOLIDAY: Source = {
  label: "Angi — Christmas Decorating Service Cost [2026 Data]",
  url: "https://www.angi.com/articles/christmas-decorating-service-cost.htm",
};
const NAR_STAGING: Source = {
  label: "National Association of Realtors — 2025 Profile of Home Staging (press release)",
  url: "https://www.nar.realtor/press-releases/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market",
};
const PA_ACT_144: Source = {
  label: "Pennsylvania General Assembly — 2024 Act 144 (Architects Licensure Law amendments)",
  url: "https://www.palegis.us/statutes/unconsolidated/law-information/view-statute&txtType=PDF&SessYr=2024&SessInd=0&ActNum=0144.",
};

export const SOURCES = { ANGI_DESIGN, ANGI_HOLIDAY, NAR_STAGING, PA_ACT_144 };

export const servicePages: ServicePage[] = [
  {
    slug: "interior-decorating",
    path: "/interior-decorating",
    name: "Interior Decorating",
    title: "Interior Decorator in Lancaster, PA — Free Quotes",
    description:
      "Find an interior decorator or designer in Lancaster, PA for room styling, furniture layout, color and window treatments. Tell us your project and get matched free.",
    eyebrow: "Interior Decorating · Lancaster County",
    h1: "Interior Decorators & Designers in Lancaster, PA",
    intro: [
      "Want one room to finally feel finished, or need help pulling a whole house together after a move or a renovation? Tell us what you’re working on and we’ll introduce you to up to two independent Lancaster County decorators or interior designers who take on that kind of project.",
      "It’s free and you’re not committing to anything. You compare ideas and quotes, then choose who to hire, or don’t hire anyone.",
    ],
    image: "/images/designer-florals.jpg",
    imageAlt: "Decorator styling a floral arrangement on a dining table",
    projectType: "Interior design / room styling",
    includes: {
      heading: "What a Lancaster decorator can help with",
      items: [
        { title: "Room styling & refresh", text: "Living rooms, primary bedrooms, dining rooms, entryways and home offices: rearranging what you own and filling the gaps." },
        { title: "Furniture layout & space planning", text: "Making awkward rooms work: traffic flow, a TV and fireplace on the same wall, open-concept zones, and scale that fits." },
        { title: "Color & paint selection", text: "Whole-house color plans, sample boards, and trim, cabinet and accent choices that work in your light." },
        { title: "Window treatments & soft furnishings", text: "Drapery, shades, bedding, pillows and rugs, measured and coordinated." },
        { title: "Lighting, art & accessories", text: "Lamps and fixtures, art placement and gallery walls, shelf styling: the finishing layer most rooms are missing." },
        { title: "New-build & renovation selections", text: "Finishes, fixtures and furnishings for a new home or remodel, usually handled by an interior designer working alongside your builder." },
      ],
    },
    sections: [
      {
        heading: "Decorator or interior designer: which do you need?",
        paragraphs: [
          "A decorator works with what goes into a room: furniture, color, fabric, lighting, art and accessories. An interior designer usually does that and more, including space planning, cabinetry and fixture selections, and coordinating with contractors on renovations or new construction.",
          "In Pennsylvania you don’t need a state license to decorate. Since 2024 the state has protected the title “Certified Interior Designer,” which requires qualifying education, supervised experience and a national exam (Act 144 of 2024, administered by the State Architects Licensure Board). If you need construction drawings or work that touches building systems, ask the pros you’re matched with about their qualifications.",
          "Not sure which you need? Describe the project in the form and we’ll route it to the right kind of pro.",
        ],
      },
      {
        heading: "How it usually works",
        paragraphs: [
          "Most projects start with a consultation (in your home or virtually) to talk about goals, budget, and what you want to keep. From there you might get a design plan you carry out yourself, or the decorator handles purchasing, delivery and installation for you.",
        ],
        bullets: [
          "Consultation-only: an expert eye and a shopping/action list. Good for DIY-minded homeowners.",
          "Room design: a plan for one room (layout, palette, product picks) you can buy over time.",
          "Full service: the pro sources, orders, receives, and installs, often with a final “reveal.”",
          "Hourly help: shelf styling, art hanging, or rearranging what you already own.",
        ],
      },
      {
        heading: "Tips before you hire",
        paragraphs: [
          "Ask to see completed rooms similar to yours, ask how fees are billed (hourly, flat, per room, or a markup on furnishings), and get the scope in writing. Measure the room and snap a few photos before the first call; it saves time and gets you a more accurate quote.",
        ],
      },
    ],
    pricing: {
      heading: "How much does an interior decorator cost?",
      paragraphs: [
        "It depends on scope, how many rooms, and whether furnishings are included. For a national reference, Angi’s 2026 cost guide puts interior designer hourly rates at about $100–$500, initial consultations at roughly $200–$800, and most full projects between $2,055 and $15,256 (not counting furniture and materials).",
        "Lancaster County quotes can land anywhere in or outside those national ranges, so the most reliable number is a quote for your actual rooms. Request a free quote and compare.",
      ],
      sources: [ANGI_DESIGN],
    },
    faqs: [
      {
        q: "How much does an interior decorator cost in Lancaster, PA?",
        a: "It varies with scope and the pro’s fee structure (hourly, flat fee, per room, or a markup on furnishings). As a national reference, Angi’s 2026 guide lists hourly rates of about $100–$500 and consultations of about $200–$800. For a Lancaster-specific number, request a free quote; we’ll match you with local pros who can price your actual project.",
      },
      {
        q: "What’s the difference between an interior decorator and an interior designer?",
        a: "Decorators focus on furnishings, color, fabrics, lighting and accessories. Interior designers typically also handle space planning, cabinetry and fixture selections, and coordinate with contractors. In Pennsylvania, “Certified Interior Designer” is a protected title under Act 144 of 2024; decorating itself doesn’t need a state license.",
      },
      {
        q: "Can a decorator work with the furniture I already have?",
        a: "Yes. Many projects start by rearranging and editing what you own and then adding a few key pieces, rugs, lighting or art. Say so in your request and we’ll match you with pros who offer redesign or “use what you have” styling.",
      },
      {
        q: "Do I have to hire one of the pros you match me with?",
        a: "No. Requests are free and there’s no obligation. You talk with the pros, compare ideas and pricing, and decide.",
      },
      {
        q: "Which areas do you cover?",
        a: "All of Lancaster County, including Lancaster city, Lititz, Ephrata, Manheim, Mount Joy, Elizabethtown, Strasburg, Leola, Millersville and Willow Street. See our service area page for details.",
      },
      {
        q: "Is Lancaster Decorators a design firm?",
        a: "No. We’re a free referral service. We pass your request to independent local décor and design professionals, who set their own prices and do the work.",
      },
    ],
    related: ["/home-staging", "/holiday-decorating", "/blog/interior-decorator-cost-lancaster-pa", "/service-area"],
  },
  {
    slug: "home-staging",
    path: "/home-staging",
    name: "Home Staging",
    title: "Home Staging in Lancaster, PA — Sellers & Realtors",
    description:
      "Home staging in Lancaster, PA: occupied and vacant staging, pre-listing consultations and photo-ready styling. Get matched with local stagers. Free, no obligation.",
    eyebrow: "Home Staging · Lancaster County",
    h1: "Home Staging in Lancaster, PA",
    intro: [
      "Getting ready to list? Staging makes rooms photograph well and helps buyers picture themselves living there. Tell us about the property and timeline and we’ll connect you with up to two independent Lancaster County stagers.",
      "We work with homeowners and real estate agents alike, and with occupied homes, vacant homes, and one-time consultations.",
    ],
    image: "/images/place-setting.jpg",
    imageAlt: "Dining table set with gold chargers and florals",
    projectType: "Home staging (selling)",
    includes: {
      heading: "Staging services you can request",
      items: [
        { title: "Pre-listing consultation", text: "A walkthrough with a room-by-room checklist you carry out yourself: declutter, rearrange, repair, and what to store." },
        { title: "Occupied staging", text: "You keep living in the home. The stager edits and rearranges your furniture and adds rented art, accessories or a few key pieces." },
        { title: "Vacant staging", text: "Furniture and décor brought into an empty home for listing photos and showings, then removed after closing (terms vary by stager)." },
        { title: "Photo-day styling", text: "A focused visit right before the photographer arrives: bedding, towels, lighting, counters and curb appeal." },
        { title: "Realtor partnerships", text: "Agents can submit a listing for a quote and add staging to their marketing package." },
        { title: "Downsizing help", text: "Planning what fits in the next home while getting the current one market-ready." },
      ],
    },
    sections: [
      {
        heading: "Does staging actually help?",
        paragraphs: [
          "Results vary by house and market, so here is what the industry data says. In the National Association of Realtors’ 2025 Profile of Home Staging, 83% of buyers’ agents said staging made it easier for buyers to picture the property as their future home. 49% of sellers’ agents said staging reduced time on market, and 29% reported a 1%–10% increase in the dollar value offered.",
          "Buyers’ agents ranked the living room as the most important room to stage, followed by the primary bedroom and the kitchen. If your budget is tight, start there.",
        ],
      },
      {
        heading: "Occupied vs. vacant staging",
        paragraphs: [
          "Occupied staging usually costs less because it works with your furniture. The tradeoff is keeping the house show-ready while you live in it. Vacant staging brings in a full set of furniture, which helps buyers understand scale in empty rooms, but it involves delivery, rental terms and removal.",
        ],
        bullets: [
          "Living in the house while it’s listed → occupied staging or a consultation",
          "Already moved out → vacant staging, at least for the main living areas",
          "Tight budget → a consultation plus a photo-day styling visit",
        ],
      },
      {
        heading: "Before the stager arrives",
        paragraphs: [
          "The top recommendations agents give sellers in the NAR report are decluttering, cleaning the whole house, and improving curb appeal. Getting a head start on those three makes any staging budget go further.",
        ],
      },
    ],
    pricing: {
      heading: "What does home staging cost?",
      paragraphs: [
        "Pricing depends on whether the home is occupied or vacant, how many rooms are staged, and how long rented furniture stays. NAR’s 2025 Profile of Home Staging reports a national median of $1,500 when sellers’ agents used a staging service (vs. $500 when the agent staged the home themselves).",
        "Lancaster County stagers set their own rates, so request a free quote for your property.",
      ],
      sources: [NAR_STAGING],
    },
    faqs: [
      {
        q: "How much does home staging cost in Lancaster, PA?",
        a: "It varies with home size, occupied vs. vacant, and rental length. Nationally, NAR’s 2025 Profile of Home Staging reports a median of $1,500 when a staging service was used. For a Lancaster quote, submit your property details and we’ll connect you with local stagers.",
      },
      {
        q: "Is home staging worth it?",
        a: "It depends on the home and the market. In NAR’s 2025 report, 83% of buyers’ agents said staging helped buyers visualize the home, and 49% of sellers’ agents said it reduced time on market. Ask your agent and stager what makes sense for your listing.",
      },
      {
        q: "Which rooms should I stage first?",
        a: "Buyers’ agents in the NAR report ranked the living room as most important, then the primary bedroom and the kitchen. Those are a good place to focus a limited budget.",
      },
      {
        q: "Can you stage a home I’m still living in?",
        a: "Yes. Occupied staging works with your own furniture plus some rented accessories, and a consultation-only option gives you a checklist to do it yourself.",
      },
      {
        q: "I’m a real estate agent. Can I request staging for a client’s listing?",
        a: "Yes. Put the listing address or ZIP, the target list date, and whether it’s occupied or vacant in the form, and we’ll match you with a local stager.",
      },
      {
        q: "How soon can a stager start?",
        a: "It depends on the stager’s schedule and the scope. Consultations are usually quicker to book than full vacant staging. Pick your timeline in the form so pros know your list date.",
      },
    ],
    related: ["/interior-decorating", "/blog/home-staging-lancaster-pa", "/service-area", "/holiday-decorating"],
  },
  {
    slug: "holiday-decorating",
    path: "/holiday-decorating",
    name: "Holiday & Christmas Decorating",
    title: "Christmas & Holiday Decorating Service in Lancaster, PA",
    description:
      "Christmas and holiday decorating in Lancaster, PA: tree trimming, mantels, garland, porch styling and takedown. Get matched with local holiday decorators free.",
    eyebrow: "Holiday Decorating · Lancaster County",
    h1: "Christmas & Holiday Decorating Services in Lancaster, PA",
    intro: [
      "Love a beautifully decorated house but not the boxes, ladders, and January takedown? Lancaster County holiday decorators can style your tree, mantel, staircase, tables and front porch, then come back to pack it all away.",
      "Tell us what you want decorated and when, and we’ll match you with up to two independent local pros: interior holiday stylists for indoors, or lighting installers if you mostly want rooflines and outdoor lights.",
    ],
    image: "/images/bridal-shower.jpg",
    imageAlt: "Candlelit table with red florals and taper candles",
    projectType: "Holiday & seasonal home décor",
    includes: {
      heading: "What you can have decorated",
      items: [
        { title: "Christmas tree trimming", text: "Lights, ribbon, ornaments and topper on your tree. Bring your own décor, or have the pro source a new look." },
        { title: "Mantels & staircases", text: "Garland, stockings, candles and lighting, layered and secured safely." },
        { title: "Tablescapes & entertaining", text: "Dining tables, buffets and kitchen islands styled for holiday hosting." },
        { title: "Front porch & entry", text: "Wreaths, planters, lanterns and garland for curb appeal, plus fall and winter porch changeovers." },
        { title: "Outdoor lights", text: "Rooflines, trees and walkways, usually done by dedicated lighting installers, who often include takedown and storage." },
        { title: "Takedown & storage", text: "Careful January takedown, labeled bins, and a plan for next year." },
      ],
    },
    sections: [
      {
        heading: "When to book holiday decorating in Lancaster County",
        paragraphs: [
          "Holiday decorators get busy, and the weeks right after Thanksgiving fill up first. Asking for quotes in October or early November gives you the most choice of pros and install dates. If you want your home finished before a specific party, say so in the form.",
          "Most installs happen from mid-November through early December, and takedowns are usually scheduled in early January. Confirm both dates when you book.",
        ],
      },
      {
        heading: "Indoor stylist or lighting installer?",
        paragraphs: [
          "In Lancaster these are often different businesses. Interior holiday stylists focus on trees, mantels, garland and tables. Lighting companies focus on rooflines, landscape lights and outdoor displays, often with ladders, commercial-grade LEDs, and storage plans. Tell us what you want and we’ll route your request to the right one (or both).",
        ],
        bullets: [
          "Mostly indoors: tree, mantel, stairs, tables → holiday stylist",
          "Mostly outdoors: roofline, trees, walkway → lighting installer",
          "Front porch and entry → either, depending on how much lighting is involved",
        ],
      },
      {
        heading: "Make the most of your appointment",
        paragraphs: [
          "Pull your existing décor out of storage (or tell the pro where it is), test light strands ahead of time, and share a few photos of looks you love. Clear the mantel and tree area before install day.",
        ],
      },
    ],
    pricing: {
      heading: "How much does a Christmas decorating service cost?",
      paragraphs: [
        "It depends on how much you want done, whether the pro supplies the décor, and whether takedown is included. As a national reference, Angi’s 2026 guide puts a holiday decorating service at roughly $300 to $2,500+, professional tree decorating at about $200–$600 (labor and materials), and takedown at about $100–$200 when it isn’t bundled.",
        "Lancaster pricing varies by pro and scope, so request a free quote to see what your home would cost.",
      ],
      sources: [ANGI_HOLIDAY],
    },
    faqs: [
      {
        q: "How much does it cost to have your house decorated for Christmas in Lancaster?",
        a: "It varies with scope (tree only vs. whole house), whether décor is supplied, and takedown. As a national reference, Angi’s 2026 guide lists about $300 to $2,500+ for a holiday decorating service and about $200–$600 for tree decorating. Request a free quote for a Lancaster-specific price.",
      },
      {
        q: "When should I book a holiday decorator?",
        a: "Earlier is better. Requesting quotes in October or early November gives you the most choice of pros and install dates, because late November fills up quickly.",
      },
      {
        q: "Can the decorator use my own ornaments and décor?",
        a: "Usually, yes. Many stylists work with what you have and add a few new pieces. Mention it in your request.",
      },
      {
        q: "Do holiday decorators take everything down after the season?",
        a: "Many do, either included or as an add-on. Confirm takedown dates and storage when you book.",
      },
      {
        q: "Do you handle outdoor Christmas lights too?",
        a: "We can match you with Lancaster-area pros who install outdoor lights as well as indoor holiday stylists. Note which you need in the form.",
      },
      {
        q: "Do you decorate businesses and offices?",
        a: "Yes. Choose “Corporate / venue décor” or describe the space in your request, and we’ll match you with pros who handle commercial holiday décor.",
      },
    ],
    related: ["/blog/christmas-holiday-decorating-lancaster-county", "/interior-decorating", "/event-decor", "/service-area"],
  },
  {
    slug: "event-decor",
    path: "/event-decor",
    name: "Wedding & Event Décor",
    title: "Wedding & Event Decor in Lancaster, PA — Free Quotes",
    description:
      "Wedding and event décor in Lancaster, PA: ceremony arches, reception tablescapes, backdrops, showers, birthdays and corporate events. Get matched with local stylists.",
    eyebrow: "Wedding & Event Décor · Lancaster County",
    h1: "Wedding & Event Décor in Lancaster, PA",
    intro: [
      "Planning a wedding, shower, milestone birthday, or company party? Tell us the date, venue, guest count and style, and we’ll introduce you to up to two independent Lancaster County décor stylists or rental-and-styling companies.",
      "They design, deliver, set up and (usually) tear down, so you can enjoy the day.",
    ],
    image: "/images/ceremony-arch.jpg",
    imageAlt: "Outdoor floral ceremony arch at golden hour",
    projectType: "Wedding décor",
    includes: {
      heading: "Event décor you can request",
      items: [
        { title: "Wedding ceremony", text: "Arches and arbors, aisle décor, chair markers, and ceremony backdrops for barns, gardens, churches and ballrooms." },
        { title: "Wedding reception", text: "Tablescapes, centerpieces, sweetheart and head tables, linens, candles, signage and lounge areas." },
        { title: "Showers & engagements", text: "Bridal and baby showers, engagement parties, and proposal setups with backdrops and photo moments." },
        { title: "Birthdays & graduations", text: "Dessert tables, backdrops, balloon installs, and themed décor for milestone birthdays and grad parties." },
        { title: "Corporate & galas", text: "Holiday parties, galas, grand openings and brand events." },
        { title: "Décor rentals", text: "Rental-only pieces (arches, signage, linens, centerpieces) for DIY setups, from local rental companies." },
      ],
    },
    sections: [
      {
        heading: "Stylist, rental company, or planner?",
        paragraphs: [
          "A décor stylist designs the look and installs it. A rental company supplies pieces, sometimes with delivery and setup. A planner or coordinator manages the whole timeline and all the vendors. Many Lancaster couples combine them, for example a planner plus a décor stylist, or rentals plus a day-of setup crew.",
        ],
        bullets: [
          "You want a designed look installed for you → décor stylist",
          "You have a vision and helpers, and just need pieces → rentals",
          "You want someone running the whole day → planner/coordinator (plus décor)",
        ],
      },
      {
        heading: "What to have ready when you request a quote",
        paragraphs: [
          "Event date, venue (or town), guest count, approximate budget, colors or a few inspiration photos, and what the venue already provides (tables, linens, arbor, and so on). Ask the venue about its décor rules too: candle policies, setup and teardown windows, and whether things can be attached to walls or ceilings.",
        ],
      },
      {
        heading: "Booking lead times",
        paragraphs: [
          "Popular wedding dates book well ahead, so reach out as soon as your venue and date are confirmed. Smaller parties and showers often need less lead time, but weekends in peak season still fill up. Pick your timeline in the form so pros know how quickly to respond.",
        ],
      },
    ],
    pricing: {
      heading: "How much does event décor cost?",
      paragraphs: [
        "Event décor pricing varies widely with guest count, the number of installs (ceremony, reception, backdrops), rentals, florals, labor, and the venue’s setup and teardown windows. We don’t publish a price range we can’t back up. Request a free quote and the pros you’re matched with will price your actual event.",
      ],
    },
    faqs: [
      {
        q: "How much does wedding décor cost in Lancaster, PA?",
        a: "It varies with guest count, installs, rentals, florals and labor. Request a free quote with your date, venue and guest count, and local stylists will price your event.",
      },
      {
        q: "How far in advance should I book wedding décor?",
        a: "As soon as your venue and date are confirmed, especially for peak-season weekends. Smaller events can often be booked with less notice.",
      },
      {
        q: "Do decorators handle setup and teardown?",
        a: "Most full-service stylists do. Rental-only companies may charge for delivery and setup or expect you to pick up. Confirm what’s included and the venue’s timing.",
      },
      {
        q: "Can I just rent décor and set it up myself?",
        a: "Yes. Tell us you’re looking for rentals only and we’ll point you to local rental options.",
      },
      {
        q: "Do you cover venues outside Lancaster city?",
        a: "Yes. We take requests for venues across Lancaster County, including barns and farms, wineries, churches, and hotel ballrooms.",
      },
      {
        q: "Do you also do balloon décor?",
        a: "Yes. See our balloon décor page for garlands, arches, columns and backdrops.",
      },
    ],
    related: ["/balloon-decor", "/holiday-decorating", "/interior-decorating", "/service-area"],
  },
  {
    slug: "balloon-decor",
    path: "/balloon-decor",
    name: "Balloon Décor",
    title: "Balloon Decorations in Lancaster, PA — Garlands & Arches",
    description:
      "Balloon decorations in Lancaster, PA: organic garlands, arches, columns, backdrops and centerpieces for birthdays, showers, grad parties and grand openings.",
    eyebrow: "Balloon Décor · Lancaster County",
    h1: "Balloon Decorations in Lancaster, PA",
    intro: [
      "Organic garlands, arches, columns and backdrops can turn a living room, backyard or venue into a party. Tell us the date, location, colors and what you’re celebrating, and we’ll match you with up to two independent Lancaster County balloon artists.",
    ],
    image: "/images/balloon-garland.jpg",
    imageAlt: "Organic champagne balloon garland",
    projectType: "Party or shower décor",
    includes: {
      heading: "Popular balloon installs",
      items: [
        { title: "Organic garlands", text: "Mixed-size balloon garlands over a doorway, dessert table or backdrop, often with greenery or florals." },
        { title: "Arches & columns", text: "Entrance arches, framed arches, and columns that flank a stage, entrance or photo spot." },
        { title: "Backdrops & photo walls", text: "Balloon walls, shimmer walls and framed backdrops for photos." },
        { title: "Centerpieces & bouquets", text: "Table centerpieces and bouquets for showers, banquets and offices." },
        { title: "Numbers & marquees", text: "Big numbers and letters for birthdays, anniversaries and graduations." },
        { title: "Grab-and-go", text: "Pre-made garlands or bouquets you pick up and set up yourself, from some local shops." },
      ],
    },
    sections: [
      {
        heading: "Indoor vs. outdoor balloon décor",
        paragraphs: [
          "Indoor installs hold up best. Outdoors, direct sun, heat and wind can make latex balloons fade, pop or oxidize faster. Mention if your event is outdoors and the pro can suggest shade, timing and materials that hold up better.",
        ],
      },
      {
        heading: "What to include in your request",
        paragraphs: [
          "Date and start time, address or venue, indoor or outdoor, colors (or a theme), the type of install you’re picturing, and whether you need delivery and setup or would rather pick up. Inspiration photos help a lot.",
        ],
      },
    ],
    pricing: {
      heading: "How much do balloon decorations cost?",
      paragraphs: [
        "Pricing depends on the size and type of install, specialty or custom-printed balloons, and delivery and setup. Several Lancaster balloon artists publish “starting at” prices on their own sites; get a free quote to compare options for your event.",
      ],
    },
    faqs: [
      {
        q: "How much does a balloon garland cost in Lancaster, PA?",
        a: "It depends on length, colors, specialty balloons, and delivery and setup. Request a free quote with your measurements and colors to get pricing from local balloon artists.",
      },
      {
        q: "How far in advance should I book balloon décor?",
        a: "As early as you can, especially for weekend events in spring and graduation season. Some shops also offer last-minute grab-and-go garlands.",
      },
      {
        q: "Can balloon garlands go outside?",
        a: "Yes, but sun, heat and wind shorten their life. Tell the pro the event is outdoors so they can plan placement and timing.",
      },
      {
        q: "Do balloon artists deliver and set up?",
        a: "Most custom installs include or offer delivery and setup. Some smaller pieces are pickup-only. Confirm when you book.",
      },
      {
        q: "What events are balloons good for?",
        a: "Birthdays, baby and bridal showers, graduations, gender reveals, school events, grand openings and corporate events.",
      },
    ],
    related: ["/event-decor", "/holiday-decorating", "/service-area", "/interior-decorating"],
  },
];

export const servicePageByPath = Object.fromEntries(
  servicePages.map((p) => [p.path, p]),
) as Record<string, ServicePage>;
