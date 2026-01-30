type ServiceCardProps = { title: string };

export default function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div className="border-border relative h-80 w-56 shrink-0 rounded-lg border bg-[#202020] p-6 shadow-xl transition">
      <h3 className="text-muted text-xl font-semibold">{title}</h3>
    </div>
  );
}
