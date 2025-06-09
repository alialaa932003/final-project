import React, { useEffect, useState } from "react";
import {
   Bar,
   BarChart,
   CartesianGrid,
   Cell,
   LabelList,
   XAxis,
   YAxis,
} from "recharts";
import {
   ChartConfig,
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/components/ui/chart";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Add this import for arrow icons
import { cn } from "@/lib/utils";

const CustomLabelListContent = (props: any) => {
   const { x, y, width, value, formatter, textLabel, maxIndex, index } = props;
   const formattedValue = formatter ? formatter(value) : value;

   if (maxIndex !== index) return;
   if (!formattedValue) return null;

   const displayText = textLabel
      ? `${formattedValue} ${textLabel}`
      : formattedValue;

   // Estimate text width (approximate calculation)
   const textWidth = displayText.length * 9; // ~9px per character
   const padding = 10; // 12px padding on each side

   return (
      <g>
         <rect
            x={x + width / 2 - (textWidth + padding) / 2}
            y={y - 47}
            width={textWidth + padding}
            height={45}
            rx={13}
            fill="#5a0ee7"
            strokeWidth={0}
         />
         <text
            x={x + width / 2}
            y={y - 24}
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight={500}
            fontSize={14}
            fill="white"
         >
            {displayText}
         </text>
      </g>
   );
};

interface DataItem {
   textLabel?: string;
   [key: string]: string | number | undefined;
}

interface BarChartProps<T extends DataItem> {
   className?: string;
   data: T[];
   title?: string;
   xAxisKey: keyof T;
   dataKey: keyof T;
   highlightMax?: boolean;
   primaryColor?: string;
   secondaryColor?: string;
   formatXAxis?: (value: string) => string;
   formatLabel?: (value: number) => string | number;
   itemsPerPage?: number;
}

const CustomBarChart = <T extends DataItem>({
   className,
   data,
   title = "Chart",
   xAxisKey,
   dataKey,
   highlightMax = true,
   primaryColor = "rgb(var(--primary-500))",
   secondaryColor = "rgb(var(--secondary-500))",
   formatXAxis = (value) => value.slice(0, 12),
   formatLabel = (value) => value,
   itemsPerPage = 12,
}: BarChartProps<T>) => {
   // Add state for pagination
   const [currentPage, setCurrentPage] = useState(0);
   const [paginatedData, setPaginatedData] = useState<T[]>([]);
   const [maxIndex, setMaxIndex] = useState<number>(0);

   // Calculate total pages
   const totalPages = Math.ceil(data.length / itemsPerPage);
   const needsPagination = data.length > itemsPerPage;

   useEffect(() => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentPageData = data.slice(startIndex, endIndex);
      setPaginatedData(currentPageData);

      // Find max value and its index in one pass
      if (currentPageData.length > 0) {
         let maxVal = Number(currentPageData[0][dataKey]);
         let maxIdx = 0;

         for (let i = 1; i < currentPageData.length; i++) {
            const value = Number(currentPageData[i][dataKey]);
            if (value > maxVal) {
               maxVal = value;
               maxIdx = i;
            }
         }

         setMaxIndex(maxIdx);
      }
   }, [currentPage, data, itemsPerPage, dataKey]);
   useEffect(() => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginatedData(data.slice(startIndex, endIndex));
   }, [currentPage, data, itemsPerPage]);

   // Handle pagination navigation
   const handlePrevPage = () => {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
   };

   const handleNextPage = () => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
   };

   const chartConfig = {
      [dataKey.toString()]: {
         label: dataKey.toString(),
         color: "hsl(var(--chart-1))",
      },
   } satisfies ChartConfig;

   return (
      <div className="flex h-full w-full flex-col">
         <div className="flex flex-wrap items-center justify-between gap-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
               {title}
            </h2>
            {needsPagination && (
               <div className="flex items-center gap-2">
                  <button
                     onClick={handlePrevPage}
                     disabled={currentPage === 0}
                     className={cn(
                        "rounded-full p-2 hover:bg-gray-100",
                        currentPage === 0
                           ? "cursor-not-allowed text-gray-300"
                           : "text-gray-600",
                     )}
                     aria-label="Previous page"
                  >
                     <ChevronLeft className="lang-ar:rotate-180" size={20} />
                  </button>
                  <span className="text-sm text-gray-500">
                     {currentPage + 1} / {totalPages}
                  </span>
                  <button
                     onClick={handleNextPage}
                     disabled={currentPage === totalPages - 1}
                     className={cn(
                        "rounded-full p-2 hover:bg-gray-100",
                        currentPage === totalPages - 1
                           ? "cursor-not-allowed text-gray-300"
                           : "text-gray-600",
                     )}
                     aria-label="Next page"
                  >
                     <ChevronRight className="lang-ar:rotate-180" size={20} />
                  </button>
               </div>
            )}
         </div>
         <div className="grid h-full w-full">
            <ChartContainer
               className={cn(
                  "h-full max-h-[30rem] min-h-[25rem] w-full",
                  className,
               )}
               config={chartConfig}
            >
               <BarChart
                  accessibilityLayer
                  data={paginatedData}
                  margin={{
                     top: 48,
                  }}
                  maxBarSize={55}
               >
                  <CartesianGrid vertical={false} />
                  <XAxis
                     dataKey={xAxisKey.toString()}
                     tickLine={false}
                     tickMargin={10}
                     axisLine={true}
                     tickFormatter={(value) => formatXAxis(value)}
                  />
                  <ChartTooltip
                     cursor={false}
                     content={<ChartTooltipContent />}
                  />
                  <YAxis
                     tickLine={false}
                     axisLine={true}
                     tickMargin={8}
                     tickCount={8}
                     stroke="rgba(var(--gray-300))"
                     style={{
                        direction: "ltr",
                     }}
                  />
                  <Bar
                     dataKey={dataKey.toString()}
                     fill={primaryColor}
                     radius={10}
                  >
                     {highlightMax &&
                        paginatedData.map((entry, index) => {
                           return (
                              <Cell
                                 key={`cell-${index}`}
                                 fill={
                                    Number(entry[dataKey]) ===
                                       paginatedData[maxIndex]?.value &&
                                    index === maxIndex
                                       ? primaryColor
                                       : secondaryColor
                                 }
                              />
                           );
                        })}
                     <LabelList
                        dataKey={dataKey.toString()}
                        position="top"
                        offset={8}
                        content={
                           <CustomLabelListContent
                              formatter={(value: number) =>
                                 highlightMax
                                    ? value === paginatedData[maxIndex]?.value
                                       ? formatLabel(value)
                                       : ""
                                    : formatLabel(value)
                              }
                              textLabel={
                                 data.find(
                                    (item) =>
                                       Number(item[dataKey]) ===
                                       paginatedData[maxIndex]?.value,
                                 )?.textLabel
                              }
                              maxIndex={maxIndex}
                           />
                        }
                     />
                  </Bar>
               </BarChart>
            </ChartContainer>
         </div>
      </div>
   );
};

export default CustomBarChart;
