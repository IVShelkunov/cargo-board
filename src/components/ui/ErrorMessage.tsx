import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";
import ReloadRow from "../icons/ReloadRow";

interface ErrorMessageProps {
  action: (options?: RefetchOptions | undefined) => Promise<
    QueryObserverResult<
      NoInfer<
        {
          clientId: string;
          status: "new" | "in_transit" | "delivered";
          weight: number;
          destination: string;
          id: string;
        }[]
      >,
      Error
    >
  >;
}
export function ErrorMessage({ action }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-red-500">Loading error</p>
      <button
        className="bg-sky-900 hover:bg-sky-800 text-white flex items-center justify-center gap-1 p-2 rounded-2xl cursor-pointer"
        onClick={() => action()}
      >
        Retry
        <ReloadRow className="w-5 h-5" />
      </button>
    </div>
  );
}
