"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { USDC_CONTRACT } from "@/app/constants/contracts";
import { parseUnits } from "viem";
import { useAccount, useWriteContract, useWatchContractEvent } from "wagmi";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Heart, Share2, Users } from "lucide-react";
import Image from "next/image";
import type { Creator } from "@/app/types/creator";
import Link from "next/link";

export default function CreatorPageClient({ creator }: { creator: Creator }) {
    const { address, isConnected } = useAccount();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<number | null>(null);
  
    const { 
      writeContract,
      data: hash,
      isPending 
    } = useWriteContract();
  
    useWatchContractEvent({
      address: USDC_CONTRACT.address as `0x${string}`,
      abi: USDC_CONTRACT.abi,
      eventName: 'Transfer',
      onLogs(logs) {
        toast({
          title: "Payment Successful!",
          description: "You are now supporting this creator!",
        });
        setIsLoading(null);
      },
    });
  
    const handleSupport = async (tier: NonNullable<Creator['tiers']>[number]) => {
      if (!isConnected) {
        toast({
          title: "Connect Wallet",
          description: "Please connect your wallet to support this creator",
          variant: "destructive",
        });
        return;
      }
  
      try {
        setIsLoading(tier.id);
        const amount = parseUnits(tier.price.toString(), 6);
        
        const result = await writeContract({
          address: USDC_CONTRACT.address as `0x${string}`,
          abi: USDC_CONTRACT.abi,
          functionName: 'transfer',
          args: [creator.walletAddress as `0x${string}`, amount]
        });

        console.log('Transaction result:', result);

      } catch (error) {
        console.error('Transaction error:', error);
        toast({
          title: "Error",
          description: typeof error === 'object' && error !== null && 'message' in error 
            ? (error.message as string)
            : "Failed to process payment",
          variant: "destructive",
        });
        setIsLoading(null);
      }
    };

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
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={`/${creator.image}`}
                    alt={creator.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{creator.name}</h1>
                  <p className="text-muted-foreground">{creator.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {creator.patrons} supporters
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-6">{creator.description}</p>
              <div className="flex gap-4">
                <ul>
                    <li>{creator.twitter && (
                  <Link href={creator.twitter} target="_blank" rel="noopener noreferrer">
                  {creator.twitter}
                  </Link>
                    )}</li>
                    <li>{creator.instagram && (
                      <Link href={creator.instagram} target="_blank" rel="noopener noreferrer">
                        {creator.instagram}
                      </Link>
                    )}</li>
                    <li>{creator.website && (
                      <Link href={creator.website} target="_blank" rel="noopener noreferrer">
                        {creator.website}
                      </Link>
                    )}</li>
                </ul>
              </div>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="about" className="mt-8">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About {creator.name}</h3>
                  <p>{creator.description}</p>
                </Card>
              </TabsContent>
              <TabsContent value="posts" className="mt-4">
                <Card className="p-6">
                  <p className="text-muted-foreground">No posts yet.</p>
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
                    USDC {tier.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => handleSupport(tier)}
                    disabled={isLoading === tier.id || isPending}
                  >
                    {isLoading === tier.id ? "Processing..." : `Support At ${tier.name} Tier`}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 