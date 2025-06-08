import dayjs from "dayjs";

export const getDayjsFromTime = (time: string) => {
   const splitTime = time.split(":");
   const preparedTime = dayjs()
      .set("hour", Number(splitTime[0]))
      .set("minute", Number(splitTime[1]));

   return preparedTime;
};
