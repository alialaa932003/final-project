import { useEffect } from "react";

interface UseFetchNextPageProps {
   containerRef: React.RefObject<HTMLDivElement>;
   isFetchingNextPage: boolean;
   hasNextPage: boolean;
   fetchNextPage: () => void;
}
export default function useFetchNextPage({
   containerRef,
   isFetchingNextPage,
   hasNextPage,
   fetchNextPage,
}: UseFetchNextPageProps) {
   useEffect(() => {
      // infinite scroll
      const handleScroll = () => {
         if (containerRef?.current) {
            const { scrollTop, clientHeight, scrollHeight } =
               containerRef.current;
            if (
               scrollTop + clientHeight >= scrollHeight - 100 &&
               !isFetchingNextPage &&
               hasNextPage
            ) {
               fetchNextPage();
            }
         }
      };

      const element = containerRef?.current;

      // Add the scroll listener
      element?.addEventListener("scroll", handleScroll);

      return () => {
         // Clean up the scroll listener
         element?.removeEventListener("scroll", handleScroll);
      };
   }, [isFetchingNextPage, hasNextPage]);
}
