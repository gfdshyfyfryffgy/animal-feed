import React, { useRef } from "react";
import CountUp from "react-countup";
import {
  FaSeedling,
  FaTruckLoading,
  FaSmile,
  FaTractor,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: <FaSeedling size={50} />,
    value: 440000,
    label: "Plus tons of exported commodity",
  },
  {
    icon: <FaTruckLoading size={50} />,
    value: 900000,
    label: "Plus tons annual domestic supply",
  },
  {
    icon: <FaSmile size={50} />,
    value: 5000,
    label: "Plus happy customers",
  },
  {
    icon: <FaTractor size={50} />,
    value: 12,
    label: "Plus years of experience",
  },
];

export default function StatsSection() {
  const { ref, inView, entry } = useInView({
    triggerOnce: false, // allow retrigger
    threshold: 0.3,
  });

  // We'll use entry?.timeStamp as a unique key to force remount on every inView
  // If not available, fallback to inView state for key (less smooth but works)
  const keyBase = entry?.timeStamp || inView;

  return (
    <section
      className="py-12"
      style={{
        background: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-[#3E3F5B] text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <div className="text-[#3E3F5B]">{stat.icon}</div>
            <h2 className="text-4xl font-extrabold">
              {inView ? (
                <CountUp
                  key={keyBase + '-' + i} // this restarts CountUp on every inView
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              ) : (
                0
              )}
            </h2>
            <p className="text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}