interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white sm:text-5xl tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}