/**
 * Service-area hub content. Kept factual: location + ZIP codes and what kinds
 * of event décor requests fit; no made-up local stats, projects, or reviews.
 */
export type Town = {
  slug: string;
  name: string;
  zips: string[];
  location: string;
  suggestions: string;
  links: string[];
};

export const towns: Town[] = [
  {
    slug: "lancaster",
    name: "Lancaster (city)",
    zips: ["17601", "17602", "17603"],
    location: "The county seat, from downtown rowhomes and historic districts out to nearby townships such as Manheim Township, East Hempfield and Lancaster Township.",
    suggestions: "Good fits: showers, birthdays, church banquets and quinceañeras in city venues, restaurant private rooms and fellowship halls, plus backyard graduation parties.",
    links: ["/graduation-party-decorations", "/baby-shower-decorations", "/church-event-decorations"],
  },
  {
    slug: "lititz",
    name: "Lititz",
    zips: ["17543"],
    location: "A borough in northern Lancaster County with a walkable downtown around Main Street and Lititz Springs Park.",
    suggestions: "Good fits: baby and bridal showers in downtown restaurant and inn private rooms, backyard graduation parties, and balloon installs.",
    links: ["/baby-shower-decorations", "/graduation-party-decorations", "/balloon-decor"],
  },
  {
    slug: "ephrata",
    name: "Ephrata",
    zips: ["17522"],
    location: "Northeastern Lancaster County, home to the historic Ephrata Cloister and a mix of older borough homes and newer developments.",
    suggestions: "Good fits: graduation open houses, church fellowship hall events and banquets, and balloon and party décor for family celebrations.",
    links: ["/graduation-party-decorations", "/church-event-decorations", "/balloon-decor"],
  },
  {
    slug: "manheim",
    name: "Manheim",
    zips: ["17545"],
    location: "Northwestern Lancaster County, with a historic borough center surrounded by farmland.",
    suggestions: "Farm and barn settings suit weddings and outdoor grad parties, and small event studios in town host showers and birthdays.",
    links: ["/wedding-decor", "/graduation-party-decorations", "/baby-shower-decorations"],
  },
  {
    slug: "mount-joy",
    name: "Mount Joy",
    zips: ["17552"],
    location: "Western Lancaster County, between Lancaster and Harrisburg along Route 230 and near Route 283.",
    suggestions: "Good fits: backyard and tent graduation parties, barn and farm wedding décor, and birthday parties.",
    links: ["/graduation-party-decorations", "/wedding-decor", "/birthday-party-decorations"],
  },
  {
    slug: "elizabethtown",
    name: "Elizabethtown",
    zips: ["17022"],
    location: "Western Lancaster County, home to Elizabethtown College.",
    suggestions: "Good fits: graduation party décor (balloons, backdrops, memory tables), church events and birthday parties.",
    links: ["/graduation-party-decorations", "/church-event-decorations", "/birthday-party-decorations"],
  },
  {
    slug: "strasburg",
    name: "Strasburg",
    zips: ["17579"],
    location: "Southeastern Lancaster County in the heart of farm country, known for the Strasburg Rail Road.",
    suggestions: "Farm-country venues make it a natural fit for wedding décor; church anniversaries and family celebrations are good fits too.",
    links: ["/wedding-decor", "/church-event-decorations", "/birthday-party-decorations"],
  },
  {
    slug: "leola",
    name: "Leola",
    zips: ["17540"],
    location: "Upper Leacock Township, just east of Lancaster city along Route 23.",
    suggestions: "Good fits: baby showers, birthdays and graduation parties, often at home or in a rented hall.",
    links: ["/baby-shower-decorations", "/birthday-party-decorations", "/graduation-party-decorations"],
  },
  {
    slug: "millersville",
    name: "Millersville",
    zips: ["17551"],
    location: "Southwest of Lancaster city, home to Millersville University.",
    suggestions: "Good fits: graduation parties (high school and Millersville University grads), birthdays and balloon décor.",
    links: ["/graduation-party-decorations", "/birthday-party-decorations", "/balloon-decor"],
  },
  {
    slug: "willow-street",
    name: "Willow Street",
    zips: ["17584"],
    location: "Just south of Lancaster city along Route 222, in West Lampeter Township and nearby townships.",
    suggestions: "Good fits: backyard grad parties, baby showers, and church and fellowship hall events.",
    links: ["/graduation-party-decorations", "/baby-shower-decorations", "/church-event-decorations"],
  },
];
