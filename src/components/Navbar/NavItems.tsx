"use client";

// Libraries
import { useEffect, useRef, useState } from "react";

// Components
import { type Category, NavItem } from "./NavItem";

// Configs
import { PRODUCT_CATEGORIES } from "@/config";

// Hooks
import { useOnClickOutside } from "@/hooks";

const NavItems = () => {
  const [activeIdx, setActiveIdx] = useState<null | number>(null);

  // Refs
  const navBarRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navBarRef, () => setActiveIdx(null));

  const isAnyOpen = activeIdx !== null;

  const handleOpen = (idx: number) => {
    const activeIndex = activeIdx === idx ? null : idx;
    setActiveIdx(activeIndex);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIdx(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const renderCategoryList = () => {
    const content = PRODUCT_CATEGORIES.map((category: Category, i) => {
      const isOpen = i === activeIdx;

      return (
        <NavItem
          key={category.value}
          idx={i}
          category={category}
          isOpen={isOpen}
          isAnyOpen={isAnyOpen}
          onOpen={handleOpen}
        />
      );
    });

    return content;
  };

  return (
    <div ref={navBarRef} className="flex gap-4 h-full">
      {renderCategoryList()}
    </div>
  );
};

export { NavItems };
