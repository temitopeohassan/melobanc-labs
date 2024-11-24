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
      
      await writeContract({
        ...USDC_CONTRACT,
        functionName: 'transfer',
        args: [creator.walletAddress as `0x${string}`, amount]
      });
    } catch (error) {
      console.error('Transaction error:', error);
      toast({
        title: "Error",
        description: "Failed to process payment",
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
              {/* ... rest of your existing JSX ... */}
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="posts" className="mt-8">
              {/* ... rest of your existing tabs JSX ... */}
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