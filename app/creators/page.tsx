"use client";

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
import { Users, LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";

export default function CreatorsPage() {
  // Get unique categories from creators
  const categories = Array.from(
    new Set(creators.map((creator) => creator.category))
  );
  // Add view state
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Explore Creators</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsGridView(!isGridView)}
          >
            {isGridView ? (
              <LayoutList className="h-4 w-4" />
            ) : (
              <LayoutGrid className="h-4 w-4" />
            )}
          </Button>
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
      </div>

      <div className={isGridView ? "grid md:grid-cols-3 gap-8" : "flex flex-col gap-8"}>
        {creators.map((creator) => (
          <Card key={creator.id} className="overflow-hidden">
            <div className={isGridView ? 
              "aspect-square relative" : 
              "flex flex-row h-48"
            }>
              <div className={isGridView ? "w-full h-full" : "w-48 relative"}>
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
              {!isGridView && (
                <div className="flex-1 p-6">
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
              )}
            </div>
            {isGridView && (
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
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
