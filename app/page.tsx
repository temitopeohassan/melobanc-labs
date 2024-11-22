import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { creators } from "./creators.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Change the way you support creators
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of others in supporting creators and getting exclusive access to their work
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/explore">
              <Button size="lg" className="gap-2">
                Explore Creators <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Get On The Allow list
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Melobanc Labs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p className="text-muted-foreground">
                Join a thriving community of creators and supporters who share your passions.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Powerful Tools</h3>
              <p className="text-muted-foreground">
                Get everything you need to run your creative business and connect with fans.
              </p>
            </Card>
            <Card className="p-6">
              <Heart className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Direct Support</h3>
              <p className="text-muted-foreground">
                Support creators directly and get exclusive content and benefits in return.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Creators
          </h2>
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
                    <span className="text-sm text-muted-foreground">
                      {creator.patrons.toLocaleString()} Supporters
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
      </section>
    </div>
  );
}