import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import Button from "@components/ui/Button";

export const Waitlist = () => {
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);
  const schema = z.object({
    email: z.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((values) =>
    axios
      .post("/api/industry/waitlist", {
        data: { email: values.email as string },
      })
      .then(() => setJoinedWaitlist(true))
  );
  return (
    <div className="my-3 space-y-8 rounded-lg">
      {!joinedWaitlist && (
        <>
          <p>
            Sign up for our waitlist to be the first to know when applications
            open!
          </p>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form className="flex flex-col gap-2" onSubmit={onSubmit}>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-500 px-6 py-3"
              />
              {errors.email && <p className="text-red-500">Invalid email</p>}
            </div>
            <Button type="submit">Join waitlist</Button>
          </form>
        </>
      )}
      {!!joinedWaitlist && (
        <p className="">
          Successfully joined our waitlist. You&apos;ll hear from us!
        </p>
      )}
    </div>
  );
};
