import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AllowlistPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Join the Allowlist
      </h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
        Get early access to Melobanc Labs and be among the first to creators in our community.
      </p>
      <div className="flex justify-center">
      <Link href="https://app.deform.cc/form/87f4da6d-3427-40d5-9cbf-db9a76b10ef6/?page_number=0" 
          target="_blank" 
          rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Get On The Allow list
              </Button>
            </Link>
      </div>
    </div>
  );
}