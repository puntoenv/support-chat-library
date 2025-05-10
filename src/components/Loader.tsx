interface LoaderProps {
  message?: string;
}

export const Loader: React.FC<LoaderProps> = ({ message = "Cargando..." }) => (
  <div
    className="flex flex-col items-center justify-center py-4 min-h-dvh"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2" />
    <span className="text-gray-700 text-sm font-medium">{message}</span>
  </div>
);
