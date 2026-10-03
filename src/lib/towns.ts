/**
 * Service-area hub content. Kept factual: location + ZIP codes and what kinds
 * of décor requests fit; no made-up local stats, projects, or reviews.
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
    suggestions: "Rowhomes and older homes often need smart furniture layouts for narrow rooms. City venues and event spaces are a common setting for showers, galas and holiday parties.",
    links: ["/interior-decorating", "/event-decor", "/holiday-decorating"],
  },
  {
    slug: "lititz",
    name: "Lititz",
    zips: ["17543"],
    location: "A borough in northern Lancaster County with a walkable downtown around Main Street and Lititz Springs Park.",
    suggestions: "Good fits: room styling and refreshes, holiday porch and mantel styling for historic and newer homes, and staging before listing.",
    links: ["/interior-decorating", "/holiday-decorating", "/home-staging"],
  },
  {
    slug: "ephrata",
    name: "Ephrata",
    zips: ["17522"],
    location: "Northeastern Lancaster County, home to the historic Ephrata Cloister and a mix of older borough homes and newer developments.",
    suggestions: "Good fits: whole-room decorating, window treatments, and seasonal décor, plus balloon and party décor for family celebrations.",
    links: ["/interior-decorating", "/balloon-decor", "/holiday-decorating"],
  },
  {
    slug: "manheim",
    name: "Manheim",
    zips: ["17545"],
    location: "Northwestern Lancaster County, with a historic borough center surrounded by farmland.",
    suggestions: "Rural and farm settings make it a natural fit for barn and outdoor event décor; homeowners also ask for staging and room styling.",
    links: ["/event-decor", "/home-staging", "/interior-decorating"],
  },
  {
    slug: "mount-joy",
    name: "Mount Joy",
    zips: ["17552"],
    location: "Western Lancaster County, between Lancaster and Harrisburg along Route 230 and near Route 283.",
    suggestions: "Good fits: new-home furnishing and decorating, staging for sellers, and holiday decorating.",
    links: ["/interior-decorating", "/home-staging", "/holiday-decorating"],
  },
  {
    slug: "elizabethtown",
    name: "Elizabethtown",
    zips: ["17022"],
    location: "Western Lancaster County, home to Elizabethtown College.",
    suggestions: "Good fits: graduation and celebration décor (balloons, backdrops, dessert tables), home staging, and room refreshes.",
    links: ["/balloon-decor", "/event-decor", "/home-staging"],
  },
  {
    slug: "strasburg",
    name: "Strasburg",
    zips: ["17579"],
    location: "Southeastern Lancaster County in the heart of farm country, known for the Strasburg Rail Road.",
    suggestions: "Good fits: farm and countryside event décor, holiday décor for historic homes, and interior styling.",
    links: ["/event-decor", "/holiday-decorating", "/interior-decorating"],
  },
  {
    slug: "leola",
    name: "Leola",
    zips: ["17540"],
    location: "Upper Leacock Township, just east of Lancaster city along Route 23.",
    suggestions: "Good fits: home décor refreshes, staging, and party and shower décor.",
    links: ["/interior-decorating", "/home-staging", "/balloon-decor"],
  },
  {
    slug: "millersville",
    name: "Millersville",
    zips: ["17551"],
    location: "Southwest of Lancaster city, home to Millersville University.",
    suggestions: "Good fits: graduation and celebration décor, staging for sellers and landlords, and room styling.",
    links: ["/balloon-decor", "/home-staging", "/interior-decorating"],
  },
  {
    slug: "willow-street",
    name: "Willow Street",
    zips: ["17584"],
    location: "Just south of Lancaster city along Route 222, in West Lampeter Township and nearby townships.",
    suggestions: "Good fits: holiday and seasonal décor, room styling, and staging before a move.",
    links: ["/holiday-decorating", "/interior-decorating", "/home-staging"],
  },
];
