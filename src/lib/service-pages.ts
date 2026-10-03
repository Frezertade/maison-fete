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
  /** Pre-selects the project type in the lead form ("" = no preselection) */
  projectType: string;
  includes: { heading: string; items: { title: string; text: string }[] };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  pricing: { heading: string; paragraphs: string[]; bullets?: string[]; sources?: Source[] };
  faqs: Faq[];
  related: string[];
  /** Renders a grid of event pages (used on the /event-decor hub). */
  hub?: boolean;
};

// Competitor / local-business price pages. Quoted only as THEIR published
// prices (checked Oct 2026), never as Lancaster Decorators pricing.
const BALLOON_LADY: Source = {
  label: "Lancaster PA Balloon Lady — Party décor (published “starts at” prices)",
  url: "https://www.lancasterballoonlady.com/balloons-1",
};
const BALLOONABLES: Source = {
  label: "Balloonables (Lancaster) — Balloon décor (published “starting at” prices)",
  url: "https://www.balloonables.com/balloon-decor",
};
const LALA_GLAM: Source = {
  label: "Lala Glam Events (Wyomissing, Berks County) — Graduation balloons (published prices)",
  url: "https://www.lalaglamevents.com/graduation-balloons",
};
const LANCASTER_FLOWER_CO: Source = {
  label: "Lancaster Flower Co. (Lititz) — Backdrops & arches rental prices",
  url: "https://www.lancasterflowerco.com/backdrops-and-arches",
};

export const SOURCES = { BALLOON_LADY, BALLOONABLES, LALA_GLAM, LANCASTER_FLOWER_CO };

const NOT_OUR_PRICES =
  "These are other local businesses’ own published prices, shown for reference only. They are not Lancaster Decorators prices, and the independent pros we match you with set their own quotes.";

const REFERRAL_FAQ: Faq = {
  q: "Is Lancaster Decorators the company that decorates?",
  a: "We’re a free matching service for Lancaster County event décor. You send one request and we pass it to up to two independent local decorators, stylists or balloon artists who fit your event. They quote, design, set up and take down; you decide who to hire.",
};

