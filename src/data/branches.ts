export type Branch = {
  id: string;
  city: string;
  title: string;
  phones: string[];
  email: string;
  address: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "chennai-kovilambakkam",
    city: "Chennai — Kovilambakkam",
    title: "Get in Touch — AYUSH Integrated Hospital, Chennai",
    phones: ["+91 95669 90022", "+91 81899 09000"],
    email: "daisyhospitaldm@gmail.com",
    address:
      "116/3B2, Bye Pass, 200 Feet Radial Rd, Ganapathy Nagar, Kovilambakkam, Tamil Nadu 600129",
  },
  {
    id: "chennai-chitlapakkam",
    city: "Chennai — Chitlapakkam",
    title: "Get in Touch — AYUSH Care, Chitlapakkam",
    phones: ["+91 95669 90022"],
    email: "daisyhospitaldm@gmail.com",
    address:
      "116/3B2, Bye Pass, 200 Feet Radial Rd, Ganapathy Nagar, Kovilambakkam, Tamil Nadu 600129",
  },
  {
    id: "madurai",
    city: "Madurai",
    title: "Get in Touch — Traditional Medicine Hospital, Madurai",
    phones: ["+91 91764 43311", "+91 75500 73946"],
    email: "daisyhospitaldm@gmail.com",
    address:
      "29, 2nd Floor, Panagal Rd, near Hotel Vilvaas, Shenoy Nagar, Madurai, Tamil Nadu 625020",
  },
  {
    id: "erode",
    city: "Erode",
    title: "Get in Touch — Organic & Natural Healing, Erode",
    phones: ["+91 91761 14400", "+91 91762 27700"],
    email: "daisyhospitaldm@gmail.com",
    address:
      "First Floor, RANM Business Center, No 33A, Thirunagar Colony Rd, above Axis Bank, Thirunagar Colony, Erode, Tamil Nadu 638003",
  },
];

export const SERVICES = [
  "Integrated AYUSH Treatments (Ayurveda, Siddha, Unani, Homeopathy, Yoga & Naturopathy)",
  "Neurology & Neuro Rehabilitation",
  "Diabetology & Lifestyle Care",
  "Orthopedics & Joint Care",
  "Women's Health Services",
];
