import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Heart, Share2, Users } from "lucide-react";
import Image from "next/image";
import { creators } from "../../creators.json";
import type { Creator } from "@/app/types/creator";

export default function CreatorPage({ params }: { params: { id: string } }) {
  const creator = creators.find(c => c.id === parseInt(params.id));

  if (!creator) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cover Image */}
      <div className="h-64 relative">
        <Image
          src={creator.cover || creator.image}
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 -mt-20 pt-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Info */}
          <div className="md:w-2/3">
            <Card className="p-6">
              <div className="flex items-start gap-6">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">
                        {creator.name}
                      </h1>
                      <p className="text-muted-foreground mb-4">
                        {creator.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{creator.patrons.toLocaleString()} Supporters</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {creator.description}
                  </p>
                </div>
              </div>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="posts" className="mt-8">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              <TabsContent value="posts" className="mt-6">
                <Card className="p-6">
                  <p className="text-center text-muted-foreground">
                    Support {creator.name} to see exclusive posts and content
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="about">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About {creator.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {creator.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="space-y-2">
                    {creator.twitter && (
                      <a 
                        href={creator.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        Twitter
                      </a>
                    )}
                    {creator.facebook && (
                      <a 
                        href={creator.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        Facebook
                      </a>
                    )}
                    {creator.instagram && (
                      <a 
                        href={creator.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        Instagram
                      </a>
                    )}
                    {creator.website && (
                      <a 
                        href={creator.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        Website
                      </a>
                    )}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Tiers */}
          <div className="md:w-1/3">
            <div className="space-y-6">
              {creator.tiers?.map((tier) => (
                <Card key={tier.id} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-2xl font-bold mb-4">
                    ${tier.price}
                    <span className="text-base font-normal text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Join {tier.name} Tier</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to generate static paths
export function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id.toString(),
  }));
}