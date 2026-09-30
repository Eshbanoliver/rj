import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "12+",
      label: "Years Experience",
    },
    {
      value: "97%",
      label: "Retention Rate",
    },
    {
      value: "8k",
      label: "Tours Completed",
    },
    {
      value: "19k",
      label: "Satisfied Clients",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Circular Dashed Ring matching reference */}
              <div className="circle-dashed-stat shadow-sm group-hover:shadow-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#113d48] font-heading group-hover:text-[#1ca8cb] transition-colors">
                  {item.value}
                </span>
              </div>

              {/* Title below circle */}
              <h3 className="mt-4 text-sm sm:text-base font-bold text-slate-700 font-heading">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
