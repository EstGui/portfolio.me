export default function ServiceCard({ title } : { title : string }) {
    return (
        <div className="border-border h-80 w-56 shrink-0 rounded-lg border bg-[#202020] shadow-xl transition p-6 relative">
            <h3 className="font-semibold text-xl text-muted">{title}</h3>
        </div>
    )
}