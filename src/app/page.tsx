import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-6 sm:py-12">
        <Button className=" bg-green-600">Hello</Button>
      </div>
    </div>
  );
}
