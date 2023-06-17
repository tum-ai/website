export default async function handler(req, res) {
  // TODO: This is mock data. Use notion db instead
  const members = [
    {
      name: "David Podolskyi",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/david_podolskyi.webp",
      description:
        "ML & Entrepreneurship enthusiast with focus on IoT and Recommender Systems",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
  ];

  res.status(200).json(members);
}
