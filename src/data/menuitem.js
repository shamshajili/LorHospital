export const menuItems = [
  {
    label: "Haqqımızda",
    dropdown: [
      { label: "Tariximiz" },
      { label: "Missiya və məqsəd" },
      { label: "Keyfiyyət siyasəti" },
      { label: "Keyfiyyətə nəzarət" },
      { label: "Sertifikatlar" },
      { label: "Beynəlxalq əməkdaşlıq" },
      {
        label: "Mərkəzlərimiz",
        children: [
          "Baş gicəllənmə Mərkəzi",
          "Estetik və Plastik Cərrahiyyə Mərkəzi",
          "Səs Mərkəzi",
          "Eşitmə Mərkəzi",
          "Üz və Çənə Cərrahiyyə Mərkəzi",
          "Astma və Allergiya Mərkəzi",
          "Yuxu Mərkəzi",
          "Koxlear implantasiya",
        ],
      },
      { label: "Həkimlərimiz", path: "/hekimlerimiz" },
      { label: "Məmnunluq anketi" },
    ],
  },
  {
    label: "Xidmətlər",
    dropdown: [
      { label: "LOR xidmətləri" },
      { label: "Cərrahiyyə" },
    ],
  },
  { label: "Referans Eşitmə" },
  { label: "Xəbərlər" },
  { label: "Əlaqə" },
];
