import { useState } from "react";
import { Coach, Customer, LessonType } from "@/shared/types";
import { CustomerStep } from "./funnel/regularLesson/CustomerStep";
import { ScheduleStep } from "./funnel/regularLesson/ScheduleStep";
import { useFunnel } from '@use-funnel/browser';
import { AnimatePresence, motion } from "framer-motion";
import { Lesson } from "@/entities/lessonTicket/type";
import { Court } from "@/entities/court/type";
import { ScheduleType } from "@/shared/types/schedule";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {

}

const CustomerStepSchema = z.object({
  lessonType: z.nativeEnum(LessonType).optional(),
  customers: z.array(z.object({
    customer: z.custom<Customer>()
  })).optional(),
  lessonTicket: z.custom<Lesson>().optional(),
  scheduleType: z.nativeEnum(ScheduleType).optional(),
}).partial();

const ScheduleStepSchema = CustomerStepSchema.required({
  lessonType: true,
  lessonTicket: true,
  scheduleType: true,
})

export type CreateRegularLessonFunnelContext = {
  customerStep: {
    lessonType?: LessonType,
    customers?: {
      customer: Customer
    }[],
    lessonTicket?: Lesson,
    scheduleType?: ScheduleType
  },
  ScheduleStep: {
    lessonType?: LessonType,
    lessonTicket: Lesson,
    scheduleType: ScheduleType,
    customers: {
      customer: Customer,
      startDate?: string,
      endDate?: string,
      startTime?: string,
      endTime?: string,
      lessonTime?: string,
      coach?: Coach,
      court?: Court
    }[],
  }
}

export const CreateRegularLesson = ({ }: Props) => {

  const funnel = useFunnel({
    id: "regular-lesson-create-drawer",
    steps: {
      customerStep: { parse: CustomerStepSchema.parse },
      ScheduleStep: { parse: ScheduleStepSchema.parse }
    },
    initial: {
      step: "customerStep",
      context: {}
    }
  })

  const methods = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form className="relative h-full pt-3" onSubmit={methods.handleSubmit(handleFormSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            className="h-full"
            key={funnel.index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <funnel.Render
              customerStep={({ history }) => {
                return (
                  <CustomerStep handleNext={({ lessonType, customers, lessonTicket, scheduleType }) => {
                    history.push("ScheduleStep", {
                      lessonType,
                      customers,
                      lessonTicket,
                      scheduleType
                    })
                  }} />
                )
              }}
              ScheduleStep={({ history }) => {
                return (
                  <ScheduleStep
                    handleBack={() => history.back()}
                  />
                )
              }}
            />
          </motion.div>
        </AnimatePresence >
      </form >
    </FormProvider>
  );
};