"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Department, departments } from "data/departments";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface DepartmentCardProps {
  department: Department;
  open: number | undefined;
  setOpen: Dispatch<SetStateAction<number | undefined>>;
  index: number;
}

const DepartmentCard = ({
  department,
  open,
  setOpen,
  index,
}: DepartmentCardProps) => {
  return (
    <article>
      <div
        className="relative h-80 cursor-pointer overflow-hidden rounded shadow-md duration-500 hover:shadow-xl"
        onClick={() => {
          if (open === index) {
            setOpen(undefined);
          } else {
            setOpen(index);
          }
        }}
      >
        <Image
          src={department.image}
          alt={`image of ${department.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center rounded text-white backdrop-brightness-50">
          <FontAwesomeIcon icon={department.icon} size="4x" className="mb-4" />
          <h2 className="text-4xl font-bold">{department.name}</h2>
        </div>

        {open === index && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute flex h-full w-full items-center justify-center rounded p-8 text-center text-white backdrop-blur-md backdrop-brightness-50"
            >
              <p className="text-lg">{department.description}</p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </article>
  );
};

export const DepartmentList = () => {
  const [open, setOpen] = useState<number>();

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {departments?.map((department, index) => (
        <DepartmentCard
          key={department.name}
          department={department}
          index={index}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};
