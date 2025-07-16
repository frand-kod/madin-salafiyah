export const navItems = [
  {
    title: "Tentang",
    children: [
      { label: "Profile Madrasah", href: "/profile" },
      { label: "Kepengurusan", href: "/kepengurusan" },
    ],
  },
  {
    title: "Serba-serbi",
    children: [
      { label: "Bahtsul Masail", href: "/kategori/bahtsul-masail" },
      { label: "Musyawarah Kubro", href: "/kategori/musyawarah-kubro" },
      { label: "PKR", href: "/kategori/pkr" }, // tambahkan kalau punya artikel
    ],
  },
  {
    title: "Keislaman",
    children: [
      { label: "Khutbah", href: "/kategori/khutbah" },
      { label: "Hikmah", href: "/kategori/hikmah" },
      { label: "Sirah Nabawiyah", href: "/kategori/sirah-nabawiyah" },
    ],
  },
  {
    title: "Pengajar",
    href: "/pengajar",
  },
];
