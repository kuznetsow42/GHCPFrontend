export function Language({ lang }) {
  const colorSchemes = {
    Beginner: "bg-red-600",
    Intermediate: "bg-green-300",
    Advanced: "bg-green-600",
  };

  let readingColor = colorSchemes[lang.reading] || "bg-gray-400";
  let speakingColor = colorSchemes[lang.speaking] || "bg-gray-400";

  return (
    <article className="flex sm:flex-row flex-col items-center text-center justify-between rounded-lg border border-gray-100 bg-white p-6 gap-3">
      <div className="flex items-center gap-4">
          <img src={lang.icon} width={48} alt={lang.name} />
        <p className="text-2xl font-medium text-gray-900">{lang.name}</p>
      </div>
      <p>{lang.description}</p>
      <div className="flex flex-col gap-2 rounded p-1">
        Reading
        <div className="flex items-center bg-gray-500 text-white p-3 rounded-lg">
          <span className={`rounded-full w-6 h-6 ${readingColor}`}></span>
          <p className="ml-3">{lang.reading}</p>
        </div>
        Speaking
        <div className="flex items-center bg-gray-500 text-white p-3 rounded-lg">
          <span className={`rounded-full w-6 h-6 ${speakingColor}`}></span>
          <p className="ml-3">{lang.speaking}</p>
        </div>
      </div>
    </article>
  );
}
