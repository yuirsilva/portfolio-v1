"use client";

import { inter } from "@/font/font";
import { FC, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ClockProps {}

const Clock: FC<ClockProps> = ({}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isClient, setIsClient] = useState<boolean>(false);

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    setIsClient(true);

    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return isClient ? (
    <span
      className={cn(
        inter.className,
        "text-silent-foreground pointer-events-none absolute left-8 top-12 select-none text-xs tabular-nums md:fixed md:bottom-12 md:left-auto md:right-12 md:top-auto",
      )}
    >
      {date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "numeric",
        second: "numeric",
      })}
    </span>
  ) : (
    <Skeleton className="pointer-events-none absolute left-8 top-12 h-[16px] w-[75px] select-none rounded-full text-xs tabular-nums md:fixed md:bottom-12 md:left-auto md:right-12 md:top-auto" />
  );
};

export default Clock;
