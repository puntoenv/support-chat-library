import { FileWarningIcon } from "lucide-react";

export const NoContactSelected = () => {
  return (
    <div
      role="alert"
      className="flex items-center justify-center gap-3 bg-blue-50 border border-blue-300 text-blue-700 px-4 py-3 rounded-lg shadow-sm mx-2 mt-2"
    >
      <FileWarningIcon className="h-6 w-6" />
      <div>
        <p className="font-semibold">Atención</p>
        <p className="text-sm">
          Por favor, seleccione un cliente para iniciar una conversación.
        </p>
      </div>
    </div>
  );
};
