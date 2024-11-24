import { notFound } from "next/navigation";
import { creators } from "@/app/creators.json";
import CreatorPageClient from "./creator-page-client";
import { Metadata } from "next";

interface Props {
  params: { id: string }
}

// This is crucial for static site generation
export async function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const creator = creators.find(c => c.id === parseInt(params.id));
  
  if (!creator) {
    return {
      title: 'Creator Not Found',
    };
  }

  return {
    title: `${creator.name} | Melobanc Labs`,
    description: creator.description,
  };
}

export default function Page({ params }: Props) {
  const creator = creators.find(c => c.id === parseInt(params.id));

  if (!creator) {
    notFound();
  }

  return <CreatorPageClient creator={creator} />;
}