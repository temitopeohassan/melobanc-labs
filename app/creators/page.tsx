import { creators } from "../creators.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { useState } from "react";

export default function CreatorsPage() {
  // Get unique categories from creators
  const categories = Array.from(
    new Set(creators.map((creator) => creator.category))
  );

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Explore Creators</h1>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {creators.map((creator) => (
          <Card key={creator.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {creator.category}
              </p>
              <p className="mb-4">{creator.description}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {creator.patrons.toLocaleString()} supporters
                </span>
                <Link href={`/creator/${creator.id}`}>
                  <Button variant="secondary">View Page</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
