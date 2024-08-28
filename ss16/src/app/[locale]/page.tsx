"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    route.push(`/${selectedLanguage}`);
  };

  return (
    <>
      <select name="language" id="language-select" onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <h1>{t("title")}</h1>
    </>
  );
}
