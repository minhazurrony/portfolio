"use client";
import React from "react";
import { ContainerWrapper, Reveal, ScrollBottom, Title } from "@/components";
import { Input, Textarea } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z
    .string({ message: "Name is required." })
    .min(1, { message: "Name is required." }),
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Please enter valid email." }),
  message: z
    .string({ message: "Message is required." })
    .min(1, { message: "Message is required." }),
});

type FormData = z.infer<typeof schema>;

function Contact() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("======> form data", data);
  };

  return (
    <ContainerWrapper className="bg-bg-two p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Contact"
          subtitle="I am currently available for freelance / full-time work"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-32">
        <h2 className="inline-block rounded-br-[40px] rounded-tl-[40px] border-2 border-brand-one px-10 py-4 font-ubuntu text-xl capitalize text-brand-one lg:text-2xl">
          send me a message
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <Input
              name="name"
              label="Name"
              placeholder="Enter your name"
              control={control}
              error={errors.name}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Enter your email"
              control={control}
              error={errors.email}
            />
          </div>
          <div className="w-full">
            <Textarea
              name="message"
              label="Message"
              placeholder="Enter your message"
              control={control}
              error={errors.message}
            />
          </div>
          <Reveal>
            <button
              type="submit"
              className="rounded-full border-2 border-brand-one bg-bg-two px-6 py-2 font-ubuntu capitalize text-brand-one transition-all duration-300 ease-in hover:bg-brand-one hover:text-grey"
            >
              send message <PiPaperPlaneTiltBold className="ml-2 inline" />
            </button>
          </Reveal>
        </form>
      </div>
    </ContainerWrapper>
  );
}

export default Contact;
