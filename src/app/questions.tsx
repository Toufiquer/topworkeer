/*
|-----------------------------------------
| setting up Questions for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

import Link from "next/link";

import Container from "@/components/common/container";
import SearchBar from "@/components/common/search-bar";
import FAQAccordion from "@/components/common/faq-accordion";
import Image from "next/image";

const allFAQ = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "You can place an order on our website by following these steps",
    answerList: [
      "Go to our website and create an account.",
      "Select the restaurant and dishes you want to order.",
      "Enter your delivery address and payment information.",
      "Review your order and submit it.",
    ],
  },
  {
    id: 2,
    question: "Is there a delivery fee?",
    answer:
      "Yes, there is a delivery fee for all orders. The delivery fee is calculated based on the distance from the restaurant to your delivery address.",
    answerList: [],
  },
  {
    question: "How long does it take to deliver my order?",
    answer:
      "The delivery time varies depending on the distance from the restaurant to your delivery address and the time of day. However, most orders are delivered within 30 minutes.",
    answerList: [],
    id: 3,
  },
  {
    question: "How can I track my order?",
    answer:
      "Once you have placed your order, you can track its status by logging into your account. You will be able to see the estimated delivery time and the location of your driver.",
    answerList: [],
    id: 4,
  },
  {
    question: "How do I pay for my order?",
    answer:
      "We accept a variety of payment methods, including credit cards, debit cards, and PayPal. You can choose your preferred payment method when you place your order.",
    answerList: [],
    id: 5,
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Our hours of operation vary depending on the restaurant. You can see the hours of operation for each restaurant on their page.",
    answerList: [],
    id: 6,
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by email or phone. Our contact information is available on our website.",
    answerList: [],
    id: 7,
  },
];

const Questions = () => {
  return (
    <div className="w-full py-12 flex flex-col bg-white">
      <p className="text-[#ff4904] text-uppercase font-extrabold text-5xl text-center pb-12">
        Have any Question?
      </p>
      <article className="w-full grid grid-cols-1 md:grid-cols-2">
        <section className="min-h-screen  bg-[#ecf2ff] p-10">
          <header>
            <h2 className="mb-6 text-[calc(1.33rem_+_.85vw)] font-[800]">
              FAQ
            </h2>
            <p className="mb-4 text-xl font-[700]">How can we help?</p>
            <p className="mb-4 text-xl font-[400]">
              Search for the topic you need help with or{" "}
              <Link className="text-blue-600" href="/">
                contact our support
              </Link>
            </p>
          </header>
          <SearchBar />
          <Container>
            <div className="h-12 w-full border-b" />
            {allFAQ.length > 0 &&
              allFAQ.map((curr) => <FAQAccordion data={curr} key={curr.id} />)}
          </Container>
        </section>
        <section className="w-full flex items-center justify-center h-full">
          {" "}
          <Image
            src="/faq.png"
            alt="Logo for the website"
            width={1200}
            height={1200}
            className="w-full h-full transition ease-in-out group-hover:scale-150 duration-700"
          />
        </section>
      </article>
    </div>
  );
};
export default Questions;
