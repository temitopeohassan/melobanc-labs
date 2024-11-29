import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqData = [
  {
    question: "What is Melobanc Labs?",
    answer:
      "Melobanc Labs is a platform designed to empower artists, musicians, animators, and digital creators in the web3 space. We provide tools, resources, and a community to help creators monetize their work, take full ownership of their creations, and grow their brand.",
  },
  {
    question: "What does Melobanc Labs offer to creators?",
    answer:
      "We offer guidance in using blockchain and NFT technology, tools to mint and sell digital assets, and a supportive community for collaboration and growth. Our mission is to help creators unlock new revenue streams and thrive independently.",
  },
  {
    question: "What is web3, and how does it benefit creators?",
    answer:
      "Web3 is the next evolution of the internet, powered by blockchain technology. It gives creators ownership of their content, direct access to their audience, and the ability to monetize their work without intermediaries, unlike traditional web2 platforms.",
  },
  {
    question: "How can I get started with Melobanc Labs?",
    answer:
      "You can start by joining our community on platforms like Twitter and Telegram. From there, we provide step-by-step guidance on setting up digital wallets, minting NFTs, and engaging with the web3 ecosystem.",
  },
  {
    question: "What are NFTs, and how do they help creators?",
    answer:
      "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of a piece of content, such as music, art, or videos. They help creators protect their work, monetize it directly, and even earn royalties on future sales.",
  },
  {
    question: "Do I need technical knowledge to use Melobanc Labs?",
    answer:
      "Not at all! We’re here to simplify the process for you. Whether you’re new to web3 or experienced, we provide resources and support to help you navigate the space with ease.",
  },
  {
    question: "How can creators make money with Melobanc Labs?",
    answer:
      "Creators can monetize their work by minting NFTs, selling them directly to fans and collectors, earning royalties on secondary sales, and participating in web3 collaborations or partnerships.",
  },
  {
    question: "Who is Melobanc Labs for?",
    answer:
      "Melobanc Labs is for all types of creators—musicians, digital artists, animators, video editors, and anyone with a creative vision who wants to explore the opportunities of the web3 space.",
  },
  {
    question: "What makes Melobanc Labs different from other platforms?",
    answer:
      "Unlike traditional platforms that act as intermediaries and take a cut of creators’ earnings, Melobanc Labs is built on blockchain technology, allowing creators to retain full ownership and control of their work while directly connecting with their audience.",
  },
  {
    question: "What’s the long-term vision of Melobanc Labs?",
    answer:
      "Our vision is to revolutionize the creative economy by empowering creators to own their art, build sustainable careers, and thrive in a decentralized, community-driven ecosystem. We aim to make web3 accessible to creators worldwide and bridge the gap between creativity and technology.",
  },
];

const FAQPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion.Root type="multiple" className="space-y-4">
        {faqData.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className={clsx(
                  "w-full flex justify-between items-center px-4 py-2 text-lg font-medium",
                  "bg-gray-50 hover:bg-gray-100 focus:outline-none"
                )}
              >
                {faq.question}
                <ChevronDown
                  className="ml-2 transition-transform duration-200"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              className="px-4 py-2 text-gray-700 bg-white"
              data-state="collapsed"
            >
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQPage;
