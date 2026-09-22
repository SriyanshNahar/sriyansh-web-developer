export type WorkItem = {
  id: string;
  file: string;
  category: string;
  client: string;
  title: string;
};

export const work: WorkItem[] = [
  {
    id: "truebatch-label",
    file: "truebatch-label.png",
    category: "Packaging + Print",
    client: "TrueBatch",
    title: "Flour packaging",
  },
  {
    id: "loundryco-flyer",
    file: "loundryco-flyer.jpg",
    category: "Poster + Identity",
    client: "LoundryCo",
    title: "Brand poster",
  },
  {
    id: "choose-kind-mailer",
    file: "choose-kind-mailer-front.jpg",
    category: "Product Packaging",
    client: "Choose Kind",
    title: "Mailer bag",
  },
  {
    id: "work-hard-lettering",
    file: "work-hard-lettering.jpg",
    category: "Illustration + Lettering",
    client: "Personal",
    title: "Work Hard hand-lettering",
  },
];

export function workSrc(file: string) {
  return `/images/work/${file}`;
}
