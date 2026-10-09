// Central content data.
//
// Keeping this in one typed module (rather than scattered inline in JSX)
// means that when the admin CMS is built next, these arrays can be swapped
// for a `fetch` / Supabase query with zero changes to the components below —
// they already just consume `projects`, `filters`, and `socialLinks`.

export type Category = "all" | "aura" | "water" | "fire" | "crystal";

export type Project = {
  id: string;
  title: string;
  tag: string;
  category: Exclude<Category, "all">;
  description: string;
  url: string;
};

export const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Aura Particles", value: "aura" },
  { label: "Water Trails", value: "water" },
  { label: "Fire Particles", value: "fire" },
  { label: "Crystal Explosion", value: "crystal" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Eye of Angel",
    tag: "Aura Particles",
    category: "aura",
    description: "Divine eye effect with celestial particles.",
    url: "https://youtu.be/WrdvNO4Di18",
  },
  {
    id: "2",
    title: "Water Breathing Slash",
    tag: "Water Trails",
    category: "water",
    description: "Demon Slayer inspired water effects.",
    url: "https://youtu.be/g_voQSecrbg",
  },
  {
    id: "3",
    title: "Blue Aura",
    tag: "Aura Particles",
    category: "aura",
    description: "Dynamic energy aura particle system.",
    url: "https://youtu.be/PL27QoBb9yg",
  },
  {
    id: "4",
    title: "Fire Ball",
    tag: "Fire Particles",
    category: "fire",
    description: "Open-source fireball projectile effect.",
    url: "https://youtu.be/McNPGZcE_5Y",
  },
  {
    id: "5",
    title: "Crystal Explosion",
    tag: "Crystal Explosion",
    category: "crystal",
    description: "Crystal shatter explosion effect.",
    url: "https://youtu.be/vMd3-P_YUS0",
  },
];

export const socialLinks = [
  { platform: "Discord", handle: "@KKREOS", href: "#" },
  { platform: "YouTube", handle: "@kkreoss", href: "#" },
  { platform: "Twitter / X", handle: "@KKre0s", href: "#" },
];
