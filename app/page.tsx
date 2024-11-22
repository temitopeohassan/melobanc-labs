import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredCreators = [
  {
    id: 1,
    name: "Sarah Chen",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
    patrons: 1234,
    description: "Creating vibrant digital art and teaching techniques",
  },
  {
    id: 2,
    name: "Mark Reynolds",
    category: "Music Production",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
    patrons: 856,
    description: "Producing original music and educational content",
  },
  {
    id: 3,
    name: "Elena Martinez",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
    patrons: 2341,
    description: "Sharing photography tips and behind-the-scenes content",
  },
];

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
                Become a Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why CreatorSpace?
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
            {featuredCreators.map((creator) => (
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
                      {creator.patrons.toLocaleString()} patrons
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