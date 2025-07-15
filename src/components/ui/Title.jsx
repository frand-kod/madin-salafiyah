export default function Title({ children }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold text-primary relative inline-block">
        {children}
        <span className="block h-0.5 w-8 bg-emerald-600 mt-0.5 rounded" ></span>
      </h2>
    </div>
  );
}
