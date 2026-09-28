import { notFound } from "next/navigation";
import { LocalProductPage } from "@/components/LocalProductPage";
import { findPage, pages } from "@/lib/pages";

type Params = {
  state: string;
  county: string;
  city: string;
  product: string;
};

export function generateStaticParams() {
  return pages.map((page) => page.slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state, county, city, product } = await params;
  const page = findPage(state, county, city, product);
  if (!page) return { title: "Call Uncle Morris" };
  return {
    title: `${page.h1} | Call Uncle Morris`,
    description: page.valueProp,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state, county, city, product } = await params;
  const page = findPage(state, county, city, product);
  if (!page) notFound();
  return <LocalProductPage page={page} />;
}