export const servicePages: ServicePage[] = [
  // ───────────────────────────── Graduation (priority 1)
  {
    slug: "graduation-party-decorations",
    path: "/graduation-party-decorations",
    name: "Graduation Party Decorations",
    title: "Graduation Party Decorations in Lancaster, PA — Grad Party Decor",
    description:
      "Graduation party decorations in Lancaster, PA: balloon arches in school colors, grad backdrops and photo walls, centerpieces, tent and table styling. Free quotes from local decorators.",
    eyebrow: "Graduation Party Décor · Lancaster County",
    h1: "Graduation Party Decorations in Lancaster, PA",
    intro: [
      "Open house in the backyard, a party in the church fellowship hall, or a rented pavilion for the whole class? Tell us the date, the school colors and roughly how many guests you expect, and we’ll match you with up to two independent Lancaster County decorators who do grad parties.",
      "They can design and install the whole look (balloon arch, “Class of” backdrop, photo wall, dessert and memory tables) or just the statement pieces. It’s free to ask and there’s no obligation.",
    ],
    image: "/images/graduation.jpg",
    imageAlt: "Black and gold graduation party décor with balloons and backdrop",
    projectType: "Graduation party décor",
    includes: {
      heading: "Grad party décor you can request",
      items: [
        { title: "Balloon arches & garlands", text: "Organic garlands and arches in school colors over the entrance, gift table or backdrop, with grad caps, stars or number balloons." },
        { title: "“Class of” backdrops & photo walls", text: "Backdrops with the grad’s name and year, shimmer walls, framed arches and selfie spots for family photos." },
        { title: "Memory & display tables", text: "Styled tables for photos, jerseys, diplomas and awards, plus card boxes and signage." },
        { title: "Dessert & food table styling", text: "Linens, risers, signage and balloon accents for the cake, cupcake or snack table." },
        { title: "Tent, garage & pavilion styling", text: "Centerpieces, table linens, string lights and entrance pieces that dress up rented tents and tables." },
        { title: "Marquee numbers & letters", text: "Big light-up numbers or initials for the graduation year, often paired with balloon clusters." },
      ],
    },
    sections: [
      {
        heading: "Planning a grad party in Lancaster County",
        paragraphs: [
          "Most Lancaster County graduation parties happen between late May and July, and many families host on the same few weekends right after commencement. Decorators and balloon artists book up fast for those Saturdays, so ask for quotes as soon as you’ve picked a date, ideally in late winter or early spring.",
          "Grad parties here range from backyard open houses in Lititz, Manheim or Willow Street to rented pavilions and fire halls, church fellowship halls in Ephrata or Elizabethtown, and joint parties for a group of friends. Tell us the setting and the pros can suggest what works: wind-resistant pieces for tents, compact setups for garages, or a bigger backdrop for a hall.",
        ],
      },
      {
        heading: "Ideas that photograph well",
        paragraphs: [
          "The backdrop is where every guest takes a picture, so it’s usually worth putting most of the décor budget there. A simple plan that works for most parties:",
        ],
        bullets: [
          "One statement backdrop (balloon arch or garland + name and year) near the entrance",
          "A memory table with baby photos, team jerseys and awards",
          "School-color centerpieces or balloon weights on guest tables",
          "Clear signage: food, cards, and “Congrats [Name]” at the driveway or door",
          "For outdoor parties: shade for balloons and a plan B if it rains",
        ],
      },
      {
        heading: "Pair décor with your rentals",
        paragraphs: [
          "If you’re renting a tent, tables and chairs, book those first, then share the layout with your decorator so balloon and backdrop sizes fit. Tent, table and chair rentals are offered by separate Lancaster County rental companies; décor stylists add the finishing layer on top.",
        ],
      },
    ],
    pricing: {
      heading: "How much do graduation party decorations cost?",
      paragraphs: [
        "It depends on the size of the backdrop or arch, how many tables you want styled, specialty balloons, and delivery and setup. For a sense of what area businesses publish:",
      ],
      bullets: [
        "Lala Glam Events (Wyomissing, Berks County) lists a graduation balloon stack at $225 and 26-inch marquee numbers with side balloons at $575 on its graduation page.",
        "Lancaster PA Balloon Lady lists chiara arches starting at $500 and rectangle backdrops starting at $200 (custom balloons extra).",
        "Balloonables in Lancaster lists grab-and-go garlands starting at $80 and themed number stands starting at $125 (pickup).",
        NOT_OUR_PRICES,
      ],
      sources: [LALA_GLAM, BALLOON_LADY, BALLOONABLES],
    },
    faqs: [
      { q: "How far ahead should I book graduation party decorations in Lancaster?", a: "As early as possible. Grad parties cluster on the weekends right after commencement in late May and June, so many decorators fill those dates first. Requesting quotes in late winter or early spring gives you the most choice." },
      { q: "Can you decorate a backyard or tent grad party?", a: "Yes. Many requests are backyard open houses or tent parties. Mention that it’s outdoors so the pro can plan for sun, wind and rain (balloons fade and pop faster in direct sun)." },
      { q: "Can the décor match our school colors?", a: "Yes. Put the school colors (or school name) in your request and the decorator will build the balloons, linens and backdrop around them." },
      { q: "What does a grad party decorator charge?", a: "Pricing varies with the size of the install and setup. Some area balloon businesses publish starting prices on their sites (for example, chiara arches from $500 at Lancaster PA Balloon Lady). Request a free quote for your party to get actual numbers." },
      { q: "Do you also handle tent and table rentals?", a: "Tents, tables and chairs usually come from separate local rental companies. The decorators we match you with style on top of those rentals, and many can recommend a rental company." },
      { q: "Can we do a joint party for several graduates?", a: "Yes. Joint parties are common. Tell us how many grads and whether you want one shared backdrop or a display for each." },
      REFERRAL_FAQ,
    ],
    related: ["/blog/graduation-party-decoration-ideas-cost-lancaster", "/balloon-decor", "/birthday-party-decorations", "/event-decor", "/service-area"],
  },

  // ───────────────────────────── Wedding (priority 2)
  {
    slug: "wedding-decor",
    path: "/wedding-decor",
    name: "Wedding Décor",
    title: "Wedding Decor & Decorators in Lancaster, PA — Ceremony & Reception",
    description:
      "Wedding decor in Lancaster, PA: ceremony arches, church and barn wedding decorations, reception tablescapes, backdrops and décor rentals. Get matched with local wedding decorators free.",
    eyebrow: "Wedding Décor · Lancaster County",
    h1: "Wedding Decor & Decorators in Lancaster, PA",
    intro: [
      "Barn, farm, church, winery or hotel ballroom: tell us your date, venue, guest count and style, and we’ll introduce you to up to two independent Lancaster County wedding decorators or rental-and-styling companies.",
      "They design the look, deliver and set up on the day, and (usually) clear everything out afterward, so you and your family can just enjoy the wedding.",
    ],
    image: "/images/ceremony-arch.jpg",
    imageAlt: "Outdoor floral ceremony arch at golden hour",
    projectType: "Wedding décor",
    includes: {
      heading: "Wedding décor you can request",
      items: [
        { title: "Ceremony arches & backdrops", text: "Arbors, round moongates, draped arches and floral or greenery installs for barns, gardens and ballrooms." },
        { title: "Church wedding decorations", text: "Pew and aisle markers, altar arrangements, candles (where the church allows them) and entrance décor." },
        { title: "Reception tablescapes", text: "Centerpieces, linens, chargers, candles, sweetheart and head tables, and table numbers." },
        { title: "Backdrops & lounge areas", text: "Sweetheart-table backdrops, photo walls, ceiling draping and lounge furniture." },
        { title: "Signage & details", text: "Welcome signs, seating charts, card boxes and bar menus." },
        { title: "Décor rentals", text: "Rental-only arches, stands, signage and centerpieces for couples who want to set up themselves." },
      ],
    },
    sections: [
      {
        heading: "Decorator, rental company or planner?",
        paragraphs: [
          "A wedding decorator designs the look and installs it. A rental company supplies pieces, sometimes with delivery and setup. A planner or coordinator runs the timeline and all the vendors. Many Lancaster couples combine them, for example a coordinator plus a décor stylist, or rentals plus a day-of setup crew.",
        ],
        bullets: [
          "You want a designed look installed for you → wedding decorator / stylist",
          "You have a vision and helpers and just need pieces → décor rentals",
          "You want someone running the whole day → planner or coordinator (plus décor)",
        ],
      },
      {
        heading: "Church and barn weddings in Lancaster County",
        paragraphs: [
          "Many Lancaster County weddings have a church ceremony followed by a reception at a barn, farm or hall. Ask the church about its rules on candles, aisle runners, petals and attaching anything to pews, and ask the reception venue about setup and teardown windows. Your decorator can then plan pieces that move from ceremony to reception, like arrangements and signage.",
          "Barn and farm venues around Manheim, Strasburg, Mount Joy and Leola often provide tables and string lights but not linens or centerpieces. Check what’s included before you request quotes.",
        ],
      },
      {
        heading: "What to have ready when you ask for quotes",
        paragraphs: [
          "Date, venue (or town), guest count, approximate budget, colors or a few inspiration photos, and what the venue already provides. Popular Saturdays book well ahead, so reach out as soon as your venue and date are confirmed.",
        ],
      },
    ],
    pricing: {
      heading: "How much does wedding décor cost in Lancaster?",
      paragraphs: [
        "Full-service wedding décor varies widely with guest count, the number of installs (ceremony, reception, backdrops), florals, rentals and labor, so we don’t publish a range we can’t back up. For individual rental pieces, some local shops list prices. For example, Lancaster Flower Co. in Lititz lists arch rentals from $50 (moongate) to $125 (a set of arches), with flowers not included.",
        NOT_OUR_PRICES,
      ],
      sources: [LANCASTER_FLOWER_CO],
    },
    faqs: [
      { q: "How much does it cost to hire a wedding decorator in Lancaster, PA?", a: "It depends on guest count, installs, florals, rentals and labor. Request a free quote with your date, venue and guest count, and local decorators will price your actual wedding." },
      { q: "What does a wedding decorator do?", a: "They design the décor plan, source or supply the pieces (arches, linens, centerpieces, signage, backdrops), set everything up at the ceremony and reception, and usually take it down afterward." },
      { q: "Can you decorate a church wedding ceremony?", a: "Yes. Decorators can handle aisle and pew décor, altar arrangements and entrance pieces. Check your church’s rules on candles, petals and attachments first." },
      { q: "How far in advance should I book wedding décor?", a: "As soon as your venue and date are confirmed, especially for peak-season Saturdays." },
      { q: "Can I just rent wedding décor and set it up myself?", a: "Yes. Say you want rentals only and we’ll point you toward local rental options." },
      { q: "Do you also do bridal showers and engagement parties?", a: "Yes. Choose “Bridal shower / engagement décor” in the form, or see our baby shower and event décor pages." },
      REFERRAL_FAQ,
    ],
    related: ["/church-event-decorations", "/event-decor", "/baby-shower-decorations", "/balloon-decor", "/service-area"],
  },

  // ───────────────────────────── Baby shower (priority 3)
  {
    slug: "baby-shower-decorations",
    path: "/baby-shower-decorations",
    name: "Baby Shower Decorations",
    title: "Baby Shower Decorations in Lancaster, PA — Decor & Setup",
    description:
      "Baby shower decorations in Lancaster, PA: balloon arches, “Oh Baby” backdrops, dessert and gift tables, gender-neutral and themed décor, set up at your venue or home. Free quotes.",
    eyebrow: "Baby Shower Décor · Lancaster County",
    h1: "Baby Shower Decorations & Setup in Lancaster County",
    intro: [
      "Hosting a baby shower at a restaurant private room, a church hall, a small venue or at home? Tell us the date, location, guest count and theme, and we’ll match you with up to two independent Lancaster County decorators or balloon artists who do showers.",
      "They bring the backdrop, balloons and table styling, set it all up before guests arrive, and come back for it afterward, so the host isn’t up on a ladder the morning of the shower.",
    ],
    image: "/images/baby-shower.jpg",
    imageAlt: "Sage and cream baby shower décor with balloons and dessert table",
    projectType: "Baby shower décor",
    includes: {
      heading: "Baby shower décor you can request",
      items: [
        { title: "Balloon arches & garlands", text: "Soft neutrals, pastels or a themed palette, framing the backdrop, gift table or entrance." },
        { title: "“Oh Baby” & name backdrops", text: "Round or rectangle backdrops, shimmer walls and custom name or “Baby [Last name]” signage." },
        { title: "Dessert & gift tables", text: "Linens, risers, cake stands and signage for the cake, cookies and gift display." },
        { title: "Centerpieces", text: "Floral, greenery or balloon centerpieces for guest tables." },
        { title: "Gender reveal setups", text: "Reveal backdrops and balloon pieces, plus décor that keeps the surprise." },
        { title: "Bridal showers too", text: "The same pros style bridal showers and engagement parties." },
      ],
    },
    sections: [
      {
        heading: "Where Lancaster County baby showers happen",
        paragraphs: [
          "Many local showers are held in restaurant private rooms, inns, small event studios, church fellowship halls or a relative’s home. Decorators work in all of them, but each venue has its own rules about setup time, candles, confetti and balloons, so check with the venue before you book décor.",
          "Looking for a place to host? See our guide to baby shower venues in Lancaster County, with spaces in Lititz, Manheim, Bird-in-Hand and the Adamstown area.",
        ],
      },
      {
        heading: "Popular themes",
        paragraphs: ["Bring a few inspiration photos. Themes that come up often:"],
        bullets: [
          "Gender-neutral sage, cream and greenery",
          "Classic pink or blue, or a soft mix for a reveal",
          "“Oh Baby” / “Little one” balloon backdrops",
          "Teddy bear, “we can bearly wait” and storybook themes",
          "Garden or floral showers in spring and summer",
        ],
      },
      {
        heading: "What to include in your request",
        paragraphs: [
          "Date and start time, venue or town, guest count, theme or colors, and whether you want a full setup or just a backdrop and balloons. Mention how early the venue lets vendors in; many restaurant rooms only allow a short setup window.",
        ],
      },
    ],
    pricing: {
      heading: "How much do baby shower decorations cost?",
      paragraphs: [
        "It depends on the backdrop size, balloon quantity, specialty or custom balloons, how many tables are styled, and delivery and setup. Some Lancaster-area balloon businesses publish starting prices:",
      ],
      bullets: [
        "Lancaster PA Balloon Lady lists rectangle backdrops starting at $200, golden hoop arches starting at $375 and chiara arches starting at $500.",
        "Balloonables in Lancaster lists grab-and-go garlands starting at $80 (one color, 4 ft, pickup).",
        NOT_OUR_PRICES,
      ],
      sources: [BALLOON_LADY, BALLOONABLES],
    },
    faqs: [
      { q: "How much does it cost to have a baby shower decorated in Lancaster?", a: "It varies with the size of the backdrop and balloon installs and how many tables are styled. Some local balloon businesses publish starting prices (for example, backdrops from $200 at Lancaster PA Balloon Lady). Request a free quote for your shower to get real numbers." },
      { q: "Can a decorator set up at a restaurant or church hall?", a: "Yes. Tell us the venue and its setup window. Many restaurant private rooms only allow a short setup time, so decorators often prebuild pieces." },
      { q: "Do you offer baby shower decoration packages?", a: "Many decorators offer packages (for example backdrop + balloon garland + dessert table styling). Ask for package options in your request." },
      { q: "How far in advance should I book?", a: "Two to six weeks is common for showers, and more for spring and early-summer weekends." },
      { q: "Can you help with a gender reveal?", a: "Yes. Mention it in your request so the decorator can plan reveal pieces and keep the surprise." },
      REFERRAL_FAQ,
    ],
    related: ["/blog/baby-shower-venues-lancaster-county", "/balloon-decor", "/birthday-party-decorations", "/wedding-decor", "/service-area"],
  },

  // ───────────────────────────── Birthdays (priority 4)
  {
    slug: "birthday-party-decorations",
    path: "/birthday-party-decorations",
    name: "Birthday Party Decorations",
    title: "Birthday Party Decorations in Lancaster, PA — Party Decorators",
    description:
      "Birthday party decorations in Lancaster, PA: first birthdays, kids’ themes, milestone 30th–90th parties, balloon garlands, backdrops and dessert tables. Free quotes from local party decorators.",
    eyebrow: "Birthday Party Décor · Lancaster County",
    h1: "Birthday Party Decorations in Lancaster, PA",
    intro: [
      "First birthday, a themed kids’ party, a surprise 50th or a 90th in the church hall: tell us who’s celebrating, where and when, and we’ll match you with up to two independent Lancaster County party decorators or balloon artists.",
      "Get the full setup (backdrop, balloons, dessert table, centerpieces) or just one statement piece.",
    ],
    image: "/images/birthday-setup.jpg",
    imageAlt: "Blush birthday balloon garland and dessert table setup",
    projectType: "Birthday party décor",
    includes: {
      heading: "Birthday décor you can request",
      items: [
        { title: "First birthdays", text: "“ONE” backdrops, high-chair décor, smash-cake setups and soft balloon garlands." },
        { title: "Kids’ themed parties", text: "Character, color or hobby themes with balloons, backdrops and table décor." },
        { title: "Milestone birthdays", text: "30th, 40th, 50th, 60th and beyond: marquee numbers, elegant tablescapes and photo walls." },
        { title: "Surprise parties", text: "Fast setups timed before the guest of honor arrives." },
        { title: "Balloon garlands & numbers", text: "Organic garlands, number stands and balloon walls." },
        { title: "Dessert table styling", text: "Linens, stands, signage and balloon accents around the cake." },
      ],
    },
    sections: [
      {
        heading: "Birthday parties around Lancaster County",
        paragraphs: [
          "Parties happen everywhere: homes in Millersville and Willow Street, rented party rooms and fire halls, restaurant private rooms in Lititz and Lancaster city, and church fellowship halls for big family milestones. Tell us the venue so the decorator can plan the setup window and anything the venue doesn’t allow.",
          "Kids’ party venues often offer their own themed packages; if you’re hosting at home or in a rented hall, a decorator can bring the same wow factor to your own space.",
        ],
      },
      {
        heading: "Getting the most from a smaller budget",
        paragraphs: [],
        bullets: [
          "Spend on one backdrop where photos happen, and keep tables simple",
          "Use the guest of honor’s favorite colors instead of licensed themes",
          "Ask about pickup (grab-and-go) garlands if you can set up yourself",
          "Indoor parties: balloons last longer than in direct sun",
        ],
      },
    ],
    pricing: {
      heading: "How much do birthday party decorations cost?",
      paragraphs: [
        "It depends on install size, theme, specialty balloons and setup. A few Lancaster-area businesses publish starting prices:",
      ],
      bullets: [
        "Balloonables in Lancaster lists themed 4 ft number stands starting at $125 and grab-and-go garlands starting at $80 (pickup).",
        "Lancaster PA Balloon Lady lists rectangle backdrops starting at $200 and chiara arches starting at $500.",
        NOT_OUR_PRICES,
      ],
      sources: [BALLOONABLES, BALLOON_LADY],
    },
    faqs: [
      { q: "How much does a party decorator cost in Lancaster, PA?", a: "Pricing varies with install size and setup. Some local balloon businesses publish starting prices, for example number stands from $125 at Balloonables and backdrops from $200 at Lancaster PA Balloon Lady. Request a free quote for your party." },
      { q: "Do you decorate first birthday parties?", a: "Yes. First birthdays are one of the most common requests: “ONE” backdrops, high-chair décor and soft balloon garlands." },
      { q: "Can you set up a surprise party before the guest arrives?", a: "Yes. Give the setup time and venue access details in your request." },
      { q: "Can you decorate an adult milestone birthday?", a: "Yes. 30th to 90th birthdays often feature marquee numbers, elegant tablescapes and photo backdrops." },
      { q: "How far in advance should I book?", a: "Two to four weeks is often enough, but weekends in spring and graduation season fill up faster." },
      REFERRAL_FAQ,
    ],
    related: ["/balloon-decor", "/quinceanera-sweet-16-decorations", "/baby-shower-decorations", "/event-decor", "/service-area"],
  },

  // ───────────────────────────── Church events (priority 5)
  {
    slug: "church-event-decorations",
    path: "/church-event-decorations",
    name: "Church Event Decorations",
    title: "Church Event Decorations in Lancaster, PA — Anniversaries, Baptisms, Banquets",
    description:
      "Church event decorations in Lancaster, PA: church anniversaries, baptism and christening parties, first communion, banquets and fellowship hall décor, Easter and Christmas church decorating.",
    eyebrow: "Church Event Décor · Lancaster County",
    h1: "Church Event Decorations in Lancaster County, PA",
    intro: [
      "Planning a church anniversary banquet, a baptism or first communion celebration, a fellowship dinner, or Easter and Christmas décor for the sanctuary? Tell us about the event and the space, and we’ll match you with up to two independent Lancaster County decorators who work in churches and fellowship halls.",
      "Requests can come from a church committee, a ministry leader or a family planning a celebration after a service.",
    ],
    image: "/images/sweet-sixteen.jpg",
    imageAlt: "Candlelit banquet hall with floral centerpieces",
    projectType: "Church event décor",
    includes: {
      heading: "Church events we take requests for",
      items: [
        { title: "Church anniversaries", text: "25th, 50th, 75th and 100th anniversary banquets: centerpieces, head-table and altar arrangements, entrance displays and history or photo tables." },
        { title: "Baptism & christening", text: "Celebration décor for the reception after the service: dessert and cake tables, soft balloon garlands, name backdrops and centerpieces." },
        { title: "First communion", text: "White and gold party décor, cross or chalice accents, photo backdrops and table centerpieces for the family celebration." },
        { title: "Banquets & fellowship hall", text: "Table linens, centerpieces, stage or head-table décor for church banquets, fellowship dinners and fundraisers." },
        { title: "Easter & Christmas church décor", text: "Altar and chancel flowers, greenery, wreaths, garland and entrance décor for the season, plus Christmas and Easter fellowship events." },
        { title: "Church weddings & receptions", text: "Aisle, pew and altar décor plus fellowship-hall receptions. See wedding décor." },
      ],
    },
    sections: [
      {
        heading: "Decorating a church or fellowship hall",
        paragraphs: [
          "Church spaces come with their own guidelines: candles and open flames, what can be attached to pews and walls, when the sanctuary is available between services, and whether décor needs to be removed the same day. Ask your church office or property committee first, and share the answers in your request so the decorator can plan around them.",
          "Fellowship halls often have long banquet tables and plain walls. A few pieces make the biggest difference: table runners and centerpieces, a backdrop or display behind the head table, and an entrance table with the program, guest book or photos.",
        ],
      },
      {
        heading: "Church anniversary ideas",
        paragraphs: [
          "Milestone anniversaries often center on the church’s history. Popular touches include a timeline or photo display of past pastors and buildings, centerpieces in the church’s colors or a gold/silver palette for 50th and 75th anniversaries, and altar arrangements for the anniversary service. See our guide to church anniversary and first communion decoration ideas for more.",
        ],
      },
      {
        heading: "Across Lancaster County",
        paragraphs: [
          "We take requests from congregations and families throughout the county, from Lancaster city to Ephrata, Lititz, Elizabethtown, Mount Joy, Strasburg, New Holland and Quarryville. Tell us the church or hall and the date.",
        ],
      },
    ],
    pricing: {
      heading: "How much do church event decorations cost?",
      paragraphs: [
        "It depends on the number of tables, centerpiece style (fresh flowers, faux florals, candles or balloons), backdrops, and setup and takedown timing around services. Because church events vary so much, we don’t publish a price range we can’t back up. Request a free quote and local decorators will price your event; mention your budget so they can suggest what fits.",
      ],
    },
    faqs: [
      { q: "Do you decorate church anniversary banquets?", a: "Yes. Requests for 25th, 50th, 75th and 100th church anniversary banquets are welcome: centerpieces, head-table and altar décor, entrance and history displays." },
      { q: "Can you decorate for a baptism or christening party?", a: "Yes. Decorators can style the reception after the service, whether it’s in the fellowship hall, a restaurant room or at home." },
      { q: "Do you do first communion party decorations?", a: "Yes. White, gold and soft-color palettes, cross or chalice accents, backdrops and table décor for the family celebration." },
      { q: "Can you decorate the sanctuary for Easter or Christmas?", a: "We can match your church with decorators who do seasonal altar flowers, greenery, wreaths and garland. Share the dates and any guidelines from your church." },
      { q: "Can a church committee submit the request?", a: "Yes. Any committee member or staff person can submit it. Include the church name, event date, room and a contact who can approve the plan." },
      REFERRAL_FAQ,
    ],
    related: ["/blog/church-anniversary-first-communion-decoration-ideas", "/holiday-decorating", "/wedding-decor", "/event-decor", "/service-area"],
  },

  // ───────────────────────────── Quinceañera / Sweet 16
  {
    slug: "quinceanera-sweet-16-decorations",
    path: "/quinceanera-sweet-16-decorations",
    name: "Quinceañera & Sweet 16 Decorations",
    title: "Quinceañera & Sweet 16 Decorations in Lancaster, PA",
    description:
      "Quinceañera and sweet 16 decorations in Lancaster, PA: throne chair and backdrop setups, balloon arches, marquee numbers, centerpieces and hall décor. Free quotes from local decorators.",
    eyebrow: "Quinceañera & Sweet 16 · Lancaster County",
    h1: "Quinceañera & Sweet 16 Decorations in Lancaster, PA",
    intro: [
      "A quinceañera or sweet 16 deserves a grand entrance. Tell us the date, venue, colors and guest count, and we’ll match you with up to two independent Lancaster County decorators who style quinces and sweet sixteens.",
      "Think throne-chair backdrops, balloon arches, a dramatic head table, marquee “15” or “16” numbers and hall centerpieces, all set up before the party starts.",
    ],
    image: "/images/holiday-gala.jpg",
    imageAlt: "Rose gold sweet sixteen backdrop with neon sign",
    projectType: "Quinceañera / Sweet 16 décor",
    includes: {
      heading: "Quince & sweet 16 décor you can request",
      items: [
        { title: "Throne chair & backdrop", text: "A statement backdrop with a throne or accent chair for the quinceañera or birthday girl or guy." },
        { title: "Balloon arches & walls", text: "Arches, garlands and balloon walls in the party’s colors." },
        { title: "Marquee numbers", text: "Light-up “15” or “16” numbers and initials." },
        { title: "Head table & cake table", text: "Draping, florals, candles and signage for the court’s table and the cake." },
        { title: "Centerpieces & linens", text: "Tall or low centerpieces, chargers and linens for hall tables." },
        { title: "Ceremony & church décor", text: "Décor for a Mass or blessing before the reception, where the church allows it." },
      ],
    },
    sections: [
      {
        heading: "Planning a quinceañera in Lancaster County",
        paragraphs: [
          "Many families hold a Mass or blessing followed by a reception in a hall, fire company social hall or event center. Ask the venue about setup time, open flames and ceiling or wall attachments, and share your color palette and dress color with the decorator; most designs are built around the dress.",
          "Sweet 16 parties range from restaurant private rooms in Lititz and Lancaster city to rented halls and backyard parties. The same backdrop + balloons + head-table formula scales up or down.",
        ],
      },
      {
        heading: "What to include in your request",
        paragraphs: [
          "Date, venue, guest count, colors (and dress color), whether you need ceremony décor too, and the pieces you care about most: throne backdrop, arch, centerpieces, or full hall décor.",
        ],
      },
    ],
    pricing: {
      heading: "How much do quinceañera decorations cost?",
      paragraphs: [
        "Quinceañera décor varies with hall size, number of tables, backdrop and throne setup, florals and draping, so we don’t publish a range we can’t back up. For a single statement piece, Lancaster PA Balloon Lady lists chiara arches starting at $500 (with custom vinyl message, delivery and pickup).",
        NOT_OUR_PRICES,
      ],
      sources: [BALLOON_LADY],
    },
    faqs: [
      { q: "How much do quinceañera decorations cost in Lancaster?", a: "It depends on the hall, the number of tables and the setup you want. Request a free quote with your venue and guest count and local decorators will price it." },
      { q: "Can you provide a throne chair and backdrop?", a: "Many local decorators and rental companies offer throne chair and backdrop setups. Mention it in your request." },
      { q: "Do you decorate sweet 16 parties too?", a: "Yes, from restaurant private rooms to full halls." },
      { q: "How far in advance should I book quinceañera décor?", a: "As early as you can; many families book several months ahead, especially for spring and summer Saturdays." },
      { q: "Can the decorator work with our dress color?", a: "Yes. Share the dress color and any inspiration photos, and the design will be built around them." },
      REFERRAL_FAQ,
    ],
    related: ["/birthday-party-decorations", "/balloon-decor", "/church-event-decorations", "/event-decor", "/service-area"],
  },

  // ───────────────────────────── Event décor hub
  {
    slug: "event-decor",
    path: "/event-decor",
    name: "Event Decorations",
    title: "Event Decorations & Party Decorators in Lancaster, PA",
    description:
      "Event decorations in Lancaster, PA: graduation parties, weddings, baby showers, birthdays, church events, quinceañeras, holiday and corporate parties. Free quotes from local event decorators.",
    eyebrow: "Event & Party Décor · Lancaster County",
    h1: "Event Decorations & Party Decorators in Lancaster, PA",
    intro: [
      "Graduation party, wedding, baby shower, birthday, church banquet or company party: tell us the date, venue, guest count and style, and we’ll introduce you to up to two independent Lancaster County event decorators, stylists or balloon artists.",
      "They design, deliver, set up and (usually) tear down, so you can enjoy the day. Pick your event below for ideas, local tips and FAQs.",
    ],
    image: "/images/ballroom-wide.jpg",
    imageAlt: "Ballroom decorated for a reception with florals and candles",
    projectType: "",
    hub: true,
    includes: {
      heading: "Event décor you can request",
      items: [
        { title: "Backdrops & photo walls", text: "Balloon, floral, shimmer and custom-sign backdrops for the photos everyone wants." },
        { title: "Balloon installs", text: "Garlands, arches, columns, numbers and balloon walls." },
        { title: "Tablescapes & centerpieces", text: "Linens, centerpieces, chargers, candles and table numbers." },
        { title: "Dessert, gift & memory tables", text: "Styled display tables with signage and risers." },
        { title: "Venue transformations", text: "Fellowship halls, fire halls, tents and ballrooms dressed with draping, lighting and entrance pieces." },
        { title: "Décor rentals", text: "Rental-only arches, stands, marquee letters and signage for DIY setups, from local rental companies." },
      ],
    },
    sections: [
      {
        heading: "Decorator, rental company or planner?",
        paragraphs: [
          "A décor stylist designs the look and installs it. A rental company supplies pieces (and sometimes delivery and setup). A planner runs the whole timeline and vendor team. For most parties, a decorator alone is enough; for weddings and big banquets, many hosts combine a planner with a decorator.",
        ],
      },
      {
        heading: "What to have ready when you request a quote",
        paragraphs: [
          "Event date, venue (or town), guest count, approximate budget, colors or inspiration photos, and what the venue already provides. Ask the venue about candles, setup and teardown windows, and whether things can be attached to walls or ceilings.",
        ],
      },
      {
        heading: "Corporate & holiday events",
        paragraphs: [
          "We also take requests for company holiday parties, grand openings, galas and banquets: entrance décor, balloon installs, centerpieces and branded backdrops. Choose “Corporate event décor” or “Holiday party décor” in the form.",
        ],
      },
    ],
    pricing: {
      heading: "How much does event décor cost?",
      paragraphs: [
        "It varies with guest count, the number and size of installs, rentals, florals and labor. Each event page above shows published starting prices from local balloon and rental businesses where they exist, clearly labeled as their prices. For your event, request a free quote and compare.",
      ],
    },
    faqs: [
      { q: "What kinds of events do you take requests for?", a: "Graduation parties, weddings, baby and bridal showers, birthdays, church events (anniversaries, baptisms, first communions, banquets), quinceañeras and sweet 16s, holiday parties and corporate events across Lancaster County." },
      { q: "Do decorators handle setup and teardown?", a: "Most full-service decorators do. Rental-only companies may charge for delivery or expect pickup. Confirm what’s included and the venue’s timing." },
      { q: "Can I just rent décor and set it up myself?", a: "Yes. Tell us you’re looking for rentals only and we’ll point you to local rental options." },
      { q: "Do you cover venues outside Lancaster city?", a: "Yes. Requests come from across Lancaster County, including Lititz, Ephrata, Manheim, Mount Joy, Elizabethtown, Strasburg, Leola, Millersville and Willow Street." },
      REFERRAL_FAQ,
    ],
    related: ["/balloon-decor", "/holiday-decorating", "/blog", "/service-area"],
  },

  // ───────────────────────────── Balloons (secondary)
  {
    slug: "balloon-decor",
    path: "/balloon-decor",
    name: "Balloon Décor",
    title: "Balloon Decorations in Lancaster, PA — Balloon Arches & Garlands",
    description:
      "Balloon decorations in Lancaster, PA: balloon arches, organic garlands, columns, balloon walls and backdrops for graduations, birthdays, baby showers and events. Free quotes.",
    eyebrow: "Balloon Décor · Lancaster County",
    h1: "Balloon Decorations, Arches & Garlands in Lancaster, PA",
    intro: [
      "Balloon arches, organic garlands, columns and backdrops can turn a living room, backyard, church hall or venue into a party. Tell us the date, location, colors and what you’re celebrating, and we’ll match you with up to two independent Lancaster County balloon artists.",
    ],
    image: "/images/balloon-garland.jpg",
    imageAlt: "Organic champagne balloon garland",
    projectType: "Balloon décor",
    includes: {
      heading: "Popular balloon installs",
      items: [
        { title: "Balloon arches", text: "Full entrance arches, framed chiara and hoop arches, and half arches over a backdrop or gift table." },
        { title: "Organic garlands", text: "Mixed-size balloon garlands over a doorway, dessert table or backdrop, often with greenery or florals." },
        { title: "Columns", text: "Columns that flank a stage, entrance or photo spot." },
        { title: "Balloon walls & backdrops", text: "Balloon walls, shimmer walls and framed backdrops for photos." },
        { title: "Numbers & marquees", text: "Big numbers and letters for birthdays, anniversaries and graduations." },
        { title: "Grab-and-go", text: "Pre-made garlands or bouquets you pick up and set up yourself, from some local shops." },
      ],
    },
    sections: [
      {
        heading: "Balloon arches",
        paragraphs: [
          "An arch is the classic statement piece for graduation parties, school events and grand openings. Full arches span an entrance or walkway; framed arches (chiara, hoop or rectangle frames) give a cleaner look behind a dessert table or throne chair. Give the decorator the width and height of the space and whether the arch is indoors or outdoors.",
        ],
      },
      {
        heading: "Balloon garlands",
        paragraphs: [
          "Organic garlands use mixed balloon sizes for a fuller, more natural look and are priced mainly by length. Measure where the garland will go (over a doorway, across a backdrop or along a table) and share the measurement and colors in your request.",
        ],
      },
      {
        heading: "Indoor vs. outdoor balloon décor",
        paragraphs: [
          "Indoor installs hold up best. Outdoors, direct sun, heat and wind can make latex balloons fade, pop or oxidize faster. Mention if your event is outdoors and the pro can suggest shade, timing and materials that hold up better.",
        ],
      },
      {
        heading: "Balloon artists around Lancaster County",
        paragraphs: [
          "We take balloon requests from Lancaster city, Lititz, Ephrata, Manheim, Elizabethtown, Mount Joy, Millersville and the rest of the county. Some pros deliver and install; some offer pickup pieces.",
        ],
      },
    ],
    pricing: {
      heading: "How much do balloon arches and garlands cost?",
      paragraphs: [
        "Pricing depends on the size and type of install, specialty or custom-printed balloons, and delivery and setup. Several Lancaster-area balloon businesses publish starting prices:",
      ],
      bullets: [
        "Lancaster PA Balloon Lady: chiara arches starting at $500, golden hoop starting at $375, rectangle backdrop starting at $200.",
        "Balloonables (Lancaster): grab-and-go garlands starting at $80, themed number stands starting at $125.",
        NOT_OUR_PRICES,
      ],
      sources: [BALLOON_LADY, BALLOONABLES],
    },
    faqs: [
      { q: "How much does a balloon arch cost in Lancaster, PA?", a: "It depends on size, balloon type and setup. As a reference, Lancaster PA Balloon Lady publishes chiara arches starting at $500 and golden hoops starting at $375. Those are their prices; request a free quote to compare local options." },
      { q: "How much does a balloon garland cost?", a: "Garlands are usually priced by length, colors and specialty balloons. Balloonables in Lancaster publishes grab-and-go garlands starting at $80 for a one-color 4 ft garland. Custom installed garlands cost more." },
      { q: "How far in advance should I book balloon décor?", a: "As early as you can, especially for weekend events in spring and graduation season. Some shops offer last-minute grab-and-go garlands." },
      { q: "Can balloon garlands go outside?", a: "Yes, but sun, heat and wind shorten their life. Tell the pro it’s outdoors so they can plan placement and timing." },
      { q: "Do balloon artists deliver and set up?", a: "Most custom installs include or offer delivery and setup. Some smaller pieces are pickup-only." },
      REFERRAL_FAQ,
    ],
    related: ["/graduation-party-decorations", "/birthday-party-decorations", "/baby-shower-decorations", "/event-decor", "/service-area"],
  },

  // ───────────────────────────── Holiday (repurposed)
  {
    slug: "holiday-decorating",
    path: "/holiday-decorating",
    name: "Holiday Party & Church Christmas Décor",
    title: "Christmas Party & Holiday Event Decorations in Lancaster, PA",
    description:
      "Holiday event decorations in Lancaster, PA: Christmas party and company holiday party décor, church Christmas and Easter decorating, banquets and seasonal backdrops. Free quotes.",
    eyebrow: "Holiday Event Décor · Lancaster County",
    h1: "Christmas Party & Holiday Event Decorations in Lancaster, PA",
    intro: [
      "Hosting a company Christmas party, a church Christmas dinner, a New Year’s Eve celebration or an Easter fellowship event? Tell us the date, venue and guest count, and we’ll match you with up to two independent Lancaster County event decorators.",
      "Churches can also request seasonal sanctuary décor: Advent and Christmas greenery, wreaths and altar arrangements, and Easter flowers.",
    ],
    image: "/images/bridal-shower.jpg",
    imageAlt: "Candlelit holiday table with red florals and taper candles",
    projectType: "Holiday party décor",
    includes: {
      heading: "Holiday event décor you can request",
      items: [
        { title: "Company holiday parties", text: "Entrance décor, centerpieces, backdrops and balloon installs for office and venue parties." },
        { title: "Christmas dinners & banquets", text: "Tablescapes with greenery, candles, chargers and linens for fellowship halls and restaurants." },
        { title: "Church Christmas décor", text: "Advent and Christmas greenery, wreaths, garland, poinsettia displays and altar arrangements." },
        { title: "Easter church décor", text: "Altar and chancel flowers, entrance arrangements, and Easter brunch or fellowship décor." },
        { title: "New Year’s Eve", text: "Black-and-gold or silver backdrops, balloon installs and marquee numbers." },
        { title: "Holiday photo backdrops", text: "Seasonal photo spots for parties, schools and community events." },
      ],
    },
    sections: [
      {
        heading: "Book holiday party décor early",
        paragraphs: [
          "December weekends are the busiest time of year for holiday parties, and decorators and venues fill up early. Request quotes in October or early November for the most choice. For church Christmas décor, share your Advent and Christmas Eve service dates so installs fit around services.",
          "For Easter, plan around Holy Week. Many churches want flowers in place by Easter Sunday morning, and altar guild guidelines may limit what can be added.",
        ],
      },
      {
        heading: "What to include in your request",
        paragraphs: [
          "Date and start time, venue, guest count, colors or theme, and whether you need takedown the same night. For churches: the spaces to decorate (sanctuary, narthex, fellowship hall) and any guidelines from your church office.",
        ],
      },
    ],
    pricing: {
      heading: "How much does holiday event décor cost?",
      paragraphs: [
        "It depends on guest count, number of tables, centerpiece style, backdrops and setup timing. We don’t publish a range we can’t back up. Request a free quote and local decorators will price your event.",
      ],
    },
    faqs: [
      { q: "Do you decorate company Christmas parties?", a: "Yes. Requests for office and venue holiday parties are welcome: entrances, centerpieces, backdrops and balloon installs." },
      { q: "Can you decorate our church for Christmas or Easter?", a: "We can match your church with decorators who do seasonal greenery, wreaths, garland and altar flowers. Share your service dates and any guidelines." },
      { q: "When should I book holiday party décor?", a: "October or early November is ideal, because December weekends fill quickly." },
      { q: "Do you decorate homes for Christmas?", a: "No. Lancaster Decorators focuses on events: parties, banquets, church events and celebrations." },
      REFERRAL_FAQ,
    ],
    related: ["/church-event-decorations", "/blog/christmas-holiday-decorating-lancaster-county", "/event-decor", "/service-area"],
  },
];

export const servicePageByPath = Object.fromEntries(
  servicePages.map((p) => [p.path, p]),
) as Record<string, ServicePage>;

/** Event pages in priority order (hub grid, nav, footer). */
export const eventPagePaths = [
  "/graduation-party-decorations",
  "/wedding-decor",
  "/baby-shower-decorations",
  "/birthday-party-decorations",
  "/church-event-decorations",
  "/quinceanera-sweet-16-decorations",
  "/balloon-decor",
  "/holiday-decorating",
];
