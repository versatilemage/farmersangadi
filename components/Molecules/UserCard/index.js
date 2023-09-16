"use client";

import { userRoleexplaination } from "@/utils/rolecard";
import Link from "next/link";
import { useState } from "react";

const UserRoleCard = () => {
    
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="flex flex-row w-full max-w-[1400px] items-center justify-between gap-12">
      {userRoleexplaination.map((i, index) => {
        const { line1, line2, line3, role, link } = i;
        const isHovered = index === hoveredCard;
        return (
          <div
            className={`${i.role === "Producers" ? "bg-sellersbg" : "bg-buyersbg"} bg-no-repeat bg-center bg-cover p-20 w-1/2 h-72 rounded-lg gap-1 flex flex-col ${isHovered ? "contrast-75" : "contrast-100"} cursor-pointer`}
            key={role}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h1 className="text-5xl text-tertiary font-bold">{role}</h1>
            {isHovered ? (
              <>
                <p className="text-tertiary font-lightbold text-lg">{line1}</p>
                <p className="text-tertiary font-lightbold text-lg">{line2}</p>
                <Link
                  href={link}
                  className="bg-secondary text-tertiary w-fit p-3 rounded-sm duration-300 hover:bg-tertiary hover:text-secondary ease-in"
                >
                  {line3}
                </Link>
              </>
            ) : null}
          </div>
        );
      })}
    </section>
  );
};

export default UserRoleCard;
