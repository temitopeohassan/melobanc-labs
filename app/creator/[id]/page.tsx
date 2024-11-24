import { notFound } from "next/navigation";
import { creators } from "../../creators.json";
import CreatorPageClient from "./creator-page-client";

export default function CreatorPage({ params }: { params: { id: string } }) {
  const creator = creators.find(c => c.id === parseInt(params.id));

  if (!creator) {
    notFound();
  }

  return <CreatorPageClient creator={creator} />;
}

export function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id.toString(),
  }));
}