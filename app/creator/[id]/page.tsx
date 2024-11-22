"use client";

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

// Add this function before your default export
export function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id.toString(),
  }));
}

export default function CreatorPage({ params }: { params: { id: string } }) {
  const creator = creators.find(c => c.id === parseInt(params.id));

  if (!creator) {
    return <div>Creator not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cover Image */}
      <div className="h-64 relative">
        <Image
          src={creator.cover}
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 -mt-20">
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
                      <span>{creator.patrons.toLocaleString()} patrons</span>
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
                    Support Sarah to see exclusive posts and content
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="about">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About Sarah</h3>
                  <p className="text-muted-foreground">
                    Sarah is a digital artist with over 5 years of experience
                    creating vibrant artwork and teaching others. She specializes
                    in character design and concept art, and loves sharing her
                    knowledge with her community.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Tiers */}
          <div className="md:w-1/3">
            <div className="space-y-6">
                {creator.tiers.map((tier) => (
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