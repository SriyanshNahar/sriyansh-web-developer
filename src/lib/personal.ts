export type PersonalShot = {
  id: string;
  file: string;
  caption: string;
};

export const personalShots: PersonalShot[] = [
  { id: "restaurant", file: "01-restaurant.jpg", caption: "Off duty" },
  { id: "simplicity-tee", file: "02-simplicity-tee.jpg", caption: "Simplicity" },
  { id: "jeep-night", file: "03-jeep-night.jpg", caption: "Late signal" },
  { id: "defender-mountains", file: "04-defender-mountains.jpg", caption: "High altitude" },
  { id: "two-suvs-night", file: "05-two-suvs-night.jpg", caption: "Midnight route" },
  { id: "fortuner-rain", file: "06-fortuner-rain.jpg", caption: "Rain check" },
  { id: "scorpio-trees", file: "07-scorpio-trees.jpg", caption: "Off-grid" },
  { id: "royal-enfield", file: "08-royal-enfield.jpg", caption: "Slow travel" },
  { id: "defender-mountains-alt", file: "09-defender-mountains-alt.jpg", caption: "Base camp" },
];

export function personalSrc(file: string) {
  return `/images/personal/${file}`;
}
