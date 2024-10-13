'use client';
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import Carousel from "@/Components/Corousel";
import Card from "@/Components/card";
import image1 from "../lib/pizza.jpg";
import image2 from "../lib/pizza2.jpg";
import image3 from "../lib/fries.jpg";
import image4 from "../lib/chow.jpg";
import image5 from "../lib/berger.jpg";
import { useRouter } from "next/navigation";
import Section from "@/Components/Section";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Section>
        <Carousel />
      </Section>

      <Section customStyle={'bg-amber-100'}>
        <h2 className="text-3xl font-bold flex-initial w-full pb-5">
          Hot & Spicy ....
        </h2>

        <div className="mt-6 mx-auto w-full">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card
                imageSrc={image1}
                title="Delicious Pizza"
                description="A tasty pizza with fresh ingredients."
                link="/pizza"
              />
              <Card
                imageSrc={image2}
                title="Delicious Burger"
                description="A tasty burger with fresh ingredients."
                link="/burger"
              />
              <Card
                imageSrc={image3}
                title="Tasty French Fries"
                description="Tasty french fries with fresh ingredients."
                link="/fries"
              />
              <Card
                imageSrc={image4}
                title="Delicious Chowmein"
                description="A tasty chowmein made with fresh ingredients."
                link="/chowmein"
              />
              <Card
                imageSrc={image5}
                title="Delicious Burger"
                description="A tasty burger with fresh ingredients."
                link="/burger"
              />
            </div>
          </div>
      </Section>
      <Footer />
    </main>
  );
}
