"use client";

import React, { useState, useEffect, useRef } from "react";
import { Startup } from "../data/e-lab-startups";
import Link from "next/link";
import Image from "next/image";

interface StartupListProps {
  startups: Startup[];
  maxHeight?: string; // Making maxHeight optional
}

type FilterOptions = Record<string, string[]>;

export default function StartupList({ startups, maxHeight }: StartupListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({});
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>(startups);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const checkboxesRef = useRef<Record<string, HTMLInputElement>>({});

  const filterCategories: (keyof Startup)[] = ["tag", "batch", "industry"];

  // Filter startups
  const filterOptions = startups.reduce(
    (acc, startup) => {
      filterCategories.forEach((category) => {
        if (
          startup[category] &&
          !acc[category]?.includes(startup[category] as string)
        ) {
          acc[category]?.push(startup[category] as string);
        }
      });
      return acc;
    },
    filterCategories.reduce(
      (acc, category) => ({ ...acc, [category]: [] as string[] }),
      {} as Record<string, string[]>,
    ),
  );

  useEffect(() => {
    const applyFilters = () => {
      const filtered = startups.filter((startup) => {
        const matchesSearchQuery = searchQuery
          ? startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          : true;

        const matchesFilters = Object.entries(selectedFilters).every(
          ([key, values]) => {
            if (!values.length) return true;
            return values.includes(startup[key as keyof Startup] as string);
          },
        );

        return matchesFilters && matchesSearchQuery;
      });
      setFilteredStartups(filtered);
    };

    applyFilters();
  }, [selectedFilters, searchQuery, startups]);

  const handleFilterChange = (
    category: string,
    value: string,
    isChecked: boolean,
  ) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      // Ensure the category array exists
      if (!updatedFilters[category]) {
        updatedFilters[category] = [];
      }

      if (isChecked) {
        updatedFilters[category].push(value);
      } else {
        updatedFilters[category] = updatedFilters[category].filter(
          (v) => v !== value,
        );
      }

      return updatedFilters;
    });
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setSearchQuery("");

    Object.values(checkboxesRef.current).forEach((checkbox) => {
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  };

  // Filter visibility for mobile view
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsFilterVisible(false);
    }
  };

  useEffect(() => {
    if (isFilterVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterVisible]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filter*/}
      <div
        className={`bg-opacity-75 fixed inset-0 z-50 flex ${isFilterVisible ? "block" : "hidden"} md:static md:block`}
      >
        <div
          ref={sidebarRef}
          className="flex max-w-60 flex-col rounded-sm bg-purple-950 p-4 shadow-lg md:static md:flex md:flex-col md:rounded-sm md:border md:border-white md:p-4"
        >
          <h4 className="mb-4 text-lg font-semibold">Filters</h4>
          {filterCategories.map((category) => (
            <div key={category} className="mb-4">
              <h5 className="mb-2 font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h5>
              {filterOptions[category]?.map((option) => (
                <div key={option} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    id={`${category}-${option}`}
                    name={`${category}-${option}`}
                    value={option}
                    ref={(el) => {
                      if (el)
                        checkboxesRef.current[`${category}-${option}`] = el;
                    }}
                    onChange={(e) =>
                      handleFilterChange(category, option, e.target.checked)
                    }
                    className="mr-2"
                  />
                  <label
                    htmlFor={`${category}-${option}`}
                    className="text-overflow-ellipsis overflow-hidden text-sm"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              onClick={resetFilters}
              className="mt-4 rounded-sm bg-purple-500 px-4 py-2 text-white"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className="mx-auto flex-1 p-4 pt-0"
        style={{ maxHeight: maxHeight, width: "100%", maxWidth: "1200" }}
      >
        {/* Filter Button for Mobile View */}
        <div className="mb-4 block w-full md:hidden">
          <button
            onClick={toggleFilterVisibility}
            className="w-full rounded-sm bg-purple-500 p-3"
          >
            Filter
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search startups..."
            className="w-full rounded-sm border px-4 py-2 text-black"
          />
        </div>
        <div
          className={`pr-4 ${maxHeight ? "scrollbar-hidden scrollbar-purple overflow-y-auto" : ""}`}
          style={{
            maxHeight: maxHeight ? `calc(${maxHeight} - 90px)` : "none",
          }}
        >
          {filteredStartups.map((startup) => (
            <Link key={startup.id} href={`/e-lab/startups/${startup.id}`}>
              <div className="mb-4 flex flex-col items-center rounded-lg border p-4 shadow-sm md:flex-row">
                <Image
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="mr-4 h-16 w-16 object-contain"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div>
                  <h5 className="text-md font-medium">{startup.name}</h5>
                  <p className="text-sm text-gray-300">{startup.description}</p>
                  <div className="flex flex-wrap">
                    <span className="tag mt-2 mr-2">{startup.batch}</span>
                    <span className="tag mt-2 mr-2">{startup.industry}</span>
                    <span className="tag mt-2 mr-2">{startup.tag}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
